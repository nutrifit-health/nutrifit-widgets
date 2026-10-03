# Insomnia Severity Index (ISI)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/isi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/isi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md)

[← Calculator catalog](../CALCULATORS.md)

`isi` · [NutriFit](https://nutrifit.health/calculators/isi)

Sleep assessment over the last 2 weeks: 7 items with distinct 0–4 scales; total 0–28. Satisfaction, noticeability, worry and impact on daily life have their own responses.

### Usage

1. Enter the starting values: Sleep assessment over the last 2 weeks: 7 items with distinct 0–4 scales; total 0–28. Satisfaction, noticeability, worry and impact on daily life have their own responses.
2. Adjust the parameters: Sleep assessment over the last 2 weeks: 7 items with distinct 0–4 scales; total 0–28. Satisfaction, noticeability, worry and impact on daily life have their own responses.
3. Read the result: Informational translation for self-assessment. Validation of this particular adaptation has not been confirmed. A score does not establish a diagnosis, and a low score does not rule out illness.

### Method and formula

Sleep assessment over the last 2 weeks: 7 items with distinct 0–4 scales; total 0–28. Satisfaction, noticeability, worry and impact on daily life have their own responses.

Sleep assessment over the last 2 weeks: 7 items with distinct 0–4 scales; total 0–28. Satisfaction, noticeability, worry and impact on daily life have their own responses.

### Limitations

Informational translation for self-assessment. Validation of this particular adaptation has not been confirmed. A score does not establish a diagnosis, and a low score does not rule out illness.

### Sources

- [Morin CM et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases and evaluate treatment response. Sleep, 2011](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien CH et al. Validation of the Insomnia Severity Index as an outcome measure for insomnia research. Sleep Med, 2001](https://pubmed.ncbi.nlm.nih.gov/11438246/)
- [PhenX Toolkit. Insomnia Severity Index: patient questionnaire, last two weeks, protocol 640801](https://www.phenxtoolkit.org/protocols/view/640801?origin=subcollection)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="isi" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="isi" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/isi?lang=en&theme=auto"
  title="Insomnia Severity Index (ISI)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
