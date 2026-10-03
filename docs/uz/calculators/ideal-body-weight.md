# Hisobiy vaznning tarixiy formulalari

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ideal-body-weight.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ideal-body-weight.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/uz/calculators/ideal-body-weight)

Bo‘y ≥ 152,4 sm uchun Devine, Robinson, Miller va taxminiy Hamwi. To‘rt formula o‘rtachasi muallif tanlovi; AdjBW = Devine + 0,4 × (haqiqiy vazn − Devine), faqat Devine dan yuqori bo‘lsa.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Bo‘y ≥ 152,4 sm uchun Devine, Robinson, Miller va taxminiy Hamwi. To‘rt formula o‘rtachasi muallif tanlovi; AdjBW = Devine + 0,4 × (haqiqiy vazn − Devine), faqat Devine dan yuqori bo‘lsa.
2. Parametrlarni aniqlashtiring: Devine (M): 50 + 2.3 × x; Devine (F): 45.5 + 2.3 × x; Robinson (M): 52 + 1.9 × x; Robinson (F): 49 + 1.7 × x; x = height(cm)/2.54 − 60; AdjBW = Devine + 0.4 × (weight − Devine).
Bo‘y ≥ 152,4 sm uchun Devine, Robinson, Miller va taxminiy Hamwi. To‘rt formula o‘rtachasi muallif tanlovi; AdjBW = Devine + 0,4 × (haqiqiy vazn − Devine), faqat Devine dan yuqori bo‘lsa.
3. Natijani o‘qing: Formulalar yagona sog‘lom yoki istalgan vaznni aniqlamaydi. AdjBW ovqatlanish va dori uchun universal emas. TMI 18,5–24,9 bo‘yicha vazn — kattalar uchun alohida arifmetik mo‘ljal, individual maqsad emas.

### Usul va formula

Bo‘y ≥ 152,4 sm uchun Devine, Robinson, Miller va taxminiy Hamwi. To‘rt formula o‘rtachasi muallif tanlovi; AdjBW = Devine + 0,4 × (haqiqiy vazn − Devine), faqat Devine dan yuqori bo‘lsa.

Devine (M): 50 + 2.3 × x; Devine (F): 45.5 + 2.3 × x; Robinson (M): 52 + 1.9 × x; Robinson (F): 49 + 1.7 × x; x = height(cm)/2.54 − 60; AdjBW = Devine + 0.4 × (weight − Devine).
Bo‘y ≥ 152,4 sm uchun Devine, Robinson, Miller va taxminiy Hamwi. To‘rt formula o‘rtachasi muallif tanlovi; AdjBW = Devine + 0,4 × (haqiqiy vazn − Devine), faqat Devine dan yuqori bo‘lsa.

### Cheklovlar

Formulalar yagona sog‘lom yoki istalgan vaznni aniqlamaydi. AdjBW ovqatlanish va dori uchun universal emas. TMI 18,5–24,9 bo‘yicha vazn — kattalar uchun alohida arifmetik mo‘ljal, individual maqsad emas.

### Manbalar

- [Robinson JD et al. Determination of ideal body weight for drug dosage calculations. Am J Hosp Pharm, 1983](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Peterson C.M. et al. Universal equation for estimating ideal body weight and body weight at any BMI. Am J Clin Nutr, 2016;103(5):1197–1203. Historical IBW equations and their limits](https://pmc.ncbi.nlm.nih.gov/articles/PMC4841935/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ideal-body-weight" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="ideal-body-weight" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ideal-body-weight?lang=uz&theme=auto"
  title="Hisobiy vaznning tarixiy formulalari" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
