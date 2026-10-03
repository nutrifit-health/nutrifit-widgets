# Calculadora de anión gap y delta ratio

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/anion-gap.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/anion-gap.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`anion-gap` · [NutriFit](https://nutrifit.health/es/calculators/anion-gap)

Brecha aniónica = Na − Cl − HCO₃; ajuste por albúmina = 0,25 × (40 − albúmina en g/L). Relación delta = (brecha corregida − referencia seleccionada) / (bicarbonato de referencia − HCO₃).

### Uso

1. Introduzca los datos iniciales: Brecha aniónica = Na − Cl − HCO₃; ajuste por albúmina = 0,25 × (40 − albúmina en g/L). Relación delta = (brecha corregida − referencia seleccionada) / (bicarbonato de referencia − HCO₃).
2. Ajuste los parámetros: Brecha aniónica = Na − Cl − HCO₃; ajuste por albúmina = 0,25 × (40 − albúmina en g/L). Relación delta = (brecha corregida − referencia seleccionada) / (bicarbonato de referencia − HCO₃).
Las referencias dependen del método del laboratorio. Delta solo se calcula con numerador y denominador positivos. Un número aislado no establece un diagnóstico sin pH, gases sanguíneos y contexto clínico.
3. Lea el resultado: Las referencias dependen del método del laboratorio. Delta solo se calcula con numerador y denominador positivos. Un número aislado no establece un diagnóstico sin pH, gases sanguíneos y contexto clínico.

### Método y fórmula

Brecha aniónica = Na − Cl − HCO₃; ajuste por albúmina = 0,25 × (40 − albúmina en g/L). Relación delta = (brecha corregida − referencia seleccionada) / (bicarbonato de referencia − HCO₃).

Brecha aniónica = Na − Cl − HCO₃; ajuste por albúmina = 0,25 × (40 − albúmina en g/L). Relación delta = (brecha corregida − referencia seleccionada) / (bicarbonato de referencia − HCO₃).
Las referencias dependen del método del laboratorio. Delta solo se calcula con numerador y denominador positivos. Un número aislado no establece un diagnóstico sin pH, gases sanguíneos y contexto clínico.

### Limitaciones

Las referencias dependen del método del laboratorio. Delta solo se calcula con numerador y denominador positivos. Un número aislado no establece un diagnóstico sin pH, gases sanguíneos y contexto clínico.

### Fuentes

- [Kraut JA et al. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J et al. Anion gap and hypoalbuminemia. Crit Care Med, 1998](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K et al. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014](https://pubmed.ncbi.nlm.nih.gov/25295502/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="anion-gap" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="anion-gap" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/anion-gap?lang=es&theme=auto"
  title="Calculadora de anión gap y delta ratio" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
