# Escala de riesgo de diabetes FINDRISC

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/findrisc.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/findrisc.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/findrisc.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/findrisc.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/findrisc.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/findrisc.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`findrisc` · [NutriFit](https://nutrifit.health/es/calculators/findrisc)

Cuestionario reconocido internacionalmente por la OMS y la IDF para la detección precoz de diabetes oculta y la evaluación del riesgo de aparición de diabetes tipo 2 en 10 años.

### Cómo usar

1. Indica tu edad y datos antropométricos: Selecciona tu grupo de edad, categoría de IMC y circunferencia de cintura, medida con cinta métrica a mitad de camino entre la última costilla y la cresta ilíaca.
2. Evalúa tu estilo de vida y alimentación: Indica si realizas al menos 30 minutos de actividad física al día y si consumes verduras, frutas o bayas a diario.
3. Indica tus antecedentes médicos: Indica si tomas medicación para la presión, si has tenido azúcar elevada en el pasado y si hay diabetes en familiares de sangre.

### Método y fórmula

Suma 8 factores de riesgo probados: edad, IMC, circunferencia de cintura, actividad física, verduras en la dieta, tratamiento antihipertensivo, glucemia elevada previa y antecedentes familiares.

Puntuación FINDRISC = Edad (0–4) + IMC (0–3) + Cintura (0–4) + Actividad física (0/2) + Verduras (0/1) + Medicación para la presión (0/2) + Glucosa elevada previa (0/5) + Antecedentes familiares (0/3/5). Total: 0–26 puntos.

### Limitaciones

Esta escala es una herramienta predictiva de cribado y no reemplaza el diagnóstico de laboratorio (glucosa plasmática en ayunas, HbA1c, prueba de tolerancia oral a la glucosa).

### Fuentes

- [Lindström J., Tuomilehto J. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003;26(3):725–731](https://pubmed.ncbi.nlm.nih.gov/12610029/)
- [International Diabetes Federation (IDF). Clinical Practice Recommendations for managing Type 2 Diabetes in Primary Care, 2017](https://www.idf.org/our-activities/care-prevention/clinical-practice-recommendations/)
- [Saaristo T. et al. FINDRISC as an early intervention tool in primary health care. Diabetes Care, 2005;28(12):2900–2907](https://pubmed.ncbi.nlm.nih.gov/16316578/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="findrisc" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="findrisc" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/findrisc?lang=es&theme=auto"
  title="Escala de riesgo de diabetes FINDRISC" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
