# Uyqu jadvalini rejalashtirish

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sleep-cycles.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sleep-cycles.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sleep-cycles.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sleep-cycles.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sleep-cycles.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sleep-cycles.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`sleep-cycles` · [NutriFit](https://nutrifit.health/uz/calculators/sleep-cycles)

Uyquga ketish vaqtini hisobga olib, 7, 8 va 9 soat uyqu uchun yotish yoki uyg‘onish vaqti.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Haqiqiy qiymatlar va mos birliklardan foydalaning.
2. Parametrlarni aniqlashtiring: Boshlang‘ich taxminlarni holatingizga moslang.
3. Natijani o‘qing: Model cheklovlarini hisobga oling; hisob o‘lchov emas.

### Usul va formula

Uyg‘onish vaqti = yotish vaqti + uyquga ketish vaqti + uyqu davomiyligi; yotish vaqti shu oraliqlarni ayirish orqali hisoblanadi.

Uyg‘onish vaqti = yotish vaqti + uyquga ketish vaqti + uyqu davomiyligi; yotish vaqti shu oraliqlarni ayirish orqali hisoblanadi.

### Cheklovlar

Ko‘pchilik kattalarga 7–9 soat uyqu tavsiya etiladi. Bular shaxsiy me’yor yoki uyqu bosqichi bashorati emas, jadval variantlaridir. Uyqu sikllari va bosqichlari tun davomida o‘zgaradi. Soat orqali REM paytida yoki oson uyg‘onishni kafolatlab bo‘lmaydi.

### Manbalar

- [NHLBI. How Sleep Works: Sleep Phases and Stages](https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep)
- [NHLBI. How Sleep Works: How Much Sleep Is Enough?](https://www.nhlbi.nih.gov/health/sleep/how-much-sleep)
- [Hirshkowitz M et al. National Sleep Foundation's sleep time duration recommendations: methodology and results summary. Sleep Health, 2015](https://pubmed.ncbi.nlm.nih.gov/29073412/)

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
  title="Uyqu jadvalini rejalashtirish" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
