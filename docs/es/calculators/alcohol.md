# Calculadora de eliminación de alcohol (fórmula de Widmark)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/alcohol.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/alcohol.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/alcohol.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/alcohol.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/alcohol.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/alcohol.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`alcohol` · [NutriFit](https://nutrifit.health/es/calculators/alcohol)

Calcula el pico máximo y la concentración actual de etanol en sangre (en ‰), el tiempo estimado hasta la sobriedad completa y las calorías aportadas.

### Cómo usar

1. Absorción estomacal e intestinal: Aproximadamente el 20% se absorbe en el estómago y el 80% en el intestino delgado. La comida sólida retrasa el vaciamiento gástrico, amortiguando el pico en sangre.
2. Oxidación por enzimas hepáticas: El hígado degrada hasta el 95% del etanol a ritmo constante mediante la alcohol deshidrogenasa (ADH) hacia acetaldehído y, posteriormente, a acetato mediante la ALDH.
3. Aclaramiento cinético lineal: Las enzimas se saturan rápido (cinética de orden cero): la tasa de sobriedad es fija, de unos 0,15 gramos por mil alcohólico cada hora, con independencia de la cantidad ingerida.

### Método y fórmula

Basada en el modelo farmacocinético de Erik Widmark (1932) actualizado por A.W. Jones (2010). Considera la distribución hídrica corporal (r = 0,68 en hombres, 0,55 en mujeres), la oxidación por la ADH gástrica y la tasa de aclaramiento lineal (0,15 ‰/hora).

Etanol puro (g) = Volumen (ml) × (Graduación % / 100) × 0,789; BAC_pico = (Etanol × Factor_absorción) / (Peso × r); BAC_actual = max(0, BAC_pico − 0,15 × Horas); Tiempo (h) = BAC_pico / 0,15.

### Limitaciones

La tasa de eliminación varía (0,10–0,20 ‰/h) según la genética (ADH, ALDH2) y el estado hepático. Esta herramienta es informativa y carece de validez pericial o jurídica.

### Fuentes

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones A.W. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework and pharmacokinetics. Forensic Sci Int, 2010;200(1-3):1–20](https://pubmed.ncbi.nlm.nih.gov/20434270/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="alcohol" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="alcohol" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/alcohol?lang=es&theme=auto"
  title="Calculadora de eliminación de alcohol (fórmula de Widmark)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
