# Escenario de cambio de peso Hall–Chow

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/weight-loss-forecast.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/weight-loss-forecast.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/es/calculators/weight-loss-forecast)

Un modelo simplificado con parámetros medios ilustra el cambio de peso tras reducir de forma constante el consumo energético inicial, sin cambiar la actividad.

### Uso

1. Introduzca los datos iniciales: Use valores reales y las unidades adecuadas.
2. Ajuste los parámetros: Ajuste las suposiciones iniciales a su situación.
3. Lea el resultado: Considere las limitaciones del modelo; el cálculo no es una medición.

### Método y fórmula

W(t)=W0−D/22×(1−exp(−22×t/9100)); t en días, D es la reducción en kcal/día. Parámetros medios: ρ=9100 kcal/kg, ε=22 kcal/(kg·día). Comparación lineal: pérdida D×t/7700.

W(t)=W0−D/22×(1−exp(−22×t/9100)); t en días, D es la reducción en kcal/día. Parámetros medios: ρ=9100 kcal/kg, ε=22 kcal/(kg·día). Comparación lineal: pérdida D×t/7700.

### Limitaciones

Es el modelo linealizado de dos parámetros Hall–Chow (2011), no el modelo individual completo NIH Body Weight Planner. No predice grasa, músculo ni la fecha exacta de una meseta. Escenario para adultos, excluidos embarazo y lactancia. Se supone que el consumo inicial mantiene el peso y la reducción es constante; no modela agua, fármacos, enfermedades ni adherencia. No prescribe un déficit calórico.

### Fuentes

- [Hall K.D., Chow C.C. Estimating changes in free-living energy intake and its confidence interval. Am J Clin Nutr, 2011;94(1):66–74. Linearized energy-balance model](https://pmc.ncbi.nlm.nih.gov/articles/PMC3127505/)
- [Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011](https://pubmed.ncbi.nlm.nih.gov/21872751/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="weight-loss-forecast" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="weight-loss-forecast" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/weight-loss-forecast?lang=es&theme=auto"
  title="Escenario de cambio de peso Hall–Chow" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
