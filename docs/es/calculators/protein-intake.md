# Calculadora de ingesta diaria de proteínas (ISSN y ESPEN)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/protein-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/protein-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`protein-intake` · [NutriFit](https://nutrifit.health/es/calculators/protein-intake)

Determina la ingesta óptima diaria de proteínas según tus objetivos (pérdida de grasa, hipertrofia, salud en mayores de 65 años), patrón dietético y síntesis proteica muscular (MPS).

### Cómo usar

1. Conoce tu cifra objetivo: Introduce tu peso y tu objetivo. La calculadora fijará los gramos diarios y la porción recomendada por comida.
2. Distribuye 25–40 g por comida: Una toma de 30 g de proteína (queso fresco, 150 g de pechuga de pollo o pescado) activa el umbral de leucina para el anabolismo muscular.
3. Diversifica tus fuentes: Combina proteínas de origen animal (huevos, ave, pescado, lácteos) con opciones vegetales de calidad (tofu, lentejas, garbanzos, tempeh).

### Método y fórmula

Basada en los consensos clínicos de la Sociedad Internacional de Nutrición Deportiva (ISSN, 2017) y ESPEN. En personas con sobrepeso (IMC > 28), se utiliza el peso corporal ajustado (AdjBW) para prevenir la hiperfiltración renal.

Mantenimiento: 1,0–1,4 g/kg; Ganancia muscular: 1,6–2,2 g/kg; Definición / déficit: 2,0–2,4 g/kg; Resistencia: 1,2–1,6 g/kg; Mayores de 65 años: 1,2–1,5 g/kg; ERC (estadios 3–4): 0,6–0,8 g/kg. Vegetarianismo: +10%.

### Limitaciones

En caso de enfermedad renal crónica (ERC) con FG < 60 ml/min, la prescripción de proteínas debe estar estrictamente supervisada por un nefrólogo.

### Fuentes

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Deutz N.E. et al. Protein intake and exercise for optimal muscle function with aging: recommendations from the ESPEN Expert Group. Clin Nutr, 2014;33(6):929–936](https://pubmed.ncbi.nlm.nih.gov/24814383/)
- [Morton R.W. et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on gains in muscle mass and strength in healthy adults. Br J Sports Med, 2018;52(6):376–384](https://pubmed.ncbi.nlm.nih.gov/28698222/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="protein-intake" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="protein-intake" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/protein-intake?lang=es&theme=auto"
  title="Calculadora de ingesta diaria de proteínas (ISSN y ESPEN)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
