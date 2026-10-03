# Historical reference body weight equations

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ideal-body-weight.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ideal-body-weight.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md)

[← Calculator catalog](../CALCULATORS.md)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/calculators/ideal-body-weight)

Compare Devine, Robinson, Miller and approximate Hamwi for height ≥ 152.4 cm. The four-equation average is author-defined; AdjBW = Devine + 0.4 × (actual weight − Devine), only when actual weight exceeds Devine.

### Usage

1. Enter the starting values: Compare Devine, Robinson, Miller and approximate Hamwi for height ≥ 152.4 cm. The four-equation average is author-defined; AdjBW = Devine + 0.4 × (actual weight − Devine), only when actual weight exceeds Devine.
2. Adjust the parameters: Devine (M): 50 + 2.3 × x; Devine (F): 45.5 + 2.3 × x; Robinson (M): 52 + 1.9 × x; Robinson (F): 49 + 1.7 × x; x = height(cm)/2.54 − 60; AdjBW = Devine + 0.4 × (weight − Devine).
Compare Devine, Robinson, Miller and approximate Hamwi for height ≥ 152.4 cm. The four-equation average is author-defined; AdjBW = Devine + 0.4 × (actual weight − Devine), only when actual weight exceeds Devine.
3. Read the result: These equations do not determine a single healthy or desirable weight. The AdjBW factor is not universal for nutrition or medicine dosing. Weight at BMI 18.5–24.9 is a separate arithmetic adult reference, not an individual target.

### Method and formula

Compare Devine, Robinson, Miller and approximate Hamwi for height ≥ 152.4 cm. The four-equation average is author-defined; AdjBW = Devine + 0.4 × (actual weight − Devine), only when actual weight exceeds Devine.

Devine (M): 50 + 2.3 × x; Devine (F): 45.5 + 2.3 × x; Robinson (M): 52 + 1.9 × x; Robinson (F): 49 + 1.7 × x; x = height(cm)/2.54 − 60; AdjBW = Devine + 0.4 × (weight − Devine).
Compare Devine, Robinson, Miller and approximate Hamwi for height ≥ 152.4 cm. The four-equation average is author-defined; AdjBW = Devine + 0.4 × (actual weight − Devine), only when actual weight exceeds Devine.

### Limitations

These equations do not determine a single healthy or desirable weight. The AdjBW factor is not universal for nutrition or medicine dosing. Weight at BMI 18.5–24.9 is a separate arithmetic adult reference, not an individual target.

### Sources

- [Robinson JD et al. Determination of ideal body weight for drug dosage calculations. Am J Hosp Pharm, 1983](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Peterson C.M. et al. Universal equation for estimating ideal body weight and body weight at any BMI. Am J Clin Nutr, 2016;103(5):1197–1203. Historical IBW equations and their limits](https://pmc.ncbi.nlm.nih.gov/articles/PMC4841935/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ideal-body-weight" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="ideal-body-weight" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ideal-body-weight?lang=en&theme=auto"
  title="Historical reference body weight equations" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
