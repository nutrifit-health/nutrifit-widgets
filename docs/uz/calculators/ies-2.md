# Intuitiv ovqatlanish shkalasi IES-2

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ies-2.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ies-2.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`ies-2` · [NutriFit](https://nutrifit.health/uz/calculators/ies-2)

IES-2: ovqatga va tana belgilariga munosabat haqida 23 fikr, to‘rtta kichik shkala.

### Foydalanish tartibi

1. Yo‘riqnomani o‘qing: Har bir fikr qarashlaringiz va xulqingizni qanchalik ifodalashini ko‘rsating. Aniq eslash davri belgilanmagan.
2. Javoblarni tanlang: Har bir bandga mos variantni tanlab javob bering.
3. Natijani ko‘ring: Natija javoblarni aks ettiradi; uni usulning cheklovlarini hisobga olib talqin qiling.

### Usul va formula

Rozilik darajasi 1 dan 5 gacha. Muallifning guruhlangan blankasida 1, 2, 3, 7, 8, 9 va 10-bandlar 6 dan javobni ayirish orqali baholanadi.

Umumiy ball — teskari baholashdan keyingi 23 javobning o‘rtachasi. Kichik shkalalar: 1–6, 7–14, 15–20 va 21–23-bandlar. Barcha o‘rtachalar 1–5 oralig‘ida; diagnostik chegaralar yo‘q.

### Cheklovlar

Ma’lumot uchun berilgan natija tashxis qo‘ymaydi va davolash buyurmaydi. Tarjima axborot uchun moslashtirilgan; uning alohida psixometrik validatsiyasi tasdiqlanmagan.

### Manbalar

- [Tylka. Intuitive Eating Scale-2: grouped original items and scoring](https://cpb-us-w2.wpmucdn.com/u.osu.edu/dist/1/10560/files/2015/02/IES-2-Items-sz2at8.doc)
- [Tylka TL et al. The Intuitive Eating Scale-2: item refinement and psychometric evaluation with college women and men. J Couns Psychol, 2013](https://pubmed.ncbi.nlm.nih.gov/23356469/)
- [Tribole E., Resch E. Intuitive Eating: A Revolutionary Anti-Diet Approach. St. Martin’s Essentials, 2020](https://www.intuitiveeating.org/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ies-2" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="ies-2" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ies-2?lang=uz&theme=auto"
  title="Intuitiv ovqatlanish shkalasi IES-2" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
