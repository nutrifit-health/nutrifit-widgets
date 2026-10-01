# PhenoAge biologik yosh kalkulyatori (Levine)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phenoage.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phenoage.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`phenoage` · [NutriFit](https://nutrifit.health/uz/calculators/phenoage)

9 ta biokimyoviy va gematologik biomarker asosida biologik fenotipik yoshni va qarish tezligini hisoblaydi.

### Foydalanish tartibi

1. Qon tahlillarini topshiring: Umumiy qon tahlili (leykotsitlar, limfotsitlar %, MCV, RDW) va biokimyo (albumin, kreatinin, glyukoza, CRO, ALP) talab etiladi.
2. Qiymatlarni kalkulyatorga kiriting: Ko‘rsatkichlar o‘lchov birliklariga eʼtibor bering va ularni mos maydonlarga kiriting.
3. Natijani tahlil qiling: Agar biologik yosh pasport yoshidan katta bo‘lsa, yallig‘lanish va metabolik biomarkerlarni tuzatishga eʼtibor qarating.

### Usul va formula

Morgan Levine (2018, Aging) ning NHANES IV maʼlumotlari asosidagi Gompertz modeliga tayangan. 9 ta biomarker (albumin, kreatinin, glyukoza, CRO, limfotsitlar ulushi, MCV, RDW, ishqoriy fosfataza, leykotsitlar) hamda xronologik yoshni birlashtiradi.

Chiziqli yig‘indi xb = koeffitsiyentlar × biomarkerlar; O‘lim xavfi M = 1 − exp(−exp(xb) × (exp(120/b) − 1) / (10 × 0.00769)); PhenoAge = 141.5 + ln(−0.00553 × ln(1 − M)) / 0.090165.

### Cheklovlar

Model o‘tkir infektsiyalar, jarohatlar yoki o‘tkir yallig‘lanish davrida qo‘llanilmaydi, chunki vaqtinchalik CRO yoki leykotsitoz ko‘rsatkichlarni buzadi.

### Manbalar

- [Levine M.E. et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018;10(4):573–591](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z. et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: a cohort study. PLoS Med, 2018;15(12):e1002718](https://pubmed.ncbi.nlm.nih.gov/30596641/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phenoage" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="phenoage" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phenoage?lang=uz&theme=auto"
  title="PhenoAge biologik yosh kalkulyatori (Levine)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
