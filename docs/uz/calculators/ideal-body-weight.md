# Ideal tana vazni kalkulyatori (IBW va AdjBW)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ideal-body-weight.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ideal-body-weight.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/uz/calculators/ideal-body-weight)

Umumiy qabul qilingan klinik formulalar bo‘yicha etalon tana vaznini hisoblaydi va tibbiy maqsadlar uchun tuzatilgan vaznni (AdjBW) aniqlaydi.

### Foydalanish tartibi

1. Devayn formulasini sog‘lom TMI bilan solishtiring: Devine formulasi odatda sog‘lom vaznning o‘rtasi bo‘lgan 21.5–22.5 TMI oralig‘iga to‘g‘ri keladi.
2. Ortiqcha vaznda AdjBW dan foydalaning: Agar haqiqiy vazn ideal vazndan 20% dan ortiq bo‘lsa (TMI > 30), ovqatlanishni haqiqiy vazn emas, AdjBW bo‘yicha rejalashtiring.
3. Suyak tuzilishini hisobga oling: Keng suyakli odamlar uchun JSST me’yorining yuqori chegarasi (TMI 23–24.9) tabiiy va qulay hisoblanadi.

### Usul va formula

Ideal tana vaznining tibbiy formulalari dori-darmonlar miqdorini aniqlash va bemorlarni me’yoriy ta’minlash uchun ishlab chiqilgan. Kosmetik jadvallardan farqli o‘laroq, ular fiziologik me’yorni ifodalaydi.

Devine (Erkak): 50 + 2.3 × (Bo‘y_dyuym − 60); Devine (Ayol): 45.5 + 2.3 × (Bo‘y_dyuym − 60); AdjBW = IBW + 0.4 × (Haqiqiy_Vazn − IBW); Robinson: Erkak 52 + 1.9×dyuym, Ayol 49 + 1.7×dyuym.

### Cheklovlar

Formulalar rivojlangan sport mushaklarini va suyak tuzilishining individual xususiyatlarini (keng yoki ingichka suyak) hisobga olmaydi.

### Manbalar

- [Devine B.J. Gentamicin therapy. Drug Intell Clin Pharm, 1974;8:650–655](https://pubmed.ncbi.nlm.nih.gov/4611413/)
- [Robinson J.D. et al. Determination of ideal body weight for drug dosing. Am J Hosp Pharm, 1983;40(6):1016–1019](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Miller P.F. et al. Comparison of formulas for estimating ideal body weight. Am J Hosp Pharm, 1983;40:1622](https://pubmed.ncbi.nlm.nih.gov/6638027/)
- [Hamwi G.J. Therapy: changing concepts in diabetes mellitus. In: Danowski T.S. (ed). Diabetes Mellitus: Diagnosis and Treatment. ADA, 1964:73–78](https://pubmed.ncbi.nlm.nih.gov/14207860/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ideal-body-weight" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="ideal-body-weight" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ideal-body-weight?lang=uz&theme=auto"
  title="Ideal tana vazni kalkulyatori (IBW va AdjBW)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
