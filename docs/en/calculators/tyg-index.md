# TyG Index Calculator (Triglycerides × Glucose)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tyg-index.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tyg-index.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md)

[← Calculator catalog](../CALCULATORS.md)

`tyg-index` · [NutriFit](https://nutrifit.health/calculators/tyg-index)

TyG index and its derivatives TyG-BMI and TyG-WC: insulin resistance and cardiometabolic risk from fasting triglycerides and glucose — no insulin assay needed.

### How to use

1. Take fasting triglycerides and glucose: Both are part of a standard blood chemistry panel. The draw must be fasting: post-meal triglycerides rise 1.5–2-fold and inflate the index.
2. Set the units from your report: The formula is defined for mg/dL. If your lab reports mmol/L, leave the switch on mmol/L — the calculator converts to mg/dL automatically.
3. Add weight, height and waist: TyG-BMI and TyG-WC detect visceral obesity and fatty liver more accurately than "plain" TyG. Measure the waist at the navel on exhalation.

### Method and formula

The TyG index (Simental-Mendía, 2008) is the natural logarithm of half the product of fasting triglycerides and glucose in mg/dL. It reflects lipotoxicity and impaired glucose utilization — two key mechanisms of insulin resistance — and correlates with the euglycemic clamp as well as HOMA-IR, without the expensive and poorly standardized insulin assay. The derivatives TyG-BMI and TyG-WC add body weight and waist circumference, improving detection of metabolic syndrome and NAFLD.

TyG = ln[ Triglycerides (mg/dL) × Glucose (mg/dL) / 2 ]
TyG-BMI = TyG × BMI (kg/m²)
TyG-WC = TyG × Waist circumference (cm)
Conversion: TG mg/dL = mmol/L × 88.57; glucose mg/dL = mmol/L × 18.016

### Limitations

There is no single TyG cut-off: across populations the high-risk threshold ranges from 8.5 to 9.0, and is lower in East Asian cohorts. The index is distorted by familial hypertriglyceridemia, fibrates, statins and alcohol the day before, and by acute illness. Fasting values (8–12 h) are required. It is a screening tool, not a diagnosis.

### Sources

- [Simental-Mendía L.E., Rodríguez-Morán M., Guerrero-Romero F. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008;6(4):299–304](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F. et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010;95(7):3347–3351](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A. et al. Diagnostic accuracy of the triglyceride and glucose index for insulin resistance: a systematic review. Int J Endocrinol, 2020;2020:4678526](https://pubmed.ncbi.nlm.nih.gov/32256572/)

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
