# Sodium and potassium in a daily diet

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sodium-potassium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sodium-potassium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md)

[← Calculator catalog](../CALCULATORS.md)

`sodium-potassium` · [NutriFit](https://nutrifit.health/calculators/sodium-potassium)

For adults, WHO recommends less than 2000 mg sodium and at least 3510 mg potassium per day. Molar ratio: (Na, mg / 23) / (K, mg / 39.1). Approximate salt equivalent: sodium, mg × 2.5 / 1000. The ratio is displayed without an individual risk category.

### Usage

1. Enter the inputs: For adults, WHO recommends less than 2000 mg sodium and at least 3510 mg potassium per day. Molar ratio: (Na, mg / 23) / (K, mg / 39.1). Approximate salt equivalent: sodium, mg × 2.5 / 1000. The ratio is displayed without an individual risk category.
2. Compare the references: For adults, WHO recommends less than 2000 mg sodium and at least 3510 mg potassium per day. Molar ratio: (Na, mg / 23) / (K, mg / 39.1). Approximate salt equivalent: sodium, mg × 2.5 / 1000. The ratio is displayed without an individual risk category.
3. Consider the limitations: Enter intake from food for one day, not blood or urine concentrations. Do not automatically apply the general potassium reference when excretion is impaired, with kidney disease or potassium-altering medication. Hypertension alone does not define a new individual target here.

### Method and formula

For adults, WHO recommends less than 2000 mg sodium and at least 3510 mg potassium per day. Molar ratio: (Na, mg / 23) / (K, mg / 39.1). Approximate salt equivalent: sodium, mg × 2.5 / 1000. The ratio is displayed without an individual risk category.

For adults, WHO recommends less than 2000 mg sodium and at least 3510 mg potassium per day. Molar ratio: (Na, mg / 23) / (K, mg / 39.1). Approximate salt equivalent: sodium, mg × 2.5 / 1000. The ratio is displayed without an individual risk category.

### Limitations

Enter intake from food for one day, not blood or urine concentrations. Do not automatically apply the general potassium reference when excretion is impaired, with kidney disease or potassium-altering medication. Hypertension alone does not define a new individual target here.

### Sources

- [WHO. Healthy diet: sodium and potassium](https://www.who.int/news-room/fact-sheets/detail/healthy-diet)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sodium-potassium" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="sodium-potassium" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sodium-potassium?lang=en&theme=auto"
  title="Sodium and potassium in a daily diet" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
