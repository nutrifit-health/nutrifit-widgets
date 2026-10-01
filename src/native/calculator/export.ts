import type { CalculationResult } from './types';

/** Экспорт происходит в браузере и не требует перехода или регистрации. */
export function downloadNutritionCsv(result: CalculationResult, brandName?: string) {
  const rows = [
    ['nutrient', 'unit', 'whole_dish', 'per_100g', 'completeness', 'dish_weight_g', 'calculated_at', 'source'],
    ...result.metrics.map((metric) => [
      metric.key, metric.key === 'calories' ? 'kcal' : 'g',
      metric.total === null ? '' : String(metric.total),
      metric.per100g === null ? '' : String(metric.per100g),
      metric.incomplete ? 'partial_or_unknown' : 'complete',
      String(result.outputWeight), result.checkedAt, brandName ?? 'NutriFit public catalog and recipes',
    ]),
  ];
  const csv = rows.map((row) => row.map((cell) => '"' + cell.replace(/"/g, '""') + '"').join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url; link.download = brandName ? 'nutrition.csv' : 'nutrifit-nutrition.csv';
  document.body.appendChild(link); link.click(); link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
