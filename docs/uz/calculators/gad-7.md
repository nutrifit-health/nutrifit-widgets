# Umumiy xavotir shkalasi GAD-7

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/gad-7.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/gad-7.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/gad-7.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/gad-7.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/gad-7.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/gad-7.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`gad-7` · [NutriFit](https://nutrifit.health/uz/calculators/gad-7)

Oxirgi 2 haftadagi xavotir alomatlarining ifodalanishi: chastota bo‘yicha 0–3 ballik 7 javob; yig‘indi 0–21.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Oxirgi 2 haftadagi xavotir alomatlarining ifodalanishi: chastota bo‘yicha 0–3 ballik 7 javob; yig‘indi 0–21.
2. Parametrlarni aniqlashtiring: Oxirgi 2 haftadagi xavotir alomatlarining ifodalanishi: chastota bo‘yicha 0–3 ballik 7 javob; yig‘indi 0–21.
3. Natijani o‘qing: O‘zini baholash uchun axborot tarjimasi. Aynan shu moslamaning validatsiyasi tasdiqlanmagan. Ball tashxis qo‘ymaydi, past natija kasallikni istisno qilmaydi.

### Usul va formula

Oxirgi 2 haftadagi xavotir alomatlarining ifodalanishi: chastota bo‘yicha 0–3 ballik 7 javob; yig‘indi 0–21.

Oxirgi 2 haftadagi xavotir alomatlarining ifodalanishi: chastota bo‘yicha 0–3 ballik 7 javob; yig‘indi 0–21.

### Cheklovlar

O‘zini baholash uchun axborot tarjimasi. Aynan shu moslamaning validatsiyasi tasdiqlanmagan. Ball tashxis qo‘ymaydi, past natija kasallikni istisno qilmaydi.

### Manbalar

- [Spitzer RL et al. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 2006](https://pubmed.ncbi.nlm.nih.gov/16717171/)
- [Löwe B et al. Validation and standardization of the Generalized Anxiety Disorder Screener (GAD-7) in the general population. Med Care, 2008](https://pubmed.ncbi.nlm.nih.gov/18388841/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="gad-7" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="gad-7" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/gad-7?lang=uz&theme=auto"
  title="Umumiy xavotir shkalasi GAD-7" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
