# Uyqusizlik og‘irligi indeksi ISI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/isi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/isi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`isi` · [NutriFit](https://nutrifit.health/uz/calculators/isi)

Oxirgi 2 haftadagi uyquni baholash: 0–4 oralig‘idagi turli shkalali 7 band; yig‘indi 0–28. Qoniqish, muammoning boshqalarga bilinishi, tashvish va kundalik hayotga ta’sir uchun javoblar alohida.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Oxirgi 2 haftadagi uyquni baholash: 0–4 oralig‘idagi turli shkalali 7 band; yig‘indi 0–28. Qoniqish, muammoning boshqalarga bilinishi, tashvish va kundalik hayotga ta’sir uchun javoblar alohida.
2. Parametrlarni aniqlashtiring: Oxirgi 2 haftadagi uyquni baholash: 0–4 oralig‘idagi turli shkalali 7 band; yig‘indi 0–28. Qoniqish, muammoning boshqalarga bilinishi, tashvish va kundalik hayotga ta’sir uchun javoblar alohida.
3. Natijani o‘qing: O‘zini baholash uchun axborot tarjimasi. Aynan shu moslamaning validatsiyasi tasdiqlanmagan. Ball tashxis qo‘ymaydi, past natija kasallikni istisno qilmaydi.

### Usul va formula

Oxirgi 2 haftadagi uyquni baholash: 0–4 oralig‘idagi turli shkalali 7 band; yig‘indi 0–28. Qoniqish, muammoning boshqalarga bilinishi, tashvish va kundalik hayotga ta’sir uchun javoblar alohida.

Oxirgi 2 haftadagi uyquni baholash: 0–4 oralig‘idagi turli shkalali 7 band; yig‘indi 0–28. Qoniqish, muammoning boshqalarga bilinishi, tashvish va kundalik hayotga ta’sir uchun javoblar alohida.

### Cheklovlar

O‘zini baholash uchun axborot tarjimasi. Aynan shu moslamaning validatsiyasi tasdiqlanmagan. Ball tashxis qo‘ymaydi, past natija kasallikni istisno qilmaydi.

### Manbalar

- [Morin CM et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases and evaluate treatment response. Sleep, 2011](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien CH et al. Validation of the Insomnia Severity Index as an outcome measure for insomnia research. Sleep Med, 2001](https://pubmed.ncbi.nlm.nih.gov/11438246/)
- [PhenX Toolkit. Insomnia Severity Index: patient questionnaire, last two weeks, protocol 640801](https://www.phenxtoolkit.org/protocols/view/640801?origin=subcollection)

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
