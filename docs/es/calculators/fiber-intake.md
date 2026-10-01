# Calculadora de ingesta de fibra dietética (OMS y EFSA)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fiber-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fiber-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`fiber-intake` · [NutriFit](https://nutrifit.health/es/calculators/fiber-intake)

Determina el requerimiento diario de fibra soluble e insoluble para nutrir la microbiota intestinal, normalizar el colesterol y regular el tránsito gastrointestinal.

### Cómo usar

1. Añade verduras en cada comida: Consume al menos 400–500 g de verduras sin almidón y hortalizas al día (regla del plato de Harvard).
2. Cambia cereales refinados por integrales: Elige trigo sarraceno, quinoa, copos de avena enteros, cebada y pan integral en lugar de arroz blanco o harinas refinadas.
3. Incorpora semillas y legumbres: Una cucharada sopera de semillas de chía o lino molido, junto con una ración de lentejas, aporta de 8 a 12 g de fibra de alta calidad.

### Método y fórmula

Basada en estándares de la OMS y la EFSA (14 g de fibra por cada 1000 kcal, mínimo 25 g para mujeres y 38 g para hombres). Calcula el agua adicional requerida (+40 ml por gramo de fibra) y adapta recomendaciones en SII.

Fibra objetivo = max(25/38 g, Calorías × 0,014); Fracción soluble ~30–35%; Insoluble ~65–70%; Agua adicional = Fibra (g) × 40 ml.

### Limitaciones

En sobrecrecimiento bacteriano (SIBO) y brotes de colitis, el exceso de fibra fermentable puede agravar el meteorismo. La dosis de fibra debe aumentarse de forma gradual.

### Fuentes

- [EFSA Panel on Dietetic Products, Nutrition, and Allergies. Scientific Opinion on Dietary Reference Values for carbohydrates and dietary fibre. EFSA Journal, 2010;8(3):1462](https://doi.org/10.2903/j.efsa.2010.1462)
- [Reynolds A. et al. Carbohydrate quality and human health: a series of systematic reviews and meta-analyses. Lancet, 2019;393(10170):434–445](https://pubmed.ncbi.nlm.nih.gov/30638909/)
- [Stephen A.M. et al. Dietary fibre in Europe: current state of knowledge on definitions, sources, recommendations, intakes and relationships to health. Nutr Res Rev, 2017;30(2):149–190](https://pubmed.ncbi.nlm.nih.gov/28676135/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fiber-intake" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="fiber-intake" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fiber-intake?lang=es&theme=auto"
  title="Calculadora de ingesta de fibra dietética (OMS y EFSA)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
