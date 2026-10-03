# Ovqatlanish xulqini o‘zini baholash

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/eating-behavior-wizard.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/eating-behavior-wizard.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/eating-behavior-wizard.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/eating-behavior-wizard.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/eating-behavior-wizard.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/eating-behavior-wizard.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`eating-behavior-wizard` · [NutriFit](https://nutrifit.health/uz/calculators/eating-behavior-wizard)

SCOFF ning beshta savoli va ovqatlanish xulqini o‘zini baholash uchun to‘rtta mualliflik savoli.

### Foydalanish tartibi

1. Yo‘riqnomani o‘qing: Ko‘rsatilgan davr va har bir fikrning ma’nosini hisobga oling.
2. Javoblarni tanlang: Har bir bandga mos variantni tanlab javob bering.
3. Natijani ko‘ring: Natija javoblarni aks ettiradi; uni usulning cheklovlarini hisobga olib talqin qiling.

### Usul va formula

SCOFF beshta haqiqiy «ha/yo‘q» javobi asosida hisoblanadi. Qolgan javoblar bevosita ko‘rsatiladi.

SCOFF da ikki yoki undan ko‘p «ha» javobi — ijobiy skrining. Mualliflik savollari DEBQ, IES-2 yoki mYFAS ballarini hisoblamaydi va psixologik tipni aniqlamaydi.

### Cheklovlar

Ma’lumot uchun berilgan natija tashxis qo‘ymaydi va davolash buyurmaydi. Tarjima axborot uchun moslashtirilgan; uning alohida psixometrik validatsiyasi tasdiqlanmagan.

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
  title="Ovqatlanish xulqini o‘zini baholash" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
