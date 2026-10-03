# Índices de cintura WHR, WHtR y VAI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/waist-ratios.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/waist-ratios.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/waist-ratios.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/waist-ratios.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/waist-ratios.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/waist-ratios.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`waist-ratios` · [NutriFit](https://nutrifit.health/es/calculators/waist-ratios)

WHR = cintura / cadera; WHtR = cintura / altura. Mida cintura entre la última costilla y la parte superior de la pelvis tras una espiración natural, y cadera en su parte más ancha. VAI añade peso, triglicéridos y HDL en mmol/L según Amato (2010).

### Uso

1. Introduzca los datos iniciales: WHR = cintura / cadera; WHtR = cintura / altura. Mida cintura entre la última costilla y la parte superior de la pelvis tras una espiración natural, y cadera en su parte más ancha. VAI añade peso, triglicéridos y HDL en mmol/L según Amato (2010).
2. Ajuste los parámetros: WHtR = Cintura / Altura; WHR = Cintura / Cadera; VAI (Hombres) = (Cintura/(39,68+1,88×IMC)) × (TG/1,03) × (1,31/HDL); VAI (Mujeres) = (Cintura/(35,58+1,89×IMC)) × (TG/0,81) × (1,52/HDL).
3. Lea el resultado: No miden directamente grasa visceral. Un WHtR bajo no establece bajo peso; no se asignan categorías universales de WHR o VAI. Las recomendaciones NICE de WHtR son para adultos con IMC < 35.

### Método y fórmula

WHR = cintura / cadera; WHtR = cintura / altura. Mida cintura entre la última costilla y la parte superior de la pelvis tras una espiración natural, y cadera en su parte más ancha. VAI añade peso, triglicéridos y HDL en mmol/L según Amato (2010).

WHtR = Cintura / Altura; WHR = Cintura / Cadera; VAI (Hombres) = (Cintura/(39,68+1,88×IMC)) × (TG/1,03) × (1,31/HDL); VAI (Mujeres) = (Cintura/(35,58+1,89×IMC)) × (TG/0,81) × (1,52/HDL).

### Limitaciones

No miden directamente grasa visceral. Un WHtR bajo no establece bajo peso; no se asignan categorías universales de WHR o VAI. Las recomendaciones NICE de WHtR son para adultos con IMC < 35.

### Fuentes

- [Ashwell M et al. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato MC et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010](https://pubmed.ncbi.nlm.nih.gov/20067971/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="waist-ratios" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="waist-ratios" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/waist-ratios?lang=es&theme=auto"
  title="Índices de cintura WHR, WHtR y VAI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
