# Kunlik ratsiondagi natriy va kaliy

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sodium-potassium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sodium-potassium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`sodium-potassium` · [NutriFit](https://nutrifit.health/uz/calculators/sodium-potassium)

WHO kattalarga kuniga 2000 mg dan kam natriy va kamida 3510 mg kaliy tavsiya qiladi. Molyar nisbat: (Na, mg / 23) / (K, mg / 39,1). Taxminiy tuz ekvivalenti: natriy, mg × 2,5 / 1000. Nisbat shaxsiy xavf toifasisiz ko‘rsatiladi.

### Foydalanish tartibi

1. Ma’lumotlarni kiriting: WHO kattalarga kuniga 2000 mg dan kam natriy va kamida 3510 mg kaliy tavsiya qiladi. Molyar nisbat: (Na, mg / 23) / (K, mg / 39,1). Taxminiy tuz ekvivalenti: natriy, mg × 2,5 / 1000. Nisbat shaxsiy xavf toifasisiz ko‘rsatiladi.
2. Yo‘nalishlarni taqqoslang: WHO kattalarga kuniga 2000 mg dan kam natriy va kamida 3510 mg kaliy tavsiya qiladi. Molyar nisbat: (Na, mg / 23) / (K, mg / 39,1). Taxminiy tuz ekvivalenti: natriy, mg × 2,5 / 1000. Nisbat shaxsiy xavf toifasisiz ko‘rsatiladi.
3. Cheklovlarni hisobga oling: Qon yoki siydik tahlilidagi konsentratsiyani emas, bir kunlik ovqatdan olingan miqdorni kiriting. Kaliy chiqarilishi buzilganda, buyrak kasalligida yoki kaliyga ta’sir qiladigan dori qabulida umumiy kaliy yo‘nalishi avtomatik qo‘llanmaydi. Gipertoniya o‘zi bu yerda yangi shaxsiy me’yorni belgilamaydi.

### Usul va formula

WHO kattalarga kuniga 2000 mg dan kam natriy va kamida 3510 mg kaliy tavsiya qiladi. Molyar nisbat: (Na, mg / 23) / (K, mg / 39,1). Taxminiy tuz ekvivalenti: natriy, mg × 2,5 / 1000. Nisbat shaxsiy xavf toifasisiz ko‘rsatiladi.

WHO kattalarga kuniga 2000 mg dan kam natriy va kamida 3510 mg kaliy tavsiya qiladi. Molyar nisbat: (Na, mg / 23) / (K, mg / 39,1). Taxminiy tuz ekvivalenti: natriy, mg × 2,5 / 1000. Nisbat shaxsiy xavf toifasisiz ko‘rsatiladi.

### Cheklovlar

Qon yoki siydik tahlilidagi konsentratsiyani emas, bir kunlik ovqatdan olingan miqdorni kiriting. Kaliy chiqarilishi buzilganda, buyrak kasalligida yoki kaliyga ta’sir qiladigan dori qabulida umumiy kaliy yo‘nalishi avtomatik qo‘llanmaydi. Gipertoniya o‘zi bu yerda yangi shaxsiy me’yorni belgilamaydi.

### Manbalar

- [WHO. Healthy diet: sodium and potassium](https://www.who.int/news-room/fact-sheets/detail/healthy-diet)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sodium-potassium" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="sodium-potassium" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sodium-potassium?lang=uz&theme=auto"
  title="Kunlik ratsiondagi natriy va kaliy" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
