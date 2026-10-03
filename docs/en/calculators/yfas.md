# Yale Food Addiction Scale mYFAS 2.0

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/yfas.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/yfas.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md)

[← Calculator catalog](../CALCULATORS.md)

`yfas` · [NutriFit](https://nutrifit.health/calculators/yfas)

mYFAS 2.0: 13 questions about eating problems over the past 12 months.

### Usage

1. Read the instructions: Consider the stated period and the meaning of each statement.
2. Choose your answers: Answer each item by choosing the appropriate option.
3. View the result: The result reflects your answers; interpret it within the limits of the measure.

### Method and formula

Eight frequency options, from never to every day. Each item has its own frequency threshold; yes/no answers are not used.

Items 5 and 6 assess distress/impairment. The other 11 determine symptom count. With distress/impairment: 2–3 symptoms indicate a mild, 4–5 a moderate and 6–11 a severe screening category; otherwise the scale criterion is not met.

### Limitations

This informational result does not establish a diagnosis or prescribe treatment. Translated versions are informational adaptations; separate psychometric validation of each translation has not been confirmed.

### Sources

- [Schulte, Gearhardt. Modified Yale Food Addiction Scale 2.0: original form and scoring](https://sites.lsa.umich.edu/fastlab/yale-food-addiction-scale/)
- [Schulte EM et al. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017](https://pubmed.ncbi.nlm.nih.gov/28370722/)
- [Gearhardt AN et al. Development of the Yale Food Addiction Scale Version 2.0. Psychol Addict Behav, 2016](https://pubmed.ncbi.nlm.nih.gov/26866783/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="yfas" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="yfas" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/yfas?lang=en&theme=auto"
  title="Yale Food Addiction Scale mYFAS 2.0" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
