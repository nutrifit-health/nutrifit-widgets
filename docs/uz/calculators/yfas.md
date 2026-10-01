# mYFAS 2.0 oziq-ovqatga qaramlik Yale shkalasi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/yfas.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/yfas.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`yfas` · [NutriFit](https://nutrifit.health/uz/calculators/yfas)

Yuqori kaloriyali va chuqur qayta ishlangan taomlarga addiktiv maylni aniqlash uchun Yale universiteti tomonidan moslashtirilgan ilmiy so‘rovnoma.

### Foydalanish tartibi

1. Muammoli mahsulotlarni eslang: Isteʼmol qilishda o‘zingizni to‘xtatish eng qiyin bo‘lgan taomlar haqida o‘ylang (shirinliklar, gazaklar, pishiriqlar).
2. 13 ta savolga javob bering: Agar bu holat so‘nggi 12 oy davomida muntazam kuzatilgan bo‘lsa, 'Ha' deb belgilang.
3. Alomatlar va tashxis natijalarini ko‘ring: Tashxisiy mezonlar soni va ularning hayotingizga taʼsiri darajasini bilib oling.

### Usul va formula

Moddalarga qaramlik bo‘yicha DSM-5 ning oziq-ovqatga moslashtirilgan 11 ta diagnostik mezoniga asoslangan 13 ta savol va klinik distress bo‘yicha 2 ta savol.

Oziq-ovqatga qaramlik tashxisi klinik distress/dezadaptatsiya (12 yoki 13-savollar) va kamida 2 ta alomat mavjudligini talab qiladi. 2–3: yengil; 4–5: o‘rtacha; ≥ 6: og‘ir darajadagi qaramlik.

### Cheklovlar

'Oziq-ovqatga qaramlik' tushunchasi ilmiy bahslar mavzusi hisoblanadi. So‘rovnoma shirin, yog‘li va tuzli taomlarga nisbatan kompulsiv xatti-harakatlarni aniqlaydi.

### Manbalar

- [Schulte E.M., Gearhardt A.N. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017;25(4):302–308](https://pubmed.ncbi.nlm.nih.gov/28543787/)
- [Gearhardt A.N. et al. Preliminary validation of the Yale Food Addiction Scale. Appetite, 2009;52(2):430–436](https://pubmed.ncbi.nlm.nih.gov/19028533/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="yfas" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="yfas" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/yfas?lang=uz&theme=auto"
  title="mYFAS 2.0 oziq-ovqatga qaramlik Yale shkalasi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
