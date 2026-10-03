# Calculadora nutricional de platos

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/nutrition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/nutrition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/nutrition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/nutrition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/nutrition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/nutrition.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`nutrition`

Para `nutrition`: busca alimentos o recetas públicas, añade sus pesos en gramos e indica el peso del plato terminado. Calcula para ver totales y valores por 100 g; hay exportación PDF y CSV. Los nutrientes desconocidos se marcan como incompletos y nunca se convierten silenciosamente en cero. Máximo: 50 ingredientes.

## Método y datos

El servidor de NutriFit suma los nutrientes disponibles de los alimentos y recetas públicos seleccionados según el peso de los ingredientes. Devuelve los totales y valores por 100 g según el peso final del plato. El PDF calcula de nuevo en el servidor; CSV exporta el resultado mostrado.

Indica el peso de cada ingrediente en la forma elegida en el catálogo (crudo o cocinado) y el peso del plato terminado para calcular por 100 g. No se modelan las pérdidas de nutrientes al cocinar o escurrir.

## Limitaciones

Hasta 50 ingredientes. Introduce pesos en gramos y un peso final positivo. Los valores desconocidos se marcan como incompletos, no como cero. Los datos pueden cambiar y el PDF puede diferir del resultado anterior. Es una estimación, no un diagnóstico ni una prescripción.

## Fuentes

Catálogo público de alimentos y recetas de NutriFit; el widget muestra la fuente y la hora del cálculo.

- [NutriFit](https://nutrifit.health)
- [NutriFit recipes](https://nutrifit.health/recipes)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { NutritionCalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <NutritionCalculatorFrame locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="nutrition" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/nutrition-calculator?lang=es&theme=auto"
  title="Calculadora nutricional de platos" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:680px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
