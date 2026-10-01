# Альбумин бойынша түзетілген кальций калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/corrected-calcium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/corrected-calcium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`corrected-calcium` · [NutriFit](https://nutrifit.health/kk/calculators/corrected-calcium)

Payne (1973) формуласы бойынша альбуминге түзетілген жалпы кальцийді есептеу және әдістің заманауи шектеулері.

### Пайдалану реті

1. Жалпы кальцийді енгізіңіз: Қан биохимиясынан ммоль/л немесе мг/дл мәнін енгізіңіз.
2. Альбуминді енгізіңіз: Сол сынамадан алынған альбумин деңгейі.
3. Иондалған кальций қажеттілігін бағалаңыз: Егер науқаста бүйрек ауруы болса, иондалған кальций тапсырылуы тиіс.

### Әдістеме және формула

Сарысу кальцийінің 40–45 %-ы альбуминмен байланысқан. Гипоальбуминемия кезінде белсенді иондалған кальций қалыпты болса да, жалпы кальций төмендейді. Payne (1973) формуласы 40 г/л-ден төмен әрбір 1 г/л үшін 0,02 ммоль/л қосады.

Түзетілген Ca (ммоль/л) = Жалпы Ca + 0,02 × (40 − Альбумин, г/л)
АҚШ бірліктерінде: Түзетілген Ca (мг/дл) = Жалпы Ca + 0,8 × (4,0 − Альбумин, г/дл).

### Шектеулер

Payne түзетуі созылмалы бүйрек ауруы (СБА) мен реанимациядағы науқастарда дәл болмауы мүмкін. Алтын стандарт — иондалған кальцийді (Ca²⁺) тікелей өлшеу.

### Дереккөздер

- [Payne R.B., Little A.J., Williams R.B., Milner J.R. Interpretation of serum calcium in patients with abnormal serum proteins. BMJ, 1973;4(5893):643–646](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson J.H., Lewis J.W., Boyd J.C. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978;46(6):986–993](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N. et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025;8(1):e2455251](https://pubmed.ncbi.nlm.nih.gov/39836424/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="corrected-calcium" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="corrected-calcium" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/corrected-calcium?lang=kk&theme=auto"
  title="Альбумин бойынша түзетілген кальций калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
