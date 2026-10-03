# HbA1c va o‘rtacha glyukozani aylantirish

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/hba1c-eag.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/hba1c-eag.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/hba1c-eag.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/hba1c-eag.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/hba1c-eag.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/hba1c-eag.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`hba1c-eag` · [NutriFit](https://nutrifit.health/uz/calculators/hba1c-eag)

Laboratoriya HbA1c dan taxminan 2–3 oydagi o‘rtacha glyukozani yoki teskari taxminiy bahoni hisoblash.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Haqiqiy qiymatlar va mos birliklardan foydalaning.
2. Parametrlarni aniqlashtiring: Boshlang‘ich taxminlarni holatingizga moslang.
3. Natijani o‘qing: Model cheklovlarini hisobga oling; hisob o‘lchov emas.

### Usul va formula

ADAG bog‘lanishi populyatsiya ma’lumotlariga asoslangan baho, har bir odam uchun aniq moslik emas. NGSP/IFCC aylantirishida rasmiy tenglama qo‘llanadi.

eAG (mg/dL) = 28.7 × HbA1c (%) − 46.7; eAG (mmol/L) = eAG (mg/dL) / 18.016; IFCC (mmol/mol) = (NGSP (%) − 2.152) / 0.09148; NGSP (%) = 0.09148 × IFCC + 2.152.

### Cheklovlar

O‘rtacha glyukozadan teskari hisob HbA1c tahlilini almashtirmaydi va tashxis qo‘ymaydi. Anemiya, eritrotsit umrining o‘zgarishi, gemoglobin variantlari va homiladorlik moslikka ta’sir qilishi mumkin. Tashxis shifokor bahosi va odatda qayta tasdiqlashni talab etadi.

### Manbalar

- [Nathan DM et al. Translating the A1C assay into estimated average glucose values. Diabetes Care, 2008](https://pubmed.ncbi.nlm.nih.gov/18540046/)
- [American Diabetes Association Professional Practice Committee. et al. 2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes-2024. Diabetes Care, 2024](https://pubmed.ncbi.nlm.nih.gov/38078589/)
- [NGSP. IFCC Standardization of HbA1c: master equation NGSP ↔ IFCC](https://ngsp.org/ifcc.asp)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="hba1c-eag" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="hba1c-eag" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/hba1c-eag?lang=uz&theme=auto"
  title="HbA1c va o‘rtacha glyukozani aylantirish" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
