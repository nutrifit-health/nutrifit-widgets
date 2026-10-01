import { NutriFitApiError } from '../errors';
import { MAX_INGREDIENTS } from './constants';
import type { CalculatorDraft, WidgetTranslations } from './types';

export function isPositiveWeight(value: string): boolean {
  const number = Number(value);
  return Number.isFinite(number) && number > 0;
}

export function canCalculateDraft(draft: CalculatorDraft): boolean {
  return draft.items.length > 0 && draft.items.length <= MAX_INGREDIENTS &&
    isPositiveWeight(draft.outputWeight) && draft.items.every((item) => isPositiveWeight(item.weight));
}

export function calculationErrorText(error: Error, t: WidgetTranslations): string {
  return error instanceof NutriFitApiError && error.status === 429 ? t.limited : t.error;
}
