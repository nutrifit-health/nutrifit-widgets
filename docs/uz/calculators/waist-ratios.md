# Bel antropometrik indekslari kalkulyatori (WHtR, WHR, VAI)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/waist-ratios.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/waist-ratios.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/waist-ratios.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/waist-ratios.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/waist-ratios.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/waist-ratios.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`waist-ratios` · [NutriFit](https://nutrifit.health/uz/calculators/waist-ratios)

Yog‘ to‘qimalarining taqsimlanishini, visseral yog‘ miqdorini va yurak-qon tomir xavflarini oddiy TMI ga qaraganda ancha aniq baholaydi.

### Foydalanish tartibi

1. Belning to‘g‘ri chizig‘ini toping: Bel kindik ustidan emas, pastki qovurg‘a va tos suyagi o‘rtasidagi masofaning qoq o‘rtasida o‘lchanadi. Oddiy nafas chiqaring.
2. Dumba aylanasi o‘lchovini oling: Santimetr tasmasini dumbaning eng keng, bo‘rtib chiqqan joyidan gorizontal o‘tkazing.
3. Bo‘yga nisbatini tekshiring: Belni bo‘yga bo‘ling: agar natija 0.50 dan past bo‘lsa, sizning ichki a’zolaringiz xavfsiz holatda.

### Usul va formula

Bel aylanasi ichki a’zolar atrofidagi xavfli visseral yog‘ hajmini to‘g‘ridan-to‘g‘ri aks ettiradi. Bel-bo‘y nisbati (WHtR) va bel-dumba nisbati (WHR) qandli diabet va gipertoniya xavfini oldindan bashorat qiladi.

WHtR = Bel / Bo‘y; WHR = Bel / Dumba; VAI (Erkak) = (Bel/(39.68+1.88×TMI)) × (TG/1.03) × (1.31/HDL); VAI (Ayol) = (Bel/(35.58+1.89×TMI)) × (TG/0.81) × (1.52/HDL).

### Cheklovlar

Homiladorlik davrida, assit, qorin churrasi yoki qorin bo‘shlig‘i operatsiyalaridan keyingi davrda qo‘llanilmaydi.

### Manbalar

- [Ashwell M., Gunn P., Gibson S. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012;13(3):275–286](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato M.C. et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010;33(4):920–922](https://pubmed.ncbi.nlm.nih.gov/20067971/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="waist-ratios" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="waist-ratios" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/waist-ratios?lang=uz&theme=auto"
  title="Bel antropometrik indekslari kalkulyatori (WHtR, WHR, VAI)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
