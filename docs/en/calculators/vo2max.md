# VO2 Max Calculator (Cardiorespiratory Fitness)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vo2max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vo2max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md)

[← Calculator catalog](../CALCULATORS.md)

`vo2max` · [NutriFit](https://nutrifit.health/calculators/vo2max)

Evaluates aerobic power and cardiorespiratory fitness based on validated field protocols without specialized laboratory gas analysis equipment.

### How to use

1. Choose the right test protocol: Active runners should opt for the Cooper 12-minute run test. For older individuals or those returning from injury, the Rockport 1-mile walking test is the safest option.
2. Record your performance metrics: For the Cooper test, track total meters covered on a standard 400m track or calibrated GPS. For Rockport, record exact finish time and immediate 60-second heart rate.
3. Interpret your category and training paces: The calculator compares your score to Cooper Institute epidemiological percentiles and projects benchmark 5K and 10K training paces.

### Method and formula

The calculator features three scientifically validated field methods: the Cooper 12-minute run test, the Rockport 1-mile walking test, and the resting-to-maximum heart rate ratio equation (Uth et al.).

Cooper: VO2max = (Distance, m − 504.9) / 44.73; Rockport: 132.853 − 0.0769 × W(lbs) − 0.3877 × Age + 6.315 × Gender − 3.2649 × Time − 0.1565 × HR; Uth: 15 × (HRmax / HRrest).

### Limitations

Field protocols provide an indirect estimate with an average error of 5–10%. Pacing discipline, running surface, weather conditions, and caffeine intake can influence test outcomes.

### Sources

- [Cooper K.H. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968;203(3):201–204](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline G.M. et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987;19(3):253–259](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N. et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004;91(1):111–115](https://pubmed.ncbi.nlm.nih.gov/14624296/)

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
  title="VO2 Max Calculator (Cardiorespiratory Fitness)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
