# Eating Behavior Diagnostic Wizard

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/eating-behavior-wizard.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/eating-behavior-wizard.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/eating-behavior-wizard.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/eating-behavior-wizard.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/eating-behavior-wizard.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/eating-behavior-wizard.md)

[← Calculator catalog](../CALCULATORS.md)

`eating-behavior-wizard` · [NutriFit](https://nutrifit.health/calculators/eating-behavior-wizard)

An integrated diagnostic wizard by NutriFit synthesizing leading validated scales to identify your core eating behavior archetype and personalized action plan.

### How to use

1. Complete clinical risk screening: Note critical indicators regarding food preoccupation and rigid body weight control.
2. Configure eating behavior dimensions: Indicate your tendencies toward dietary restriction, stress-driven eating, and external cues.
3. Receive your archetype and strategy: Review your primary pattern description and download your detailed PDF report.

### Method and formula

NutriFit multi-factor algorithm correlating markers of dietary restraint, emotional eating, external cues, and eating disorder risk into an eating profile.

Comprehensive classification matrix based on cross-scale correlations among DEBQ, SCOFF, IES-2, and mYFAS 2.0.

### Limitations

This tool is designed for self-discovery and nutritional counseling guidance. It does not replace a clinical psychiatric diagnostic interview.

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
  title="Eating Behavior Diagnostic Wizard" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
