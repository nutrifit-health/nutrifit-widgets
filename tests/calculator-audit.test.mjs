import assert from 'node:assert/strict';
import { test } from 'node:test';
import { build } from 'esbuild';
import { widgets } from '../src/core/registry.js';
import { readFile } from 'node:fs/promises';

const bundle = await build({
  stdin: { contents: "export { adaptCalculation } from './src/native/calculator/adapters.ts'; export { translations } from './src/native/calculator/i18n.ts';", resolveDir: process.cwd() },
  bundle: true, write: false, format: 'esm', platform: 'node',
});
const { adaptCalculation, translations } = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
function calculation(totals, per100g, missing = {}) {
  return { yieldGrams: 100, nutritionPer100g: per100g, calculation: {
    capturedAt: '2026-10-03T00:00:00Z', status: 'complete', knownTotals: totals, missingByNutrient: missing,
  } };
}

test('сохраняет известные нули и отмечает неизвестные нутриенты без подстановки нуля', () => {
  const result = adaptCalculation(calculation({ calories: 0, protein: 0 }, { calories: 0, protein: 0 }));
  assert.equal(result.metrics[0].total, 0);
  assert.equal(result.metrics[0].incomplete, false);
  assert.equal(result.metrics[2].total, null);
  assert.equal(result.metrics[2].incomplete, true);
  assert.equal(result.completeness, 'partial');
  assert.equal(adaptCalculation(calculation({}, {})).completeness, 'unknown');
});

test('отмечает отсутствующее значение на 100 г и частичный вклад ингредиентов', () => {
  const totals = { calories: 100, protein: 10, fat: 5, carbs: 5 };
  const missing = adaptCalculation(calculation(totals, { ...totals, calories: undefined }));
  assert.equal(missing.metrics[0].per100g, null);
  assert.equal(missing.metrics[0].incomplete, true);
  assert.equal(missing.completeness, 'partial');
  const partial = adaptCalculation(calculation(totals, totals, { protein: [1] }));
  assert.equal(partial.metrics[1].total, 10);
  assert.equal(partial.metrics[1].incomplete, true);
});

test('согласует названия iframe с инструкциями на всех шести языках', async () => {
  for (const [slug, widget] of Object.entries(widgets)) {
    if (slug === 'nutrition') continue;
    for (const lang of ['en', 'ru', 'es', 'uk', 'kk', 'uz']) {
      const doc = await readFile(new URL(`../docs/${lang}/calculators/${slug}.md`, import.meta.url), 'utf8');
      assert.equal(widget.titles[lang], 'NutriFit — ' + doc.split('\n')[0].slice(2), `${slug}:${lang}`);
    }
  }
});

test('задаёт единицы и ограничение модели блюда на всех шести языках', () => {
  for (const lang of ['en', 'ru', 'es', 'uk', 'kk', 'uz']) {
    assert.ok(translations[lang].unitEnergy);
    assert.ok(translations[lang].unitMass);
    assert.ok(translations[lang].outputHint.length > 100);
  }
  assert.equal(translations.ru.unitEnergy, 'ккал');
});
