# Cribado del riesgo de déficit de nutrientes

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/deficiency-risk.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/deficiency-risk.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`deficiency-risk` · [NutriFit](https://nutrifit.health/es/calculators/deficiency-risk)

Marca los factores de estilo de vida y alimentación que te afectan y descubre qué déficits son probables y con qué analíticas se comprueban.

### Cómo usar

1. Indica tus hábitos dietéticos: Señala exclusiones como ausencia de carne, pescado o lácteos en tu alimentación.
2. Considera tu estilo de vida: Ten en cuenta la falta de sol, entrenamientos intensos y fármacos como antiácidos o metformina.
3. Revisa los análisis recomendados: Recibe tu puntuación de riesgo y los marcadores sanguíneos de referencia para cada nutriente.

### Método y fórmula

No es un diagnóstico, sino una lista de comprobación de factores de riesgo. Cada factor se asocia a los nutrientes para los que está reconocido como factor de riesgo en las fichas del NIH Office of Dietary Supplements y en los documentos de la EFSA sobre valores de referencia. El peso refleja la fuerza del vínculo: 3 puntos cuando el déficit es esperable sin compensación, 2 para un factor significativo y 1 para una contribución adicional. Los puntos se suman por nutriente: desde 2 puntos el riesgo es moderado y desde 4, alto.

Puntuación del nutriente = suma de los pesos de los factores marcados; 0–1 punto es riesgo bajo, 2–3 moderado y 4 o más alto

### Limitaciones

El cribado se basa solo en los factores marcados y no considera la ingesta real, el uso de suplementos, la genética ni las enfermedades asociadas. No confirma ni descarta un déficit: el estado de un nutriente se determina en el laboratorio y lo interpreta un médico o un profesional de la nutrición.

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
  title="Cribado del riesgo de déficit de nutrientes" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
