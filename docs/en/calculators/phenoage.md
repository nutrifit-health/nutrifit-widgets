# PhenoAge Biological Age Calculator (Levine)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phenoage.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phenoage.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md)

[← Calculator catalog](../CALCULATORS.md)

`phenoage` · [NutriFit](https://nutrifit.health/calculators/phenoage)

The Levine 2018 model combines nine biomarkers and chronological age. PhenoAge is an age equivalent of population risk in the NHANES model, not organ age or individual life expectancy. The difference from age is subtraction, not an aging rate or the statistical PhenoAgeAccel residual.

### Usage

1. Enter the starting values: The Levine 2018 model combines nine biomarkers and chronological age. PhenoAge is an age equivalent of population risk in the NHANES model, not organ age or individual life expectancy. The difference from age is subtraction, not an aging rate or the statistical PhenoAgeAccel residual.
2. Adjust the parameters: xb = −19.907 − 0.0336·A + 0.0095·C + 0.1953·G + 0.0954·ln(CRP) − 0.012·L + 0.0268·M + 0.3306·R + 0.00188·P + 0.0554·W + 0.0804·a
H = exp(xb) × (exp(120 × 0.0076927) − 1) / 0.0076927
PhenoAge = 141.50225 + ln(0.00553 × H) / 0.09165
A: albumin, g/L; C: creatinine, µmol/L; G: glucose, mmol/L; CRP: mg/dL (input mg/L ÷ 10); L: lymphocytes, %; M: MCV, fL; R: RDW, %; P: ALP, U/L; W: WBC, 10⁹/L; a: age, years.
3. Read the result: Research model for ages 20–84. Acute illness changes biomarkers and the result. This is not a diagnosis, lifespan or proof of rejuvenation. CRP must be measured and positive; a result below the detection limit cannot be replaced with zero.

### Method and formula

The Levine 2018 model combines nine biomarkers and chronological age. PhenoAge is an age equivalent of population risk in the NHANES model, not organ age or individual life expectancy. The difference from age is subtraction, not an aging rate or the statistical PhenoAgeAccel residual.

xb = −19.907 − 0.0336·A + 0.0095·C + 0.1953·G + 0.0954·ln(CRP) − 0.012·L + 0.0268·M + 0.3306·R + 0.00188·P + 0.0554·W + 0.0804·a
H = exp(xb) × (exp(120 × 0.0076927) − 1) / 0.0076927
PhenoAge = 141.50225 + ln(0.00553 × H) / 0.09165
A: albumin, g/L; C: creatinine, µmol/L; G: glucose, mmol/L; CRP: mg/dL (input mg/L ÷ 10); L: lymphocytes, %; M: MCV, fL; R: RDW, %; P: ALP, U/L; W: WBC, 10⁹/L; a: age, years.

### Limitations

Research model for ages 20–84. Acute illness changes biomarkers and the result. This is not a diagnosis, lifespan or proof of rejuvenation. CRP must be measured and positive; a result below the detection limit cannot be replaced with zero.

### Sources

- [Levine ME et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: A cohort study. PLoS Med, 2018](https://pubmed.ncbi.nlm.nih.gov/30596641/)

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
