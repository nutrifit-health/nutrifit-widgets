# FFMI Calculator (Fat-Free Mass Index)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ffmi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ffmi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ffmi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ffmi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ffmi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ffmi.md)

[← Calculator catalog](../CALCULATORS.md)

`ffmi` · [NutriFit](https://nutrifit.health/calculators/ffmi)

Determines lean muscular mass relative to height, distinguishing genuine hypertrophy from body fat accumulation.

### How to use

1. Accurately measure height and weight: Weigh yourself in the morning fasted after using the restroom. Measure barefoot standing height against a stadiometer.
2. Determine your body fat percentage: Use a 3–7 site caliper protocol, calibrated multi-frequency bioimpedance, or ideally a DEXA dual-energy X-ray scan.
3. Interpret the normalized score: The normalized score eliminates mathematical distortion for taller (>180 cm) or shorter (<170 cm) individuals, allowing fair comparison to normative tables.

### Method and formula

Standard BMI cannot differentiate between muscle mass and adipose tissue. The Fat-Free Mass Index (FFMI) isolates lean tissue and introduces a height-normalization factor (Kouri et al., 1995) to benchmark muscularity across varying statures.

Lean Body Mass (LBM) = Weight × (1 − % Body Fat / 100); Baseline FFMI = LBM / Height(m)²; Normalized FFMI = Baseline FFMI + 6.1 × (1.80 − Height(m)).

### Limitations

Calculation accuracy depends directly on the precision of body fat measurement. DEXA scans and hydrostatic weighing provide the highest reliability.

### Sources

- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)
- [Trexler E.T. et al. Physiological changes after a female bodybuilding contest preparation. J Int Soc Sports Nutr, 2017;14:34](https://pubmed.ncbi.nlm.nih.gov/28878643/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ffmi" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="ffmi" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ffmi?lang=en&theme=auto"
  title="FFMI Calculator (Fat-Free Mass Index)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
