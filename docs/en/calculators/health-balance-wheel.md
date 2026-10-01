# Health & Nutrition Balance Wheel

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/health-balance-wheel.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/health-balance-wheel.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md)

[← Calculator catalog](../CALCULATORS.md)

`health-balance-wheel` · [NutriFit](https://nutrifit.health/calculators/health-balance-wheel)

Interactive radar chart of 8 health and lifestyle dimensions. Identifies bottlenecks (Liebig's Law of the Minimum) and links deficits to NutriFit tools.

### How to use

1. Rate 8 Lifestyle Pillars: Assign scores from 1 to 10 for each dimension. Rely on dynamic anchors beneath the sliders for objective qualitative benchmarks.
2. Identify Your Bottlenecks: The test identifies lowest-scoring bottleneck pillars. According to Liebig's Law, these bottlenecks dictate overall biological resilience.
3. Execute 48-Hour Micro-Habits: Avoid overhauling all 8 areas at once. Focus on 1–2 limiting factors, connect specialized NutriFit tools, and take action within 48 hours.

### Method and formula

Based on Lifestyle Medicine principles and Justus von Liebig's Law of the Minimum. 8 fundamental pillars (nutrition quality, energy, hydration, sleep, activity, mindful eating, gut health, and prevention) are rated on a 10-point scale. The overall score reflects vitality, while the balance index evaluates variance to assess biological resilience.

Overall Score = (Σ Scores / 8) × 10; Balance Index = max(0, 100 − SD × 18); Bottlenecks = min(Scores) where value ≤ 6

### Limitations

Self-assessment serves as a screening tool reflecting subjective habits and wellness. It does not replace clinical laboratory testing or medical consultations, but helps prioritize high-yield lifestyle adjustments.

### Sources

- [Liebig J. Die organische Chemie in ihrer Anwendung auf Agricultur und Physiologie. Vieweg, Braunschweig, 1840 (Закон минимума Либиха)](https://archive.org/details/dieorganischech01liebgoog)
- [American College of Lifestyle Medicine (ACLM). Standards and Core Competencies for Lifestyle Medicine, 2022](https://lifestylemedicine.org/)
- [Katz D.L. et al. Lifestyle Medicine: The Foundation of Health Care. Am J Prev Med, 2018;54(5):737–742](https://pubmed.ncbi.nlm.nih.gov/29571948/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="health-balance-wheel" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="health-balance-wheel" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/health-balance-wheel?lang=en&theme=auto"
  title="Health &amp; Nutrition Balance Wheel" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
