# eGFR Calculator (CKD-EPI 2021)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/egfr.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/egfr.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/egfr.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/egfr.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/egfr.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/egfr.md)

[← Calculator catalog](../CALCULATORS.md)

`egfr` · [NutriFit](https://nutrifit.health/calculators/egfr)

Estimated GFR by CKD-EPI 2021 (creatinine, optionally cystatin C), Cockcroft–Gault creatinine clearance and KDIGO CKD stage — with µmol/L and mg/dL conversion.

### Usage

1. Enter the starting values: Glomerular filtration rate is the key measure of kidney function. The CKD-EPI 2021 equation (Inker et al., NEJM) derives it from serum creatinine, age and sex without the race coefficient, which has been removed from practice. When cystatin C is available the combined CKD-EPI 2021 cr-cys equation is used — more accurate in people with atypical muscle mass (athletes, sarcopenia, amputation, vegans). The calculator also shows Cockcroft–Gault creatinine clearance, still used for drug dosing, and the KDIGO CKD stage G1–G5.
2. Adjust the parameters: eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1.200 × 0.9938^Age × 1.012 [female]
κ = 0.7 (female) / 0.9 (male);  α = −0.241 (female) / −0.302 (male);  Scr — creatinine, mg/dL (= µmol/L / 88.4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0.544 × min(Scys/0.8,1)^−0.323 × max(Scys/0.8,1)^−0.778 × 0.9961^Age × 0.963 [female]
Cockcroft–Gault (mL/min) = (140 − Age) × Weight (kg) × 0.85 [female] / (72 × Scr, mg/dL)
3. Read the result: CKD-EPI 2021 estimates GFR; Cockcroft–Gault estimates creatinine clearance in mL/min without body surface indexing. CKD requires evidence of chronic kidney abnormalities for at least three months; a single value cannot determine the need for dialysis.

### Method and formula

Glomerular filtration rate is the key measure of kidney function. The CKD-EPI 2021 equation (Inker et al., NEJM) derives it from serum creatinine, age and sex without the race coefficient, which has been removed from practice. When cystatin C is available the combined CKD-EPI 2021 cr-cys equation is used — more accurate in people with atypical muscle mass (athletes, sarcopenia, amputation, vegans). The calculator also shows Cockcroft–Gault creatinine clearance, still used for drug dosing, and the KDIGO CKD stage G1–G5.

eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1.200 × 0.9938^Age × 1.012 [female]
κ = 0.7 (female) / 0.9 (male);  α = −0.241 (female) / −0.302 (male);  Scr — creatinine, mg/dL (= µmol/L / 88.4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0.544 × min(Scys/0.8,1)^−0.323 × max(Scys/0.8,1)^−0.778 × 0.9961^Age × 0.963 [female]
Cockcroft–Gault (mL/min) = (140 − Age) × Weight (kg) × 0.85 [female] / (72 × Scr, mg/dL)

### Limitations

CKD-EPI 2021 estimates GFR; Cockcroft–Gault estimates creatinine clearance in mL/min without body surface indexing. CKD requires evidence of chronic kidney abnormalities for at least three months; a single value cannot determine the need for dialysis.

### Sources

- [Inker LA et al. New Creatinine- and Cystatin C-Based Equations to Estimate GFR without Race. N Engl J Med, 2021](https://pubmed.ncbi.nlm.nih.gov/34554658/)
- [KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl, 2013;3(1):1–150](https://kdigo.org/guidelines/ckd-evaluation-and-management/)
- [Cockcroft DW et al. Prediction of creatinine clearance from serum creatinine. Nephron, 1976](https://pubmed.ncbi.nlm.nih.gov/1244564/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="egfr" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="egfr" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/egfr?lang=en&theme=auto"
  title="eGFR Calculator (CKD-EPI 2021)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
