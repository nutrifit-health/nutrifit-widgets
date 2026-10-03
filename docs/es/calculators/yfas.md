# Escala de Adicción a la Comida de Yale mYFAS 2.0

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/yfas.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/yfas.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`yfas` · [NutriFit](https://nutrifit.health/es/calculators/yfas)

mYFAS 2.0: 13 preguntas sobre problemas con la alimentación durante los últimos 12 meses.

### Uso

1. Lea las instrucciones: Tenga en cuenta el periodo indicado y el significado de cada afirmación.
2. Elija sus respuestas: Responda a cada ítem eligiendo la opción adecuada.
3. Consulte el resultado: El resultado refleja sus respuestas; interprételo dentro de los límites de la escala.

### Método y fórmula

Ocho opciones de frecuencia, de nunca a todos los días. Cada ítem tiene su propio umbral de frecuencia; no se usan respuestas de sí/no.

Los ítems 5 y 6 evalúan malestar/deterioro funcional. Los otros 11 determinan el número de síntomas. Con malestar/deterioro: 2–3 indican categoría leve, 4–5 moderada y 6–11 grave; de lo contrario no se cumple el criterio de la escala.

### Limitaciones

Este resultado informativo no establece un diagnóstico ni prescribe tratamiento. Las traducciones son adaptaciones informativas; no se ha confirmado su validación psicométrica por separado.

### Fuentes

- [Schulte, Gearhardt. Modified Yale Food Addiction Scale 2.0: original form and scoring](https://sites.lsa.umich.edu/fastlab/yale-food-addiction-scale/)
- [Schulte EM et al. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017](https://pubmed.ncbi.nlm.nih.gov/28370722/)
- [Gearhardt AN et al. Development of the Yale Food Addiction Scale Version 2.0. Psychol Addict Behav, 2016](https://pubmed.ncbi.nlm.nih.gov/26866783/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="yfas" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="yfas" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/yfas?lang=es&theme=auto"
  title="Escala de Adicción a la Comida de Yale mYFAS 2.0" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
