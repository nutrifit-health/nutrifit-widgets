# Índice de masa libre de grasa (FFMI)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ffmi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ffmi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ffmi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ffmi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ffmi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ffmi.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`ffmi` · [NutriFit](https://nutrifit.health/es/calculators/ffmi)

Masa libre de grasa = peso × (1 − porcentaje de grasa / 100); FFMI = masa libre de grasa / altura², en metros. Para hombres: FFMI normalizado = FFMI + 6,3 × (1,8 − altura), según el resumen de Kouri (1995).

### Uso

1. Introduzca los datos iniciales: Masa libre de grasa = peso × (1 − porcentaje de grasa / 100); FFMI = masa libre de grasa / altura², en metros. Para hombres: FFMI normalizado = FFMI + 6,3 × (1,8 − altura), según el resumen de Kouri (1995).
2. Ajuste los parámetros: Masa libre de grasa = peso × (1 − porcentaje de grasa / 100); FFMI = masa libre de grasa / altura², en metros. Para hombres: FFMI normalizado = FFMI + 6,3 × (1,8 − altura), según el resumen de Kouri (1995).
3. Lea el resultado: El estudio original incluyó hombres. No se calcula normalización para mujeres. El resultado depende de la precisión del porcentaje de grasa; no diagnostica uso de esteroides, determina un límite genético ni establece una categoría universal de salud.

### Método y fórmula

Masa libre de grasa = peso × (1 − porcentaje de grasa / 100); FFMI = masa libre de grasa / altura², en metros. Para hombres: FFMI normalizado = FFMI + 6,3 × (1,8 − altura), según el resumen de Kouri (1995).

Masa libre de grasa = peso × (1 − porcentaje de grasa / 100); FFMI = masa libre de grasa / altura², en metros. Para hombres: FFMI normalizado = FFMI + 6,3 × (1,8 − altura), según el resumen de Kouri (1995).

### Limitaciones

El estudio original incluyó hombres. No se calcula normalización para mujeres. El resultado depende de la precisión del porcentaje de grasa; no diagnostica uso de esteroides, determina un límite genético ni establece una categoría universal de salud.

### Fuentes

- [Kouri EM et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995](https://pubmed.ncbi.nlm.nih.gov/7496846/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ffmi" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="ffmi" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ffmi?lang=es&theme=auto"
  title="Índice de masa libre de grasa (FFMI)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
