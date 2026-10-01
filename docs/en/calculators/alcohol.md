# Alcohol Clearance & Sobriety Calculator (Widmark)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/alcohol.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/alcohol.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/alcohol.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/alcohol.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/alcohol.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/alcohol.md)

[← Calculator catalog](../CALCULATORS.md)

`alcohol` · [NutriFit](https://nutrifit.health/calculators/alcohol)

Calculates peak and current blood alcohol concentration (BAC in ‰), precise time to complete sobriety, and empty caloric load from ethanol.

### How to use

1. Gastric and intestinal absorption: Approximately 20% of alcohol is absorbed through gastric mucosa, while 80% is rapidly absorbed in the duodenum and jejunum. Food delays gastric emptying, flattening peak BAC.
2. Hepatic enzymatic breakdown: The liver metabolizes up to 95% of ethanol at a constant rate via alcohol dehydrogenase (ADH) into toxic acetaldehyde, which aldehyde dehydrogenase (ALDH) rapidly converts to acetate.
3. Zero-order linear elimination: Hepatic clearance saturates quickly (zero-order kinetics): the rate of blood alcohol decline is strictly ~0.15 ‰ per hour regardless of how much was consumed.

### Method and formula

Based on Erik Widmark’s pharmacokinetic model (1932) with updates by A.W. Jones (2010). Factors in gender-specific body water distribution (r = 0.68 for men, 0.55 for women), gastric ADH oxidation, and linear elimination rate (0.15 ‰/h).

Pure Ethanol (g) = Volume (mL) × (ABV% / 100) × 0.789; Peak BAC = (Ethanol × Absorption) / (Weight × r); Current BAC = max(0, Peak BAC − 0.15 × Hours); Time = Peak BAC / 0.15.

### Limitations

Metabolic rate varies (0.10–0.20 ‰/h) based on liver function and genetics. Results are educational and do not serve as legal evidence for operating motor vehicles.

### Sources

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones A.W. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework and pharmacokinetics. Forensic Sci Int, 2010;200(1-3):1–20](https://pubmed.ncbi.nlm.nih.gov/20434270/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="alcohol" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="alcohol" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/alcohol?lang=en&theme=auto"
  title="Alcohol Clearance &amp; Sobriety Calculator (Widmark)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
