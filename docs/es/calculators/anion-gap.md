# Calculadora de anión gap y delta ratio

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/anion-gap.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/anion-gap.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

`anion-gap` · [NutriFit](https://nutrifit.health/es/calculators/anion-gap)

Anión gap corregido por albúmina (Figge) y delta ratio ΔAG/ΔHCO₃ para distinguir la acidosis con anión gap elevado y normal.

### Cómo usar

1. 1. Tome los electrolitos de la misma muestra: Sodio, cloro y bicarbonato (o CO₂ total) deben proceder de la misma extracción, idealmente junto con la gasometría. Muestras distintas dan un gap sin sentido.
2. 2. Añada la albúmina: En pacientes de UCI, cirrosis, síndrome nefrótico y desnutrición la albúmina suele ser de 20–30 g/L: sin corrección, un anión gap elevado se disfraza de normal.
3. 3. Interprete el delta ratio en contexto: El delta ratio ayuda a ver un segundo trastorno (pérdida de bicarbonato o alcalosis) tras una acidosis con AG elevado, pero necesita pH, lactato y cuadro clínico.

### Método y fórmula

El anión gap es la diferencia entre los cationes y aniones séricos medidos, y refleja los aniones «no medidos»: fosfatos, sulfatos, ácidos orgánicos y la albúmina con carga negativa. En la acidosis metabólica aumenta si se acumulan ácidos (lactato, cetonas, toxinas urémicas, alcoholes tóxicos) y se mantiene normal si se pierde bicarbonato (diarrea, acidosis tubular renal) y lo sustituye el cloro. Como la albúmina es el principal anión no medido, en la hipoalbuminemia el gap se reduce falsamente: Figge (1998) propuso una corrección de 2,5 mmol/L por cada 1 g/dL de descenso de la albúmina. El delta ratio compara el aumento del gap con la caída del bicarbonato y detecta trastornos mixtos.

Anión gap (AG) = Na⁺ − (Cl⁻ + HCO₃⁻), mmol/L; referencia 8–12 sin potasio
AG corregido = AG + 0,25 × (40 − Albúmina, g/L)   [= AG + 2,5 × (4 − Albúmina, g/dL)]
Delta ratio = (AG corregido − 12) / (24 − HCO₃⁻)
< 0,4 acidosis hiperclorémica; 0,4–0,8 mixta; 0,8–2,0 acidosis pura con AG elevado; > 2,0 alcalosis metabólica concomitante

### Limitaciones

La referencia del anión gap depende del analizador: los electrodos selectivos de iones modernos dan 3–11 mmol/L; los métodos antiguos, 8–16. Consulte la referencia de su laboratorio. El cálculo excluye el potasio; si su laboratorio lo incluye, la referencia es 4–5 mayor. El delta ratio es una orientación aproximada que requiere contexto (pH, pCO₂, lactato, cetonas). La calculadora está pensada para la interpretación de trastornos ácido-base por profesionales y no sustituye la gasometría.

### Fuentes

- [Kraut J.A., Madias N.E. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007;2(1):162–174](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J., Jabor A., Kazda A., Fencl V. Anion gap and hypoalbuminemia. Crit Care Med, 1998;26(11):1807–1810](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K., de Vries A.P., Gans R.O. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014;371(15):1434–1445](https://pubmed.ncbi.nlm.nih.gov/25295502/)

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="anion-gap" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="anion-gap" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/anion-gap?lang=es&theme=auto"
  title="Calculadora de anión gap y delta ratio" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
