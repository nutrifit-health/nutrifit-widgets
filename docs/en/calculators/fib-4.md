# FIB-4 and APRI Calculator: Liver Fibrosis Indices

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fib-4.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fib-4.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fib-4.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fib-4.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fib-4.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fib-4.md)

[← Calculator catalog](../CALCULATORS.md)

`fib-4` · [NutriFit](https://nutrifit.health/calculators/fib-4)

FIB-4 and APRI from age, AST, ALT and platelets, with thresholds and limitations for discussion with a clinician.

### How to use

1. Take AST, ALT and platelets: Transaminases from chemistry, platelets from the blood count. The tests should be from the same period (within 1–2 weeks) and outside acute illness.
2. Enter age and the AST ULN: FIB-4 depends on age: after 65 the low-risk cut-off rises to 2.0. APRI needs your lab’s AST upper limit of normal.
3. Follow the algorithm: Low FIB-4 — monitoring and risk-factor control. Gray zone — elastography. High — hepatologist. This is the official EASL/AASLD pathway for NAFLD.

### Method and formula

FIB-4 (Sterling, 2006) combines age, AST, ALT and platelets. In metabolic fatty liver disease pathways, a low result helps identify a lower likelihood of advanced fibrosis; intermediate or high results need further assessment. It is neither a fibrosis stage nor a diagnosis. APRI (Wai, 2003) was developed for chronic hepatitis C; its thresholds do not automatically transfer to other diseases.

FIB-4 = Age (years) × AST (U/L) / [ Platelets (10⁹/L) × √ALT (U/L) ]
APRI = [ AST / AST ULN ] × 100 / Platelets (10⁹/L)
FIB-4 cut-offs: < 1.3 (< 2.0 at age ≥ 65) low risk; 1.3–2.67 indeterminate; > 2.67 high
APRI cut-offs: < 0.5 low; > 1.5 significant fibrosis likely

### Limitations

FIB-4 helps estimate the likelihood of advanced fibrosis but cannot confirm or exclude it in every individual. Accuracy is low below age 35; do not interpret it during acute illness. Non-liver causes of low platelets and muscle-related AST elevation can distort the result. Thresholds depend on age, disease cause and clinical context.

### Sources

- [Sterling R.K. et al. Development of a simple noninvasive index to predict significant fibrosis in patients with HIV/HCV coinfection. Hepatology, 2006;43(6):1317–1325](https://pubmed.ncbi.nlm.nih.gov/16729309/)
- [Wai C.T. et al. A simple noninvasive index can predict both significant fibrosis and cirrhosis in patients with chronic hepatitis C. Hepatology, 2003;38(2):518–526](https://pubmed.ncbi.nlm.nih.gov/12883497/)
- [EASL Clinical Practice Guidelines on non-invasive tests for evaluation of liver disease severity and prognosis — 2021 update. J Hepatol, 2021;75(3):659–689](https://pubmed.ncbi.nlm.nih.gov/34166721/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fib-4" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="fib-4" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fib-4?lang=en&theme=auto"
  title="FIB-4 and APRI Calculator: Liver Fibrosis Indices" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
