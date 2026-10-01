# Waist Anthropometric Index Calculator (WHtR, WHR, VAI)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/waist-ratios.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/waist-ratios.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/waist-ratios.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/waist-ratios.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/waist-ratios.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/waist-ratios.md)

[← Calculator catalog](../CALCULATORS.md)

`waist-ratios` · [NutriFit](https://nutrifit.health/calculators/waist-ratios)

Evaluates body fat distribution, visceral adiposity, and cardiometabolic risk far more accurately than standard BMI.

### How to use

1. Locate the correct anatomical waistline: Waist is not measured at the navel or belt line, but at the midpoint between the lower edge of the lowest rib and the top of the iliac crest (hip bone). Breathe out normally.
2. Measure hip circumference: Wrap the measuring tape horizontally around the widest, most prominent point of the gluteal buttocks.
3. Evaluate the ratio to height: Divide waist by height: if the ratio is under 0.50, your visceral fat levels remain within the optimal physiological protective zone.

### Method and formula

Waist circumference directly reflects intra-abdominal visceral adipose tissue surrounding vital internal organs. The Waist-to-Height Ratio (WHtR) and Waist-to-Hip Ratio (WHR) are validated epidemiological predictors of type 2 diabetes and hypertension.

WHtR = Waist / Height; WHR = Waist / Hip; VAI (Men) = (Waist/(39.68+1.88×BMI)) × (TG/1.03) × (1.31/HDL); VAI (Women) = (Waist/(35.58+1.89×BMI)) × (TG/0.81) × (1.52/HDL).

### Limitations

Not applicable during pregnancy, active ascites, severe abdominal hernia, or immediate post-abdominal surgery recovery.

### Sources

- [Ashwell M., Gunn P., Gibson S. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012;13(3):275–286](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato M.C. et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010;33(4):920–922](https://pubmed.ncbi.nlm.nih.gov/20067971/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="waist-ratios" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="waist-ratios" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/waist-ratios?lang=en&theme=auto"
  title="Waist Anthropometric Index Calculator (WHtR, WHR, VAI)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
