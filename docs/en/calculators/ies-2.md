# Intuitive Eating Scale-2 (IES-2)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ies-2.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ies-2.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md)

[← Calculator catalog](../CALCULATORS.md)

`ies-2` · [NutriFit](https://nutrifit.health/calculators/ies-2)

IES-2: 23 statements about eating attitudes and body signals, with four subscales.

### Usage

1. Read the instructions: Indicate how much each statement describes your attitudes and behaviours. There is no specified recall period.
2. Choose your answers: Answer each item by choosing the appropriate option.
3. View the result: The result reflects your answers; interpret it within the limits of the measure.

### Method and formula

Agreement from 1 to 5. In the grouped author form, items 1, 2, 3, 7, 8, 9 and 10 are scored as 6 minus the answer.

Overall score: mean of the 23 scored answers. Subscales: items 1–6, 7–14, 15–20 and 21–23. All means range from 1 to 5; no diagnostic cutoffs are established.

### Limitations

This informational result does not establish a diagnosis or prescribe treatment. Translated versions are informational adaptations; separate psychometric validation of each translation has not been confirmed.

### Sources

- [Tylka. Intuitive Eating Scale-2: grouped original items and scoring](https://cpb-us-w2.wpmucdn.com/u.osu.edu/dist/1/10560/files/2015/02/IES-2-Items-sz2at8.doc)
- [Tylka TL et al. The Intuitive Eating Scale-2: item refinement and psychometric evaluation with college women and men. J Couns Psychol, 2013](https://pubmed.ncbi.nlm.nih.gov/23356469/)
- [Tribole E., Resch E. Intuitive Eating: A Revolutionary Anti-Diet Approach. St. Martin’s Essentials, 2020](https://www.intuitiveeating.org/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ies-2" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="ies-2" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ies-2?lang=en&theme=auto"
  title="Intuitive Eating Scale-2 (IES-2)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
