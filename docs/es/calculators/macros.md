# Calculadora de macronutrientes

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/macros.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/macros.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`macros` · [NutriFit](https://nutrifit.health/es/calculators/macros)

Reparte las calorías diarias entre proteínas, grasas e hidratos de carbono según el peso corporal y el objetivo, en gramos, calorías y porcentajes.

### Cómo usar

1. Elige el método de cálculo: Indica tu objetivo calórico actual o permite que NutriFit calcule tu Gasto Energético Diario Total (TDEE) según tu edad, sexo, altura, peso y nivel de actividad.
2. Selecciona tu objetivo y peso corporal: Elige pérdida de peso (déficit del 20%), mantenimiento o ganancia muscular (superávit del 15%). Puedes ingresar el peso en kilogramos o libras.
3. Obtén tu distribución personalizada de macros: Consulta al instante la cantidad recomendada de proteínas, grasas y carbohidratos en gramos, calorías y porcentaje de la energía total.

### Método y fórmula

Las proteínas y las grasas se calculan a partir del peso corporal y no como porcentaje de las calorías: son necesidades fisiológicas que no deben variar con la ingesta. La proteína sigue el posicionamiento de la ISSN (1,4–2,4 g/kg según el objetivo). La grasa se estima en un rango práctico de 0,8–1,2 g/kg, y el porcentaje de energía resultante se compara con el rango de referencia AMDR del 20–35%. Los hidratos reciben las calorías restantes: cubren el entrenamiento y el trabajo del cerebro.

Proteína(g) = peso × factor del objetivo; Grasa(g) = peso × 0,8…1,2; Hidratos(g) = (calorías − proteína × 4 − grasa × 9) / 4

### Limitaciones

Calcular sobre el peso total sobreestima la proteína en obesidad marcada: en ese caso conviene usar la masa magra. El esquema no contempla el reparto por comidas, la fibra ni la tolerancia individual a los hidratos.

### Fuentes

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: Protein and Exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
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
  title="Calculadora de macronutrientes" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
