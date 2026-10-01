# Patient Health Questionnaire-9 (PHQ-9 Depression)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phq-9.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phq-9.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md)

[← Calculator catalog](../CALCULATORS.md)

`phq-9` · [NutriFit](https://nutrifit.health/calculators/phq-9)

The international gold standard for primary depression screening and symptom severity assessment based on DSM-5 clinical criteria.

### How to use

1. Reflect on the past 2 weeks: Evaluate how you have felt over the last 14 days, taking into account the frequency of each described sensation.
2. Answer all 9 items: Choose the most accurate frequency for each symptom from 'Not at all' (0) to 'Nearly every day' (3).
3. Review clinical interpretation: Examine your severity category, self-care guidelines, and recommended healthcare resources.

### Method and formula

9 questions assessing the frequency of depressive symptoms over the past 2 weeks on a scale from 0 ('Not at all') to 3 ('Nearly every day').

Total PHQ-9 Score = Sum of all 9 item scores (range 0–27). 0–4: Minimal; 5–9: Mild; 10–14: Moderate; 15–19: Moderately severe; 20–27: Severe depression.

### Limitations

This screening tool does not replace clinical evaluation by a psychiatrist or psychotherapist. An affirmative answer to question 9 requires immediate clinical support.

### Sources

- [Kroenke K. et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001;16(9):606–613](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer R.L. et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. JAMA, 1999;282(18):1737–1744](https://pubmed.ncbi.nlm.nih.gov/10568646/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phq-9" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="phq-9" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phq-9?lang=en&theme=auto"
  title="Patient Health Questionnaire-9 (PHQ-9 Depression)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
