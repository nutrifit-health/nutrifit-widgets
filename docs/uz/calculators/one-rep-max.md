# Bir takror maksimumi bahosi 1RM

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/one-rep-max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/one-rep-max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/one-rep-max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/one-rep-max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/one-rep-max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/one-rep-max.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`one-rep-max` · [NutriFit](https://nutrifit.health/uz/calculators/one-rep-max)

Asosiy natija — muallif tanlagan Epley va Brzycki o‘rtachasi. Alohida formulalar va o‘rtachaning arifmetik foizlari ko‘rsatiladi.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Asosiy natija — muallif tanlagan Epley va Brzycki o‘rtachasi. Alohida formulalar va o‘rtachaning arifmetik foizlari ko‘rsatiladi.
2. Parametrlarni aniqlashtiring: Epley: w × (1 + r/30); Brzycki: w / (1.0278 − 0.0278 × r); Lombardi: w × r^0.10; Wathan: 100 × w / (48.8 + 53.8 × exp(−0.075 × r)); Mayhew: 100 × w / (52.2 + 41.9 × exp(−0.055 × r)).
w — vazn, kg; r — takrorlash soni. r = 1 bo‘lsa, barcha baholar w ga teng.
3. Natijani o‘qing: Holdan toyguncha bajarilgan bir yondashuvdagi og‘irlik va takror sonini kiriting. Aniqlik mashq va texnikaga bog‘liq, ko‘p takrorda pasayadi. Og‘irlik foizi muayyan takror sonini kafolatlamaydi.

### Usul va formula

Asosiy natija — muallif tanlagan Epley va Brzycki o‘rtachasi. Alohida formulalar va o‘rtachaning arifmetik foizlari ko‘rsatiladi.

Epley: w × (1 + r/30); Brzycki: w / (1.0278 − 0.0278 × r); Lombardi: w × r^0.10; Wathan: 100 × w / (48.8 + 53.8 × exp(−0.075 × r)); Mayhew: 100 × w / (52.2 + 41.9 × exp(−0.055 × r)).
w — vazn, kg; r — takrorlash soni. r = 1 bo‘lsa, barcha baholar w ga teng.

### Cheklovlar

Holdan toyguncha bajarilgan bir yondashuvdagi og‘irlik va takror sonini kiriting. Aniqlik mashq va texnikaga bog‘liq, ko‘p takrorda pasayadi. Og‘irlik foizi muayyan takror sonini kafolatlamaydi.

### Manbalar

- [LeSuer D.A. et al. The Accuracy of Prediction Equations for Estimating 1-RM Performance in the Bench Press, Squat, and Deadlift. J Strength Cond Res, 1997;11(4):211–213](https://paulogentil.com/pdf/The%20Accuracy%20of%20Prediction%20Equations%20for%20Estimating%201-RM%20Performance%20in%20the%20Bench%20Press%2C%20Squat%2C%20and%20Deadlift.pdf)
- [Brzycki M. Strength Testing—Predicting a One-Rep Max from Reps-to-Fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds JM et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006](https://pubmed.ncbi.nlm.nih.gov/16937972/)

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
  title="Bir takror maksimumi bahosi 1RM" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
