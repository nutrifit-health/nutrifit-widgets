# PhenoAge Biological Age Calculator (Levine)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phenoage.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phenoage.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md)

[← Calculator catalog](../CALCULATORS.md)

`phenoage` · [NutriFit](https://nutrifit.health/calculators/phenoage)

A research estimate using nine biomarkers and age. The result does not predict individual life expectancy.

### How to use

1. Get a CBC with differential and a chemistry panel: Needed: albumin, creatinine, fasting glucose, CRP (preferably high-sensitivity), alkaline phosphatase — from chemistry; white cells, lymphocyte %, MCV, RDW — from the blood count.
2. Enter values in SI units: Albumin in g/L (not g/dL), creatinine in µmol/L, glucose in mmol/L, CRP in mg/L. If your report uses other units, use the unit converter.
3. Track the trend, not a single number: Interpret the laboratory results with a clinician. A change in the number does not prove rejuvenation or intervention effectiveness.

### Method and formula

The Levine 2018 model combines nine biomarkers and chronological age. Coefficients were trained on NHANES; a Gompertz transformation expresses the profile as an age equivalent of population risk. No individual mortality forecast is shown. The difference from chronological age is simple subtraction, not the statistical PhenoAgeAccel residual or a rate of aging.

xb = −19.907 − 0.0336·Albumin(g/L) + 0.0095·Creatinine(µmol/L) + 0.1953·Glucose(mmol/L) + 0.0954·ln(CRP, mg/dL) − 0.0120·Lymphocytes(%) + 0.0268·MCV(fL) + 0.3306·RDW(%) + 0.00188·ALP(U/L) + 0.0554·WBC(10⁹/L) + 0.0804·Age
120-month risk = 1 − exp(−e^xb · (e^(120·0.0076927) − 1) / 0.0076927)
PhenoAge = 141.50225 + ln(−0.00553 · ln(1 − Risk)) / 0.09165

### Limitations

Research tool for ages 20–84. Acute illness changes biomarkers and the result. The number is not a diagnosis, lifespan or proof of rejuvenation. CRP below the detection limit requires a quantitative result rather than substituting zero.

### Sources

- [Levine M.E. et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018;10(4):573–591](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z. et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: a cohort study. PLoS Med, 2018;15(12):e1002718](https://pubmed.ncbi.nlm.nih.gov/30596641/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phenoage" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="phenoage" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phenoage?lang=en&theme=auto"
  title="PhenoAge Biological Age Calculator (Levine)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
