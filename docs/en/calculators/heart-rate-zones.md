# Heart rate reserve zones

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/heart-rate-zones.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/heart-rate-zones.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md)

[← Calculator catalog](../CALCULATORS.md)

`heart-rate-zones` · [NutriFit](https://nutrifit.health/calculators/heart-rate-zones)

Target HR = resting HR + fraction × (maximum HR − resting HR). Five bands are selected here: 50–60, 60–70, 70–80, 80–90 and 90–100% of reserve.

### Usage

1. Enter the starting values: Target HR = resting HR + fraction × (maximum HR − resting HR). Five bands are selected here: 50–60, 60–70, 70–80, 80–90 and 90–100% of reserve.
2. Adjust the parameters: HRmax (Tanaka) = 208 − 0.7 × Age; HRR = HRmax − HRrest; Target HR = HRrest + (% intensity × HRR). Haskell formula: HRmax = 220 − Age.
3. Read the result: This is a selected intensity scheme, not individually measured aerobic or anaerobic thresholds. Age-predicted maximum HR is an estimate, not a physiological ceiling; reserve must be positive.

### Method and formula

Target HR = resting HR + fraction × (maximum HR − resting HR). Five bands are selected here: 50–60, 60–70, 70–80, 80–90 and 90–100% of reserve.

HRmax (Tanaka) = 208 − 0.7 × Age; HRR = HRmax − HRrest; Target HR = HRrest + (% intensity × HRR). Haskell formula: HRmax = 220 − Age.

### Limitations

This is a selected intensity scheme, not individually measured aerobic or anaerobic thresholds. Age-predicted maximum HR is an estimate, not a physiological ceiling; reserve must be positive.

### Sources

- [Tanaka H et al. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [KARVONEN MJ et al. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957](https://pubmed.ncbi.nlm.nih.gov/13470504/)
- [American College of Sports Medicine. ACSM’s Guidelines for Exercise Testing and Prescription. 11th ed. Wolters Kluwer, 2021](https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="heart-rate-zones" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="heart-rate-zones" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/heart-rate-zones?lang=en&theme=auto"
  title="Heart rate reserve zones" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
