# Cuestionario de Salud del Paciente PHQ-9 (Depresión)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phq-9.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phq-9.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`phq-9` · [NutriFit](https://nutrifit.health/es/calculators/phq-9)

Intensidad de síntomas depresivos durante las últimas 2 semanas: 9 respuestas de frecuencia de 0 a 3; total de 0 a 27.

### Uso

1. Introduzca los datos iniciales: Intensidad de síntomas depresivos durante las últimas 2 semanas: 9 respuestas de frecuencia de 0 a 3; total de 0 a 27.
2. Ajuste los parámetros: Intensidad de síntomas depresivos durante las últimas 2 semanas: 9 respuestas de frecuencia de 0 a 3; total de 0 a 27.
3. Lea el resultado: Traducción informativa para autoevaluación. No se ha confirmado la validación de esta adaptación concreta. La puntuación no establece un diagnóstico y un resultado bajo no descarta enfermedad. Cualquier respuesta distinta de cero al ítem 9 requiere hablar por separado sobre pensamientos de muerte o autolesión con un profesional, independientemente del total. Busque ayuda urgente si hay peligro inmediato.

### Método y fórmula

Intensidad de síntomas depresivos durante las últimas 2 semanas: 9 respuestas de frecuencia de 0 a 3; total de 0 a 27.

Intensidad de síntomas depresivos durante las últimas 2 semanas: 9 respuestas de frecuencia de 0 a 3; total de 0 a 27.

### Limitaciones

Traducción informativa para autoevaluación. No se ha confirmado la validación de esta adaptación concreta. La puntuación no establece un diagnóstico y un resultado bajo no descarta enfermedad. Cualquier respuesta distinta de cero al ítem 9 requiere hablar por separado sobre pensamientos de muerte o autolesión con un profesional, independientemente del total. Busque ayuda urgente si hay peligro inmediato.

### Fuentes

- [Kroenke K et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer RL et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. Primary Care Evaluation of Mental Disorders. Patient Health Questionnaire. JAMA, 1999](https://pubmed.ncbi.nlm.nih.gov/10568646/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phq-9" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="phq-9" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phq-9?lang=es&theme=auto"
  title="Cuestionario de Salud del Paciente PHQ-9 (Depresión)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
