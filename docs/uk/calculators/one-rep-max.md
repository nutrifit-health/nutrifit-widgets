# Калькулятор 1ПМ (одноповторний максимум)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/one-rep-max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/one-rep-max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/one-rep-max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/one-rep-max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/one-rep-max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/one-rep-max.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`one-rep-max` · [NutriFit](https://nutrifit.health/uk/calculators/one-rep-max)

Визначає граничну вагу, яку атлет може підняти на одне повторення, без ризику травм під час субмаксимального тестування на 2–10 повторень.

### Порядок використання

1. Виконайте якісну розминку: Зробіть загальну суглобову розминку, потім 3–4 розминкові підходи з поступовим підвищенням ваги до робочої.
2. Зробіть робочий підхід на 3–6 повторень: Підберіть вагу, з якою можете виконати від 3 до 6 чистих повторень із запасом не більше 1 повторення (RPE 9).
3. Внесіть дані та використовуйте відсотки: Введіть вагу та кількість повторень у калькулятор. За таблицею відсотків визначте ваги для силових (85%), гіпертрофійних (75%) або відновних (60%) тренувань.

### Методика та формула

Розрахунок одноповторного максимуму базується на регресійних рівняннях залежності кількості виконаних до відмови повторень від частки граничної ваги. Формула Еплі краще працює в діапазоні 2–6 повторень, а формула Бжицькі дає точні оцінки на 6–10 повтореннях.

Epley: 1RM = Вага × (1 + 0,0333 × Повт); Brzycki: 1RM = Вага / (1,0278 − 0,0278 × Повт); Lombardi: Вага × Повт^0,10; Wathan: (100 × Вага) / (48,8 + 53,8 × e^(-0,075 × Повт)).

### Обмеження

Не валідовано для підходів понад 10–12 повторень через локальну метаболічну втому. Точність залежить від техніки виконання та композиції м'язових волокон.

### Джерела

- [Epley B. Poundage chart. Boyd Epley Workout, Lincoln, NE, 1985](https://pubmed.ncbi.nlm.nih.gov/2706858/)
- [Brzycki M. Strength testing—predicting a one-rep max from reps-to-fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds J.M. et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006;20(3):584–592](https://pubmed.ncbi.nlm.nih.gov/16937972/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="one-rep-max" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="one-rep-max" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/one-rep-max?lang=uk&theme=auto"
  title="Калькулятор 1ПМ (одноповторний максимум)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
