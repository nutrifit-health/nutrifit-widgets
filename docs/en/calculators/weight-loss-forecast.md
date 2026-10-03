# Hall–Chow weight-change scenario

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/weight-loss-forecast.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/weight-loss-forecast.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md)

[← Calculator catalog](../CALCULATORS.md)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/calculators/weight-loss-forecast)

A simplified model with average parameters illustrates weight change after a sustained reduction in baseline energy intake, with unchanged activity.

### Usage

1. Enter the starting values: Use actual values and the appropriate units.
2. Adjust the parameters: Adjust the starting assumptions for your situation.
3. Read the result: Consider the model limitations; a calculation is not a measurement.

### Method and formula

W(t)=W0−D/22×(1−exp(−22×t/9100)); t is days, D is intake reduction in kcal/day. Average parameters: ρ=9100 kcal/kg, ε=22 kcal/(kg·day). Linear comparison: loss D×t/7700.

W(t)=W0−D/22×(1−exp(−22×t/9100)); t is days, D is intake reduction in kcal/day. Average parameters: ρ=9100 kcal/kg, ε=22 kcal/(kg·day). Linear comparison: loss D×t/7700.

### Limitations

This is the linearized two-parameter Hall–Chow model (2011), not the full individual NIH Body Weight Planner. It does not predict fat, muscle or an exact plateau date. Scenario for adults, excluding pregnancy and breastfeeding. Baseline intake is assumed to maintain weight and the reduction to be sustained; water, medicines, illness and adherence are not modelled. This does not prescribe a calorie deficit.

### Sources

- [Hall K.D., Chow C.C. Estimating changes in free-living energy intake and its confidence interval. Am J Clin Nutr, 2011;94(1):66–74. Linearized energy-balance model](https://pmc.ncbi.nlm.nih.gov/articles/PMC3127505/)
- [Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011](https://pubmed.ncbi.nlm.nih.gov/21872751/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="weight-loss-forecast" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="weight-loss-forecast" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/weight-loss-forecast?lang=en&theme=auto"
  title="Hall–Chow weight-change scenario" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
