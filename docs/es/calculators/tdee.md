# Estimación del gasto energético diario TDEE

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tdee.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tdee.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`tdee` · [NutriFit](https://nutrifit.health/es/calculators/tdee)

Mifflin–St Jeor estima el gasto en reposo. TDEE = estimación × factor de actividad elegido. −20% y +15% son escenarios de déficit y superávit elegidos por el autor.

### Uso

1. Introduzca los datos iniciales: Mifflin–St Jeor estima el gasto en reposo. TDEE = estimación × factor de actividad elegido. −20% y +15% son escenarios de déficit y superávit elegidos por el autor.
2. Ajuste los parámetros: Mifflin–St Jeor estima el gasto en reposo. TDEE = estimación × factor de actividad elegido. −20% y +15% son escenarios de déficit y superávit elegidos por el autor.
3. Lea el resultado: Para adultos. Los factores son aproximaciones, no PAL medido. La ecuación no determina necesidades individuales ni un déficit seguro; el error no demuestra un trastorno metabólico.

### Método y fórmula

Mifflin–St Jeor estima el gasto en reposo. TDEE = estimación × factor de actividad elegido. −20% y +15% son escenarios de déficit y superávit elegidos por el autor.

TMB (hombres) = 10 × peso(kg) + 6,25 × estatura(cm) − 5 × edad + 5; TMB (mujeres) = 10 × peso(kg) + 6,25 × estatura(cm) − 5 × edad − 161; TDEE = TMB × factor de actividad

### Limitaciones

Para adultos. Los factores son aproximaciones, no PAL medido. La ecuación no determina necesidades individuales ni un déficit seguro; el error no demuestra un trastorno metabólico.

### Fuentes

- [Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tdee" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="tdee" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=es&theme=auto"
  title="Estimación del gasto energético diario TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
