# Iron Deficiency Calculator: TSAT, Ferritin and Ganzoni Deficit

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/iron-deficiency.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/iron-deficiency.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md)

[← Calculator catalog](../CALCULATORS.md)

`iron-deficiency` · [NutriFit](https://nutrifit.health/calculators/iron-deficiency)

TSAT = iron / TIBC × 100%. Ganzoni model: weight × (15 − Hb in g/dL) × 2.4 + 500 mg for weight ≥ 35 kg. It is displayed only when both Hb and ferritin are below the selected thresholds.

### Usage

1. Enter the starting values: TSAT = iron / TIBC × 100%. Ganzoni model: weight × (15 − Hb in g/dL) × 2.4 + 500 mg for weight ≥ 35 kg. It is displayed only when both Hb and ferritin are below the selected thresholds.
2. Adjust the parameters: TSAT = iron / TIBC × 100%. Ganzoni model: weight × (15 − Hb in g/dL) × 2.4 + 500 mg for weight ≥ 35 kg. It is displayed only when both Hb and ferritin are below the selected thresholds.
TIBC (µmol/L) = transferrin (g/L) × 25.1. Iron: µg/dL × 0.179 = µmol/L. Hb: g/L ÷ 10 = g/dL.
3. Read the result: These are descriptive biomarker patterns, not diagnoses. Hb thresholds: 130 g/L for men and 120 g/L for nonpregnant women; WHO 2020 ferritin: 15 µg/L, or 70 µg/L at CRP > 5 mg/L. Ganzoni target Hb, weight and stores need individual selection; the result is not a medicine dose.

### Method and formula

TSAT = iron / TIBC × 100%. Ganzoni model: weight × (15 − Hb in g/dL) × 2.4 + 500 mg for weight ≥ 35 kg. It is displayed only when both Hb and ferritin are below the selected thresholds.

TSAT = iron / TIBC × 100%. Ganzoni model: weight × (15 − Hb in g/dL) × 2.4 + 500 mg for weight ≥ 35 kg. It is displayed only when both Hb and ferritin are below the selected thresholds.
TIBC (µmol/L) = transferrin (g/L) × 25.1. Iron: µg/dL × 0.179 = µmol/L. Hb: g/L ÷ 10 = g/dL.

### Limitations

These are descriptive biomarker patterns, not diagnoses. Hb thresholds: 130 g/L for men and 120 g/L for nonpregnant women; WHO 2020 ferritin: 15 µg/L, or 70 µg/L at CRP > 5 mg/L. Ganzoni target Hb, weight and stores need individual selection; the result is not a medicine dose.

### Sources

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni AM. et al. [Intravenous iron-dextran: therapeutic and experimental possibilities]. Schweiz Med Wochenschr, 1970](https://pubmed.ncbi.nlm.nih.gov/5413918/)
- [Venofer. Summary of Product Characteristics: Ganzoni formula and iron stores](https://www.medicines.org.uk/emc/product/5911/smpc)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="iron-deficiency" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="iron-deficiency" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/iron-deficiency?lang=en&theme=auto"
  title="Iron Deficiency Calculator: TSAT, Ferritin and Ganzoni Deficit" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
