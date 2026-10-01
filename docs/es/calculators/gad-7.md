# Escala del Trastorno de Ansiedad Generalizada GAD-7

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/gad-7.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/gad-7.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/gad-7.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/gad-7.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/gad-7.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/gad-7.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`gad-7` · [NutriFit](https://nutrifit.health/es/calculators/gad-7)

Cuestionario clínico internacional diseñado para evaluar de forma ágil y precisa la intensidad de la ansiedad generalizada y la tensión somática.

### Cómo usar

1. Valore los síntomas de los últimos 14 días: Haga memoria sobre la frecuencia con la que ha sentido desasosiego, temor o tensión muscular durante las últimas dos semanas.
2. Seleccione sus respuestas: Indique la frecuencia de cada síntoma desde 'Para nada' (0) hasta 'Casi todos los días' (3).
3. Obtenga su resultado y pautas: Conozca su nivel de ansiedad y explore estrategias efectivas para recuperar el equilibrio autonómico.

### Método y fórmula

7 preguntas valoradas de 0 a 3 puntos que examinan los síntomas de ansiedad experimentados en las últimas 2 semanas.

Puntuación total GAD-7 = Suma de los 7 ítems (0–21). 0–4: mínima; 5–9: leve; 10–14: moderada; 15–21: grave.

### Limitaciones

Este cribado no constituye un diagnóstico médico formal. Si sufre crisis de pánico o malestar invalidante, consulte a un profesional de salud mental.

### Fuentes

- [Spitzer R.L. et al. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 2006;166(10):1092–1097](https://pubmed.ncbi.nlm.nih.gov/16717171/)
- [Löwe B. et al. Validation and standardization of the Generalized Anxiety Disorder Screener (GAD-7). Med Care, 2008;46(3):266–274](https://pubmed.ncbi.nlm.nih.gov/18388841/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="gad-7" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="gad-7" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/gad-7?lang=es&theme=auto"
  title="Escala del Trastorno de Ansiedad Generalizada GAD-7" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
