# Vitamina D: estimación del modelo van Groningen

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vitamin-d-dose.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vitamin-d-dose.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vitamin-d-dose.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vitamin-d-dose.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vitamin-d-dose.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vitamin-d-dose.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`vitamin-d-dose` · [NutriFit](https://nutrifit.health/es/calculators/vitamin-d-dose)

25(OH)D en dos unidades y una estimación de investigación basada en el peso. No se prescribe una pauta automática.

### Uso

1. Introduzca los datos iniciales: El modelo van Groningen (2010) relaciona la cantidad total de colecalciferol con el peso y el 25(OH)D inicial. Esta herramienta usa el objetivo de investigación de 75 nmol/L, un nivel inicial inferior a 50 nmol/L y un peso de 35–125 kg. El límite inferior de peso restringe la interfaz al contexto adulto; un médico evalúa la edad y las exclusiones clínicas. No determina una pauta, dosis de mantenimiento ni intervalo de control. Endocrine Society 2024 no establece un objetivo universal de 25(OH)D para prevenir enfermedades en personas sanas.
2. Ajuste los parámetros: Estimación total del modelo (UI) = 40 × (75 − 25(OH)D, nmol/L) × peso (kg). 1 ng/mL = 2,496 nmol/L.
3. Lea el resultado: Es un cálculo de investigación para consultar con un médico, no una prescripción individual. No lo use para automedicarse durante el embarazo, en niños ni con trastornos del calcio, enfermedad renal, malabsorción o enfermedades granulomatosas. No considera medicamentos ni suplementos; el total no debe tomarse como una dosis única.

### Método y fórmula

El modelo van Groningen (2010) relaciona la cantidad total de colecalciferol con el peso y el 25(OH)D inicial. Esta herramienta usa el objetivo de investigación de 75 nmol/L, un nivel inicial inferior a 50 nmol/L y un peso de 35–125 kg. El límite inferior de peso restringe la interfaz al contexto adulto; un médico evalúa la edad y las exclusiones clínicas. No determina una pauta, dosis de mantenimiento ni intervalo de control. Endocrine Society 2024 no establece un objetivo universal de 25(OH)D para prevenir enfermedades en personas sanas.

Estimación total del modelo (UI) = 40 × (75 − 25(OH)D, nmol/L) × peso (kg). 1 ng/mL = 2,496 nmol/L.

### Limitaciones

Es un cálculo de investigación para consultar con un médico, no una prescripción individual. No lo use para automedicarse durante el embarazo, en niños ni con trastornos del calcio, enfermedad renal, malabsorción o enfermedades granulomatosas. No considera medicamentos ni suplementos; el total no debe tomarse como una dosis única.

### Fuentes

- [van Groningen L et al. Cholecalciferol loading dose guideline for vitamin D-deficient adults. Eur J Endocrinol, 2010](https://pubmed.ncbi.nlm.nih.gov/20139241/)
- [Endocrine Society. Vitamin D for the Prevention of Disease: Clinical Practice Guideline, 2024](https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vitamin-d-dose" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="vitamin-d-dose" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vitamin-d-dose?lang=es&theme=auto"
  title="Vitamina D: estimación del modelo van Groningen" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
