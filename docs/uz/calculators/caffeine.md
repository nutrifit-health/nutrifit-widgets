# Kofein qoldig‘i: model hisobi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/caffeine.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/caffeine.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/caffeine.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/caffeine.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/caffeine.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/caffeine.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`caffeine` · [NutriFit](https://nutrifit.health/uz/calculators/caffeine)

Tanlangan yarim chiqarilish davri bo‘yicha hozirgi va uyqu paytidagi kofein qoldig‘ini baholaydi.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Haqiqiy qiymatlar va mos birliklardan foydalaning.
2. Parametrlarni aniqlashtiring: Boshlang‘ich taxminlarni holatingizga moslang.
3. Natijani o‘qing: Model cheklovlarini hisobga oling; hisob o‘lchov emas.

### Usul va formula

Qoldiq = doza × 2^(−t / T½). Kunlik yig‘indiga faqat oxirgi 24 soatda kiritilgan dozalar kiradi.

Qoldiq = doza × 2^(−t / T½). Kunlik yig‘indiga faqat oxirgi 24 soatda kiritilgan dozalar kiradi.

### Cheklovlar

Yarim chiqarilish davri odamga qarab va homiladorlik, kasalliklar hamda dorilar ta’sirida o‘zgaradi. Taxmin kiriting; 5 soat sizning o‘lchangan chiqarilish tezligingiz emas. Qoldiq uyqu sifatini bashorat qilmaydi. EFSA ning sog‘lom kattalar uchun 400 mg/kun va homiladorlikda 200 mg/kun ko‘rsatkichlari shaxsiy xavfsizlikni kafolatlamaydi.

### Manbalar

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest NS et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013](https://pubmed.ncbi.nlm.nih.gov/24235903/)

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
  title="Kofein qoldig‘i: model hisobi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
