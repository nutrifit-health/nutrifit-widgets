# Índice de Gravedad del Insomnio (ISI)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/isi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/isi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`isi` · [NutriFit](https://nutrifit.health/es/calculators/isi)

Herramienta clínica de 7 preguntas diseñada para evaluar de forma fiable la intensidad, naturaleza y repercusión diurna del insomnio.

### Cómo usar

1. Considere las últimas 2 semanas: Valore la calidad de su descanso nocturno y su grado de energía diurna a lo largo de los últimos 14 días.
2. Responda a las 7 preguntas: Puntúe cada dificultad desde 0 ('Ninguna') hasta 4 ('Muy grave') según su vivencia real.
3. Analice su resultado y recomendaciones: Identifique su categoría clínica y aplique las medidas oportunas de higiene circadiana.

### Método y fórmula

7 ítems valorados de 0 a 4 puntos. La puntuación global oscila de 0 a 28, analizando conciliación, mantenimiento, despertar precoz y malestar.

Puntuación total ISI = Suma de los 7 ítems (0–28). 0–7: Sin insomnio clínico; 8–14: Insomnio subclínico (leve); 15–21: Insomnio clínico moderado; 22–28: Insomnio clínico grave.

### Limitaciones

Este test tiene finalidad de cribado. Ante sospecha de apnea del sueño o síndrome de piernas inquietas, se requiere polisomnografía médica.

### Fuentes

- [Morin C.M. et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases. Sleep, 2011;34(5):601–608](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien C.H. et al. Validation of the Insomnia Severity Index as an outcome measure. Sleep Med, 2001;2(4):297–307](https://pubmed.ncbi.nlm.nih.gov/11438246/)

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
