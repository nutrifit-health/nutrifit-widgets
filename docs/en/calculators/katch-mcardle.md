# Katch-McArdle BMR & TDEE Calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/katch-mcardle.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/katch-mcardle.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md)

[← Calculator catalog](../CALCULATORS.md)

`katch-mcardle` · [NutriFit](https://nutrifit.health/calculators/katch-mcardle)

Calculates basal metabolic rate (BMR) and total daily energy expenditure (TDEE) based strictly on lean muscle mass rather than total scale weight.

### How to use

1. Determine your lean body mass: Enter your current weight and body fat percentage. The calculator will isolate your metabolically active lean mass.
2. Select an honest activity level: Be realistic: if you work a desk job and lift weights 3 times a week, choose 'Light' or 'Moderate' to avoid overestimating TDEE.
3. Compare with the Mifflin formula: Analyze the difference: if you are lean and muscular, standard formulas underestimate your caloric expenditure by 150–300 kcal/day.

### Method and formula

Unlike the Mifflin-St Jeor or Harris-Benedict formulas which rely on total body weight, the Katch-McArdle equation isolates metabolically active lean body mass (LBM). This provides unmatched precision for lean athletes and individuals with non-standard body fat levels.

LBM = Weight × (1 − % Body Fat / 100); BMR (Katch) = 370 + 21.6 × LBM(kg); TDEE = BMR × Activity Factor; BMR (Cunningham) = 500 + 22 × LBM(kg).

### Limitations

Requires prior knowledge of body fat percentage. Inaccurate body fat estimation introduces direct error into the calorie calculation.

### Sources

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer, 2014](https://pubmed.ncbi.nlm.nih.gov/15570161/)
- [Cunningham J.J. A reanalysis of balanced nutrition and the relationship to body composition and resting metabolic rate. Am J Clin Nutr, 1991;54(6):963–969](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin M.D. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="katch-mcardle" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="katch-mcardle" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/katch-mcardle?lang=en&theme=auto"
  title="Katch-McArdle BMR &amp; TDEE Calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
