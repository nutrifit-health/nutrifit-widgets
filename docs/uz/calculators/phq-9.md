# Bemor salomatligi so‘rovnomasi PHQ-9 (Depressiya)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phq-9.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phq-9.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`phq-9` · [NutriFit](https://nutrifit.health/uz/calculators/phq-9)

Oxirgi 2 haftadagi depressiv alomatlarning ifodalanishi: chastota bo‘yicha 0–3 ballik 9 javob; yig‘indi 0–27.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Oxirgi 2 haftadagi depressiv alomatlarning ifodalanishi: chastota bo‘yicha 0–3 ballik 9 javob; yig‘indi 0–27.
2. Parametrlarni aniqlashtiring: Oxirgi 2 haftadagi depressiv alomatlarning ifodalanishi: chastota bo‘yicha 0–3 ballik 9 javob; yig‘indi 0–27.
3. Natijani o‘qing: O‘zini baholash uchun axborot tarjimasi. Aynan shu moslamaning validatsiyasi tasdiqlanmagan. Ball tashxis qo‘ymaydi, past natija kasallikni istisno qilmaydi. 9-bandga har qanday noldan yuqori javob jami balldan qat’i nazar o‘lim yoki o‘ziga zarar yetkazish haqidagi fikrlarni mutaxassis bilan alohida muhokama qilishni talab etadi. Bevosita xavf bo‘lsa, shoshilinch yordamga murojaat qiling.

### Usul va formula

Oxirgi 2 haftadagi depressiv alomatlarning ifodalanishi: chastota bo‘yicha 0–3 ballik 9 javob; yig‘indi 0–27.

Oxirgi 2 haftadagi depressiv alomatlarning ifodalanishi: chastota bo‘yicha 0–3 ballik 9 javob; yig‘indi 0–27.

### Cheklovlar

O‘zini baholash uchun axborot tarjimasi. Aynan shu moslamaning validatsiyasi tasdiqlanmagan. Ball tashxis qo‘ymaydi, past natija kasallikni istisno qilmaydi. 9-bandga har qanday noldan yuqori javob jami balldan qat’i nazar o‘lim yoki o‘ziga zarar yetkazish haqidagi fikrlarni mutaxassis bilan alohida muhokama qilishni talab etadi. Bevosita xavf bo‘lsa, shoshilinch yordamga murojaat qiling.

### Manbalar

- [Kroenke K et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer RL et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. Primary Care Evaluation of Mental Disorders. Patient Health Questionnaire. JAMA, 1999](https://pubmed.ncbi.nlm.nih.gov/10568646/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phq-9" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="phq-9" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phq-9?lang=uz&theme=auto"
  title="Bemor salomatligi so‘rovnomasi PHQ-9 (Depressiya)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
