# Protein Intake Calculator (ISSN & ESPEN)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/protein-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/protein-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md)

[← Calculator catalog](../CALCULATORS.md)

`protein-intake` · [NutriFit](https://nutrifit.health/calculators/protein-intake)

Determines individualized daily protein targets based on fitness goals, dietary pattern, and muscle protein synthesis (MPS) thresholds.

### How to use

1. Identify your target number: Enter your weight and goal. The calculator establishes your daily gram target and optimal per-meal serving size.
2. Aim for 25–40 g per meal: A single serving of 30 g protein (cottage cheese, 150 g chicken breast or fish) activates the leucine trigger for myofibrillar anabolism.
3. Diversify your protein sources: Combine animal proteins (eggs, poultry, fish, dairy) with wholesome plant-based sources (tofu, lentils, chickpeas, tempeh).

### Method and formula

Grounded in clinical consensus statements from the International Society of Sports Nutrition (ISSN, 2017) and ESPEN. In patients with overweight (BMI > 28), Adjusted Body Weight (AdjBW) is applied to protect renal hemodynamics.

Maintenance: 1.0–1.4 g/kg; Muscle Gain: 1.6–2.2 g/kg; Fat Loss / Deficit: 2.0–2.4 g/kg; Endurance: 1.2–1.6 g/kg; Age 65+: 1.2–1.5 g/kg; CKD: 0.6–0.8 g/kg. Vegetarian: +10%.

### Limitations

In chronic kidney disease (eGFR < 60 mL/min), protein prescriptions must be medically supervised by a nephrologist.

### Sources

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Deutz N.E. et al. Protein intake and exercise for optimal muscle function with aging: recommendations from the ESPEN Expert Group. Clin Nutr, 2014;33(6):929–936](https://pubmed.ncbi.nlm.nih.gov/24814383/)
- [Morton R.W. et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on gains in muscle mass and strength in healthy adults. Br J Sports Med, 2018;52(6):376–384](https://pubmed.ncbi.nlm.nih.gov/28698222/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="protein-intake" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="protein-intake" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/protein-intake?lang=en&theme=auto"
  title="Protein Intake Calculator (ISSN &amp; ESPEN)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
