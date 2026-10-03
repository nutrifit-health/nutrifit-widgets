# Calculadora de edad biológica PhenoAge (Levine)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phenoage.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phenoage.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`phenoage` · [NutriFit](https://nutrifit.health/es/calculators/phenoage)

El modelo Levine 2018 combina nueve biomarcadores y la edad cronológica. PhenoAge es una edad equivalente del riesgo poblacional en el modelo NHANES, no la edad de los órganos ni la esperanza de vida individual. La diferencia respecto a la edad es una resta, no una velocidad de envejecimiento ni el residuo estadístico PhenoAgeAccel.

### Uso

1. Introduzca los datos iniciales: El modelo Levine 2018 combina nueve biomarcadores y la edad cronológica. PhenoAge es una edad equivalente del riesgo poblacional en el modelo NHANES, no la edad de los órganos ni la esperanza de vida individual. La diferencia respecto a la edad es una resta, no una velocidad de envejecimiento ni el residuo estadístico PhenoAgeAccel.
2. Ajuste los parámetros: xb = −19.907 − 0.0336·A + 0.0095·C + 0.1953·G + 0.0954·ln(CRP) − 0.012·L + 0.0268·M + 0.3306·R + 0.00188·P + 0.0554·W + 0.0804·a
H = exp(xb) × (exp(120 × 0.0076927) − 1) / 0.0076927
PhenoAge = 141.50225 + ln(0.00553 × H) / 0.09165
A: albúmina, g/L; C: creatinina, µmol/L; G: glucosa, mmol/L; CRP: PCR, mg/dL (entrada mg/L ÷ 10); L: linfocitos, %; M: VCM, fL; R: RDW, %; P: fosfatasa alcalina, U/L; W: leucocitos, 10⁹/L; a: edad, años.
3. Lea el resultado: Modelo de investigación para edades de 20–84 años. Una enfermedad aguda cambia los biomarcadores y el resultado. No es un diagnóstico, una duración de vida ni una prueba de rejuvenecimiento. La PCR debe estar medida y ser positiva; un resultado bajo el límite de detección no puede sustituirse por cero.

### Método y fórmula

El modelo Levine 2018 combina nueve biomarcadores y la edad cronológica. PhenoAge es una edad equivalente del riesgo poblacional en el modelo NHANES, no la edad de los órganos ni la esperanza de vida individual. La diferencia respecto a la edad es una resta, no una velocidad de envejecimiento ni el residuo estadístico PhenoAgeAccel.

xb = −19.907 − 0.0336·A + 0.0095·C + 0.1953·G + 0.0954·ln(CRP) − 0.012·L + 0.0268·M + 0.3306·R + 0.00188·P + 0.0554·W + 0.0804·a
H = exp(xb) × (exp(120 × 0.0076927) − 1) / 0.0076927
PhenoAge = 141.50225 + ln(0.00553 × H) / 0.09165
A: albúmina, g/L; C: creatinina, µmol/L; G: glucosa, mmol/L; CRP: PCR, mg/dL (entrada mg/L ÷ 10); L: linfocitos, %; M: VCM, fL; R: RDW, %; P: fosfatasa alcalina, U/L; W: leucocitos, 10⁹/L; a: edad, años.

### Limitaciones

Modelo de investigación para edades de 20–84 años. Una enfermedad aguda cambia los biomarcadores y el resultado. No es un diagnóstico, una duración de vida ni una prueba de rejuvenecimiento. La PCR debe estar medida y ser positiva; un resultado bajo el límite de detección no puede sustituirse por cero.

### Fuentes

- [Levine ME et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: A cohort study. PLoS Med, 2018](https://pubmed.ncbi.nlm.nih.gov/30596641/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phenoage" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="phenoage" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phenoage?lang=es&theme=auto"
  title="Calculadora de edad biológica PhenoAge (Levine)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
