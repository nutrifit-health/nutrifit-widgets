# Body composition calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/body-composition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/body-composition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/body-composition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/body-composition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/body-composition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/body-composition.md)

[← Calculator catalog](../CALCULATORS.md)

`body-composition` · [NutriFit](https://nutrifit.health/calculators/body-composition)

Estimates body fat percentage from circumferences, calculates fat and lean mass and body mass index.

### How to use

1. Grab a flexible tape measure: Use a standard measuring tape snug against the skin without compressing soft tissue. Measure in the morning.
2. Take required circumferences: Men need neck and waist. Women need neck, waist, and hips. Keep the tape parallel to the floor.
3. Review your body composition: View your estimated body fat percentage, total fat mass, and lean muscle mass.

### Method and formula

Body fat is estimated with the U.S. Navy method (Hodgdon and Beckett, 1984): it uses height and the circumferences of neck and waist, plus hips for women. The method was chosen because it needs no equipment and its error is comparable to consumer bioimpedance scales. BMI is calculated as well using the WHO classification — it says nothing about composition but allows comparison with population norms.

Men: %fat = 495 / (1.0324 − 0.19077 × log₁₀(waist − neck) + 0.15456 × log₁₀(height)) − 450; Women: %fat = 495 / (1.29579 − 0.35004 × log₁₀(waist + hip − neck) + 0.221 × log₁₀(height)) − 450; BMI = weight / height²

### Limitations

The error is around ±3–4% against DXA and grows with atypical body shapes. Measure in the morning before eating, with the tape snug but not tight, at the same landmarks each time: a 1 cm difference at the waist noticeably shifts the result. BMI does not distinguish muscle from fat and does not apply to athletes, pregnancy or children.

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
  title="Body composition calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
