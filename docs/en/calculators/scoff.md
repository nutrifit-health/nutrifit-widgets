# SCOFF Eating Disorder Screening Questionnaire

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/scoff.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/scoff.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/scoff.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/scoff.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/scoff.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/scoff.md)

[← Calculator catalog](../CALCULATORS.md)

`scoff` · [NutriFit](https://nutrifit.health/calculators/scoff)

An internationally recognized 5-question clinical screening tool designed to identify the risk of eating disorders (anorexia nervosa and bulimia nervosa).

### How to use

1. Read each of the 5 questions carefully: Reflect on your habitual eating behaviors, body image feelings, and relationship with food over recent months.
2. Answer Yes or No honestly: Provide candid answers without rationalizing behaviors or minimizing personal distress.
3. Review your screening result: Learn whether your responses suggest clinical risk and examine recommended next steps.

### Method and formula

The tool contains 5 binary (Yes/No) questions reflecting key diagnostic criteria: self-induced vomiting, loss of control, rapid weight loss, distorted body image, and food preoccupation.

Total SCOFF Score = Number of affirmative answers (0–5). A score of ≥ 2 indicates a positive screen and high risk of an eating disorder.

### Limitations

The SCOFF questionnaire is exclusively an initial screening tool. It does not establish a definitive medical diagnosis and requires clinical evaluation by an ED specialist.

### Sources

- [Morgan J.F. et al. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ, 1999;319(7223):1467–1468](https://pubmed.ncbi.nlm.nih.gov/10582927/)
- [Luck A.J. et al. The SCOFF questionnaire and clinical interview for detecting eating disorders. BMJ, 2002;325(7367):755–756](https://pubmed.ncbi.nlm.nih.gov/12364305/)

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
