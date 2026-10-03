# Anion bo‘shlig‘i va delta-nisbati kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/anion-gap.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/anion-gap.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`anion-gap` · [NutriFit](https://nutrifit.health/uz/calculators/anion-gap)

Anion farqi = Na − Cl − HCO₃; albumin tuzatishi = 0,25 × (40 − albumin, g/L). Delta nisbati = (tuzatilgan farq − tanlangan referens) / (bikarbonat referensi − HCO₃).

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Anion farqi = Na − Cl − HCO₃; albumin tuzatishi = 0,25 × (40 − albumin, g/L). Delta nisbati = (tuzatilgan farq − tanlangan referens) / (bikarbonat referensi − HCO₃).
2. Parametrlarni aniqlashtiring: Anion farqi = Na − Cl − HCO₃; albumin tuzatishi = 0,25 × (40 − albumin, g/L). Delta nisbati = (tuzatilgan farq − tanlangan referens) / (bikarbonat referensi − HCO₃).
Referenslar laboratoriya usuliga bog‘liq. Delta faqat musbat surat va maxrajda hisoblanadi. Bitta son pH, qon gazlari va klinik kontekstsiz tashxis qo‘ymaydi.
3. Natijani o‘qing: Referenslar laboratoriya usuliga bog‘liq. Delta faqat musbat surat va maxrajda hisoblanadi. Bitta son pH, qon gazlari va klinik kontekstsiz tashxis qo‘ymaydi.

### Usul va formula

Anion farqi = Na − Cl − HCO₃; albumin tuzatishi = 0,25 × (40 − albumin, g/L). Delta nisbati = (tuzatilgan farq − tanlangan referens) / (bikarbonat referensi − HCO₃).

Anion farqi = Na − Cl − HCO₃; albumin tuzatishi = 0,25 × (40 − albumin, g/L). Delta nisbati = (tuzatilgan farq − tanlangan referens) / (bikarbonat referensi − HCO₃).
Referenslar laboratoriya usuliga bog‘liq. Delta faqat musbat surat va maxrajda hisoblanadi. Bitta son pH, qon gazlari va klinik kontekstsiz tashxis qo‘ymaydi.

### Cheklovlar

Referenslar laboratoriya usuliga bog‘liq. Delta faqat musbat surat va maxrajda hisoblanadi. Bitta son pH, qon gazlari va klinik kontekstsiz tashxis qo‘ymaydi.

### Manbalar

- [Kraut JA et al. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J et al. Anion gap and hypoalbuminemia. Crit Care Med, 1998](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K et al. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014](https://pubmed.ncbi.nlm.nih.gov/25295502/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="anion-gap" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="anion-gap" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/anion-gap?lang=uz&theme=auto"
  title="Anion bo‘shlig‘i va delta-nisbati kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
