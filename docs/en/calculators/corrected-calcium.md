# Albumin-Corrected Calcium Calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/corrected-calcium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/corrected-calcium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md)

[← Calculator catalog](../CALCULATORS.md)

`corrected-calcium` · [NutriFit](https://nutrifit.health/calculators/corrected-calcium)

Corrected calcium = total calcium + 0.02 × (40 − albumin), with calcium in mmol/L and albumin in g/L. This is the simplified Payne equation.

### Usage

1. Enter the starting values: Corrected calcium = total calcium + 0.02 × (40 − albumin), with calcium in mmol/L and albumin in g/L. This is the simplified Payne equation.
2. Adjust the parameters: Corrected calcium = total calcium + 0.02 × (40 − albumin), with calcium in mmol/L and albumin in g/L. This is the simplified Payne equation.
Ca: mg/dL × 0.2495 = mmol/L; mmol/L ÷ 0.2495 = mg/dL. Albumin: g/dL × 10 = g/L.
3. Read the result: The correction does not measure ionized calcium and can misclassify results, particularly with low albumin. No universal calcium category is assigned.

### Method and formula

Corrected calcium = total calcium + 0.02 × (40 − albumin), with calcium in mmol/L and albumin in g/L. This is the simplified Payne equation.

Corrected calcium = total calcium + 0.02 × (40 − albumin), with calcium in mmol/L and albumin in g/L. This is the simplified Payne equation.
Ca: mg/dL × 0.2495 = mmol/L; mmol/L ÷ 0.2495 = mg/dL. Albumin: g/dL × 10 = g/L.

### Limitations

The correction does not measure ionized calcium and can misclassify results, particularly with low albumin. No universal calcium category is assigned.

### Sources

- [Payne RB et al. Interpretation of serum calcium in patients with abnormal serum proteins. Br Med J, 1973](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson JH et al. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025](https://pubmed.ncbi.nlm.nih.gov/39836424/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="corrected-calcium" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="corrected-calcium" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/corrected-calcium?lang=en&theme=auto"
  title="Albumin-Corrected Calcium Calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
