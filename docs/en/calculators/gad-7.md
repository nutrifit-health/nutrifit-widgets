# Generalized Anxiety Disorder 7-Item Scale (GAD-7)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/gad-7.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/gad-7.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/gad-7.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/gad-7.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/gad-7.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/gad-7.md)

[← Calculator catalog](../CALCULATORS.md)

`gad-7` · [NutriFit](https://nutrifit.health/calculators/gad-7)

An international clinical screening instrument designed to rapidly evaluate the severity of generalized anxiety and emotional tension.

### How to use

1. Assess symptoms over the last 14 days: Recall how frequently you have been bothered by nervousness, worrying, or inner restlessness over the past two weeks.
2. Select your response options: Mark the frequency for each symptom from 0 ('Not at all') to 3 ('Nearly every day').
3. Review your score and recommendations: Discover your anxiety severity level and explore structured strategies to restore nervous system balance.

### Method and formula

7 items scored from 0 to 3 points assessing anxiety symptoms over the preceding 2 weeks.

Total GAD-7 Score = Sum of all 7 items (range 0–21). 0–4: Minimal; 5–9: Mild; 10–14: Moderate; 15–21: Severe anxiety.

### Limitations

This screening test does not constitute a formal psychiatric diagnosis. If you experience panic attacks, phobias, or debilitating distress, consult a qualified mental health clinician.

### Sources

- [Spitzer R.L. et al. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 2006;166(10):1092–1097](https://pubmed.ncbi.nlm.nih.gov/16717171/)
- [Löwe B. et al. Validation and standardization of the Generalized Anxiety Disorder Screener (GAD-7). Med Care, 2008;46(3):266–274](https://pubmed.ncbi.nlm.nih.gov/18388841/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="gad-7" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="gad-7" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/gad-7?lang=en&theme=auto"
  title="Generalized Anxiety Disorder 7-Item Scale (GAD-7)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
