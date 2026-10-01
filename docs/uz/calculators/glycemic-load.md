# Glikemik yuklama kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/glycemic-load.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/glycemic-load.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`glycemic-load` · [NutriFit](https://nutrifit.health/uz/calculators/glycemic-load)

Porsiyaning glikemik yuklamasini glikemik indeks va uglevod miqdori bo‘yicha hisoblaydi — bu kattalik glyukoza javobini indeksning o‘zidan ko‘ra yaxshiroq aks ettiradi.

### Foydalanish tartibi

1. Mahsulotni tanlang yoki GIni kiriting: Ma’lumotnoma mahsulotlar bazasidan (Atkinson 2021 xalqaro jadvallari) foydalaning yoki glikemik indeksni qo‘lda ko‘rsating.
2. Uglevodlar va porsiya hajmini ko‘rsating: 100 g mahsulotdagi uglevodlar miqdorini va porsiyaning haqiqiy vaznini grammda kiriting.
3. Metabolik ta’sirni baholang: Porsiyaning qon qandiga haqiqiy ta’sirini bilib oling: past (≤10), o‘rtacha (11–19) yoki yuqori (≥20) yuklama.

### Usul va formula

Glikemik indeks 50 g uglevod saqlagan porsiyadan keyin glyukoza ko‘tarilish tezligini ko‘rsatadi, lekin haqiqiy porsiya hajmi haqida hech narsa aytmaydi. Glikemik yuklama ikkalasini ham hisobga oladi: indeks aniq porsiyadagi uglevod miqdoriga ko‘paytirilib, 100 ga bo‘linadi. Shuning uchun indeksi yuqori tarvuz past yuklama beradi — porsiyada uglevod kam.

Porsiya uglevodi(g) = 100 g dagi uglevod × porsiya vazni / 100; GY = GI × porsiya uglevodi / 100

### Cheklovlar

Jadval indeks qiymatlari o‘rtachalashtirilgan: nav, yetilganlik, maydalash, tayyorlash usuli hamda oqsil, yog‘ va tola bilan birikish glyukoza javobini o‘zgartiradi. Individual javob sezilarli farq qiladi, diabetda esa hisob glyukozani o‘lchashni yoki monitoring ma’lumotlarini almashtirmaydi.

### Manbalar

- [Atkinson F.S., Brand-Miller J.C. et al. International tables of glycemic index and glycemic load values 2021. Am J Clin Nutr, 2021;114(5):1625–1632](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin L.S.A. et al. Glycemic index, glycemic load and glycemic response: International Scientific Consensus Summit. Nutr Metab Cardiovasc Dis, 2015;25(9):795–815](https://pubmed.ncbi.nlm.nih.gov/26160327/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="glycemic-load" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="glycemic-load" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/glycemic-load?lang=uz&theme=auto"
  title="Glikemik yuklama kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
