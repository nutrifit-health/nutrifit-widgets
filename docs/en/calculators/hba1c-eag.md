# HbA1c and average glucose conversion

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/hba1c-eag.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/hba1c-eag.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/hba1c-eag.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/hba1c-eag.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/hba1c-eag.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/hba1c-eag.md)

[← Calculator catalog](../CALCULATORS.md)

`hba1c-eag` · [NutriFit](https://nutrifit.health/calculators/hba1c-eag)

Estimated average glucose over about 2–3 months from laboratory HbA1c, or an approximate reverse estimate.

### Usage

1. Enter the starting values: Use actual values and the appropriate units.
2. Adjust the parameters: Adjust the starting assumptions for your situation.
3. Read the result: Consider the model limitations; a calculation is not a measurement.

### Method and formula

The ADAG relationship is a population-based estimate, not an exact match for every individual. NGSP/IFCC conversion uses the official master equation.

eAG (mg/dL) = 28.7 × HbA1c (%) − 46.7; eAG (mmol/L) = eAG (mg/dL) / 18.016; IFCC (mmol/mol) = (NGSP (%) − 2.152) / 0.09148; NGSP (%) = 0.09148 × IFCC + 2.152.

### Limitations

A reverse estimate from average glucose does not replace an HbA1c test or establish a diagnosis. Anaemia, altered red-cell lifespan, haemoglobin variants and pregnancy can affect the relationship. Diagnostic conclusions require clinical assessment and usually repeat confirmation.

### Sources

- [Nathan DM et al. Translating the A1C assay into estimated average glucose values. Diabetes Care, 2008](https://pubmed.ncbi.nlm.nih.gov/18540046/)
- [American Diabetes Association Professional Practice Committee. et al. 2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes-2024. Diabetes Care, 2024](https://pubmed.ncbi.nlm.nih.gov/38078589/)
- [NGSP. IFCC Standardization of HbA1c: master equation NGSP ↔ IFCC](https://ngsp.org/ifcc.asp)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="hba1c-eag" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="hba1c-eag" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/hba1c-eag?lang=en&theme=auto"
  title="HbA1c and average glucose conversion" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
