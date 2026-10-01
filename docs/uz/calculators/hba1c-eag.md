# HbA1c ↔ o‘rtacha glyukoza (eAG) konvertori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/hba1c-eag.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/hba1c-eag.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/hba1c-eag.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/hba1c-eag.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/hba1c-eag.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/hba1c-eag.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`hba1c-eag` · [NutriFit](https://nutrifit.health/uz/calculators/hba1c-eag)

ADAG formulasi bo‘yicha HbA1c ni 3 oylik o‘rtacha glikemiyaga qayta hisoblash, teskari hisob va ADA toifalari bilan % ↔ mmol/mol konvertatsiya.

### Foydalanish tartibi

1. Nima borligini tanlang: Qo‘lingizda HbA1c tahlili bo‘lsa — uni kiriting. Glyukometr yoki CGM yuritsangiz va 2–3 oydagi o‘rtacha glyukozani bilsangiz — teskari hisobga o‘ting.
2. Blank birliklarini ko‘rsating: HbA1c foizda (NGSP, AQSh va MDH) yoki mmol/mol da (IFCC, Yevropa) beriladi. 6,5 % 48 mmol/mol ga mos keladi — kalkulyator avtomatik qayta hisoblaydi.
3. eAG ni glyukometr ko‘rsatkichlari bilan solishtiring: Glyukometr bo‘yicha o‘rtacha eAG dan sezilarli past bo‘lsa — siz asosan och qoringa o‘lchab, ovqatdan keyingi cho‘qqilarni o‘tkazib yuborayotgan bo‘lishingiz mumkin. 1,5 mmol/l dan ortiq farqni shifokor bilan muhokama qilish kerak.

### Usul va formula

Glikirlangan gemoglobin 8–12 hafta — eritrotsit hayoti muddati — davomidagi o‘rtacha glyukoza konsentratsiyasini aks ettiradi. A1c-Derived Average Glucose tadqiqoti (ADAG, Nathan 2008) 507 kishida HbA1c ni glyukozaning uzluksiz monitoringi bilan solishtirib, chiziqli bog‘liqlikni chiqardi: eAG (mg/dl) = 28,7 × HbA1c − 46,7. Kalkulyator ikki tomonga ishlaydi — HbA1c dan o‘rtacha glyukozaga va ma’lum o‘rtacha glikemiyadan (masalan, glyukometr yoki CGM bo‘yicha) kutilayotgan HbA1c ga — va NGSP foizlarini Yevropa va Avstraliyada qabul qilingan IFCC birliklariga (mmol/mol) o‘tkazadi.

eAG (mg/dl) = 28,7 × HbA1c (%) − 46,7
eAG (mmol/l) = 1,59 × HbA1c (%) − 2,59
HbA1c (mmol/mol, IFCC) = (HbA1c (%, NGSP) − 2,15) × 10,929
Teskari: HbA1c (%) = (eAG, mg/dl + 46,7) / 28,7

### Cheklovlar

HbA1c eritrotsitlar hayoti muddatini yoki gemoglobin tuzilishini o‘zgartiruvchi holatlarda noaniq: anemiya, gemoglobinopatiyalar, homiladorlik, SBK, yaqinda qon yo‘qotish yoki quyish, temir va B12 tanqisligi. Odamlarning 10–15 % ida HbA1c va glyukoza o‘rtasidagi individual bog‘liqlik o‘rtachadan sezilarli farq qiladi («glikatsiya uzilishi» fenomeni), shuning uchun eAG — o‘lchov emas, populyatsion baho. Diabet tashxisi takroriy test bilan tasdiqlashni talab qiladi.

### Manbalar

- [Nathan D.M. et al. Translating the A1C assay into estimated average glucose values. Diabetes Care, 2008;31(8):1473–1478](https://pubmed.ncbi.nlm.nih.gov/18540046/)
- [American Diabetes Association. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes — 2024. Diabetes Care, 2024;47(Suppl 1):S20–S42](https://pubmed.ncbi.nlm.nih.gov/38078589/)
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
  title="HbA1c ↔ o‘rtacha glyukoza (eAG) konvertori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
