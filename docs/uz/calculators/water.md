# Suv normasi kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/water.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/water.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`water` · [NutriFit](https://nutrifit.health/uz/calculators/water)

Tana vaznidan kunlik suyuqlik ehtiyojini jismoniy yuklama va issiq iqlimga tuzatish bilan hisoblaydi.

### Foydalanish tartibi

1. Tana vaznini ko‘rsating: Suvga bo‘lgan asosiy fiziologik ehtiyoj tana vazniga to‘g‘ridan-to‘g‘ri proporsionaldir (o‘rtacha 1 kg vaznga 30–35 ml).
2. Jismoniy faollikni qo‘shing: Har 30 daqiqalik mashg‘ulot ter bilan yo‘qotilgan suyuqlik o‘rnini qoplash uchun qo‘shimcha 350–500 ml suyuqlik talab qiladi.
3. Iqlim va haroratni inobatga oling: Issiq ob-havo (>25°C) yoki havoning past namligi kunlik ehtiyojni yana 500 ml ga oshiradi.

### Usul va formula

Asosiy ehtiyoj — kattalar uchun tana vaznining har kg iga 30 ml, 60 yoshdan keyin 25 ml/kg, chunki buyrakning konsentratsiya qobiliyati pasayadi. Har bir soat jadal yuklama ter bilan yo‘qotishni qoplash uchun 500 ml, issiq iqlim yoki quruq isitiladigan xona uchun yana 500 ml qo‘shadi. Yakun — suvga to‘liq ehtiyoj; uning 20–30% oziq-ovqat bilan keladi, shuning uchun ichimliklar normasi alohida ko‘rsatilgan (EFSA, 2010).

Jami(ml) = vazn × 30 (yoki 60 yoshdan keyin × 25) + 500 × yuklama soatlari + issiqda 500; Ichimliklar(ml) = jami × 0,75

### Cheklovlar

Sog‘lom kattalar uchun mo‘ljal. Yurak va buyrak yetishmovchiligida, diuretik qabul qilishda, isitmada va issiq ishlab chiqarishda normani shifokor belgilaydi. Chanqoq va siydik rangi har qanday hisobdan ko‘ra ishonchliroq mo‘ljal bo‘lib qoladi.

### Manbalar

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [Sawka M.N. et al. American College of Sports Medicine Position Stand: Exercise and Fluid Replacement, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

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
  title="Suv normasi kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
