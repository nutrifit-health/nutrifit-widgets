# Vermeulen free testosterone estimate

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/free-testosterone.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/free-testosterone.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/free-testosterone.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/free-testosterone.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/free-testosterone.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/free-testosterone.md)

[← Calculator catalog](../CALCULATORS.md)

`free-testosterone` · [NutriFit](https://nutrifit.health/calculators/free-testosterone)

Calculates free and non-SHBG-bound fractions from total testosterone, SHBG and albumin.

### Usage

1. Enter the starting values: Use actual values and the appropriate units.
2. Adjust the parameters: Adjust the starting assumptions for your situation.
3. Read the result: Consider the model limitations; a calculation is not a measurement.

### Method and formula

Vermeulen (1999) equilibrium binding model: K_SHBG=10⁹ L/mol, K_Alb=3.6×10⁴ L/mol, albumin molecular weight 69,000 g/mol. Modelled bioavailable testosterone is free plus albumin-bound testosterone.

Vermeulen (1999) equilibrium binding model: K_SHBG=10⁹ L/mol, K_Alb=3.6×10⁴ L/mol, albumin molecular weight 69,000 g/mol. Modelled bioavailable testosterone is free plus albumin-bound testosterone.

### Limitations

This is calculated, not directly measured. No universal normal range is set: interpretation depends on symptoms, age, sex, assay and repeat measurements.

### Sources

- [Vermeulen A et al. A critical evaluation of simple methods for the estimation of free testosterone in serum. J Clin Endocrinol Metab, 1999](https://pubmed.ncbi.nlm.nih.gov/10523012/)
- [Bhasin S et al. Testosterone Therapy in Men With Hypogonadism: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab, 2018](https://pubmed.ncbi.nlm.nih.gov/29562364/)
- [Salonia A et al. European Association of Urology Guidelines on Sexual and Reproductive Health-2021 Update: Male Sexual Dysfunction. Eur Urol, 2021](https://pubmed.ncbi.nlm.nih.gov/34183196/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="free-testosterone" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="free-testosterone" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/free-testosterone?lang=en&theme=auto"
  title="Vermeulen free testosterone estimate" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
