# Uyqu sikllari kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sleep-cycles.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sleep-cycles.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sleep-cycles.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sleep-cycles.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sleep-cycles.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sleep-cycles.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`sleep-cycles` · [NutriFit](https://nutrifit.health/uz/calculators/sleep-cycles)

90 daqiqalik ultradian sikllar (sekin va tez uyqu fazalari) hamda o‘rtacha uxlab qolish vaqti asosida uyqu vaqtini hisoblash vositasi.

### Foydalanish tartibi

1. Hisoblash yo‘nalishini tanlang: Sizga nima kerakligini belgilang: budilnikka uyg‘onish uchun soat nechada uxlashga yotishni bilish yoki hozir yotganda budilnikni nechaga qo‘yish kerakligini aniqlash.
2. Uxlab qolish vaqtini belgilang: Standart holatda 14 daqiqa qilib belgilangan. Agar odatda uzoqroq ag‘anab yotsangiz yoki darhol uxlab qolsangiz, ushbu qiymatni moslang.
3. 5 yoki 6 siklli zanjirni tanlang: 5 ta sikl (7 s 30 daq) ish kunlari uchun, 6 ta sikl (9 s) esa intensiv mashg‘ulotlar yoki uyqusizlikdan keyin tiklanish uchun juda mos keladi.

### Usul va formula

Hisoblash NREM (sekin uyqu) va REM (tez uyqu) bosqichlarini birlashtiruvchi 90 daqiqalik ultradian sikllar modeliga asoslangan. Sikl chegarasida uyg‘onish uyqu inersiyasining oldini oladi.

Uyg‘onish vaqti = Uxlash vaqti + Uxlab qolish (14 daq) + N × 90 daq. Uxlash vaqti = Uyg‘onish vaqti - (N × 90 daq) - Uxlab qolish (14 daq).

### Cheklovlar

Kalkulyator 90 daqiqalik o‘rtacha sikl davomiyligidan foydalanadi. Shaxsiy sikl 70 dan 120 daqiqagacha farq qilishi mumkin. Surunkali uyqu buzilishlarida polisomnografiya talab etiladi.

### Manbalar

- [Carskadon M.A., Dement W.C. Normal Human Sleep: An Overview. Principles and Practice of Sleep Medicine, 2011;5:16–26](https://doi.org/10.1016/B978-1-4160-6645-3.00002-5)
- [Hirshkowitz M. et al. National Sleep Foundation’s sleep time duration recommendations: methodology and results summary. Sleep Health, 2015;1(1):40–43](https://pubmed.ncbi.nlm.nih.gov/29073412/)
- [Dijk D.J., Czeisler C.A. Contribution of the circadian pacemaker and the homeostatic process to the timing of human sleep. Sleep, 1995;18(5):285–304](https://pubmed.ncbi.nlm.nih.gov/7676163/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sleep-cycles" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="sleep-cycles" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sleep-cycles?lang=uz&theme=auto"
  title="Uyqu sikllari kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
