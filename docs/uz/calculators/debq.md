# Golland ovqatlanish xulq-atvori so‘rovnomasi (DEBQ)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/debq.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/debq.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`debq` · [NutriFit](https://nutrifit.health/uz/calculators/debq)

Ovqatlanish xulq-atvorining uch asosiy turini (cheklovchi, emotsiogen va tashqi) aniqlash uchun mo‘ljallangan klassik psixologik vosita.

### Foydalanish tartibi

1. Samimiy javob bering: So‘nggi oylardagi odatiy xatti-harakatlaringizga eng mos keladigan javob variantini tanlang.
2. Uzoq o‘ylanib qolmang: Birinchi spontan javob ko‘pincha eng to‘g‘ri va aniq ko‘rsatkich bo‘ladi.
3. Uchta subshkala bo‘yicha natijalarni o‘rganing: Ballaringizni meʼyoriy ko‘rsatkichlar bilan taqqoslang va tavsiyalar bilan tanishing.

### Usul va formula

So‘rovnoma Likert shkalasi bo‘yicha 1 dan 5 gacha baholanadigan 33 ta savoldan iborat: kognitiv cheklov (10 ta), emotsiogen ortiqcha ovqatlanish (13 ta) va tashqi stimulyatsiya (10 ta).

Har bir subshkala bali = Savollarga berilgan javoblarning o‘rtacha arifmetik qiymati (1,0 dan 5,0 gacha). Cheklovchi: meʼyor ~2.4; Emotsiogen: meʼyor ~1.8; Tashqi: meʼyor ~2.7.

### Cheklovlar

Ushbu so‘rovnoma o‘z-o‘zini psixologik baholash vositasi bo‘lib, klinik tashxis hisoblanmaydi. Kuchli distress holatlarida mutaxassisga murojaat qiling.

### Manbalar

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire. J Psychosom Res, 1987;31(2):161–169](https://pubmed.ncbi.nlm.nih.gov/3585818/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="debq" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="debq" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/debq?lang=uz&theme=auto"
  title="Golland ovqatlanish xulq-atvori so‘rovnomasi (DEBQ)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
