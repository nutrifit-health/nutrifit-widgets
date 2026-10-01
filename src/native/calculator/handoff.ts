import { HOST_URL, MAX_INGREDIENTS } from './constants';
import { isRecord } from './adapters';
import { canCalculateDraft, isPositiveWeight } from './validation';
import type { CalculatorDraft, Ingredient, WidgetLocale } from './types';

const HANDOFF_PREFIX = '#nutrifit=';
const MAX_HANDOFF_LENGTH = 50000;

export function sourceHostname(origin: string): string {
  try { return new URL(origin).hostname.slice(0, 253); } catch { return ''; }
}

/** Только явный переход переносит черновик; fragment не отправляется HTTP-серверу. */
export function buildContinueUrl(draft: CalculatorDraft, locale: WidgetLocale, sourceSite = '', campaign = ''): string | null {
  if (!canCalculateDraft(draft)) return null;
  const url = new URL('/tools/nutrition-calculator', HOST_URL);
  url.searchParams.set('lang', locale);
  url.searchParams.set('utm_source', 'nutrifit_widget');
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', campaign.slice(0, 80) || 'nutrition_calculator');
  if (sourceSite) url.searchParams.set('utm_content', sourceHostname('https://' + sourceSite));
  const transferable = {
    version: 1, outputWeight: String(Number(draft.outputWeight)),
    items: draft.items.map(({ reference, category, label, weight }) => ({ reference, category, label, weight: String(Number(weight)) })),
  };
  url.hash = 'nutrifit=' + encodeURIComponent(JSON.stringify(transferable));
  return url.hash.length <= MAX_HANDOFF_LENGTH ? url.href : null;
}

export function parseHandoff(hash: string): CalculatorDraft | null {
  if (!hash.startsWith(HANDOFF_PREFIX) || hash.length > MAX_HANDOFF_LENGTH) return null;
  try {
    const value: unknown = JSON.parse(decodeURIComponent(hash.slice(HANDOFF_PREFIX.length)));
    if (!isRecord(value) || value.version !== 1 || !Array.isArray(value.items) ||
        value.items.length < 1 || value.items.length > MAX_INGREDIENTS ||
        typeof value.outputWeight !== 'string' || value.outputWeight.length > 32) return null;
    if (!isPositiveWeight(value.outputWeight)) return null;
    const items = value.items.map<Ingredient>((item: unknown, index) => {
      if (!isRecord(item) || (item.category !== 'food' && item.category !== 'recipe') ||
          typeof item.reference !== 'string' || !item.reference || item.reference.length > MAX_HANDOFF_LENGTH ||
          typeof item.label !== 'string' || !item.label || item.label.length > MAX_HANDOFF_LENGTH ||
          typeof item.weight !== 'string' || item.weight.length > 32 ||
          !isPositiveWeight(item.weight)) throw new Error('NUTRIFIT_INVALID_HANDOFF');
      return { reference: item.reference, category: item.category, label: item.label, weight: item.weight,
        rowId: 'handoff-' + index };
    });
    return { items, outputWeight: value.outputWeight };
  } catch { return null; }
}
