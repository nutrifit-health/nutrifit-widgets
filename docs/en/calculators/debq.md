# Dutch Eating Behavior Questionnaire (DEBQ)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/debq.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/debq.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md)

[← Calculator catalog](../CALCULATORS.md)

`debq` · [NutriFit](https://nutrifit.health/calculators/debq)

A classic validated psychological instrument designed to assess three primary eating behavior patterns: restrained eating, emotional eating, and external eating.

### How to use

1. Answer honestly: Select the option that best reflects your typical behavior and attitudes over recent months.
2. Do not overthink: Your immediate spontaneous reaction is usually the most accurate reflection of your habitual patterns.
3. Review your three subscale scores: Compare your scores with clinical normative thresholds and review customized strategies.

### Method and formula

The questionnaire contains 33 items rated on a 5-point Likert scale (1 to 5). It evaluates three subscales: cognitive restraint (10 items), emotional eating (13 items), and external stimulation (10 items).

Subscale Score = Arithmetic mean of item responses (range 1.0 to 5.0). Restrained: norm ~2.4; Emotional: norm ~1.8; External: norm ~2.7.

### Limitations

This questionnaire serves as a psychological self-assessment tool and does not constitute a clinical diagnosis. In case of significant distress, consult an eating disorder professional.

### Sources

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire. J Psychosom Res, 1987;31(2):161–169](https://pubmed.ncbi.nlm.nih.gov/3585818/)

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
  title="Dutch Eating Behavior Questionnaire (DEBQ)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
