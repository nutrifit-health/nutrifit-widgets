# Calculadora de TFG (eGFR) por CKD-EPI 2021

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/egfr.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/egfr.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/egfr.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/egfr.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/egfr.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/egfr.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`egfr` · [NutriFit](https://nutrifit.health/es/calculators/egfr)

TFG estimada por CKD-EPI 2021 (creatinina, opcionalmente cistatina C), aclaramiento de creatinina por Cockcroft-Gault y estadio de ERC según KDIGO, con conversión µmol/L y mg/dL.

### Uso

1. Introduzca los datos iniciales: La tasa de filtrado glomerular es el principal indicador de la función renal. La ecuación CKD-EPI 2021 (Inker et al., NEJM) la deriva de la creatinina sérica, la edad y el sexo sin el coeficiente racial, retirado de la práctica. Si se dispone de cistatina C se usa la ecuación combinada CKD-EPI 2021 cr-cys, más precisa en personas con masa muscular atípica (deportistas, sarcopenia, amputaciones, veganos). La calculadora muestra además el aclaramiento de creatinina por Cockcroft-Gault, aún usado para dosificar fármacos, y el estadio de ERC G1–G5 según KDIGO.
2. Ajuste los parámetros: eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1,200 × 0,9938^Edad × 1,012 [mujer]
κ = 0,7 (mujer) / 0,9 (hombre);  α = −0,241 (mujer) / −0,302 (hombre);  Scr — creatinina, mg/dL (= µmol/L / 88,4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0,544 × min(Scys/0,8,1)^−0,323 × max(Scys/0,8,1)^−0,778 × 0,9961^Edad × 0,963 [mujer]
Cockcroft-Gault (mL/min) = (140 − Edad) × Peso (kg) × 0,85 [mujer] / (72 × Scr, mg/dL)
3. Lea el resultado: CKD-EPI 2021 estima el filtrado; Cockcroft–Gault estima el aclaramiento de creatinina en mL/min sin indexarlo a superficie corporal. La enfermedad renal crónica requiere alteraciones persistentes durante al menos tres meses; un valor aislado no determina la necesidad de diálisis.

### Método y fórmula

La tasa de filtrado glomerular es el principal indicador de la función renal. La ecuación CKD-EPI 2021 (Inker et al., NEJM) la deriva de la creatinina sérica, la edad y el sexo sin el coeficiente racial, retirado de la práctica. Si se dispone de cistatina C se usa la ecuación combinada CKD-EPI 2021 cr-cys, más precisa en personas con masa muscular atípica (deportistas, sarcopenia, amputaciones, veganos). La calculadora muestra además el aclaramiento de creatinina por Cockcroft-Gault, aún usado para dosificar fármacos, y el estadio de ERC G1–G5 según KDIGO.

eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1,200 × 0,9938^Edad × 1,012 [mujer]
κ = 0,7 (mujer) / 0,9 (hombre);  α = −0,241 (mujer) / −0,302 (hombre);  Scr — creatinina, mg/dL (= µmol/L / 88,4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0,544 × min(Scys/0,8,1)^−0,323 × max(Scys/0,8,1)^−0,778 × 0,9961^Edad × 0,963 [mujer]
Cockcroft-Gault (mL/min) = (140 − Edad) × Peso (kg) × 0,85 [mujer] / (72 × Scr, mg/dL)

### Limitaciones

CKD-EPI 2021 estima el filtrado; Cockcroft–Gault estima el aclaramiento de creatinina en mL/min sin indexarlo a superficie corporal. La enfermedad renal crónica requiere alteraciones persistentes durante al menos tres meses; un valor aislado no determina la necesidad de diálisis.

### Fuentes

- [Inker LA et al. New Creatinine- and Cystatin C-Based Equations to Estimate GFR without Race. N Engl J Med, 2021](https://pubmed.ncbi.nlm.nih.gov/34554658/)
- [KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl, 2013;3(1):1–150](https://kdigo.org/guidelines/ckd-evaluation-and-management/)
- [Cockcroft DW et al. Prediction of creatinine clearance from serum creatinine. Nephron, 1976](https://pubmed.ncbi.nlm.nih.gov/1244564/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="egfr" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="egfr" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/egfr?lang=es&theme=auto"
  title="Calculadora de TFG (eGFR) por CKD-EPI 2021" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
