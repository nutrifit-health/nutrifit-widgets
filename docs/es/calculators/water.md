# Estimación heurística del agua diaria

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/water.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/water.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`water` · [NutriFit](https://nutrifit.health/es/calculators/water)

Modelo elegido: 30 mL/kg + 500 mL por hora de actividad + 500 mL con calor. Se supone 75% de bebidas; vaso = 250 mL. No disminuye por edad.

### Uso

1. Introduzca los datos iniciales: Modelo elegido: 30 mL/kg + 500 mL por hora de actividad + 500 mL con calor. Se supone 75% de bebidas; vaso = 250 mL. No disminuye por edad.
2. Ajuste los parámetros: Modelo elegido: 30 mL/kg + 500 mL por hora de actividad + 500 mL con calor. Se supone 75% de bebidas; vaso = 250 mL. No disminuye por edad.
3. Lea el resultado: Son supuestos, no requisitos EFSA. EFSA: agua total de bebidas y alimentos 2,0 L para mujeres y 2,5 L para hombres, igual para adultos y mayores en condiciones moderadas. Las pérdidas de sudor y límites por enfermedades se evalúan aparte.

### Método y fórmula

Modelo elegido: 30 mL/kg + 500 mL por hora de actividad + 500 mL con calor. Se supone 75% de bebidas; vaso = 250 mL. No disminuye por edad.

Modelo elegido: 30 mL/kg + 500 mL por hora de actividad + 500 mL con calor. Se supone 75% de bebidas; vaso = 250 mL. No disminuye por edad.

### Limitaciones

Son supuestos, no requisitos EFSA. EFSA: agua total de bebidas y alimentos 2,0 L para mujeres y 2,5 L para hombres, igual para adultos y mayores en condiciones moderadas. Las pérdidas de sudor y límites por enfermedades se evalúan aparte.

### Fuentes

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [American College of Sports Medicine et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="water" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="water" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/water?lang=es&theme=auto"
  title="Estimación heurística del agua diaria" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
