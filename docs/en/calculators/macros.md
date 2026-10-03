# Author-defined macro planner

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/macros.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/macros.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md)

[← Calculator catalog](../CALCULATORS.md)

`macros` · [NutriFit](https://nutrifit.health/calculators/macros)

Protein presets: 1.8–2.2 g/kg for loss, 1.4–1.8 for maintenance, 1.8–2.4 for gain; fat 0.8–1.2 g/kg. Uses range midpoints; carbohydrate is the calorie remainder with 4/9/4 kcal/g factors.

### Usage

1. Enter the starting values: Protein presets: 1.8–2.2 g/kg for loss, 1.4–1.8 for maintenance, 1.8–2.4 for gain; fat 0.8–1.2 g/kg. Uses range midpoints; carbohydrate is the calorie remainder with 4/9/4 kcal/g factors.
2. Adjust the parameters: Protein presets: 1.8–2.2 g/kg for loss, 1.4–1.8 for maintenance, 1.8–2.4 for gain; fat 0.8–1.2 g/kg. Uses range midpoints; carbohydrate is the calorie remainder with 4/9/4 kcal/g factors.
3. Read the result: This is an author-defined allocation, not verbatim ISSN requirements or a physiological minimum for fat. No complete plan is displayed if protein and fat exceed calories. Adult fat AMDR 20–35% is a separate reference range, not an individual prescription.

### Method and formula

Protein presets: 1.8–2.2 g/kg for loss, 1.4–1.8 for maintenance, 1.8–2.4 for gain; fat 0.8–1.2 g/kg. Uses range midpoints; carbohydrate is the calorie remainder with 4/9/4 kcal/g factors.

Protein(g) = weight × goal factor; Fat(g) = weight × 0.8…1.2; Carbs(g) = (calories − protein × 4 − fat × 9) / 4

### Limitations

This is an author-defined allocation, not verbatim ISSN requirements or a physiological minimum for fat. No complete plan is displayed if protein and fat exceed calories. Adult fat AMDR 20–35% is a separate reference range, not an individual prescription.

### Sources

- [Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids, 2005 (AMDR)](https://nap.nationalacademies.org/catalog/10490)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="macros" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="macros" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/macros?lang=en&theme=auto"
  title="Author-defined macro planner" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
