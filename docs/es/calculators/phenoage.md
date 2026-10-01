# Calculadora de edad biológica PhenoAge (Levine)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phenoage.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phenoage.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`phenoage` · [NutriFit](https://nutrifit.health/es/calculators/phenoage)

Edad fenotípica y aceleración del envejecimiento a partir de 9 biomarcadores del hemograma y la bioquímica rutinarios (Levine 2018) con estimación del riesgo a 10 años.

### Cómo usar

1. 1. Hágase un hemograma con fórmula y una bioquímica: Se necesitan: albúmina, creatinina, glucosa en ayunas, PCR (mejor ultrasensible) y fosfatasa alcalina de la bioquímica; leucocitos, linfocitos %, VCM y RDW del hemograma.
2. 2. Introduzca los valores en unidades SI: Albúmina en g/L (no g/dL), creatinina en µmol/L, glucosa en mmol/L, PCR en mg/L. Si el informe usa otras unidades, use el conversor de unidades.
3. 3. Siga la tendencia, no un número aislado: El error puntual del modelo es de varios años, pero el cambio de PhenoAge tras 6–12 meses de intervención muestra si esta funciona. Recalcule con análisis del mismo laboratorio.

### Método y fórmula

PhenoAge (Levine et al., 2018) es una medida validada de edad biológica obtenida con datos de NHANES III (9926 personas) y comprobada en NHANES IV. De 42 marcadores clínicos, el modelo seleccionó nueve que mejor predicen la mortalidad además de la edad cronológica: albúmina, creatinina, glucosa, proteína C reactiva, porcentaje de linfocitos, volumen corpuscular medio, amplitud de distribución eritrocitaria, fosfatasa alcalina y recuento de leucocitos. Una combinación lineal de estos marcadores con la edad se transforma mediante un modelo de Gompertz en riesgo de mortalidad a 10 años, y este en la «edad» a la que ese riesgo es típico en la población. La diferencia entre PhenoAge y la edad cronológica es la aceleración del envejecimiento, ligada al riesgo cardiovascular, diabetes, cáncer y demencia.

xb = −19,907 − 0,0336·Albúmina(g/L) + 0,0095·Creatinina(µmol/L) + 0,1953·Glucosa(mmol/L) + 0,0954·ln(PCR, mg/dL) − 0,0120·Linfocitos(%) + 0,0268·VCM(fL) + 0,3306·RDW(%) + 0,00188·FA(U/L) + 0,0554·Leucocitos(10⁹/L) + 0,0804·Edad
Riesgo a 120 meses = 1 − exp(−e^xb · (e^(120·0,0076927) − 1) / 0,0076927)
PhenoAge = 141,50225 + ln(−0,00553 · ln(1 − Riesgo)) / 0,09165

### Limitaciones

El modelo se obtuvo en población estadounidense de 20+ años y estima el riesgo a nivel de grupo: el error individual es de varios años. Los procesos agudos (infección, traumatismo, deshidratación) distorsionan mucho la PCR, los leucocitos y la creatinina; use análisis realizados sin enfermedad. No está validado en embarazadas, deportistas con gran masa muscular (creatinina) ni pacientes en diálisis. PhenoAge es una herramienta de seguimiento, no un diagnóstico, y no sustituye la valoración del riesgo cardiovascular por SCORE2.

### Fuentes

- [Levine M.E. et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018;10(4):573–591](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z. et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: a cohort study. PLoS Med, 2018;15(12):e1002718](https://pubmed.ncbi.nlm.nih.gov/30596641/)

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
