# Estimación de sudor perdido durante ejercicio

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sweat-rate.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sweat-rate.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`sweat-rate` · [NutriFit](https://nutrifit.health/es/calculators/sweat-rate)

Sudor (L) ≈ peso antes − peso después (kg) + bebida (L) − orina (L); tasa = sudor / duración en horas. Pésese en condiciones equivalentes, sin ropa mojada.

### Uso

1. Introduzca los datos iniciales: Sudor (L) ≈ peso antes − peso después (kg) + bebida (L) − orina (L); tasa = sudor / duración en horas. Pésese en condiciones equivalentes, sin ropa mojada.
2. Ajuste los parámetros: Pérdida de sudor (ml) = (Peso_antes − Peso_después, g) + Líquido_ingerido(ml) − Orina(ml); Tasa de sudoración (l/h) = (Pérdida / Duración_min) × 60 / 1000; % Deshidratación = ((Peso_antes − Peso_después) / Peso_antes) × 100.
3. Lea el resultado: El porcentaje de peso perdido no diagnostica deshidratación; un valor negativo indica ganancia. NATA (2017): reponer 100–150% de la pérdida neta es una referencia condicional tras ejercicio, especialmente con recuperación menor de cuatro horas. No es una cantidad obligatoria para todos ni una tasa de bebida durante ejercicio.

### Método y fórmula

Sudor (L) ≈ peso antes − peso después (kg) + bebida (L) − orina (L); tasa = sudor / duración en horas. Pésese en condiciones equivalentes, sin ropa mojada.

Sudor (L) ≈ peso antes − peso después (kg) + bebida (L) − orina (L); tasa = sudor / duración en horas. Pésese en condiciones equivalentes, sin ropa mojada.

### Limitaciones

El porcentaje de peso perdido no diagnostica deshidratación; un valor negativo indica ganancia. NATA (2017): reponer 100–150% de la pérdida neta es una referencia condicional tras ejercicio, especialmente con recuperación menor de cuatro horas. No es una cantidad obligatoria para todos ni una tasa de bebida durante ejercicio.

### Fuentes

- [NATA. Fluid Replacement for the Physically Active, 2017.](https://nata.kglmeridian.com/view/journals/attr/52/9/article-p877.xml)
- [American College of Sports Medicine et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas DT et al. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs SM et al. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011](https://pubmed.ncbi.nlm.nih.gov/22150427/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sweat-rate" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="sweat-rate" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sweat-rate?lang=es&theme=auto"
  title="Estimación de sudor perdido durante ejercicio" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
