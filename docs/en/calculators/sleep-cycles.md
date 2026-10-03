# Sleep schedule planner

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sleep-cycles.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sleep-cycles.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sleep-cycles.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sleep-cycles.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sleep-cycles.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sleep-cycles.md)

[← Calculator catalog](../CALCULATORS.md)

`sleep-cycles` · [NutriFit](https://nutrifit.health/calculators/sleep-cycles)

Bedtime or wake-up options for 7, 8 and 9 hours of sleep, allowing for time to fall asleep.

### Usage

1. Enter the starting values: Use actual values and the appropriate units.
2. Adjust the parameters: Adjust the starting assumptions for your situation.
3. Read the result: Consider the model limitations; a calculation is not a measurement.

### Method and formula

Wake time = bedtime + sleep onset time + sleep duration; bedtime is calculated by subtracting these intervals.

Wake time = bedtime + sleep onset time + sleep duration; bedtime is calculated by subtracting these intervals.

### Limitations

Most adults are advised to sleep 7–9 hours. These are schedule options, not an individual sleep prescription or a sleep-stage prediction. Sleep cycles and stages vary during the night. Clock times cannot guarantee waking during REM or an easy awakening.

### Sources

- [NHLBI. How Sleep Works: Sleep Phases and Stages](https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep)
- [NHLBI. How Sleep Works: How Much Sleep Is Enough?](https://www.nhlbi.nih.gov/health/sleep/how-much-sleep)
- [Hirshkowitz M et al. National Sleep Foundation's sleep time duration recommendations: methodology and results summary. Sleep Health, 2015](https://pubmed.ncbi.nlm.nih.gov/29073412/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sleep-cycles" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="sleep-cycles" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sleep-cycles?lang=en&theme=auto"
  title="Sleep schedule planner" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
