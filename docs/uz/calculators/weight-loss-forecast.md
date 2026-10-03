# Hall–Chow vazn o‘zgarishi ssenariysi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/weight-loss-forecast.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/weight-loss-forecast.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/uz/calculators/weight-loss-forecast)

O‘rtacha parametrlarga ega sodda model boshlang‘ich energiya iste’moli doimiy kamaytirilganda va faollik o‘zgarmaganda vazn o‘zgarishini ko‘rsatadi.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Haqiqiy qiymatlar va mos birliklardan foydalaning.
2. Parametrlarni aniqlashtiring: Boshlang‘ich taxminlarni holatingizga moslang.
3. Natijani o‘qing: Model cheklovlarini hisobga oling; hisob o‘lchov emas.

### Usul va formula

W(t)=W0−D/22×(1−exp(−22×t/9100)); t — kun, D — kcal/kun hisobidagi kamayish. O‘rtacha parametrlar: ρ=9100 kcal/kg, ε=22 kcal/(kg·kun). Chiziqli taqqoslash: D×t/7700 yo‘qotish.

W(t)=W0−D/22×(1−exp(−22×t/9100)); t — kun, D — kcal/kun hisobidagi kamayish. O‘rtacha parametrlar: ρ=9100 kcal/kg, ε=22 kcal/(kg·kun). Chiziqli taqqoslash: D×t/7700 yo‘qotish.

### Cheklovlar

Bu Hall–Chow (2011) ning ikki parametrli chiziqlashtirilgan modeli, to‘liq shaxsiy NIH Body Weight Planner emas. Yog‘, mushak yoki platoning aniq sanasini bashorat qilmaydi. Kattalar uchun ssenariy; homiladorlik va emizishda qo‘llanmaydi. Boshlang‘ich iste’mol vaznni saqlaydi va kamayish doimiy deb olinadi; suv, dorilar, kasalliklar va ratsionga rioya qilish modellashtirilmaydi. Kaloriya tanqisligini buyurmaydi.

### Manbalar

- [Hall K.D., Chow C.C. Estimating changes in free-living energy intake and its confidence interval. Am J Clin Nutr, 2011;94(1):66–74. Linearized energy-balance model](https://pmc.ncbi.nlm.nih.gov/articles/PMC3127505/)
- [Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011](https://pubmed.ncbi.nlm.nih.gov/21872751/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="weight-loss-forecast" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="weight-loss-forecast" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/weight-loss-forecast?lang=uz&theme=auto"
  title="Hall–Chow vazn o‘zgarishi ssenariysi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
