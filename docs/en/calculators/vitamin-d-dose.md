# Vitamin D: van Groningen model estimate

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vitamin-d-dose.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vitamin-d-dose.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vitamin-d-dose.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vitamin-d-dose.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vitamin-d-dose.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vitamin-d-dose.md)

[← Calculator catalog](../CALCULATORS.md)

`vitamin-d-dose` · [NutriFit](https://nutrifit.health/calculators/vitamin-d-dose)

25(OH)D in two unit systems and a weight-based research estimate. No automatic treatment schedule.

### How to use

1. Enter measured 25(OH)D: 25-hydroxyvitamin D (calcidiol) specifically, not 1,25(OH)₂D. Report units are nmol/L or ng/mL; pick the right one and the calculator converts.
2. Check applicability: The 75 nmol/L target is fixed by the study, not selected as a universal normal value. This tool does not calculate the model at baseline levels of 50 nmol/L or above.
3. Enter body weight: Discuss the estimate with a clinician. The number does not determine a product, single dose or dosing frequency.

### Method and formula

The van Groningen (2010) model relates total cholecalciferol dose to weight and baseline 25(OH)D. This tool uses the fixed research target of 75 nmol/L, baseline below 50 nmol/L and weight 35–125 kg. The lower weight limit restricts this interface to an adult context; age and clinical exclusions require clinician assessment. It does not select a dosing schedule, maintenance dose or follow-up interval. Endocrine Society 2024 does not establish a universal target 25(OH)D for disease prevention in healthy people.

Total model estimate (IU) = 40 × (75 − 25(OH)D, nmol/L) × weight (kg). 1 ng/mL = 2.496 nmol/L.

### Limitations

A research calculation for discussion with a clinician, not an individual prescription. Do not use it for self-treatment during pregnancy, in children, or with calcium disorders, kidney disease, malabsorption or granulomatous disease. The model does not account for medicines or supplements; the total must not be taken as a single dose.

### Sources

- [van Groningen L. et al. Cholecalciferol loading dose guideline for vitamin D-deficient adults. Eur J Endocrinol, 2010;162(4):805–811](https://pubmed.ncbi.nlm.nih.gov/20139241/)
- [Endocrine Society. Vitamin D for the Prevention of Disease: Clinical Practice Guideline, 2024](https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vitamin-d-dose" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="vitamin-d-dose" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vitamin-d-dose?lang=en&theme=auto"
  title="Vitamin D: van Groningen model estimate" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
