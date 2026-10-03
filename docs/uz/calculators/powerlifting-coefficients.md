# Uchkurash koeffitsientlari DOTS, Wilks va IPF GL

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/powerlifting-coefficients.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/powerlifting-coefficients.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/uz/calculators/powerlifting-coefficients)

Tortilishdagi vazn va eng yaxshi muvaffaqiyatli o‘tirib-turish, yotib siqish hamda tortish yig‘indisini kilogrammda kiriting. DOTS, klassik Wilks va klassik uchkurash uchun IPF GL 2020.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Tortilishdagi vazn va eng yaxshi muvaffaqiyatli o‘tirib-turish, yotib siqish hamda tortish yig‘indisini kilogrammda kiriting. DOTS, klassik Wilks va klassik uchkurash uchun IPF GL 2020. DOTS koeffitsienti vazni erkaklarda 40–210 kg, ayollarda 40–150 kg bilan cheklanadi; tashqarida chegara vazni qo‘llanadi.
2. Parametrlarni aniqlashtiring: DOTS: Koeffitsient = 500 / (A×Vazn^4 + B×Vazn^3 + C×Vazn^2 + D×Vazn + E); DOTS ballari = Jami (kg) × Koeffitsient; IPF GL Points: 100 × Jami / (A − B × e^(−C × Vazn)); Wilks: 5-darajali ko‘phad.
3. Natijani o‘qing: Bu turli qiyosiy ballar, universal sport darajasi emas. Ushbu IPF GL alohida siqish yoki jihozli uchkurash uchun emas. Bir xil yo‘nalishni solishtiring; yosh tuzatishlari kiritilmagan.

### Usul va formula

Tortilishdagi vazn va eng yaxshi muvaffaqiyatli o‘tirib-turish, yotib siqish hamda tortish yig‘indisini kilogrammda kiriting. DOTS, klassik Wilks va klassik uchkurash uchun IPF GL 2020. DOTS koeffitsienti vazni erkaklarda 40–210 kg, ayollarda 40–150 kg bilan cheklanadi; tashqarida chegara vazni qo‘llanadi.

DOTS: Koeffitsient = 500 / (A×Vazn^4 + B×Vazn^3 + C×Vazn^2 + D×Vazn + E); DOTS ballari = Jami (kg) × Koeffitsient; IPF GL Points: 100 × Jami / (A − B × e^(−C × Vazn)); Wilks: 5-darajali ko‘phad.

### Cheklovlar

Bu turli qiyosiy ballar, universal sport darajasi emas. Ushbu IPF GL alohida siqish yoki jihozli uchkurash uchun emas. Bir xil yo‘nalishni solishtiring; yosh tuzatishlari kiritilmagan.

### Manbalar

- [OpenPowerlifting. Reference DOTS implementation and attribution to Tim Konertz.](https://gitlab.com/openpowerlifting/opl-data/blob/main/crates/coefficients/src/dots.rs)
- [Wilks R. The Wilks Formula for Powerlifting. Australian Powerlifting Federation, 1997](https://www.powerlifting.sport/)
- [International Powerlifting Federation. IPF GL Points Formula for Classic and Equipped Powerlifting, 2020](https://www.powerlifting.sport/rules/codes/info/ipf-formula)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="powerlifting-coefficients" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="powerlifting-coefficients" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/powerlifting-coefficients?lang=uz&theme=auto"
  title="Uchkurash koeffitsientlari DOTS, Wilks va IPF GL" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
