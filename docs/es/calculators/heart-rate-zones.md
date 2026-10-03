# Zonas según reserva de frecuencia cardiaca

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/heart-rate-zones.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/heart-rate-zones.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`heart-rate-zones` · [NutriFit](https://nutrifit.health/es/calculators/heart-rate-zones)

FC objetivo = FC en reposo + fracción × (FC máxima − FC en reposo). Se eligen cinco bandas: 50–60, 60–70, 70–80, 80–90 y 90–100% de reserva.

### Uso

1. Introduzca los datos iniciales: FC objetivo = FC en reposo + fracción × (FC máxima − FC en reposo). Se eligen cinco bandas: 50–60, 60–70, 70–80, 80–90 y 90–100% de reserva.
2. Ajuste los parámetros: FCmáx (Tanaka) = 208 − 0,7 × Edad; FCR = FCmáx − FCreposo; FC objetivo = FCreposo + (% intensidad × FCR). Fórmula de Haskell: FCmáx = 220 − Edad.
3. Lea el resultado: Es un esquema elegido, no umbrales aeróbico y anaeróbico medidos individualmente. La FC máxima por edad es una estimación, no un límite fisiológico; la reserva debe ser positiva.

### Método y fórmula

FC objetivo = FC en reposo + fracción × (FC máxima − FC en reposo). Se eligen cinco bandas: 50–60, 60–70, 70–80, 80–90 y 90–100% de reserva.

FCmáx (Tanaka) = 208 − 0,7 × Edad; FCR = FCmáx − FCreposo; FC objetivo = FCreposo + (% intensidad × FCR). Fórmula de Haskell: FCmáx = 220 − Edad.

### Limitaciones

Es un esquema elegido, no umbrales aeróbico y anaeróbico medidos individualmente. La FC máxima por edad es una estimación, no un límite fisiológico; la reserva debe ser positiva.

### Fuentes

- [Tanaka H et al. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [KARVONEN MJ et al. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957](https://pubmed.ncbi.nlm.nih.gov/13470504/)
- [American College of Sports Medicine. ACSM’s Guidelines for Exercise Testing and Prescription. 11th ed. Wolters Kluwer, 2021](https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="heart-rate-zones" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="heart-rate-zones" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/heart-rate-zones?lang=es&theme=auto"
  title="Zonas según reserva de frecuencia cardiaca" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
