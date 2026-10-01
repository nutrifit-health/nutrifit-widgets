# Calculadora de zonas de frecuencia cardíaca

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/heart-rate-zones.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/heart-rate-zones.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`heart-rate-zones` · [NutriFit](https://nutrifit.health/es/calculators/heart-rate-zones)

Calcula los límites individuales de las 5 zonas de entrenamiento considerando la frecuencia cardíaca máxima y el pulso en reposo (método de la frecuencia cardíaca de reserva).

### Cómo usar

1. Mida su pulso en reposo por la mañana: Al despertar, sin levantarse de la cama, registre el pulso durante 60 segundos con pulsómetro o palpación durante 3 días y tome el promedio.
2. Calcule las zonas mediante la fórmula de Karvonen: La calculadora restará su pulso en reposo de la FCmáx para obtener su reserva cardíaca real.
3. Distribuya el volumen con la regla 80/20: Realice aproximadamente el 80% de sus entrenamientos en la Zona 2 y dedique el 20% restante a trabajos intensos en Zonas 4 y 5.

### Método y fórmula

El método de Karvonen utiliza la frecuencia cardíaca de reserva (FCR = FCmáx − FCreposo). Al considerar el pulso matutino en reposo, las zonas se adaptan al nivel real de condición aeróbica del atleta.

FCmáx (Tanaka) = 208 − 0,7 × Edad; FCR = FCmáx − FCreposo; FC objetivo = FCreposo + (% intensidad × FCR). Fórmula de Haskell: FCmáx = 220 − Edad.

### Limitaciones

Las fórmulas teóricas de FCmáx presentan una desviación estándar de ±10–12 ppm. Para deportistas de élite se recomienda una ergoespirometría directa de laboratorio.

### Fuentes

- [Tanaka H., Monahan K.D., Seals D.R. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001;37(1):153–156](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [Karvonen M.J., Kentala E., Mustala O. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957;35(3):307–315](https://pubmed.ncbi.nlm.nih.gov/13470504/)
- [American College of Sports Medicine. ACSM’s Guidelines for Exercise Testing and Prescription. 11th ed. Wolters Kluwer, 2021](https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="heart-rate-zones" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="heart-rate-zones" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/heart-rate-zones?lang=es&theme=auto"
  title="Calculadora de zonas de frecuencia cardíaca" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
