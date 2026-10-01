# 1RM Calculator (One-Rep Max)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/one-rep-max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/one-rep-max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/one-rep-max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/one-rep-max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/one-rep-max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/one-rep-max.md)

[← Calculator catalog](../CALCULATORS.md)

`one-rep-max` · [NutriFit](https://nutrifit.health/calculators/one-rep-max)

Calculates the maximum load an athlete can lift for a single repetition without the injury risk of direct 1RM testing.

### How to use

1. Perform a thorough warm-up: Perform general joint mobility drills, followed by 3–4 warm-up sets progressively ramping up to your working weight.
2. Perform a working set of 3–6 reps: Select a load with which you can complete 3 to 6 clean repetitions leaving no more than 1 rep in reserve (RPE 9).
3. Input data and apply percentages: Enter the weight and reps into the calculator. Use the percentage chart to prescribe weights for strength (85%), hypertrophy (75%), or recovery (60%) workouts.

### Method and formula

One-rep max estimation utilizes regression equations modeling repetitions-to-fatigue against percentage of maximal effort. The Epley formula excels in the 2–6 repetition range, while the Brzycki equation provides high accuracy across 6–10 repetitions.

Epley: 1RM = Weight × (1 + 0.0333 × Reps); Brzycki: 1RM = Weight / (1.0278 − 0.0278 × Reps); Lombardi: Weight × Reps^0.10; Wathan: (100 × Weight) / (48.8 + 53.8 × e^(−0.075 × Reps)).

### Limitations

Not validated for sets beyond 10–12 repetitions due to localized metabolic fatigue. Precision depends on technical execution and muscle fiber composition.

### Sources

- [Epley B. Poundage chart. Boyd Epley Workout, Lincoln, NE, 1985](https://pubmed.ncbi.nlm.nih.gov/2706858/)
- [Brzycki M. Strength testing—predicting a one-rep max from reps-to-fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds J.M. et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006;20(3):584–592](https://pubmed.ncbi.nlm.nih.gov/16937972/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="one-rep-max" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="one-rep-max" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/one-rep-max?lang=en&theme=auto"
  title="1RM Calculator (One-Rep Max)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
