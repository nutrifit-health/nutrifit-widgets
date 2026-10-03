# Coeficientes de powerlifting DOTS, Wilks e IPF GL

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/powerlifting-coefficients.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/powerlifting-coefficients.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/es/calculators/powerlifting-coefficients)

Introduzca el peso del pesaje y la suma de mejores intentos válidos de sentadilla, press de banca y peso muerto en kilogramos. DOTS, Wilks clásico e IPF GL 2020 para powerlifting clásico.

### Uso

1. Introduzca los datos iniciales: Introduzca el peso del pesaje y la suma de mejores intentos válidos de sentadilla, press de banca y peso muerto en kilogramos. DOTS, Wilks clásico e IPF GL 2020 para powerlifting clásico. DOTS limita el peso del coeficiente a 40–210 kg en hombres y 40–150 kg en mujeres; fuera del intervalo se usa el extremo.
2. Ajuste los parámetros: DOTS: Coeficiente = 500 / (A×Peso^4 + B×Peso^3 + C×Peso^2 + D×Peso + E); Puntos DOTS = Total (kg) × Coeficiente; IPF GL: 100 × Total / (A − B × e^(−C × Peso)); Wilks: polinomio de 5.º grado.
3. Lea el resultado: Son puntuaciones comparativas distintas, no una categoría deportiva universal. Este IPF GL no sirve para banca sola o powerlifting equipado. Compare la misma disciplina; no incluye ajustes de edad.

### Método y fórmula

Introduzca el peso del pesaje y la suma de mejores intentos válidos de sentadilla, press de banca y peso muerto en kilogramos. DOTS, Wilks clásico e IPF GL 2020 para powerlifting clásico. DOTS limita el peso del coeficiente a 40–210 kg en hombres y 40–150 kg en mujeres; fuera del intervalo se usa el extremo.

DOTS: Coeficiente = 500 / (A×Peso^4 + B×Peso^3 + C×Peso^2 + D×Peso + E); Puntos DOTS = Total (kg) × Coeficiente; IPF GL: 100 × Total / (A − B × e^(−C × Peso)); Wilks: polinomio de 5.º grado.

### Limitaciones

Son puntuaciones comparativas distintas, no una categoría deportiva universal. Este IPF GL no sirve para banca sola o powerlifting equipado. Compare la misma disciplina; no incluye ajustes de edad.

### Fuentes

- [OpenPowerlifting. Reference DOTS implementation and attribution to Tim Konertz.](https://gitlab.com/openpowerlifting/opl-data/blob/main/crates/coefficients/src/dots.rs)
- [Wilks R. The Wilks Formula for Powerlifting. Australian Powerlifting Federation, 1997](https://www.powerlifting.sport/)
- [International Powerlifting Federation. IPF GL Points Formula for Classic and Equipped Powerlifting, 2020](https://www.powerlifting.sport/rules/codes/info/ipf-formula)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="powerlifting-coefficients" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="powerlifting-coefficients" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/powerlifting-coefficients?lang=es&theme=auto"
  title="Coeficientes de powerlifting DOTS, Wilks e IPF GL" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
