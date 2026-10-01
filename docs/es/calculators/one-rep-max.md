# Calculadora de 1RM (repetición máxima)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/one-rep-max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/one-rep-max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/one-rep-max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/one-rep-max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/one-rep-max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/one-rep-max.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`one-rep-max` · [NutriFit](https://nutrifit.health/es/calculators/one-rep-max)

Determina el peso máximo que un atleta puede levantar en una sola repetición, sin riesgo de lesiones mediante pruebas submáximas de 2 a 10 repeticiones.

### Cómo usar

1. Realice un calentamiento completo: Realice movilidad articular general, seguida de 3–4 series de aproximación aumentando progresivamente la carga hasta el peso de trabajo.
2. Haga una serie de trabajo de 3 a 6 repeticiones: Seleccione un peso con el que pueda realizar de 3 a 6 repeticiones técnicamente perfectas con no más de 1 repetición en reserva (RPE 9).
3. Introduzca los datos y aplique los porcentajes: Introduzca el peso y las repeticiones en la calculadora. Con la tabla de porcentajes, determine las cargas para sesiones de fuerza (85%), hipertrofia (75%) o recuperación (60%).

### Método y fórmula

El cálculo de una repetición máxima se basa en ecuaciones de regresión que relacionan las repeticiones hasta el fallo con la fracción del peso máximo. La fórmula de Epley funciona mejor en el rango de 2 a 6 repeticiones, mientras que Brzycki ofrece estimaciones precisas de 6 a 10 repeticiones.

Epley: 1RM = Peso × (1 + 0,0333 × Reps); Brzycki: 1RM = Peso / (1,0278 − 0,0278 × Reps); Lombardi: Peso × Reps^0,10; Wathan: (100 × Peso) / (48,8 + 53,8 × e^(-0,075 × Reps)).

### Limitaciones

No validado para series de más de 10–12 repeticiones debido a la fatiga metabólica localizada. La precisión depende de la técnica y la composición fibrilar.

### Fuentes

- [Epley B. Poundage chart. Boyd Epley Workout, Lincoln, NE, 1985](https://pubmed.ncbi.nlm.nih.gov/2706858/)
- [Brzycki M. Strength testing—predicting a one-rep max from reps-to-fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds J.M. et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006;20(3):584–592](https://pubmed.ncbi.nlm.nih.gov/16937972/)

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
  title="Calculadora de 1RM (repetición máxima)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
