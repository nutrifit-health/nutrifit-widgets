# Cafeína restante: estimación del modelo

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/caffeine.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/caffeine.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/caffeine.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/caffeine.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/caffeine.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/caffeine.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`caffeine` · [NutriFit](https://nutrifit.health/es/calculators/caffeine)

Estima la cafeína restante ahora y al acostarse según la semivida de eliminación elegida.

### Uso

1. Introduzca los datos iniciales: Use valores reales y las unidades adecuadas.
2. Ajuste los parámetros: Ajuste las suposiciones iniciales a su situación.
3. Lea el resultado: Considere las limitaciones del modelo; el cálculo no es una medición.

### Método y fórmula

Cantidad restante = dosis × 2^(−t / T½). La suma diaria incluye solo las dosis indicadas de las últimas 24 horas.

Cantidad restante = dosis × 2^(−t / T½). La suma diaria incluye solo las dosis indicadas de las últimas 24 horas.

### Limitaciones

La semivida varía entre personas y con embarazo, enfermedades y medicamentos. Introduzca una suposición; 5 horas no son su velocidad de eliminación medida. La cantidad restante no predice la calidad del sueño. Las referencias de EFSA de 400 mg/día para adultos sanos y 200 mg/día en el embarazo no garantizan seguridad individual.

### Fuentes

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest NS et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013](https://pubmed.ncbi.nlm.nih.gov/24235903/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="caffeine" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="caffeine" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/caffeine?lang=es&theme=auto"
  title="Cafeína restante: estimación del modelo" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
