# Ketch — MakArdl BMR va TDEE kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/katch-mcardle.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/katch-mcardle.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`katch-mcardle` · [NutriFit](https://nutrifit.health/uz/calculators/katch-mcardle)

Umumiy tana vazni o‘rniga faqat quruq mushak massasi asosida bazal metabolizm (BMR) va kunlik umumiy energiya sarfini (TDEE) aniqlaydi.

### Foydalanish tartibi

1. Quruq massani aniqlang: Hozirgi vazn va yog‘ foizini kiriting. Kalkulyator metabolik faol quruq massani hisoblab beradi.
2. Haqiqiy faollik darajasini tanlang: Samimiy bo‘ling: agar ofisda ishlasangiz va haftasiga 3 marta mashq qilsangiz, 'Yengil' yoki 'O‘rtacha' variantini tanlang.
3. Mifflin formulasi bilan solishtiring: Farqni ko‘ring: agar yog‘ foizingiz past va mushaklaringiz ko‘p bo‘lsa, oddiy formulalar ehtiyojingizni 150–300 kkalga kam ko‘rsatadi.

### Usul va formula

Umumiy tana vazniga tayanadigan Mifflin — San Jeor yoki Xarris — Benedikt formulalaridan farqli o‘laroq, Ketch — MakArdl tenglamasi metabolik faol quruq tana massasiga (LBM) asoslanadi. Bu mushakdor sportchilar va yog‘ miqdori nostandart bo‘lgan insonlar uchun eng yuqori aniqlikni ta’minlaydi.

LBM = Vazn × (1 − % Yog‘ / 100); BMR (Katch) = 370 + 21.6 × LBM(kg); TDEE = BMR × Faollik koeffitsienti; BMR (Cunningham) = 500 + 22 × LBM(kg).

### Cheklovlar

Tana yog‘i foizini oldindan bilishni talab qiladi. Yog‘ foizining noaniqligi kaloriya hisobiga to‘g‘ridan-to‘g‘ri xatolik kiritadi.

### Manbalar

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer, 2014](https://pubmed.ncbi.nlm.nih.gov/15570161/)
- [Cunningham J.J. A reanalysis of balanced nutrition and the relationship to body composition and resting metabolic rate. Am J Clin Nutr, 1991;54(6):963–969](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin M.D. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="katch-mcardle" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="katch-mcardle" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/katch-mcardle?lang=uz&theme=auto"
  title="Ketch — MakArdl BMR va TDEE kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
