# Lipid profili kalkulyatori: PZLP, non-HDL va aterogenlik indekslari

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lipid-profile.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lipid-profile.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lipid-profile.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lipid-profile.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lipid-profile.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lipid-profile.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`lipid-profile` · [NutriFit](https://nutrifit.health/uz/calculators/lipid-profile)

Standart lipidogramma bo‘yicha ikki usulda hisoblangan PZLP, non-HDL, qoldiq xolesterin va beshta aterogenlik indeksi — ESC/EAS maqsadli qiymatlari bilan.

### Foydalanish tartibi

1. Uchta asosiy ko‘rsatkichni kiriting: Umumiy xolesterin, YZLP va triglitseridlar har qanday lipidogrammada bor. Blank birliklarini tanlang: mmol/l (MDH, Yevropa) yoki mg/dl (AQSh, Lotin Amerikasi laboratoriyalarining bir qismi).
2. Bo‘lsa, o‘lchangan PZLP ni qo‘shing: PZLP ni to‘g‘ridan-to‘g‘ri o‘lchash hisoblashdan aniqroq. U bo‘lmasa — kalkulyator Sempson tenglamasidan foydalanadi va laboratoriya blanki bilan solishtirish uchun parallel Fridvaldni ko‘rsatadi.
3. Bitta ko‘rsatkichga emas, nisbatlarga qarang: Past YZLP va yuqori triglitseridlardagi normal umumiy xolesterin — aterogen profil. AIP va aterogenlik koeffitsienti buni «UX me’yorda» bo‘lganda aniqlaydi.

### Usul va formula

Umumiy xolesterin, YZLP va triglitseridlardan kalkulyator PZLP ni klassik Fridvald formulasi (1972) va 9 mmol/l gacha triglitseridlar hamda past PZLP da aniq bo‘lib qoladigan Sempson tenglamasi (NIH, 2020) bo‘yicha chiqaradi. Non-HDL — butun aterogen xolesterin (PZLP + JPZLP + qoldiq zarrachalar), qoldiq xolesterin esa non-HDL va PZLP farqi. Castelli indekslari (UX/YZLP va PZLP/YZLP), Klimov aterogenlik koeffitsienti va plazma aterogenlik indeksi AIP = log10(TG/YZLP) «yomon» va «himoya» fraksiyalar nisbatini aks ettiradi va xavfni alohida ko‘rsatkichlardan yaxshiroq bashorat qiladi.

PZLP (Fridvald, mmol/l) = UX − YZLP − TG / 2,2   [TG ≤ 4,5 mmol/l bo‘lganda]
PZLP (Sempson, mg/dl) = UX/0,948 − YZLP/0,971 − (TG/8,56 + TG×non-HDL/2140 − TG²/16100) − 9,44
non-HDL = UX − YZLP;  Qoldiq XS = non-HDL − PZLP
AK (Klimov) = (UX − YZLP) / YZLP;  Castelli I = UX/YZLP;  Castelli II = PZLP/YZLP
AIP = log10(TG / YZLP), mmol/l

### Cheklovlar

Hisoblangan PZLP — o‘lchov emas, baho: TG > 4,5 mmol/l bo‘lganda Fridvald formulasi qo‘llanilmaydi, TG > 9 mmol/l va xilomikronemiyada esa Sempson tenglamasi ham aniq emas. Indekslar SCORE2, apolipoprotein B va lipoprotein(a) bo‘yicha umumiy xavf bahosini almashtirmaydi. PZLP maqsadli qiymatlari xavf toifasiga bog‘liq (ESC/EAS 2019 bo‘yicha 1,4 dan 3,0 mmol/l gacha) — ularni shifokor belgilaydi. Tahlil laboratoriya tavsiyasi bo‘yicha och qoringa yoki och qorinsiz topshiriladi.

### Manbalar

- [Friedewald W.T., Levy R.I., Fredrickson D.S. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972;18(6):499–502](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M. et al. A new equation for calculation of low-density lipoprotein cholesterol in patients with normolipidemia and/or hypertriglyceridemia. JAMA Cardiol, 2020;5(5):540–548](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiášová M., Frohlich J. The plasma parameter log (TG/HDL-C) as an atherogenic index. Clin Biochem, 2001;34(7):583–588](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F. et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J, 2020;41(1):111–188](https://pubmed.ncbi.nlm.nih.gov/31504418/)

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
  title="Lipid profili kalkulyatori: PZLP, non-HDL va aterogenlik indekslari" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
