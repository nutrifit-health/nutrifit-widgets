import { NUTRIENTS } from './constants';
import type { CalculationResult, FoodOption } from './types';

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function finiteValue(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0 ? value : null;
}

/** Переводит прошедшие контрактную проверку данные в ограниченную UI-модель. */
export function adaptSearch(value: unknown, category: FoodOption['category']): FoodOption[] {
  if (!isRecord(value) || !Array.isArray(value.items)) throw new Error('NUTRIFIT_INVALID_SEARCH');
  return value.items.map((item: unknown) => {
    if (!isRecord(item) || typeof item.id !== 'string' || !item.id ||
        typeof item.name !== 'string' || !item.name) throw new Error('NUTRIFIT_INVALID_ITEM');
    return { reference: item.id, label: item.name, category };
  });
}

export function adaptCalculation(value: unknown): CalculationResult {
  if (!isRecord(value) || !isRecord(value.calculation)) throw new Error('NUTRIFIT_INVALID_RESULT');
  const calculation = value.calculation;
  if (!isRecord(calculation.knownTotals) || !isRecord(calculation.missingByNutrient) ||
      typeof calculation.capturedAt !== 'string' || !Number.isFinite(Date.parse(calculation.capturedAt)) ||
      !['complete', 'partial', 'unknown'].includes(String(calculation.status))) {
    throw new Error('NUTRIFIT_INVALID_RESULT');
  }
  const totals = calculation.knownTotals;
  const missing = calculation.missingByNutrient;
  const per100g = isRecord(value.nutritionPer100g) ? value.nutritionPer100g : {};
  const outputWeight = finiteValue(value.yieldGrams);
  if (outputWeight === null || outputWeight <= 0) throw new Error('NUTRIFIT_INVALID_YIELD');
  const metrics = NUTRIENTS.map((key) => {
    const missingInputs = missing[key];
    if (missingInputs !== undefined && (!Array.isArray(missingInputs) ||
        !missingInputs.every((index: unknown) => typeof index === 'number' && Number.isInteger(index) && index >= 0))) {
      throw new Error('NUTRIFIT_INVALID_COMPLETENESS');
    }
    const total = finiteValue(totals[key]);
    return { key, total, per100g: finiteValue(per100g[key]),
      incomplete: total === null || (Array.isArray(missingInputs) && missingInputs.length > 0) };
  });
  return {
    outputWeight, metrics, checkedAt: calculation.capturedAt,
    completeness: calculation.status === 'complete' ? 'complete' : calculation.status === 'partial' ? 'partial' : 'unknown',
  };
}
