# Escala de Alimentación Intuitiva IES-2

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ies-2.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ies-2.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`ies-2` · [NutriFit](https://nutrifit.health/es/calculators/ies-2)

Herramienta psicométrica de 23 preguntas validada científicamente por Tracy Tylka para evaluar una relación saludable y autorregulada con la comida.

### Cómo usar

1. Valore su relación habitual con la comida: Responda en base a sus actitudes, sensaciones y conductas cotidianas durante los últimos meses.
2. Indique su grado de acuerdo del 1 al 5: 1 representa 'Totalmente en desacuerdo' y 5 'Totalmente de acuerdo'.
3. Examine el perfil en las 4 dimensiones: Preste especial atención a las subescalas con puntuación inferior a 3,0 para enfocar su trabajo personal.

### Método y fórmula

23 afirmaciones valoradas en escala Likert de 1 a 5 distribuidas en 4 subescalas: Permiso incondicional para comer (UPE), Comer por razones físicas (EPR), Confianza en señales de hambre/saciedad (RHSC) y Congruencia corporal (B-FCC).

Puntuación total IES-2 = Media aritmética de los 23 ítems considerando los ítems invertidos (1,0 a 5,0). Puntuaciones > 3,5 indican competencia intuitiva.

### Limitaciones

La escala evalúa patrones psicológicos de conducta alimentaria. En caso de TCA activo, el proceso debe ser guiado por profesionales clínicos especializados.

### Fuentes

- [Tylka T.L., Kroon Van Diest A.M. The Intuitive Eating Scale-2: item refinement and psychometric evaluation. J Couns Psychol, 2013;60(1):137–153](https://pubmed.ncbi.nlm.nih.gov/23356469/)
- [Tribole E., Resch E. Intuitive Eating: A Revolutionary Anti-Diet Approach. St. Martin’s Essentials, 2020](https://www.intuitiveeating.org/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ies-2" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="ies-2" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ies-2?lang=es&theme=auto"
  title="Escala de Alimentación Intuitiva IES-2" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
