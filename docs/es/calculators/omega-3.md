# Valores de referencia de EPA y DHA

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/omega-3.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/omega-3.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/omega-3.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/omega-3.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/omega-3.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/omega-3.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`omega-3` · [NutriFit](https://nutrifit.health/es/calculators/omega-3)

La IA de EFSA para adultos es 250 mg de EPA+DHA al día, sumando alimentos y suplementos. En embarazo y lactancia se indican además 100–200 mg de DHA al día. No es una proporción fija EPA:DHA ni el peso total del aceite de pescado.

### Uso

1. Introduzca los datos: La IA de EFSA para adultos es 250 mg de EPA+DHA al día, sumando alimentos y suplementos. En embarazo y lactancia se indican además 100–200 mg de DHA al día. No es una proporción fija EPA:DHA ni el peso total del aceite de pescado.
2. Compare las referencias: La IA de EFSA para adultos es 250 mg de EPA+DHA al día, sumando alimentos y suplementos. En embarazo y lactancia se indican además 100–200 mg de DHA al día. No es una proporción fija EPA:DHA ni el peso total del aceite de pescado.
3. Considere las limitaciones: Esta referencia no implica que sea necesario un suplemento ni sustituye la evaluación de la dieta. El formulario no prescribe tratamientos de hipertrigliceridemia o depresión ni diagnostica carencia mediante el índice omega-3. Consulte los fármacos, las interacciones y las dosis individuales con un profesional.

### Método y fórmula

La IA de EFSA para adultos es 250 mg de EPA+DHA al día, sumando alimentos y suplementos. En embarazo y lactancia se indican además 100–200 mg de DHA al día. No es una proporción fija EPA:DHA ni el peso total del aceite de pescado.

La IA de EFSA para adultos es 250 mg de EPA+DHA al día, sumando alimentos y suplementos. En embarazo y lactancia se indican además 100–200 mg de DHA al día. No es una proporción fija EPA:DHA ni el peso total del aceite de pescado.

### Limitaciones

Esta referencia no implica que sea necesario un suplemento ni sustituye la evaluación de la dieta. El formulario no prescribe tratamientos de hipertrigliceridemia o depresión ni diagnostica carencia mediante el índice omega-3. Consulte los fármacos, las interacciones y las dosis individuales con un profesional.

### Fuentes

- [EFSA. Dietary Reference Values summary, 2017, Table 2](https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="omega-3" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="omega-3" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/omega-3?lang=es&theme=auto"
  title="Valores de referencia de EPA y DHA" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
