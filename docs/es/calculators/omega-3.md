# Calculadora de Omega-3 (dosis de EPA + DHA e índice)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/omega-3.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/omega-3.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/omega-3.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/omega-3.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/omega-3.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/omega-3.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`omega-3` · [NutriFit](https://nutrifit.health/es/calculators/omega-3)

Determina la dosis terapéutica y de mantenimiento de ácidos grasos EPA y DHA activos según indicaciones clínicas y biomarcadores analíticos.

### Cómo usar

1. Revisa el contenido real (EPA + DHA): Una etiqueta de '1000 mg de aceite de pescado' suele contener apenas 300 mg de EPA+DHA. Suma siempre los miligramos concretos de EPA y DHA.
2. Elige la forma lipídica correcta (rTG o TG): Los triglicéridos reesterificados (rTG) presentan una biodisponibilidad muy superior a la de los ésteres etílicos (EE) sintéticos.
3. Verifica el índice de oxidación (TOTOX): Un aceite de calidad certifica un índice TOTOX < 26 y sello IFOS (International Fish Oil Standards), sin olor a pescado rancio.

### Método y fórmula

Basada en consensos de GOED, la Asociación Americana del Corazón (AHA) y la ISSFAL. Fija como objetivo un índice eritrocitario de Omega-3 > 8% para una protección cardiovascular óptima.

Salud general: 500 mg/día; Cardioprotección: 1000 mg/día; Hipertrigliceridemia: 2000–4000 mg/día; Embarazo: 600 mg (énfasis en DHA); Estado de ánimo: 1000–2000 mg (EPA:DHA ≥ 2:1); Deporte: 1500–2000 mg.

### Limitaciones

Dosis superiores a 3000–4000 mg de EPA+DHA al día ejercen un efecto antiagregante y requieren supervisión médica en pacientes bajo tratamiento anticoagulante.

### Fuentes

- [Harris W.S., Von Schacky C. The Omega-3 Index: a new risk factor for death from coronary heart disease? Prev Med, 2004;39(1):212–220](https://pubmed.ncbi.nlm.nih.gov/15207989/)
- [Global Organization for EPA and DHA Omega-3s (GOED). Clinical Practice Recommendations for EPA and DHA Omega-3 Intake, 2022](https://goedomega3.com/intake-recommendations)
- [Guu T.W. et al. International Society for Nutritional Psychiatry Research Practice Guidelines for Omega-3 Fatty Acids in the Treatment of Major Depressive Disorder. Psychother Psychosom, 2019;88(5):263–273](https://pubmed.ncbi.nlm.nih.gov/31480072/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="omega-3" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="omega-3" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/omega-3?lang=es&theme=auto"
  title="Calculadora de Omega-3 (dosis de EPA + DHA e índice)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
