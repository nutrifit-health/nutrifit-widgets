# Yog‘siz massa indeksi FFMI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ffmi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ffmi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ffmi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ffmi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ffmi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ffmi.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`ffmi` · [NutriFit](https://nutrifit.health/uz/calculators/ffmi)

Yog‘siz massa = vazn × (1 − yog‘ foizi / 100); FFMI = yog‘siz massa / bo‘y², bo‘y metrda. Erkaklar uchun: normallashtirilgan FFMI = FFMI + 6,3 × (1,8 − bo‘y), Kouri (1995) annotatsiyasiga ko‘ra.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Yog‘siz massa = vazn × (1 − yog‘ foizi / 100); FFMI = yog‘siz massa / bo‘y², bo‘y metrda. Erkaklar uchun: normallashtirilgan FFMI = FFMI + 6,3 × (1,8 − bo‘y), Kouri (1995) annotatsiyasiga ko‘ra.
2. Parametrlarni aniqlashtiring: Yog‘siz massa = vazn × (1 − yog‘ foizi / 100); FFMI = yog‘siz massa / bo‘y², bo‘y metrda. Erkaklar uchun: normallashtirilgan FFMI = FFMI + 6,3 × (1,8 − bo‘y), Kouri (1995) annotatsiyasiga ko‘ra.
3. Natijani o‘qing: Dastlabki tadqiqotda erkaklar qatnashgan. Ayollar uchun normallashtirish hisoblanmaydi. Natija yog‘ni baholash aniqligiga bog‘liq; steroid ishlatish tashxisi, genetik chegaraning isboti yoki sog‘liqning umumiy toifasi emas.

### Usul va formula

Yog‘siz massa = vazn × (1 − yog‘ foizi / 100); FFMI = yog‘siz massa / bo‘y², bo‘y metrda. Erkaklar uchun: normallashtirilgan FFMI = FFMI + 6,3 × (1,8 − bo‘y), Kouri (1995) annotatsiyasiga ko‘ra.

Yog‘siz massa = vazn × (1 − yog‘ foizi / 100); FFMI = yog‘siz massa / bo‘y², bo‘y metrda. Erkaklar uchun: normallashtirilgan FFMI = FFMI + 6,3 × (1,8 − bo‘y), Kouri (1995) annotatsiyasiga ko‘ra.

### Cheklovlar

Dastlabki tadqiqotda erkaklar qatnashgan. Ayollar uchun normallashtirish hisoblanmaydi. Natija yog‘ni baholash aniqligiga bog‘liq; steroid ishlatish tashxisi, genetik chegaraning isboti yoki sog‘liqning umumiy toifasi emas.

### Manbalar

- [Kouri EM et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995](https://pubmed.ncbi.nlm.nih.gov/7496846/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ffmi" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="ffmi" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ffmi?lang=uz&theme=auto"
  title="Yog‘siz massa indeksi FFMI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
