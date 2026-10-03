# PhenoAge biologik yosh kalkulyatori (Levine)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phenoage.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phenoage.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`phenoage` · [NutriFit](https://nutrifit.health/uz/calculators/phenoage)

Levine 2018 modeli to‘qqiz biomarker va xronologik yoshni birlashtiradi. PhenoAge — NHANES modelidagi populyatsion xavfning yosh ekvivalenti; a’zolar yoshi yoki individual umr davomiyligi emas. Yosh farqi arifmetik ayirma bo‘lib, qarish tezligi yoki PhenoAgeAccel statistik qoldig‘i emas.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Levine 2018 modeli to‘qqiz biomarker va xronologik yoshni birlashtiradi. PhenoAge — NHANES modelidagi populyatsion xavfning yosh ekvivalenti; a’zolar yoshi yoki individual umr davomiyligi emas. Yosh farqi arifmetik ayirma bo‘lib, qarish tezligi yoki PhenoAgeAccel statistik qoldig‘i emas.
2. Parametrlarni aniqlashtiring: xb = −19.907 − 0.0336·A + 0.0095·C + 0.1953·G + 0.0954·ln(CRP) − 0.012·L + 0.0268·M + 0.3306·R + 0.00188·P + 0.0554·W + 0.0804·a
H = exp(xb) × (exp(120 × 0.0076927) − 1) / 0.0076927
PhenoAge = 141.50225 + ln(0.00553 × H) / 0.09165
A — albumin, g/L; C — kreatinin, µmol/L; G — glyukoza, mmol/L; CRP — mg/dL (kiritilgan mg/L ÷ 10); L — limfotsitlar, %; M — MCV, fL; R — RDW, %; P — ishqoriy fosfataza, U/L; W — leykotsitlar, 10⁹/L; a — yosh, yil.
3. Natijani o‘qing: 20–84 yosh uchun tadqiqot modeli. O‘tkir kasallik biomarkerlar va natijani o‘zgartiradi. Bu tashxis, umr davomiyligi yoki yosharish isboti emas. CRP o‘lchangan va musbat bo‘lishi kerak; aniqlash chegarasidan past natijani nol bilan almashtirib bo‘lmaydi.

### Usul va formula

Levine 2018 modeli to‘qqiz biomarker va xronologik yoshni birlashtiradi. PhenoAge — NHANES modelidagi populyatsion xavfning yosh ekvivalenti; a’zolar yoshi yoki individual umr davomiyligi emas. Yosh farqi arifmetik ayirma bo‘lib, qarish tezligi yoki PhenoAgeAccel statistik qoldig‘i emas.

xb = −19.907 − 0.0336·A + 0.0095·C + 0.1953·G + 0.0954·ln(CRP) − 0.012·L + 0.0268·M + 0.3306·R + 0.00188·P + 0.0554·W + 0.0804·a
H = exp(xb) × (exp(120 × 0.0076927) − 1) / 0.0076927
PhenoAge = 141.50225 + ln(0.00553 × H) / 0.09165
A — albumin, g/L; C — kreatinin, µmol/L; G — glyukoza, mmol/L; CRP — mg/dL (kiritilgan mg/L ÷ 10); L — limfotsitlar, %; M — MCV, fL; R — RDW, %; P — ishqoriy fosfataza, U/L; W — leykotsitlar, 10⁹/L; a — yosh, yil.

### Cheklovlar

20–84 yosh uchun tadqiqot modeli. O‘tkir kasallik biomarkerlar va natijani o‘zgartiradi. Bu tashxis, umr davomiyligi yoki yosharish isboti emas. CRP o‘lchangan va musbat bo‘lishi kerak; aniqlash chegarasidan past natijani nol bilan almashtirib bo‘lmaydi.

### Manbalar

- [Levine ME et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: A cohort study. PLoS Med, 2018](https://pubmed.ncbi.nlm.nih.gov/30596641/)

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
