# Etanol y estimación ilustrativa de Widmark

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/alcohol.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/alcohol.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/alcohol.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/alcohol.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/alcohol.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/alcohol.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`alcohol` · [NutriFit](https://nutrifit.health/es/calculators/alcohol)

Calcula la cantidad de etanol, sus calorías y una concentración aproximada mediante un modelo simplificado.

### Uso

1. Introduzca los datos iniciales: Use valores reales y las unidades adecuadas.
2. Ajuste los parámetros: Ajuste las suposiciones iniciales a su situación.
3. Lea el resultado: Considere las limitaciones del modelo; el cálculo no es una medición.

### Método y fórmula

Etanol, g = volumen, mL × graduación / 100 × 0,789. C0 = etanol / (peso × r); C(t) = max(0, C0 − 0,15 × t). r = 0,68 para hombres y 0,55 para mujeres.

Etanol, g = volumen, mL × graduación / 100 × 0,789. C0 = etanol / (peso × r); C(t) = max(0, C0 − 0,15 × t). r = 0,68 para hombres y 0,55 para mujeres.

### Limitaciones

Los coeficientes medios no describen a una persona concreta. El modelo trata la cantidad indicada como una sola dosis y no considera absorción, comida ni duración del consumo. El resultado no determina la sobriedad, cuándo es seguro conducir ni el cumplimiento de la ley. Un cero calculado tampoco confirma la ausencia de alcohol.

### Fuentes

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones AW. et al. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework. Forensic Sci Int, 2010](https://pubmed.ncbi.nlm.nih.gov/20304569/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="alcohol" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="alcohol" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/alcohol?lang=es&theme=auto"
  title="Etanol y estimación ilustrativa de Widmark" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
