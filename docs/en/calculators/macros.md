# Macronutrient calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/macros.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/macros.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md)

[← Calculator catalog](../CALCULATORS.md)

`macros` · [NutriFit](https://nutrifit.health/calculators/macros)

Splits a daily calorie target into protein, fat and carbohydrates based on body weight and goal — in grams, calories and percentages.

### How to use

1. Choose your calculation mode: Either enter your existing calorie target, or let NutriFit calculate your Total Daily Energy Expenditure (TDEE) based on your age, sex, height, weight, and activity.
2. Select your goal and body weight: Choose fat loss (20% deficit), weight maintenance, or muscle gain (15% surplus). Body weight can be entered in kilograms or pounds.
3. Get your personalized macro targets: Instantly view your recommended protein, fat, and carbohydrate intake in grams, calories, and percentage of total energy.

### Method and formula

Protein and fat are calculated from body weight rather than as a share of calories: these are physiological requirements that should not shift with intake. Protein follows the ISSN position stand (1.4–2.4 g/kg depending on goal). Fat is estimated from body weight using a practical range of 0.8–1.2 g/kg, and the resulting percentage of energy is compared with the AMDR reference range of 20–35%. Carbohydrates take the remaining calories: they fuel training and brain function.

Protein(g) = weight × goal factor; Fat(g) = weight × 0.8…1.2; Carbs(g) = (calories − protein × 4 − fat × 9) / 4

### Limitations

Calculating from total body weight overestimates protein in marked obesity — lean body mass is the better basis there. The model does not cover meal distribution, fibre or individual carbohydrate tolerance.

### Sources

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: Protein and Exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
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
  title="Macronutrient calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
