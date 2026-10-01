# FIB-4 va APRI kalkulyatori: jigar fibrozi indekslari

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fib-4.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fib-4.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fib-4.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fib-4.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fib-4.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fib-4.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`fib-4` · [NutriFit](https://nutrifit.health/uz/calculators/fib-4)

AST, ALT, trombotsitlar va yosh asosida jigar fibrozi darajasini invaziv bo‘lmagan usulda baholaydi.

### Foydalanish tartibi

1. Qon tahlillarini tayyorlang: Biokimyoviy tahlildan AST va ALT, umumiy qon tahlilidan esa trombotsitlar soni kerak bo‘ladi.
2. Qiymatlarni kiriting: Yoshingiz, fermentlar faolligi va trombotsitlar sonini kiriting.
3. Klinik tavsiyalar bilan tanishing: Past xavfda 1–2 yildan so‘ng qayta tekshiruv, yuqori xavfda esa mutaxassis maslahati kerak.

### Usul va formula

Sterling (2006) va Wai (2003) algoritmlariga asoslangan. Xalqaro EASL va AASLD ko‘rsatmalarida tavsiya etilgan.

FIB-4 = (Yosh × AST) / (Trombotsitlar × √ALT); APRI = ((AST / AST_yuqori_chegara) / Trombotsitlar) × 100.

### Cheklovlar

Natijalar o‘tkir gepatit, gemoliz yoki kuchli alkogol isteʼmoli paytida buzilishi mumkin. Tashxisni faqat shifokor tasdiqlaydi.

### Manbalar

- [Sterling R.K. et al. Development of a simple noninvasive index to predict significant fibrosis in patients with HIV/HCV coinfection. Hepatology, 2006;43(6):1317–1325](https://pubmed.ncbi.nlm.nih.gov/16729309/)
- [Wai C.T. et al. A simple noninvasive index can predict both significant fibrosis and cirrhosis in patients with chronic hepatitis C. Hepatology, 2003;38(2):518–526](https://pubmed.ncbi.nlm.nih.gov/12883497/)
- [EASL Clinical Practice Guidelines on non-invasive tests for evaluation of liver disease severity and prognosis — 2021 update. J Hepatol, 2021;75(3):659–689](https://pubmed.ncbi.nlm.nih.gov/34166721/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fib-4" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="fib-4" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fib-4?lang=uz&theme=auto"
  title="FIB-4 va APRI kalkulyatori: jigar fibrozi indekslari" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
