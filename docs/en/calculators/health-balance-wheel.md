# Author-defined self-rating wheel

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/health-balance-wheel.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/health-balance-wheel.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md)

[← Calculator catalog](../CALCULATORS.md)

`health-balance-wheel` · [NutriFit](https://nutrifit.health/calculators/health-balance-wheel)

Rate your satisfaction with eight areas over the past 14 days from 1 to 10. Overall score = mean × 10; uniformity index = max(0, 100 − 18 × standard deviation), rounded.

### Usage

1. Enter the starting values: Rate your satisfaction with eight areas over the past 14 days from 1 to 10. Overall score = mean × 10; uniformity index = max(0, 100 − 18 × standard deviation), rounded.
2. Adjust the parameters: Rate your satisfaction with eight areas over the past 14 days from 1 to 10. Overall score = mean × 10; uniformity index = max(0, 100 − 18 × standard deviation), rounded.
3. Read the result: This is an author-defined visualization, not a validated clinical test or law of health. Equal low scores produce high uniformity and do not imply good health. Initial values and presets are demonstrations; confirm all eight ratings.

### Method and formula

Rate your satisfaction with eight areas over the past 14 days from 1 to 10. Overall score = mean × 10; uniformity index = max(0, 100 − 18 × standard deviation), rounded.

Rate your satisfaction with eight areas over the past 14 days from 1 to 10. Overall score = mean × 10; uniformity index = max(0, 100 − 18 × standard deviation), rounded.

### Limitations

This is an author-defined visualization, not a validated clinical test or law of health. Equal low scores produce high uniformity and do not imply good health. Initial values and presets are demonstrations; confirm all eight ratings.

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="health-balance-wheel" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="health-balance-wheel" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/health-balance-wheel?lang=en&theme=auto"
  title="Author-defined self-rating wheel" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
