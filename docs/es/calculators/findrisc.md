# Escala de riesgo de diabetes FINDRISC

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/findrisc.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/findrisc.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/findrisc.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/findrisc.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/findrisc.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/findrisc.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`findrisc` · [NutriFit](https://nutrifit.health/es/calculators/findrisc)

Riesgo de referencia de diabetes tipo 2 a 10 años según 8 factores FINDRISC; total de 0 a 26. Los porcentajes corresponden a la población del estudio original y no son una probabilidad individual precisa.

### Uso

1. Introduzca los datos iniciales: Riesgo de referencia de diabetes tipo 2 a 10 años según 8 factores FINDRISC; total de 0 a 26. Los porcentajes corresponden a la población del estudio original y no son una probabilidad individual precisa.
2. Ajuste los parámetros: Riesgo de referencia de diabetes tipo 2 a 10 años según 8 factores FINDRISC; total de 0 a 26. Los porcentajes corresponden a la población del estudio original y no son una probabilidad individual precisa.
3. Lea el resultado: Traducción informativa para autoevaluación. No se ha confirmado la validación de esta adaptación concreta. La puntuación no establece un diagnóstico y un resultado bajo no descarta enfermedad. Riesgo de referencia de diabetes tipo 2 a 10 años según 8 factores FINDRISC; total de 0 a 26. Los porcentajes corresponden a la población del estudio original y no son una probabilidad individual precisa.

### Método y fórmula

Riesgo de referencia de diabetes tipo 2 a 10 años según 8 factores FINDRISC; total de 0 a 26. Los porcentajes corresponden a la población del estudio original y no son una probabilidad individual precisa.

Riesgo de referencia de diabetes tipo 2 a 10 años según 8 factores FINDRISC; total de 0 a 26. Los porcentajes corresponden a la población del estudio original y no son una probabilidad individual precisa.

### Limitaciones

Traducción informativa para autoevaluación. No se ha confirmado la validación de esta adaptación concreta. La puntuación no establece un diagnóstico y un resultado bajo no descarta enfermedad. Riesgo de referencia de diabetes tipo 2 a 10 años según 8 factores FINDRISC; total de 0 a 26. Los porcentajes corresponden a la población del estudio original y no son una probabilidad individual precisa.

### Fuentes

- [Finnish Diabetes Association. Type 2 diabetes risk assessment form](https://sites.pitt.edu/~super1/assist/Type%202%20diabetes%20risk%20test.pdf)
- [Lindström J et al. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003](https://pubmed.ncbi.nlm.nih.gov/12610029/)
- [International Diabetes Federation (IDF). Clinical Practice Recommendations for managing Type 2 Diabetes in Primary Care, 2017](https://www.idf.org/our-activities/care-prevention/clinical-practice-recommendations/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="findrisc" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="findrisc" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/findrisc?lang=es&theme=auto"
  title="Escala de riesgo de diabetes FINDRISC" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
