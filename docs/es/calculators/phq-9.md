# Cuestionario de Salud del Paciente PHQ-9 (Depresión)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phq-9.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phq-9.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`phq-9` · [NutriFit](https://nutrifit.health/es/calculators/phq-9)

El estándar de oro internacional para el cribado primario de la depresión y la estimación de gravedad según criterios clínicos del DSM-5.

### Cómo usar

1. Considere las últimas dos semanas: Evalúe su bienestar general a lo largo de los últimos 14 días atendiendo a la recurrencia de los síntomas.
2. Responda a las 9 preguntas: Seleccione con qué frecuencia ha experimentado cada síntoma, desde 'Para nada' (0) hasta 'Casi todos los días' (3).
3. Examine la interpretación clínica: Revise el nivel de gravedad obtenido, las recomendaciones de autocuidado y las opciones terapéuticas pertinentes.

### Método y fórmula

9 preguntas que valoran la frecuencia de síntomas depresivos durante las últimas 2 semanas en escala de 0 ('Para nada') a 3 ('Casi todos los días').

Puntuación total PHQ-9 = Suma de los 9 ítems (0–27). 0–4: Mínima; 5–9: Leve; 10–14: Moderada; 15–19: Moderadamente grave; 20–27: Grave.

### Limitaciones

Este test no sustituye el diagnóstico realizado por un psiquiatra o psicoterapeuta. Toda respuesta afirmativa a la pregunta 9 exige atención médica profesional inmediata.

### Fuentes

- [Kroenke K. et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001;16(9):606–613](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer R.L. et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. JAMA, 1999;282(18):1737–1744](https://pubmed.ncbi.nlm.nih.gov/10568646/)

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
