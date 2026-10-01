import { normalizeOrigin } from '../core/options.js';
import { adaptCalculation, adaptSearch, isRecord } from './calculator/adapters';
import { NutriFitApiError } from './errors';
import type { CalculatorClient, Ingredient } from './calculator/types';
import type { NativeNutritionCalculatorProps, NativeSessionState } from './types';

function payload(items: Ingredient[], yieldGrams: number) {
  return { yieldGrams, requestedNutrients: ['calories', 'protein', 'fat', 'carbs'],
    components: items.map(item => item.category === 'food' ? { kind: 'food', foodId: item.reference, grams: Number(item.weight) }
      : { kind: 'recipe', recipeIdOrSlug: item.reference, grams: Number(item.weight) }) };
}
function unwrap(value: unknown) {
  if (!isRecord(value) || value.ok !== true) throw new Error('NUTRIFIT_INVALID_ENVELOPE');
  return value.data;
}
/** Public SDK принимает неизвестный transport payload и выводит только UI-проекцию. */
export function createNativeClient(apiOrigin: string, getSession: NativeNutritionCalculatorProps['getSession'], onSession: (session: NativeSessionState) => void) {
  const origin = normalizeOrigin(apiOrigin);
  let session: NativeSessionState | null = null;
  let pending: Promise<NativeSessionState> | null = null;
  async function connect(signal: AbortSignal): Promise<NativeSessionState> {
    if (!session || session.expiresAt <= Date.now() + 15_000) {
      if (!pending) pending = getSession(AbortSignal.timeout(10_000)).then(value => {
        const data = unwrap(value);
        if (!isRecord(data) || typeof data.token !== 'string' || !/^[a-zA-Z0-9_-]{43}$/.test(data.token) ||
          typeof data.expiresAt !== 'string' || !Number.isFinite(Date.parse(data.expiresAt)) ||
          Date.parse(data.expiresAt) <= Date.now() ||
          (data.brandName !== null && typeof data.brandName !== 'string')) throw new Error('NUTRIFIT_INVALID_SESSION');
        session = { token: data.token, expiresAt: Date.parse(data.expiresAt), brandName: data.brandName };
        return session;
      }).finally(() => { pending = null; });
      session = await pending;
    }
    if (signal.aborted) throw new DOMException('Aborted', 'AbortError');
    onSession(session); return session;
  }
  async function request(path: string, body: unknown, locale: string, signal: AbortSignal) {
    const authorized = await connect(signal);
    const response = await fetch(origin + '/api/v2/widget-runtime/' + path, { method: 'POST', credentials: 'omit', cache: 'no-store', signal,
      headers: { 'X-NutriFit-Widget-Session': authorized.token, 'Content-Type': 'application/json', 'Accept-Language': locale }, body: JSON.stringify(body) });
    if (!response.ok) {
      if (response.status === 403) session = null;
      throw new NutriFitApiError(response.status, response.headers.get('Retry-After'));
    }
    return response;
  }
  const client: CalculatorClient = {
    async search(query, locale, signal) {
      const data = unwrap(await (await request('search', { q: query }, locale, signal)).json());
      if (!isRecord(data)) throw new Error('NUTRIFIT_INVALID_SEARCH');
      return [...adaptSearch(data.foods, 'food'), ...adaptSearch(data.recipes, 'recipe')];
    },
    async calculate(items, weight, locale, signal) {
      return adaptCalculation(unwrap(await (await request('calculate', payload(items, weight), locale, signal)).json()));
    },
    async downloadPdf(items, weight, locale, signal) {
      const response = await request('report.pdf', payload(items, weight), locale, signal);
      if (!response.headers.get('Content-Type')?.startsWith('application/pdf')) throw new Error('NUTRIFIT_INVALID_PDF');
      return response.blob();
    },
  };
  return { client, connect };
}
