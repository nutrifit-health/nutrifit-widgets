# Cuestionario Holandés de Conducta Alimentaria (DEBQ)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/debq.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/debq.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`debq` · [NutriFit](https://nutrifit.health/es/calculators/debq)

Instrumento psicológico clásico validado para evaluar los tres estilos predominantes de conducta alimentaria: restrictivo, emocional y externo.

### Cómo usar

1. Responda con sinceridad: Seleccione la opción que mejor describa su comportamiento habitual durante los últimos meses.
2. No medite en exceso: La primera reacción espontánea suele ser la más representativa de sus hábitos reales.
3. Analice los resultados de las tres subescalas: Compare sus puntuaciones con los umbrales normativos y consulte las recomendaciones prácticas.

### Método y fórmula

El cuestionario consta de 33 ítems evaluados en una escala Likert del 1 al 5. Analiza tres subescalas: restricción cognitiva (10 ítems), ingesta emocional (13 ítems) y estimulación externa (10 ítems).

Puntuación de subescala = Media aritmética de las respuestas (de 1,0 a 5,0). Restricción: normal ~2,4; Emocional: normal ~1,8; Externa: normal ~2,7.

### Limitaciones

Este test es una herramienta de autoevaluación psicológica y no constituye un diagnóstico clínico. En caso de malestar significativo, consulte a un profesional especializado en TCA.

### Fuentes

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire. J Psychosom Res, 1987;31(2):161–169](https://pubmed.ncbi.nlm.nih.gov/3585818/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="debq" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="debq" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/debq?lang=es&theme=auto"
  title="Cuestionario Holandés de Conducta Alimentaria (DEBQ)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
