# Diet and lifestyle checklist

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/deficiency-risk.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/deficiency-risk.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md)

[← Calculator catalog](../CALCULATORS.md)

`deficiency-risk` · [NutriFit](https://nutrifit.health/calculators/deficiency-risk)

An author-written informational checklist: select your current dietary and lifestyle circumstances to see related nutrient topics.

### Usage

1. Enter the starting values: Factor–nutrient links are informational topics for discussion. NIH ODS and EFSA provide information on nutrition and risk groups, but do not define scores or deficiency probabilities for this questionnaire.
2. Adjust the parameters: An author-written informational checklist: select your current dietary and lifestyle circumstances to see related nutrient topics.
3. Read the result: The checklist does not account for actual intake or absorption, fortified foods, supplements or illness. It neither confirms nor rules out deficiency; testing and supplementation require individual assessment.

### Method and formula

Factor–nutrient links are informational topics for discussion. NIH ODS and EFSA provide information on nutrition and risk groups, but do not define scores or deficiency probabilities for this questionnaire.

No risk scores or categories are calculated. Only selected factors and related nutrients are shown.

### Limitations

The checklist does not account for actual intake or absorption, fortified foods, supplements or illness. It neither confirms nor rules out deficiency; testing and supplementation require individual assessment.

### Sources

- [NIH Office of Dietary Supplements. Dietary Supplement Fact Sheets (группы риска по нутриентам)](https://ods.od.nih.gov/factsheets/list-all/)
- [EFSA. Dietary Reference Values for the EU (DRV Finder)](https://multimedia.efsa.europa.eu/drvs/index.htm)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="deficiency-risk" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="deficiency-risk" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/deficiency-risk?lang=en&theme=auto"
  title="Diet and lifestyle checklist" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
