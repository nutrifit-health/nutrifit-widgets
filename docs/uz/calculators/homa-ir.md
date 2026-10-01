# HOMA-IR kalkulyatori: insulinga chidamlilik indeksi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/homa-ir.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/homa-ir.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/homa-ir.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/homa-ir.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/homa-ir.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/homa-ir.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`homa-ir` · [NutriFit](https://nutrifit.health/uz/calculators/homa-ir)

Och qoringa glyukoza va insulin bo‘yicha HOMA-IR, HOMA-β va QUICKI indekslari: insulinga chidamlilik va β-hujayra funksiyasini me’yorlar va talqin bilan baholash.

### Foydalanish tartibi

1. Glyukoza va insulinni bitta namunadan topshiring: Ikkala ko‘rsatkich ham och qoringa bitta qon olishdan o‘lchanishi kerak — ertalab 8–12 soat ovqat, qahva va mashg‘ulotsiz. «Boshqa kundagi» insulin indeksni ma’nosiz qiladi.
2. Qiymatlarni blank birliklarida kiriting: Laboratoriyalar glyukozani mmol/l yoki mg/dl, insulinni mkXB/ml (µIU/mL) yoki pmol/l ko‘rinishida beradi. Birliklarni blankga moslab o‘zgartiring — kalkulyator o‘zi qayta hisoblaydi.
3. Uchala indeksni solishtiring: Indekslarni dastlabki tahlillar, qon olish sharoiti va laboratoriya me’yorlari bilan birga ko‘rib chiqing. HOMA-β oshqozon osti bezining holdan toyishini aniqlamaydi.

### Usul va formula

HOMA1 (Matthews, 1985) va QUICKI (Katz, 2000) och qoringa o‘lchangan glyukoza va insulinga asoslangan modellardir. Ular bir xil ma’lumotlarning turli jihatlarini ifodalaydi va asosan tadqiqotlarda ishlatiladi. HOMA-IR insulin rezistentligini, HOMA-β model doirasidagi sekretsiyani, QUICKI esa insulinga sezgirlikni baholaydi. Indekslar diabetning klinik diagnostika mezonlarini almashtirmaydi.

HOMA-IR = Glyukoza (mmol/l) × Insulin (mkXB/ml) / 22,5
HOMA-β (%) = 20 × Insulin (mkXB/ml) / (Glyukoza (mmol/l) − 3,5)
QUICKI = 1 / [log10(Insulin, mkXB/ml) + log10(Glyukoza, mg/dl)]

### Cheklovlar

Indekslar faqat och qoringa olingan namunalar (8–12 soat) uchun yaroqli va insulinoterapiya, sekretagoglar qabul qilish, dekompensatsiyalangan 1-tip diabet va past glyukoza paytida qo‘llanilmaydi (glyukoza ≤ 3,5 mmol/l bo‘lganda HOMA-β aniqlanmaydi). Insulinning referens qiymatlari laboratoriya usuliga, HOMA-IR chegaralari esa populyatsiyaga bog‘liq (turli tadqiqotlarda 2,0–3,8). Natija — tashxis emas, uglevod almashinuvini shifokor bilan muhokama qilish uchun sabab.

### Manbalar

- [Matthews D.R. et al. Homeostasis model assessment: insulin resistance and β-cell function from fasting plasma glucose and insulin concentrations in man. Diabetologia, 1985;28(7):412–419](https://pubmed.ncbi.nlm.nih.gov/3899825/)
- [Katz A. et al. Quantitative insulin sensitivity check index (QUICKI): a simple, accurate method for assessing insulin sensitivity in humans. J Clin Endocrinol Metab, 2000;85(7):2402–2410](https://pubmed.ncbi.nlm.nih.gov/10902785/)
- [Gayoso-Diz P. et al. Insulin resistance (HOMA-IR) cut-off values and the metabolic syndrome in a general adult population. BMC Endocr Disord, 2013;13:47](https://pubmed.ncbi.nlm.nih.gov/24131857/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="homa-ir" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="homa-ir" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/homa-ir?lang=uz&theme=auto"
  title="HOMA-IR kalkulyatori: insulinga chidamlilik indeksi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
