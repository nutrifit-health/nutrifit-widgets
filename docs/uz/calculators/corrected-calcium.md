# Albumin bo‘yicha tuzatilgan kalsiy kalkulyatori (Payne)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/corrected-calcium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/corrected-calcium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`corrected-calcium` · [NutriFit](https://nutrifit.health/uz/calculators/corrected-calcium)

Tuzatilgan kalsiy = umumiy kalsiy + 0,02 × (40 − albumin), kalsiy mmol/L, albumin g/L da. Bu Payne soddalashtirilgan formulasi.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Tuzatilgan kalsiy = umumiy kalsiy + 0,02 × (40 − albumin), kalsiy mmol/L, albumin g/L da. Bu Payne soddalashtirilgan formulasi.
2. Parametrlarni aniqlashtiring: Tuzatilgan kalsiy = umumiy kalsiy + 0,02 × (40 − albumin), kalsiy mmol/L, albumin g/L da. Bu Payne soddalashtirilgan formulasi.
Ca: mg/dL × 0.2495 = mmol/L; mmol/L ÷ 0.2495 = mg/dL. Albumin: g/dL × 10 = g/L.
3. Natijani o‘qing: Tuzatish ionlashgan kalsiyni o‘lchamaydi va natijani, ayniqsa albumin past bo‘lganda, noto‘g‘ri tasniflashi mumkin. Kalsiyning universal toifasi berilmaydi.

### Usul va formula

Tuzatilgan kalsiy = umumiy kalsiy + 0,02 × (40 − albumin), kalsiy mmol/L, albumin g/L da. Bu Payne soddalashtirilgan formulasi.

Tuzatilgan kalsiy = umumiy kalsiy + 0,02 × (40 − albumin), kalsiy mmol/L, albumin g/L da. Bu Payne soddalashtirilgan formulasi.
Ca: mg/dL × 0.2495 = mmol/L; mmol/L ÷ 0.2495 = mg/dL. Albumin: g/dL × 10 = g/L.

### Cheklovlar

Tuzatish ionlashgan kalsiyni o‘lchamaydi va natijani, ayniqsa albumin past bo‘lganda, noto‘g‘ri tasniflashi mumkin. Kalsiyning universal toifasi berilmaydi.

### Manbalar

- [Payne RB et al. Interpretation of serum calcium in patients with abnormal serum proteins. Br Med J, 1973](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson JH et al. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025](https://pubmed.ncbi.nlm.nih.gov/39836424/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="corrected-calcium" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="corrected-calcium" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/corrected-calcium?lang=uz&theme=auto"
  title="Albumin bo‘yicha tuzatilgan kalsiy kalkulyatori (Payne)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
