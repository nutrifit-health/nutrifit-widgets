# Dietary fibre reference intakes

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fiber-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fiber-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md)

[← Calculator catalog](../CALCULATORS.md)

`fiber-intake` · [NutriFit](https://nutrifit.health/calculators/fiber-intake)

References are shown separately: EFSA gives 25 g/day for adults; IOM/NASEM gives 14 g/1000 kcal. IOM age and sex AIs: ages 19–50, men 38 g and women 25 g; over 50, 30 and 21 g. The energy calculation does not automatically replace the other references.

### Usage

1. Enter the inputs: References are shown separately: EFSA gives 25 g/day for adults; IOM/NASEM gives 14 g/1000 kcal. IOM age and sex AIs: ages 19–50, men 38 g and women 25 g; over 50, 30 and 21 g. The energy calculation does not automatically replace the other references.
2. Compare the references: References are shown separately: EFSA gives 25 g/day for adults; IOM/NASEM gives 14 g/1000 kcal. IOM age and sex AIs: ages 19–50, men 38 g and women 25 g; over 50, 30 and 21 g. The energy calculation does not automatically replace the other references.
3. Consider the limitations: For adults aged 19 or older outside pregnancy and lactation. These are not individual safety limits or treatments for constipation, IBS or high cholesterol. Increase intake according to tolerance. No extra water requirement of 40 ml per gram of fibre is calculated.

### Method and formula

References are shown separately: EFSA gives 25 g/day for adults; IOM/NASEM gives 14 g/1000 kcal. IOM age and sex AIs: ages 19–50, men 38 g and women 25 g; over 50, 30 and 21 g. The energy calculation does not automatically replace the other references.

References are shown separately: EFSA gives 25 g/day for adults; IOM/NASEM gives 14 g/1000 kcal. IOM age and sex AIs: ages 19–50, men 38 g and women 25 g; over 50, 30 and 21 g. The energy calculation does not automatically replace the other references.

### Limitations

For adults aged 19 or older outside pregnancy and lactation. These are not individual safety limits or treatments for constipation, IBS or high cholesterol. Increase intake according to tolerance. No extra water requirement of 40 ml per gram of fibre is calculated.

### Sources

- [EFSA. Dietary Reference Values summary, 2017](https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf)
- [IOM/NASEM. Dietary Reference Intakes: Fiber, 2006](https://www.nationalacademies.org/read/11537/chapter/11)

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
  title="Dietary fibre reference intakes" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
