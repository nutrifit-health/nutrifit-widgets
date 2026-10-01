# Intuitive Eating Scale-2 (IES-2)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ies-2.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ies-2.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md)

[← Calculator catalog](../CALCULATORS.md)

`ies-2` · [NutriFit](https://nutrifit.health/calculators/ies-2)

A scientifically validated 23-item psychometric instrument by Tracy Tylka designed to measure adaptive, intuitive relationships with food and body signals.

### How to use

1. Assess your habitual eating mindset: Answer according to your genuine attitudes and everyday behaviors over recent months.
2. Rate your level of agreement from 1 to 5: 1 represents 'Strongly disagree', and 5 represents 'Strongly agree'.
3. Review your 4 subscale scores: Identify areas with scores below 3.0, as they indicate targets for nutritional and psychological healing.

### Method and formula

23 items scored on a 5-point Likert scale across 4 subscales: Unconditional Permission to Eat (UPE), Eating for Physical Rather than Emotional Reasons (EPR), Reliance on Hunger and Satiety Cues (RHSC), and Body-Food Choice Congruence (B-FCC).

Overall IES-2 Score = Arithmetic mean of all 23 items taking reverse scoring into account (1.0 to 5.0). Scores > 3.5 indicate intuitive eating competence.

### Limitations

The scale evaluates psychological eating patterns. In the presence of active clinical eating disorders, intuitive eating principles must be guided by specialized clinicians.

### Sources

- [Tylka T.L., Kroon Van Diest A.M. The Intuitive Eating Scale-2: item refinement and psychometric evaluation. J Couns Psychol, 2013;60(1):137–153](https://pubmed.ncbi.nlm.nih.gov/23356469/)
- [Tribole E., Resch E. Intuitive Eating: A Revolutionary Anti-Diet Approach. St. Martin’s Essentials, 2020](https://www.intuitiveeating.org/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ies-2" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="ies-2" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ies-2?lang=en&theme=auto"
  title="Intuitive Eating Scale-2 (IES-2)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
