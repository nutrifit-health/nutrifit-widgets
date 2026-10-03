# Composición corporal por perímetros e IMC

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/body-composition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/body-composition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/body-composition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/body-composition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/body-composition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/body-composition.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`body-composition` · [NutriFit](https://nutrifit.health/es/calculators/body-composition)

Modelo histórico Hodgdon–Beckett (1984) con altura y perímetros. Hombres: abdomen a nivel del ombligo y cuello; mujeres: cintura natural más estrecha, cadera más ancha y cuello. IMC = peso / altura².

### Uso

1. Introduzca los datos iniciales: Modelo histórico Hodgdon–Beckett (1984) con altura y perímetros. Hombres: abdomen a nivel del ombligo y cuello; mujeres: cintura natural más estrecha, cadera más ancha y cuello. IMC = peso / altura².
2. Ajuste los parámetros: Modelo histórico Hodgdon–Beckett (1984) con altura y perímetros. Hombres: abdomen a nivel del ombligo y cuello; mujeres: cintura natural más estrecha, cadera más ancha y cuello. IMC = peso / altura².
3. Lea el resultado: La estimación no sustituye la medición corporal ni es la norma oficial actual de Navy. Las categorías ACE son referencias descriptivas, no diagnósticos; IMC es una clasificación adulta aparte. No se calcula con perímetros no aplicables.

### Método y fórmula

Modelo histórico Hodgdon–Beckett (1984) con altura y perímetros. Hombres: abdomen a nivel del ombligo y cuello; mujeres: cintura natural más estrecha, cadera más ancha y cuello. IMC = peso / altura².

Hombres: %grasa = 495 / (1,0324 − 0,19077 × log₁₀(cintura − cuello) + 0,15456 × log₁₀(estatura)) − 450; Mujeres: %grasa = 495 / (1,29579 − 0,35004 × log₁₀(cintura + cadera − cuello) + 0,221 × log₁₀(estatura)) − 450; IMC = peso / estatura²

### Limitaciones

La estimación no sustituye la medición corporal ni es la norma oficial actual de Navy. Las categorías ACE son referencias descriptivas, no diagnósticos; IMC es una clasificación adulta aparte. No se calcula con perímetros no aplicables.

### Fuentes

- [Hodgdon J.A., Beckett M.B. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center, 1984](https://apps.dtic.mil/sti/citations/ADA143890)
- [WHO. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894, 2000](https://www.who.int/publications/i/item/WHO_TRS_894)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="body-composition" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="body-composition" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/body-composition?lang=es&theme=auto"
  title="Composición corporal por perímetros e IMC" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
