# Escala de Alimentación Intuitiva IES-2

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ies-2.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ies-2.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`ies-2` · [NutriFit](https://nutrifit.health/es/calculators/ies-2)

IES-2: 23 afirmaciones sobre las actitudes alimentarias y las señales corporales, con cuatro subescalas.

### Uso

1. Lea las instrucciones: Indique cuánto describe cada afirmación sus actitudes y conductas. No se fija un periodo de recuerdo.
2. Elija sus respuestas: Responda a cada ítem eligiendo la opción adecuada.
3. Consulte el resultado: El resultado refleja sus respuestas; interprételo dentro de los límites de la escala.

### Método y fórmula

Grado de acuerdo de 1 a 5. En el formulario agrupado del autor, los ítems 1, 2, 3, 7, 8, 9 y 10 se puntúan como 6 menos la respuesta.

Puntuación total: media de las 23 respuestas puntuadas. Subescalas: ítems 1–6, 7–14, 15–20 y 21–23. Todas las medias van de 1 a 5; no hay umbrales diagnósticos establecidos.

### Limitaciones

Este resultado informativo no establece un diagnóstico ni prescribe tratamiento. Las traducciones son adaptaciones informativas; no se ha confirmado su validación psicométrica por separado.

### Fuentes

- [Tylka. Intuitive Eating Scale-2: grouped original items and scoring](https://cpb-us-w2.wpmucdn.com/u.osu.edu/dist/1/10560/files/2015/02/IES-2-Items-sz2at8.doc)
- [Tylka TL et al. The Intuitive Eating Scale-2: item refinement and psychometric evaluation with college women and men. J Couns Psychol, 2013](https://pubmed.ncbi.nlm.nih.gov/23356469/)
- [Tribole E., Resch E. Intuitive Eating: A Revolutionary Anti-Diet Approach. St. Martin’s Essentials, 2020](https://www.intuitiveeating.org/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ies-2" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="ies-2" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ies-2?lang=es&theme=auto"
  title="Escala de Alimentación Intuitiva IES-2" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
