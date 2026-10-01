# Dietary Fiber Intake Calculator (WHO & EFSA)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fiber-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fiber-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md)

[← Calculator catalog](../CALCULATORS.md)

`fiber-intake` · [NutriFit](https://nutrifit.health/calculators/fiber-intake)

Quantifies daily soluble and insoluble dietary fiber requirements to support gut microbiome diversity, optimize lipid profiles, and maintain healthy transit time.

### How to use

1. Include vegetables in every meal: Aim for at least 400–500 g of non-starchy vegetables and leafy greens daily (Harvard Healthy Eating Plate principle).
2. Swap refined grains for whole grains: Choose buckwheat, quinoa, steel-cut oats, barley, and whole-wheat sourdough over white rice and refined flour.
3. Incorporate seeds and legumes: One tablespoon of chia or ground flaxseeds, plus a serving of cooked lentils, instantly delivers 8–12 g of premium fiber.

### Method and formula

Based on WHO and EFSA standards (14 g fiber per 1,000 kcal, minimum 25 g for women and 38 g for men). Automatically calculates required compensatory hydration (+40 mL water per gram of fiber) and adjusts for IBS.

Target Fiber = max(25/38 g, Calories × 0.014); Soluble fraction ~30–35%; Insoluble fraction ~65–70%; Extra water = Fiber (g) × 40 mL.

### Limitations

In small intestinal bacterial overgrowth (SIBO) or active IBD flares, high fermentable fiber may exacerbate gas and pain. Fiber titration must be gradual.

### Sources

- [EFSA Panel on Dietetic Products, Nutrition, and Allergies. Scientific Opinion on Dietary Reference Values for carbohydrates and dietary fibre. EFSA Journal, 2010;8(3):1462](https://doi.org/10.2903/j.efsa.2010.1462)
- [Reynolds A. et al. Carbohydrate quality and human health: a series of systematic reviews and meta-analyses. Lancet, 2019;393(10170):434–445](https://pubmed.ncbi.nlm.nih.gov/30638909/)
- [Stephen A.M. et al. Dietary fibre in Europe: current state of knowledge on definitions, sources, recommendations, intakes and relationships to health. Nutr Res Rev, 2017;30(2):149–190](https://pubmed.ncbi.nlm.nih.gov/28676135/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fiber-intake" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="fiber-intake" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fiber-intake?lang=en&theme=auto"
  title="Dietary Fiber Intake Calculator (WHO &amp; EFSA)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
