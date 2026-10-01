# Ideal Body Weight Calculator (IBW & AdjBW)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ideal-body-weight.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ideal-body-weight.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md)

[← Calculator catalog](../CALCULATORS.md)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/calculators/ideal-body-weight)

Calculates reference body weight according to recognized clinical equations and determines Adjusted Body Weight (AdjBW) for clinical nutrition and medicine.

### How to use

1. Compare the Devine formula with healthy BMI: The Devine formula typically aligns with a BMI of 21.5–22.5 kg/m²—the statistical center of the healthy weight continuum.
2. Use AdjBW if overweight: If your actual weight exceeds your ideal weight by more than 20% (BMI > 30), calculate your diet and protein intake using AdjBW rather than actual weight.
3. Account for skeletal bone structure: Individuals with broad bone frames (hypersthenic) naturally sit comfortably near the upper boundary of the WHO BMI range (23–24.9).

### Method and formula

Medical ideal body weight equations were developed to standardize medication dosages, renal clearance clearance rates, and mechanical ventilation parameters. Unlike cosmetic weight charts, they benchmark physiological homeostasis and baseline metabolic function.

Devine (Men): 50 + 2.3 × (Height_in − 60); Devine (Women): 45.5 + 2.3 × (Height_in − 60); AdjBW = IBW + 0.4 × (Actual_Weight − IBW); Robinson: Men 52 + 1.9×in, Women 49 + 1.7×in.

### Limitations

Formulas do not account for athletic muscular development or skeletal bone frame variation (hypersthenic vs. asthenic body types).

### Sources

- [Devine B.J. Gentamicin therapy. Drug Intell Clin Pharm, 1974;8:650–655](https://pubmed.ncbi.nlm.nih.gov/4611413/)
- [Robinson J.D. et al. Determination of ideal body weight for drug dosing. Am J Hosp Pharm, 1983;40(6):1016–1019](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Miller P.F. et al. Comparison of formulas for estimating ideal body weight. Am J Hosp Pharm, 1983;40:1622](https://pubmed.ncbi.nlm.nih.gov/6638027/)
- [Hamwi G.J. Therapy: changing concepts in diabetes mellitus. In: Danowski T.S. (ed). Diabetes Mellitus: Diagnosis and Treatment. ADA, 1964:73–78](https://pubmed.ncbi.nlm.nih.gov/14207860/)

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
  title="Ideal Body Weight Calculator (IBW &amp; AdjBW)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
