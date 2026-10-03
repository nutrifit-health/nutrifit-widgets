# Lipid profili: hisoblangan ko‘rsatkichlar

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lipid-profile.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lipid-profile.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lipid-profile.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lipid-profile.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lipid-profile.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lipid-profile.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`lipid-profile` · [NutriFit](https://nutrifit.health/uz/calculators/lipid-profile)

Friedewald va Sampson LDL, non-HDL, qoldiq xolesterin va lipid nisbatlarini hisoblaydi.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Haqiqiy qiymatlar va mos birliklardan foydalaning.
2. Parametrlarni aniqlashtiring: Boshlang‘ich taxminlarni holatingizga moslang.
3. Natijani o‘qing: Model cheklovlarini hisobga oling; hisob o‘lchov emas.

### Usul va formula

Friedewald: LDL = umumiy xolesterin − HDL − TG/5, barchasi mg/dl, TG <400 mg/dl bo‘lganda. Sampson (2020) TG ≤800 mg/dl uchun qo‘llanadi; manfiy baholar ko‘rsatilmaydi. AIP = log10(TG/HDL), ikkalasi mmol/l.

Friedewald: LDL = umumiy xolesterin − HDL − TG/5, barchasi mg/dl, TG <400 mg/dl bo‘lganda. Sampson (2020) TG ≤800 mg/dl uchun qo‘llanadi; manfiy baholar ko‘rsatilmaydi. AIP = log10(TG/HDL), ikkalasi mmol/l.

### Cheklovlar

LDL maqsadi umumiy yurak-qon tomir xavfiga bog‘liq. Ko‘rsatkichlar shaxsiy xavf, tashxis yoki dori zaruratini belgilamaydi. Nisbatlar va AIP umumiy me’yor toifalarisiz ko‘rsatiladi.

### Manbalar

- [Friedewald WT et al. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M et al. A New Equation for Calculation of Low-Density Lipoprotein Cholesterol in Patients With Normolipidemia and/or Hypertriglyceridemia. JAMA Cardiol, 2020](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiásová M et al. The plasma parameter log (TG/HDL-C) as an atherogenic index: correlation with lipoprotein particle size and esterification rate in apoB-lipoprotein-depleted plasma (FER(HDL)). Clin Biochem, 2001](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias: lipid modification to reduce cardiovascular risk. Eur Heart J, 2020](https://pubmed.ncbi.nlm.nih.gov/31504418/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lipid-profile" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="lipid-profile" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lipid-profile?lang=uz&theme=auto"
  title="Lipid profili: hisoblangan ko‘rsatkichlar" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
