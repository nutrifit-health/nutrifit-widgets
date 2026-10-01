# Lab Unit Converter

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lab-unit-converter.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lab-unit-converter.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lab-unit-converter.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lab-unit-converter.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lab-unit-converter.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lab-unit-converter.md)

[← Calculator catalog](../CALCULATORS.md)

`lab-unit-converter` · [NutriFit](https://nutrifit.health/calculators/lab-unit-converter)

Conversion of 33 lab analytes between SI (mmol/L, µmol/L, nmol/L, pmol/L) and conventional units (mg/dL, ng/mL, pg/mL) by molar mass.

### How to use

1. Choose the analyte: The list has the 33 most common analytes — from glucose and cholesterol to vitamin D, testosterone and cortisol. Cholesterol, LDL and HDL share one factor.
2. Set the direction: SI → conventional if your report is in mmol/L or nmol/L and the reference from a foreign paper is in mg/dL or ng/mL. And vice versa if the test was done abroad.
3. Convert the reference range, not just the number: Reference intervals depend on the lab method. Convert the normal limits from your report too, so you compare the value against the right range.

### Method and formula

A factor converts mass concentration into molar concentration using molar mass and volume units. The tool uses common laboratory factors from AMA and Labcorp. Insulin and prolactin factors depend on assay calibration: you can enter your laboratory’s factor. For urea, mg/dL refers to BUN, the mass of urea nitrogen, not the mass of the whole urea molecule.

SI = conventional value × factor. Reverse conversion: SI ÷ factor. Check your laboratory’s factor for insulin and prolactin; mg/dL BUN and mg/dL urea are not interchangeable.

### Limitations

Unit conversion does not interpret results or diagnose. Reference intervals depend on the laboratory and method; convert their limits separately. Verify insulin and prolactin factors with the laboratory. BUN conversion is not suitable for a result labelled urea in mg/dL.

### Sources

- [Young D.S. Implementation of SI units for clinical laboratory data. Style specifications and conversion tables. Ann Intern Med, 1987;106(1):114–129](https://pubmed.ncbi.nlm.nih.gov/3789557/)
- [AMA Manual of Style, 11th ed. Units of Measure: Conventional Units and SI Units in Clinical Chemistry. Oxford University Press, 2020](https://academic.oup.com/amamanualofstyle/si-conversion-calculator)
- [NIST Special Publication 811. Guide for the Use of the International System of Units (SI), 2008](https://www.nist.gov/pml/special-publication-811)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lab-unit-converter" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="lab-unit-converter" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lab-unit-converter?lang=en&theme=auto"
  title="Lab Unit Converter" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
