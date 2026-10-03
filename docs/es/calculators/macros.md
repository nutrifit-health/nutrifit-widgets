# Planificador de macronutrientes del autor

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/macros.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/macros.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`macros` · [NutriFit](https://nutrifit.health/es/calculators/macros)

Proteína: 1,8–2,2 g/kg para perder, 1,4–1,8 para mantener, 1,8–2,4 para ganar; grasa 0,8–1,2 g/kg. Usa puntos medios; carbohidratos del resto calórico con factores 4/9/4 kcal/g.

### Uso

1. Introduzca los datos iniciales: Proteína: 1,8–2,2 g/kg para perder, 1,4–1,8 para mantener, 1,8–2,4 para ganar; grasa 0,8–1,2 g/kg. Usa puntos medios; carbohidratos del resto calórico con factores 4/9/4 kcal/g.
2. Ajuste los parámetros: Proteína: 1,8–2,2 g/kg para perder, 1,4–1,8 para mantener, 1,8–2,4 para ganar; grasa 0,8–1,2 g/kg. Usa puntos medios; carbohidratos del resto calórico con factores 4/9/4 kcal/g.
3. Lea el resultado: Es una distribución del autor, no normas textuales ISSN ni un mínimo fisiológico de grasa. No se muestra un plan completo si proteínas y grasas superan las calorías. AMDR de grasas 20–35% para adultos es otra referencia, no una prescripción individual.

### Método y fórmula

Proteína: 1,8–2,2 g/kg para perder, 1,4–1,8 para mantener, 1,8–2,4 para ganar; grasa 0,8–1,2 g/kg. Usa puntos medios; carbohidratos del resto calórico con factores 4/9/4 kcal/g.

Proteína(g) = peso × factor del objetivo; Grasa(g) = peso × 0,8…1,2; Hidratos(g) = (calorías − proteína × 4 − grasa × 9) / 4

### Limitaciones

Es una distribución del autor, no normas textuales ISSN ni un mínimo fisiológico de grasa. No se muestra un plan completo si proteínas y grasas superan las calorías. AMDR de grasas 20–35% para adultos es otra referencia, no una prescripción individual.

### Fuentes

- [Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids, 2005 (AMDR)](https://nap.nationalacademies.org/catalog/10490)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="macros" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="macros" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/macros?lang=es&theme=auto"
  title="Planificador de macronutrientes del autor" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
