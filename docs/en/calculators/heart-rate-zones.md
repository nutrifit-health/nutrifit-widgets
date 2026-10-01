# Heart Rate Training Zones Calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/heart-rate-zones.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/heart-rate-zones.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md)

[← Calculator catalog](../CALCULATORS.md)

`heart-rate-zones` · [NutriFit](https://nutrifit.health/calculators/heart-rate-zones)

Calculates individual target heart rate zones accounting for both maximum heart rate and resting pulse (Heart Rate Reserve method).

### How to use

1. Measure morning resting heart rate: Upon waking and while still in bed, measure your pulse for 60 seconds with a heart rate monitor or fingertip count over 3 consecutive days and take the average.
2. Calculate zones using the Karvonen formula: The calculator subtracts resting pulse from HRmax to establish your true functional heart rate reserve.
3. Distribute volume according to the 80/20 rule: Dedicate approximately 80% of total weekly endurance training volume to Zone 2, reserving 20% for high-intensity work in Zones 4 and 5.

### Method and formula

The Karvonen method utilizes Heart Rate Reserve (HRR = HRmax − HRrest). By accounting for resting pulse, target zones dynamically adapt to the athlete's aerobic fitness level and cardiovascular conditioning.

HRmax (Tanaka) = 208 − 0.7 × Age; HRR = HRmax − HRrest; Target HR = HRrest + (% intensity × HRR). Haskell formula: HRmax = 220 − Age.

### Limitations

Standard maximum heart rate formulas have a ±10–12 bpm standard error. For clinical or competitive precision, laboratory CPET gas-exchange testing is recommended.

### Sources

- [Tanaka H., Monahan K.D., Seals D.R. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001;37(1):153–156](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [Karvonen M.J., Kentala E., Mustala O. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957;35(3):307–315](https://pubmed.ncbi.nlm.nih.gov/13470504/)
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
  title="Heart Rate Training Zones Calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
