# D vitamini: Van Groningen modelini baholash

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vitamin-d-dose.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vitamin-d-dose.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vitamin-d-dose.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vitamin-d-dose.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vitamin-d-dose.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vitamin-d-dose.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`vitamin-d-dose` · [NutriFit](https://nutrifit.health/uz/calculators/vitamin-d-dose)

25(OH)D ikki birlikda va tana vazniga asoslangan tadqiqot bahosi. Avtomatik davolash jadvali belgilanmaydi.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Van Groningen (2010) modeli xolekalsiferolning jami miqdorini vazn va boshlang‘ich 25(OH)D bilan bog‘laydi. Bu yerda tadqiqot maqsadi 75 nmol/L, boshlang‘ich daraja 50 nmol/L dan past, vazn 35–125 kg. Quyi vazn chegarasi interfeysni kattalar konteksti bilan cheklaydi; yosh va klinik istisnolarni shifokor baholaydi. Model qabul jadvali, saqlovchi doza yoki nazorat muddatini belgilamaydi. Endocrine Society 2024 sog‘lom odamlarda kasalliklarning oldini olish uchun universal 25(OH)D maqsadini belgilamaydi.
2. Parametrlarni aniqlashtiring: Jami model bahosi (XB) = 40 × (75 − 25(OH)D, nmol/L) × vazn (kg). 1 ng/mL = 2,496 nmol/L.
3. Natijani o‘qing: Shifokor bilan muhokama qilish uchun tadqiqot bahosi, individual retsept emas. Homiladorlikda, bolalarda, kalsiy almashinuvi buzilishi, buyrak kasalligi, malabsorbsiya yoki granulomatoz kasalliklarda mustaqil davolanish uchun ishlatmang. Model dorilar va qo‘shimchalarni hisobga olmaydi; jami miqdorni bir martalik doza sifatida qabul qilish mumkin emas.

### Usul va formula

Van Groningen (2010) modeli xolekalsiferolning jami miqdorini vazn va boshlang‘ich 25(OH)D bilan bog‘laydi. Bu yerda tadqiqot maqsadi 75 nmol/L, boshlang‘ich daraja 50 nmol/L dan past, vazn 35–125 kg. Quyi vazn chegarasi interfeysni kattalar konteksti bilan cheklaydi; yosh va klinik istisnolarni shifokor baholaydi. Model qabul jadvali, saqlovchi doza yoki nazorat muddatini belgilamaydi. Endocrine Society 2024 sog‘lom odamlarda kasalliklarning oldini olish uchun universal 25(OH)D maqsadini belgilamaydi.

Jami model bahosi (XB) = 40 × (75 − 25(OH)D, nmol/L) × vazn (kg). 1 ng/mL = 2,496 nmol/L.

### Cheklovlar

Shifokor bilan muhokama qilish uchun tadqiqot bahosi, individual retsept emas. Homiladorlikda, bolalarda, kalsiy almashinuvi buzilishi, buyrak kasalligi, malabsorbsiya yoki granulomatoz kasalliklarda mustaqil davolanish uchun ishlatmang. Model dorilar va qo‘shimchalarni hisobga olmaydi; jami miqdorni bir martalik doza sifatida qabul qilish mumkin emas.

### Manbalar

- [van Groningen L et al. Cholecalciferol loading dose guideline for vitamin D-deficient adults. Eur J Endocrinol, 2010](https://pubmed.ncbi.nlm.nih.gov/20139241/)
- [Endocrine Society. Vitamin D for the Prevention of Disease: Clinical Practice Guideline, 2024](https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vitamin-d-dose" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="vitamin-d-dose" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vitamin-d-dose?lang=uz&theme=auto"
  title="D vitamini: Van Groningen modelini baholash" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
