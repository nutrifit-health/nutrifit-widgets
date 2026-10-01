# BYU kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/macros.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/macros.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`macros` · [NutriFit](https://nutrifit.health/uz/calculators/macros)

Kunlik kaloriyani tana vazni va maqsadni hisobga olib oqsil, yog‘ va uglevodlarga taqsimlaydi — grammda, kaloriyada va foizda.

### Foydalanish tartibi

1. Hisoblash usulini tanlang: Mavjud kaloriya meʼyoringizni kiriting yoki NutriFit tizimiga yosh, jins, boʻy, vazn va faollik asosida kunlik sarfni (TDEE) hisoblashga ruxsat bering.
2. Parametrlar va maqsadni koʻrsating: Maqsadni tanlang: vazn yoʻqotish (20% defitsit), vaznni saqlash yoki mushak toʻplash (15% profitsit). Vaznni kg yoki funtda kiritish mumkin.
3. Shaxsiy BQY rejangizni oling: Oqsil, yogʻ va uglevodlarning gramm, kaloriya va foizdagi ilmiy asoslangan aniq meʼyorlarini darhol oling.

### Usul va formula

Oqsil va yogʻlar kaloriya ulushidan emas, balki tana vaznidan hisoblanadi: bular kaloriya miqdoriga qarab oʻzgarmasligi kerak boʻlgan fiziologik ehtiyojlardir. Oqsil meʼyori ISSN pozitsiyasiga mos keladi (maqsadga qarab 1,4–2,4 g/kg). Yogʻlar 0,8–1,2 g/kg amaliy oraliqda baholanadi va olingan energiya foizi AMDR 20–35% mos yozuvlar oraligʻi bilan taqqoslanadi. Uglevodlar qolgan kaloriyalarni oladi: ular mashgʻulotlar va miya faoliyatini energiya bilan taʼminlaydi.

Oqsil(g) = vazn × maqsad koeffitsiyenti; Yog‘(g) = vazn × 0,8…1,2; Uglevod(g) = (kaloriya − oqsil × 4 − yog‘ × 9) / 4

### Cheklovlar

Umumiy tana vaznidan hisoblash aniq semizlikda oqsil normasini oshirib yuboradi — bu holda toza massaga hisoblash to‘g‘riroq. Sxema ovqatlanishlar bo‘yicha taqsimotni, tolani va uglevodlarga individual chidamlilikni hisobga olmaydi.

### Manbalar

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: Protein and Exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids, 2005 (AMDR)](https://nap.nationalacademies.org/catalog/10490)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="macros" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="macros" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/macros?lang=uz&theme=auto"
  title="BYU kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
