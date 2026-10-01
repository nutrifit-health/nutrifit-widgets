# Nutrient deficiency risk screening

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/deficiency-risk.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/deficiency-risk.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md)

[← Calculator catalog](../CALCULATORS.md)

`deficiency-risk` · [NutriFit](https://nutrifit.health/calculators/deficiency-risk)

Mark the lifestyle and diet factors that apply to you and see which nutrient deficiencies are likely and which laboratory tests confirm them.

### How to use

1. Mark dietary habits: Identify dietary exclusions such as meat, seafood, or dairy avoidance.
2. Check lifestyle & medications: Factor in sunlight exposure, intense athletics, and chronic medications like metformin or antacids.
3. Review lab recommendations: Receive a tailored risk score and the gold-standard diagnostic blood markers for each nutrient.

### Method and formula

This is a risk checklist, not a diagnosis. Every factor is mapped to the nutrients for which it is listed as a risk factor in the NIH Office of Dietary Supplements fact sheets and in EFSA dietary reference value materials. The weight reflects the strength of the link: 3 points for a situation where deficiency is expected without compensation, 2 for a significant factor, 1 for an additional contribution. Points are summed per nutrient: from 2 points the risk is moderate, from 4 it is high.

Nutrient score = sum of the weights of the selected factors; 0–1 point is low risk, 2–3 moderate, 4 and above high

### Limitations

The screening relies only on the factors you selected and ignores actual intake, supplement use, genetics and comorbidities. It neither confirms nor rules out a deficiency — nutrient status is determined in the laboratory and interpreted by a physician or nutrition professional.

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
  title="Nutrient deficiency risk screening" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
