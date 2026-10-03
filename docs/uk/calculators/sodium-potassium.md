# Натрій і калій у добовому раціоні

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sodium-potassium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sodium-potassium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`sodium-potassium` · [NutriFit](https://nutrifit.health/uk/calculators/sodium-potassium)

Для дорослих WHO рекомендує менш ніж 2000 мг натрію і щонайменше 3510 мг калію на добу. Молярне співвідношення: (Na, мг / 23) / (K, мг / 39,1). Приблизний сольовий еквівалент: натрій, мг × 2,5 / 1000. Співвідношення показано без категорії індивідуального ризику.

### Порядок використання

1. Введіть дані: Для дорослих WHO рекомендує менш ніж 2000 мг натрію і щонайменше 3510 мг калію на добу. Молярне співвідношення: (Na, мг / 23) / (K, мг / 39,1). Приблизний сольовий еквівалент: натрій, мг × 2,5 / 1000. Співвідношення показано без категорії індивідуального ризику.
2. Порівняйте орієнтири: Для дорослих WHO рекомендує менш ніж 2000 мг натрію і щонайменше 3510 мг калію на добу. Молярне співвідношення: (Na, мг / 23) / (K, мг / 39,1). Приблизний сольовий еквівалент: натрій, мг × 2,5 / 1000. Співвідношення показано без категорії індивідуального ризику.
3. Врахуйте обмеження: Введіть споживання з їжею за одну добу, а не концентрації аналізу крові чи сечі. Загальний орієнтир калію не застосовують автоматично при порушенні його виведення, хворобі нирок або прийомі ліків, що впливають на калій. Гіпертензія сама по собі не визначає тут нову індивідуальну норму.

### Методика і формула

Для дорослих WHO рекомендує менш ніж 2000 мг натрію і щонайменше 3510 мг калію на добу. Молярне співвідношення: (Na, мг / 23) / (K, мг / 39,1). Приблизний сольовий еквівалент: натрій, мг × 2,5 / 1000. Співвідношення показано без категорії індивідуального ризику.

Для дорослих WHO рекомендує менш ніж 2000 мг натрію і щонайменше 3510 мг калію на добу. Молярне співвідношення: (Na, мг / 23) / (K, мг / 39,1). Приблизний сольовий еквівалент: натрій, мг × 2,5 / 1000. Співвідношення показано без категорії індивідуального ризику.

### Обмеження

Введіть споживання з їжею за одну добу, а не концентрації аналізу крові чи сечі. Загальний орієнтир калію не застосовують автоматично при порушенні його виведення, хворобі нирок або прийомі ліків, що впливають на калій. Гіпертензія сама по собі не визначає тут нову індивідуальну норму.

### Джерела

- [WHO. Healthy diet: sodium and potassium](https://www.who.int/news-room/fact-sheets/detail/healthy-diet)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sodium-potassium" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="sodium-potassium" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sodium-potassium?lang=uk&theme=auto"
  title="Натрій і калій у добовому раціоні" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
