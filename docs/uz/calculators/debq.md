# Ovqatlanish xulqi: o‘zgartirilgan DEBQ moslamasi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/debq.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/debq.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`debq` · [NutriFit](https://nutrifit.health/uz/calculators/debq)

Odatdagi ovqatlanish xulqi haqida 33 savol. Uch guruh javoblarining o‘rtachalari ko‘rsatiladi; me’yor toifasi va tashxis yo‘q.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Haqiqiy qiymatlar va mos birliklardan foydalaning.
2. Parametrlarni aniqlashtiring: Boshlang‘ich taxminlarni holatingizga moslang.
3. Natijani o‘qing: Model cheklovlarini hisobga oling; hisob o‘lchov emas.

### Usul va formula

Hissiy guruh: 1–13; tashqi: 14–23; cheklovchi: 24–33. Har bir o‘rtacha 1–5 oralig‘ida; 17-savol 6 dan javobni ayirish orqali baholanadi.

Hissiy guruh: 1–13; tashqi: 14–23; cheklovchi: 24–33. Har bir o‘rtacha 1–5 oralig‘ida; 17-savol 6 dan javobni ayirish orqali baholanadi.

### Cheklovlar

Matnlar o‘zgartirilib, guruhlangan. Bu asl DEBQ ning validatsiyasi tasdiqlangan versiyasi emas; klinik me’yorlar qo‘llanmaydi. Asl blankadan foydalanish ruxsati alohida tasdiqlanishi kerak.

### Manbalar

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. et al. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire in normal subjects and women with eating disorders. J Psychosom Res, 1987](https://pubmed.ncbi.nlm.nih.gov/3473234/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="debq" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="debq" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/debq?lang=uz&theme=auto"
  title="Ovqatlanish xulqi: o‘zgartirilgan DEBQ moslamasi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
