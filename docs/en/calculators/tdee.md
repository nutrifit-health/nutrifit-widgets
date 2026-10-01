# Daily calorie needs calculator (TDEE)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tdee.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tdee.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md)

[← Calculator catalog](../CALCULATORS.md)

`tdee` · [NutriFit](https://nutrifit.health/calculators/tdee)

Calculates basal metabolic rate and total daily energy expenditure, plus calorie targets for losing, maintaining and gaining weight.

### How to use

1. Enter body stats: Provide accurate weight, height, sex, and age to compute your Basal Metabolic Rate (BMR).
2. Select activity level: Be honest with your weekly routine. If working a desk job, do not overestimate your activity without consistent sports.
3. Review goal targets: Maintenance uses TDEE; the weight-loss target is 20% below TDEE and the weight-gain target is 15% above it.

### Method and formula

Basal metabolic rate (BMR) is calculated with the Mifflin-St Jeor equation of 1990 — the current standard for healthy adults. Total daily energy expenditure (TDEE) is BMR multiplied by an activity factor. The weight-loss target is 20% below TDEE and the gain target is 15% above it: these rates change body weight without losing muscle tissue and without sharp swings.

BMR (men) = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5; BMR (women) = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161; TDEE = BMR × activity factor

### Limitations

The equation was derived on healthy adults and carries an error of about ±10%. It ignores body composition: with high muscle mass the result is underestimated, with obesity it is overestimated. Pregnancy, childhood, elite sport and thyroid disorders require separate methods.

### Sources

- [Mifflin M.D., St Jeor S.T. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tdee" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="tdee" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=en&theme=auto"
  title="Daily calorie needs calculator (TDEE)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
