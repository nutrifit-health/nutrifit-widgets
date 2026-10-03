# Calculadora de déficit de hierro: TSAT, ferritina y déficit de Ganzoni

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/iron-deficiency.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/iron-deficiency.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`iron-deficiency` · [NutriFit](https://nutrifit.health/es/calculators/iron-deficiency)

TSAT = hierro / capacidad total de fijación × 100%. Modelo de Ganzoni: peso × (15 − Hb en g/dL) × 2,4 + 500 mg para peso ≥ 35 kg. Solo aparece si Hb y ferritina están por debajo de los umbrales seleccionados.

### Uso

1. Introduzca los datos iniciales: TSAT = hierro / capacidad total de fijación × 100%. Modelo de Ganzoni: peso × (15 − Hb en g/dL) × 2,4 + 500 mg para peso ≥ 35 kg. Solo aparece si Hb y ferritina están por debajo de los umbrales seleccionados.
2. Ajuste los parámetros: TSAT = hierro / capacidad total de fijación × 100%. Modelo de Ganzoni: peso × (15 − Hb en g/dL) × 2,4 + 500 mg para peso ≥ 35 kg. Solo aparece si Hb y ferritina están por debajo de los umbrales seleccionados.
TIBC (µmol/L) = transferrin (g/L) × 25.1. Iron: µg/dL × 0.179 = µmol/L. Hb: g/L ÷ 10 = g/dL.
3. Lea el resultado: Son patrones descriptivos, no diagnósticos. Umbrales de Hb: 130 g/L en hombres y 120 g/L en mujeres no embarazadas; ferritina OMS 2020: 15 µg/L, o 70 µg/L con PCR > 5 mg/L. La Hb objetivo, el peso y los depósitos de Ganzoni requieren selección individual; no es una dosis de medicamento.

### Método y fórmula

TSAT = hierro / capacidad total de fijación × 100%. Modelo de Ganzoni: peso × (15 − Hb en g/dL) × 2,4 + 500 mg para peso ≥ 35 kg. Solo aparece si Hb y ferritina están por debajo de los umbrales seleccionados.

TSAT = hierro / capacidad total de fijación × 100%. Modelo de Ganzoni: peso × (15 − Hb en g/dL) × 2,4 + 500 mg para peso ≥ 35 kg. Solo aparece si Hb y ferritina están por debajo de los umbrales seleccionados.
TIBC (µmol/L) = transferrin (g/L) × 25.1. Iron: µg/dL × 0.179 = µmol/L. Hb: g/L ÷ 10 = g/dL.

### Limitaciones

Son patrones descriptivos, no diagnósticos. Umbrales de Hb: 130 g/L en hombres y 120 g/L en mujeres no embarazadas; ferritina OMS 2020: 15 µg/L, o 70 µg/L con PCR > 5 mg/L. La Hb objetivo, el peso y los depósitos de Ganzoni requieren selección individual; no es una dosis de medicamento.

### Fuentes

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni AM. et al. [Intravenous iron-dextran: therapeutic and experimental possibilities]. Schweiz Med Wochenschr, 1970](https://pubmed.ncbi.nlm.nih.gov/5413918/)
- [Venofer. Summary of Product Characteristics: Ganzoni formula and iron stores](https://www.medicines.org.uk/emc/product/5911/smpc)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="iron-deficiency" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="iron-deficiency" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/iron-deficiency?lang=es&theme=auto"
  title="Calculadora de déficit de hierro: TSAT, ferritina y déficit de Ganzoni" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
