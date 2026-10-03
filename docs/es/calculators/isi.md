# Índice de Gravedad del Insomnio (ISI)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/isi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/isi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`isi` · [NutriFit](https://nutrifit.health/es/calculators/isi)

Evaluación del sueño durante las últimas 2 semanas: 7 ítems con escalas distintas de 0 a 4; total de 0 a 28. Satisfacción, visibilidad de problemas, preocupación e impacto diario tienen respuestas propias.

### Uso

1. Introduzca los datos iniciales: Evaluación del sueño durante las últimas 2 semanas: 7 ítems con escalas distintas de 0 a 4; total de 0 a 28. Satisfacción, visibilidad de problemas, preocupación e impacto diario tienen respuestas propias.
2. Ajuste los parámetros: Evaluación del sueño durante las últimas 2 semanas: 7 ítems con escalas distintas de 0 a 4; total de 0 a 28. Satisfacción, visibilidad de problemas, preocupación e impacto diario tienen respuestas propias.
3. Lea el resultado: Traducción informativa para autoevaluación. No se ha confirmado la validación de esta adaptación concreta. La puntuación no establece un diagnóstico y un resultado bajo no descarta enfermedad.

### Método y fórmula

Evaluación del sueño durante las últimas 2 semanas: 7 ítems con escalas distintas de 0 a 4; total de 0 a 28. Satisfacción, visibilidad de problemas, preocupación e impacto diario tienen respuestas propias.

Evaluación del sueño durante las últimas 2 semanas: 7 ítems con escalas distintas de 0 a 4; total de 0 a 28. Satisfacción, visibilidad de problemas, preocupación e impacto diario tienen respuestas propias.

### Limitaciones

Traducción informativa para autoevaluación. No se ha confirmado la validación de esta adaptación concreta. La puntuación no establece un diagnóstico y un resultado bajo no descarta enfermedad.

### Fuentes

- [Morin CM et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases and evaluate treatment response. Sleep, 2011](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien CH et al. Validation of the Insomnia Severity Index as an outcome measure for insomnia research. Sleep Med, 2001](https://pubmed.ncbi.nlm.nih.gov/11438246/)
- [PhenX Toolkit. Insomnia Severity Index: patient questionnaire, last two weeks, protocol 640801](https://www.phenxtoolkit.org/protocols/view/640801?origin=subcollection)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="isi" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="isi" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/isi?lang=es&theme=auto"
  title="Índice de Gravedad del Insomnio (ISI)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
