# HOMA-IR Calculator: Insulin Resistance Index

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/homa-ir.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/homa-ir.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/homa-ir.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/homa-ir.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/homa-ir.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/homa-ir.md)

[← Calculator catalog](../CALCULATORS.md)

`homa-ir` · [NutriFit](https://nutrifit.health/calculators/homa-ir)

HOMA-IR, HOMA-β and QUICKI from fasting glucose and insulin: insulin resistance and beta-cell function with reference ranges and interpretation.

### Usage

1. Enter the starting values: HOMA1 (Matthews, 1985) and QUICKI (Katz, 2000) model fasting glucose and insulin. They describe different aspects of the same data and are used mainly in research. HOMA-IR estimates insulin resistance, HOMA-β estimates secretion within the model, and QUICKI estimates insulin sensitivity. These indices do not replace clinical diagnostic criteria for diabetes.
2. Adjust the parameters: HOMA-IR = Glucose (mmol/L) × Insulin (µIU/mL) / 22.5
HOMA-β (%) = 20 × Insulin (µIU/mL) / (Glucose (mmol/L) − 3.5)
QUICKI = 1 / [log10(Insulin, µIU/mL) + log10(Glucose, mg/dL)]
3. Read the result: The indices are valid only for fasting samples (8–12 h) and do not apply during insulin therapy, secretagogue use, decompensated type 1 diabetes or low glucose (HOMA-β is undefined at glucose ≤ 3.5 mmol/L). Insulin reference values depend on the assay, and HOMA-IR cut-offs on the population (2.0–3.8 across studies). The result is not a diagnosis but a reason to discuss glucose metabolism with a physician.

### Method and formula

HOMA1 (Matthews, 1985) and QUICKI (Katz, 2000) model fasting glucose and insulin. They describe different aspects of the same data and are used mainly in research. HOMA-IR estimates insulin resistance, HOMA-β estimates secretion within the model, and QUICKI estimates insulin sensitivity. These indices do not replace clinical diagnostic criteria for diabetes.

HOMA-IR = Glucose (mmol/L) × Insulin (µIU/mL) / 22.5
HOMA-β (%) = 20 × Insulin (µIU/mL) / (Glucose (mmol/L) − 3.5)
QUICKI = 1 / [log10(Insulin, µIU/mL) + log10(Glucose, mg/dL)]

### Limitations

The indices are valid only for fasting samples (8–12 h) and do not apply during insulin therapy, secretagogue use, decompensated type 1 diabetes or low glucose (HOMA-β is undefined at glucose ≤ 3.5 mmol/L). Insulin reference values depend on the assay, and HOMA-IR cut-offs on the population (2.0–3.8 across studies). The result is not a diagnosis but a reason to discuss glucose metabolism with a physician.

### Sources

- [Matthews DR et al. Homeostasis model assessment: insulin resistance and beta-cell function from fasting plasma glucose and insulin concentrations in man. Diabetologia, 1985](https://pubmed.ncbi.nlm.nih.gov/3899825/)
- [Katz A et al. Quantitative insulin sensitivity check index: a simple, accurate method for assessing insulin sensitivity in humans. J Clin Endocrinol Metab, 2000](https://pubmed.ncbi.nlm.nih.gov/10902785/)
- [Gayoso-Diz P et al. Insulin resistance (HOMA-IR) cut-off values and the metabolic syndrome in a general adult population: effect of gender and age: EPIRCE cross-sectional study. BMC Endocr Disord, 2013](https://pubmed.ncbi.nlm.nih.gov/24131857/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="homa-ir" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="homa-ir" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/homa-ir?lang=en&theme=auto"
  title="HOMA-IR Calculator: Insulin Resistance Index" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
