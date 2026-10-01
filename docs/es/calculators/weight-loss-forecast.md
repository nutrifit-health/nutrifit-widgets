# Calculadora de pronóstico dinámico de pérdida de peso (modelo de Kevin Hall)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/weight-loss-forecast.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/weight-loss-forecast.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/es/calculators/weight-loss-forecast)

Genera una trayectoria no lineal y realista de pérdida de peso basada en el modelo dinámico de Kevin Hall (NIH), considerando la ralentización metabólica y la masa magra.

### Cómo usar

1. Mantén un déficit moderado (15–20%): Un déficit de 300–500 kcal resulta sostenible, protege el tejido muscular del catabolismo y minimiza los abandonos.
2. Consume suficiente proteína: Una pauta de 1,8–2,4 g/kg de proteína en déficit asegura que el 85–90% del peso perdido provenga de grasa subcutánea y visceral.
3. Planifica descansos dietéticos (Diet Breaks): Cada 8–12 semanas de déficit, pasa 1–2 semanas comiendo en mantenimiento (TDEE). Esto recupera los niveles de leptina y hormona tiroidea T3.

### Método y fórmula

Sustituye la regla estática de Wishnofsky (1958, «7700 kcal = 1 kg») por el modelo de balance energético dinámico (Hall et al., The Lancet 2011; NIH/NIDDK). Incorpora la reducción metabólica (~22 kcal/kg perdido) y la partición de Forbes.

Adaptación metabólica = 22 kcal/kg perdido + termogénesis adaptativa; Déficit efectivo = Déficit prescrito − Adaptación; Partición de grasa p = Forbes(F, W); Peso dinámico(t) iterado semana a semana.

### Limitaciones

Asume un cumplimiento estricto del déficit prescrito. Las oscilaciones de agua por cortisol o sodio pueden ocultar temporalmente la pérdida de grasa en la báscula.

### Fuentes

- [Hall K.D. et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011;378(9793):826–837](https://pubmed.ncbi.nlm.nih.gov/21872751/)
- [Thomas D.M. et al. Can a weight loss of one pound a week be achieved with a 3,500-kcal deficit? Commentary on a commonly accepted rule. Int J Obes, 2013;37(12):1611–1613](https://pubmed.ncbi.nlm.nih.gov/23628852/)
- [Forbes G.B. Lean body mass-body fat interrelationships in humans. Nutr Rev, 1987;45(8):225–231](https://pubmed.ncbi.nlm.nih.gov/3306482/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="weight-loss-forecast" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="weight-loss-forecast" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/weight-loss-forecast?lang=es&theme=auto"
  title="Calculadora de pronóstico dinámico de pérdida de peso (modelo de Kevin Hall)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
