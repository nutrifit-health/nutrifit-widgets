# Valores de referencia de proteínas

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/protein-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/protein-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`protein-intake` · [NutriFit](https://nutrifit.health/es/calculators/protein-intake)

Para adultos sanos, la PRI de EFSA es 0,83 g/kg/día. ISSN indica 1,4–2,0 g/kg/día para adultos sanos que entrenan; ESPEN propone 1,0–1,2 para personas mayores sanas. El cálculo utiliza el peso corporal real introducido. El intervalo no es un límite superior de seguridad.

### Uso

1. Introduzca los datos: Para adultos sanos, la PRI de EFSA es 0,83 g/kg/día. ISSN indica 1,4–2,0 g/kg/día para adultos sanos que entrenan; ESPEN propone 1,0–1,2 para personas mayores sanas. El cálculo utiliza el peso corporal real introducido. El intervalo no es un límite superior de seguridad.
2. Compare las referencias: Para adultos sanos, la PRI de EFSA es 0,83 g/kg/día. ISSN indica 1,4–2,0 g/kg/día para adultos sanos que entrenan; ESPEN propone 1,0–1,2 para personas mayores sanas. El cálculo utiliza el peso corporal real introducido. El intervalo no es un límite superior de seguridad.
3. Considere las limitaciones: Son referencias poblacionales, no una dosis óptima individual. Este formulario no prescribe alimentación en enfermedad renal, embarazo, enfermedad, desnutrición o exceso de peso considerable. Esas situaciones requieren elegir individualmente el peso de referencia y la ingesta.

### Método y fórmula

Para adultos sanos, la PRI de EFSA es 0,83 g/kg/día. ISSN indica 1,4–2,0 g/kg/día para adultos sanos que entrenan; ESPEN propone 1,0–1,2 para personas mayores sanas. El cálculo utiliza el peso corporal real introducido. El intervalo no es un límite superior de seguridad.

Para adultos sanos, la PRI de EFSA es 0,83 g/kg/día. ISSN indica 1,4–2,0 g/kg/día para adultos sanos que entrenan; ESPEN propone 1,0–1,2 para personas mayores sanas. El cálculo utiliza el peso corporal real introducido. El intervalo no es un límite superior de seguridad.

### Limitaciones

Son referencias poblacionales, no una dosis óptima individual. Este formulario no prescribe alimentación en enfermedad renal, embarazo, enfermedad, desnutrición o exceso de peso considerable. Esas situaciones requieren elegir individualmente el peso de referencia y la ingesta.

### Fuentes

- [EFSA. Population reference intakes for protein, 2012](https://www.efsa.europa.eu/en/press/news/120209)
- [ISSN. Protein and exercise, 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/)
- [ESPEN Expert Group. Protein intake and exercise with aging, 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4208946/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="protein-intake" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="protein-intake" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/protein-intake?lang=es&theme=auto"
  title="Valores de referencia de proteínas" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
