# Oqsil iste’moli bo‘yicha ma’lumotnoma

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/protein-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/protein-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`protein-intake` · [NutriFit](https://nutrifit.health/uz/calculators/protein-intake)

Sog‘lom kattalar uchun EFSA PRI — 0,83 g/kg/kun. ISSN sog‘lom mashq qiladigan kattalarga 1,4–2,0 g/kg/kun, ESPEN sog‘lom keksalarga 1,0–1,2 miqdorini keltiradi. Hisob kiritilgan haqiqiy tana vazniga asoslanadi. Diapazon xavfsizlikning yuqori chegarasi emas.

### Foydalanish tartibi

1. Ma’lumotlarni kiriting: Sog‘lom kattalar uchun EFSA PRI — 0,83 g/kg/kun. ISSN sog‘lom mashq qiladigan kattalarga 1,4–2,0 g/kg/kun, ESPEN sog‘lom keksalarga 1,0–1,2 miqdorini keltiradi. Hisob kiritilgan haqiqiy tana vazniga asoslanadi. Diapazon xavfsizlikning yuqori chegarasi emas.
2. Yo‘nalishlarni taqqoslang: Sog‘lom kattalar uchun EFSA PRI — 0,83 g/kg/kun. ISSN sog‘lom mashq qiladigan kattalarga 1,4–2,0 g/kg/kun, ESPEN sog‘lom keksalarga 1,0–1,2 miqdorini keltiradi. Hisob kiritilgan haqiqiy tana vazniga asoslanadi. Diapazon xavfsizlikning yuqori chegarasi emas.
3. Cheklovlarni hisobga oling: Bular shaxsiy optimal doza emas, aholi guruhlari uchun yo‘nalishlardir. Shakl buyrak kasalligi, homiladorlik, kasallik, yetarli ovqatlanmaslik yoki ancha ortiqcha vaznda ovqatlanishni belgilamaydi. Bunday holatlarda hisob vazni va me’yor individual tanlanadi.

### Usul va formula

Sog‘lom kattalar uchun EFSA PRI — 0,83 g/kg/kun. ISSN sog‘lom mashq qiladigan kattalarga 1,4–2,0 g/kg/kun, ESPEN sog‘lom keksalarga 1,0–1,2 miqdorini keltiradi. Hisob kiritilgan haqiqiy tana vazniga asoslanadi. Diapazon xavfsizlikning yuqori chegarasi emas.

Sog‘lom kattalar uchun EFSA PRI — 0,83 g/kg/kun. ISSN sog‘lom mashq qiladigan kattalarga 1,4–2,0 g/kg/kun, ESPEN sog‘lom keksalarga 1,0–1,2 miqdorini keltiradi. Hisob kiritilgan haqiqiy tana vazniga asoslanadi. Diapazon xavfsizlikning yuqori chegarasi emas.

### Cheklovlar

Bular shaxsiy optimal doza emas, aholi guruhlari uchun yo‘nalishlardir. Shakl buyrak kasalligi, homiladorlik, kasallik, yetarli ovqatlanmaslik yoki ancha ortiqcha vaznda ovqatlanishni belgilamaydi. Bunday holatlarda hisob vazni va me’yor individual tanlanadi.

### Manbalar

- [EFSA. Population reference intakes for protein, 2012](https://www.efsa.europa.eu/en/press/news/120209)
- [ISSN. Protein and exercise, 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/)
- [ESPEN Expert Group. Protein intake and exercise with aging, 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4208946/)

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
  title="Oqsil iste’moli bo‘yicha ma’lumotnoma" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
