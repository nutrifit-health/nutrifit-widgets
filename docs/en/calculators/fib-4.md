# FIB-4 and APRI Calculator: Liver Fibrosis Indices

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fib-4.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fib-4.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fib-4.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fib-4.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fib-4.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fib-4.md)

[← Calculator catalog](../CALCULATORS.md)

`fib-4` · [NutriFit](https://nutrifit.health/calculators/fib-4)

FIB-4 (Sterling 2006) uses age, AST, ALT and platelets. AASLD 2023 thresholds concern the likelihood of advanced fibrosis in metabolic fatty liver disease, not fibrosis staging. Ages 35–65: lower threshold 1.3; over 65: 2.0; upper threshold 2.67. No category is assigned below 35; do not interpret during acute illness. APRI (Wai 2003) and thresholds 0.5/1.5 concern significant fibrosis in chronic hepatitis C and do not automatically transfer to other diseases.

### Usage

1. Enter the starting values: FIB-4 (Sterling 2006) uses age, AST, ALT and platelets. AASLD 2023 thresholds concern the likelihood of advanced fibrosis in metabolic fatty liver disease, not fibrosis staging. Ages 35–65: lower threshold 1.3; over 65: 2.0; upper threshold 2.67. No category is assigned below 35; do not interpret during acute illness. APRI (Wai 2003) and thresholds 0.5/1.5 concern significant fibrosis in chronic hepatitis C and do not automatically transfer to other diseases.
2. Adjust the parameters: FIB-4 = age × AST / (platelets × √ALT); APRI = (AST / AST_ULN) × 100 / platelets.
FIB-4 (Sterling 2006) uses age, AST, ALT and platelets. AASLD 2023 thresholds concern the likelihood of advanced fibrosis in metabolic fatty liver disease, not fibrosis staging. Ages 35–65: lower threshold 1.3; over 65: 2.0; upper threshold 2.67. No category is assigned below 35; do not interpret during acute illness. APRI (Wai 2003) and thresholds 0.5/1.5 concern significant fibrosis in chronic hepatitis C and do not automatically transfer to other diseases.
3. Read the result: FIB-4 helps estimate the likelihood of advanced fibrosis but cannot confirm or exclude it in every individual. Accuracy is low below age 35; do not interpret it during acute illness. Non-liver causes of low platelets and muscle-related AST elevation can distort the result. Thresholds depend on age, disease cause and clinical context.

### Method and formula

FIB-4 (Sterling 2006) uses age, AST, ALT and platelets. AASLD 2023 thresholds concern the likelihood of advanced fibrosis in metabolic fatty liver disease, not fibrosis staging. Ages 35–65: lower threshold 1.3; over 65: 2.0; upper threshold 2.67. No category is assigned below 35; do not interpret during acute illness. APRI (Wai 2003) and thresholds 0.5/1.5 concern significant fibrosis in chronic hepatitis C and do not automatically transfer to other diseases.

FIB-4 = age × AST / (platelets × √ALT); APRI = (AST / AST_ULN) × 100 / platelets.
FIB-4 (Sterling 2006) uses age, AST, ALT and platelets. AASLD 2023 thresholds concern the likelihood of advanced fibrosis in metabolic fatty liver disease, not fibrosis staging. Ages 35–65: lower threshold 1.3; over 65: 2.0; upper threshold 2.67. No category is assigned below 35; do not interpret during acute illness. APRI (Wai 2003) and thresholds 0.5/1.5 concern significant fibrosis in chronic hepatitis C and do not automatically transfer to other diseases.

### Limitations

FIB-4 helps estimate the likelihood of advanced fibrosis but cannot confirm or exclude it in every individual. Accuracy is low below age 35; do not interpret it during acute illness. Non-liver causes of low platelets and muscle-related AST elevation can distort the result. Thresholds depend on age, disease cause and clinical context.

### Sources

- [Rinella M.E. et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology, 2023.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10735173/)
- [Sterling RK et al. Development of a simple noninvasive index to predict significant fibrosis in patients with HIV/HCV coinfection. Hepatology, 2006](https://pubmed.ncbi.nlm.nih.gov/16729309/)
- [Wai CT et al. A simple noninvasive index can predict both significant fibrosis and cirrhosis in patients with chronic hepatitis C. Hepatology, 2003](https://pubmed.ncbi.nlm.nih.gov/12883497/)
- [European Association for the Study of the Liver. et al. EASL Clinical Practice Guidelines on non-invasive tests for evaluation of liver disease severity and prognosis - 2021 update. J Hepatol, 2021](https://pubmed.ncbi.nlm.nih.gov/34166721/)

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
