# TyG indeksi kalkulyatori (triglitseridlar × glyukoza)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tyg-index.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tyg-index.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`tyg-index` · [NutriFit](https://nutrifit.health/uz/calculators/tyg-index)

Och qoringa o‘lchangan triglitserid va glyukozaga asoslangan tadqiqot indeksi, TyG-BMI va TyG-WC hosilalari bilan.

### Foydalanish tartibi

1. Och qoringa triglitseridlar va glyukozani oling: Ikkala ko‘rsatkich ham qonning standart bioximiyasiga kiradi. Namuna och qoringa olinishi muhim: ovqatdan keyin triglitseridlar 1,5–2 baravar oshib, indeksni «shishiradi».
2. Blank birliklarini ko‘rsating: Formula mg/dl uchun aniqlangan. Laboratoriya mmol/l bergan bo‘lsa, o‘tkazgichni mmol/l da qoldiring — kalkulyator mg/dl ga avtomatik qayta hisoblaydi.
3. Vazn, bo‘y va belni qo‘shing: TyG-BMI va TyG-WC vistseral semizlik va jigar yog‘li kasalligini «sof» TyG dan aniqroq aniqlaydi. Belni kindik darajasida nafas chiqarganda o‘lchang.

### Usul va formula

Bu yerda Lee et al. (2018) ishlatgan ln(TG × glyukoza / 2) varianti qo‘llanadi; har ikkala konsentratsiya mg/dl da. Boshqa nashr etilgan ln(TG × glyukoza)/2 variantining sonli shkalasi boshqa; uning chegaralarini bu yerga ko‘chirish mumkin emas.

TyG = ln[TG (mg/dl) × glyukoza (mg/dl) / 2]. TyG-BMI = TyG × TMI; TyG-WC = TyG × bel (sm).

### Cheklovlar

Bu hisoblash uchun umumiy diagnostik chegaralar belgilanmagan. Indeks insulin rezistentligi, diabet yoki yurak-qon tomir kasalligini tasdiqlamaydi.

### Manbalar

- [Lee J.W., Lim N.K., Park H.Y. TyG and type 2 diabetes risk in middle-aged Koreans. BMC Endocr Disord, 2018;18:33](https://link.springer.com/article/10.1186/s12902-018-0259-x)
- [Simental-Mendía LE et al. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A et al. Diagnostic Accuracy of the Triglyceride and Glucose Index for Insulin Resistance: A Systematic Review. Int J Endocrinol, 2020](https://pubmed.ncbi.nlm.nih.gov/32256572/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tyg-index" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="tyg-index" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tyg-index?lang=uz&theme=auto"
  title="TyG indeksi kalkulyatori (triglitseridlar × glyukoza)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
