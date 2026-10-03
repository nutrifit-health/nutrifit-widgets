# Estimated sweat loss during exercise

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sweat-rate.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sweat-rate.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md)

[← Calculator catalog](../CALCULATORS.md)

`sweat-rate` · [NutriFit](https://nutrifit.health/calculators/sweat-rate)

Sweat (L) ≈ pre-weight − post-weight (kg) + drink (L) − urine (L); rate = sweat / duration in hours. Weigh under matching conditions without wet clothing.

### Usage

1. Enter the starting values: Sweat (L) ≈ pre-weight − post-weight (kg) + drink (L) − urine (L); rate = sweat / duration in hours. Weigh under matching conditions without wet clothing.
2. Adjust the parameters: Sweat Loss (mL) = (Pre_Weight − Post_Weight, g) + Fluid_Consumed(mL) − Urine(mL); Sweat Rate (L/h) = (Sweat Loss / Duration_min) × 60 / 1000; Dehydration % = ((Pre_Weight − Post_Weight) / Pre_Weight) × 100.
3. Read the result: Percentage body mass loss does not diagnose dehydration; a negative value indicates gain. NATA (2017): 100–150% of net body mass loss is a conditional postexercise replacement reference, especially with recovery under four hours. It is not a mandatory amount for everyone or an intake rate during exercise.

### Method and formula

Sweat (L) ≈ pre-weight − post-weight (kg) + drink (L) − urine (L); rate = sweat / duration in hours. Weigh under matching conditions without wet clothing.

Sweat (L) ≈ pre-weight − post-weight (kg) + drink (L) − urine (L); rate = sweat / duration in hours. Weigh under matching conditions without wet clothing.

### Limitations

Percentage body mass loss does not diagnose dehydration; a negative value indicates gain. NATA (2017): 100–150% of net body mass loss is a conditional postexercise replacement reference, especially with recovery under four hours. It is not a mandatory amount for everyone or an intake rate during exercise.

### Sources

- [NATA. Fluid Replacement for the Physically Active, 2017.](https://nata.kglmeridian.com/view/journals/attr/52/9/article-p877.xml)
- [American College of Sports Medicine et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas DT et al. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs SM et al. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011](https://pubmed.ncbi.nlm.nih.gov/22150427/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sweat-rate" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="sweat-rate" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sweat-rate?lang=en&theme=auto"
  title="Estimated sweat loss during exercise" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
