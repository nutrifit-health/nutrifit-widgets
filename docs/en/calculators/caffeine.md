# Caffeine Clearance & Sleep Timing Calculator

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/caffeine.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/caffeine.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/caffeine.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/caffeine.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/caffeine.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/caffeine.md)

[← Calculator catalog](../CALCULATORS.md)

`caffeine` · [NutriFit](https://nutrifit.health/calculators/caffeine)

Simulates caffeine pharmacokinetics, biological half-life, and remaining bedtime adenosine blockade to safeguard deep slow-wave sleep.

### How to use

1. Delay your first cup 60–90 minutes post-wake: Allow your natural morning cortisol surge to clear lingering adenosine, preventing the dreaded afternoon energy crash.
2. Enforce a strict caffeine curfew: With a 5-hour half-life, 25% of caffeine remains in the brain 10–12 hours later. Cease intake by 14:00 if bedtime is 23:00.
3. Account for hidden caffeine sources: Dark chocolate, cola, green tea, and OTC headache medications contain significant pharmacologically active doses.

### Method and formula

Simulates CYP1A2 metabolic clearance per EFSA (2015) and AASM parameters. Normal half-life is 5 hours; smoking accelerates it to 3 hours, oral contraceptives prolong it to 9 hours, and pregnancy extends it up to 12 hours.

C(t) = C0 × e^(−k × t), where k = ln(2) / t_half; Normal t_half = 5.0 h; Smoker = 3.0 h; OCP = 9.0 h; Pregnancy = 12.0 h; EFSA safe threshold = 400 mg/day.

### Limitations

Clearance varies widely between CYP1A2 *1A (fast) and *1F (slow) metabolizers. Sensitive individuals experience tachycardia or anxiety at low doses.

### Sources

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest N.S. et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021;18(1):1](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C. et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013;9(11):1195–1200](https://pubmed.ncbi.nlm.nih.gov/24235826/)

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="caffeine" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="caffeine" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/caffeine?lang=en&theme=auto"
  title="Caffeine Clearance &amp; Sleep Timing Calculator" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
