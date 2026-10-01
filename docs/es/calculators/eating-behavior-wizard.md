# Asistente de Diagnóstico de la Conducta Alimentaria

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/eating-behavior-wizard.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/eating-behavior-wizard.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/eating-behavior-wizard.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/eating-behavior-wizard.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/eating-behavior-wizard.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/eating-behavior-wizard.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`eating-behavior-wizard` · [NutriFit](https://nutrifit.health/es/calculators/eating-behavior-wizard)

Asistente diagnóstico integrador de NutriFit que sintetiza las principales escalas validadas para identificar su arquetipo de alimentación y estrategia personalizada.

### Cómo usar

1. Realice el cribado de riesgos clínicos: Indique la presencia de señales vinculadas a la obsesión por el peso y el control estricto de la comida.
2. Ajuste las dimensiones de conducta alimentaria: Señale la intensidad de sus restricciones dietéticas, ingesta emocional y respuesta a estímulos externos.
3. Obtenga su arquetipo y plan de acción: Lea la descripción de su patrón dominante y descargue su informe detallado en formato PDF.

### Método y fórmula

Algoritmo multifactorial de NutriFit que relaciona marcadores de restricción dietética, ingesta emocional, reactividad externa y riesgo de TCA en un perfil único.

Matriz de clasificación psicométrica basada en la correlación cruzada de las escalas DEBQ, SCOFF, IES-2 y mYFAS 2.0.

### Limitaciones

Herramienta orientada al autoconocimiento y apoyo nutricional. No sustituye la entrevista clínica ni el diagnóstico médico formal.

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
  title="Asistente de Diagnóstico de la Conducta Alimentaria" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
