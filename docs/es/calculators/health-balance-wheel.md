# Rueda de autoevaluación del autor

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/health-balance-wheel.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/health-balance-wheel.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`health-balance-wheel` · [NutriFit](https://nutrifit.health/es/calculators/health-balance-wheel)

Valore satisfacción con ocho áreas durante los últimos 14 días de 1 a 10. Total = media × 10; uniformidad = max(0, 100 − 18 × desviación estándar), redondeada.

### Uso

1. Introduzca los datos iniciales: Valore satisfacción con ocho áreas durante los últimos 14 días de 1 a 10. Total = media × 10; uniformidad = max(0, 100 − 18 × desviación estándar), redondeada.
2. Ajuste los parámetros: Valore satisfacción con ocho áreas durante los últimos 14 días de 1 a 10. Total = media × 10; uniformidad = max(0, 100 − 18 × desviación estándar), redondeada.
3. Lea el resultado: Es una visualización del autor, no un test clínico validado ni una ley de salud. Valores bajos iguales dan uniformidad alta sin implicar buena salud. Valores iniciales y perfiles son ejemplos; confirme las ocho valoraciones.

### Método y fórmula

Valore satisfacción con ocho áreas durante los últimos 14 días de 1 a 10. Total = media × 10; uniformidad = max(0, 100 − 18 × desviación estándar), redondeada.

Valore satisfacción con ocho áreas durante los últimos 14 días de 1 a 10. Total = media × 10; uniformidad = max(0, 100 − 18 × desviación estándar), redondeada.

### Limitaciones

Es una visualización del autor, no un test clínico validado ni una ley de salud. Valores bajos iguales dan uniformidad alta sin implicar buena salud. Valores iniciales y perfiles son ejemplos; confirme las ocho valoraciones.

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="health-balance-wheel" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="health-balance-wheel" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/health-balance-wheel?lang=es&theme=auto"
  title="Rueda de autoevaluación del autor" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
