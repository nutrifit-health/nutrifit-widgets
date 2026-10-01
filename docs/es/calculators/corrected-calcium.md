# Calculadora de calcio corregido por albúmina

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/corrected-calcium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/corrected-calcium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`corrected-calcium` · [NutriFit](https://nutrifit.health/es/calculators/corrected-calcium)

Calcio total corregido por albúmina (Payne 1973): detección de la hipo- e hipercalcemia reales en la hipoalbuminemia con conversión de unidades.

### Cómo usar

1. 1. Tome el calcio total y la albúmina de la misma muestra: Ambos parámetros están en la bioquímica estándar. Unidades: calcio en mmol/L o mg/dL, albúmina en g/L o g/dL; elija como en su informe.
2. 2. Compare el medido y el corregido: Si la categoría cambió, el calcio bajo era un «artefacto» de la hipoalbuminemia o, al contrario, un valor normal ocultaba una hipercalcemia.
3. 3. Ante la duda, calcio iónico: En ERC, reanimación, albúmina por debajo de 25 g/L y alteraciones del pH la fórmula no es fiable. El calcio iónico se mide directamente en el gasómetro.

### Método y fórmula

Alrededor del 40 % del calcio sérico va unido a la albúmina, el 10 % a fosfatos y citrato y el 50 % está ionizado, es decir, biológicamente activo. Los laboratorios miden el calcio total, así que cuando baja la albúmina (desnutrición, hepatopatía, síndrome nefrótico, estado crítico, embarazo) el calcio total cae aunque el iónico siga normal: aparece una falsa hipocalcemia. La fórmula de Payne (1973) añade 0,02 mmol/L (0,8 mg/dL) por cada 1 g/L (1 g/dL) de albúmina por debajo de 40 g/L (4 g/dL). La corrección inversa en la hiperalbuminemia (deshidratación) revela una hipercalcemia oculta.

Ca corregido (mmol/L) = Ca total + 0,02 × (40 − Albúmina, g/L)
Ca corregido (mg/dL) = Ca total + 0,8 × (4,0 − Albúmina, g/dL)
Conversión: Ca mg/dL × 0,2495 = mmol/L; albúmina g/dL × 10 = g/L
Referencia del calcio total: 2,15–2,55 mmol/L (8,6–10,2 mg/dL)

### Limitaciones

La fórmula se obtuvo en pacientes ambulatorios y funciona mal en ERC, pacientes de UCI, alteraciones del pH, hiperparatiroidismo y paraproteinemia: en estos grupos el calcio iónico difiere del corregido en el 20–40 % de los pacientes. Con albúmina por debajo de 25 g/L, en acidosis/alcalosis, tras transfusiones masivas con citrato y en diálisis debe medirse directamente el calcio iónico. Los intervalos de referencia de calcio y albúmina varían entre laboratorios.

### Fuentes

- [Payne R.B., Little A.J., Williams R.B., Milner J.R. Interpretation of serum calcium in patients with abnormal serum proteins. BMJ, 1973;4(5893):643–646](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson J.H., Lewis J.W., Boyd J.C. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978;46(6):986–993](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N. et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025;8(1):e2455251](https://pubmed.ncbi.nlm.nih.gov/39836424/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="corrected-calcium" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="corrected-calcium" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/corrected-calcium?lang=es&theme=auto"
  title="Calculadora de calcio corregido por albúmina" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
