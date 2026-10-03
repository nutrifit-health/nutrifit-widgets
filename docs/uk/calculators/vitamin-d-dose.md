# Вітамін D: оцінка моделі van Groningen

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vitamin-d-dose.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vitamin-d-dose.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vitamin-d-dose.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vitamin-d-dose.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vitamin-d-dose.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vitamin-d-dose.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`vitamin-d-dose` · [NutriFit](https://nutrifit.health/uk/calculators/vitamin-d-dose)

25(OH)D у двох одиницях і дослідницька оцінка за масою тіла. Автоматична схема лікування не призначається.

### Порядок використання

1. Введіть вихідні дані: Модель van Groningen (2010) пов’язує сумарну кількість холекальциферолу з масою та початковим 25(OH)D. Тут використано дослідницьку ціль 75 нмоль/л, початковий рівень нижче 50 нмоль/л і масу 35–125 кг. Нижня межа маси обмежує інтерфейс дорослим контекстом; вік і клінічні виключення оцінює лікар. Модель не призначає схему, підтримувальну дозу чи термін контролю. Endocrine Society 2024 не встановлює універсальної цілі 25(OH)D для профілактики захворювань у здорових людей.
2. Уточніть параметри: Сумарна модельна оцінка (МО) = 40 × (75 − 25(OH)D, нмоль/л) × маса (кг). 1 нг/мл = 2,496 нмоль/л.
3. Прочитайте результат: Лише дослідницький розрахунок для обговорення з лікарем. Модель не враховує супутні захворювання, вагітність, мальабсорбцію і не формує готову схему лікування.

### Методика і формула

Модель van Groningen (2010) пов’язує сумарну кількість холекальциферолу з масою та початковим 25(OH)D. Тут використано дослідницьку ціль 75 нмоль/л, початковий рівень нижче 50 нмоль/л і масу 35–125 кг. Нижня межа маси обмежує інтерфейс дорослим контекстом; вік і клінічні виключення оцінює лікар. Модель не призначає схему, підтримувальну дозу чи термін контролю. Endocrine Society 2024 не встановлює універсальної цілі 25(OH)D для профілактики захворювань у здорових людей.

Сумарна модельна оцінка (МО) = 40 × (75 − 25(OH)D, нмоль/л) × маса (кг). 1 нг/мл = 2,496 нмоль/л.

### Обмеження

Лише дослідницький розрахунок для обговорення з лікарем. Модель не враховує супутні захворювання, вагітність, мальабсорбцію і не формує готову схему лікування.

### Джерела

- [van Groningen L et al. Cholecalciferol loading dose guideline for vitamin D-deficient adults. Eur J Endocrinol, 2010](https://pubmed.ncbi.nlm.nih.gov/20139241/)
- [Endocrine Society. Vitamin D for the Prevention of Disease: Clinical Practice Guideline, 2024](https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vitamin-d-dose" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="vitamin-d-dose" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vitamin-d-dose?lang=uk&theme=auto"
  title="Вітамін D: оцінка моделі van Groningen" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
