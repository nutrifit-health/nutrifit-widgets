# Estimaciones energéticas según masa libre de grasa

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/katch-mcardle.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/katch-mcardle.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`katch-mcardle` · [NutriFit](https://nutrifit.health/es/calculators/katch-mcardle)

Masa libre de grasa = peso × (1 − grasa / 100). Katch–McArdle: 370 + 21,6 × masa libre de grasa; Cunningham: 500 + 22 × masa libre de grasa. La estimación diaria de Katch se multiplica por el factor de actividad elegido.

### Uso

1. Introduzca los datos iniciales: Masa libre de grasa = peso × (1 − grasa / 100). Katch–McArdle: 370 + 21,6 × masa libre de grasa; Cunningham: 500 + 22 × masa libre de grasa. La estimación diaria de Katch se multiplica por el factor de actividad elegido.
2. Ajuste los parámetros: LBM = Peso × (1 − % Grasa / 100); BMR (Katch) = 370 + 21,6 × LBM(kg); TDEE = BMR × Factor de Actividad; BMR (Cunningham) = 500 + 22 × LBM(kg).
3. Lea el resultado: Son estimaciones, no mediciones por calorimetría. Influyen los errores del porcentaje de grasa y del factor aproximado de actividad. La diferencia entre ecuaciones no determina cuál es más precisa para usted.

### Método y fórmula

Masa libre de grasa = peso × (1 − grasa / 100). Katch–McArdle: 370 + 21,6 × masa libre de grasa; Cunningham: 500 + 22 × masa libre de grasa. La estimación diaria de Katch se multiplica por el factor de actividad elegido.

LBM = Peso × (1 − % Grasa / 100); BMR (Katch) = 370 + 21,6 × LBM(kg); TDEE = BMR × Factor de Actividad; BMR (Cunningham) = 500 + 22 × LBM(kg).

### Limitaciones

Son estimaciones, no mediciones por calorimetría. Influyen los errores del porcentaje de grasa y del factor aproximado de actividad. La diferencia entre ecuaciones no determina cuál es más precisa para usted.

### Fuentes

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer](https://medicine.lww.com/Book/isbn/9781451191554)
- [Cunningham JJ. et al. Body composition as a determinant of energy expenditure: a synthetic review and a proposed general prediction equation. Am J Clin Nutr, 1991](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990](https://pubmed.ncbi.nlm.nih.gov/2305711/)

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
  title="Estimaciones energéticas según masa libre de grasa" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
