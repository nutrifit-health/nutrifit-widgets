# Mualliflik makronutrient rejalashtirgichi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/macros.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/macros.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`macros` · [NutriFit](https://nutrifit.health/uz/calculators/macros)

Oqsil: kamaytirishga 1,8–2,2 g/kg, saqlashga 1,4–1,8, oshirishga 1,8–2,4; yog‘ 0,8–1,2 g/kg. O‘rtacha qiymatlar; uglevod 4/9/4 kcal/g bo‘yicha qolgan kaloriyadan.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Oqsil: kamaytirishga 1,8–2,2 g/kg, saqlashga 1,4–1,8, oshirishga 1,8–2,4; yog‘ 0,8–1,2 g/kg. O‘rtacha qiymatlar; uglevod 4/9/4 kcal/g bo‘yicha qolgan kaloriyadan.
2. Parametrlarni aniqlashtiring: Oqsil: kamaytirishga 1,8–2,2 g/kg, saqlashga 1,4–1,8, oshirishga 1,8–2,4; yog‘ 0,8–1,2 g/kg. O‘rtacha qiymatlar; uglevod 4/9/4 kcal/g bo‘yicha qolgan kaloriyadan.
3. Natijani o‘qing: Bu muallif taqsimoti, ISSN ning aynan me’yori yoki yog‘ fiziologik minimumi emas. Oqsil va yog‘ kaloriya miqdoridan oshsa, to‘liq reja berilmaydi. Kattalar yog‘i AMDR 20–35% — alohida mo‘ljal, shaxsiy tayinlov emas.

### Usul va formula

Oqsil: kamaytirishga 1,8–2,2 g/kg, saqlashga 1,4–1,8, oshirishga 1,8–2,4; yog‘ 0,8–1,2 g/kg. O‘rtacha qiymatlar; uglevod 4/9/4 kcal/g bo‘yicha qolgan kaloriyadan.

Oqsil(g) = vazn × maqsad koeffitsiyenti; Yog‘(g) = vazn × 0,8…1,2; Uglevod(g) = (kaloriya − oqsil × 4 − yog‘ × 9) / 4

### Cheklovlar

Bu muallif taqsimoti, ISSN ning aynan me’yori yoki yog‘ fiziologik minimumi emas. Oqsil va yog‘ kaloriya miqdoridan oshsa, to‘liq reja berilmaydi. Kattalar yog‘i AMDR 20–35% — alohida mo‘ljal, shaxsiy tayinlov emas.

### Manbalar

- [Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017](https://pubmed.ncbi.nlm.nih.gov/28642676/)
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
  title="Mualliflik makronutrient rejalashtirgichi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
