# Waist indices WHR, WHtR and VAI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/waist-ratios.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/waist-ratios.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/waist-ratios.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/waist-ratios.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/waist-ratios.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/waist-ratios.md)

[← Calculator catalog](../CALCULATORS.md)

`waist-ratios` · [NutriFit](https://nutrifit.health/calculators/waist-ratios)

WHR = waist / hips; WHtR = waist / height. Measure waist midway between the lowest rib and top of the pelvis after a natural exhalation, and hips at the widest point. VAI additionally uses weight, triglycerides and HDL in mmol/L following Amato (2010).

### Usage

1. Enter the starting values: WHR = waist / hips; WHtR = waist / height. Measure waist midway between the lowest rib and top of the pelvis after a natural exhalation, and hips at the widest point. VAI additionally uses weight, triglycerides and HDL in mmol/L following Amato (2010).
2. Adjust the parameters: WHtR = Waist / Height; WHR = Waist / Hip; VAI (Men) = (Waist/(39.68+1.88×BMI)) × (TG/1.03) × (1.31/HDL); VAI (Women) = (Waist/(35.58+1.89×BMI)) × (TG/0.81) × (1.52/HDL).
3. Read the result: No index directly measures visceral fat. Low WHtR does not establish underweight; universal WHR and VAI categories are not assigned. NICE WHtR recommendations apply to adults with BMI < 35.

### Method and formula

WHR = waist / hips; WHtR = waist / height. Measure waist midway between the lowest rib and top of the pelvis after a natural exhalation, and hips at the widest point. VAI additionally uses weight, triglycerides and HDL in mmol/L following Amato (2010).

WHtR = Waist / Height; WHR = Waist / Hip; VAI (Men) = (Waist/(39.68+1.88×BMI)) × (TG/1.03) × (1.31/HDL); VAI (Women) = (Waist/(35.58+1.89×BMI)) × (TG/0.81) × (1.52/HDL).

### Limitations

No index directly measures visceral fat. Low WHtR does not establish underweight; universal WHR and VAI categories are not assigned. NICE WHtR recommendations apply to adults with BMI < 35.

### Sources

- [Ashwell M et al. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato MC et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010](https://pubmed.ncbi.nlm.nih.gov/20067971/)

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
  title="Waist indices WHR, WHtR and VAI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
