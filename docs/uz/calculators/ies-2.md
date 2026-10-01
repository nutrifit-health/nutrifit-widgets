# Intuitiv ovqatlanish shkalasi IES-2

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ies-2.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ies-2.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`ies-2` · [NutriFit](https://nutrifit.health/uz/calculators/ies-2)

Treysi Tilka tomonidan ishlab chiqilgan, taom va tana bilan uyg‘un hamda intuitiv munosabatni o‘lchovchi 23 savolli ilmiy shkala.

### Foydalanish tartibi

1. Taomga bo‘lgan odatiy munosabatingizni baholang: Oxirgi oylardagi odatlaringiz va haqiqiy his-tuyg‘ularingizga tayanib javob bering.
2. 1 dan 5 gacha bo‘lgan rozilik darajasini belgilang: 1 — mutlaqo qo‘shilmayman, 5 — to‘liq qo‘shilaman.
3. 4 ta komponent bo‘yicha profilingizni o‘rganing: Bali 3,0 dan past bo‘lgan subshkalalarga eʼtibor qarating — bular yaxshilanishi kerak bo‘lgan sohalardir.

### Usul va formula

5 ballik Likert shkalasi bo‘yicha baholanadigan 23 ta savol. 4 ta subshkalani o‘z ichiga oladi: so‘zsiz ruxsat (UPE), jismoniy sabablarga ko‘ra yeyish (EPR), ochlik/to‘qlikka tayanish (RHSC) va tana mutanosibligi (B-FCC).

IES-2 umumiy bali = Barcha 23 ta savol bo‘yicha o‘rtacha arifmetik qiymat (1,0 dan 5,0 gacha). 3,5 dan yuqori ball intuitiv ovqatlanish ko‘nikmasini bildiradi.

### Cheklovlar

Shkala taomlanishning psixologik odatlarini baholaydi. Klinik OXB mavjud bo‘lganda jarayon maxsus shifokor nazorati ostida olib borilishi lozim.

### Manbalar

- [Tylka T.L., Kroon Van Diest A.M. The Intuitive Eating Scale-2: item refinement and psychometric evaluation. J Couns Psychol, 2013;60(1):137–153](https://pubmed.ncbi.nlm.nih.gov/23356469/)
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
