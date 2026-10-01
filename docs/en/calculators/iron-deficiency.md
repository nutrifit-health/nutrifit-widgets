# Iron Deficiency Calculator: TSAT, Ferritin and Ganzoni Deficit

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/iron-deficiency.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/iron-deficiency.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md)

[← Calculator catalog](../CALCULATORS.md)

`iron-deficiency` · [NutriFit](https://nutrifit.health/calculators/iron-deficiency)

TSAT, a CRP-aware ferritin reference threshold and the arithmetic Ganzoni model. Biomarker patterns are not diagnoses.

### How to use

1. Prepare your laboratory results: Use results from one laboratory assessment: ferritin, iron, TIBC or transferrin, Hb and CRP. Ask the laboratory about test preparation.
2. Add CRP: At measured CRP above 5 mg/L, the ferritin reference changes from 15 to 70 µg/L. This does not eliminate all interpretive uncertainty.
3. Discuss the biomarker pattern: Low Hb is not always caused by iron deficiency, and absence of a flag does not exclude deficiency. Interpret results with symptoms and clinical context.

### Method and formula

TSAT is serum iron divided by TIBC in matching units. TIBC derived from transferrin is approximate. Ferritin comparison uses WHO 2020 references: 15 µg/L without inflammation and 70 µg/L at CRP > 5 mg/L. Diseases and clinical context may require different thresholds. The pattern does not establish the cause of anemia. Ganzoni is shown below Hb 120 g/L in women or 130 g/L in men, using a fixed target of 150 g/L and 500 mg stores, only at weight ≥ 35 kg.

TSAT (%) = Serum iron / TIBC × 100
TIBC (µmol/L) ≈ Transferrin (g/L) × 25.1
Iron deficit (mg, Ganzoni) = Weight (kg) × (Target Hb − Hb, g/dL) × 2.4 + Stores (500 mg at weight ≥ 35 kg)
Conversion: iron µg/dL × 0.179 = µmol/L; Hb g/L / 10 = g/dL

### Limitations

For nonpregnant adults. Enter measured CRP; an unknown test must not be treated as zero. Ferritin and TSAT depend on inflammation, laboratory methods and recent treatment. Ganzoni does not select an administration route, product, dose per administration or treatment duration.

### Sources

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni A.M. Intravenous iron-dextran: therapeutic and experimental possibilities. Schweiz Med Wochenschr, 1970;100(7):301–303](https://pubmed.ncbi.nlm.nih.gov/5413918/)
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
