# D vitamini: Van Groningen modelini baholash

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vitamin-d-dose.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vitamin-d-dose.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vitamin-d-dose.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vitamin-d-dose.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vitamin-d-dose.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vitamin-d-dose.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`vitamin-d-dose` · [NutriFit](https://nutrifit.health/uz/calculators/vitamin-d-dose)

Ikki birlikda 25(OH)D va tana vazniga asoslangan tadqiqot xulosasi bahosi. Avtomatik davolash rejimi tayinlanmaydi.

### Foydalanish tartibi

1. O&#39;lchangan 25(OH)D ni kiriting: Xususan, 1,25(OH)2D emas, balki 25-gidroksivitamin D (kalsidiol). Formadagi birliklar nmol/L yoki ng/ml; kerakli birlikni tanlang, shunda kalkulyator o&#39;zgartiradi.
2. Qo&#39;llanilish doirasini tekshiring: 75 nmol/L maqsadli ko&#39;rsatkich tadqiqotda belgilangan va universal norma sifatida tanlanmagan. 50 nmol/L yoki undan yuqori boshlang&#39;ich darajalar uchun model bu yerda hisoblanmaydi.
3. Iltimos, tana vazningizni ko&#39;rsating: Hisoblab bo&#39;lgandan so&#39;ng, bu haqda mutaxassis bilan muhokama qiling. Raqamning o&#39;zi dori vositasini, bir martalik dozani yoki qabul qilish chastotasini aniqlamaydi.

### Usul va formula

QUERY LENGTH LIMIT EXCEEDED. MAX ALLOWED QUERY : 500 CHARS

Jami XB = 40 x (75 − 25(OH)D, nmol/L) x vazn (kg). 1 ng/ml = 2.496 nmol/L.

### Cheklovlar

Bu mutaxassis bilan muhokama qilish uchun tadqiqot bahosi, individual retsept emas. Agar sizda homilador bo&#39;lsangiz, farzandlaringiz bo&#39;lsa, kaltsiy almashinuvi buzilgan bo&#39;lsa, buyrak kasalligi bo&#39;lsa, malabsorbsiya bo&#39;lsa yoki granulomatoz kasalliklar bo&#39;lsa, mustaqil ravishda foydalanmang. Ushbu model dorilar va qo&#39;shimchalarni hisobga olmaydi; umumiy miqdor bitta dozada qabul qilinmasligi kerak.

### Manbalar

- [van Groningen L. et al. Cholecalciferol loading dose guideline for vitamin D-deficient adults. Eur J Endocrinol, 2010;162(4):805–811](https://pubmed.ncbi.nlm.nih.gov/20139241/)
- [Endocrine Society. Vitamin D for the Prevention of Disease: Clinical Practice Guideline, 2024](https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vitamin-d-dose" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="vitamin-d-dose" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vitamin-d-dose?lang=uz&theme=auto"
  title="D vitamini: Van Groningen modelini baholash" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
