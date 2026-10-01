# MKId (VO2max) kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vo2max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vo2max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`vo2max` · [NutriFit](https://nutrifit.health/uz/calculators/vo2max)

Maxsus laboratoriya uskunalarisiz tasdiqlangan amaliy sinovlar asosida aerob quvvat va yurak-nafas tizimi chidamliligini baholaydi.

### Foydalanish tartibi

1. Mos protokolni tanlang: Yuguruvchilarga 12 daqiqalik Kuper testi tavsiya etiladi. Yoshi kattalar yoki yangi boshlovchilar uchun 1 milga Rokport tez yurish testi xavfsizroq.
2. Ko‘rsatkichlarni aniq qayd eting: Kuper testida stadion yoki GPS orqali masofani metrgacha aniqlang. Rokport testida vaqtni va marradan keyingi dastlabki pulsni yozib oling.
3. Natija va sur’atni baholang: Kalkulyator sizning natijangizni Cooper Institute me’yorlari bilan solishtiradi va 5 km hamda 10 km uchun tavsiya etilgan sur’atni ko‘rsatadi.

### Usul va formula

Kalkulyatorda uchta ilmiy tasdiqlangan usul amalga oshirilgan: 12 daqiqalik Kuper yugurish testi, 1 milga Rokport tez yurish testi va tinch-maksimal puls nisbati (Uth et al.).

Kuper: VO2max = (Masofa, m − 504.9) / 44.73; Rokport: 132.853 − 0.0769 × Og‘irlik(funt) − 0.3877 × Yosh + 6.315 × Jins − 3.2649 × Vaqt − 0.1565 × Puls; Uth: 15 × (YuUT max / YuUT tinch).

### Cheklovlar

Maydondagi sinovlar bilvosita baholash usuli hisoblanib, o‘rtacha 5–10% xatolikka ega. Tezlikni taqsimlash, yo‘l qoplamasi, ob-havo va kofein natijalarga ta’sir qiladi.

### Manbalar

- [Cooper K.H. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968;203(3):201–204](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline G.M. et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987;19(3):253–259](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N. et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004;91(1):111–115](https://pubmed.ncbi.nlm.nih.gov/14624296/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vo2max" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="vo2max" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vo2max?lang=uz&theme=auto"
  title="MKId (VO2max) kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
