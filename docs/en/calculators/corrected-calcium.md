# Albumin-Corrected Calcium Calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/corrected-calcium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/corrected-calcium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md)

[← Calculator catalog](../CALCULATORS.md)

`corrected-calcium` · [NutriFit](https://nutrifit.health/calculators/corrected-calcium)

Educational calculation of albumin-adjusted total calcium using the simplified Payne formula. It does not measure ionized calcium or determine treatment.

### How to use

1. Take total calcium and albumin from one sample: Both are part of standard chemistry. Units: calcium in mmol/L or mg/dL, albumin in g/L or g/dL — choose as on your report.
2. Compare measured and corrected: A category change reflects only the mathematical adjustment. It does not prove that the original test was false or that treatment is unnecessary.
3. When in doubt — ionized calcium: Adjustment is especially unreliable with low albumin, CKD, critical illness and pH disturbances. A clinician selects the measurements needed for clarification.

### Method and formula

The simplified Payne formula adds 0.02 mmol/L per 1 g/L decrease in albumin below 40 g/L. It is a historical adjustment of total calcium to an assumed albumin level, not a calculation of ionized calcium. A 2025 study found a risk of misclassification, especially at low albumin; unadjusted total calcium agreed better with ionized calcium in that study.

Adjusted Ca (mmol/L) = total Ca + 0.02 × (40 − albumin, g/L)
Ca entered in mg/dL is first multiplied by 0.2495; the result is converted back by dividing by 0.2495.
Albumin g/dL × 10 = g/L. Common approximate expression: Ca (mg/dL) + 0.8 × (4 − albumin, g/dL).
Assumed total-calcium comparison interval: 2.15–2.55 mmol/L.

### Limitations

Adjustment may worsen calcium-status classification, particularly with albumin below 30 g/L. It is unreliable in CKD, critical illness and pH disturbances. If clinically uncertain, a clinician may request ionized calcium, which also depends on correct sample collection and handling. This formula does not establish a diagnosis or a supplement prescription.

### Sources

- [Payne R.B., Little A.J., Williams R.B., Milner J.R. Interpretation of serum calcium in patients with abnormal serum proteins. BMJ, 1973;4(5893):643–646](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson J.H., Lewis J.W., Boyd J.C. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978;46(6):986–993](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N. et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025;8(1):e2455251](https://pubmed.ncbi.nlm.nih.gov/39836424/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="corrected-calcium" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="corrected-calcium" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/corrected-calcium?lang=en&theme=auto"
  title="Albumin-Corrected Calcium Calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
