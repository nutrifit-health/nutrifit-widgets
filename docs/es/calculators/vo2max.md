# Estimaciones de campo del VO2max

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vo2max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vo2max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`vo2max` · [NutriFit](https://nutrifit.health/es/calculators/vo2max)

Cooper: distancia en 12 minutos. Rockport: caminata rápida de 1 milla (1609,344 m), tiempo y frecuencia cardiaca final; validación original en adultos sanos de 30–69 años. Uth: 15,3 × FCmáx / FCreposo; estudiado en hombres bien entrenados de 21–51 años.

### Uso

1. Introduzca los datos iniciales: Cooper: distancia en 12 minutos. Rockport: caminata rápida de 1 milla (1609,344 m), tiempo y frecuencia cardiaca final; validación original en adultos sanos de 30–69 años. Uth: 15,3 × FCmáx / FCreposo; estudiado en hombres bien entrenados de 21–51 años.
2. Ajuste los parámetros: Cooper: distancia en 12 minutos. Rockport: caminata rápida de 1 milla (1609,344 m), tiempo y frecuencia cardiaca final; validación original en adultos sanos de 30–69 años. Uth: 15,3 × FCmáx / FCreposo; estudiado en hombres bien entrenados de 21–51 años.
3. Lea el resultado: Son estimaciones indirectas, no mediciones del intercambio gaseoso. Aquí Uth no se extrapola a mujeres, ni Rockport fuera del intervalo de edad indicado. Predecir la frecuencia máxima por edad añade incertidumbre. No se ofrecen estimaciones negativas, categorías de forma física ni ritmos de 5/10 km.

### Método y fórmula

Cooper: distancia en 12 minutos. Rockport: caminata rápida de 1 milla (1609,344 m), tiempo y frecuencia cardiaca final; validación original en adultos sanos de 30–69 años. Uth: 15,3 × FCmáx / FCreposo; estudiado en hombres bien entrenados de 21–51 años.

Cooper: distancia en 12 minutos. Rockport: caminata rápida de 1 milla (1609,344 m), tiempo y frecuencia cardiaca final; validación original en adultos sanos de 30–69 años. Uth: 15,3 × FCmáx / FCreposo; estudiado en hombres bien entrenados de 21–51 años.

### Limitaciones

Son estimaciones indirectas, no mediciones del intercambio gaseoso. Aquí Uth no se extrapola a mujeres, ni Rockport fuera del intervalo de edad indicado. Predecir la frecuencia máxima por edad añade incertidumbre. No se ofrecen estimaciones negativas, categorías de forma física ni ritmos de 5/10 km.

### Fuentes

- [Cooper KH. et al. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline GM et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004](https://pubmed.ncbi.nlm.nih.gov/14624296/)

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
  title="Estimaciones de campo del VO2max" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
