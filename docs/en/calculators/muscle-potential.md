# Casey Butt anthropometric model

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/muscle-potential.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/muscle-potential.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md)

[← Calculator catalog](../CALCULATORS.md)

`muscle-potential` · [NutriFit](https://nutrifit.health/calculators/muscle-potential)

Heuristic estimates of mass and girths from height, wrist, ankle and assumed body fat. The original girths describe male bodybuilders at about 8–10% fat. Berkhan: separate reference of height (cm) − 100 kg.

### Usage

1. Enter the starting values: Heuristic estimates of mass and girths from height, wrist, ankle and assumed body fat. The original girths describe male bodybuilders at about 8–10% fat. Berkhan: separate reference of height (cm) − 100 kg.
2. Adjust the parameters: Max LBM = Height^1.5 × [sqrt(Wrist)/22.6670 + sqrt(Ankle)/17.0104] × [(BodyFat%/224) + 1]; Berkhan Contest Weight (~5% BF) = Height (cm) − 100.
3. Read the result: The male sample does not establish female norms. The model does not measure genetics, prove a muscular ceiling or predict time to achievement. Selected body fat is an assumption, not a recommended target.

### Method and formula

Heuristic estimates of mass and girths from height, wrist, ankle and assumed body fat. The original girths describe male bodybuilders at about 8–10% fat. Berkhan: separate reference of height (cm) − 100 kg.

Max LBM = Height^1.5 × [sqrt(Wrist)/22.6670 + sqrt(Ankle)/17.0104] × [(BodyFat%/224) + 1]; Berkhan Contest Weight (~5% BF) = Height (cm) − 100.

### Limitations

The male sample does not establish female norms. The model does not measure genetics, prove a muscular ceiling or predict time to achievement. Selected body fat is an assumption, not a recommended target.

### Sources

- [Casey Butt. Your Maximum Muscular Bodyweight and Measurements. Авторский текст, архивная копия.](https://forum.steelfactor.ru/index.php?app=core&attach_id=540052&module=attach&section=attach)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri EM et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995](https://pubmed.ncbi.nlm.nih.gov/7496846/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="muscle-potential" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="muscle-potential" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/muscle-potential?lang=en&theme=auto"
  title="Casey Butt anthropometric model" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
