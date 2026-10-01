# Umumiy xavotir shkalasi GAD-7

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/gad-7.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/gad-7.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/gad-7.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/gad-7.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/gad-7.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/gad-7.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`gad-7` · [NutriFit](https://nutrifit.health/uz/calculators/gad-7)

Umumiy xavotir darajasi va hissiy taranglikni tezkor baholash uchun mo‘ljallangan xalqaro klinik so‘rovnoma.

### Foydalanish tartibi

1. Oxirgi 14 kundagi alomatlarni baholang: So‘nggi 2 hafta davomida asabiylik, qo‘rquv yoki taranglik sizni qanchalik tez-tez bezovta qilganini eslang.
2. Javob variantlarini tanlang: Har bir alomat tezligini 0 ('Umuman yo‘q') dan 3 ('Deyarli har kuni') gacha belgilang.
3. Natija va tavsiyalarni oling: O‘z xavotir darajangizni bilib oling va asab tizimini meʼyorga keltirish bo‘yicha tavsiyalar bilan tanishing.

### Usul va formula

So‘nggi 2 hafta davomidagi xavotir alomatlarini 0 dan 3 ballgacha baholovchi 7 ta savol.

GAD-7 umumiy bali = 7 ta savol ballari yig‘indisi (0–21). 0–4: minimal; 5–9: yengil; 10–14: o‘rtacha; 15–21: kuchli (og‘ir) xavotir.

### Cheklovlar

Skrining tibbiy tashxis sanalmaydi. Vahima xurujlari (panik ataka) yoki fobiyalar bo‘lsa, mutaxassisga murojaat qiling.

### Manbalar

- [Spitzer R.L. et al. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 2006;166(10):1092–1097](https://pubmed.ncbi.nlm.nih.gov/16717171/)
- [Löwe B. et al. Validation and standardization of the Generalized Anxiety Disorder Screener (GAD-7). Med Care, 2008;46(3):266–274](https://pubmed.ncbi.nlm.nih.gov/18388841/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="gad-7" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="gad-7" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/gad-7?lang=uz&theme=auto"
  title="Umumiy xavotir shkalasi GAD-7" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
