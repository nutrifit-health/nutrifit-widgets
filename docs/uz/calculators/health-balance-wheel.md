# Mualliflik o‘zini baholash g‘ildiragi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/health-balance-wheel.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/health-balance-wheel.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`health-balance-wheel` · [NutriFit](https://nutrifit.health/uz/calculators/health-balance-wheel)

So‘nggi 14 kundagi sakkiz sohadan qoniqishni 1–10 baholang. Umumiy ball = o‘rtacha × 10; bir xillik = max(0, 100 − 18 × standart og‘ish), yaxlitlanadi.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: So‘nggi 14 kundagi sakkiz sohadan qoniqishni 1–10 baholang. Umumiy ball = o‘rtacha × 10; bir xillik = max(0, 100 − 18 × standart og‘ish), yaxlitlanadi.
2. Parametrlarni aniqlashtiring: So‘nggi 14 kundagi sakkiz sohadan qoniqishni 1–10 baholang. Umumiy ball = o‘rtacha × 10; bir xillik = max(0, 100 − 18 × standart og‘ish), yaxlitlanadi.
3. Natijani o‘qing: Bu muallif tasviri, validlangan klinik test yoki sog‘liq qonuni emas. Bir xil past baholar yuqori bir xillik beradi, sog‘lomlikni anglatmaydi. Dastlabki qiymat va profillar misol; sakkiz bahoni tasdiqlang.

### Usul va formula

So‘nggi 14 kundagi sakkiz sohadan qoniqishni 1–10 baholang. Umumiy ball = o‘rtacha × 10; bir xillik = max(0, 100 − 18 × standart og‘ish), yaxlitlanadi.

So‘nggi 14 kundagi sakkiz sohadan qoniqishni 1–10 baholang. Umumiy ball = o‘rtacha × 10; bir xillik = max(0, 100 − 18 × standart og‘ish), yaxlitlanadi.

### Cheklovlar

Bu muallif tasviri, validlangan klinik test yoki sog‘liq qonuni emas. Bir xil past baholar yuqori bir xillik beradi, sog‘lomlikni anglatmaydi. Dastlabki qiymat va profillar misol; sakkiz bahoni tasdiqlang.

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="health-balance-wheel" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="health-balance-wheel" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/health-balance-wheel?lang=uz&theme=auto"
  title="Mualliflik o‘zini baholash g‘ildiragi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
