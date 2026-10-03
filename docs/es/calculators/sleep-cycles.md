# Planificador del horario de sueño

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sleep-cycles.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sleep-cycles.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sleep-cycles.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sleep-cycles.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sleep-cycles.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sleep-cycles.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`sleep-cycles` · [NutriFit](https://nutrifit.health/es/calculators/sleep-cycles)

Opciones para acostarse o despertarse tras 7, 8 o 9 horas de sueño, contando el tiempo para dormirse.

### Uso

1. Introduzca los datos iniciales: Use valores reales y las unidades adecuadas.
2. Ajuste los parámetros: Ajuste las suposiciones iniciales a su situación.
3. Lea el resultado: Considere las limitaciones del modelo; el cálculo no es una medición.

### Método y fórmula

Hora de despertar = hora de acostarse + tiempo para dormirse + duración del sueño; la hora de acostarse se obtiene restando esos intervalos.

Hora de despertar = hora de acostarse + tiempo para dormirse + duración del sueño; la hora de acostarse se obtiene restando esos intervalos.

### Limitaciones

Para la mayoría de los adultos se recomiendan 7–9 horas. Son opciones de horario, no una prescripción individual ni una predicción de la fase del sueño. Los ciclos y las fases varían durante la noche. Las horas del reloj no garantizan despertar en REM ni despertarse con facilidad.

### Fuentes

- [NHLBI. How Sleep Works: Sleep Phases and Stages](https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep)
- [NHLBI. How Sleep Works: How Much Sleep Is Enough?](https://www.nhlbi.nih.gov/health/sleep/how-much-sleep)
- [Hirshkowitz M et al. National Sleep Foundation's sleep time duration recommendations: methodology and results summary. Sleep Health, 2015](https://pubmed.ncbi.nlm.nih.gov/29073412/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sleep-cycles" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="sleep-cycles" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sleep-cycles?lang=es&theme=auto"
  title="Planificador del horario de sueño" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
