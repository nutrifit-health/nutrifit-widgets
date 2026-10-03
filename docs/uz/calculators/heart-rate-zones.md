# Yurak urishi zaxirasi bo‘yicha zonalar

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/heart-rate-zones.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/heart-rate-zones.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`heart-rate-zones` · [NutriFit](https://nutrifit.health/uz/calculators/heart-rate-zones)

Maqsadli YU = tinch YU + ulush × (maksimal YU − tinch YU). Besh oraliq tanlangan: zaxiraning 50–60, 60–70, 70–80, 80–90 va 90–100%.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Maqsadli YU = tinch YU + ulush × (maksimal YU − tinch YU). Besh oraliq tanlangan: zaxiraning 50–60, 60–70, 70–80, 80–90 va 90–100%.
2. Parametrlarni aniqlashtiring: YuUT max (Tanaka) = 208 − 0.7 × Yosh; HRR = YuUT max − YuUT tinch; Maqsadli puls = YuUT tinch + (% jadallik × HRR). Haskell formulasi: YuUT max = 220 − Yosh.
3. Natijani o‘qing: Bu tanlangan sxema, individual o‘lchangan aerob va anaerob chegaralar emas. Yosh bo‘yicha maksimal YU — prognoz, fiziologik chegara emas; zaxira musbat bo‘lishi kerak.

### Usul va formula

Maqsadli YU = tinch YU + ulush × (maksimal YU − tinch YU). Besh oraliq tanlangan: zaxiraning 50–60, 60–70, 70–80, 80–90 va 90–100%.

YuUT max (Tanaka) = 208 − 0.7 × Yosh; HRR = YuUT max − YuUT tinch; Maqsadli puls = YuUT tinch + (% jadallik × HRR). Haskell formulasi: YuUT max = 220 − Yosh.

### Cheklovlar

Bu tanlangan sxema, individual o‘lchangan aerob va anaerob chegaralar emas. Yosh bo‘yicha maksimal YU — prognoz, fiziologik chegara emas; zaxira musbat bo‘lishi kerak.

### Manbalar

- [Tanaka H et al. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [KARVONEN MJ et al. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957](https://pubmed.ncbi.nlm.nih.gov/13470504/)
- [American College of Sports Medicine. ACSM’s Guidelines for Exercise Testing and Prescription. 11th ed. Wolters Kluwer, 2021](https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="heart-rate-zones" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="heart-rate-zones" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/heart-rate-zones?lang=uz&theme=auto"
  title="Yurak urishi zaxirasi bo‘yicha zonalar" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
