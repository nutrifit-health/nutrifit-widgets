# Perceived Stress Scale (PSS-10)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/pss-10.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/pss-10.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md)

[← Calculator catalog](../CALCULATORS.md)

`pss-10` · [NutriFit](https://nutrifit.health/calculators/pss-10)

The classic psychological scale by Sheldon Cohen designed to measure the degree to which situations in one's life are appraised as unpredictable, uncontrollable, and overloading.

### How to use

1. Focus on the last month: Reflect upon your thoughts and feelings over the preceding 30 days as an integrated continuum.
2. Select your response frequency: Rate each statement from 0 ('Never') to 4 ('Very often'), answering spontaneously.
3. Analyze your stress profile: Review your score, understand your coping reserve status, and implement restorative interventions.

### Method and formula

10 questions rated on a 5-point Likert scale (0 to 4). Items 4, 5, 7, and 8 are reverse-scored to assess psychological resilience and perceived coping efficacy.

Total PSS-10 Score = Direct items (1, 2, 3, 6, 9, 10) + Inverted items (4, 5, 7, 8). 0–13: Low stress; 14–26: Moderate stress; 27–40: High perceived stress.

### Limitations

The test measures subjective cognitive appraisal of stress rather than objective physical pathology. In case of chronic burnout or depression, consult a licensed clinician.

### Sources

- [Cohen S. et al. A global measure of perceived stress. J Health Soc Behav, 1983;24(4):385–396](https://pubmed.ncbi.nlm.nih.gov/6668417/)
- [Cohen S., Williamson G.M. Perceived stress in a probability sample of the United States. The Social Psychology of Health, 1988:31–67](https://psycnet.apa.org/record/1988-98838-002)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="pss-10" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="pss-10" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/pss-10?lang=en&theme=auto"
  title="Perceived Stress Scale (PSS-10)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
