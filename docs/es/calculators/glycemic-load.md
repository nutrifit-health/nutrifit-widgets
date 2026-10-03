# Carga glucémica de una porción

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/glycemic-load.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/glycemic-load.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`glycemic-load` · [NutriFit](https://nutrifit.health/es/calculators/glycemic-load)

CG = IG × carbohidratos disponibles de la porción / 100. Introduzca IG del producto y preparación específicos en escala glucosa = 100, carbohidratos disponibles por 100 g y peso de porción. Los valores iniciales son un ejemplo.

### Uso

1. Introduzca los datos iniciales: CG = IG × carbohidratos disponibles de la porción / 100. Introduzca IG del producto y preparación específicos en escala glucosa = 100, carbohidratos disponibles por 100 g y peso de porción. Los valores iniciales son un ejemplo.
2. Ajuste los parámetros: CG = IG × carbohidratos disponibles de la porción / 100. Introduzca IG del producto y preparación específicos en escala glucosa = 100, carbohidratos disponibles por 100 g y peso de porción. Los valores iniciales son un ejemplo.
3. Lea el resultado: CG no predice glucosa individual ni dosis de insulina. Las categorías de porción no definen una meta diaria universal. No se rellenan automáticamente promedios no verificados de alimentos específicos.

### Método y fórmula

CG = IG × carbohidratos disponibles de la porción / 100. Introduzca IG del producto y preparación específicos en escala glucosa = 100, carbohidratos disponibles por 100 g y peso de porción. Los valores iniciales son un ejemplo.

Hidratos de la ración(g) = hidratos por 100 g × peso de la ración / 100; CG = IG × hidratos de la ración / 100

### Limitaciones

CG no predice glucosa individual ni dosis de insulina. Las categorías de porción no definen una meta diaria universal. No se rellenan automáticamente promedios no verificados de alimentos específicos.

### Fuentes

- [Atkinson FS et al. International tables of glycemic index and glycemic load values 2021: a systematic review. Am J Clin Nutr, 2021](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin LSA et al. Glycemic index, glycemic load and glycemic response: An International Scientific Consensus Summit from the International Carbohydrate Quality Consortium (ICQC). Nutr Metab Cardiovasc Dis, 2015](https://pubmed.ncbi.nlm.nih.gov/26160327/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="glycemic-load" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="glycemic-load" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/glycemic-load?lang=es&theme=auto"
  title="Carga glucémica de una porción" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
