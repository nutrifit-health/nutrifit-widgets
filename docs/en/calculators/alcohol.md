# Ethanol and illustrative Widmark estimate

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/alcohol.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/alcohol.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/alcohol.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/alcohol.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/alcohol.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/alcohol.md)

[← Calculator catalog](../CALCULATORS.md)

`alcohol` · [NutriFit](https://nutrifit.health/calculators/alcohol)

Calculates ethanol amount, ethanol calories and an approximate concentration using a simplified model.

### Usage

1. Enter the starting values: Use actual values and the appropriate units.
2. Adjust the parameters: Adjust the starting assumptions for your situation.
3. Read the result: Consider the model limitations; a calculation is not a measurement.

### Method and formula

Ethanol, g = volume, mL × ABV / 100 × 0.789. C0 = ethanol / (weight × r); C(t) = max(0, C0 − 0.15 × t). r = 0.68 for men and 0.55 for women.

Ethanol, g = volume, mL × ABV / 100 × 0.789. C0 = ethanol / (weight × r); C(t) = max(0, C0 − 0.15 × t). r = 0.68 for men and 0.55 for women.

### Limitations

Average coefficients do not describe an individual. The model treats the entered amount as one dose and does not model absorption, food or drinking duration. The result cannot establish sobriety, a safe driving time or legal compliance. Even a calculated zero does not confirm absence of alcohol.

### Sources

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones AW. et al. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework. Forensic Sci Int, 2010](https://pubmed.ncbi.nlm.nih.gov/20304569/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="alcohol" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="alcohol" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/alcohol?lang=en&theme=auto"
  title="Ethanol and illustrative Widmark estimate" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
