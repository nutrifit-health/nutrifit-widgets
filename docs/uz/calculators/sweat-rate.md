# Mashqda ter yo‘qotish bahosi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sweat-rate.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sweat-rate.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`sweat-rate` · [NutriFit](https://nutrifit.health/uz/calculators/sweat-rate)

Ter (L) ≈ oldingi vazn − keyingi vazn (kg) + ichimlik (L) − siydik (L); tezlik = ter / vaqt soatda. Bir xil sharoitda, ho‘l kiyimsiz tortiling.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Ter (L) ≈ oldingi vazn − keyingi vazn (kg) + ichimlik (L) − siydik (L); tezlik = ter / vaqt soatda. Bir xil sharoitda, ho‘l kiyimsiz tortiling.
2. Parametrlarni aniqlashtiring: Ter yo‘qotish (ml) = (Vazn_oldin − Vazn_keyin, g) + Ichilgan_suv(ml) − Siydik(ml); Terlash tezligi (l/soat) = (Ter yo‘qotish / Vaqt_daq) × 60 / 1000; Degidratatsiya % = ((Vazn_oldin − Vazn_keyin) / Vazn_oldin) × 100.
3. Natijani o‘qing: Yo‘qotilgan vazn foizi suvsizlanish tashxisi emas; manfiy qiymat vazn ortishini bildiradi. NATA (2017): sof yo‘qotishning 100–150% — mashqdan keyingi shartli mo‘ljal, ayniqsa tiklanish to‘rt soatdan qisqa bo‘lsa. Bu hamma uchun majburiy hajm yoki mashq davomida ichish tezligi emas.

### Usul va formula

Ter (L) ≈ oldingi vazn − keyingi vazn (kg) + ichimlik (L) − siydik (L); tezlik = ter / vaqt soatda. Bir xil sharoitda, ho‘l kiyimsiz tortiling.

Ter (L) ≈ oldingi vazn − keyingi vazn (kg) + ichimlik (L) − siydik (L); tezlik = ter / vaqt soatda. Bir xil sharoitda, ho‘l kiyimsiz tortiling.

### Cheklovlar

Yo‘qotilgan vazn foizi suvsizlanish tashxisi emas; manfiy qiymat vazn ortishini bildiradi. NATA (2017): sof yo‘qotishning 100–150% — mashqdan keyingi shartli mo‘ljal, ayniqsa tiklanish to‘rt soatdan qisqa bo‘lsa. Bu hamma uchun majburiy hajm yoki mashq davomida ichish tezligi emas.

### Manbalar

- [NATA. Fluid Replacement for the Physically Active, 2017.](https://nata.kglmeridian.com/view/journals/attr/52/9/article-p877.xml)
- [American College of Sports Medicine et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas DT et al. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs SM et al. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011](https://pubmed.ncbi.nlm.nih.gov/22150427/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sweat-rate" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="sweat-rate" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sweat-rate?lang=uz&theme=auto"
  title="Mashqda ter yo‘qotish bahosi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
