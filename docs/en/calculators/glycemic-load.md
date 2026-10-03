# Glycemic load of a portion

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/glycemic-load.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/glycemic-load.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md)

[← Calculator catalog](../CALCULATORS.md)

`glycemic-load` · [NutriFit](https://nutrifit.health/calculators/glycemic-load)

GL = GI × available carbohydrate in the portion / 100. Enter GI for the specific food and preparation on the glucose = 100 scale, available carbohydrate per 100 g and portion weight. Initial numbers are a demonstration.

### Usage

1. Enter the starting values: GL = GI × available carbohydrate in the portion / 100. Enter GI for the specific food and preparation on the glucose = 100 scale, available carbohydrate per 100 g and portion weight. Initial numbers are a demonstration.
2. Adjust the parameters: GL = GI × available carbohydrate in the portion / 100. Enter GI for the specific food and preparation on the glucose = 100 scale, available carbohydrate per 100 g and portion weight. Initial numbers are a demonstration.
3. Read the result: GL does not predict individual glucose levels or insulin doses. Portion categories do not define a universal daily target. Unverified average values for specific foods are not filled automatically.

### Method and formula

GL = GI × available carbohydrate in the portion / 100. Enter GI for the specific food and preparation on the glucose = 100 scale, available carbohydrate per 100 g and portion weight. Initial numbers are a demonstration.

Serving carbs(g) = carbs per 100 g × serving weight / 100; GL = GI × serving carbs / 100

### Limitations

GL does not predict individual glucose levels or insulin doses. Portion categories do not define a universal daily target. Unverified average values for specific foods are not filled automatically.

### Sources

- [Atkinson FS et al. International tables of glycemic index and glycemic load values 2021: a systematic review. Am J Clin Nutr, 2021](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin LSA et al. Glycemic index, glycemic load and glycemic response: An International Scientific Consensus Summit from the International Carbohydrate Quality Consortium (ICQC). Nutr Metab Cardiovasc Dis, 2015](https://pubmed.ncbi.nlm.nih.gov/26160327/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="glycemic-load" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="glycemic-load" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/glycemic-load?lang=en&theme=auto"
  title="Glycemic load of a portion" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
