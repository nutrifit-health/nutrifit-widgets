# Aylanalar bo‘yicha tana tarkibi va TMI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/body-composition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/body-composition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/body-composition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/body-composition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/body-composition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/body-composition.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`body-composition` · [NutriFit](https://nutrifit.health/uz/calculators/body-composition)

Tarixiy Hodgdon–Beckett (1984) modeli bo‘y va aylanalarga asoslanadi. Erkaklar: kindikdagi qorin va bo‘yin; ayollar: tabiiy tor bel, eng keng son va bo‘yin. TMI = vazn / bo‘y².

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Tarixiy Hodgdon–Beckett (1984) modeli bo‘y va aylanalarga asoslanadi. Erkaklar: kindikdagi qorin va bo‘yin; ayollar: tabiiy tor bel, eng keng son va bo‘yin. TMI = vazn / bo‘y².
2. Parametrlarni aniqlashtiring: Tarixiy Hodgdon–Beckett (1984) modeli bo‘y va aylanalarga asoslanadi. Erkaklar: kindikdagi qorin va bo‘yin; ayollar: tabiiy tor bel, eng keng son va bo‘yin. TMI = vazn / bo‘y².
3. Natijani o‘qing: Baho tana tarkibi o‘lchovini almashtirmaydi va Navy ning joriy rasmiy standarti emas. ACE toifalari tavsifiy referens, tashxis emas; TMI — kattalar uchun alohida tasnif. Mos bo‘lmagan aylanalarda hisoblanmaydi.

### Usul va formula

Tarixiy Hodgdon–Beckett (1984) modeli bo‘y va aylanalarga asoslanadi. Erkaklar: kindikdagi qorin va bo‘yin; ayollar: tabiiy tor bel, eng keng son va bo‘yin. TMI = vazn / bo‘y².

Erkaklar: %yog‘ = 495 / (1,0324 − 0,19077 × log₁₀(bel − bo‘yin) + 0,15456 × log₁₀(bo‘y)) − 450; Ayollar: %yog‘ = 495 / (1,29579 − 0,35004 × log₁₀(bel + son − bo‘yin) + 0,221 × log₁₀(bo‘y)) − 450; TVI = vazn / bo‘y²

### Cheklovlar

Baho tana tarkibi o‘lchovini almashtirmaydi va Navy ning joriy rasmiy standarti emas. ACE toifalari tavsifiy referens, tashxis emas; TMI — kattalar uchun alohida tasnif. Mos bo‘lmagan aylanalarda hisoblanmaydi.

### Manbalar

- [Hodgdon J.A., Beckett M.B. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center, 1984](https://apps.dtic.mil/sti/citations/ADA143890)
- [WHO. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894, 2000](https://www.who.int/publications/i/item/WHO_TRS_894)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="body-composition" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="body-composition" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/body-composition?lang=uz&theme=auto"
  title="Aylanalar bo‘yicha tana tarkibi va TMI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
