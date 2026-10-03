# Kunlik energiya sarfi bahosi TDEE

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tdee.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tdee.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`tdee` · [NutriFit](https://nutrifit.health/uz/calculators/tdee)

Mifflin–St Jeor tinchlik sarfini baholaydi. TDEE = baho × tanlangan faollik koeffitsienti. −20% va +15% — muallifning kamomad va ortiqcha ssenariylari.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Mifflin–St Jeor tinchlik sarfini baholaydi. TDEE = baho × tanlangan faollik koeffitsienti. −20% va +15% — muallifning kamomad va ortiqcha ssenariylari.
2. Parametrlarni aniqlashtiring: Mifflin–St Jeor tinchlik sarfini baholaydi. TDEE = baho × tanlangan faollik koeffitsienti. −20% va +15% — muallifning kamomad va ortiqcha ssenariylari.
3. Natijani o‘qing: Kattalar uchun. Koeffitsientlar taxminiy, o‘lchangan PAL emas. Formula individual ehtiyoj va xavfsiz kamomadni aniqlamaydi; xato metabolik buzilishni isbotlamaydi.

### Usul va formula

Mifflin–St Jeor tinchlik sarfini baholaydi. TDEE = baho × tanlangan faollik koeffitsienti. −20% va +15% — muallifning kamomad va ortiqcha ssenariylari.

BMR (erkak) = 10 × vazn(kg) + 6,25 × bo‘y(sm) − 5 × yosh + 5; BMR (ayol) = 10 × vazn(kg) + 6,25 × bo‘y(sm) − 5 × yosh − 161; TDEE = BMR × faollik koeffitsiyenti

### Cheklovlar

Kattalar uchun. Koeffitsientlar taxminiy, o‘lchangan PAL emas. Formula individual ehtiyoj va xavfsiz kamomadni aniqlamaydi; xato metabolik buzilishni isbotlamaydi.

### Manbalar

- [Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tdee" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="tdee" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=uz&theme=auto"
  title="Kunlik energiya sarfi bahosi TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
