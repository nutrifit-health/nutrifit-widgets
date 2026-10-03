# Yog‘siz massa bo‘yicha energiya baholari

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/katch-mcardle.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/katch-mcardle.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`katch-mcardle` · [NutriFit](https://nutrifit.health/uz/calculators/katch-mcardle)

Yog‘siz massa = vazn × (1 − yog‘ / 100). Katch–McArdle: 370 + 21,6 × yog‘siz massa; Cunningham: 500 + 22 × yog‘siz massa. Katch kunlik bahosi tanlangan faollik koeffitsientiga ko‘paytiriladi.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Yog‘siz massa = vazn × (1 − yog‘ / 100). Katch–McArdle: 370 + 21,6 × yog‘siz massa; Cunningham: 500 + 22 × yog‘siz massa. Katch kunlik bahosi tanlangan faollik koeffitsientiga ko‘paytiriladi.
2. Parametrlarni aniqlashtiring: LBM = Vazn × (1 − % Yog‘ / 100); BMR (Katch) = 370 + 21.6 × LBM(kg); TDEE = BMR × Faollik koeffitsienti; BMR (Cunningham) = 500 + 22 × LBM(kg).
3. Natijani o‘qing: Bular kalorimetriya o‘lchovi emas, baholardir. Yog‘ foizi va taxminiy faollik koeffitsienti xatosi natijaga ta’sir qiladi. Formulalar farqi qaysi biri sizga aniqroq ekanini isbotlamaydi.

### Usul va formula

Yog‘siz massa = vazn × (1 − yog‘ / 100). Katch–McArdle: 370 + 21,6 × yog‘siz massa; Cunningham: 500 + 22 × yog‘siz massa. Katch kunlik bahosi tanlangan faollik koeffitsientiga ko‘paytiriladi.

LBM = Vazn × (1 − % Yog‘ / 100); BMR (Katch) = 370 + 21.6 × LBM(kg); TDEE = BMR × Faollik koeffitsienti; BMR (Cunningham) = 500 + 22 × LBM(kg).

### Cheklovlar

Bular kalorimetriya o‘lchovi emas, baholardir. Yog‘ foizi va taxminiy faollik koeffitsienti xatosi natijaga ta’sir qiladi. Formulalar farqi qaysi biri sizga aniqroq ekanini isbotlamaydi.

### Manbalar

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer](https://medicine.lww.com/Book/isbn/9781451191554)
- [Cunningham JJ. et al. Body composition as a determinant of energy expenditure: a synthetic review and a proposed general prediction equation. Am J Clin Nutr, 1991](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990](https://pubmed.ncbi.nlm.nih.gov/2305711/)

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
  title="Yog‘siz massa bo‘yicha energiya baholari" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
