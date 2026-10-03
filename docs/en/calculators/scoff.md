# SCOFF Eating Disorder Screening Questionnaire

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/scoff.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/scoff.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/scoff.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/scoff.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/scoff.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/scoff.md)

[← Calculator catalog](../CALCULATORS.md)

`scoff` · [NutriFit](https://nutrifit.health/calculators/scoff)

An internationally recognized 5-question clinical screening tool designed to identify the risk of eating disorders (anorexia nervosa and bulimia nervosa).

### Usage

1. Read the instructions: Consider the stated period and the meaning of each statement.
2. Choose your answers: Answer each item by choosing the appropriate option.
3. View the result: Positive screen — further assessment is needed

### Method and formula

The tool contains 5 binary (Yes/No) questions reflecting key diagnostic criteria: self-induced vomiting, loss of control, rapid weight loss, distorted body image, and food preoccupation.

Total SCOFF Score = Number of affirmative answers (0–5). A score of ≥ 2 indicates a positive screen and high risk of an eating disorder.

### Limitations

This informational result does not establish a diagnosis or prescribe treatment. Translated versions are informational adaptations; separate psychometric validation of each translation has not been confirmed.

### Sources

- [Morgan JF et al. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ, 1999](https://pubmed.ncbi.nlm.nih.gov/10582927/)
- [Luck AJ et al. The SCOFF questionnaire and clinical interview for eating disorders in general practice: comparative study. BMJ, 2002](https://pubmed.ncbi.nlm.nih.gov/12364305/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="scoff" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="scoff" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/scoff?lang=en&theme=auto"
  title="SCOFF Eating Disorder Screening Questionnaire" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
