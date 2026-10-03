# Dish nutrition calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/nutrition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/nutrition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/nutrition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/nutrition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/nutrition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/nutrition.md)

[← Calculator catalog](../CALCULATORS.md)

`nutrition`

For `nutrition`: find public foods or recipes, add their weights in grams and enter the finished dish weight. Select Calculate to see totals and values per 100 g; PDF and CSV export are available. Missing nutrient data is marked as incomplete, never silently treated as zero. Up to 50 ingredients are supported.

## Method and data

The NutriFit server sums available nutrient values from the selected public foods and recipes at the supplied ingredient weights. It returns dish totals and values per 100 g based on the finished dish weight. PDF performs a fresh server calculation; CSV exports the displayed result.

Enter each ingredient’s weight in the form selected from the catalog (raw or cooked), and the finished dish weight for values per 100 g. Cooking and draining nutrient losses are not modeled.

## Limitations

Up to 50 ingredients. Enter weights in grams and a positive finished dish weight. Missing values remain incomplete, not zero. Ingredient and recipe data may change; a PDF may differ from the earlier screen result. This calculation is an estimate and does not diagnose conditions or prescribe treatment.

## Sources

NutriFit public food and recipe catalog; the widget identifies its data source and calculation time.

- [NutriFit](https://nutrifit.health)
- [NutriFit recipes](https://nutrifit.health/recipes)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { NutritionCalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <NutritionCalculatorFrame locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="nutrition" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/nutrition-calculator?lang=en&theme=auto"
  title="Dish nutrition calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:680px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
