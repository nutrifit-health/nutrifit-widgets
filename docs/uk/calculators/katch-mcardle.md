# Калькулятор BMR і TDEE Кетча — МакАрдла

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/katch-mcardle.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/katch-mcardle.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`katch-mcardle` · [NutriFit](https://nutrifit.health/uk/calculators/katch-mcardle)

Визначає базовий метаболізм (BMR) і добову витрату енергії (TDEE) на основі чистої м'язової маси тіла замість загальної ваги.

### Порядок використання

1. Визначте суху масу: Введіть актуальну вагу та відсоток жиру. Калькулятор визначить вашу активну суху масу.
2. Оберіть реальний рівень активності: Будьте чесними: якщо у вас сидяча робота і 3 тренування на тиждень, обирайте 'Легку' або 'Помірну' активність.
3. Порівняйте з формулою Міффліна: Подивіться різницю: при низькому відсотку жиру стандартні формули недооцінюють ваші потреби на 150–300 ккал/день.

### Методика та формула

На відміну від формул Міффліна — Сан Жеора або Гарріса — Бенедикта, які базуються на загальній вазі, рівняння Кетча — МакАрдла спирається на метаболічно активну суху масу тіла (LBM). Це забезпечує максимальну точність для спортсменів та людей з нестандартним відсотком жиру.

LBM = Вага × (1 − % Жиру / 100); BMR (Katch) = 370 + 21,6 × LBM(кг); TDEE = BMR × Коефіцієнт активності; BMR (Cunningham) = 500 + 22 × LBM(кг).

### Обмеження

Вимагає попереднього знання відсотка жиру в організмі. Неточність вимірювання жиру вносить похибку в розрахунок калорій.

### Джерела

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer, 2014](https://pubmed.ncbi.nlm.nih.gov/15570161/)
- [Cunningham J.J. A reanalysis of balanced nutrition and the relationship to body composition and resting metabolic rate. Am J Clin Nutr, 1991;54(6):963–969](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin M.D. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="katch-mcardle" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="katch-mcardle" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/katch-mcardle?lang=uk&theme=auto"
  title="Калькулятор BMR і TDEE Кетча — МакАрдла" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
