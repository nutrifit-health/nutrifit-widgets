# Maximum Muscular Potential Calculator (Casey Butt & Berkhan)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/muscle-potential.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/muscle-potential.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md)

[← Calculator catalog](../CALCULATORS.md)

`muscle-potential` · [NutriFit](https://nutrifit.health/calculators/muscle-potential)

Estimates the maximum drug-free lean body mass and muscular circumferences (chest, arms, thighs) achievable without anabolic pharmacology.

### How to use

1. Accurately Measure Skeletal Frame: Measure wrist between hand and ulnar styloid process. Measure ankle at the narrowest section directly above the ankle bones.
2. Specify Desired Body Fat Level: For year-round lean athletic shape, target 10–12% body fat; for competitive stage conditioning, aim for 6–8%.
3. Compare Current Circumferences to Ceilings: The calculator computes maximum potential for biceps, chest, and thighs. These provide realistic benchmarks for your physique.

### Method and formula

Casey Butt, Ph.D. analyzed the anthropometry of elite drug-free bodybuilders from the pre-steroid era (1940s–1950s) over a 6-year study. The model demonstrates that natural muscle mass is mechanically limited by skeletal dimensions—wrist and ankle circumferences.

Max LBM = Height^1.5 × [sqrt(Wrist)/22.6670 + sqrt(Ankle)/17.0104] × [(BodyFat%/224) + 1]; Berkhan Contest Weight (~5% BF) = Height (cm) − 100.

### Limitations

Designed for biological males. For biological females, maximum lean muscle mass is approximately 65–70% of male values due to endocrine profile. Assumes years of progressive overload and optimal nutrition.

### Sources

- [Butt C. Your Maximum Muscular Potential (The Casey Butt Model). The WeighTrainer, 2009](https://www.weightrainer.net/potential.html)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="muscle-potential" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="muscle-potential" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/muscle-potential?lang=en&theme=auto"
  title="Maximum Muscular Potential Calculator (Casey Butt &amp; Berkhan)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
