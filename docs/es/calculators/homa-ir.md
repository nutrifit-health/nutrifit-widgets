# Calculadora HOMA-IR: índice de resistencia a la insulina

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/homa-ir.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/homa-ir.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/homa-ir.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/homa-ir.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/homa-ir.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/homa-ir.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`homa-ir` · [NutriFit](https://nutrifit.health/es/calculators/homa-ir)

HOMA-IR, HOMA-β y QUICKI a partir de glucosa e insulina en ayunas: resistencia a la insulina y función de células β con rangos de referencia e interpretación.

### Uso

1. Introduzca los datos iniciales: HOMA1 (Matthews, 1985) y QUICKI (Katz, 2000) son modelos basados en glucosa e insulina en ayunas. Describen aspectos distintos de los mismos datos y se usan principalmente en investigación. HOMA-IR estima la resistencia a la insulina; HOMA-β, la secreción dentro del modelo; y QUICKI, la sensibilidad. No sustituyen los criterios clínicos para diagnosticar diabetes.
2. Ajuste los parámetros: HOMA-IR = Glucosa (mmol/L) × Insulina (µUI/mL) / 22,5
HOMA-β (%) = 20 × Insulina (µUI/mL) / (Glucosa (mmol/L) − 3,5)
QUICKI = 1 / [log10(Insulina, µUI/mL) + log10(Glucosa, mg/dL)]
3. Lea el resultado: Los índices solo son válidos para muestras en ayunas (8–12 h) y no se aplican durante insulinoterapia, uso de secretagogos, diabetes tipo 1 descompensada ni con glucosa baja (HOMA-β no está definido con glucosa ≤ 3,5 mmol/L). Los valores de referencia de insulina dependen del método del laboratorio y los puntos de corte del HOMA-IR, de la población (2,0–3,8 según el estudio). El resultado no es un diagnóstico, sino un motivo para revisar el metabolismo de la glucosa con un médico.

### Método y fórmula

HOMA1 (Matthews, 1985) y QUICKI (Katz, 2000) son modelos basados en glucosa e insulina en ayunas. Describen aspectos distintos de los mismos datos y se usan principalmente en investigación. HOMA-IR estima la resistencia a la insulina; HOMA-β, la secreción dentro del modelo; y QUICKI, la sensibilidad. No sustituyen los criterios clínicos para diagnosticar diabetes.

HOMA-IR = Glucosa (mmol/L) × Insulina (µUI/mL) / 22,5
HOMA-β (%) = 20 × Insulina (µUI/mL) / (Glucosa (mmol/L) − 3,5)
QUICKI = 1 / [log10(Insulina, µUI/mL) + log10(Glucosa, mg/dL)]

### Limitaciones

Los índices solo son válidos para muestras en ayunas (8–12 h) y no se aplican durante insulinoterapia, uso de secretagogos, diabetes tipo 1 descompensada ni con glucosa baja (HOMA-β no está definido con glucosa ≤ 3,5 mmol/L). Los valores de referencia de insulina dependen del método del laboratorio y los puntos de corte del HOMA-IR, de la población (2,0–3,8 según el estudio). El resultado no es un diagnóstico, sino un motivo para revisar el metabolismo de la glucosa con un médico.

### Fuentes

- [Matthews DR et al. Homeostasis model assessment: insulin resistance and beta-cell function from fasting plasma glucose and insulin concentrations in man. Diabetologia, 1985](https://pubmed.ncbi.nlm.nih.gov/3899825/)
- [Katz A et al. Quantitative insulin sensitivity check index: a simple, accurate method for assessing insulin sensitivity in humans. J Clin Endocrinol Metab, 2000](https://pubmed.ncbi.nlm.nih.gov/10902785/)
- [Gayoso-Diz P et al. Insulin resistance (HOMA-IR) cut-off values and the metabolic syndrome in a general adult population: effect of gender and age: EPIRCE cross-sectional study. BMC Endocr Disord, 2013](https://pubmed.ncbi.nlm.nih.gov/24131857/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="homa-ir" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="homa-ir" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/homa-ir?lang=es&theme=auto"
  title="Calculadora HOMA-IR: índice de resistencia a la insulina" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
