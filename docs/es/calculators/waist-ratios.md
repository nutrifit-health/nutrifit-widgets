# Calculadora de índices de cintura (WHtR, WHR, VAI)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/waist-ratios.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/waist-ratios.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/waist-ratios.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/waist-ratios.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/waist-ratios.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/waist-ratios.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`waist-ratios` · [NutriFit](https://nutrifit.health/es/calculators/waist-ratios)

Evalúa la distribución del tejido adiposo, la grasa visceral y el riesgo cardiometabólico con mucha mayor precisión que el IMC clásico.

### Cómo usar

1. Localice la línea anatómica de la cintura: La cintura no se mide sobre el ombligo ni en la cintura del pantalón, sino en el punto medio entre el borde inferior de la última costilla y la cresta ilíaca. Respire con normalidad.
2. Mida el perímetro de cadera: Pase la cinta métrica horizontalmente por la parte más prominente de los glúteos.
3. Compruebe la relación con la estatura: Divida cintura entre altura: si el valor es menor a 0,50, su nivel de grasa visceral se sitúa en la zona protectora.

### Método y fórmula

El perímetro de la cintura refleja el volumen de grasa visceral que rodea los órganos intraabdominales. La relación cintura-estatura (WHtR) y cintura-cadera (WHR) son predictores independientes de hipertensión, diabetes y esteatosis.

WHtR = Cintura / Altura; WHR = Cintura / Cadera; VAI (Hombres) = (Cintura/(39,68+1,88×IMC)) × (TG/1,03) × (1,31/HDL); VAI (Mujeres) = (Cintura/(35,58+1,89×IMC)) × (TG/0,81) × (1,52/HDL).

### Limitaciones

No aplicable durante el embarazo, ascitis clínica, hernias abdominales voluminosas o posoperatorio abdominal inmediato.

### Fuentes

- [Ashwell M., Gunn P., Gibson S. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012;13(3):275–286](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato M.C. et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010;33(4):920–922](https://pubmed.ncbi.nlm.nih.gov/20067971/)

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
  title="Calculadora de índices de cintura (WHtR, WHR, VAI)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
