# Free Testosterone Calculator (Vermeulen)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/free-testosterone.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/free-testosterone.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/free-testosterone.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/free-testosterone.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/free-testosterone.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/free-testosterone.md)

[← Calculator catalog](../CALCULATORS.md)

`free-testosterone` · [NutriFit](https://nutrifit.health/calculators/free-testosterone)

Free and bioavailable testosterone fractions from the Vermeulen 1999 binding model. Results require method-specific reference intervals and clinical context.

### How to use

1. Test total testosterone and SHBG in the morning: Testosterone peaks between 7 and 10 a.m. and falls 20–30% by evening. Test fasting, outside acute illness, preferably by LC-MS/MS.
2. Add albumin: Use measured albumin in g/L. The initial 43 g/L is an example; substituting it for a measurement adds uncertainty.
3. Look at the free fraction when SHBG is atypical: When SHBG changes, total testosterone and its free fraction may suggest different interpretations. Consider both alongside symptoms, the assay method and repeated measurements.

### Method and formula

Only 1–3% of blood testosterone is free, about 40–50% is tightly bound to sex hormone-binding globulin (SHBG), and the rest loosely to albumin. The free and albumin-bound fractions ("bioavailable testosterone") are biologically active. Direct measurement of free testosterone (equilibrium dialysis) is expensive and scarce, and immunoassays are inaccurate, so ISSAM, the Endocrine Society and the EAU recommend the Vermeulen calculation (1999): it solves the binding equilibrium with association constants of 1×10⁹ L/mol for SHBG and 3.6×10⁴ L/mol for albumin. The method matters most when SHBG is high (age, hyperthyroidism, liver disease, estrogens) or low (obesity, insulin resistance, hypothyroidism), when total testosterone misleads.

N = Kalb × [Albumin] + 1;  a = N × Kshbg;  b = N + Kshbg × ([SHBG] − [T])
Free T = (−b + √(b² + 4·a·[T])) / (2·a)
Bioavailable T = Free T × N
Kshbg = 1×10⁹ L/mol; Kalb = 3.6×10⁴ L/mol; concentrations in mol/L; albumin g/L / 69,000
Conversion: T ng/dL × 0.0347 = nmol/L; free T nmol/L × 288.4 = pg/mL

### Limitations

The calculation is valid when total testosterone is measured by an accurate method (LC-MS/MS or a calibrated immunoassay) in the morning between 7 and 11 a.m. fasting, twice several weeks apart. Abnormal albumin shifts the result; in pregnancy and on oral contraceptives SHBG changes sharply. Free testosterone references depend on method and age; the thresholds below apply to men — for women the calculator shows values without a category. A diagnosis of hypogonadism requires symptoms and an in-person work-up.

### Sources

- [Vermeulen A., Verdonck L., Kaufman J.M. A critical evaluation of simple methods for the estimation of free testosterone in serum. J Clin Endocrinol Metab, 1999;84(10):3666–3672](https://pubmed.ncbi.nlm.nih.gov/10523012/)
- [Bhasin S. et al. Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab, 2018;103(5):1715–1744](https://pubmed.ncbi.nlm.nih.gov/29562364/)
- [Salonia A. et al. European Association of Urology guidelines on sexual and reproductive health — 2021 update: male sexual dysfunction. Eur Urol, 2021;80(3):333–357](https://pubmed.ncbi.nlm.nih.gov/34183196/)

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
  title="Free Testosterone Calculator (Vermeulen)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
