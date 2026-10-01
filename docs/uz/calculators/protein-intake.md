# Kunlik oqsil meʼyori kalkulyatori (ISSN va ESPEN)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/protein-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/protein-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`protein-intake` · [NutriFit](https://nutrifit.health/uz/calculators/protein-intake)

Maqsadlar (vazn tashlash, gipertrofiya, 65+ yosh salomatligi), ovqatlanish turi va mushak oqsili sintezini (MPS) hisobga olgan holda kunlik optimal oqsil miqdorini hisoblaydi.

### Foydalanish tartibi

1. Maqsadli ko‘rsatkichingizni bilib oling: Vazn va maqsadingizni kiriting. Kalkulyator kunlik gramm meʼyorini va bir martalik porsiya hajmini aniqlaydi.
2. Har bir taomlanishga 25–40 grammdan taqsimlang: Bir marta 30 g oqsil qabul qilish (tvorog, 150 g tovuq filesi yoki baliq) mushak anabolizmining leysin triggerini faollashtiradi.
3. Manbalarni xilma-xil qiling: Hayvon oqsillarini (tuxum, parranda go‘shti, baliq, nordon sut mahsulotlari) va o‘simlik oqsillarini (tofu, yasmiq, no‘xat, tempe) birgalikda isteʼmol qiling.

### Usul va formula

Hisoblash Xalqaro sport ovqatlanishi jamiyati (ISSN, 2017) va Yevropa klinik ovqatlanish va metabolizm assotsiatsiyasi (ESPEN) konsensuslariga asoslanadi. Semizlikda (TVI > 28) buyrak giperfiltratsiyasining oldini olish uchun hisob avtomatik ravishda tuzatilgan tana vazniga (AdjBW) o‘tkaziladi.

Baza meʼyori: 1,0–1,4 g/kg; Mushak chiqarish: 1,6–2,2 g/kg; Kaloriya taqchilligi (ozish): 2,0–2,4 g/kg; Chidamlilik: 1,2–1,6 g/kg; 65+ yosh: 1,2–1,5 g/kg; SKK (3–4-bosqich): 0,6–0,8 g/kg. Vegetarianlik: meʼyorga +10%.

### Cheklovlar

Surunkali buyrak kasalligida (SKK) koptokchalar filtratsiyasi tezligi < 60 ml/daq bo‘lganda oqsil meʼyori qatʼiy ravishda nefrolog shifokor bilan kelishilishi shart.

### Manbalar

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Deutz N.E. et al. Protein intake and exercise for optimal muscle function with aging: recommendations from the ESPEN Expert Group. Clin Nutr, 2014;33(6):929–936](https://pubmed.ncbi.nlm.nih.gov/24814383/)
- [Morton R.W. et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on gains in muscle mass and strength in healthy adults. Br J Sports Med, 2018;52(6):376–384](https://pubmed.ncbi.nlm.nih.gov/28698222/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="protein-intake" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="protein-intake" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/protein-intake?lang=uz&theme=auto"
  title="Kunlik oqsil meʼyori kalkulyatori (ISSN va ESPEN)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
