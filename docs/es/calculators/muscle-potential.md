# Calculadora de potencial muscular (Casey Butt y Martin Berkhan)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/muscle-potential.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/muscle-potential.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`muscle-potential` · [NutriFit](https://nutrifit.health/es/calculators/muscle-potential)

Estima la masa libre de grasa y los perímetros musculares máximos alcanzables (pecho, brazos, muslos) sin uso de esteroides anabólicos.

### Cómo usar

1. Mida con precisión su estructura ósea: La muñeca se mide entre la mano y la apófisis estiloides cubital. El tobillo en el punto más estrecho sobre los maléolos.
2. Indique el porcentaje de grasa corporal deseado: Para mantenerse en excelente forma todo el año apunte al 10–12%; para definición de competición, al 6–8%.
3. Compare sus medidas actuales con el máximo: La calculadora mostrará los perímetros límite de bíceps, pecho y muslos, sirviendo de guía realista para su físico.

### Método y fórmula

Las investigaciones de Casey Butt, Ph.D., analizaron durante 6 años la antropometría de campeones mundiales de culturismo de la era preesteroidea (años 40 y 50). El modelo demostró que la masa muscular natural está limitada por el grosor del esqueleto óseo: los perímetros de muñeca y tobillo.

Max LBM = Altura^1,5 × [sqrt(Muñeca)/22,6670 + sqrt(Tobillo)/17,0104] × [(% Grasa/224) + 1]; Peso de competición de Berkhan (~5% GC) = Altura (cm) − 100.

### Limitaciones

Modelo desarrollado para varones. En mujeres, debido al perfil hormonal, la masa muscular límite es aproximadamente el 65–70% de los valores masculinos. Asume años de entrenamiento progresivo y nutrición óptima.

### Fuentes

- [Butt C. Your Maximum Muscular Potential (The Casey Butt Model). The WeighTrainer, 2009](https://www.weightrainer.net/potential.html)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="muscle-potential" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="muscle-potential" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/muscle-potential?lang=es&theme=auto"
  title="Calculadora de potencial muscular (Casey Butt y Martin Berkhan)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
