# Testosterona libre calculada por Vermeulen

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/free-testosterone.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/free-testosterone.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/free-testosterone.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/free-testosterone.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/free-testosterone.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/free-testosterone.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`free-testosterone` · [NutriFit](https://nutrifit.health/es/calculators/free-testosterone)

Calcula las fracciones libre y no unida a SHBG a partir de testosterona total, SHBG y albúmina.

### Uso

1. Introduzca los datos iniciales: Use valores reales y las unidades adecuadas.
2. Ajuste los parámetros: Ajuste las suposiciones iniciales a su situación.
3. Lea el resultado: Considere las limitaciones del modelo; el cálculo no es una medición.

### Método y fórmula

Modelo de unión en equilibrio de Vermeulen (1999): K_SHBG=10⁹ L/mol, K_Alb=3,6×10⁴ L/mol, masa molar de albúmina 69 000 g/mol. La fracción biodisponible del modelo es la libre más la unida a albúmina.

Modelo de unión en equilibrio de Vermeulen (1999): K_SHBG=10⁹ L/mol, K_Alb=3,6×10⁴ L/mol, masa molar de albúmina 69 000 g/mol. La fracción biodisponible del modelo es la libre más la unida a albúmina.

### Limitaciones

Es un cálculo, no una medición directa. No se fija un rango normal universal: la interpretación depende de síntomas, edad, sexo, método de laboratorio y mediciones repetidas.

### Fuentes

- [Vermeulen A et al. A critical evaluation of simple methods for the estimation of free testosterone in serum. J Clin Endocrinol Metab, 1999](https://pubmed.ncbi.nlm.nih.gov/10523012/)
- [Bhasin S et al. Testosterone Therapy in Men With Hypogonadism: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab, 2018](https://pubmed.ncbi.nlm.nih.gov/29562364/)
- [Salonia A et al. European Association of Urology Guidelines on Sexual and Reproductive Health-2021 Update: Male Sexual Dysfunction. Eur Urol, 2021](https://pubmed.ncbi.nlm.nih.gov/34183196/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="free-testosterone" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="free-testosterone" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/free-testosterone?lang=es&theme=auto"
  title="Testosterona libre calculada por Vermeulen" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
