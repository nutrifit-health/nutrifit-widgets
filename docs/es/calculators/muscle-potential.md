# Modelo antropométrico de Casey Butt

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/muscle-potential.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/muscle-potential.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`muscle-potential` · [NutriFit](https://nutrifit.health/es/calculators/muscle-potential)

Estimaciones heurísticas de masa y perímetros según altura, muñeca, tobillo y grasa supuesta. Los perímetros originales describen hombres culturistas con aproximadamente 8–10% de grasa. Berkhan: referencia aparte de altura (cm) − 100 kg.

### Uso

1. Introduzca los datos iniciales: Estimaciones heurísticas de masa y perímetros según altura, muñeca, tobillo y grasa supuesta. Los perímetros originales describen hombres culturistas con aproximadamente 8–10% de grasa. Berkhan: referencia aparte de altura (cm) − 100 kg.
2. Ajuste los parámetros: Max LBM = Altura^1,5 × [sqrt(Muñeca)/22,6670 + sqrt(Tobillo)/17,0104] × [(% Grasa/224) + 1]; Peso de competición de Berkhan (~5% GC) = Altura (cm) − 100.
3. Lea el resultado: La muestra masculina no establece normas femeninas. El modelo no mide genética, demuestra un límite muscular ni predice plazos. La grasa indicada es un supuesto, no una meta recomendada.

### Método y fórmula

Estimaciones heurísticas de masa y perímetros según altura, muñeca, tobillo y grasa supuesta. Los perímetros originales describen hombres culturistas con aproximadamente 8–10% de grasa. Berkhan: referencia aparte de altura (cm) − 100 kg.

Max LBM = Altura^1,5 × [sqrt(Muñeca)/22,6670 + sqrt(Tobillo)/17,0104] × [(% Grasa/224) + 1]; Peso de competición de Berkhan (~5% GC) = Altura (cm) − 100.

### Limitaciones

La muestra masculina no establece normas femeninas. El modelo no mide genética, demuestra un límite muscular ni predice plazos. La grasa indicada es un supuesto, no una meta recomendada.

### Fuentes

- [Casey Butt. Your Maximum Muscular Bodyweight and Measurements. Авторский текст, архивная копия.](https://forum.steelfactor.ru/index.php?app=core&attach_id=540052&module=attach&section=attach)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri EM et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995](https://pubmed.ncbi.nlm.nih.gov/7496846/)

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
  title="Modelo antropométrico de Casey Butt" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
