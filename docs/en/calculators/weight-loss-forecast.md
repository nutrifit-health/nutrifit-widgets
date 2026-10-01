# Dynamic Weight Loss Forecast Calculator (Kevin Hall Model)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/weight-loss-forecast.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/weight-loss-forecast.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md)

[← Calculator catalog](../CALCULATORS.md)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/calculators/weight-loss-forecast)

Generates a realistic, non-linear weight loss trajectory using the NIH/NIDDK model of Kevin Hall, accounting for adaptive thermogenesis and body composition changes.

### How to use

1. Maintain a moderate deficit (15–20%): A 300–500 kcal deficit preserves psychological adherence, spares lean muscle mass, and minimizes metabolic resistance.
2. Consume adequate protein: Consuming 1.8–2.4 g/kg of protein during caloric restriction guarantees that 85–90% of weight lost comes from adipose tissue.
3. Plan structured diet breaks: Every 8–12 weeks of dieting, spend 1–2 weeks eating at maintenance calories (TDEE). This resets leptin and thyroid hormones (T3), attenuating adaptation.

### Method and formula

Replaces the flawed static 3,500-kcal rule with the validated dynamic energy balance model (Hall et al., Lancet 2011). Incorporates metabolic slowdown (~22 kcal/kg lost) and Forbes body fat partitioning.

Metabolic adaptation = 22 kcal/kg lost + adaptive thermogenesis; Effective Deficit = Prescribed Deficit − Adaptation; Fat loss partition p = Forbes(F, W); Numerical iteration week-by-week.

### Limitations

Assumes strict adherence to the prescribed caloric deficit. Transient water fluctuations from cortisol or sodium can mask fat loss on scale weight.

### Sources

- [Hall K.D. et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011;378(9793):826–837](https://pubmed.ncbi.nlm.nih.gov/21872751/)
- [Thomas D.M. et al. Can a weight loss of one pound a week be achieved with a 3,500-kcal deficit? Commentary on a commonly accepted rule. Int J Obes, 2013;37(12):1611–1613](https://pubmed.ncbi.nlm.nih.gov/23628852/)
- [Forbes G.B. Lean body mass-body fat interrelationships in humans. Nutr Rev, 1987;45(8):225–231](https://pubmed.ncbi.nlm.nih.gov/3306482/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="weight-loss-forecast" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="weight-loss-forecast" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/weight-loss-forecast?lang=en&theme=auto"
  title="Dynamic Weight Loss Forecast Calculator (Kevin Hall Model)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
