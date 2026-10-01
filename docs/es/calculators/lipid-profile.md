# Calculadora de perfil lipídico: LDL, no-HDL e índices aterogénicos

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lipid-profile.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lipid-profile.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lipid-profile.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lipid-profile.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lipid-profile.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lipid-profile.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`lipid-profile` · [NutriFit](https://nutrifit.health/es/calculators/lipid-profile)

LDL calculado por dos métodos, no-HDL, colesterol remanente y cinco índices aterogénicos a partir del lipidograma estándar, con objetivos ESC/EAS.

### Cómo usar

1. Introduzca los tres marcadores básicos: Colesterol total, HDL y triglicéridos aparecen en cualquier lipidograma. Elija las unidades del informe: mmol/L (Europa, CEI) o mg/dL (EE. UU., parte de los laboratorios latinoamericanos).
2. Añada el LDL medido si lo tiene: La medición directa del LDL es más precisa que el cálculo. Si no la tiene, la calculadora usa la ecuación de Sampson y muestra en paralelo Friedewald para compararla con el informe del laboratorio.
3. Mire los cocientes, no un solo valor: Un colesterol total normal con HDL bajo y triglicéridos altos es un perfil aterogénico. El AIP y el coeficiente aterogénico lo revelan cuando «el CT está normal».

### Método y fórmula

A partir del colesterol total, el HDL y los triglicéridos, la calculadora obtiene el LDL con la fórmula clásica de Friedewald (1972) y con la ecuación de Sampson (NIH, 2020), que se mantiene precisa con triglicéridos hasta 9 mmol/L y LDL bajo. El no-HDL es todo el colesterol aterogénico (LDL + VLDL + partículas remanentes), y el colesterol remanente es no-HDL menos LDL. Los índices de Castelli (CT/HDL y LDL/HDL), el coeficiente aterogénico de Klimov y el índice aterogénico del plasma AIP = log10(TG/HDL) reflejan la proporción entre fracciones «malas» y «protectoras» y predicen el riesgo mejor que los marcadores aislados.

LDL (Friedewald, mmol/L) = CT − HDL − TG / 2,2   [con TG ≤ 4,5 mmol/L]
LDL (Sampson, mg/dL) = CT/0,948 − HDL/0,971 − (TG/8,56 + TG×no-HDL/2140 − TG²/16100) − 9,44
no-HDL = CT − HDL;  Colesterol remanente = no-HDL − LDL
CA (Klimov) = (CT − HDL) / HDL;  Castelli I = CT/HDL;  Castelli II = LDL/HDL
AIP = log10(TG / HDL), mmol/L

### Limitaciones

El LDL calculado es una estimación, no una medición: con TG > 4,5 mmol/L Friedewald no se aplica y con TG > 9 mmol/L o quilomicronemia incluso Sampson es impreciso. Los índices no sustituyen la valoración del riesgo global por SCORE2, apolipoproteína B y lipoproteína(a). Los objetivos de LDL dependen de la categoría de riesgo (de 1,4 a 3,0 mmol/L según ESC/EAS 2019) y los fija el médico. Ayuno o no según indique el laboratorio.

### Fuentes

- [Friedewald W.T., Levy R.I., Fredrickson D.S. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972;18(6):499–502](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M. et al. A new equation for calculation of low-density lipoprotein cholesterol in patients with normolipidemia and/or hypertriglyceridemia. JAMA Cardiol, 2020;5(5):540–548](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiášová M., Frohlich J. The plasma parameter log (TG/HDL-C) as an atherogenic index. Clin Biochem, 2001;34(7):583–588](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F. et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J, 2020;41(1):111–188](https://pubmed.ncbi.nlm.nih.gov/31504418/)

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
  title="Calculadora de perfil lipídico: LDL, no-HDL e índices aterogénicos" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
