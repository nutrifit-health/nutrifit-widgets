# Escala del Trastorno de Ansiedad Generalizada GAD-7

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/gad-7.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/gad-7.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/gad-7.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/gad-7.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/gad-7.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/gad-7.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`gad-7` · [NutriFit](https://nutrifit.health/es/calculators/gad-7)

Intensidad de síntomas de ansiedad durante las últimas 2 semanas: 7 respuestas de frecuencia de 0 a 3; total de 0 a 21.

### Uso

1. Introduzca los datos iniciales: Intensidad de síntomas de ansiedad durante las últimas 2 semanas: 7 respuestas de frecuencia de 0 a 3; total de 0 a 21.
2. Ajuste los parámetros: Intensidad de síntomas de ansiedad durante las últimas 2 semanas: 7 respuestas de frecuencia de 0 a 3; total de 0 a 21.
3. Lea el resultado: Traducción informativa para autoevaluación. No se ha confirmado la validación de esta adaptación concreta. La puntuación no establece un diagnóstico y un resultado bajo no descarta enfermedad.

### Método y fórmula

Intensidad de síntomas de ansiedad durante las últimas 2 semanas: 7 respuestas de frecuencia de 0 a 3; total de 0 a 21.

Intensidad de síntomas de ansiedad durante las últimas 2 semanas: 7 respuestas de frecuencia de 0 a 3; total de 0 a 21.

### Limitaciones

Traducción informativa para autoevaluación. No se ha confirmado la validación de esta adaptación concreta. La puntuación no establece un diagnóstico y un resultado bajo no descarta enfermedad.

### Fuentes

- [Spitzer RL et al. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 2006](https://pubmed.ncbi.nlm.nih.gov/16717171/)
- [Löwe B et al. Validation and standardization of the Generalized Anxiety Disorder Screener (GAD-7) in the general population. Med Care, 2008](https://pubmed.ncbi.nlm.nih.gov/18388841/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="gad-7" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="gad-7" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/gad-7?lang=es&theme=auto"
  title="Escala del Trastorno de Ansiedad Generalizada GAD-7" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
