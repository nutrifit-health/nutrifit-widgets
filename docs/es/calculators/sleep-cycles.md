# Calculadora de ciclos de sueño

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sleep-cycles.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sleep-cycles.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sleep-cycles.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sleep-cycles.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sleep-cycles.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sleep-cycles.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`sleep-cycles` · [NutriFit](https://nutrifit.health/es/calculators/sleep-cycles)

Herramienta de cálculo del sueño basada en ciclos ultradianos de 90 minutos (fases de sueño lento y REM) y el tiempo medio de conciliación.

### Cómo usar

1. Elige el sentido del cálculo: Decide qué necesitas: saber a qué hora acostarte para despertar a una hora fija, o a qué hora poner la alarma si te acuestas ahora mismo.
2. Ajusta tu latencia de conciliación: El valor predeterminado es de 14 minutos. Si sueles tardar más en conciliar el sueño o te duermes al instante, ajusta este valor.
3. Elige una cadena de 5 o 6 ciclos: 5 ciclos (7 h 30 min) son ideales para los días laborables; 6 ciclos (9 h) son mejores para entrenamientos intensos o para recuperarte de la falta de sueño.

### Método y fórmula

El cálculo se basa en un modelo de ciclos ultradianos de 90 minutos que combinan las fases NREM (sueño no REM) y REM (movimiento ocular rápido). Despertar en el límite de un ciclo evita la inercia del sueño.

Hora de despertar = Hora de acostarse + Conciliación (14 min) + N × 90 min. Hora de acostarse = Hora de despertar − (N × 90 min) − Conciliación (14 min).

### Limitaciones

La calculadora utiliza una duración media de ciclo de 90 minutos. El ciclo individual puede variar entre 70 y 120 minutos. Los trastornos crónicos del sueño requieren polisomnografía para un diagnóstico adecuado.

### Fuentes

- [Carskadon M.A., Dement W.C. Normal Human Sleep: An Overview. Principles and Practice of Sleep Medicine, 2011;5:16–26](https://doi.org/10.1016/B978-1-4160-6645-3.00002-5)
- [Hirshkowitz M. et al. National Sleep Foundation’s sleep time duration recommendations: methodology and results summary. Sleep Health, 2015;1(1):40–43](https://pubmed.ncbi.nlm.nih.gov/29073412/)
- [Dijk D.J., Czeisler C.A. Contribution of the circadian pacemaker and the homeostatic process to the timing of human sleep. Sleep, 1995;18(5):285–304](https://pubmed.ncbi.nlm.nih.gov/7676163/)

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
  title="Calculadora de ciclos de sueño" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
