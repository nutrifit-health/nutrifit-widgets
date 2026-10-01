# Temir tanqisligi kalkulyatori: TSAT, Ferritin va Ganzoni tanqisligi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/iron-deficiency.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/iron-deficiency.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`iron-deficiency` · [NutriFit](https://nutrifit.health/uz/calculators/iron-deficiency)

TSAT, CRP uchun sozlangan ferritin mos yozuvlar chegarasi va Ganzoni arifmetik modeli. Ushbu parametrlarning kombinatsiyasi tashxis qo&#39;yish uchun asos bo&#39;lmaydi.

### Foydalanish tartibi

1. Sinov natijalarini tayyorlang: Bitta laboratoriya testi natijalaridan foydalaning: ferritin, temir, TIBC yoki transferrin, gemoglobin va CRP. Testga tayyorgarlik ko&#39;rish bo&#39;yicha ko&#39;rsatmalar uchun laboratoriya bilan bog&#39;laning.
2. SRB qo&#39;shish: CRP 5 mg/L dan yuqori o&#39;lchanganda, ferritin mos yozuvlar diapazoni 15 dan 70 mkg/L gacha o&#39;zgaradi. Bu talqindagi barcha noaniqliklarni bartaraf etmaydi.
3. Ko&#39;rsatkichlar kombinatsiyasini muhokama qiling: Gemoglobinning pastligi har doim ham temir tanqisligi bilan bog&#39;liq emas va uning yo&#39;qligi temir tanqisligini istisno qilmaydi. Natijalarni alomatlaringiz va klinik holatingizga qarab baholang.

### Usul va formula

TSAT - bu sarum temirining TIBC ga teng birliklarda nisbati. Transferringa asoslangan TIBC taxminiy hisoblanadi. JSST 2020 ferritin ma&#39;lumotnoma qiymati qo&#39;llaniladi: yallig&#39;lanishsiz 15 mkg/L va CRP &gt; 5 mg/L bilan 70 mkg/L. Kasalliklar va klinik sharoit turli chegaralarni talab qilishi mumkin. Ko&#39;rsatkichlarning kombinatsiyasi anemiya sababini aniqlamaydi. Ganzoni ayollarda 120 g/L dan past Hb yoki erkaklarda 130 g/L uchun, belgilangan maqsad 150 g/L va 500 mg depo bilan, faqat vazni ≥ 35 kg uchun ko&#39;rsatiladi.

TSAT (%) = Sarum temir / TIBC × 100&#10; TLC (µmol/l) ≈ Transferrin (g/l) × 25.1&#10; Temir tanqisligi (mg, Ganzoni) = Og&#39;irligi (kg) × (Nishonli Hb − Hb, g/dL) × 2.4 + Depot (35 kg ≥ vazn uchun 500 mg)&#10; Konversiya: Temir mkg/dL x 0.179 = μmol/L; Hb g/L / 10 = g/dL

### Cheklovlar

Homilador bo&#39;lmagan kattalar uchun. O&#39;lchangan CRP ni kiriting; noma&#39;lum natija nolga teng deb hisoblanmaydi. Ferritin va TSAT yallig&#39;lanishga, laboratoriya test natijalariga va yaqinda o&#39;tkazilgan davolanishga bog&#39;liq. Ganzoni hisoblashi yuborish yo&#39;lini, preparatni, dozani yoki davolash davomiyligini aniqlamaydi.

### Manbalar

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni A.M. Intravenous iron-dextran: therapeutic and experimental possibilities. Schweiz Med Wochenschr, 1970;100(7):301–303](https://pubmed.ncbi.nlm.nih.gov/5413918/)
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
