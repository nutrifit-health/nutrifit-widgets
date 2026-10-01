# Uyqusizlik og‘irligi indeksi ISI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/isi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/isi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`isi` · [NutriFit](https://nutrifit.health/uz/calculators/isi)

Uyqusizlik alomatlarining xususiyati, og‘irligi va kunduzgi faoliyatga taʼsirini baholash uchun mo‘ljallangan 7 savolli qisqa klinik vosita.

### Foydalanish tartibi

1. Oxirgi 2 haftani yodga oling: So‘nggi 14 kun davomida qanday uxlaganingizni va kunduzi o‘zingizni qanchalik tetik his qilganingizni baholang.
2. Barcha 7 ta savolga javob bering: Har bir qiyinchilik darajasini 0 ('Umuman yo‘q') dan 4 ('Juda kuchli') gacha belgilang.
3. Natija va tavsiyalarni ko‘rib chiqing: O‘z og‘irlik toifangizni aniqlang va uyquni yaxshilash bo‘yicha tavsiyalardan foydalaning.

### Usul va formula

Har biri 0 dan 4 ballgacha baholanadigan 7 ta savol. Umumiy ball 0 dan 28 gacha bo‘lib, uxlab qolish, uyquni saqlash va erta uyg‘onishni qamrab oladi.

ISI umumiy bali = Barcha 7 ta savol ballari yig‘indisi (0–28). 0–7: klinik uyqusizlik yo‘q; 8–14: chegara osti (yengil); 15–21: o‘rtacha klinik; 22–28: og‘ir klinik uyqusizlik.

### Cheklovlar

Indeks skrining maqsadida qo‘llaniladi. Uyqudagi apnoe (nafas to‘xtashi) yoki bezovta oyoqlar sindromida polisomnografiya talab etiladi.

### Manbalar

- [Morin C.M. et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases. Sleep, 2011;34(5):601–608](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien C.H. et al. Validation of the Insomnia Severity Index as an outcome measure. Sleep Med, 2001;2(4):297–307](https://pubmed.ncbi.nlm.nih.gov/11438246/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="isi" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="isi" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/isi?lang=uz&theme=auto"
  title="Uyqusizlik og‘irligi indeksi ISI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
