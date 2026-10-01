# FINDRISC Diabetes Risk Score

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/findrisc.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/findrisc.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/findrisc.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/findrisc.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/findrisc.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/findrisc.md)

[← Calculator catalog](../CALCULATORS.md)

`findrisc` · [NutriFit](https://nutrifit.health/calculators/findrisc)

An internationally recognized WHO and IDF questionnaire for early screening of undiagnosed diabetes and estimating the 10-year risk of developing type 2 diabetes.

### How to use

1. Enter your age and body measurements: Select your age group, BMI category, and waist circumference measured with a tape halfway between the lowest rib and the top of the hip bone.
2. Assess your lifestyle and diet: Indicate whether you get at least 30 minutes of physical activity daily and whether you eat vegetables, fruit, or berries every day.
3. Provide your medical history: Note whether you take blood pressure medication, have had elevated blood sugar in the past, and whether blood relatives have diabetes.

### Method and formula

Sums 8 evidence-based risk factors: age, BMI, waist circumference, physical activity, vegetable intake, antihypertensive therapy, prior high blood glucose, and family history.

FINDRISC score = Age (0–4) + BMI (0–3) + Waist (0–4) + Physical activity (0/2) + Vegetables (0/1) + BP medication (0/2) + Prior high glucose (0/5) + Family history (0/3/5). Total: 0–26 points.

### Limitations

This scale is a predictive screening tool and does not replace laboratory diagnostics (fasting plasma glucose, HbA1c, oral glucose tolerance test).

### Sources

- [Lindström J., Tuomilehto J. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003;26(3):725–731](https://pubmed.ncbi.nlm.nih.gov/12610029/)
- [International Diabetes Federation (IDF). Clinical Practice Recommendations for managing Type 2 Diabetes in Primary Care, 2017](https://www.idf.org/our-activities/care-prevention/clinical-practice-recommendations/)
- [Saaristo T. et al. FINDRISC as an early intervention tool in primary health care. Diabetes Care, 2005;28(12):2900–2907](https://pubmed.ncbi.nlm.nih.gov/16316578/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="findrisc" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="findrisc" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/findrisc?lang=en&theme=auto"
  title="FINDRISC Diabetes Risk Score" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
