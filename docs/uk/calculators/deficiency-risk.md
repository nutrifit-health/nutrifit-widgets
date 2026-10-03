# Чек-лист харчування та способу життя

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/deficiency-risk.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/deficiency-risk.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`deficiency-risk` · [NutriFit](https://nutrifit.health/uk/calculators/deficiency-risk)

Авторський довідковий чек-лист: позначте поточні особливості харчування та способу життя й перегляньте пов’язані теми нутрієнтів.

### Порядок використання

1. Введіть вихідні дані: Зв’язки факторів і нутрієнтів — довідкові теми для обговорення. NIH ODS та EFSA містять відомості про харчування й групи ризику, але не задають балів або ймовірності дефіциту для цієї анкети.
2. Уточніть параметри: Авторський довідковий чек-лист: позначте поточні особливості харчування та способу життя й перегляньте пов’язані теми нутрієнтів.
3. Прочитайте результат: Чек-лист не враховує фактичне споживання та засвоєння, збагачені продукти, добавки й захворювання. Він не підтверджує й не виключає дефіциту; аналізи та потреба в корекції визначаються індивідуально.

### Методика і формула

Зв’язки факторів і нутрієнтів — довідкові теми для обговорення. NIH ODS та EFSA містять відомості про харчування й групи ризику, але не задають балів або ймовірності дефіциту для цієї анкети.

Бали й категорії ризику не розраховуються. Показуються лише позначені фактори та пов’язані нутрієнти.

### Обмеження

Чек-лист не враховує фактичне споживання та засвоєння, збагачені продукти, добавки й захворювання. Він не підтверджує й не виключає дефіциту; аналізи та потреба в корекції визначаються індивідуально.

### Джерела

- [NIH Office of Dietary Supplements. Dietary Supplement Fact Sheets (группы риска по нутриентам)](https://ods.od.nih.gov/factsheets/list-all/)
- [EFSA. Dietary Reference Values for the EU (DRV Finder)](https://multimedia.efsa.europa.eu/drvs/index.htm)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="deficiency-risk" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="deficiency-risk" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/deficiency-risk?lang=uk&theme=auto"
  title="Чек-лист харчування та способу життя" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
