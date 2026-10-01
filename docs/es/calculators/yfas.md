# Escala de Adicción a la Comida de Yale mYFAS 2.0

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/yfas.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/yfas.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`yfas` · [NutriFit](https://nutrifit.health/es/calculators/yfas)

Cuestionario científico adaptado de la Universidad de Yale para diagnosticar patrones adictivos hacia alimentos hiperpalatables y ultraprocesados.

### Cómo usar

1. Identifique sus alimentos conflictivos: Piense en aquellos alimentos con los que le resulta más difícil parar de comer (dulces, aperitivos salados, fritos o bollería).
2. Responda a las 13 preguntas: Marque 'Sí' si ha experimentado esa conducta de forma habitual a lo largo de los últimos 12 meses.
3. Consulte el recuento de síntomas y el resultado: Conozca cuántos criterios diagnósticos cumple y el grado de repercusión clínica en su bienestar.

### Método y fórmula

13 ítems basados en los 11 criterios diagnósticos del DSM-5 para trastornos por consumo de sustancias adaptados a la alimentación, más 2 ítems de malestar clínico significativo.

El diagnóstico de adicción a la comida precisa malestar clínico o deterioro funcional (ítems 12 o 13) y al menos 2 síntomas. 2–3: leve; 4–5: moderada; ≥ 6: adicción grave.

### Limitaciones

El concepto de 'adicción a la comida' continúa siendo objeto de debate científico. La escala evalúa conductas compulsivas hacia alimentos con alta densidad de azúcar, grasa y sal.

### Fuentes

- [Schulte E.M., Gearhardt A.N. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017;25(4):302–308](https://pubmed.ncbi.nlm.nih.gov/28543787/)
- [Gearhardt A.N. et al. Preliminary validation of the Yale Food Addiction Scale. Appetite, 2009;52(2):430–436](https://pubmed.ncbi.nlm.nih.gov/19028533/)

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
