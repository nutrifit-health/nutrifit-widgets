# Vermeulen bo‘yicha erkin testosteron

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/free-testosterone.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/free-testosterone.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/free-testosterone.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/free-testosterone.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/free-testosterone.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/free-testosterone.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`free-testosterone` · [NutriFit](https://nutrifit.health/uz/calculators/free-testosterone)

Umumiy testosteron, SHBG va albumindan erkin va SHBG bilan bog‘lanmagan fraksiyalarni hisoblash.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Haqiqiy qiymatlar va mos birliklardan foydalaning.
2. Parametrlarni aniqlashtiring: Boshlang‘ich taxminlarni holatingizga moslang.
3. Natijani o‘qing: Model cheklovlarini hisobga oling; hisob o‘lchov emas.

### Usul va formula

Vermeulen (1999) muvozanatli bog‘lanish modeli: K_SHBG=10⁹ l/mol, K_Alb=3,6×10⁴ l/mol, albumin molyar massasi 69 000 g/mol. Modeldagi biofoydalanadigan fraksiya — erkin va albuminga bog‘langan testosteron.

Vermeulen (1999) muvozanatli bog‘lanish modeli: K_SHBG=10⁹ l/mol, K_Alb=3,6×10⁴ l/mol, albumin molyar massasi 69 000 g/mol. Modeldagi biofoydalanadigan fraksiya — erkin va albuminga bog‘langan testosteron.

### Cheklovlar

Bu hisob, to‘g‘ridan-to‘g‘ri o‘lchov emas. Umumiy me’yor belgilanmaydi: talqin alomat, yosh, jins, laboratoriya usuli va takroriy o‘lchovlarga bog‘liq.

### Manbalar

- [Vermeulen A et al. A critical evaluation of simple methods for the estimation of free testosterone in serum. J Clin Endocrinol Metab, 1999](https://pubmed.ncbi.nlm.nih.gov/10523012/)
- [Bhasin S et al. Testosterone Therapy in Men With Hypogonadism: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab, 2018](https://pubmed.ncbi.nlm.nih.gov/29562364/)
- [Salonia A et al. European Association of Urology Guidelines on Sexual and Reproductive Health-2021 Update: Male Sexual Dysfunction. Eur Urol, 2021](https://pubmed.ncbi.nlm.nih.gov/34183196/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="free-testosterone" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="free-testosterone" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/free-testosterone?lang=uz&theme=auto"
  title="Vermeulen bo‘yicha erkin testosteron" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
