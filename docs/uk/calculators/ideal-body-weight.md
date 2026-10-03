# Історичні формули розрахункової маси

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ideal-body-weight.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ideal-body-weight.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/uk/calculators/ideal-body-weight)

Devine, Robinson, Miller і наближена Hamwi для зросту ≥ 152,4 см. Середнє чотирьох формул — авторський агрегат; AdjBW = Devine + 0,4 × (фактична маса − Devine), лише за перевищення Devine.

### Порядок використання

1. Введіть вихідні дані: Devine, Robinson, Miller і наближена Hamwi для зросту ≥ 152,4 см. Середнє чотирьох формул — авторський агрегат; AdjBW = Devine + 0,4 × (фактична маса − Devine), лише за перевищення Devine.
2. Уточніть параметри: Devine (M): 50 + 2.3 × x; Devine (F): 45.5 + 2.3 × x; Robinson (M): 52 + 1.9 × x; Robinson (F): 49 + 1.7 × x; x = height(cm)/2.54 − 60; AdjBW = Devine + 0.4 × (weight − Devine).
Devine, Robinson, Miller і наближена Hamwi для зросту ≥ 152,4 см. Середнє чотирьох формул — авторський агрегат; AdjBW = Devine + 0,4 × (фактична маса − Devine), лише за перевищення Devine.
3. Прочитайте результат: Формули не визначають єдину здорову чи бажану масу. AdjBW не універсальний для харчування й ліків. Маса за ІМТ 18,5–24,9 — окремий арифметичний орієнтир для дорослих, не індивідуальна ціль.

### Методика і формула

Devine, Robinson, Miller і наближена Hamwi для зросту ≥ 152,4 см. Середнє чотирьох формул — авторський агрегат; AdjBW = Devine + 0,4 × (фактична маса − Devine), лише за перевищення Devine.

Devine (M): 50 + 2.3 × x; Devine (F): 45.5 + 2.3 × x; Robinson (M): 52 + 1.9 × x; Robinson (F): 49 + 1.7 × x; x = height(cm)/2.54 − 60; AdjBW = Devine + 0.4 × (weight − Devine).
Devine, Robinson, Miller і наближена Hamwi для зросту ≥ 152,4 см. Середнє чотирьох формул — авторський агрегат; AdjBW = Devine + 0,4 × (фактична маса − Devine), лише за перевищення Devine.

### Обмеження

Формули не визначають єдину здорову чи бажану масу. AdjBW не універсальний для харчування й ліків. Маса за ІМТ 18,5–24,9 — окремий арифметичний орієнтир для дорослих, не індивідуальна ціль.

### Джерела

- [Robinson JD et al. Determination of ideal body weight for drug dosage calculations. Am J Hosp Pharm, 1983](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Peterson C.M. et al. Universal equation for estimating ideal body weight and body weight at any BMI. Am J Clin Nutr, 2016;103(5):1197–1203. Historical IBW equations and their limits](https://pmc.ncbi.nlm.nih.gov/articles/PMC4841935/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ideal-body-weight" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="ideal-body-weight" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ideal-body-weight?lang=uk&theme=auto"
  title="Історичні формули розрахункової маси" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
