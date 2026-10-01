# Laboratoriya sinov birligi konvertori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lab-unit-converter.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lab-unit-converter.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lab-unit-converter.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lab-unit-converter.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lab-unit-converter.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lab-unit-converter.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`lab-unit-converter` · [NutriFit](https://nutrifit.health/uz/calculators/lab-unit-converter)

Molyar massalarga asoslangan SI (mmol/l, μmol/l, nmol/l, pmol/l) va an&#39;anaviy birliklar (mg/dl, ng/ml, pg/ml) o&#39;rtasida 33 ta laboratoriya parametrlarini konvertatsiya qilish.

### Foydalanish tartibi

1. Ko&#39;rsatkichni tanlang: Ro&#39;yxat eng keng tarqalgan 33 ta analitni o&#39;z ichiga oladi: glyukoza va xolesteroldan tortib D vitamini, testosteron va kortizolgacha. Koeffitsient xolesterin, LDL va HDL uchun bir xil.
2. Iltimos, yo&#39;nalishni ko&#39;rsating: SI → an&#39;anaviy, agar shakl mmol/L yoki nmol/L da bo&#39;lsa va xorijiy mahsulotdan olingan ma&#39;lumotnoma mg/dL yoki ng/ml da bo&#39;lsa. Va aksincha, agar test chet elda o&#39;tkazilgan bo&#39;lsa.
3. Faqat raqamni emas, balki ma&#39;lumotnomani tekshiring: Malumot intervallari laboratoriya usuliga bog&#39;liq. Qiymatni to&#39;g&#39;ri diapazon bilan taqqoslash uchun shakldagi normal diapazonlarni qayta hisoblang.

### Usul va formula

Koeffitsient massa konsentratsiyasini molar massa va birlik hajmini hisobga olgan holda molyar konsentratsiyaga o&#39;zgartiradi. AMA va Labcorp dan olingan umumiy laboratoriya koeffitsientlari qo&#39;llaniladi. Insulin va prolaktin uchun koeffitsient tahlil kalibrlashiga bog&#39;liq; siz laboratoriyangiz qiymatini kiritishingiz mumkin. Karbamid uchun birlik mg/dL butun karbamid molekulasining massasini emas, balki karbamid azotining massasini - BUN ni ifodalaydi.

SI = massa qiymati × koeffitsient. Teskari tarjima: SI ÷ koeffitsient. Insulin va prolaktin uchun laboratoriya koeffitsientini tekshiring; mg/dL BUN va mg/dL karbamid bir-birining o&#39;rnini bosa olmaydi.

### Cheklovlar

Birliklarni konvertatsiya qilish natijani sharhlamaydi yoki tashxis qo&#39;ymaydi. Malumot intervallari laboratoriya va usulga qarab farq qiladi; ularning chegaralarini alohida konvertatsiya qiling. Insulin va prolaktin uchun koeffitsientni laboratoriya bilan tekshiring. BUN konvertatsiyasi mg/dL da karbamid sifatida ko&#39;rsatilgan natijalar uchun mos emas.

### Manbalar

- [Young D.S. Implementation of SI units for clinical laboratory data. Style specifications and conversion tables. Ann Intern Med, 1987;106(1):114–129](https://pubmed.ncbi.nlm.nih.gov/3789557/)
- [AMA Manual of Style, 11th ed. Units of Measure: Conventional Units and SI Units in Clinical Chemistry. Oxford University Press, 2020](https://academic.oup.com/amamanualofstyle/si-conversion-calculator)
- [NIST Special Publication 811. Guide for the Use of the International System of Units (SI), 2008](https://www.nist.gov/pml/special-publication-811)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lab-unit-converter" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="lab-unit-converter" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lab-unit-converter?lang=uz&theme=auto"
  title="Laboratoriya sinov birligi konvertori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
