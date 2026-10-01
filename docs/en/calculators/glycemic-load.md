# Glycemic load calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/glycemic-load.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/glycemic-load.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md)

[← Calculator catalog](../CALCULATORS.md)

`glycemic-load` · [NutriFit](https://nutrifit.health/calculators/glycemic-load)

Calculates the glycemic load of a serving from its glycemic index and carbohydrate content — a measure that reflects the real glucose response better than the index alone.

### How to use

1. Select food or enter GI: Choose from official international tables (Atkinson 2021) or type in the Glycemic Index.
2. Specify carbs & portion size: Input carbohydrate grams per 100g and your actual serving weight in grams.
3. Evaluate metabolic impact: Determine the true blood glucose response: Low (≤10), Medium (11–19), or High (≥20).

### Method and formula

The glycemic index describes how fast glucose rises after a portion containing 50 g of carbohydrate, but says nothing about the size of a real serving. Glycemic load accounts for both: the index is multiplied by the carbohydrate in the actual serving and divided by 100. That is why watermelon has a high index yet a low load — a serving carries little carbohydrate.

Serving carbs(g) = carbs per 100 g × serving weight / 100; GL = GI × serving carbs / 100

### Limitations

Published index values are averages: variety, ripeness, milling, cooking and the presence of protein, fat and fibre all change the glucose response. Individual responses vary widely, and in diabetes this calculation does not replace glucose measurement or monitoring data.

### Sources

- [Atkinson F.S., Brand-Miller J.C. et al. International tables of glycemic index and glycemic load values 2021. Am J Clin Nutr, 2021;114(5):1625–1632](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin L.S.A. et al. Glycemic index, glycemic load and glycemic response: International Scientific Consensus Summit. Nutr Metab Cardiovasc Dis, 2015;25(9):795–815](https://pubmed.ncbi.nlm.nih.gov/26160327/)

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
  title="Glycemic load calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
