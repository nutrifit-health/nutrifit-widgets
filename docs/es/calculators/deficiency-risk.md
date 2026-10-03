# Lista de alimentación y estilo de vida

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/deficiency-risk.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/deficiency-risk.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`deficiency-risk` · [NutriFit](https://nutrifit.health/es/calculators/deficiency-risk)

Lista informativa propia: marque sus circunstancias actuales de alimentación y estilo de vida para ver temas relacionados con nutrientes.

### Uso

1. Introduzca los datos iniciales: Las relaciones entre factores y nutrientes son temas informativos para comentar. NIH ODS y EFSA ofrecen información sobre nutrición y grupos de riesgo, pero no definen puntuaciones ni probabilidades de déficit para esta lista.
2. Ajuste los parámetros: Lista informativa propia: marque sus circunstancias actuales de alimentación y estilo de vida para ver temas relacionados con nutrientes.
3. Lea el resultado: La lista no considera la ingesta real ni la absorción, alimentos enriquecidos, suplementos o enfermedades. No confirma ni descarta un déficit; las pruebas y la corrección requieren una evaluación individual.

### Método y fórmula

Las relaciones entre factores y nutrientes son temas informativos para comentar. NIH ODS y EFSA ofrecen información sobre nutrición y grupos de riesgo, pero no definen puntuaciones ni probabilidades de déficit para esta lista.

No se calculan puntuaciones ni categorías de riesgo. Solo se muestran los factores marcados y los nutrientes relacionados.

### Limitaciones

La lista no considera la ingesta real ni la absorción, alimentos enriquecidos, suplementos o enfermedades. No confirma ni descarta un déficit; las pruebas y la corrección requieren una evaluación individual.

### Fuentes

- [NIH Office of Dietary Supplements. Dietary Supplement Fact Sheets (группы риска по нутриентам)](https://ods.od.nih.gov/factsheets/list-all/)
- [EFSA. Dietary Reference Values for the EU (DRV Finder)](https://multimedia.efsa.europa.eu/drvs/index.htm)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="deficiency-risk" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="deficiency-risk" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/deficiency-risk?lang=es&theme=auto"
  title="Lista de alimentación y estilo de vida" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
