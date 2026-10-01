# Omega-3 Intake & Index Calculator (EPA + DHA)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/omega-3.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/omega-3.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/omega-3.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/omega-3.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/omega-3.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/omega-3.md)

[← Calculator catalog](../CALCULATORS.md)

`omega-3` · [NutriFit](https://nutrifit.health/calculators/omega-3)

Determines therapeutic and maintenance dosages of active EPA and DHA fatty acids according to clinical indications and laboratory biomarkers.

### How to use

1. Inspect the active label (EPA + DHA): A front label reading '1,000 mg fish oil' frequently contains a mere 300 mg of combined EPA+DHA. Always sum the specific milligram amounts of EPA and DHA.
2. Select the optimal lipid form (rTG or TG): Re-esterified triglycerides (rTG) provide superior bioavailability compared to generic synthetic ethyl esters (EE).
3. Verify the oxidation index (TOTOX): High-grade fish oil maintains a TOTOX score < 26 and carries IFOS (International Fish Oil Standards) certification, free from rancid fishy odors.

### Method and formula

Built upon GOED, AHA, and ISSFAL consensus standards. Targets an erythrocyte membrane Omega-3 Index > 8% for optimal cardioprotection.

General Health: 500 mg; Cardiovascular: 1000 mg; Hypertriglyceridemia: 2000–4000 mg; Pregnancy: 600 mg (high DHA); Mood: 1000–2000 mg (EPA:DHA ≥ 2:1); Athlete: 1500–2000 mg.

### Limitations

Dosages exceeding 3000–4000 mg/day have antiplatelet effects and require medical supervision in patients on anticoagulants.

### Sources

- [Harris W.S., Von Schacky C. The Omega-3 Index: a new risk factor for death from coronary heart disease? Prev Med, 2004;39(1):212–220](https://pubmed.ncbi.nlm.nih.gov/15207989/)
- [Global Organization for EPA and DHA Omega-3s (GOED). Clinical Practice Recommendations for EPA and DHA Omega-3 Intake, 2022](https://goedomega3.com/intake-recommendations)
- [Guu T.W. et al. International Society for Nutritional Psychiatry Research Practice Guidelines for Omega-3 Fatty Acids in the Treatment of Major Depressive Disorder. Psychother Psychosom, 2019;88(5):263–273](https://pubmed.ncbi.nlm.nih.gov/31480072/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="omega-3" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="omega-3" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/omega-3?lang=en&theme=auto"
  title="Omega-3 Intake &amp; Index Calculator (EPA + DHA)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
