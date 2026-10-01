# HbA1c ↔ Average Glucose (eAG) Converter

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/hba1c-eag.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/hba1c-eag.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/hba1c-eag.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/hba1c-eag.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/hba1c-eag.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/hba1c-eag.md)

[← Calculator catalog](../CALCULATORS.md)

`hba1c-eag` · [NutriFit](https://nutrifit.health/calculators/hba1c-eag)

HbA1c to 3-month average glycemia by the ADAG formula, reverse calculation and % ↔ mmol/mol conversion with ADA categories.

### How to use

1. Choose what you have: If you have an HbA1c result, enter it. If you keep a meter or CGM and know your 2–3-month average glucose, switch to the reverse calculation.
2. Set the units on your report: HbA1c is reported in percent (NGSP, USA and CIS) or mmol/mol (IFCC, Europe). 6.5% equals 48 mmol/mol — the calculator converts automatically.
3. Compare eAG with your meter readings: If your meter average is noticeably below eAG, you are probably testing mostly fasting and missing post-meal peaks. A gap over 1.5 mmol/L is worth discussing with a physician.

### Method and formula

Glycated hemoglobin reflects average glucose over 8–12 weeks — the lifespan of a red blood cell. The A1c-Derived Average Glucose study (ADAG, Nathan 2008) matched HbA1c against continuous glucose monitoring in 507 people and derived a linear relationship: eAG (mg/dL) = 28.7 × HbA1c − 46.7. The calculator works both ways — from HbA1c to average glucose and from a known average (e.g. from a meter or CGM) to the expected HbA1c — and converts NGSP percent to IFCC units (mmol/mol) used in Europe and Australia.

eAG (mg/dL) = 28.7 × HbA1c (%) − 46.7
eAG (mmol/L) = 1.59 × HbA1c (%) − 2.59
HbA1c (mmol/mol, IFCC) = (HbA1c (%, NGSP) − 2.15) × 10.929
Reverse: HbA1c (%) = (eAG, mg/dL + 46.7) / 28.7

### Limitations

HbA1c is inaccurate in conditions that alter red-cell lifespan or hemoglobin structure: anemia, hemoglobinopathies, pregnancy, CKD, recent blood loss or transfusion, iron and B12 deficiency. In 10–15% of people the individual HbA1c–glucose relationship differs noticeably from the average (the "glycation gap"), so eAG is a population estimate, not a measurement. A diabetes diagnosis requires confirmation by a repeat test.

### Sources

- [Nathan D.M. et al. Translating the A1C assay into estimated average glucose values. Diabetes Care, 2008;31(8):1473–1478](https://pubmed.ncbi.nlm.nih.gov/18540046/)
- [American Diabetes Association. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes — 2024. Diabetes Care, 2024;47(Suppl 1):S20–S42](https://pubmed.ncbi.nlm.nih.gov/38078589/)
- [NGSP. IFCC Standardization of HbA1c: master equation NGSP ↔ IFCC](https://ngsp.org/ifcc.asp)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="hba1c-eag" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="hba1c-eag" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/hba1c-eag?lang=en&theme=auto"
  title="HbA1c ↔ Average Glucose (eAG) Converter" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
