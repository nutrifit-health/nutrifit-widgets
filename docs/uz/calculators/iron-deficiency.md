# Temir tanqisligi kalkulyatori: TSAT, Ferritin va Ganzoni tanqisligi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/iron-deficiency.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/iron-deficiency.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`iron-deficiency` · [NutriFit](https://nutrifit.health/uz/calculators/iron-deficiency)

TSAT = temir / umumiy temir bog‘lash qobiliyati × 100%. Ganzoni modeli: vazn × (15 − Hb, g/dL) × 2,4 + 35 kg va undan yuqori vazn uchun 500 mg. Faqat Hb va ferritin ikkalasi tanlangan chegaralardan past bo‘lganda ko‘rsatiladi.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: TSAT = temir / umumiy temir bog‘lash qobiliyati × 100%. Ganzoni modeli: vazn × (15 − Hb, g/dL) × 2,4 + 35 kg va undan yuqori vazn uchun 500 mg. Faqat Hb va ferritin ikkalasi tanlangan chegaralardan past bo‘lganda ko‘rsatiladi.
2. Parametrlarni aniqlashtiring: TSAT = temir / umumiy temir bog‘lash qobiliyati × 100%. Ganzoni modeli: vazn × (15 − Hb, g/dL) × 2,4 + 35 kg va undan yuqori vazn uchun 500 mg. Faqat Hb va ferritin ikkalasi tanlangan chegaralardan past bo‘lganda ko‘rsatiladi.
TIBC (µmol/L) = transferrin (g/L) × 25.1. Iron: µg/dL × 0.179 = µmol/L. Hb: g/L ÷ 10 = g/dL.
3. Natijani o‘qing: Bular ko‘rsatkichlarning tavsifiy birikmalari, tashxis emas. Hb chegarasi: erkaklarda 130 g/L, homilador bo‘lmagan ayollarda 120 g/L; WHO 2020 ferritin: 15 µg/L, CRP > 5 mg/L bo‘lsa 70 µg/L. Ganzoni maqsadli Hb, vazn va zaxirasi individual tanlanishi kerak; natija dori dozasi emas.

### Usul va formula

TSAT = temir / umumiy temir bog‘lash qobiliyati × 100%. Ganzoni modeli: vazn × (15 − Hb, g/dL) × 2,4 + 35 kg va undan yuqori vazn uchun 500 mg. Faqat Hb va ferritin ikkalasi tanlangan chegaralardan past bo‘lganda ko‘rsatiladi.

TSAT = temir / umumiy temir bog‘lash qobiliyati × 100%. Ganzoni modeli: vazn × (15 − Hb, g/dL) × 2,4 + 35 kg va undan yuqori vazn uchun 500 mg. Faqat Hb va ferritin ikkalasi tanlangan chegaralardan past bo‘lganda ko‘rsatiladi.
TIBC (µmol/L) = transferrin (g/L) × 25.1. Iron: µg/dL × 0.179 = µmol/L. Hb: g/L ÷ 10 = g/dL.

### Cheklovlar

Bular ko‘rsatkichlarning tavsifiy birikmalari, tashxis emas. Hb chegarasi: erkaklarda 130 g/L, homilador bo‘lmagan ayollarda 120 g/L; WHO 2020 ferritin: 15 µg/L, CRP > 5 mg/L bo‘lsa 70 µg/L. Ganzoni maqsadli Hb, vazn va zaxirasi individual tanlanishi kerak; natija dori dozasi emas.

### Manbalar

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni AM. et al. [Intravenous iron-dextran: therapeutic and experimental possibilities]. Schweiz Med Wochenschr, 1970](https://pubmed.ncbi.nlm.nih.gov/5413918/)
- [Venofer. Summary of Product Characteristics: Ganzoni formula and iron stores](https://www.medicines.org.uk/emc/product/5911/smpc)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="iron-deficiency" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="iron-deficiency" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/iron-deficiency?lang=uz&theme=auto"
  title="Temir tanqisligi kalkulyatori: TSAT, Ferritin va Ganzoni tanqisligi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
