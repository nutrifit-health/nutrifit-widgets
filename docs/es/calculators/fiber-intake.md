# Valores de referencia de fibra

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fiber-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fiber-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`fiber-intake` · [NutriFit](https://nutrifit.health/es/calculators/fiber-intake)

Se muestran por separado: EFSA establece 25 g/día para adultos; IOM/NASEM, 14 g/1000 kcal. IA de IOM por edad y sexo: 19–50 años, 38 g para hombres y 25 g para mujeres; mayores de 50, 30 y 21 g. El cálculo energético no sustituye automáticamente las otras referencias.

### Uso

1. Introduzca los datos: Se muestran por separado: EFSA establece 25 g/día para adultos; IOM/NASEM, 14 g/1000 kcal. IA de IOM por edad y sexo: 19–50 años, 38 g para hombres y 25 g para mujeres; mayores de 50, 30 y 21 g. El cálculo energético no sustituye automáticamente las otras referencias.
2. Compare las referencias: Se muestran por separado: EFSA establece 25 g/día para adultos; IOM/NASEM, 14 g/1000 kcal. IA de IOM por edad y sexo: 19–50 años, 38 g para hombres y 25 g para mujeres; mayores de 50, 30 y 21 g. El cálculo energético no sustituye automáticamente las otras referencias.
3. Considere las limitaciones: Para adultos desde los 19 años, fuera del embarazo y la lactancia. No son límites individuales de seguridad ni tratamientos del estreñimiento, SII o colesterol alto. Aumente la ingesta según la tolerancia. No se calcula agua adicional a razón de 40 ml por gramo de fibra.

### Método y fórmula

Se muestran por separado: EFSA establece 25 g/día para adultos; IOM/NASEM, 14 g/1000 kcal. IA de IOM por edad y sexo: 19–50 años, 38 g para hombres y 25 g para mujeres; mayores de 50, 30 y 21 g. El cálculo energético no sustituye automáticamente las otras referencias.

Se muestran por separado: EFSA establece 25 g/día para adultos; IOM/NASEM, 14 g/1000 kcal. IA de IOM por edad y sexo: 19–50 años, 38 g para hombres y 25 g para mujeres; mayores de 50, 30 y 21 g. El cálculo energético no sustituye automáticamente las otras referencias.

### Limitaciones

Para adultos desde los 19 años, fuera del embarazo y la lactancia. No son límites individuales de seguridad ni tratamientos del estreñimiento, SII o colesterol alto. Aumente la ingesta según la tolerancia. No se calcula agua adicional a razón de 40 ml por gramo de fibra.

### Fuentes

- [EFSA. Dietary Reference Values summary, 2017](https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf)
- [IOM/NASEM. Dietary Reference Intakes: Fiber, 2006](https://www.nationalacademies.org/read/11537/chapter/11)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fiber-intake" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="fiber-intake" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fiber-intake?lang=es&theme=auto"
  title="Valores de referencia de fibra" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
