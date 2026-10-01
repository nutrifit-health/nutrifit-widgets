# Calculadora de balance sodio-potasio (Na:K y sal)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sodium-potassium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sodium-potassium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`sodium-potassium` · [NutriFit](https://nutrifit.health/es/calculators/sodium-potassium)

Evalúa el equilibrio electrolítico entre sodio y potasio en la dieta, calcula el equivalente en sal común y estima el riesgo cardiovascular.

### Cómo usar

1. Elimina la sal oculta de procesados: Hasta el 75% del sodio dietético procede de embutidos, quesos curados, aperitivos industriales, conservas y panadería comercial.
2. Aumenta el potasio con frutas y verduras: El potasio estimula la eliminación renal de sodio (natriuresis). Incluye patatas asadas, espinacas, orejones, alubias y plátanos.
3. Usa sal mineralizada con potasio: La sal baja en sodio (donde el 30% de NaCl se reemplaza por KCl) reduce la tensión entre 3 y 5 mm Hg sin mermar el punto salino.

### Método y fórmula

Basada en las guías de la OMS sobre sodio y potasio (2012) y principios de la dieta DASH. La relación molar Na:K debe ser inferior a 1,0 (óptimo 0,5–0,7). En dietas modernas el sodio suele duplicar o triplicar al potasio.

Na_mmol = Na (mg) / 23; K_mmol = K (mg) / 39,1; Ratio Na:K = Na_mmol / K_mmol; Sal NaCl (g) = Na (mg) × 2,54 / 1000.

### Limitaciones

No apta para pacientes con insuficiencia renal avanzada (ERC estadios 4–5), donde la excreción de potasio está alterada y se exige restricción estricta.

### Fuentes

- [World Health Organization. Guideline: Sodium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504836)
- [World Health Organization. Guideline: Potassium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504829)
- [O’Donnell M. et al. Urinary sodium and potassium excretion and risk of cardiovascular events. JAMA, 2011;306(20):2229–2238](https://pubmed.ncbi.nlm.nih.gov/22110105/)

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
  title="Calculadora de balance sodio-potasio (Na:K y sal)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
