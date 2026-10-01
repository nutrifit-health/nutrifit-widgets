# Kunlik kaloriya normasi kalkulyatori (TDEE)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tdee.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tdee.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`tdee` · [NutriFit](https://nutrifit.health/uz/calculators/tdee)

Asosiy almashinuv va kunlik umumiy energiya sarfini, shuningdek vaznni kamaytirish, saqlash va to‘plash uchun kaloriyani hisoblaydi.

### Foydalanish tartibi

1. Tana parametrlarini ko‘rsating: Aniq vazn, bo‘y, jins va yoshni kiriting. Bu asosiy metabolizmni (BMR) hisoblash uchun zarur.
2. Faollik darajasini baholang: Haftalik faolligingizni xolisona tanlang. O‘tirib ishlaganda doimiy sportsiz faollik darajasini oshirib ko‘rsatmang.
3. Maqsad qiymatlarini ko‘ring: Vaznni saqlash TDEE ga teng; kamaytirish maqsadi TDEE dan 20% past, oshirish maqsadi 15% yuqori.

### Usul va formula

Asosiy almashinuv (BMR) 1990-yilgi Mifflin-St Jeor tenglamasi bilan hisoblanadi — bu sog‘lom kattalarda tinch holatdagi sarfni baholashning amaldagi standarti. Kunlik umumiy sarf (TDEE) BMR ni faollik koeffitsiyentiga ko‘paytirish orqali olinadi. Vaznni kamaytirish kaloriyasi TDEE dan 20% kam, to‘plash uchun 15% ko‘p: bunday sur’at mushak to‘qimasini yo‘qotmasdan va keskin sakrashlarsiz vaznni o‘zgartiradi.

BMR (erkak) = 10 × vazn(kg) + 6,25 × bo‘y(sm) − 5 × yosh + 5; BMR (ayol) = 10 × vazn(kg) + 6,25 × bo‘y(sm) − 5 × yosh − 161; TDEE = BMR × faollik koeffitsiyenti

### Cheklovlar

Tenglama sog‘lom kattalarda olingan va taxminan ±10% xatolik beradi. U tana tarkibini hisobga olmaydi: mushak massasi yuqori bo‘lganda natija pasaytirilgan, semizlikda oshirilgan bo‘ladi. Homiladorlar, bolalar, yuqori darajadagi sportchilar va qalqonsimon bez kasalliklari bo‘lganlar uchun alohida metodikalar kerak.

### Manbalar

- [Mifflin M.D., St Jeor S.T. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tdee" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="tdee" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=uz&theme=auto"
  title="Kunlik kaloriya normasi kalkulyatori (TDEE)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
