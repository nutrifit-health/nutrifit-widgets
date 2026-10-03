# Perceived Stress Scale (PSS-10)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/pss-10.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/pss-10.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md)

[← Calculator catalog](../CALCULATORS.md)

`pss-10` · [NutriFit](https://nutrifit.health/calculators/pss-10)

Perceived stress over the last month, assessed using the 10 PSS-10 items.

### Usage

1. Read the instructions: Consider the stated period and the meaning of each statement.
2. Choose your answers: Answer each item by choosing the appropriate option.
3. View the result: The result reflects your answers; interpret it within the limits of the measure.

### Method and formula

10 answers from 0 to 4. Items 4, 5, 7 and 8 are scored as 4 minus the answer.

Sum from 0 to 40. Higher scores indicate greater perceived stress; the author sets no low, moderate or high stress cutoffs.

### Limitations

This informational result does not establish a diagnosis or prescribe treatment. Translated versions are informational adaptations; separate psychometric validation of each translation has not been confirmed.

### Sources

- [Cohen. Perceived Stress Scale: author instructions and scoring limitations](https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/index.html)
- [Cohen S et al. A global measure of perceived stress. J Health Soc Behav, 1983](https://pubmed.ncbi.nlm.nih.gov/6668417/)
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
