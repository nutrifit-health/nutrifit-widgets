# Etanol va Vidmarkning o‘quv bahosi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/alcohol.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/alcohol.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/alcohol.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/alcohol.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/alcohol.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/alcohol.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`alcohol` · [NutriFit](https://nutrifit.health/uz/calculators/alcohol)

Etanol miqdori, uning kaloriyasi va soddalashtirilgan model bo‘yicha taxminiy konsentratsiyani hisoblaydi.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Haqiqiy qiymatlar va mos birliklardan foydalaning.
2. Parametrlarni aniqlashtiring: Boshlang‘ich taxminlarni holatingizga moslang.
3. Natijani o‘qing: Model cheklovlarini hisobga oling; hisob o‘lchov emas.

### Usul va formula

Etanol, g = hajm, ml × quvvat / 100 × 0,789. C0 = etanol / (vazn × r); C(t) = max(0, C0 − 0,15 × t). Erkaklar uchun r = 0,68, ayollar uchun 0,55.

Etanol, g = hajm, ml × quvvat / 100 × 0,789. C0 = etanol / (vazn × r); C(t) = max(0, C0 − 0,15 × t). Erkaklar uchun r = 0,68, ayollar uchun 0,55.

### Cheklovlar

O‘rtacha koeffitsiyentlar muayyan odamni tasvirlamaydi. Model kiritilgan miqdorni bitta doza deb oladi; so‘rilish, ovqat va ichish davomiyligini hisobga olmaydi. Natija hushyorlikni, xavfsiz haydash vaqtini yoki qonunga muvofiqlikni aniqlamaydi. Hisoblangan nol ham alkogol yo‘qligini tasdiqlamaydi.

### Manbalar

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones AW. et al. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework. Forensic Sci Int, 2010](https://pubmed.ncbi.nlm.nih.gov/20304569/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="alcohol" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="alcohol" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/alcohol?lang=uz&theme=auto"
  title="Etanol va Vidmarkning o‘quv bahosi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
