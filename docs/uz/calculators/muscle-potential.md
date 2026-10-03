# Casey Butt antropometrik modeli

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/muscle-potential.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/muscle-potential.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`muscle-potential` · [NutriFit](https://nutrifit.health/uz/calculators/muscle-potential)

Bo‘y, bilak, to‘piq va taxminiy yog‘dan massa va aylanalar evristik bahosi. Dastlabki aylanalar taxminan 8–10% yog‘li erkak bodibildyerlarni tasvirlaydi. Berkhan: alohida mo‘ljal — bo‘y (sm) − 100 kg.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Bo‘y, bilak, to‘piq va taxminiy yog‘dan massa va aylanalar evristik bahosi. Dastlabki aylanalar taxminan 8–10% yog‘li erkak bodibildyerlarni tasvirlaydi. Berkhan: alohida mo‘ljal — bo‘y (sm) − 100 kg.
2. Parametrlarni aniqlashtiring: Maks LBM = Bo‘y^1,5 × [sqrt(Bilak)/22,6670 + sqrt(To‘piq)/17,0104] × [(Yog‘%/224) + 1]; Berxan musobaqa vazni (~5% yog‘) = Bo‘y (sm) − 100.
3. Natijani o‘qing: Erkaklar namunasi ayollar me’yorini asoslamaydi. Model genetikani o‘lchamaydi, mushak chegarasini isbotlamaydi yoki muddatni bashorat qilmaydi. Tanlangan yog‘ — faraz, tavsiya etilgan maqsad emas.

### Usul va formula

Bo‘y, bilak, to‘piq va taxminiy yog‘dan massa va aylanalar evristik bahosi. Dastlabki aylanalar taxminan 8–10% yog‘li erkak bodibildyerlarni tasvirlaydi. Berkhan: alohida mo‘ljal — bo‘y (sm) − 100 kg.

Maks LBM = Bo‘y^1,5 × [sqrt(Bilak)/22,6670 + sqrt(To‘piq)/17,0104] × [(Yog‘%/224) + 1]; Berxan musobaqa vazni (~5% yog‘) = Bo‘y (sm) − 100.

### Cheklovlar

Erkaklar namunasi ayollar me’yorini asoslamaydi. Model genetikani o‘lchamaydi, mushak chegarasini isbotlamaydi yoki muddatni bashorat qilmaydi. Tanlangan yog‘ — faraz, tavsiya etilgan maqsad emas.

### Manbalar

- [Casey Butt. Your Maximum Muscular Bodyweight and Measurements. Авторский текст, архивная копия.](https://forum.steelfactor.ru/index.php?app=core&attach_id=540052&module=attach&section=attach)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri EM et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995](https://pubmed.ncbi.nlm.nih.gov/7496846/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="muscle-potential" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="muscle-potential" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/muscle-potential?lang=uz&theme=auto"
  title="Casey Butt antropometrik modeli" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
