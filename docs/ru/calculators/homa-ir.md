# Калькулятор HOMA-IR: индекс инсулинорезистентности

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/homa-ir.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/homa-ir.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/homa-ir.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/homa-ir.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/homa-ir.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/homa-ir.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`homa-ir` · [NutriFit](https://nutrifit.health/ru/calculators/homa-ir)

Индексы HOMA-IR, HOMA-β и QUICKI по глюкозе и инсулину натощак: оценка инсулинорезистентности и функции β-клеток с нормами и интерпретацией.

### Порядок использования

1. Введите исходные данные: HOMA1 (Matthews, 1985) и QUICKI (Katz, 2000) — модели по глюкозе и инсулину натощак. Они описывают разные стороны одного набора данных и применяются прежде всего в исследованиях. HOMA-IR оценивает инсулинорезистентность, HOMA-β — секрецию инсулина в рамках модели, QUICKI — чувствительность к инсулину. Индексы не заменяют диагностику диабета по клиническим критериям.
2. Уточните параметры: HOMA-IR = Глюкоза (ммоль/л) × Инсулин (мкЕд/мл) / 22,5
HOMA-β (%) = 20 × Инсулин (мкЕд/мл) / (Глюкоза (ммоль/л) − 3,5)
QUICKI = 1 / [log10(Инсулин, мкЕд/мл) + log10(Глюкоза, мг/дл)]
3. Прочитайте результат: Индексы валидны только для образцов натощак (8–12 ч) и не применимы при инсулинотерапии, приёме секретагогов, декомпенсированном диабете 1 типа и низкой глюкозе (HOMA-β не определён при глюкозе ≤ 3,5 ммоль/л). Референсные значения инсулина зависят от метода лаборатории, а пороги HOMA-IR — от популяции (2,0–3,8 в разных исследованиях). Результат — не диагноз, а повод обсудить углеводный обмен с врачом.

### Методика и формула

HOMA1 (Matthews, 1985) и QUICKI (Katz, 2000) — модели по глюкозе и инсулину натощак. Они описывают разные стороны одного набора данных и применяются прежде всего в исследованиях. HOMA-IR оценивает инсулинорезистентность, HOMA-β — секрецию инсулина в рамках модели, QUICKI — чувствительность к инсулину. Индексы не заменяют диагностику диабета по клиническим критериям.

HOMA-IR = Глюкоза (ммоль/л) × Инсулин (мкЕд/мл) / 22,5
HOMA-β (%) = 20 × Инсулин (мкЕд/мл) / (Глюкоза (ммоль/л) − 3,5)
QUICKI = 1 / [log10(Инсулин, мкЕд/мл) + log10(Глюкоза, мг/дл)]

### Ограничения

Индексы валидны только для образцов натощак (8–12 ч) и не применимы при инсулинотерапии, приёме секретагогов, декомпенсированном диабете 1 типа и низкой глюкозе (HOMA-β не определён при глюкозе ≤ 3,5 ммоль/л). Референсные значения инсулина зависят от метода лаборатории, а пороги HOMA-IR — от популяции (2,0–3,8 в разных исследованиях). Результат — не диагноз, а повод обсудить углеводный обмен с врачом.

### Источники

- [Matthews DR et al. Homeostasis model assessment: insulin resistance and beta-cell function from fasting plasma glucose and insulin concentrations in man. Diabetologia, 1985](https://pubmed.ncbi.nlm.nih.gov/3899825/)
- [Katz A et al. Quantitative insulin sensitivity check index: a simple, accurate method for assessing insulin sensitivity in humans. J Clin Endocrinol Metab, 2000](https://pubmed.ncbi.nlm.nih.gov/10902785/)
- [Gayoso-Diz P et al. Insulin resistance (HOMA-IR) cut-off values and the metabolic syndrome in a general adult population: effect of gender and age: EPIRCE cross-sectional study. BMC Endocr Disord, 2013](https://pubmed.ncbi.nlm.nih.gov/24131857/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="homa-ir" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="homa-ir" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/homa-ir?lang=ru&theme=auto"
  title="Калькулятор HOMA-IR: индекс инсулинорезистентности" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
