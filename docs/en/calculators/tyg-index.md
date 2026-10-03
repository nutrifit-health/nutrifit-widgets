# TyG Index Calculator (Triglycerides × Glucose)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tyg-index.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tyg-index.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md)

[← Calculator catalog](../CALCULATORS.md)

`tyg-index` · [NutriFit](https://nutrifit.health/calculators/tyg-index)

A research index based on fasting triglycerides and glucose, with TyG-BMI and TyG-WC derivatives.

### Usage

1. Take fasting triglycerides and glucose: Both are part of a standard blood chemistry panel. The draw must be fasting: post-meal triglycerides rise 1.5–2-fold and inflate the index.
2. Set the units from your report: The formula is defined for mg/dL. If your lab reports mmol/L, leave the switch on mmol/L — the calculator converts to mg/dL automatically.
3. Add weight, height and waist: TyG-BMI and TyG-WC detect visceral obesity and fatty liver more accurately than "plain" TyG. Measure the waist at the navel on exhalation.

### Method and formula

This calculator uses ln(TG × glucose / 2), with both concentrations in mg/dL, as in Lee et al. (2018). The alternative published variant ln(TG × glucose)/2 has a different numerical scale; its cutoffs cannot be transferred here.

TyG = ln[TG (mg/dL) × glucose (mg/dL) / 2]. TyG-BMI = TyG × BMI; TyG-WC = TyG × waist (cm).

### Limitations

No universal diagnostic cutoffs are established for this calculation. The index does not confirm insulin resistance, diabetes or cardiovascular disease.

### Sources

- [Lee J.W., Lim N.K., Park H.Y. TyG and type 2 diabetes risk in middle-aged Koreans. BMC Endocr Disord, 2018;18:33](https://link.springer.com/article/10.1186/s12902-018-0259-x)
- [Simental-Mendía LE et al. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A et al. Diagnostic Accuracy of the Triglyceride and Glucose Index for Insulin Resistance: A Systematic Review. Int J Endocrinol, 2020](https://pubmed.ncbi.nlm.nih.gov/32256572/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tyg-index" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="tyg-index" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tyg-index?lang=en&theme=auto"
  title="TyG Index Calculator (Triglycerides × Glucose)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
