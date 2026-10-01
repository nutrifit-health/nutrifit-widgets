# Calculadora de calorías diarias (TDEE)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tdee.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tdee.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`tdee` · [NutriFit](https://nutrifit.health/es/calculators/tdee)

Calcula el metabolismo basal y el gasto energético diario total, además de las calorías para perder, mantener o ganar peso.

### Cómo usar

1. Introduce tus datos corporales: Ingresa tu peso exacto, altura, sexo y edad para calcular tu tasa metabólica basal (BMR).
2. Selecciona tu nivel de actividad: Sé honesto con tu rutina semanal. Si trabajas sentado, no sobreestimes tu actividad sin deporte regular.
3. Consulta los objetivos: El mantenimiento corresponde al TDEE; el objetivo para perder peso es un 20% inferior y para ganar peso un 15% superior.

### Método y fórmula

El metabolismo basal (TMB) se calcula con la ecuación de Mifflin-St Jeor de 1990, el estándar actual para adultos sanos. El gasto total diario (TDEE) es la TMB multiplicada por el factor de actividad. Las calorías para perder peso son un 20% por debajo del TDEE y las de ganancia un 15% por encima: estos ritmos modifican el peso sin perder tejido muscular y sin cambios bruscos.

TMB (hombres) = 10 × peso(kg) + 6,25 × estatura(cm) − 5 × edad + 5; TMB (mujeres) = 10 × peso(kg) + 6,25 × estatura(cm) − 5 × edad − 161; TDEE = TMB × factor de actividad

### Limitaciones

La ecuación se obtuvo en adultos sanos y tiene un error de alrededor del ±10%. No considera la composición corporal: con mucha masa muscular el resultado se subestima y con obesidad se sobreestima. El embarazo, la infancia, el deporte de élite y las enfermedades tiroideas requieren métodos específicos.

### Fuentes

- [Mifflin M.D., St Jeor S.T. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tdee" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="tdee" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=es&theme=auto"
  title="Calculadora de calorías diarias (TDEE)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
