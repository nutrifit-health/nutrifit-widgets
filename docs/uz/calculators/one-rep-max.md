# 1RM kalkulyatori (bir martalik maksimal vazn)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/one-rep-max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/one-rep-max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/one-rep-max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/one-rep-max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/one-rep-max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/one-rep-max.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`one-rep-max` · [NutriFit](https://nutrifit.health/uz/calculators/one-rep-max)

Sportchining 2–10 takrorlik submaksimal test yordamida jarohat xavfisiz bitta takrorda ko‘tara oladigan maksimal og‘irligini aniqlaydi.

### Foydalanish tartibi

1. To‘liq qizdirish mashqlarini bajaring: Bo‘g‘inlarni umumiy qizdiring, so‘ngra ishchi vaznga qadar asta-sekin og‘irlikni oshirib 3–4 ta tayyorgarlik yondashuvini bajaring.
2. 3–6 takrorlik ishchi yondashuvni bajaring: Zaxirada 1 tadan ko‘p bo‘lmagan takror qoldirib (RPE 9), toza texnika bilan 3 tadan 6 tagacha bajara oladigan vaznni tanlang.
3. Ma’lumotlarni kiriting va foizlardan foydalaning: Vazn va takrorlar sonini kalkulyatorga kiriting. Foizlar jadvali orqali kuch (85%), gipertrofiya (75%) yoki tiklanish (60%) mashg‘ulotlari yuklamasini belgilang.

### Usul va formula

Bir takrorlik maksimum hisobi charchoqqa qadar bajarilgan takrorlar soni va maksimal kuch ulushi o‘rtasidagi regressiya tenglamalariga asoslanadi. Epley formulasi 2–6 takror oralig‘ida yaxshiroq ishlaydi, Brzycki formulasi esa 6–10 takrorda yuqori aniqlik beradi.

Epley: 1RM = Vazn × (1 + 0.0333 × Takr); Brzycki: 1RM = Vazn / (1.0278 − 0.0278 × Takr); Lombardi: Vazn × Takr^0.10; Wathan: (100 × Vazn) / (48.8 + 53.8 × e^(-0.075 × Takr)).

### Cheklovlar

Metabolik charchoq sababli 10–12 takrordan ortiq yondashuvlar uchun tavsiya etilmaydi. Aniqlik harakat texnikasi va mushak tolalari tarkibiga bog‘liq.

### Manbalar

- [Epley B. Poundage chart. Boyd Epley Workout, Lincoln, NE, 1985](https://pubmed.ncbi.nlm.nih.gov/2706858/)
- [Brzycki M. Strength testing—predicting a one-rep max from reps-to-fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds J.M. et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006;20(3):584–592](https://pubmed.ncbi.nlm.nih.gov/16937972/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="one-rep-max" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="one-rep-max" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/one-rep-max?lang=uz&theme=auto"
  title="1RM kalkulyatori (bir martalik maksimal vazn)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
