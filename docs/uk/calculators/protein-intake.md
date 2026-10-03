# Довідкові орієнтири білка

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/protein-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/protein-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`protein-intake` · [NutriFit](https://nutrifit.health/uk/calculators/protein-intake)

Для здорових дорослих EFSA PRI — 0,83 г/кг/добу. Для здорових людей, що тренуються, ISSN наводить 1,4–2,0 г/кг/добу; ESPEN для здорових літніх людей — 1,0–1,2. Кількість розраховано за введеною фактичною масою тіла. Діапазон не є верхньою межею безпеки.

### Порядок використання

1. Введіть дані: Для здорових дорослих EFSA PRI — 0,83 г/кг/добу. Для здорових людей, що тренуються, ISSN наводить 1,4–2,0 г/кг/добу; ESPEN для здорових літніх людей — 1,0–1,2. Кількість розраховано за введеною фактичною масою тіла. Діапазон не є верхньою межею безпеки.
2. Порівняйте орієнтири: Для здорових дорослих EFSA PRI — 0,83 г/кг/добу. Для здорових людей, що тренуються, ISSN наводить 1,4–2,0 г/кг/добу; ESPEN для здорових літніх людей — 1,0–1,2. Кількість розраховано за введеною фактичною масою тіла. Діапазон не є верхньою межею безпеки.
3. Врахуйте обмеження: Це популяційні орієнтири, а не індивідуальна оптимальна доза. Форма не призначає харчування при хворобі нирок, вагітності, захворюванні, недостатньому харчуванні або значному надлишку маси. У цих випадках потрібен індивідуальний вибір розрахункової маси та норми.

### Методика і формула

Для здорових дорослих EFSA PRI — 0,83 г/кг/добу. Для здорових людей, що тренуються, ISSN наводить 1,4–2,0 г/кг/добу; ESPEN для здорових літніх людей — 1,0–1,2. Кількість розраховано за введеною фактичною масою тіла. Діапазон не є верхньою межею безпеки.

Для здорових дорослих EFSA PRI — 0,83 г/кг/добу. Для здорових людей, що тренуються, ISSN наводить 1,4–2,0 г/кг/добу; ESPEN для здорових літніх людей — 1,0–1,2. Кількість розраховано за введеною фактичною масою тіла. Діапазон не є верхньою межею безпеки.

### Обмеження

Це популяційні орієнтири, а не індивідуальна оптимальна доза. Форма не призначає харчування при хворобі нирок, вагітності, захворюванні, недостатньому харчуванні або значному надлишку маси. У цих випадках потрібен індивідуальний вибір розрахункової маси та норми.

### Джерела

- [EFSA. Population reference intakes for protein, 2012](https://www.efsa.europa.eu/en/press/news/120209)
- [ISSN. Protein and exercise, 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/)
- [ESPEN Expert Group. Protein intake and exercise with aging, 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4208946/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="protein-intake" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="protein-intake" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/protein-intake?lang=uk&theme=auto"
  title="Довідкові орієнтири білка" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
