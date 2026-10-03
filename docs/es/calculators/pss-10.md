# Escala de Estrés Percibido (PSS-10)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/pss-10.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/pss-10.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`pss-10` · [NutriFit](https://nutrifit.health/es/calculators/pss-10)

Estrés percibido durante el último mes, evaluado con los 10 ítems de PSS-10.

### Uso

1. Lea las instrucciones: Tenga en cuenta el periodo indicado y el significado de cada afirmación.
2. Elija sus respuestas: Responda a cada ítem eligiendo la opción adecuada.
3. Consulte el resultado: El resultado refleja sus respuestas; interprételo dentro de los límites de la escala.

### Método y fórmula

10 respuestas de 0 a 4. Los ítems 4, 5, 7 y 8 se puntúan como 4 menos la respuesta.

Suma de 0 a 40. Una puntuación mayor indica más estrés percibido; el autor no establece umbrales de estrés bajo, moderado o alto.

### Limitaciones

Este resultado informativo no establece un diagnóstico ni prescribe tratamiento. Las traducciones son adaptaciones informativas; no se ha confirmado su validación psicométrica por separado.

### Fuentes

- [Cohen. Perceived Stress Scale: author instructions and scoring limitations](https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/index.html)
- [Cohen S et al. A global measure of perceived stress. J Health Soc Behav, 1983](https://pubmed.ncbi.nlm.nih.gov/6668417/)
- [Cohen S., Williamson G.M. Perceived stress in a probability sample of the United States. The Social Psychology of Health, 1988:31–67](https://psycnet.apa.org/record/1988-98838-002)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="pss-10" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="pss-10" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/pss-10?lang=es&theme=auto"
  title="Escala de Estrés Percibido (PSS-10)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
