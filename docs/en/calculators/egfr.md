# eGFR Calculator (CKD-EPI 2021)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/egfr.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/egfr.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/egfr.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/egfr.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/egfr.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/egfr.md)

[← Calculator catalog](../CALCULATORS.md)

`egfr` · [NutriFit](https://nutrifit.health/calculators/egfr)

Estimated GFR by CKD-EPI 2021 (creatinine, optionally cystatin C), Cockcroft–Gault creatinine clearance and KDIGO CKD stage — with µmol/L and mg/dL conversion.

### How to use

1. Find creatinine on your report: Serum creatinine is part of basic chemistry. Labs in Europe and the CIS report µmol/L; the USA and Latin America report mg/dL. Pick the matching unit.
2. Set sex and age: Muscle mass — and therefore "normal" creatinine — differs between men and women and declines with age; the equation accounts for this. The race coefficient was removed in the 2021 version.
3. Add cystatin C if available: Cystatin C does not depend on muscle mass or diet. The combined equation is recommended by KDIGO 2024 to confirm CKD at eGFRcr 45–59 without albuminuria.

### Method and formula

Glomerular filtration rate is the key measure of kidney function. The CKD-EPI 2021 equation (Inker et al., NEJM) derives it from serum creatinine, age and sex without the race coefficient, which has been removed from practice. When cystatin C is available the combined CKD-EPI 2021 cr-cys equation is used — more accurate in people with atypical muscle mass (athletes, sarcopenia, amputation, vegans). The calculator also shows Cockcroft–Gault creatinine clearance, still used for drug dosing, and the KDIGO CKD stage G1–G5.

eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1.200 × 0.9938^Age × 1.012 [female]
κ = 0.7 (female) / 0.9 (male);  α = −0.241 (female) / −0.302 (male);  Scr — creatinine, mg/dL (= µmol/L / 88.4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0.544 × min(Scys/0.8,1)^−0.323 × max(Scys/0.8,1)^−0.778 × 0.9961^Age × 0.963 [female]
Cockcroft–Gault (mL/min) = (140 − Age) × Weight (kg) × 0.85 [female] / (72 × Scr, mg/dL)

### Limitations

Estimated GFR is validated for stable adults aged 18+: in acute kidney injury, pregnancy, extreme body weight or muscle mass, amputation and with drugs that affect creatinine secretion (trimethoprim, cimetidine) it is inaccurate. A single eGFR < 60 does not mean CKD — the diagnosis requires confirmation after 3 months and albuminuria assessment. Cockcroft–Gault is not indexed to body surface area and overestimates clearance in obesity.

### Sources

- [Inker L.A. et al. New creatinine- and cystatin C-based equations to estimate GFR without race. N Engl J Med, 2021;385(19):1737–1749](https://pubmed.ncbi.nlm.nih.gov/34554658/)
- [KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl, 2013;3(1):1–150](https://kdigo.org/guidelines/ckd-evaluation-and-management/)
- [Cockcroft D.W., Gault M.H. Prediction of creatinine clearance from serum creatinine. Nephron, 1976;16(1):31–41](https://pubmed.ncbi.nlm.nih.gov/1244564/)

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
