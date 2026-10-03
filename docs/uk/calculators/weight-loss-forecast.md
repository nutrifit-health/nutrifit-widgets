# Сценарій зміни ваги Hall–Chow

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/weight-loss-forecast.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/weight-loss-forecast.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/uk/calculators/weight-loss-forecast)

Спрощена модель із середніми параметрами показує зміну ваги за постійного зниження початкового споживання енергії та незмінної активності.

### Порядок використання

1. Введіть вихідні дані: Використовуйте фактичні значення й відповідні одиниці.
2. Уточніть параметри: Змініть початкові припущення відповідно до вашої ситуації.
3. Прочитайте результат: Враховуйте обмеження моделі та не сприймайте розрахунок як вимірювання.

### Методика і формула

W(t)=W0−D/22×(1−exp(−22×t/9100)); t — доба, D — зниження енергії в ккал/добу. Середні параметри: ρ=9100 ккал/кг, ε=22 ккал/(кг·добу). Для порівняння: лінійна втрата D×t/7700.

W(t)=W0−D/22×(1−exp(−22×t/9100)); t — доба, D — зниження енергії в ккал/добу. Середні параметри: ρ=9100 ккал/кг, ε=22 ккал/(кг·добу). Для порівняння: лінійна втрата D×t/7700.

### Обмеження

Це лінеаризована двопараметрична модель Hall–Chow (2011), а не повна індивідуальна модель NIH Body Weight Planner. Не прогнозує жир, м’язи або точну дату плато. Сценарій для дорослих, без вагітності та грудного вигодовування. Початкове харчування вважається рівноважним, зміна — постійною; вода, ліки, хвороби й дотримання раціону не моделюються. Це не призначення дефіциту калорій.

### Джерела

- [Hall K.D., Chow C.C. Estimating changes in free-living energy intake and its confidence interval. Am J Clin Nutr, 2011;94(1):66–74. Linearized energy-balance model](https://pmc.ncbi.nlm.nih.gov/articles/PMC3127505/)
- [Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011](https://pubmed.ncbi.nlm.nih.gov/21872751/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="weight-loss-forecast" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="weight-loss-forecast" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/weight-loss-forecast?lang=uk&theme=auto"
  title="Сценарій зміни ваги Hall–Chow" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
