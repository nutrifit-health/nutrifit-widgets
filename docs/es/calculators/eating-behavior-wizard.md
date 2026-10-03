# Autoevaluación de la conducta alimentaria

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/eating-behavior-wizard.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/eating-behavior-wizard.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/eating-behavior-wizard.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/eating-behavior-wizard.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/eating-behavior-wizard.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/eating-behavior-wizard.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`eating-behavior-wizard` · [NutriFit](https://nutrifit.health/es/calculators/eating-behavior-wizard)

Cinco preguntas de SCOFF y cuatro preguntas propias para reflexionar sobre la conducta alimentaria.

### Uso

1. Lea las instrucciones: Tenga en cuenta el periodo indicado y el significado de cada afirmación.
2. Elija sus respuestas: Responda a cada ítem eligiendo la opción adecuada.
3. Consulte el resultado: El resultado refleja sus respuestas; interprételo dentro de los límites de la escala.

### Método y fórmula

SCOFF se calcula con cinco respuestas reales de sí/no. Las demás respuestas se muestran directamente.

Dos o más respuestas afirmativas en SCOFF indican un cribado positivo. Las preguntas propias no calculan DEBQ, IES-2 ni mYFAS ni determinan un tipo psicológico.

### Limitaciones

Este resultado informativo no establece un diagnóstico ni prescribe tratamiento. Las traducciones son adaptaciones informativas; no se ha confirmado su validación psicométrica por separado.

### Fuentes

- [Fairburn C.G. Cognitive Behavior Therapy and Eating Disorders. Guilford Press, 2008](https://www.guilford.com/books/Cognitive-Behavior-Therapy-and-Eating-Disorders/Christopher-Fairburn/9781593857097)
- [American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR), 2022](https://doi.org/10.1176/appi.books.9780890425787)
- [NICE (National Institute for Health and Care Excellence). Eating disorders: recognition and treatment (NG69), 2020](https://www.nice.org.uk/guidance/ng69)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="eating-behavior-wizard" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="eating-behavior-wizard" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/eating-behavior-wizard?lang=es&theme=auto"
  title="Autoevaluación de la conducta alimentaria" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
