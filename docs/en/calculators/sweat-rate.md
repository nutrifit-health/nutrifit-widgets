# Sweat Rate & Hydration Calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sweat-rate.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sweat-rate.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md)

[← Calculator catalog](../CALCULATORS.md)

`sweat-rate` · [NutriFit](https://nutrifit.health/calculators/sweat-rate)

Determines individual sweat loss rate and calculates personalized post-exercise fluid and electrolyte replacement needs.

### How to use

1. Weigh yourself before the workout: Empty your bladder and record your nude weight on a calibrated digital scale immediately before beginning exercise.
2. Track fluid intake during exercise: Drink from a dedicated bottle with milliliter markings so you know exactly how much fluid you consumed.
3. Weigh yourself completely dry at the finish: Towel off all sweat from your skin and hair before stepping back onto the scale unclothed.

### Method and formula

Based on the American College of Sports Medicine (ACSM) fluid replacement protocol. Pre- and post-workout nude body mass, along with fluid consumed and urine produced, establishes hourly sweat loss under specific environmental conditions.

Sweat Loss (mL) = (Pre_Weight − Post_Weight, g) + Fluid_Consumed(mL) − Urine(mL); Sweat Rate (L/h) = (Sweat Loss / Duration_min) × 60 / 1000; Dehydration % = ((Pre_Weight − Post_Weight) / Pre_Weight) × 100.

### Limitations

Does not account for substrate mass loss from glycogen depletion or respiratory water vapor (~100–150 g/hour during heavy exertion). Provides a reliable clinical proxy for fluid deficit.

### Sources

- [Sawka M.N. et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007;39(2):377–390](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas D.T., Erdman K.A., Burke L.M. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016;116(3):501–528](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs S.M., Sawka M.N. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011;29(Suppl 1):S39–S46](https://pubmed.ncbi.nlm.nih.gov/22150427/)

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
  title="Sweat Rate &amp; Hydration Calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
