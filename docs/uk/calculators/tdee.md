# Оцінка добових енерговитрат TDEE

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tdee.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tdee.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`tdee` · [NutriFit](https://nutrifit.health/uk/calculators/tdee)

Mifflin–St Jeor оцінює витрати у спокої. TDEE = оцінка × обраний коефіцієнт активності. −20% і +15% — авторські сценарії дефіциту й профіциту.

### Порядок використання

1. Введіть вихідні дані: Mifflin–St Jeor оцінює витрати у спокої. TDEE = оцінка × обраний коефіцієнт активності. −20% і +15% — авторські сценарії дефіциту й профіциту.
2. Уточніть параметри: Mifflin–St Jeor оцінює витрати у спокої. TDEE = оцінка × обраний коефіцієнт активності. −20% і +15% — авторські сценарії дефіциту й профіциту.
3. Прочитайте результат: Для дорослих. Коефіцієнти — наближення, не виміряний PAL. Формула не визначає індивідуальну потребу чи безпечний дефіцит; похибка не доводить порушення обміну.

### Методика і формула

Mifflin–St Jeor оцінює витрати у спокої. TDEE = оцінка × обраний коефіцієнт активності. −20% і +15% — авторські сценарії дефіциту й профіциту.

BMR (чол.) = 10 × вага(кг) + 6,25 × зріст(см) − 5 × вік + 5; BMR (жін.) = 10 × вага(кг) + 6,25 × зріст(см) − 5 × вік − 161; TDEE = BMR × коефіцієнт активності

### Обмеження

Для дорослих. Коефіцієнти — наближення, не виміряний PAL. Формула не визначає індивідуальну потребу чи безпечний дефіцит; похибка не доводить порушення обміну.

### Джерела

- [Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tdee" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="tdee" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=uk&theme=auto"
  title="Оцінка добових енерговитрат TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
