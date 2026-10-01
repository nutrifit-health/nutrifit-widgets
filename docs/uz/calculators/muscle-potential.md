# Mushak salohiyati kalkulyatori (Keysi Batt va Martin Berxan)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/muscle-potential.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/muscle-potential.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`muscle-potential` · [NutriFit](https://nutrifit.health/uz/calculators/muscle-potential)

Anabolik steroidlarsiz erishish mumkin bo‘lgan maksimal yog‘siz tana massasi va tana aylanalarini (ko‘krak, bisept, son) aniqlaydi.

### Foydalanish tartibi

1. Suyak o‘lchamlarini aniq o‘lchang: Bilak qo‘l panjasi va tirsak suyagi boshi orasida o‘lchanadi. To‘piq esa bo‘g‘im suyagidan biroz yuqoridagi eng ingichka qismida o‘lchanadi.
2. Istalgan yog‘ foizini ko‘rsating: Yil bo‘yi ajoyib jismoniy holatda yurish uchun 10–12% yog‘ni; musobaqa relefi uchun 6–8% ni mo‘ljallang.
3. Joriy o‘lchamlarni maksimal ko‘rsatkichlar bilan solishtiring: Kalkulyator bisept, ko‘krak va sonning maksimal aylanalarini ko‘rsatadi. Bu sizning tanangiz uchun real mo‘ljaldir.

### Usul va formula

Keysi Batt (Casey Butt, Ph.D.) 6 yil davomida steroidlar paydo bo‘lishidan oldingi davrdagi (1940–1950-yillar) yuzlab elita chempionlarining antropometriyasini tahlil qilgan. Model tabiiy mushak massasi suyak skeletining qalinligi — bilak va to‘piq aylanasi bilan qat’iy chegaralanganligini isbotlagan.

Maks LBM = Bo‘y^1,5 × [sqrt(Bilak)/22,6670 + sqrt(To‘piq)/17,0104] × [(Yog‘%/224) + 1]; Berxan musobaqa vazni (~5% yog‘) = Bo‘y (sm) − 100.

### Cheklovlar

Erkaklar uchun ishlab chiqilgan. Ayollarda gormonal fon tufayli maksimal mushak massasi erkaklar formulasining taxminan 65–70% ni tashkil qiladi. Ko‘p yillik intizomli mashg‘ulotlar va to‘g‘ri ovqatlanishni nazarda tutadi.

### Manbalar

- [Butt C. Your Maximum Muscular Potential (The Casey Butt Model). The WeighTrainer, 2009](https://www.weightrainer.net/potential.html)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)

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
  title="Mushak salohiyati kalkulyatori (Keysi Batt va Martin Berxan)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
