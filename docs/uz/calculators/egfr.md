# CKD-EPI 2021 bo‘yicha KFT (eGFR) kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/egfr.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/egfr.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/egfr.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/egfr.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/egfr.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/egfr.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`egfr` · [NutriFit](https://nutrifit.health/uz/calculators/egfr)

CKD-EPI 2021 bo‘yicha hisobiy KFT (kreatinin, ixtiyoriy sistatin C), Kokroft — Golt bo‘yicha kreatinin klirensi va KDIGO bo‘yicha SBK bosqichi — mkmol/l va mg/dl qayta hisoblash bilan.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Koptokcha filtratsiya tezligi — buyrak funksiyasining asosiy ko‘rsatkichi. CKD-EPI 2021 tenglamasi (Inker et al., NEJM) uni zardob kreatinini, yosh va jins bo‘yicha amaliyotdan chiqarilgan irqiy koeffitsientsiz chiqaradi. Sistatin C mavjud bo‘lganda CKD-EPI 2021 cr-cys birlashgan tenglamasi qo‘llaniladi — u nostandart mushak massasi bo‘lgan odamlarda (sportchilar, sarkopeniya, amputatsiyalar, veganlar) aniqroq. Qo‘shimcha kalkulyator dori dozalash uchun hozirgacha qo‘llaniladigan Kokroft — Golt bo‘yicha kreatinin klirensini va KDIGO bo‘yicha G1–G5 SBK bosqichini ko‘rsatadi.
2. Parametrlarni aniqlashtiring: eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1,200 × 0,9938^Yosh × 1,012 [ayol]
κ = 0,7 (ayol) / 0,9 (erkak);  α = −0,241 (ayol) / −0,302 (erkak);  Scr — kreatinin, mg/dl (= mkmol/l / 88,4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0,544 × min(Scys/0,8,1)^−0,323 × max(Scys/0,8,1)^−0,778 × 0,9961^Yosh × 0,963 [ayol]
Kokroft — Golt (ml/min) = (140 − Yosh) × Vazn (kg) × 0,85 [ayol] / (72 × Scr, mg/dl)
3. Natijani o‘qing: CKD-EPI 2021 filtratsiyani; Cockcroft–Gault tana yuzasiga indekslanmagan kreatinin klirensini mL/min da baholaydi. Surunkali buyrak kasalligi kamida uch oy davom etgan o‘zgarishlarni talab qiladi; bitta qiymat dializ zaruratini belgilamaydi.

### Usul va formula

Koptokcha filtratsiya tezligi — buyrak funksiyasining asosiy ko‘rsatkichi. CKD-EPI 2021 tenglamasi (Inker et al., NEJM) uni zardob kreatinini, yosh va jins bo‘yicha amaliyotdan chiqarilgan irqiy koeffitsientsiz chiqaradi. Sistatin C mavjud bo‘lganda CKD-EPI 2021 cr-cys birlashgan tenglamasi qo‘llaniladi — u nostandart mushak massasi bo‘lgan odamlarda (sportchilar, sarkopeniya, amputatsiyalar, veganlar) aniqroq. Qo‘shimcha kalkulyator dori dozalash uchun hozirgacha qo‘llaniladigan Kokroft — Golt bo‘yicha kreatinin klirensini va KDIGO bo‘yicha G1–G5 SBK bosqichini ko‘rsatadi.

eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1,200 × 0,9938^Yosh × 1,012 [ayol]
κ = 0,7 (ayol) / 0,9 (erkak);  α = −0,241 (ayol) / −0,302 (erkak);  Scr — kreatinin, mg/dl (= mkmol/l / 88,4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0,544 × min(Scys/0,8,1)^−0,323 × max(Scys/0,8,1)^−0,778 × 0,9961^Yosh × 0,963 [ayol]
Kokroft — Golt (ml/min) = (140 − Yosh) × Vazn (kg) × 0,85 [ayol] / (72 × Scr, mg/dl)

### Cheklovlar

CKD-EPI 2021 filtratsiyani; Cockcroft–Gault tana yuzasiga indekslanmagan kreatinin klirensini mL/min da baholaydi. Surunkali buyrak kasalligi kamida uch oy davom etgan o‘zgarishlarni talab qiladi; bitta qiymat dializ zaruratini belgilamaydi.

### Manbalar

- [Inker LA et al. New Creatinine- and Cystatin C-Based Equations to Estimate GFR without Race. N Engl J Med, 2021](https://pubmed.ncbi.nlm.nih.gov/34554658/)
- [KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl, 2013;3(1):1–150](https://kdigo.org/guidelines/ckd-evaluation-and-management/)
- [Cockcroft DW et al. Prediction of creatinine clearance from serum creatinine. Nephron, 1976](https://pubmed.ncbi.nlm.nih.gov/1244564/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="egfr" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="egfr" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/egfr?lang=uz&theme=auto"
  title="CKD-EPI 2021 bo‘yicha KFT (eGFR) kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
