# Circumference-based body composition and BMI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/body-composition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/body-composition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/body-composition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/body-composition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/body-composition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/body-composition.md)

[← Calculator catalog](../CALCULATORS.md)

`body-composition` · [NutriFit](https://nutrifit.health/calculators/body-composition)

Historical Hodgdon–Beckett (1984) body fat estimate from height and girths. Men: abdomen at the navel and neck; women: natural narrow waist, hips at their widest point and neck. BMI = weight / height².

### Usage

1. Enter the starting values: Historical Hodgdon–Beckett (1984) body fat estimate from height and girths. Men: abdomen at the navel and neck; women: natural narrow waist, hips at their widest point and neck. BMI = weight / height².
2. Adjust the parameters: Historical Hodgdon–Beckett (1984) body fat estimate from height and girths. Men: abdomen at the navel and neck; women: natural narrow waist, hips at their widest point and neck. BMI = weight / height².
3. Read the result: Circumference estimates do not replace body composition measurements and are not the current official Navy standard. ACE body fat categories are descriptive references, not diagnoses; BMI is a separate adult classification. The model is not calculated for inapplicable girths.

### Method and formula

Historical Hodgdon–Beckett (1984) body fat estimate from height and girths. Men: abdomen at the navel and neck; women: natural narrow waist, hips at their widest point and neck. BMI = weight / height².

Men: %fat = 495 / (1.0324 − 0.19077 × log₁₀(waist − neck) + 0.15456 × log₁₀(height)) − 450; Women: %fat = 495 / (1.29579 − 0.35004 × log₁₀(waist + hip − neck) + 0.221 × log₁₀(height)) − 450; BMI = weight / height²

### Limitations

Circumference estimates do not replace body composition measurements and are not the current official Navy standard. ACE body fat categories are descriptive references, not diagnoses; BMI is a separate adult classification. The model is not calculated for inapplicable girths.

### Sources

- [Hodgdon J.A., Beckett M.B. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center, 1984](https://apps.dtic.mil/sti/citations/ADA143890)
- [WHO. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894, 2000](https://www.who.int/publications/i/item/WHO_TRS_894)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="body-composition" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="body-composition" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/body-composition?lang=en&theme=auto"
  title="Circumference-based body composition and BMI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
