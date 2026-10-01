# Yale Food Addiction Scale mYFAS 2.0

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/yfas.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/yfas.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md)

[← Calculator catalog](../CALCULATORS.md)

`yfas` · [NutriFit](https://nutrifit.health/calculators/yfas)

An adapted scientific questionnaire developed at Yale University to assess symptoms of addictive eating behavior toward highly palatable, ultra-processed foods.

### How to use

1. Identify your trigger foods: Think about specific foods with which you frequently lose control (such as sweets, salty snacks, fast food, or baked goods).
2. Answer all 13 questions: Select 'Yes' if you have regularly experienced the behavior or feeling over the past 12 months.
3. Review your symptom criteria and diagnosis: See your total count of met DSM-5 symptom criteria and whether clinical impairment is present.

### Method and formula

13 items based on 11 DSM-5 substance use disorder diagnostic criteria applied to food, plus 2 items evaluating clinically significant distress and functional impairment.

A food addiction diagnosis requires the presence of clinical distress/impairment (items 12 or 13) plus at least 2 symptoms. 2–3: mild; 4–5: moderate; ≥ 6: severe food addiction.

### Limitations

The concept of 'food addiction' remains a subject of ongoing scientific debate. The scale screens for compulsive, addictive-like eating behaviors toward hyperpalatable foods (sugar, fat, salt).

### Sources

- [Schulte E.M., Gearhardt A.N. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017;25(4):302–308](https://pubmed.ncbi.nlm.nih.gov/28543787/)
- [Gearhardt A.N. et al. Preliminary validation of the Yale Food Addiction Scale. Appetite, 2009;52(2):430–436](https://pubmed.ncbi.nlm.nih.gov/19028533/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="yfas" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="yfas" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/yfas?lang=en&theme=auto"
  title="Yale Food Addiction Scale mYFAS 2.0" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
