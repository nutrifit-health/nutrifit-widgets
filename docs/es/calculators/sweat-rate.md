# Calculadora de sudoración y rehidratación

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sweat-rate.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sweat-rate.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`sweat-rate` · [NutriFit](https://nutrifit.health/es/calculators/sweat-rate)

Determina la tasa individual de pérdida de sudor y calcula las necesidades personalizadas de líquidos y electrolitos tras el ejercicio.

### Cómo usar

1. Pésese antes del entrenamiento: Evacue vejiga e intestinos y regístrese en la báscula completamente desnudo antes de empezar la sesión.
2. Mida los líquidos durante la sesión: Beba de un bidón con escala en mililitros para conocer con exactitud la cantidad ingerida.
3. Pésese seco nada más terminar: Séquese concienzudamente todo el sudor de piel y cabello antes de volver a pesarse sin ropa.

### Método y fórmula

Basado en el protocolo del Colegio Americano de Medicina del Deporte (ACSM). Comparando el peso desnudo antes y después de la sesión, junto al líquido bebido y la orina evacuada, se establece la tasa horaria de sudoración.

Pérdida de sudor (ml) = (Peso_antes − Peso_después, g) + Líquido_ingerido(ml) − Orina(ml); Tasa de sudoración (l/h) = (Pérdida / Duración_min) × 60 / 1000; % Deshidratación = ((Peso_antes − Peso_después) / Peso_antes) × 100.

### Limitaciones

No contabiliza la masa de sustrato oxidado ni el vapor expirado (~100–150 g/hora en esfuerzo intenso). Constituye la mejor estimación clínica práctica disponible.

### Fuentes

- [Sawka M.N. et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007;39(2):377–390](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas D.T., Erdman K.A., Burke L.M. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016;116(3):501–528](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs S.M., Sawka M.N. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011;29(Suppl 1):S39–S46](https://pubmed.ncbi.nlm.nih.gov/22150427/)

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
  title="Calculadora de sudoración y rehidratación" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
