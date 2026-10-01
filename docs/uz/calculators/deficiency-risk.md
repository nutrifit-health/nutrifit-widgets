# Nutriyent tanqisligi xavfi skriningi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/deficiency-risk.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/deficiency-risk.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`deficiency-risk` · [NutriFit](https://nutrifit.health/uz/calculators/deficiency-risk)

Turmush tarzi va ovqatlanish omillarini belgilaydi hamda qaysi nutriyent tanqisligi ehtimoli borligini va uni qanday tahlillar bilan tekshirishni ko‘rsatadi.

### Foydalanish tartibi

1. Ovqatlanish xususiyatlarini belgilang: Parhezdagi cheklovlarni (go‘sht, baliq, sut mahsulotlaridan voz kechish) va odatlarni ko‘rsating.
2. Turmush tarzi va dorilarni inobatga oling: Atrof-muhit omillarini (quyosh kamligi, intensiv sport) va dorilar qabul qilishni (antatsidlar, metformin) belgilang.
3. Tahlillar ro‘yxatini oling: Har bir nutriyent bo‘yicha xavf ballarini va klinik tekshirish uchun aniq laboratoriya markerlarini bilib oling.

### Usul va formula

Bu tashxis emas, xavf omillari ro‘yxati. Har bir omilga NIH Office of Dietary Supplements fact sheets va EFSA ning iste’mol referens qiymatlari bo‘yicha materiallarida xavf omili deb tan olingan nutriyentlar mos qo‘yilgan. Omil vazni bog‘liqlik kuchini aks ettiradi: 3 ball — qoplanmasa tanqislik qonuniy bo‘ladigan holat, 2 — muhim omil, 1 — qo‘shimcha hissa. Ballar har bir nutriyent bo‘yicha yig‘iladi: 2 balldan xavf o‘rtacha, 4 dan yuqori.

Nutriyent bali = belgilangan omillar vaznlari yig‘indisi; 0–1 ball — past xavf, 2–3 — o‘rtacha, 4 va undan yuqori — yuqori

### Cheklovlar

Skrining faqat belgilangan omillarga tayanadi va haqiqiy iste’molni, qo‘shimchalar qabulini, genetikani hamda yondosh kasalliklarni hisobga olmaydi. U tanqislikni tasdiqlamaydi va istisno ham qilmaydi — nutriyent holati laboratoriyada aniqlanadi va shifokor yoki ovqatlanish mutaxassisi tomonidan baholanadi.

### Manbalar

- [NIH Office of Dietary Supplements. Dietary Supplement Fact Sheets (группы риска по нутриентам)](https://ods.od.nih.gov/factsheets/list-all/)
- [EFSA. Dietary Reference Values for the EU (DRV Finder)](https://multimedia.efsa.europa.eu/drvs/index.htm)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="deficiency-risk" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="deficiency-risk" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/deficiency-risk?lang=uz&theme=auto"
  title="Nutriyent tanqisligi xavfi skriningi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
