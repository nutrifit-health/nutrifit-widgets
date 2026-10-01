# Yurak urish zonalari kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/heart-rate-zones.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/heart-rate-zones.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`heart-rate-zones` · [NutriFit](https://nutrifit.health/uz/calculators/heart-rate-zones)

Maksimal puls va tinch holatdagi yurak urish tezligini hisobga olgan holda 5 ta individual mashg‘ulot zonasini hisoblaydi (yurak urishi zaxirasi usuli).

### Foydalanish tartibi

1. Ertalabki tinch holatdagi pulsni o‘lchang: Ertalab uyqudan uyg‘ongach, o‘rindan turmasdan pulsometor yoki barmoq bilan 60 soniya davomida pulsni o‘lchang va 3 kunlik o‘rtacha qiymatni oling.
2. Karvonen formulasi bo‘yicha zonalarni hisoblang: Kalkulyator maksimal pulsdan tinch holatdagi pulsni ayirib, yurak zaxirasini aniqlaydi.
3. Yuklamani 80/20 qoidasi bo‘yicha taqsimlang: Barcha mashg‘ulotlarning taxminan 80 foizini 2-zonada o‘tkazing, 20 foizini esa 4 va 5-zonalardagi kuchli ishlarga ajrating.

### Usul va formula

Karvonen usuli yurak urish tezligi zaxirasiga asoslanadi (HRR = YuUT max − YuUT tinch). Tinch holatdagi ertalabki pulsni hisobga olish zonalarni sportchining haqiqiy aerob tayyorgarlik darajasiga moslashtiradi.

YuUT max (Tanaka) = 208 − 0.7 × Yosh; HRR = YuUT max − YuUT tinch; Maqsadli puls = YuUT tinch + (% jadallik × HRR). Haskell formulasi: YuUT max = 220 − Yosh.

### Cheklovlar

Maksimal puls formulalari ±10–12 zarba/daq standart xatolikka ega. Yuqori aniqlik uchun laboratoriya gaz tahlili (CPET) tavsiya etiladi.

### Manbalar

- [Tanaka H., Monahan K.D., Seals D.R. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001;37(1):153–156](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [Karvonen M.J., Kentala E., Mustala O. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957;35(3):307–315](https://pubmed.ncbi.nlm.nih.gov/13470504/)
- [American College of Sports Medicine. ACSM’s Guidelines for Exercise Testing and Prescription. 11th ed. Wolters Kluwer, 2021](https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="heart-rate-zones" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="heart-rate-zones" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/heart-rate-zones?lang=uz&theme=auto"
  title="Yurak urish zonalari kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
