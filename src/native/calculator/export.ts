import type { CalculationResult, WidgetLocale } from './types';
import { translations } from './i18n';

const columnLabels = {
  en: { nutrient: 'Nutrient', unit: 'Unit', status: 'Completeness', complete: 'Complete' },
  ru: { nutrient: 'Нутриент', unit: 'Единица', status: 'Полнота данных', complete: 'Полные данные' },
  es: { nutrient: 'Nutriente', unit: 'Unidad', status: 'Integridad', complete: 'Completo' },
  uk: { nutrient: 'Нутрієнт', unit: 'Одиниця', status: 'Повнота даних', complete: 'Повні дані' },
  kk: { nutrient: 'Нутриент', unit: 'Өлшем бірлігі', status: 'Деректер толықтығы', complete: 'Толық деректер' },
  uz: { nutrient: 'Nutrient', unit: 'Birlik', status: 'Ma’lumot to‘liqligi', complete: 'To‘liq ma’lumotlar' },
};

/** Локализованный экспорт не требует перехода, регистрации или сетевого запроса. */
export function downloadNutritionCsv(result: CalculationResult, brandName?: string, locale: WidgetLocale = 'en') {
  const t = translations[locale];
  const columns = columnLabels[locale];
  const rows = [
    [columns.nutrient, columns.unit, t.total, t.per100g, columns.status, t.output, t.checked, t.source],
    ...result.metrics.map((metric) => [
      t[metric.key], metric.key === 'calories' ? t.unitEnergy : t.unitMass,
      metric.total === null ? '' : String(metric.total),
      metric.per100g === null ? '' : String(metric.per100g),
      metric.incomplete ? t.missing : columns.complete,
      String(result.outputWeight), result.checkedAt, brandName ?? t.source,
    ]),
  ];
  const csv = rows.map((row) => row.map((cell) => '"' + cell.replace(/"/g, '""') + '"').join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = brandName ? 'nutrition.csv' : 'nutrifit-nutrition.csv';
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
