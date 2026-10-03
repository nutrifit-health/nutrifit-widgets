# Oziq tolalari bo‘yicha ma’lumotnoma

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fiber-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fiber-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`fiber-intake` · [NutriFit](https://nutrifit.health/uz/calculators/fiber-intake)

Yo‘nalishlar alohida ko‘rsatiladi: EFSA kattalarga 25 g/kun, IOM/NASEM 14 g/1000 kkal beradi. IOM yosh va jins bo‘yicha AI: 19–50 yoshda erkaklarga 38 g, ayollarga 25 g; 50 yoshdan keyin 30 va 21 g. Energiya hisobi boshqa yo‘nalishlarni avtomatik almashtirmaydi.

### Foydalanish tartibi

1. Ma’lumotlarni kiriting: Yo‘nalishlar alohida ko‘rsatiladi: EFSA kattalarga 25 g/kun, IOM/NASEM 14 g/1000 kkal beradi. IOM yosh va jins bo‘yicha AI: 19–50 yoshda erkaklarga 38 g, ayollarga 25 g; 50 yoshdan keyin 30 va 21 g. Energiya hisobi boshqa yo‘nalishlarni avtomatik almashtirmaydi.
2. Yo‘nalishlarni taqqoslang: Yo‘nalishlar alohida ko‘rsatiladi: EFSA kattalarga 25 g/kun, IOM/NASEM 14 g/1000 kkal beradi. IOM yosh va jins bo‘yicha AI: 19–50 yoshda erkaklarga 38 g, ayollarga 25 g; 50 yoshdan keyin 30 va 21 g. Energiya hisobi boshqa yo‘nalishlarni avtomatik almashtirmaydi.
3. Cheklovlarni hisobga oling: Homilador yoki emizikli bo‘lmagan 19 yosh va undan katta kattalar uchun. Bular shaxsiy xavfsizlik chegarasi yoki qabziyat, IBS va yuqori xolesterinni davolash usuli emas. Iste’molni ko‘tara olishga qarab oshiring. Har bir gramm tola uchun qo‘shimcha 40 ml suv hisoblanmaydi.

### Usul va formula

Yo‘nalishlar alohida ko‘rsatiladi: EFSA kattalarga 25 g/kun, IOM/NASEM 14 g/1000 kkal beradi. IOM yosh va jins bo‘yicha AI: 19–50 yoshda erkaklarga 38 g, ayollarga 25 g; 50 yoshdan keyin 30 va 21 g. Energiya hisobi boshqa yo‘nalishlarni avtomatik almashtirmaydi.

Yo‘nalishlar alohida ko‘rsatiladi: EFSA kattalarga 25 g/kun, IOM/NASEM 14 g/1000 kkal beradi. IOM yosh va jins bo‘yicha AI: 19–50 yoshda erkaklarga 38 g, ayollarga 25 g; 50 yoshdan keyin 30 va 21 g. Energiya hisobi boshqa yo‘nalishlarni avtomatik almashtirmaydi.

### Cheklovlar

Homilador yoki emizikli bo‘lmagan 19 yosh va undan katta kattalar uchun. Bular shaxsiy xavfsizlik chegarasi yoki qabziyat, IBS va yuqori xolesterinni davolash usuli emas. Iste’molni ko‘tara olishga qarab oshiring. Har bir gramm tola uchun qo‘shimcha 40 ml suv hisoblanmaydi.

### Manbalar

- [EFSA. Dietary Reference Values summary, 2017](https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf)
- [IOM/NASEM. Dietary Reference Intakes: Fiber, 2006](https://www.nationalacademies.org/read/11537/chapter/11)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fiber-intake" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="fiber-intake" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fiber-intake?lang=uz&theme=auto"
  title="Oziq tolalari bo‘yicha ma’lumotnoma" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
