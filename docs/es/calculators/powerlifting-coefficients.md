# Calculadora de coeficientes de powerlifting (DOTS, Wilks, IPF GL)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/powerlifting-coefficients.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/powerlifting-coefficients.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/es/calculators/powerlifting-coefficients)

Compara la fuerza relativa de atletas de diferentes categorías de peso y sexo en levantamiento de potencia (sentadilla, press de banca, peso muerto) con DOTS, Wilks e IPF GL.

### Cómo usar

1. Sume sus mejores levantamientos: Sume su peso máximo alcanzado en sentadilla, press de banca y peso muerto según la normativa de competición.
2. Indique el peso corporal exacto del pesaje: Utilice el peso verificado en la báscula durante el pesaje técnico oficial antes de subir a la tarima.
3. Evalúe sus puntos DOTS e IPF GL: Compare su resultado con la escala de rendimiento: 300 puntos es intermedio sólido, 400 nivel nacional y 500 élite internacional.

### Método y fórmula

La escala alométrica demuestra que la fuerza muscular es proporcional al área de sección transversal (altura al cuadrado), mientras que el peso corporal crece con el volumen (altura al cubo). Las fórmulas usan curvas polinómicas y exponenciales para igualar a atletas ligeros y pesados.

DOTS: Coeficiente = 500 / (A×Peso^4 + B×Peso^3 + C×Peso^2 + D×Peso + E); Puntos DOTS = Total (kg) × Coeficiente; IPF GL: 100 × Total / (A − B × e^(−C × Peso)); Wilks: polinomio de 5.º grado.

### Limitaciones

Diseñado para powerlifting de tres movimientos (trofeo completo). No aplicable a halterofilia olímpica (que usa Sinclair) ni a deportes monomovimiento no reglamentados.

### Fuentes

- [Perotti L. et al. The DOTS Formula: A new formula for evaluating strength athletes across weight classes, 2019](https://pubmed.ncbi.nlm.nih.gov/31804245/)
- [Wilks R. The Wilks Formula for Powerlifting. Australian Powerlifting Federation, 1997](https://www.powerlifting.sport/)
- [International Powerlifting Federation. IPF GL Points Formula for Classic and Equipped Powerlifting, 2020](https://www.powerlifting.sport/rules/codes/info/ipf-formula)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="powerlifting-coefficients" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="powerlifting-coefficients" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/powerlifting-coefficients?lang=es&theme=auto"
  title="Calculadora de coeficientes de powerlifting (DOTS, Wilks, IPF GL)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
