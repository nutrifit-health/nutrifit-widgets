# Calculadora de VO2máx (consumo máximo de oxígeno)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vo2max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vo2max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`vo2max` · [NutriFit](https://nutrifit.health/es/calculators/vo2max)

Evalúa la potencia aeróbica y la capacidad cardiorrespiratoria mediante protocolos de campo validados sin necesidad de equipamiento de laboratorio.

### Cómo usar

1. Seleccione el protocolo adecuado: Para corredores habituales se recomienda el test de Cooper de 12 minutos. Para principiantes, personas mayores o en rehabilitación, el test de Rockport es el más seguro.
2. Registre los parámetros con precisión: En Cooper, mida la distancia exacta en pista de atletismo o con GPS. En Rockport, cronometre el tiempo exacto en 1.609 metros y tome el pulso al cruzar la meta.
3. Interprete el baremo y los ritmos de carrera: La calculadora clasificará su nivel según las tablas del Cooper Institute y proyectará ritmos de entrenamiento para 5K y 10K.

### Método y fórmula

La calculadora integra tres métodos científicos de campo: el test de Cooper (carrera de 12 min), el test de Rockport (caminata rápida de 1 milla) y la relación de frecuencia cardíaca de Uth et al.

Cooper: VO2máx = (Distancia, m − 504,9) / 44,73; Rockport: 132,853 − 0,0769 × Peso(lbs) − 0,3877 × Edad + 6,315 × Sexo − 3,2649 × Tiempo − 0,1565 × FC; Uth: 15 × (FCmáx / FCrep).

### Limitaciones

Las pruebas de campo son estimaciones indirectas con un error típico del 5–10%. La dosificación del ritmo, el terreno, la climatología y la cafeína pueden alterar los resultados.

### Fuentes

- [Cooper K.H. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968;203(3):201–204](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline G.M. et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987;19(3):253–259](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N. et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004;91(1):111–115](https://pubmed.ncbi.nlm.nih.gov/14624296/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vo2max" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="vo2max" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vo2max?lang=es&theme=auto"
  title="Calculadora de VO2máx (consumo máximo de oxígeno)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
