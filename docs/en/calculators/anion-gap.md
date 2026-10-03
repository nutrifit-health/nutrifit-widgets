# Anion Gap and Delta Ratio Calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/anion-gap.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/anion-gap.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md)

[← Calculator catalog](../CALCULATORS.md)

`anion-gap` · [NutriFit](https://nutrifit.health/calculators/anion-gap)

Anion gap = Na − Cl − HCO₃; albumin adjustment = 0.25 × (40 − albumin in g/L). Delta ratio = (corrected gap − selected reference) / (reference bicarbonate − HCO₃).

### Usage

1. Enter the starting values: Anion gap = Na − Cl − HCO₃; albumin adjustment = 0.25 × (40 − albumin in g/L). Delta ratio = (corrected gap − selected reference) / (reference bicarbonate − HCO₃).
2. Adjust the parameters: Anion gap = Na − Cl − HCO₃; albumin adjustment = 0.25 × (40 − albumin in g/L). Delta ratio = (corrected gap − selected reference) / (reference bicarbonate − HCO₃).
Reference values depend on the laboratory method. Delta is calculated only with a positive numerator and denominator. A number alone cannot establish a diagnosis without pH, blood gases and clinical context.
3. Read the result: Reference values depend on the laboratory method. Delta is calculated only with a positive numerator and denominator. A number alone cannot establish a diagnosis without pH, blood gases and clinical context.

### Method and formula

Anion gap = Na − Cl − HCO₃; albumin adjustment = 0.25 × (40 − albumin in g/L). Delta ratio = (corrected gap − selected reference) / (reference bicarbonate − HCO₃).

Anion gap = Na − Cl − HCO₃; albumin adjustment = 0.25 × (40 − albumin in g/L). Delta ratio = (corrected gap − selected reference) / (reference bicarbonate − HCO₃).
Reference values depend on the laboratory method. Delta is calculated only with a positive numerator and denominator. A number alone cannot establish a diagnosis without pH, blood gases and clinical context.

### Limitations

Reference values depend on the laboratory method. Delta is calculated only with a positive numerator and denominator. A number alone cannot establish a diagnosis without pH, blood gases and clinical context.

### Sources

- [Kraut JA et al. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J et al. Anion gap and hypoalbuminemia. Crit Care Med, 1998](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K et al. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014](https://pubmed.ncbi.nlm.nih.gov/25295502/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="anion-gap" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="anion-gap" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/anion-gap?lang=en&theme=auto"
  title="Anion Gap and Delta Ratio Calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
