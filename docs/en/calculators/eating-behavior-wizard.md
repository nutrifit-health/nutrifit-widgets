# Eating behaviour self-assessment

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/eating-behavior-wizard.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/eating-behavior-wizard.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/eating-behavior-wizard.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/eating-behavior-wizard.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/eating-behavior-wizard.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/eating-behavior-wizard.md)

[← Calculator catalog](../CALCULATORS.md)

`eating-behavior-wizard` · [NutriFit](https://nutrifit.health/calculators/eating-behavior-wizard)

Five SCOFF questions and four author-written questions for reflection on eating behaviour.

### Usage

1. Read the instructions: Consider the stated period and the meaning of each statement.
2. Choose your answers: Answer each item by choosing the appropriate option.
3. View the result: The result reflects your answers; interpret it within the limits of the measure.

### Method and formula

SCOFF is scored using five actual yes/no answers. The other answers are shown directly.

Two or more yes answers on SCOFF produce a positive screen. The author-written questions do not calculate DEBQ, IES-2 or mYFAS scores or identify a psychological type.

### Limitations

This informational result does not establish a diagnosis or prescribe treatment. Translated versions are informational adaptations; separate psychometric validation of each translation has not been confirmed.

### Sources

- [Fairburn C.G. Cognitive Behavior Therapy and Eating Disorders. Guilford Press, 2008](https://www.guilford.com/books/Cognitive-Behavior-Therapy-and-Eating-Disorders/Christopher-Fairburn/9781593857097)
- [American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR), 2022](https://doi.org/10.1176/appi.books.9780890425787)
- [NICE (National Institute for Health and Care Excellence). Eating disorders: recognition and treatment (NG69), 2020](https://www.nice.org.uk/guidance/ng69)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="eating-behavior-wizard" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="eating-behavior-wizard" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/eating-behavior-wizard?lang=en&theme=auto"
  title="Eating behaviour self-assessment" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
