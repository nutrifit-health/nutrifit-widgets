# Patient Health Questionnaire-9 (PHQ-9 Depression)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phq-9.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phq-9.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md)

[← Calculator catalog](../CALCULATORS.md)

`phq-9` · [NutriFit](https://nutrifit.health/calculators/phq-9)

Depressive symptom severity over the last 2 weeks: 9 frequency responses scored 0–3; total 0–27.

### Usage

1. Enter the starting values: Depressive symptom severity over the last 2 weeks: 9 frequency responses scored 0–3; total 0–27.
2. Adjust the parameters: Depressive symptom severity over the last 2 weeks: 9 frequency responses scored 0–3; total 0–27.
3. Read the result: Informational translation for self-assessment. Validation of this particular adaptation has not been confirmed. A score does not establish a diagnosis, and a low score does not rule out illness. Any nonzero response to item 9 requires a separate discussion of thoughts of death or self-harm with a professional regardless of the total. Seek urgent help if there is immediate danger.

### Method and formula

Depressive symptom severity over the last 2 weeks: 9 frequency responses scored 0–3; total 0–27.

Depressive symptom severity over the last 2 weeks: 9 frequency responses scored 0–3; total 0–27.

### Limitations

Informational translation for self-assessment. Validation of this particular adaptation has not been confirmed. A score does not establish a diagnosis, and a low score does not rule out illness. Any nonzero response to item 9 requires a separate discussion of thoughts of death or self-harm with a professional regardless of the total. Seek urgent help if there is immediate danger.

### Sources

- [Kroenke K et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer RL et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. Primary Care Evaluation of Mental Disorders. Patient Health Questionnaire. JAMA, 1999](https://pubmed.ncbi.nlm.nih.gov/10568646/)

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
