# Calculadora del índice TyG (triglicéridos × glucosa)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tyg-index.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tyg-index.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`tyg-index` · [NutriFit](https://nutrifit.health/es/calculators/tyg-index)

Índice TyG y sus derivados TyG-IMC y TyG-CC: resistencia a la insulina y riesgo cardiometabólico a partir de triglicéridos y glucosa en ayunas, sin análisis de insulina.

### Cómo usar

1. Tome triglicéridos y glucosa en ayunas: Ambos forman parte de la bioquímica estándar. La extracción debe ser en ayunas: los triglicéridos posprandiales suben 1,5–2 veces e inflan el índice.
2. Indique las unidades del informe: La fórmula está definida para mg/dL. Si el laboratorio informa mmol/L, deje el selector en mmol/L: la calculadora convierte a mg/dL automáticamente.
3. Añada peso, talla y cintura: TyG-IMC y TyG-CC detectan la obesidad visceral y el hígado graso con más precisión que el TyG «puro». Mida la cintura a la altura del ombligo en espiración.

### Método y fórmula

El índice TyG (Simental-Mendía, 2008) es el logaritmo natural de la mitad del producto de triglicéridos y glucosa en ayunas en mg/dL. Refleja la lipotoxicidad y la utilización deficiente de glucosa, dos mecanismos clave de la resistencia a la insulina, y se correlaciona con el clamp euglucémico tan bien como el HOMA-IR, sin necesitar el análisis de insulina, caro y mal estandarizado. Los derivados TyG-IMC y TyG-CC añaden el peso y el perímetro de cintura y mejoran la detección de síndrome metabólico y NAFLD.

TyG = ln[ Triglicéridos (mg/dL) × Glucosa (mg/dL) / 2 ]
TyG-IMC = TyG × IMC (kg/m²)
TyG-CC = TyG × Perímetro de cintura (cm)
Conversión: TG mg/dL = mmol/L × 88,57; glucosa mg/dL = mmol/L × 18,016

### Limitaciones

No existe un punto de corte único del TyG: según la población, el umbral de alto riesgo va de 8,5 a 9,0, y en cohortes asiáticas es menor. El índice se distorsiona con hipertrigliceridemia familiar, fibratos, estatinas y alcohol la víspera, y en enfermedad aguda. Se requieren valores en ayunas (8–12 h). Es una herramienta de cribado, no un diagnóstico.

### Fuentes

- [Simental-Mendía L.E., Rodríguez-Morán M., Guerrero-Romero F. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008;6(4):299–304](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F. et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010;95(7):3347–3351](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A. et al. Diagnostic accuracy of the triglyceride and glucose index for insulin resistance: a systematic review. Int J Endocrinol, 2020;2020:4678526](https://pubmed.ncbi.nlm.nih.gov/32256572/)

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
