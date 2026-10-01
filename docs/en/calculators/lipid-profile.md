# Lipid Panel Calculator: LDL, non-HDL and Atherogenic Indices

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lipid-profile.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lipid-profile.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lipid-profile.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lipid-profile.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lipid-profile.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lipid-profile.md)

[← Calculator catalog](../CALCULATORS.md)

`lipid-profile` · [NutriFit](https://nutrifit.health/calculators/lipid-profile)

Calculated LDL by two methods, non-HDL, remnant cholesterol and five atherogenic indices from a standard lipid panel — with ESC/EAS target values.

### How to use

1. Enter the three basic markers: Total cholesterol, HDL and triglycerides are on every lipid panel. Choose the units on your report: mmol/L (Europe, CIS) or mg/dL (USA, some Latin American labs).
2. Add measured LDL if available: Direct LDL measurement is more accurate than calculation. If absent, the calculator uses the Sampson equation and shows Friedewald in parallel for comparison with your lab report.
3. Look at ratios, not a single number: Normal total cholesterol with low HDL and high triglycerides is an atherogenic profile. AIP and the atherogenic coefficient reveal it when "TC is normal".

### Method and formula

From total cholesterol, HDL and triglycerides the calculator derives LDL with the classic Friedewald formula (1972) and with the Sampson equation (NIH, 2020), which stays accurate at triglycerides up to 9 mmol/L and at low LDL. Non-HDL is all atherogenic cholesterol (LDL + VLDL + remnant particles), and remnant cholesterol is non-HDL minus LDL. The Castelli indices (TC/HDL and LDL/HDL), Klimov’s atherogenic coefficient and the atherogenic index of plasma AIP = log10(TG/HDL) reflect the balance of "bad" and "protective" fractions and predict risk better than single markers.

LDL (Friedewald, mmol/L) = TC − HDL − TG / 2.2   [when TG ≤ 4.5 mmol/L]
LDL (Sampson, mg/dL) = TC/0.948 − HDL/0.971 − (TG/8.56 + TG×non-HDL/2140 − TG²/16100) − 9.44
non-HDL = TC − HDL;  Remnant-C = non-HDL − LDL
AC (Klimov) = (TC − HDL) / HDL;  Castelli I = TC/HDL;  Castelli II = LDL/HDL
AIP = log10(TG / HDL), mmol/L

### Limitations

Calculated LDL is an estimate, not a measurement: at TG > 4.5 mmol/L Friedewald does not apply, and at TG > 9 mmol/L or chylomicronemia even Sampson is inaccurate. The indices do not replace overall risk assessment by SCORE2, apolipoprotein B and lipoprotein(a). LDL targets depend on the risk category (1.4 to 3.0 mmol/L per ESC/EAS 2019) and are set by a physician. Fasting or non-fasting per your lab’s instructions.

### Sources

- [Friedewald W.T., Levy R.I., Fredrickson D.S. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972;18(6):499–502](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M. et al. A new equation for calculation of low-density lipoprotein cholesterol in patients with normolipidemia and/or hypertriglyceridemia. JAMA Cardiol, 2020;5(5):540–548](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiášová M., Frohlich J. The plasma parameter log (TG/HDL-C) as an atherogenic index. Clin Biochem, 2001;34(7):583–588](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F. et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J, 2020;41(1):111–188](https://pubmed.ncbi.nlm.nih.gov/31504418/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lipid-profile" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="lipid-profile" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lipid-profile?lang=en&theme=auto"
  title="Lipid Panel Calculator: LDL, non-HDL and Atherogenic Indices" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
