# Ecuaciones históricas de peso de referencia

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ideal-body-weight.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ideal-body-weight.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/es/calculators/ideal-body-weight)

Devine, Robinson, Miller y Hamwi aproximada para altura ≥ 152,4 cm. La media de cuatro ecuaciones es una elección del autor; AdjBW = Devine + 0,4 × (peso actual − Devine), solo si supera Devine.

### Uso

1. Introduzca los datos iniciales: Devine, Robinson, Miller y Hamwi aproximada para altura ≥ 152,4 cm. La media de cuatro ecuaciones es una elección del autor; AdjBW = Devine + 0,4 × (peso actual − Devine), solo si supera Devine.
2. Ajuste los parámetros: Devine (M): 50 + 2.3 × x; Devine (F): 45.5 + 2.3 × x; Robinson (M): 52 + 1.9 × x; Robinson (F): 49 + 1.7 × x; x = height(cm)/2.54 − 60; AdjBW = Devine + 0.4 × (weight − Devine).
Devine, Robinson, Miller y Hamwi aproximada para altura ≥ 152,4 cm. La media de cuatro ecuaciones es una elección del autor; AdjBW = Devine + 0,4 × (peso actual − Devine), solo si supera Devine.
3. Lea el resultado: No determinan un único peso sano o deseable. El factor AdjBW no es universal para nutrición o dosificación. El peso según IMC 18,5–24,9 es otra referencia aritmética para adultos, no un objetivo individual.

### Método y fórmula

Devine, Robinson, Miller y Hamwi aproximada para altura ≥ 152,4 cm. La media de cuatro ecuaciones es una elección del autor; AdjBW = Devine + 0,4 × (peso actual − Devine), solo si supera Devine.

Devine (M): 50 + 2.3 × x; Devine (F): 45.5 + 2.3 × x; Robinson (M): 52 + 1.9 × x; Robinson (F): 49 + 1.7 × x; x = height(cm)/2.54 − 60; AdjBW = Devine + 0.4 × (weight − Devine).
Devine, Robinson, Miller y Hamwi aproximada para altura ≥ 152,4 cm. La media de cuatro ecuaciones es una elección del autor; AdjBW = Devine + 0,4 × (peso actual − Devine), solo si supera Devine.

### Limitaciones

No determinan un único peso sano o deseable. El factor AdjBW no es universal para nutrición o dosificación. El peso según IMC 18,5–24,9 es otra referencia aritmética para adultos, no un objetivo individual.

### Fuentes

- [Robinson JD et al. Determination of ideal body weight for drug dosage calculations. Am J Hosp Pharm, 1983](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Peterson C.M. et al. Universal equation for estimating ideal body weight and body weight at any BMI. Am J Clin Nutr, 2016;103(5):1197–1203. Historical IBW equations and their limits](https://pmc.ncbi.nlm.nih.gov/articles/PMC4841935/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ideal-body-weight" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="ideal-body-weight" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ideal-body-weight?lang=es&theme=auto"
  title="Ecuaciones históricas de peso de referencia" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
