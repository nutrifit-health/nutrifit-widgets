# Sodio y potasio en la dieta diaria

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sodium-potassium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sodium-potassium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`sodium-potassium` · [NutriFit](https://nutrifit.health/es/calculators/sodium-potassium)

Para adultos, la OMS recomienda menos de 2000 mg de sodio y al menos 3510 mg de potasio al día. Relación molar: (Na, mg / 23) / (K, mg / 39,1). Equivalente aproximado de sal: sodio, mg × 2,5 / 1000. La relación se muestra sin categoría de riesgo individual.

### Uso

1. Introduzca los datos: Para adultos, la OMS recomienda menos de 2000 mg de sodio y al menos 3510 mg de potasio al día. Relación molar: (Na, mg / 23) / (K, mg / 39,1). Equivalente aproximado de sal: sodio, mg × 2,5 / 1000. La relación se muestra sin categoría de riesgo individual.
2. Compare las referencias: Para adultos, la OMS recomienda menos de 2000 mg de sodio y al menos 3510 mg de potasio al día. Relación molar: (Na, mg / 23) / (K, mg / 39,1). Equivalente aproximado de sal: sodio, mg × 2,5 / 1000. La relación se muestra sin categoría de riesgo individual.
3. Considere las limitaciones: Introduzca la ingesta alimentaria de un día, no concentraciones en sangre u orina. La referencia general de potasio no se aplica automáticamente si su excreción está alterada, en enfermedad renal o con medicamentos que afectan al potasio. La hipertensión por sí sola no define aquí un objetivo individual nuevo.

### Método y fórmula

Para adultos, la OMS recomienda menos de 2000 mg de sodio y al menos 3510 mg de potasio al día. Relación molar: (Na, mg / 23) / (K, mg / 39,1). Equivalente aproximado de sal: sodio, mg × 2,5 / 1000. La relación se muestra sin categoría de riesgo individual.

Para adultos, la OMS recomienda menos de 2000 mg de sodio y al menos 3510 mg de potasio al día. Relación molar: (Na, mg / 23) / (K, mg / 39,1). Equivalente aproximado de sal: sodio, mg × 2,5 / 1000. La relación se muestra sin categoría de riesgo individual.

### Limitaciones

Introduzca la ingesta alimentaria de un día, no concentraciones en sangre u orina. La referencia general de potasio no se aplica automáticamente si su excreción está alterada, en enfermedad renal o con medicamentos que afectan al potasio. La hipertensión por sí sola no define aquí un objetivo individual nuevo.

### Fuentes

- [WHO. Healthy diet: sodium and potassium](https://www.who.int/news-room/fact-sheets/detail/healthy-diet)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sodium-potassium" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="sodium-potassium" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sodium-potassium?lang=es&theme=auto"
  title="Sodio y potasio en la dieta diaria" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
