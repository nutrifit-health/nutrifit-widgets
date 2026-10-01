# Calculadora de eliminación de cafeína y hora límite

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/caffeine.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/caffeine.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/caffeine.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/caffeine.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/caffeine.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/caffeine.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`caffeine` · [NutriFit](https://nutrifit.health/es/calculators/caffeine)

Modela la farmacocinética de la cafeína en sangre, su vida media biológica y el bloqueo residual de adenosina al acostarte para proteger el sueño profundo.

### Cómo usar

1. Pospón la primera taza 60–90 minutos tras despertar: Permite que el pico matutino de cortisol despeje la adenosina residual para evitar el bajón de energía de primera hora de la tarde.
2. Respeta tu hora límite de cafeína: Con una vida media de 5 horas, una cuarta parte de la cafeína sigue activa 10–12 horas después. Evita tomar café tras las 14:00 si te acuestas a las 23:00.
3. Vigila las fuentes ocultas: El chocolate negro, refrescos de cola, té verde y analgésicos comunes contienen dosis apreciables de cafeína.

### Método y fórmula

Basada en el aclaramiento por el citocromo hepático CYP1A2 según la EFSA (2015) y la AASM. La vida media normal es de 5 horas; el tabaco la reduce a 3 horas, los anticonceptivos la extienden a 9 horas y el embarazo hasta 12 horas.

C(t) = C0 × e^(−k × t), donde k = ln(2) / t_half; Normal t_half = 5,0 h; Fumador = 3,0 h; ACO = 9,0 h; Embarazo = 12,0 h; Límite seguro EFSA = 400 mg/día.

### Limitaciones

La velocidad de aclaramiento varía entre metabolizadores rápidos (*1A) y lentos (*1F). Las personas sensibles pueden experimentar taquicardia o ansiedad con dosis bajas.

### Fuentes

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest N.S. et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021;18(1):1](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C. et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013;9(11):1195–1200](https://pubmed.ncbi.nlm.nih.gov/24235826/)

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
  title="Calculadora de eliminación de cafeína y hora límite" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
