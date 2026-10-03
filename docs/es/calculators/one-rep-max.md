# Estimación del máximo de una repetición (1RM)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/one-rep-max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/one-rep-max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/one-rep-max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/one-rep-max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/one-rep-max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/one-rep-max.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`one-rep-max` · [NutriFit](https://nutrifit.health/es/calculators/one-rep-max)

El resultado principal es la media de Epley y Brzycki elegida por el autor. Se muestran las ecuaciones individuales y porcentajes aritméticos de esa media.

### Uso

1. Introduzca los datos iniciales: El resultado principal es la media de Epley y Brzycki elegida por el autor. Se muestran las ecuaciones individuales y porcentajes aritméticos de esa media.
2. Ajuste los parámetros: Epley: w × (1 + r/30); Brzycki: w / (1.0278 − 0.0278 × r); Lombardi: w × r^0.10; Wathan: 100 × w / (48.8 + 53.8 × exp(−0.075 × r)); Mayhew: 100 × w / (52.2 + 41.9 × exp(−0.055 × r)).
w: peso, kg; r: repeticiones. Con r = 1 todas las estimaciones son iguales a w.
3. Lea el resultado: Introduzca la carga y repeticiones realizadas en una serie hasta el fallo. La precisión depende del ejercicio y la técnica y disminuye con muchas repeticiones. Un porcentaje no garantiza un número concreto de repeticiones.

### Método y fórmula

El resultado principal es la media de Epley y Brzycki elegida por el autor. Se muestran las ecuaciones individuales y porcentajes aritméticos de esa media.

Epley: w × (1 + r/30); Brzycki: w / (1.0278 − 0.0278 × r); Lombardi: w × r^0.10; Wathan: 100 × w / (48.8 + 53.8 × exp(−0.075 × r)); Mayhew: 100 × w / (52.2 + 41.9 × exp(−0.055 × r)).
w: peso, kg; r: repeticiones. Con r = 1 todas las estimaciones son iguales a w.

### Limitaciones

Introduzca la carga y repeticiones realizadas en una serie hasta el fallo. La precisión depende del ejercicio y la técnica y disminuye con muchas repeticiones. Un porcentaje no garantiza un número concreto de repeticiones.

### Fuentes

- [LeSuer D.A. et al. The Accuracy of Prediction Equations for Estimating 1-RM Performance in the Bench Press, Squat, and Deadlift. J Strength Cond Res, 1997;11(4):211–213](https://paulogentil.com/pdf/The%20Accuracy%20of%20Prediction%20Equations%20for%20Estimating%201-RM%20Performance%20in%20the%20Bench%20Press%2C%20Squat%2C%20and%20Deadlift.pdf)
- [Brzycki M. Strength Testing—Predicting a One-Rep Max from Reps-to-Fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds JM et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006](https://pubmed.ncbi.nlm.nih.gov/16937972/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="one-rep-max" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="one-rep-max" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/one-rep-max?lang=es&theme=auto"
  title="Estimación del máximo de una repetición (1RM)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
