# Alkogolning chiqib ketishi kalkulyatori (Vidmark formulasi)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/alcohol.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/alcohol.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/alcohol.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/alcohol.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/alcohol.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/alcohol.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`alcohol` · [NutriFit](https://nutrifit.health/uz/calculators/alcohol)

Qondagi etanolning cho‘qqi va joriy konsentratsiyasini (promille ‰ da), to‘liq hushyor bo‘lish vaqtini va alkogol kaloriyasini hisoblaydi.

### Foydalanish tartibi

1. Oshqozon va ichakda so‘rilish: Alkogolning qariyb 20% qismi oshqozonda, qolgan 80% qismi esa ingichka ichakda so‘riladi. Zich ovqat mastlik cho‘qqisini pasaytiradi.
2. Jigar fermentlari tomonidan oksidlanish: Jigar etanolning 95% gachasini doimiy tezlikda ADG orqali toksik atsetaldegidgacha, so‘ngra ALDG orqali atsetatgacha oksidlaydi.
3. Chiziqli chiqib ketish: Fermentlar tez to‘yinadi: hushyor tortish tezligi ichilgan miqdordan qatʼi nazar qatʼiy soatiga taxminan 0,15 promilleni tashkil etadi.

### Usul va formula

Shvetsiyalik sud kimyogari Erik Vidmarkning farmakokinetik modeliga (1932) asoslangan. Organizmda suv taqsimlanishi hajmini (erkaklarda r = 0,68, ayollarda 0,55), meʼda ADH fermentini va chiziqli eliminatsiya tezligini (0,15 ‰/soat) hisobga oladi.

Sof etanol (g) = Hajm (ml) × (Kuchliligi % / 100) × 0,789; BAC_cho‘qqi = (Etanol × So‘rilish_omili) / (Vazn × r); BAC_joriy = max(0, BAC_cho‘qqi − 0,15 × Soat); Vaqt (soat) = BAC_cho‘qqi / 0,15.

### Cheklovlar

Chiqib ketish tezligi jigar faoliyati va genetikaga qarab 0,10 dan 0,20 ‰/soatgacha farq qiladi. Avtomobil boshqarish uchun yuridik dalil hisoblanmaydi.

### Manbalar

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones A.W. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework and pharmacokinetics. Forensic Sci Int, 2010;200(1-3):1–20](https://pubmed.ncbi.nlm.nih.gov/20434270/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="alcohol" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="alcohol" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/alcohol?lang=uz&theme=auto"
  title="Alkogolning chiqib ketishi kalkulyatori (Vidmark formulasi)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
