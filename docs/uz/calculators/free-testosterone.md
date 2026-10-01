# Erkin testosteron kalkulyatori (Vermeulen)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/free-testosterone.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/free-testosterone.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/free-testosterone.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/free-testosterone.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/free-testosterone.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/free-testosterone.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`free-testosterone` · [NutriFit](https://nutrifit.health/uz/calculators/free-testosterone)

Vermeulen 1999 bog‘lanish modeli bo‘yicha testosteronning erkin va bio-mavjud fraksiyalari. Natija usul referenslari va klinik kontekstni talab qiladi.

### Foydalanish tartibi

1. Ertalab umumiy testosteron va SHBG topshiring: Testosteron ertalab soat 7 dan 10 gacha maksimal bo‘lib, kechqurunga kelib 20–30 % ga kamayadi. Och qoringa, o‘tkir kasalliklarsiz, imkon qadar SK-MS/MS usulida topshiring.
2. Albuminni qo‘shing: O‘lchangan albuminni g/l da kiriting. Shakldagi 43 g/l qiymati misoldir; tahlil o‘rniga taxminiy qiymat kiritish noaniqlikni oshiradi.
3. Agar SHBG nostandart bo‘lsa, erkin fraksiyaga qarang: SHBG o‘zgarganda, umumiy testosteron va erkin fraksiya talqini bo‘yicha farq qilishi mumkin. Ularni belgilar, tahlil usuli va takroriy o‘lchovlar bilan birgalikda ko‘rib chiqing.

### Usul va formula

QUERY LENGTH LIMIT EXCEEDED. MAX ALLOWED QUERY : 500 CHARS

N = Kalb × [Albumin] + 1;  a = N × Kshbg;  b = N + Kshbg × ([SHBG] − [T])
Erkin T = (−b + √(b² + 4·a·[T])) / (2·a)
Bio-mavjud T = Erkin T × N
Kshbg = 1×10⁹ l/mol; Kalb = 3,6×10⁴ l/mol; konsentratsiyalar mol/l da; albumin g/l / 69 000
Qayta hisoblash: T ng/dl × 0,0347 = nmol/l; erkin T nmol/l × 288,4 = pg/ml

### Cheklovlar

Hisoblash umumiy testosteron aniq usulda (SK-MS/MS yoki kalibrlangan immunoanaliz) ertalab soat 7 dan 11 gacha och qoringa, bir necha hafta oralig‘ida ikki marta o‘lchanganda to‘g‘ri bo‘ladi. Albumin meʼyordan chetga chiqqanda natija siljiydi; homiladorlikda va KOK qabul qilinganda SHBG keskin o‘zgaradi. Erkin testosteron referenslari usul va yoshga bog‘liq; quyidagi chegaralar erkaklarga tegishli — ayollar uchun kalkulyator toifasiz qiymatlarni ko‘rsatadi. Gipogonadizm tashxisi belgilar va shaxsiy ko‘rikni talab qiladi.

### Manbalar

- [Vermeulen A., Verdonck L., Kaufman J.M. A critical evaluation of simple methods for the estimation of free testosterone in serum. J Clin Endocrinol Metab, 1999;84(10):3666–3672](https://pubmed.ncbi.nlm.nih.gov/10523012/)
- [Bhasin S. et al. Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab, 2018;103(5):1715–1744](https://pubmed.ncbi.nlm.nih.gov/29562364/)
- [Salonia A. et al. European Association of Urology guidelines on sexual and reproductive health — 2021 update: male sexual dysfunction. Eur Urol, 2021;80(3):333–357](https://pubmed.ncbi.nlm.nih.gov/34183196/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="free-testosterone" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="free-testosterone" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/free-testosterone?lang=uz&theme=auto"
  title="Erkin testosteron kalkulyatori (Vermeulen)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
