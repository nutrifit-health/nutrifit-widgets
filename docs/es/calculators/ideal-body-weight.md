# Calculadora de peso ideal (IBW y AdjBW)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ideal-body-weight.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ideal-body-weight.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/es/calculators/ideal-body-weight)

Calcula el peso corporal de referencia según fórmulas clínicas estandarizadas y determina el peso ajustado (AdjBW) para nutrición clínica y dietética.

### Cómo usar

1. Compare la fórmula de Devine con el IMC saludable: La fórmula de Devine suele coincidir con un IMC de 21,5–22,5 kg/m², el punto medio del rango saludable.
2. Utilice el peso ajustado (AdjBW) si presenta sobrepeso: Si su peso real supera al ideal en más de un 20% (IMC > 30), programe sus calorías y proteínas en función del AdjBW.
3. Considere la complexión ósea: Las personas de estructura ósea ancha se sitúan de manera saludable y cómoda en la franja superior del IMC normativo (23–24,9).

### Método y fórmula

Las fórmulas médicas de peso ideal se diseñaron para estandarizar dosis farmacológicas y ajustes de soporte vital. A diferencia de las tablas estéticas, definen una referencia fisiológica ligada a la menor morbimortalidad cardiometabólica.

Devine (Hombres): 50 + 2,3 × (Altura_pulg − 60); Devine (Mujeres): 45,5 + 2,3 × (Altura_pulg − 60); AdjBW = IBW + 0,4 × (Peso_Actual − IBW); Robinson: Hombres 52 + 1,9×pulg, Mujeres 49 + 1,7×pulg.

### Limitaciones

Las fórmulas no contemplan la hipertrofia muscular deportiva ni la complexión ósea individual (biotipos brevilíneo, normolíneo o longilíneo).

### Fuentes

- [Devine B.J. Gentamicin therapy. Drug Intell Clin Pharm, 1974;8:650–655](https://pubmed.ncbi.nlm.nih.gov/4611413/)
- [Robinson J.D. et al. Determination of ideal body weight for drug dosing. Am J Hosp Pharm, 1983;40(6):1016–1019](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Miller P.F. et al. Comparison of formulas for estimating ideal body weight. Am J Hosp Pharm, 1983;40:1622](https://pubmed.ncbi.nlm.nih.gov/6638027/)
- [Hamwi G.J. Therapy: changing concepts in diabetes mellitus. In: Danowski T.S. (ed). Diabetes Mellitus: Diagnosis and Treatment. ADA, 1964:73–78](https://pubmed.ncbi.nlm.nih.gov/14207860/)

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
  title="Calculadora de peso ideal (IBW y AdjBW)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
