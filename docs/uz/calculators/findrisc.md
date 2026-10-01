# FINDRISC diabet xavfi shkalasi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/findrisc.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/findrisc.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/findrisc.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/findrisc.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/findrisc.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/findrisc.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`findrisc` · [NutriFit](https://nutrifit.health/uz/calculators/findrisc)

Yashirin diabetni erta skrining qilish va 10 yil ichida 2-toifa QD paydo bo‘lish xavfini baholash uchun JSST va IDF tomonidan xalqaro tan olingan so‘rovnoma.

### Foydalanish tartibi

1. Yosh va tana o‘lchamlarini ko‘rsating: Yosh guruhi, BMI toifasi va pastki qovurg‘a bilan yonbosh suyagi qirrasi o‘rtasida santimetrli lenta bilan o‘lchangan bel aylanasini tanlang.
2. Turmush tarzi va ovqatlanishni baholang: Kuniga kamida 30 daqiqa jismoniy faollik bilan shug‘ullanasizmi va har kuni sabzavot, meva yoki rezavorlar isteʼmol qilasizmi, belgilang.
3. Tibbiy anamnezni ko‘rsating: Qon bosimi dori-darmonlarini qabul qilish, o‘tmishda qondagi qand miqdorining oshishi va yaqin qarindoshlarda diabet mavjudligini belgilang.

### Usul va formula

Isbotlangan 8 ta xavf omilini jamlash: yosh, BMI, bel aylanasi, jismoniy faollik, taomnomadagi sabzavotlar, antigipertenziv davolash, anamnezdagi glikemiya va irsiyat.

FINDRISC balli = Yosh (0–4) + BMI (0–3) + Bel (0–4) + Jismoniy faollik (0/2) + Sabzavotlar (0/1) + Qon bosimi dorilari (0/2) + Anamnezdagi glyukoza (0/5) + Irsiyat (0/3/5). Jami: 0–26 ball.

### Cheklovlar

Shkala skrining prognoz vositasi bo‘lib, laboratoriya diagnostikasi (och qoringa plazma glyukozasi, HbA1c, peroral glyukozaga tolerantlik testi) o‘rnini bosmaydi.

### Manbalar

- [Lindström J., Tuomilehto J. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003;26(3):725–731](https://pubmed.ncbi.nlm.nih.gov/12610029/)
- [International Diabetes Federation (IDF). Clinical Practice Recommendations for managing Type 2 Diabetes in Primary Care, 2017](https://www.idf.org/our-activities/care-prevention/clinical-practice-recommendations/)
- [Saaristo T. et al. FINDRISC as an early intervention tool in primary health care. Diabetes Care, 2005;28(12):2900–2907](https://pubmed.ncbi.nlm.nih.gov/16316578/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="findrisc" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="findrisc" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/findrisc?lang=uz&theme=auto"
  title="FINDRISC diabet xavfi shkalasi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
