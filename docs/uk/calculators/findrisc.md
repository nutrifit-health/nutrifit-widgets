# Шкала ризику діабету FINDRISC

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/findrisc.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/findrisc.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/findrisc.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/findrisc.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/findrisc.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/findrisc.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`findrisc` · [NutriFit](https://nutrifit.health/uk/calculators/findrisc)

Довідковий ризик діабету 2 типу за 10 років за 8 чинниками FINDRISC; сума 0–26. Відсотки стосуються початкової дослідженої популяції й не є точною особистою ймовірністю.

### Порядок використання

1. Введіть вихідні дані: Довідковий ризик діабету 2 типу за 10 років за 8 чинниками FINDRISC; сума 0–26. Відсотки стосуються початкової дослідженої популяції й не є точною особистою ймовірністю.
2. Уточніть параметри: Довідковий ризик діабету 2 типу за 10 років за 8 чинниками FINDRISC; сума 0–26. Відсотки стосуються початкової дослідженої популяції й не є точною особистою ймовірністю.
3. Прочитайте результат: Інформаційний переклад для самооцінки. Валідація саме цієї адаптації не підтверджена. Бал не встановлює діагноз, а низький результат не виключає захворювання. Довідковий ризик діабету 2 типу за 10 років за 8 чинниками FINDRISC; сума 0–26. Відсотки стосуються початкової дослідженої популяції й не є точною особистою ймовірністю.

### Методика і формула

Довідковий ризик діабету 2 типу за 10 років за 8 чинниками FINDRISC; сума 0–26. Відсотки стосуються початкової дослідженої популяції й не є точною особистою ймовірністю.

Довідковий ризик діабету 2 типу за 10 років за 8 чинниками FINDRISC; сума 0–26. Відсотки стосуються початкової дослідженої популяції й не є точною особистою ймовірністю.

### Обмеження

Інформаційний переклад для самооцінки. Валідація саме цієї адаптації не підтверджена. Бал не встановлює діагноз, а низький результат не виключає захворювання. Довідковий ризик діабету 2 типу за 10 років за 8 чинниками FINDRISC; сума 0–26. Відсотки стосуються початкової дослідженої популяції й не є точною особистою ймовірністю.

### Джерела

- [Finnish Diabetes Association. Type 2 diabetes risk assessment form](https://sites.pitt.edu/~super1/assist/Type%202%20diabetes%20risk%20test.pdf)
- [Lindström J et al. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003](https://pubmed.ncbi.nlm.nih.gov/12610029/)
- [International Diabetes Federation (IDF). Clinical Practice Recommendations for managing Type 2 Diabetes in Primary Care, 2017](https://www.idf.org/our-activities/care-prevention/clinical-practice-recommendations/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="findrisc" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="findrisc" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/findrisc?lang=uk&theme=auto"
  title="Шкала ризику діабету FINDRISC" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
