# Cuestionario de Cribado de TCA SCOFF

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/scoff.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/scoff.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/scoff.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/scoff.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/scoff.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/scoff.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`scoff` · [NutriFit](https://nutrifit.health/es/calculators/scoff)

Herramienta clínica de 5 preguntas breves reconocida internacionalmente para detectar el riesgo de padecer anorexia o bulimia nerviosa.

### Uso

1. Lea las instrucciones: Tenga en cuenta el periodo indicado y el significado de cada afirmación.
2. Elija sus respuestas: Responda a cada ítem eligiendo la opción adecuada.
3. Consulte el resultado: Cribado positivo — se necesita más evaluación

### Método y fórmula

Consta de 5 preguntas cerradas (Sí/No) que exploran vómito autoinducido, pérdida de control, adelgazamiento brusco, distorsión corporal y obsesión con la comida.

Puntuación total SCOFF = Número de respuestas afirmativas (0–5). Un resultado ≥ 2 indica cribado positivo y alto riesgo de TCA.

### Limitaciones

Este resultado informativo no establece un diagnóstico ni prescribe tratamiento. Las traducciones son adaptaciones informativas; no se ha confirmado su validación psicométrica por separado.

### Fuentes

- [Morgan JF et al. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ, 1999](https://pubmed.ncbi.nlm.nih.gov/10582927/)
- [Luck AJ et al. The SCOFF questionnaire and clinical interview for eating disorders in general practice: comparative study. BMJ, 2002](https://pubmed.ncbi.nlm.nih.gov/12364305/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="scoff" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="scoff" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/scoff?lang=es&theme=auto"
  title="Cuestionario de Cribado de TCA SCOFF" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
