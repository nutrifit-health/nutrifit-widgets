# Protein reference intakes

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/protein-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/protein-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md)

[← Calculator catalog](../CALCULATORS.md)

`protein-intake` · [NutriFit](https://nutrifit.health/calculators/protein-intake)

For healthy adults, the EFSA PRI is 0.83 g/kg/day. ISSN gives 1.4–2.0 g/kg/day for healthy exercising adults; ESPEN suggests 1.0–1.2 for healthy older adults. Amounts use the actual body weight entered. A reference range is not a safety upper limit.

### Usage

1. Enter the inputs: For healthy adults, the EFSA PRI is 0.83 g/kg/day. ISSN gives 1.4–2.0 g/kg/day for healthy exercising adults; ESPEN suggests 1.0–1.2 for healthy older adults. Amounts use the actual body weight entered. A reference range is not a safety upper limit.
2. Compare the references: For healthy adults, the EFSA PRI is 0.83 g/kg/day. ISSN gives 1.4–2.0 g/kg/day for healthy exercising adults; ESPEN suggests 1.0–1.2 for healthy older adults. Amounts use the actual body weight entered. A reference range is not a safety upper limit.
3. Consider the limitations: These population references are not an individual optimal dose. This form cannot prescribe nutrition for kidney disease, pregnancy, illness, malnutrition or substantial excess weight. Those situations require an individual choice of reference weight and intake.

### Method and formula

For healthy adults, the EFSA PRI is 0.83 g/kg/day. ISSN gives 1.4–2.0 g/kg/day for healthy exercising adults; ESPEN suggests 1.0–1.2 for healthy older adults. Amounts use the actual body weight entered. A reference range is not a safety upper limit.

For healthy adults, the EFSA PRI is 0.83 g/kg/day. ISSN gives 1.4–2.0 g/kg/day for healthy exercising adults; ESPEN suggests 1.0–1.2 for healthy older adults. Amounts use the actual body weight entered. A reference range is not a safety upper limit.

### Limitations

These population references are not an individual optimal dose. This form cannot prescribe nutrition for kidney disease, pregnancy, illness, malnutrition or substantial excess weight. Those situations require an individual choice of reference weight and intake.

### Sources

- [EFSA. Population reference intakes for protein, 2012](https://www.efsa.europa.eu/en/press/news/120209)
- [ISSN. Protein and exercise, 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/)
- [ESPEN Expert Group. Protein intake and exercise with aging, 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4208946/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="protein-intake" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="protein-intake" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/protein-intake?lang=en&theme=auto"
  title="Protein reference intakes" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
