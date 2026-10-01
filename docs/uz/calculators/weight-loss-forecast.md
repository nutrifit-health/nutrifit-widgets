# Vazn yo‘qotishning dinamik prognozi kalkulyatori (Kevin Xoll modeli)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/weight-loss-forecast.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/weight-loss-forecast.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/uz/calculators/weight-loss-forecast)

Metabolizmning sekinlashishi va mushaklarni saqlashni hisobga olgan holda Kevin Xoll (NIH) modeli asosida ozishning real chiziqli bo‘lmagan trayektoriyasini tuzadi.

### Foydalanish tartibi

1. O‘rtacha taqchillikni saqlang (15–20%): 300–500 kkal taqchillik ruhiyat uchun qulay bo‘lib, mushak to‘qimasini yemirilishdan asraydi.
2. Yetarlicha oqsil isteʼmol qiling: Taqchillikda 1,8–2,4 g/kg oqsil meʼyori yo‘qotilgan vaznning 85–90% qismi aynan yog‘ to‘qimasiga to‘g‘ri kelishini taʼminlaydi.
3. Parhez tanaffuslarini (Diet Breaks) rejalashtiring: Har 8–12 haftalik ozishdan so‘ng 1–2 hafta joriy saqlash kaloriyasida (TDEE) ovqatlaning. Bu leptin va T3 gormonlarini yangilaydi.

### Usul va formula

Klassik 7700 kkal qoidasi o‘rniga Kevin Xollning dinamik energiya balansi modeliga (Lancet, 2011; NIH/NIDDK) tayanadi. Har bir yo‘qotilgan kg bazaviy sarfni kamaytirib (~22 kkal/kg), platoga olib keladi. Forbs tenglamasi bo‘yicha yog‘ va mushak yo‘qotilishi hisoblanadi.

Metabolik moslashuv = 22 kkal/kg yo‘qotish + adaptiv termogenez; Samarali taqchillik = Belgilangan taqchillik − Moslashuv; Yog‘ yo‘qotish ulushi p = Forbes(F, W); Dinamik vazn(t) haftama-hafta integrallanadi.

### Cheklovlar

Belgilangan kaloriya taqchilligiga 100% rioya qilishni nazarda tutadi. Stress (kortizol) yoki tuzdan suv tutilishi tarozida yog‘ erishini vaqtincha yashirishi mumkin.

### Manbalar

- [Hall K.D. et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011;378(9793):826–837](https://pubmed.ncbi.nlm.nih.gov/21872751/)
- [Thomas D.M. et al. Can a weight loss of one pound a week be achieved with a 3,500-kcal deficit? Commentary on a commonly accepted rule. Int J Obes, 2013;37(12):1611–1613](https://pubmed.ncbi.nlm.nih.gov/23628852/)
- [Forbes G.B. Lean body mass-body fat interrelationships in humans. Nutr Rev, 1987;45(8):225–231](https://pubmed.ncbi.nlm.nih.gov/3306482/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="weight-loss-forecast" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="weight-loss-forecast" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/weight-loss-forecast?lang=uz&theme=auto"
  title="Vazn yo‘qotishning dinamik prognozi kalkulyatori (Kevin Xoll modeli)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
