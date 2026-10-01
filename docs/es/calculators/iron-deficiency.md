# Calculadora de déficit de hierro: TSAT, ferritina y déficit de Ganzoni

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/iron-deficiency.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/iron-deficiency.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`iron-deficiency` · [NutriFit](https://nutrifit.health/es/calculators/iron-deficiency)

Saturación de transferrina, umbral de ferritina ajustado por PCR, estadio del déficit de hierro (latente, sin anemia, ferropénica, de inflamación) y déficit calculado por Ganzoni.

### Cómo usar

1. 1. Reúna cuatro parámetros: Ferritina, hierro sérico, CTFH (o transferrina) y hemoglobina. Todos de una misma extracción matutina en ayunas, sin tomar hierro en las 24 horas previas.
2. 2. Añada la PCR: Sin PCR, una ferritina normal puede tomarse por ausencia de déficit durante una inflamación activa. La calculadora sube el umbral de ferritina a 100 µg/L si la PCR supera 5 mg/L.
3. 3. Lea el estadio: El déficit de hierro avanza por escalones: primero se agotan los depósitos (ferritina), luego cae el transporte (TSAT) y solo después la hemoglobina. La anemia es la última etapa.

### Método y fórmula

La ferritina refleja los depósitos de hierro, pero sube con la inflamación, por lo que la OMS 2020 recomienda un umbral de 15 µg/L para depósitos agotados, un umbral clínico de 30 µg/L y 70–100 µg/L con PCR elevada. La saturación de transferrina (TSAT) es la fracción de la proteína transportadora ocupada por hierro: por debajo del 20 % indica falta de hierro para la eritropoyesis sea cual sea la causa. Combinar ferritina, TSAT y hemoglobina permite distinguir déficit latente, déficit sin anemia, anemia ferropénica y anemia de inflamación crónica. La fórmula de Ganzoni (1970) estima el hierro total necesario para recuperar la hemoglobina y los depósitos; se usa para dimensionar el hierro intravenoso.

TSAT (%) = Hierro sérico / CTFH × 100
CTFH (µmol/L) ≈ Transferrina (g/L) × 25,1
Déficit de hierro (mg, Ganzoni) = Peso (kg) × (Hb objetivo − Hb, g/dL) × 2,4 + Depósitos (500 mg con peso ≥ 35 kg)
Conversión: hierro µg/dL × 0,179 = µmol/L; Hb g/L / 10 = g/dL

### Limitaciones

El hierro sérico oscila a lo largo del día y tras las comidas: se extrae por la mañana en ayunas; la TSAT no es fiable en inflamación aguda ni tras tomar hierro la víspera. La ferritina sube con inflamación, hepatopatía, tumores y síndrome metabólico, por lo que con PCR por encima de 5 mg/L la calculadora eleva el umbral a 100 µg/L. La fórmula de Ganzoni asume una hemoglobina objetivo de 15 g/dL y depósitos de 500 mg; el médico los ajusta individualmente. El resultado no sustituye la consulta hematológica.

### Fuentes

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni A.M. Intravenous iron-dextran: therapeutic and experimental possibilities. Schweiz Med Wochenschr, 1970;100(7):301–303](https://pubmed.ncbi.nlm.nih.gov/5413918/)
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
