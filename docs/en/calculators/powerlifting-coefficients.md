# Powerlifting coefficients: DOTS, Wilks and IPF GL

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/powerlifting-coefficients.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/powerlifting-coefficients.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md)

[← Calculator catalog](../CALCULATORS.md)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/calculators/powerlifting-coefficients)

Enter weigh-in body mass and the total of best successful squat, bench press and deadlift in kilograms. Uses DOTS, classic Wilks and IPF GL 2020 coefficients for classic powerlifting.

### Usage

1. Enter the starting values: Enter weigh-in body mass and the total of best successful squat, bench press and deadlift in kilograms. Uses DOTS, classic Wilks and IPF GL 2020 coefficients for classic powerlifting. DOTS limits the coefficient weight to 40–210 kg for men and 40–150 kg for women; outside the range the boundary weight is used.
2. Adjust the parameters: DOTS: Coefficient = 500 / (A×Weight^4 + B×Weight^3 + C×Weight^2 + D×Weight + E); Points = Total (kg) × Coefficient; IPF GL Points: 100 × Total / (A − B × e^(−C × Weight)); Wilks: 5th-order polynomial.
3. Read the result: The formulas provide different comparative scores, not a universal athlete rank. This IPF GL model is not for bench-only or equipped powerlifting. Compare the same disciplines; age adjustments are not included.

### Method and formula

Enter weigh-in body mass and the total of best successful squat, bench press and deadlift in kilograms. Uses DOTS, classic Wilks and IPF GL 2020 coefficients for classic powerlifting. DOTS limits the coefficient weight to 40–210 kg for men and 40–150 kg for women; outside the range the boundary weight is used.

DOTS: Coefficient = 500 / (A×Weight^4 + B×Weight^3 + C×Weight^2 + D×Weight + E); Points = Total (kg) × Coefficient; IPF GL Points: 100 × Total / (A − B × e^(−C × Weight)); Wilks: 5th-order polynomial.

### Limitations

The formulas provide different comparative scores, not a universal athlete rank. This IPF GL model is not for bench-only or equipped powerlifting. Compare the same disciplines; age adjustments are not included.

### Sources

- [OpenPowerlifting. Reference DOTS implementation and attribution to Tim Konertz.](https://gitlab.com/openpowerlifting/opl-data/blob/main/crates/coefficients/src/dots.rs)
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
  title="Powerlifting coefficients: DOTS, Wilks and IPF GL" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
