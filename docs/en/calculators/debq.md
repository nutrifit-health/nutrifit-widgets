# Eating behaviour: modified DEBQ adaptation

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/debq.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/debq.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md)

[← Calculator catalog](../CALCULATORS.md)

`debq` · [NutriFit](https://nutrifit.health/calculators/debq)

33 questions about usual eating behaviour. Three group means are shown without normality categories or diagnosis.

### Usage

1. Enter the starting values: Use actual values and the appropriate units.
2. Adjust the parameters: Adjust the starting assumptions for your situation.
3. Read the result: Consider the model limitations; a calculation is not a measurement.

### Method and formula

Emotional group: items 1–13; external: 14–23; restrained: 24–33. Each mean ranges from 1 to 5; item 17 is scored as 6 minus the answer.

Emotional group: items 1–13; external: 14–23; restrained: 24–33. Each mean ranges from 1 to 5; item 17 is scored as 6 minus the answer.

### Limitations

Items have been modified and grouped. This is not a confirmed validated version of the original DEBQ; clinical norms do not apply. Permission to use the original form requires separate confirmation.

### Sources

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. et al. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire in normal subjects and women with eating disorders. J Psychosom Res, 1987](https://pubmed.ncbi.nlm.nih.gov/3473234/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="debq" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="debq" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/debq?lang=en&theme=auto"
  title="Eating behaviour: modified DEBQ adaptation" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
