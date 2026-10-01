# Sleep Cycles Calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sleep-cycles.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sleep-cycles.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sleep-cycles.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sleep-cycles.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sleep-cycles.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sleep-cycles.md)

[← Calculator catalog](../CALCULATORS.md)

`sleep-cycles` · [NutriFit](https://nutrifit.health/calculators/sleep-cycles)

A sleep timing tool based on 90-minute ultradian cycles (slow-wave and REM sleep phases) and average sleep onset latency.

### How to use

1. Choose the calculation direction: Decide what you need: find out when to go to bed to wake up at a set time, or when to set your alarm if you're going to bed right now.
2. Set your sleep onset latency: The default is 14 minutes. If you usually toss and turn longer, or fall asleep instantly, adjust this value.
3. Choose a chain of 5 or 6 cycles: 5 cycles (7h 30m) are ideal for workdays, while 6 cycles (9h) are better for intense training days or recovering from sleep debt.

### Method and formula

The calculation is based on a model of 90-minute ultradian cycles combining NREM (non-rapid eye movement) and REM (rapid eye movement) sleep stages. Waking up at a cycle boundary prevents sleep inertia.

Wake time = Bedtime + Sleep onset (14 min) + N × 90 min. Bedtime = Wake time − (N × 90 min) − Sleep onset (14 min).

### Limitations

The calculator uses an average cycle length of 90 minutes. Individual cycles can vary from 70 to 120 minutes. Chronic sleep disorders require polysomnography for proper diagnosis.

### Sources

- [Carskadon M.A., Dement W.C. Normal Human Sleep: An Overview. Principles and Practice of Sleep Medicine, 2011;5:16–26](https://doi.org/10.1016/B978-1-4160-6645-3.00002-5)
- [Hirshkowitz M. et al. National Sleep Foundation’s sleep time duration recommendations: methodology and results summary. Sleep Health, 2015;1(1):40–43](https://pubmed.ncbi.nlm.nih.gov/29073412/)
- [Dijk D.J., Czeisler C.A. Contribution of the circadian pacemaker and the homeostatic process to the timing of human sleep. Sleep, 1995;18(5):285–304](https://pubmed.ncbi.nlm.nih.gov/7676163/)

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
  title="Sleep Cycles Calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
