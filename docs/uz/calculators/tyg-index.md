# TyG indeksi kalkulyatori (triglitseridlar × glyukoza)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tyg-index.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tyg-index.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`tyg-index` · [NutriFit](https://nutrifit.health/uz/calculators/tyg-index)

TyG indeksi va TyG-BMI, TyG-WC hosilalari: och qoringa triglitseridlar va glyukoza bo‘yicha insulinga chidamlilik va kardiometabolik xavfni baholash — insulin tahlilisiz.

### Foydalanish tartibi

1. Och qoringa triglitseridlar va glyukozani oling: Ikkala ko‘rsatkich ham qonning standart bioximiyasiga kiradi. Namuna och qoringa olinishi muhim: ovqatdan keyin triglitseridlar 1,5–2 baravar oshib, indeksni «shishiradi».
2. Blank birliklarini ko‘rsating: Formula mg/dl uchun aniqlangan. Laboratoriya mmol/l bergan bo‘lsa, o‘tkazgichni mmol/l da qoldiring — kalkulyator mg/dl ga avtomatik qayta hisoblaydi.
3. Vazn, bo‘y va belni qo‘shing: TyG-BMI va TyG-WC vistseral semizlik va jigar yog‘li kasalligini «sof» TyG dan aniqroq aniqlaydi. Belni kindik darajasida nafas chiqarganda o‘lchang.

### Usul va formula

TyG indeksi (Simental-Mendía, 2008) — mg/dl dagi och qoringa triglitseridlar va glyukoza ko‘paytmasining yarmining natural logarifmi. U lipotoksiklik va glyukoza o‘zlashtirilishining buzilishini — insulinga chidamlilikning ikki asosiy mexanizmini — aks ettiradi va euglikemik klamp bilan HOMA-IR dan kam bo‘lmagan darajada korrelyatsiyalanadi, bunda qimmat va yomon standartlashtirilgan insulin tahlilini talab qilmaydi. TyG-BMI va TyG-WC hosilalari tana vazni va bel aylanasini qo‘shib, metabolik sindrom va NAJKni aniqlash aniqligini oshiradi.

TyG = ln[ Triglitseridlar (mg/dl) × Glyukoza (mg/dl) / 2 ]
TyG-BMI = TyG × TVI (kg/m²)
TyG-WC = TyG × Bel aylanasi (sm)
Qayta hisoblash: TG mg/dl = mmol/l × 88,57; glyukoza mg/dl = mmol/l × 18,016

### Cheklovlar

TyG ning yagona chegarasi yo‘q: turli populyatsiyalarda yuqori xavf chegarasi 8,5 dan 9,0 gacha o‘zgaradi, osiyo kogortalarida esa pastroq. Indeks oilaviy gipertriglitseridemiya, fibratlar, statinlar va bir kun oldingi alkogol qabulida, shuningdek o‘tkir kasallikda buziladi. Och qoringa (8–12 soat) qiymatlar talab qilinadi. Indeks — tashxis emas, skrining vositasi.

### Manbalar

- [Simental-Mendía L.E., Rodríguez-Morán M., Guerrero-Romero F. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008;6(4):299–304](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F. et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010;95(7):3347–3351](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A. et al. Diagnostic accuracy of the triglyceride and glucose index for insulin resistance: a systematic review. Int J Endocrinol, 2020;2020:4678526](https://pubmed.ncbi.nlm.nih.gov/32256572/)

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
