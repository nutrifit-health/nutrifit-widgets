# Kofeinning chiqib ketishi va uxlash vaqti kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/caffeine.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/caffeine.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/caffeine.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/caffeine.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/caffeine.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/caffeine.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`caffeine` · [NutriFit](https://nutrifit.health/uz/calculators/caffeine)

Qonda kofein parchalanish dinamikasini, yarimparchalanish davrini va uxlash vaqtida qoladigan qoldiq miqdorini hisoblaydi.

### Foydalanish tartibi

1. Birinchi finjonni uyg‘ongandan keyin 60–90 daqiqaga kechiktiring: Ertalabki kortizol cho‘qqisiga kechasi to‘plangan adenozin qoldiqlarini tabiiy tozalashga imkon bering.
2. Kofein to‘xtatish vaqtiga rioya qiling: Yarimparchalanish davri 5 soat bo‘lganida, ichilgan kofeinning to‘rtdan bir qismi 10–12 soatdan keyin ham miyada qoladi. Soat 23:00 da yotganda 14:00 dan keyin qahva ichmang.
3. Yashirin manbalarni hisobga oling: Qora shokolad, kola, ko‘k choy va og‘riq qoldiruvchi dorilar ham sezilarli kofein saqlaydi.

### Usul va formula

EFSA (2015) va AASM maʼlumotlari bo‘yicha jigar CYP1A2 sitoxromi orqali kofein metabolizmiga asoslangan. O‘rtacha yarimparchalanish davri 5 soatni tashkil etadi; chekish uni 3 soatgacha tezlashtiradi, KOK qabul qilish 9 soatgacha, homiladorlik esa 12 soatgacha uzaytiradi.

C(t) = C0 × e^(−k × t), bu yerda k = ln(2) / t_half; Standart t_half = 5,0 soat; Chekish = 3,0 soat; KOK = 9,0 soat; Homiladorlik = 12,0 soat; EFSA meʼyori = 400 mg/kun.

### Cheklovlar

Klirens tezligi CYP1A2 genotipiga qarab farqlanadi. Yuqori sezuvchan shaxslar past dozalarda ham xavotir yoki taxikardiya his qilishlari mumkin.

### Manbalar

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest N.S. et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021;18(1):1](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C. et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013;9(11):1195–1200](https://pubmed.ncbi.nlm.nih.gov/24235826/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="caffeine" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="caffeine" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/caffeine?lang=uz&theme=auto"
  title="Kofeinning chiqib ketishi va uxlash vaqti kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
