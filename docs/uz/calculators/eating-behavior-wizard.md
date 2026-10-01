# Ovqatlanish xulq-atvori diagnostikasi ustasi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/eating-behavior-wizard.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/eating-behavior-wizard.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/eating-behavior-wizard.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/eating-behavior-wizard.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/eating-behavior-wizard.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/eating-behavior-wizard.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`eating-behavior-wizard` · [NutriFit](https://nutrifit.health/uz/calculators/eating-behavior-wizard)

Taomlanishning chuqur psixotipini va shaxsiy strategiyani aniqlash uchun yetakchi validatsiyalangan shkalalarni birlashtiruvchi NutriFit integratsiyalashgan diagnostika ustasi.

### Foydalanish tartibi

1. Xavflar skriningidan o‘ting: Vazn va ovqatni nazorat qilishga bo‘lgan o‘ta kuchli diqqat belgilarini belgilang.
2. Ovqatlanish shkalalarini sozlang: Cheklovlar, stressni yeyish va tashqi ovqatga munosabat darajasini ko‘rsating.
3. Psixotipingiz va strategiyangizni oling: Yetakchi taomlanish profilingiz tavsifi bilan tanishing va batafsil PDF-hisobotni yuklab oling.

### Usul va formula

NutriFit ko‘p omilli algoritmi parhez nazorati, emotsional yeb qo‘yish, tashqi stimullarga bog‘liqlik va OXB xavfi belgilarini yagona psixotipga umumlashtiradi.

DEBQ, SCOFF, IES-2 va mYFAS 2.0 shkalalari o‘zaro korrelyatsiyasiga asoslangan ovqatlanish xulq-atvorini tasniflashning kompleks matritsasi.

### Cheklovlar

Ushbu vosita o‘z-o‘zini anglash va mutaxassis bilan ishlashda yo‘nalish olish uchun mo‘ljallangan bo‘lib, shifokorning klinik ko‘rigi o‘rnini bosmaydi.

### Manbalar

- [Fairburn C.G. Cognitive Behavior Therapy and Eating Disorders. Guilford Press, 2008](https://www.guilford.com/books/Cognitive-Behavior-Therapy-and-Eating-Disorders/Christopher-Fairburn/9781593857097)
- [American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR), 2022](https://doi.org/10.1176/appi.books.9780890425787)
- [NICE (National Institute for Health and Care Excellence). Eating disorders: recognition and treatment (NG69), 2020](https://www.nice.org.uk/guidance/ng69)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="eating-behavior-wizard" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="eating-behavior-wizard" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/eating-behavior-wizard?lang=uz&theme=auto"
  title="Ovqatlanish xulq-atvori diagnostikasi ustasi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
