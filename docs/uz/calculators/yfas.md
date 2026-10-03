# mYFAS 2.0 oziq-ovqatga qaramlik Yale shkalasi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/yfas.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/yfas.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`yfas` · [NutriFit](https://nutrifit.health/uz/calculators/yfas)

mYFAS 2.0: oxirgi 12 oydagi ovqatlanish muammolari haqida 13 savol.

### Foydalanish tartibi

1. Yo‘riqnomani o‘qing: Ko‘rsatilgan davr va har bir fikrning ma’nosini hisobga oling.
2. Javoblarni tanlang: Har bir bandga mos variantni tanlab javob bering.
3. Natijani ko‘ring: Natija javoblarni aks ettiradi; uni usulning cheklovlarini hisobga olib talqin qiling.

### Usul va formula

«Hech qachon»dan «har kuni»gacha sakkizta chastota javobi. Har bir bandning o‘z chastota chegarasi bor; «ha/yo‘q» javoblari ishlatilmaydi.

5 va 6-bandlar iztirob/kundalik faoliyat buzilishini baholaydi. Qolgan 11 band alomatlar sonini beradi. Iztirob bo‘lsa: 2–3 — yengil, 4–5 — o‘rtacha, 6–11 — kuchli skrining toifasi; boshqa hollarda shkala mezoni bajarilmaydi.

### Cheklovlar

Ma’lumot uchun berilgan natija tashxis qo‘ymaydi va davolash buyurmaydi. Tarjima axborot uchun moslashtirilgan; uning alohida psixometrik validatsiyasi tasdiqlanmagan.

### Manbalar

- [Schulte, Gearhardt. Modified Yale Food Addiction Scale 2.0: original form and scoring](https://sites.lsa.umich.edu/fastlab/yale-food-addiction-scale/)
- [Schulte EM et al. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017](https://pubmed.ncbi.nlm.nih.gov/28370722/)
- [Gearhardt AN et al. Development of the Yale Food Addiction Scale Version 2.0. Psychol Addict Behav, 2016](https://pubmed.ncbi.nlm.nih.gov/26866783/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="yfas" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="yfas" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/yfas?lang=uz&theme=auto"
  title="mYFAS 2.0 oziq-ovqatga qaramlik Yale shkalasi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
