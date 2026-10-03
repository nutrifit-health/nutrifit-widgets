# Heuristic daily water estimate

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/water.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/water.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md)

[← Calculator catalog](../CALCULATORS.md)

`water` · [NutriFit](https://nutrifit.health/calculators/water)

Selected model: 30 mL/kg + 500 mL per hour of activity + 500 mL in heat. An assumed 75% comes from drinks; a glass is 250 mL. No age-related reduction is applied.

### Usage

1. Enter the starting values: Selected model: 30 mL/kg + 500 mL per hour of activity + 500 mL in heat. An assumed 75% comes from drinks; a glass is 250 mL. No age-related reduction is applied.
2. Adjust the parameters: Selected model: 30 mL/kg + 500 mL per hour of activity + 500 mL in heat. An assumed 75% comes from drinks; a glass is 250 mL. No age-related reduction is applied.
3. Read the result: These are model assumptions, not EFSA requirements. EFSA total water from drinks and food is 2.0 L for women and 2.5 L for men, the same for adults and older adults under moderate conditions. Actual sweat losses and disease-related limits need separate assessment.

### Method and formula

Selected model: 30 mL/kg + 500 mL per hour of activity + 500 mL in heat. An assumed 75% comes from drinks; a glass is 250 mL. No age-related reduction is applied.

Selected model: 30 mL/kg + 500 mL per hour of activity + 500 mL in heat. An assumed 75% comes from drinks; a glass is 250 mL. No age-related reduction is applied.

### Limitations

These are model assumptions, not EFSA requirements. EFSA total water from drinks and food is 2.0 L for women and 2.5 L for men, the same for adults and older adults under moderate conditions. Actual sweat losses and disease-related limits need separate assessment.

### Sources

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [American College of Sports Medicine et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

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
  title="Heuristic daily water estimate" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
