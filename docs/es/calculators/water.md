# Calculadora de agua diaria

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/water.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/water.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`water` · [NutriFit](https://nutrifit.health/es/calculators/water)

Calcula la necesidad diaria de líquidos a partir del peso corporal, con ajustes por actividad física y clima cálido.

### Cómo usar

1. Introduce tu peso corporal: El requerimiento fisiológico base es proporcional a la masa corporal (~30–35 ml por kg de peso).
2. Añade el tiempo de ejercicio: Agrega 350–500 ml de líquido por cada 30 minutos de ejercicio que produzca sudoración.
3. Ajusta por clima y calor: El clima caluroso (>25°C) o ambientes secos aumentan las pérdidas transdérmicas en unos 500 ml adicionales.

### Método y fórmula

La base son 30 ml por kg de peso en adultos y 25 ml/kg a partir de los 60 años, cuando disminuye la capacidad de concentración renal. Cada hora de actividad intensa añade 500 ml para compensar las pérdidas por sudor, y el clima cálido o una habitación seca con calefacción suma otros 500 ml. El total es la necesidad completa de agua; entre el 20 y el 30% procede de los alimentos, por eso se muestra aparte la cantidad que debe llegar en bebidas (EFSA, 2010).

Total(ml) = peso × 30 (o × 25 a partir de los 60) + 500 × horas de actividad + 500 con calor; Bebidas(ml) = total × 0,75

### Limitaciones

Es una referencia para adultos sanos. En insuficiencia cardíaca o renal, con diuréticos, con fiebre o en trabajos con calor la pauta la fija el médico. La sed y el color de la orina siguen siendo guías más fiables que cualquier cálculo.

### Fuentes

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [Sawka M.N. et al. American College of Sports Medicine Position Stand: Exercise and Fluid Replacement, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="water" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="water" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/water?lang=es&theme=auto"
  title="Calculadora de agua diaria" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
