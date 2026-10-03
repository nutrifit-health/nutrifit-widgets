# Fat-free mass index (FFMI)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ffmi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ffmi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ffmi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ffmi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ffmi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ffmi.md)

[← Calculator catalog](../CALCULATORS.md)

`ffmi` · [NutriFit](https://nutrifit.health/calculators/ffmi)

Fat-free mass = weight × (1 − body fat percentage / 100); FFMI = fat-free mass / height², with height in metres. For men: normalized FFMI = FFMI + 6.3 × (1.8 − height), following the Kouri (1995) abstract.

### Usage

1. Enter the starting values: Fat-free mass = weight × (1 − body fat percentage / 100); FFMI = fat-free mass / height², with height in metres. For men: normalized FFMI = FFMI + 6.3 × (1.8 − height), following the Kouri (1995) abstract.
2. Adjust the parameters: Fat-free mass = weight × (1 − body fat percentage / 100); FFMI = fat-free mass / height², with height in metres. For men: normalized FFMI = FFMI + 6.3 × (1.8 − height), following the Kouri (1995) abstract.
3. Read the result: The original study included men. Normalization is not calculated for women. The value depends on body fat estimation accuracy; it does not diagnose steroid use, establish a genetic limit or define a universal health category.

### Method and formula

Fat-free mass = weight × (1 − body fat percentage / 100); FFMI = fat-free mass / height², with height in metres. For men: normalized FFMI = FFMI + 6.3 × (1.8 − height), following the Kouri (1995) abstract.

Fat-free mass = weight × (1 − body fat percentage / 100); FFMI = fat-free mass / height², with height in metres. For men: normalized FFMI = FFMI + 6.3 × (1.8 − height), following the Kouri (1995) abstract.

### Limitations

The original study included men. Normalization is not calculated for women. The value depends on body fat estimation accuracy; it does not diagnose steroid use, establish a genetic limit or define a universal health category.

### Sources

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
  return <CalculatorFrame calculator="ffmi" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="ffmi" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ffmi?lang=en&theme=auto"
  title="Fat-free mass index (FFMI)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
