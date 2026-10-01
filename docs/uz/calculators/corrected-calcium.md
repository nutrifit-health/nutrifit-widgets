# Albumin bo‘yicha tuzatilgan kalsiy kalkulyatori (Payne)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/corrected-calcium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/corrected-calcium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`corrected-calcium` · [NutriFit](https://nutrifit.health/uz/calculators/corrected-calcium)

Gipoalbuminemiya yoki giperalbuminemiyada qondagi kalsiyning soxta o‘zgarishlarini to‘g‘rilab, haqiqiy kalsiy konsentratsiyasini aniqlaydi.

### Foydalanish tartibi

1. Qon tahlillarini oling: Biokimyoviy tahlildan umumiy kalsiy va albumin konsentratsiyasini bilib oling.
2. Ko‘rsatkichlarni kiriting: Umumiy kalsiy va albumin qiymatlarini kalkulyatorga kiriting.
3. Haqiqiy holatni baholang: Tuzatilgan qiymat meʼyor doirasida ekanligini tekshiring.

### Usul va formula

Payne (1973) klassik formulasiga asoslangan. Kalsiyning qariyb 40-50% qismi albumni bilan bog‘langan bo‘lib, albumin kamayganda umumiy kalsiy ham soxta kamayadi.

Tuzatilgan kalsiy (mmol/l) = Umumiy kalsiy (mmol/l) + 0.02 × (40 − Albumin g/l); mg/dl da = Umumiy kalsiy (mg/dl) + 0.8 × (4.0 − Albumin g/dl).

### Cheklovlar

Buyrak yetishmovchiligi, KShH ning og‘ir buzilishlarida yoki kritik holatlarda ionlashgan kalsiy (Ca2+) ni bevosita o‘lchash talab etiladi.

### Manbalar

- [Payne R.B., Little A.J., Williams R.B., Milner J.R. Interpretation of serum calcium in patients with abnormal serum proteins. BMJ, 1973;4(5893):643–646](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson J.H., Lewis J.W., Boyd J.C. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978;46(6):986–993](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N. et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025;8(1):e2455251](https://pubmed.ncbi.nlm.nih.gov/39836424/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="corrected-calcium" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="corrected-calcium" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/corrected-calcium?lang=uz&theme=auto"
  title="Albumin bo‘yicha tuzatilgan kalsiy kalkulyatori (Payne)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
