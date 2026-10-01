# Insomnia Severity Index (ISI)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/isi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/isi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md)

[← Calculator catalog](../CALCULATORS.md)

`isi` · [NutriFit](https://nutrifit.health/calculators/isi)

A concise 7-item clinical instrument designed to evaluate the nature, severity, and daytime impact of insomnia symptoms.

### How to use

1. Reflect on the past 2 weeks: Evaluate how you have been sleeping and how rested you have felt during the day over the last 14 days.
2. Answer all 7 questions: Rate the severity of each issue from 0 ('None') to 4 ('Very severe').
3. Review your score and sleep recommendations: Check your severity category and implement targeted sleep hygiene strategies.

### Method and formula

7 questions rated from 0 to 4 points. Total score ranges from 0 to 28, covering sleep onset, sleep maintenance, early morning awakenings, and daytime impairment.

Total ISI Score = Sum of all 7 items (0–28). 0–7: No clinically significant insomnia; 8–14: Subthreshold (mild); 15–21: Clinical insomnia (moderate); 22–28: Severe clinical insomnia.

### Limitations

This index is intended for screening. If obstructive sleep apnea, restless legs syndrome, or chronic parasomnia is suspected, polysomnography is required.

### Sources

- [Morin C.M. et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases. Sleep, 2011;34(5):601–608](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien C.H. et al. Validation of the Insomnia Severity Index as an outcome measure. Sleep Med, 2001;2(4):297–307](https://pubmed.ncbi.nlm.nih.gov/11438246/)

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
