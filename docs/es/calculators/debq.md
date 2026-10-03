# Conducta alimentaria: adaptación modificada de DEBQ

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/debq.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/debq.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`debq` · [NutriFit](https://nutrifit.health/es/calculators/debq)

33 preguntas sobre la conducta alimentaria habitual. Se muestran tres medias de respuestas, sin categorías de normalidad ni diagnóstico.

### Uso

1. Introduzca los datos iniciales: Use valores reales y las unidades adecuadas.
2. Ajuste los parámetros: Ajuste las suposiciones iniciales a su situación.
3. Lea el resultado: Considere las limitaciones del modelo; el cálculo no es una medición.

### Método y fórmula

Grupo emocional: ítems 1–13; externo: 14–23; restrictivo: 24–33. Cada media va de 1 a 5; el ítem 17 se puntúa como 6 menos la respuesta.

Grupo emocional: ítems 1–13; externo: 14–23; restrictivo: 24–33. Cada media va de 1 a 5; el ítem 17 se puntúa como 6 menos la respuesta.

### Limitaciones

Los ítems están modificados y agrupados. No es una versión validada confirmada del DEBQ original; no se aplican normas clínicas. El permiso para usar el formulario original requiere confirmación aparte.

### Fuentes

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. et al. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire in normal subjects and women with eating disorders. J Psychosom Res, 1987](https://pubmed.ncbi.nlm.nih.gov/3473234/)

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
  title="Conducta alimentaria: adaptación modificada de DEBQ" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
