# Conversor de unidades de análisis de laboratorio

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lab-unit-converter.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lab-unit-converter.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lab-unit-converter.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lab-unit-converter.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lab-unit-converter.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lab-unit-converter.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`lab-unit-converter` · [NutriFit](https://nutrifit.health/es/calculators/lab-unit-converter)

Conversión de 33 parámetros de laboratorio entre SI (mmol/L, µmol/L, nmol/L, pmol/L) y unidades convencionales (mg/dL, ng/mL, pg/mL) según la masa molar.

### Cómo usar

1. 1. Elija el parámetro: La lista incluye los 33 analitos más frecuentes: de la glucosa y el colesterol a la vitamina D, la testosterona y el cortisol. Colesterol, LDL y HDL comparten el mismo factor.
2. 2. Indique el sentido: SI → convencional si su informe está en mmol/L o nmol/L y la referencia de un artículo extranjero en mg/dL o ng/mL. Y al revés si el análisis se hizo en el extranjero.
3. 3. Convierta también el rango de referencia: Los intervalos de referencia dependen del método del laboratorio. Convierta también los límites de normalidad del informe para comparar el valor con el rango correcto.

### Método y fórmula

Los laboratorios del mundo usan dos sistemas de unidades: SI (moles por litro, adoptado en Europa, Rusia, Canadá, Australia) y el convencional de masa (miligramos por decilitro, nanogramos por mililitro: EE. UU., parte de Latinoamérica y Asia). Convertir entre ellos consiste en multiplicar o dividir por un factor igual a la masa molar de la sustancia ajustada por volumen. La calculadora usa factores del Manual de estilo de la AMA y de las recomendaciones para implantar el SI en el laboratorio clínico (Young 1987) y muestra la precisión habitual de cada parámetro.

Valor SI = Valor convencional × factor
Valor convencional = Valor SI / factor
Ejemplos de factores: glucosa 0,0555 (mg/dL → mmol/L); colesterol 0,02586; triglicéridos 0,01129; creatinina 88,4 (mg/dL → µmol/L); 25(OH)D 2,496 (ng/mL → nmol/L); insulina 6,945 (µUI/mL → pmol/L)

### Limitaciones

Los factores son válidos para sustancias puras y métodos estándar. En hormonas calibradas frente a estándares internacionales (insulina, prolactina, PTH) la conversión depende del calibrador del kit concreto y puede diferir en unos puntos porcentuales. Los rangos de referencia no se convierten automáticamente: compárelos con el informe de su laboratorio. El conversor no interpreta el resultado.

### Fuentes

- [Young D.S. Implementation of SI units for clinical laboratory data. Style specifications and conversion tables. Ann Intern Med, 1987;106(1):114–129](https://pubmed.ncbi.nlm.nih.gov/3789557/)
- [AMA Manual of Style, 11th ed. Units of Measure: Conventional Units and SI Units in Clinical Chemistry. Oxford University Press, 2020](https://academic.oup.com/amamanualofstyle/si-conversion-calculator)
- [NIST Special Publication 811. Guide for the Use of the International System of Units (SI), 2008](https://www.nist.gov/pml/special-publication-811)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lab-unit-converter" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="lab-unit-converter" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lab-unit-converter?lang=es&theme=auto"
  title="Conversor de unidades de análisis de laboratorio" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
