# Calculadora de FFMI (índice de masa libre de grasa)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ffmi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ffmi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ffmi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ffmi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ffmi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ffmi.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`ffmi` · [NutriFit](https://nutrifit.health/es/calculators/ffmi)

Determina la cantidad de masa muscular magra en relación con la estatura, diferenciando la hipertrofia muscular real del acúmulo de grasa.

### Cómo usar

1. Mida la estatura y el peso con exactitud: Pésese por la mañana en ayunas tras evacuar. Mida la estatura descalzo contra una superficie vertical.
2. Determine el porcentaje de grasa: Utilice un protocolo de pliegues cutáneos (3–7 pliegues), bioimpedancia multifrecuencia o exploración DEXA.
3. Interprete el índice normalizado: El índice normalizado corrige la distorsión matemática en personas altas (>1,80 m) o bajas (<1,70 m), permitiendo una comparación ecuánime.

### Método y fórmula

El IMC tradicional no distingue entre grasa y masa muscular. El índice de masa libre de grasa (FFMI) aísla el tejido magro e incorpora un factor de normalización por estatura (Kouri et al., 1995) para comparar atletas de distinta altura.

Masa magra (LBM) = Peso × (1 − % Grasa / 100); FFMI base = LBM / Altura(m)²; FFMI normalizado = FFMI base + 6,1 × (1,80 − Altura(m)).

### Limitaciones

La precisión depende directamente del método de estimación de grasa corporal. La densitometría DEXA y el pesaje hidrostático ofrecen la máxima fiabilidad.

### Fuentes

- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)
- [Trexler E.T. et al. Physiological changes after a female bodybuilding contest preparation. J Int Soc Sports Nutr, 2017;14:34](https://pubmed.ncbi.nlm.nih.gov/28878643/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ffmi" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="ffmi" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ffmi?lang=es&theme=auto"
  title="Calculadora de FFMI (índice de masa libre de grasa)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
