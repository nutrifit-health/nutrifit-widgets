# Lipid profile: calculated measures

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lipid-profile.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lipid-profile.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lipid-profile.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lipid-profile.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lipid-profile.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lipid-profile.md)

[← Calculator catalog](../CALCULATORS.md)

`lipid-profile` · [NutriFit](https://nutrifit.health/calculators/lipid-profile)

Calculates Friedewald and Sampson LDL, non-HDL, remnant cholesterol and lipid ratios.

### Usage

1. Enter the starting values: Use actual values and the appropriate units.
2. Adjust the parameters: Adjust the starting assumptions for your situation.
3. Read the result: Consider the model limitations; a calculation is not a measurement.

### Method and formula

Friedewald: LDL = total cholesterol − HDL − TG/5, all in mg/dL, when TG <400 mg/dL. Sampson (2020) is used when TG ≤800 mg/dL; negative estimates are not shown. AIP = log10(TG/HDL), both in mmol/L.

Friedewald: LDL = total cholesterol − HDL − TG/5, all in mg/dL, when TG <400 mg/dL. Sampson (2020) is used when TG ≤800 mg/dL; negative estimates are not shown. AIP = log10(TG/HDL), both in mmol/L.

### Limitations

LDL targets depend on overall cardiovascular risk. These measures do not establish individual risk, a diagnosis or a need for medicines. Ratios and AIP are shown without universal normality categories.

### Sources

- [Friedewald WT et al. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M et al. A New Equation for Calculation of Low-Density Lipoprotein Cholesterol in Patients With Normolipidemia and/or Hypertriglyceridemia. JAMA Cardiol, 2020](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiásová M et al. The plasma parameter log (TG/HDL-C) as an atherogenic index: correlation with lipoprotein particle size and esterification rate in apoB-lipoprotein-depleted plasma (FER(HDL)). Clin Biochem, 2001](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias: lipid modification to reduce cardiovascular risk. Eur Heart J, 2020](https://pubmed.ncbi.nlm.nih.gov/31504418/)

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
  title="Lipid profile: calculated measures" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
