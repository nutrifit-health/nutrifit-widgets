# EPA va DHA bo‘yicha ma’lumotnoma

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/omega-3.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/omega-3.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/omega-3.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/omega-3.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/omega-3.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/omega-3.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`omega-3` · [NutriFit](https://nutrifit.health/uz/calculators/omega-3)

EFSA kattalar uchun AI — oziq-ovqat va qo‘shimchalarni birga hisoblaganda kuniga 250 mg EPA+DHA. Homiladorlik va emizishda bu miqdorga qo‘shimcha kuniga 100–200 mg DHA ko‘rsatilgan. Bu qat’iy EPA:DHA nisbati yoki baliq yog‘ining jami massasi emas.

### Foydalanish tartibi

1. Ma’lumotlarni kiriting: EFSA kattalar uchun AI — oziq-ovqat va qo‘shimchalarni birga hisoblaganda kuniga 250 mg EPA+DHA. Homiladorlik va emizishda bu miqdorga qo‘shimcha kuniga 100–200 mg DHA ko‘rsatilgan. Bu qat’iy EPA:DHA nisbati yoki baliq yog‘ining jami massasi emas.
2. Yo‘nalishlarni taqqoslang: EFSA kattalar uchun AI — oziq-ovqat va qo‘shimchalarni birga hisoblaganda kuniga 250 mg EPA+DHA. Homiladorlik va emizishda bu miqdorga qo‘shimcha kuniga 100–200 mg DHA ko‘rsatilgan. Bu qat’iy EPA:DHA nisbati yoki baliq yog‘ining jami massasi emas.
3. Cheklovlarni hisobga oling: Bu yo‘nalish qo‘shimcha qabul qilish shartligini bildirmaydi va ratsionni baholash o‘rnini bosmaydi. Shakl yuqori triglitseridlar yoki depressiyani davolashni belgilamaydi, omega-3 indeksi orqali tanqislik tashxisini qo‘ymaydi. Dorilar, o‘zaro ta’sirlar va individual dozalarni shifokor bilan muhokama qiling.

### Usul va formula

EFSA kattalar uchun AI — oziq-ovqat va qo‘shimchalarni birga hisoblaganda kuniga 250 mg EPA+DHA. Homiladorlik va emizishda bu miqdorga qo‘shimcha kuniga 100–200 mg DHA ko‘rsatilgan. Bu qat’iy EPA:DHA nisbati yoki baliq yog‘ining jami massasi emas.

EFSA kattalar uchun AI — oziq-ovqat va qo‘shimchalarni birga hisoblaganda kuniga 250 mg EPA+DHA. Homiladorlik va emizishda bu miqdorga qo‘shimcha kuniga 100–200 mg DHA ko‘rsatilgan. Bu qat’iy EPA:DHA nisbati yoki baliq yog‘ining jami massasi emas.

### Cheklovlar

Bu yo‘nalish qo‘shimcha qabul qilish shartligini bildirmaydi va ratsionni baholash o‘rnini bosmaydi. Shakl yuqori triglitseridlar yoki depressiyani davolashni belgilamaydi, omega-3 indeksi orqali tanqislik tashxisini qo‘ymaydi. Dorilar, o‘zaro ta’sirlar va individual dozalarni shifokor bilan muhokama qiling.

### Manbalar

- [EFSA. Dietary Reference Values summary, 2017, Table 2](https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="omega-3" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="omega-3" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/omega-3?lang=uz&theme=auto"
  title="EPA va DHA bo‘yicha ma’lumotnoma" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
