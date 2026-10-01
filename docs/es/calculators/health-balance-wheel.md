# Rueda de balance de salud y nutrición

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/health-balance-wheel.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/health-balance-wheel.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`health-balance-wheel` · [NutriFit](https://nutrifit.health/es/calculators/health-balance-wheel)

Gráfico radial interactivo de 8 áreas de salud y estilo de vida. Detecta cuellos de botella (Ley del Mínimo de Liebig) y conecta con herramientas de NutriFit.

### Cómo usar

1. Evalúa los 8 pilares de salud: Asigna puntuaciones de 1 a 10 para cada dimensión. Apóyate en los anclajes dinámicos bajo los controles para referencias cualitativas objetivas.
2. Identifica los factores limitantes: El test identifica los factores limitantes con las puntuaciones más bajas. Según la Ley del Mínimo de Liebig, estos determinan el bienestar general y bloquean la adaptación.
3. Ejecuta microhábitos en 48 horas: Evita intentar cambiar las 8 áreas de golpe. Enfócate en 1–2 factores limitantes, conecta las herramientas especializadas de NutriFit y da el primer paso en 48 horas.

### Método y fórmula

Basado en los principios de la Medicina del Estilo de Vida (Lifestyle Medicine) y la Ley del Mínimo de Justus von Liebig. Se evalúan 8 pilares fundamentales de la salud (calidad nutricional, energía, hidratación, sueño, actividad física, relación con la comida, salud digestiva y prevención) en una escala del 1 al 10. La puntuación global refleja el potencial vital, mientras que el índice de equilibrio mide la dispersión para evaluar la resiliencia y estabilidad biológica.

Puntuación general = (Σ Puntuaciones / 8) × 10; Índice de equilibrio = max(0, 100 − DE × 18); Cuellos de botella = min(Puntuaciones) donde valor ≤ 6

### Limitaciones

La autoevaluación tiene un carácter de cribado y refleja la percepción subjetiva de los hábitos y el bienestar. No sustituye las pruebas diagnósticas de laboratorio ni la consulta médica, pero ayuda a priorizar los cambios en el estilo de vida con mayor impacto.

### Fuentes

- [Liebig J. Die organische Chemie in ihrer Anwendung auf Agricultur und Physiologie. Vieweg, Braunschweig, 1840 (Закон минимума Либиха)](https://archive.org/details/dieorganischech01liebgoog)
- [American College of Lifestyle Medicine (ACLM). Standards and Core Competencies for Lifestyle Medicine, 2022](https://lifestylemedicine.org/)
- [Katz D.L. et al. Lifestyle Medicine: The Foundation of Health Care. Am J Prev Med, 2018;54(5):737–742](https://pubmed.ncbi.nlm.nih.gov/29571948/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="health-balance-wheel" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="health-balance-wheel" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/health-balance-wheel?lang=es&theme=auto"
  title="Rueda de balance de salud y nutrición" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
