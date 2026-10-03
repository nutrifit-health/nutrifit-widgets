# Calculadora del índice TyG (triglicéridos × glucosa)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tyg-index.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tyg-index.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`tyg-index` · [NutriFit](https://nutrifit.health/es/calculators/tyg-index)

Índice de investigación basado en triglicéridos y glucosa en ayunas, con las variantes TyG-BMI y TyG-WC.

### Uso

1. Tome triglicéridos y glucosa en ayunas: Ambos forman parte de la bioquímica estándar. La extracción debe ser en ayunas: los triglicéridos posprandiales suben 1,5–2 veces e inflan el índice.
2. Indique las unidades del informe: La fórmula está definida para mg/dL. Si el laboratorio informa mmol/L, deje el selector en mmol/L: la calculadora convierte a mg/dL automáticamente.
3. Añada peso, talla y cintura: TyG-IMC y TyG-CC detectan la obesidad visceral y el hígado graso con más precisión que el TyG «puro». Mida la cintura a la altura del ombligo en espiración.

### Método y fórmula

Se utiliza ln(TG × glucosa / 2), con ambas concentraciones en mg/dl, como en Lee et al. (2018). La otra variante publicada, ln(TG × glucosa)/2, tiene una escala numérica diferente; sus umbrales no se pueden trasladar aquí.

TyG = ln[TG (mg/dl) × glucosa (mg/dl) / 2]. TyG-BMI = TyG × IMC; TyG-WC = TyG × cintura (cm).

### Limitaciones

No se han establecido umbrales diagnósticos universales para este cálculo. El índice no confirma resistencia a la insulina, diabetes ni enfermedad cardiovascular.

### Fuentes

- [Lee J.W., Lim N.K., Park H.Y. TyG and type 2 diabetes risk in middle-aged Koreans. BMC Endocr Disord, 2018;18:33](https://link.springer.com/article/10.1186/s12902-018-0259-x)
- [Simental-Mendía LE et al. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A et al. Diagnostic Accuracy of the Triglyceride and Glucose Index for Insulin Resistance: A Systematic Review. Int J Endocrinol, 2020](https://pubmed.ncbi.nlm.nih.gov/32256572/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tyg-index" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="tyg-index" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tyg-index?lang=es&theme=auto"
  title="Calculadora del índice TyG (triglicéridos × glucosa)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
