# Estimated total daily energy expenditure (TDEE)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tdee.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tdee.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md)

[← Calculator catalog](../CALCULATORS.md)

`tdee` · [NutriFit](https://nutrifit.health/calculators/tdee)

Mifflin–St Jeor estimates resting expenditure. TDEE = that estimate × selected activity factor. −20% and +15% are author-defined deficit and surplus scenarios.

### Usage

1. Enter the starting values: Mifflin–St Jeor estimates resting expenditure. TDEE = that estimate × selected activity factor. −20% and +15% are author-defined deficit and surplus scenarios.
2. Adjust the parameters: Mifflin–St Jeor estimates resting expenditure. TDEE = that estimate × selected activity factor. −20% and +15% are author-defined deficit and surplus scenarios.
3. Read the result: For adults. Activity factors are approximations, not measured PAL. The equation does not determine individual needs or a safe deficit; prediction error does not prove a metabolic disorder.

### Method and formula

Mifflin–St Jeor estimates resting expenditure. TDEE = that estimate × selected activity factor. −20% and +15% are author-defined deficit and surplus scenarios.

BMR (men) = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5; BMR (women) = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161; TDEE = BMR × activity factor

### Limitations

For adults. Activity factors are approximations, not measured PAL. The equation does not determine individual needs or a safe deficit; prediction error does not prove a metabolic disorder.

### Sources

- [Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tdee" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="tdee" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=en&theme=auto"
  title="Estimated total daily energy expenditure (TDEE)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
