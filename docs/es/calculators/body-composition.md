# Calculadora de composición corporal

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/body-composition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/body-composition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/body-composition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/body-composition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/body-composition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/body-composition.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`body-composition` · [NutriFit](https://nutrifit.health/es/calculators/body-composition)

Estima el porcentaje de grasa por perímetros corporales y calcula la masa grasa, la masa magra y el índice de masa corporal.

### Cómo usar

1. Usa una cinta métrica flexible: Usa una cinta estándar ajustada a la piel sin apretar el tejido blando. Mídete por la mañana en ayunas.
2. Toma las circunferencias requeridas: Los hombres miden cuello y cintura. Las mujeres miden cuello, cintura y cadera. Mantén la cinta paralela al suelo.
3. Revisa tu composición corporal: Obtén tu porcentaje de grasa estimado, masa grasa en kilogramos y masa muscular magra.

### Método y fórmula

El porcentaje de grasa se estima con el método de la U.S. Navy (Hodgdon y Beckett, 1984): usa la estatura y los perímetros de cuello y cintura, y en mujeres también el de cadera. Se eligió porque no requiere equipamiento y su error es comparable al de las básculas de bioimpedancia domésticas. Además se calcula el IMC según la clasificación de la OMS: no dice nada sobre la composición corporal, pero permite compararse con las normas poblacionales.

Hombres: %grasa = 495 / (1,0324 − 0,19077 × log₁₀(cintura − cuello) + 0,15456 × log₁₀(estatura)) − 450; Mujeres: %grasa = 495 / (1,29579 − 0,35004 × log₁₀(cintura + cadera − cuello) + 0,221 × log₁₀(estatura)) − 450; IMC = peso / estatura²

### Limitaciones

El error ronda el ±3–4% frente a DXA y aumenta cuanto más atípica es la constitución. Mide por la mañana en ayunas, con la cinta ajustada sin apretar y siempre en los mismos puntos: una diferencia de 1 cm en la cintura cambia el resultado de forma apreciable. El IMC no distingue músculo de grasa y no se aplica a deportistas, embarazadas ni niños.

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
  title="Calculadora de composición corporal" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
