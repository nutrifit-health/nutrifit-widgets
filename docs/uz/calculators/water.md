# Kunlik suvning evristik bahosi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/water.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/water.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`water` · [NutriFit](https://nutrifit.health/uz/calculators/water)

Tanlangan model: 30 mL/kg + yuklama soatiga 500 mL + issiqda 500 mL. Shartli 75% ichimlikdan; stakan = 250 mL. Yoshga qarab kamaytirilmaydi.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Tanlangan model: 30 mL/kg + yuklama soatiga 500 mL + issiqda 500 mL. Shartli 75% ichimlikdan; stakan = 250 mL. Yoshga qarab kamaytirilmaydi.
2. Parametrlarni aniqlashtiring: Tanlangan model: 30 mL/kg + yuklama soatiga 500 mL + issiqda 500 mL. Shartli 75% ichimlikdan; stakan = 250 mL. Yoshga qarab kamaytirilmaydi.
3. Natijani o‘qing: Bular farazlar, EFSA me’yori emas. EFSA: ichimlik va ovqatdan umumiy suv ayollarga 2,0 L, erkaklarga 2,5 L; mo‘tadil sharoitda kattalar va keksalarga bir xil. Ter va kasallik cheklovlari alohida baholanadi.

### Usul va formula

Tanlangan model: 30 mL/kg + yuklama soatiga 500 mL + issiqda 500 mL. Shartli 75% ichimlikdan; stakan = 250 mL. Yoshga qarab kamaytirilmaydi.

Tanlangan model: 30 mL/kg + yuklama soatiga 500 mL + issiqda 500 mL. Shartli 75% ichimlikdan; stakan = 250 mL. Yoshga qarab kamaytirilmaydi.

### Cheklovlar

Bular farazlar, EFSA me’yori emas. EFSA: ichimlik va ovqatdan umumiy suv ayollarga 2,0 L, erkaklarga 2,5 L; mo‘tadil sharoitda kattalar va keksalarga bir xil. Ter va kasallik cheklovlari alohida baholanadi.

### Manbalar

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [American College of Sports Medicine et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="water" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="water" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/water?lang=uz&theme=auto"
  title="Kunlik suvning evristik bahosi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
