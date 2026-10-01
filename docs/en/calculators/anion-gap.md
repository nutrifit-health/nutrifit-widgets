# Anion Gap and Delta Ratio Calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/anion-gap.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/anion-gap.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md)

[← Calculator catalog](../CALCULATORS.md)

`anion-gap` · [NutriFit](https://nutrifit.health/calculators/anion-gap)

Anion gap corrected for albumin (Figge) and the ΔAG/ΔHCO₃ delta ratio to distinguish high- and normal-anion-gap acidosis.

### How to use

1. Take electrolytes from one sample: Sodium, chloride and bicarbonate (or total CO₂) must come from one draw, ideally alongside blood gases. Different samples give a meaningless gap.
2. Add albumin: In ICU patients, cirrhosis, nephrotic syndrome and wasting albumin is often 20–30 g/L: without correction a high anion gap masquerades as normal.
3. Interpret the delta ratio in context: The delta ratio helps spot a second disorder (bicarbonate loss or alkalosis) behind a high-AG acidosis, but needs pH, lactate and the clinical picture.

### Method and formula

The anion gap is the difference between measured serum cations and anions, reflecting "unmeasured" anions: phosphates, sulfates, organic acids and negatively charged albumin. In metabolic acidosis it rises if acids accumulate (lactate, ketones, uremic toxins, toxic alcohols) and stays normal if bicarbonate is lost (diarrhea, renal tubular acidosis) and replaced by chloride. Since albumin is the main unmeasured anion, hypoalbuminemia falsely lowers the gap: Figge (1998) proposed a correction of 2.5 mmol/L per 1 g/dL fall in albumin. The delta ratio compares the rise in the gap with the fall in bicarbonate and reveals mixed disorders.

AG = Na − (Cl + HCO₃), mmol/L, without potassium.
Figge adjustment: AG + 0.25 × (40 − albumin, g/L).
Delta ratio = (adjusted AG − 12) / (24 − HCO₃).
Calculated only if AG > 12 and HCO₃ < 24. Delta-ratio bands suggest possible mixed disturbances; they are not diagnoses.

### Limitations

The anion gap reference depends on the analyzer: modern ion-selective electrodes give 3–11 mmol/L, older methods 8–16. Check your lab’s reference. The calculation excludes potassium; if your lab includes it, the reference is 4–5 higher. The delta ratio is a rough guide that needs context (pH, pCO₂, lactate, ketones). The calculator is meant for interpretation of acid-base disorders by professionals and does not replace blood gas analysis.

### Sources

- [Kraut J.A., Madias N.E. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007;2(1):162–174](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J., Jabor A., Kazda A., Fencl V. Anion gap and hypoalbuminemia. Crit Care Med, 1998;26(11):1807–1810](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K., de Vries A.P., Gans R.O. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014;371(15):1434–1445](https://pubmed.ncbi.nlm.nih.gov/25295502/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="anion-gap" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="anion-gap" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/anion-gap?lang=en&theme=auto"
  title="Anion Gap and Delta Ratio Calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
