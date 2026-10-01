# Calculadora de BMR y TDEE de Katch-McArdle

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/katch-mcardle.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/katch-mcardle.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`katch-mcardle` · [NutriFit](https://nutrifit.health/es/calculators/katch-mcardle)

Determina el metabolismo basal (BMR) y el gasto energético total (TDEE) a partir de la masa magra libre de grasa en lugar del peso total de la báscula.

### Cómo usar

1. Determine su masa magra: Introduzca su peso actual y el porcentaje de grasa. El calculador aislará la masa metabólicamente activa.
2. Seleccione un nivel de actividad real: Sea objetivo: si trabaja sentado y entrena 3 días a la semana, seleccione 'Ligera' o 'Moderada'.
3. Compare con la fórmula de Mifflin: Analice la discrepancia: si tiene un porcentaje bajo de grasa, las fórmulas clásicas pueden subestimar su gasto en 150–300 kcal/día.

### Método y fórmula

A diferencia de Mifflin-St Jeor o Harris-Benedict, que utilizan el peso total, la ecuación de Katch-McArdle se basa en la masa corporal magra (LBM) metabólicamente activa. Ofrece la máxima precisión en personas atléticas o con porcentajes de grasa no convencionales.

LBM = Peso × (1 − % Grasa / 100); BMR (Katch) = 370 + 21,6 × LBM(kg); TDEE = BMR × Factor de Actividad; BMR (Cunningham) = 500 + 22 × LBM(kg).

### Limitaciones

Requiere conocer previamente el porcentaje de grasa corporal. Una estimación errónea de la grasa afectará directamente al cálculo de calorías.

### Fuentes

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer, 2014](https://pubmed.ncbi.nlm.nih.gov/15570161/)
- [Cunningham J.J. A reanalysis of balanced nutrition and the relationship to body composition and resting metabolic rate. Am J Clin Nutr, 1991;54(6):963–969](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin M.D. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="katch-mcardle" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="katch-mcardle" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/katch-mcardle?lang=es&theme=auto"
  title="Calculadora de BMR y TDEE de Katch-McArdle" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
