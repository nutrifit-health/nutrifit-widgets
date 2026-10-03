# Field estimates of VO2max

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vo2max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vo2max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md)

[← Calculator catalog](../CALCULATORS.md)

`vo2max` · [NutriFit](https://nutrifit.health/calculators/vo2max)

Cooper: distance covered in 12 minutes. Rockport: a fast 1-mile walk (1609.344 m), elapsed time and finishing heart rate; originally tested in healthy adults aged 30–69. Uth: 15.3 × HRmax / HRrest; tested in well-trained men aged 21–51.

### Usage

1. Enter the starting values: Cooper: distance covered in 12 minutes. Rockport: a fast 1-mile walk (1609.344 m), elapsed time and finishing heart rate; originally tested in healthy adults aged 30–69. Uth: 15.3 × HRmax / HRrest; tested in well-trained men aged 21–51.
2. Adjust the parameters: Cooper: distance covered in 12 minutes. Rockport: a fast 1-mile walk (1609.344 m), elapsed time and finishing heart rate; originally tested in healthy adults aged 30–69. Uth: 15.3 × HRmax / HRrest; tested in well-trained men aged 21–51.
3. Read the result: These are indirect estimates, not gas-exchange measurements. Uth is not extrapolated here to women, or Rockport outside its stated age range. An age-predicted maximum heart rate adds uncertainty. Negative estimates, fitness categories and 5/10 km pace predictions are not provided.

### Method and formula

Cooper: distance covered in 12 minutes. Rockport: a fast 1-mile walk (1609.344 m), elapsed time and finishing heart rate; originally tested in healthy adults aged 30–69. Uth: 15.3 × HRmax / HRrest; tested in well-trained men aged 21–51.

Cooper: distance covered in 12 minutes. Rockport: a fast 1-mile walk (1609.344 m), elapsed time and finishing heart rate; originally tested in healthy adults aged 30–69. Uth: 15.3 × HRmax / HRrest; tested in well-trained men aged 21–51.

### Limitations

These are indirect estimates, not gas-exchange measurements. Uth is not extrapolated here to women, or Rockport outside its stated age range. An age-predicted maximum heart rate adds uncertainty. Negative estimates, fitness categories and 5/10 km pace predictions are not provided.

### Sources

- [Cooper KH. et al. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline GM et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004](https://pubmed.ncbi.nlm.nih.gov/14624296/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vo2max" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="vo2max" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vo2max?lang=en&theme=auto"
  title="Field estimates of VO2max" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
