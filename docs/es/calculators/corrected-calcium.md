# Calculadora de calcio corregido por albúmina

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/corrected-calcium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/corrected-calcium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`corrected-calcium` · [NutriFit](https://nutrifit.health/es/calculators/corrected-calcium)

Calcio corregido = calcio total + 0,02 × (40 − albúmina), con calcio en mmol/L y albúmina en g/L. Es la ecuación simplificada de Payne.

### Uso

1. Introduzca los datos iniciales: Calcio corregido = calcio total + 0,02 × (40 − albúmina), con calcio en mmol/L y albúmina en g/L. Es la ecuación simplificada de Payne.
2. Ajuste los parámetros: Calcio corregido = calcio total + 0,02 × (40 − albúmina), con calcio en mmol/L y albúmina en g/L. Es la ecuación simplificada de Payne.
Ca: mg/dL × 0.2495 = mmol/L; mmol/L ÷ 0.2495 = mg/dL. Albumin: g/dL × 10 = g/L.
3. Lea el resultado: La corrección no mide el calcio ionizado y puede clasificar resultados erróneamente, especialmente con albúmina baja. No se asigna una categoría universal de calcio.

### Método y fórmula

Calcio corregido = calcio total + 0,02 × (40 − albúmina), con calcio en mmol/L y albúmina en g/L. Es la ecuación simplificada de Payne.

Calcio corregido = calcio total + 0,02 × (40 − albúmina), con calcio en mmol/L y albúmina en g/L. Es la ecuación simplificada de Payne.
Ca: mg/dL × 0.2495 = mmol/L; mmol/L ÷ 0.2495 = mg/dL. Albumin: g/dL × 10 = g/L.

### Limitaciones

La corrección no mide el calcio ionizado y puede clasificar resultados erróneamente, especialmente con albúmina baja. No se asigna una categoría universal de calcio.

### Fuentes

- [Payne RB et al. Interpretation of serum calcium in patients with abnormal serum proteins. Br Med J, 1973](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson JH et al. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025](https://pubmed.ncbi.nlm.nih.gov/39836424/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="corrected-calcium" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="corrected-calcium" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/corrected-calcium?lang=es&theme=auto"
  title="Calculadora de calcio corregido por albúmina" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
