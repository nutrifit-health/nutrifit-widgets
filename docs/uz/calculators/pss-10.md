# Qabul qilingan stress shkalasi PSS-10

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/pss-10.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/pss-10.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`pss-10` · [NutriFit](https://nutrifit.health/uz/calculators/pss-10)

Oxirgi oydagi sezilgan stressni PSS-10 ning 10 bandi orqali baholash.

### Foydalanish tartibi

1. Yo‘riqnomani o‘qing: Ko‘rsatilgan davr va har bir fikrning ma’nosini hisobga oling.
2. Javoblarni tanlang: Har bir bandga mos variantni tanlab javob bering.
3. Natijani ko‘ring: Natija javoblarni aks ettiradi; uni usulning cheklovlarini hisobga olib talqin qiling.

### Usul va formula

0 dan 4 gacha bo‘lgan 10 javob. 4, 5, 7 va 8-bandlar 4 dan javobni ayirish orqali baholanadi.

Yig‘indi 0–40. Yuqori ball ko‘proq sezilgan stressni bildiradi; muallif past, o‘rtacha yoki yuqori stress chegaralarini belgilamaydi.

### Cheklovlar

Ma’lumot uchun berilgan natija tashxis qo‘ymaydi va davolash buyurmaydi. Tarjima axborot uchun moslashtirilgan; uning alohida psixometrik validatsiyasi tasdiqlanmagan.

### Manbalar

- [Cohen. Perceived Stress Scale: author instructions and scoring limitations](https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/index.html)
- [Cohen S et al. A global measure of perceived stress. J Health Soc Behav, 1983](https://pubmed.ncbi.nlm.nih.gov/6668417/)
- [Cohen S., Williamson G.M. Perceived stress in a probability sample of the United States. The Social Psychology of Health, 1988:31–67](https://psycnet.apa.org/record/1988-98838-002)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="pss-10" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="pss-10" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/pss-10?lang=uz&theme=auto"
  title="Qabul qilingan stress shkalasi PSS-10" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
