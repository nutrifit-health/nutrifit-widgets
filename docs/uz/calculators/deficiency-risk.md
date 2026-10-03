# Ovqatlanish va turmush tarzi ro‘yxati

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/deficiency-risk.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/deficiency-risk.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`deficiency-risk` · [NutriFit](https://nutrifit.health/uz/calculators/deficiency-risk)

Mualliflik axborot ro‘yxati: hozirgi ovqatlanish va turmush tarzi xususiyatlarini belgilang va bog‘liq nutriyent mavzularini ko‘ring.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Omillar va nutriyentlar o‘rtasidagi bog‘lanishlar muhokama uchun axborot mavzularidir. NIH ODS va EFSA ovqatlanish hamda xavf guruhlari haqida ma’lumot beradi, ammo bu so‘rovnoma uchun ball yoki tanqislik ehtimolini belgilamaydi.
2. Parametrlarni aniqlashtiring: Mualliflik axborot ro‘yxati: hozirgi ovqatlanish va turmush tarzi xususiyatlarini belgilang va bog‘liq nutriyent mavzularini ko‘ring.
3. Natijani o‘qing: Ro‘yxat haqiqiy iste’mol va so‘rilishni, boyitilgan ovqatlar, qo‘shimchalar va kasalliklarni hisobga olmaydi. U tanqislikni tasdiqlamaydi yoki istisno qilmaydi; tahlillar va tuzatish zarurati individual belgilanadi.

### Usul va formula

Omillar va nutriyentlar o‘rtasidagi bog‘lanishlar muhokama uchun axborot mavzularidir. NIH ODS va EFSA ovqatlanish hamda xavf guruhlari haqida ma’lumot beradi, ammo bu so‘rovnoma uchun ball yoki tanqislik ehtimolini belgilamaydi.

Xavf ballari va toifalari hisoblanmaydi. Faqat belgilangan omillar va bog‘liq nutriyentlar ko‘rsatiladi.

### Cheklovlar

Ro‘yxat haqiqiy iste’mol va so‘rilishni, boyitilgan ovqatlar, qo‘shimchalar va kasalliklarni hisobga olmaydi. U tanqislikni tasdiqlamaydi yoki istisno qilmaydi; tahlillar va tuzatish zarurati individual belgilanadi.

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
  title="Ovqatlanish va turmush tarzi ro‘yxati" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
