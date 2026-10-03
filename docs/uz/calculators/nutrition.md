# Taomning oziq qiymati kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/nutrition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/nutrition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/nutrition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/nutrition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/nutrition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/nutrition.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`nutrition`

`nutrition` uchun: ochiq mahsulot yoki retseptlarni toping, grammda vaznlarini qo‘shing va tayyor taom vaznini kiriting. Butun taom va 100 g uchun hisoblang; PDF va CSV mavjud. Noma’lum nutrientlar to‘liq emas deb belgilanadi, nolga aylantirilmaydi. Ko‘pi bilan 50 ta masalliq.

## Usul va ma’lumotlar

NutriFit serveri tanlangan ochiq mahsulot va retseptlarning mavjud oziq moddalarini ingredient vazniga ko‘ra jamlaydi. Tayyor taom vazni asosida umumiy va 100 g qiymatlarini qaytaradi. PDF serverda yangidan hisoblaydi; CSV ko‘rsatilgan natijani eksport qiladi.

Masalliq vaznini katalogda tanlangan holatda (xom yoki pishgan), 100 g hisob uchun esa tayyor taom vaznini kiriting. Pishirish va suyuqlikni to‘kishdagi nutrient yo‘qotilishi hisoblanmaydi.

## Cheklovlar

50 tagacha ingredient. Vaznlarni grammda kiriting, tayyor taom vazni musbat bo‘lishi kerak. Noma’lum qiymatlar nol bilan almashtirilmaydi, to‘liq emas deb belgilanadi. Ma’lumotlar o‘zgarishi mumkin, shu sabab PDF oldingi natijadan farq qilishi mumkin. Bu baholash tashxis yoki davolash tayinlovi emas.

## Manbalar

NutriFit ochiq mahsulot va retseptlar katalogi; vidjet manba va hisoblash vaqtini ko‘rsatadi.

- [NutriFit](https://nutrifit.health)
- [NutriFit recipes](https://nutrifit.health/recipes)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { NutritionCalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <NutritionCalculatorFrame locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="nutrition" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/nutrition-calculator?lang=uz&theme=auto"
  title="Taomning oziq qiymati kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:680px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
