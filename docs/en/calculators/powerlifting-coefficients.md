# Powerlifting Coefficients Calculator (DOTS, Wilks, IPF GL)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/powerlifting-coefficients.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/powerlifting-coefficients.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md)

[← Calculator catalog](../CALCULATORS.md)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/calculators/powerlifting-coefficients)

Evaluates and benchmarks relative strength in powerlifting (squat, bench press, deadlift) across diverse body weights and sexes using DOTS, Wilks, and IPF GL Points.

### How to use

1. Sum Best Lifts in the Three Disciplines: Sum your top successful attempts in squat, bench press, and deadlift executed under competition rules.
2. Enter Exact Official Weigh-In Body Mass: Use your verified scale weight recorded at the morning technical weigh-in before lifting.
3. Evaluate Your DOTS and IPF GL Points: Compare your score against athletic standards: 300 points is solid intermediate, 400 is national contender, 500+ is international elite.

### Method and formula

Allometric scaling dictates that muscular strength scales with cross-sectional area (height squared), while body mass scales with volume (height cubed). Powerlifting formulas utilize polynomial and exponential curves to neutralize body mass advantages.

DOTS: Coefficient = 500 / (A×Weight^4 + B×Weight^3 + C×Weight^2 + D×Weight + E); Points = Total (kg) × Coefficient; IPF GL Points: 100 × Total / (A − B × e^(−C × Weight)); Wilks: 5th-order polynomial.

### Limitations

Calibrated for competitive three-lift powerlifting. Not applicable to Olympic weightlifting (which uses the Sinclair coefficient) or single-joint strength sports.

### Sources

- [Perotti L. et al. The DOTS Formula: A new formula for evaluating strength athletes across weight classes, 2019](https://pubmed.ncbi.nlm.nih.gov/31804245/)
- [Wilks R. The Wilks Formula for Powerlifting. Australian Powerlifting Federation, 1997](https://www.powerlifting.sport/)
- [International Powerlifting Federation. IPF GL Points Formula for Classic and Equipped Powerlifting, 2020](https://www.powerlifting.sport/rules/codes/info/ipf-formula)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="powerlifting-coefficients" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="powerlifting-coefficients" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/powerlifting-coefficients?lang=en&theme=auto"
  title="Powerlifting Coefficients Calculator (DOTS, Wilks, IPF GL)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
