# Довідкові орієнтири EPA та DHA

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/omega-3.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/omega-3.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/omega-3.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/omega-3.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/omega-3.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/omega-3.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`omega-3` · [NutriFit](https://nutrifit.health/uk/calculators/omega-3)

AI EFSA для дорослих — 250 мг EPA+DHA на добу з їжі та добавок разом. Під час вагітності й лактації додатково до цієї кількості вказано 100–200 мг DHA на добу. Це не фіксоване співвідношення EPA:DHA і не маса всього риб’ячого жиру.

### Порядок використання

1. Введіть дані: AI EFSA для дорослих — 250 мг EPA+DHA на добу з їжі та добавок разом. Під час вагітності й лактації додатково до цієї кількості вказано 100–200 мг DHA на добу. Це не фіксоване співвідношення EPA:DHA і не маса всього риб’ячого жиру.
2. Порівняйте орієнтири: AI EFSA для дорослих — 250 мг EPA+DHA на добу з їжі та добавок разом. Під час вагітності й лактації додатково до цієї кількості вказано 100–200 мг DHA на добу. Це не фіксоване співвідношення EPA:DHA і не маса всього риб’ячого жиру.
3. Врахуйте обмеження: Орієнтир не означає обов’язковий прийом добавки й не замінює оцінку раціону. Форма не призначає лікування гіпертригліцеридемії чи депресії та не діагностує дефіцит за омега-3 індексом. Ліки, взаємодії та індивідуальні дози обговорюють із лікарем.

### Методика і формула

AI EFSA для дорослих — 250 мг EPA+DHA на добу з їжі та добавок разом. Під час вагітності й лактації додатково до цієї кількості вказано 100–200 мг DHA на добу. Це не фіксоване співвідношення EPA:DHA і не маса всього риб’ячого жиру.

AI EFSA для дорослих — 250 мг EPA+DHA на добу з їжі та добавок разом. Під час вагітності й лактації додатково до цієї кількості вказано 100–200 мг DHA на добу. Це не фіксоване співвідношення EPA:DHA і не маса всього риб’ячого жиру.

### Обмеження

Орієнтир не означає обов’язковий прийом добавки й не замінює оцінку раціону. Форма не призначає лікування гіпертригліцеридемії чи депресії та не діагностує дефіцит за омега-3 індексом. Ліки, взаємодії та індивідуальні дози обговорюють із лікарем.

### Джерела

- [EFSA. Dietary Reference Values summary, 2017, Table 2](https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="omega-3" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="omega-3" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/omega-3?lang=uk&theme=auto"
  title="Довідкові орієнтири EPA та DHA" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
