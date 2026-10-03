# Perfil lipídico: indicadores calculados

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lipid-profile.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lipid-profile.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lipid-profile.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lipid-profile.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lipid-profile.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lipid-profile.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`lipid-profile` · [NutriFit](https://nutrifit.health/es/calculators/lipid-profile)

Calcula LDL por Friedewald y Sampson, colesterol no HDL, colesterol remanente y relaciones lipídicas.

### Uso

1. Introduzca los datos iniciales: Use valores reales y las unidades adecuadas.
2. Ajuste los parámetros: Ajuste las suposiciones iniciales a su situación.
3. Lea el resultado: Considere las limitaciones del modelo; el cálculo no es una medición.

### Método y fórmula

Friedewald: LDL = colesterol total − HDL − TG/5, todo en mg/dL, con TG <400 mg/dL. Sampson (2020) se usa con TG ≤800 mg/dL; no se muestran estimaciones negativas. AIP = log10(TG/HDL), ambos en mmol/L.

Friedewald: LDL = colesterol total − HDL − TG/5, todo en mg/dL, con TG <400 mg/dL. Sampson (2020) se usa con TG ≤800 mg/dL; no se muestran estimaciones negativas. AIP = log10(TG/HDL), ambos en mmol/L.

### Limitaciones

Los objetivos de LDL dependen del riesgo cardiovascular global. Estos indicadores no determinan riesgo individual, diagnóstico ni necesidad de medicamentos. Relaciones y AIP se muestran sin categorías universales de normalidad.

### Fuentes

- [Friedewald WT et al. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M et al. A New Equation for Calculation of Low-Density Lipoprotein Cholesterol in Patients With Normolipidemia and/or Hypertriglyceridemia. JAMA Cardiol, 2020](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiásová M et al. The plasma parameter log (TG/HDL-C) as an atherogenic index: correlation with lipoprotein particle size and esterification rate in apoB-lipoprotein-depleted plasma (FER(HDL)). Clin Biochem, 2001](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias: lipid modification to reduce cardiovascular risk. Eur Heart J, 2020](https://pubmed.ncbi.nlm.nih.gov/31504418/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lipid-profile" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="lipid-profile" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lipid-profile?lang=es&theme=auto"
  title="Perfil lipídico: indicadores calculados" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
