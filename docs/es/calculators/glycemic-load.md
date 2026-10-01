# Calculadora de carga glucémica

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/glycemic-load.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/glycemic-load.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`glycemic-load` · [NutriFit](https://nutrifit.health/es/calculators/glycemic-load)

Calcula la carga glucémica de una ración a partir del índice glucémico y de los hidratos de carbono: refleja la respuesta real de la glucosa mejor que el índice por sí solo.

### Cómo usar

1. Elige un alimento o ingresa el IG: Selecciona de las tablas internacionales oficiales (Atkinson 2021) o escribe el índice glucémico.
2. Indica carbohidratos y porción: Introduce los carbohidratos por 100 g y el peso real de tu porción en gramos.
3. Valora el impacto metabólico: Conoce el impacto real sobre el azúcar en sangre: Bajo (≤10), Medio (11–19) o Alto (≥20).

### Método y fórmula

El índice glucémico indica con qué rapidez sube la glucosa tras una porción que contiene 50 g de hidratos, pero no dice nada del tamaño real de la ración. La carga glucémica tiene en cuenta ambas cosas: el índice se multiplica por los hidratos de la ración concreta y se divide entre 100. Por eso la sandía tiene un índice alto y una carga baja: la ración aporta pocos hidratos.

Hidratos de la ración(g) = hidratos por 100 g × peso de la ración / 100; CG = IG × hidratos de la ración / 100

### Limitaciones

Los valores de las tablas son promedios: la variedad, la maduración, la molienda, la cocción y la combinación con proteína, grasa y fibra modifican la respuesta glucémica. La reacción individual varía mucho y, en diabetes, el cálculo no sustituye a la medición de glucosa ni a los datos de monitorización.

### Fuentes

- [Atkinson F.S., Brand-Miller J.C. et al. International tables of glycemic index and glycemic load values 2021. Am J Clin Nutr, 2021;114(5):1625–1632](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin L.S.A. et al. Glycemic index, glycemic load and glycemic response: International Scientific Consensus Summit. Nutr Metab Cardiovasc Dis, 2015;25(9):795–815](https://pubmed.ncbi.nlm.nih.gov/26160327/)

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
  title="Calculadora de carga glucémica" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
