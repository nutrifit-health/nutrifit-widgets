# Energy estimates from fat-free mass

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/katch-mcardle.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/katch-mcardle.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md)

[← Calculator catalog](../CALCULATORS.md)

`katch-mcardle` · [NutriFit](https://nutrifit.health/calculators/katch-mcardle)

Fat-free mass = weight × (1 − fat / 100). Katch–McArdle: 370 + 21.6 × fat-free mass; Cunningham: 500 + 22 × fat-free mass. Daily Katch estimate multiplies by the selected activity factor.

### Usage

1. Enter the starting values: Fat-free mass = weight × (1 − fat / 100). Katch–McArdle: 370 + 21.6 × fat-free mass; Cunningham: 500 + 22 × fat-free mass. Daily Katch estimate multiplies by the selected activity factor.
2. Adjust the parameters: LBM = Weight × (1 − % Body Fat / 100); BMR (Katch) = 370 + 21.6 × LBM(kg); TDEE = BMR × Activity Factor; BMR (Cunningham) = 500 + 22 × LBM(kg).
3. Read the result: These are estimates, not calorimetry measurements. Body fat error and approximate activity factors affect results. A difference between equations does not establish which is more accurate for you.

### Method and formula

Fat-free mass = weight × (1 − fat / 100). Katch–McArdle: 370 + 21.6 × fat-free mass; Cunningham: 500 + 22 × fat-free mass. Daily Katch estimate multiplies by the selected activity factor.

LBM = Weight × (1 − % Body Fat / 100); BMR (Katch) = 370 + 21.6 × LBM(kg); TDEE = BMR × Activity Factor; BMR (Cunningham) = 500 + 22 × LBM(kg).

### Limitations

These are estimates, not calorimetry measurements. Body fat error and approximate activity factors affect results. A difference between equations does not establish which is more accurate for you.

### Sources

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer](https://medicine.lww.com/Book/isbn/9781451191554)
- [Cunningham JJ. et al. Body composition as a determinant of energy expenditure: a synthetic review and a proposed general prediction equation. Am J Clin Nutr, 1991](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990](https://pubmed.ncbi.nlm.nih.gov/2305711/)

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
  title="Energy estimates from fat-free mass" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
