# Calculadora de dosis de vitamina D según el nivel de 25(OH)D

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vitamin-d-dose.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vitamin-d-dose.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vitamin-d-dose.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vitamin-d-dose.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vitamin-d-dose.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vitamin-d-dose.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`vitamin-d-dose` · [NutriFit](https://nutrifit.health/es/calculators/vitamin-d-dose)

Dosis de carga según la fórmula de van Groningen y de mantenimiento según la Endocrine Society, ajustadas por peso y obesidad; estado de 25(OH)D y plazo del control.

### Cómo usar

1. 1. Mida la 25(OH)D: Precisamente la 25-hidroxivitamina D (calcidiol), no la 1,25(OH)₂D. Las unidades del informe son nmol/L o ng/mL; elija la correcta y la calculadora convierte.
2. 2. Elija el objetivo: 75 nmol/L (30 ng/mL) es la referencia de la Endocrine Society para efectos extraóseos. 50 nmol/L basta para el hueso según el IOM. No es necesario superar 100 nmol/L.
3. 3. Indique peso y talla: La vitamina D es liposoluble y se distribuye en el tejido adiposo, por lo que la dosis depende del peso, y en obesidad la de mantenimiento se multiplica por 2–3.

### Método y fórmula

El nivel de 25-hidroxivitamina D es el único marcador válido del estado de vitamina D. La dosis de carga se calcula con la fórmula de van Groningen (2010), obtenida en 208 pacientes con déficit: en total 40 UI por cada nmol/L de diferencia entre el objetivo y el nivel actual por cada kilogramo de peso, con un máximo de 300 000 UI. La calculadora la reparte en 8 semanas de toma diaria o semanal. La dosis de mantenimiento es de 1500–2000 UI/día según la Endocrine Society, 2–3 veces mayor en obesidad (IMC ≥ 30) por el secuestro de la vitamina en el tejido adiposo. Control a las 12 semanas de la carga.

Dosis de carga (UI) = 40 × (25(OH)D objetivo − 25(OH)D actual, nmol/L) × Peso (kg), máximo 300 000 UI
Dosis diaria = Dosis de carga / 56 días;  Dosis semanal = Dosis de carga / 8
Mantenimiento = 2000 UI/día (× 2,5 con IMC ≥ 30)
Conversión: 1 ng/mL = 2,496 nmol/L; 1 µg de colecalciferol = 40 UI

### Limitaciones

La fórmula está validada en adultos sin malabsorción ni insuficiencia renal. En hipercalcemia, sarcoidosis y otras granulomatosis, ERC 4–5, malabsorción, embarazo y con tiazidas o anticonvulsivantes, solo el médico fija la dosis. Niveles por encima de 125 nmol/L no aportan beneficio adicional; por encima de 250 nmol/L hay riesgo de toxicidad. La calculadora no sustituye la prescripción médica ni tiene en cuenta la vitamina D de otros suplementos y fármacos.

### Fuentes

- [van Groningen L. et al. Cholecalciferol loading dose guideline for vitamin D-deficient adults. Eur J Endocrinol, 2010;162(4):805–811](https://pubmed.ncbi.nlm.nih.gov/20139241/)
- [Endocrine Society. Vitamin D for the Prevention of Disease: Clinical Practice Guideline, 2024](https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vitamin-d-dose" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="vitamin-d-dose" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vitamin-d-dose?lang=es&theme=auto"
  title="Calculadora de dosis de vitamina D según el nivel de 25(OH)D" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
