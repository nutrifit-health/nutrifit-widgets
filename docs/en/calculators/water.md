# Water intake calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/water.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/water.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md)

[← Calculator catalog](../CALCULATORS.md)

`water` · [NutriFit](https://nutrifit.health/calculators/water)

Calculates daily fluid needs from body weight with adjustments for physical activity and hot climate.

### How to use

1. Enter body weight: Baseline physiological water need is directly proportional to mass (approx. 30–35 ml per kg, or ~0.5 fl oz per lb).
2. Account for physical exercise: Add 350–500 ml (12–16 fl oz) of fluid for every 30 minutes of sweat-inducing exercise.
3. Adjust for temperature & climate: Hot weather (>25°C / 77°F) or dry indoor climates increase respiratory and transdermal water loss by ~500 ml.

### Method and formula

The baseline is 30 ml per kg of body weight for adults and 25 ml/kg after 60, when renal concentrating ability declines. Each hour of intense activity adds 500 ml to cover sweat losses, and a hot climate or dry heated room adds another 500 ml. The total is full water requirement; 20–30% of it comes from food, so the amount that must come from drinks is shown separately (EFSA, 2010).

Total(ml) = weight × 30 (or × 25 after 60) + 500 × hours of activity + 500 in heat; Drinks(ml) = total × 0.75

### Limitations

A reference point for healthy adults. In heart or kidney failure, on diuretics, during fever and in hot industrial work the target is set by a physician. Thirst and urine colour remain more reliable guides than any formula.

### Sources

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [Sawka M.N. et al. American College of Sports Medicine Position Stand: Exercise and Fluid Replacement, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="water" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="water" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/water?lang=en&theme=auto"
  title="Water intake calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
