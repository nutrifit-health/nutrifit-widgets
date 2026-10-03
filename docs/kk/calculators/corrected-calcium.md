# Альбумин бойынша түзетілген кальций калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/corrected-calcium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/corrected-calcium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`corrected-calcium` · [NutriFit](https://nutrifit.health/kk/calculators/corrected-calcium)

Түзетілген кальций = жалпы кальций + 0,02 × (40 − альбумин), кальций ммоль/л, альбумин г/л. Бұл Payne жеңілдетілген формуласы.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Түзетілген кальций = жалпы кальций + 0,02 × (40 − альбумин), кальций ммоль/л, альбумин г/л. Бұл Payne жеңілдетілген формуласы.
2. Параметрлерді нақтылаңыз: Түзетілген кальций = жалпы кальций + 0,02 × (40 − альбумин), кальций ммоль/л, альбумин г/л. Бұл Payne жеңілдетілген формуласы.
Ca: mg/dL × 0.2495 = mmol/L; mmol/L ÷ 0.2495 = mg/dL. Albumin: g/dL × 10 = g/L.
3. Нәтижені оқыңыз: Түзету иондалған кальцийді өлшемейді және нәтижені, әсіресе альбумин төмен кезде, қате жіктеуі мүмкін. Кальцийдің әмбебап санаты берілмейді.

### Әдіс пен формула

Түзетілген кальций = жалпы кальций + 0,02 × (40 − альбумин), кальций ммоль/л, альбумин г/л. Бұл Payne жеңілдетілген формуласы.

Түзетілген кальций = жалпы кальций + 0,02 × (40 − альбумин), кальций ммоль/л, альбумин г/л. Бұл Payne жеңілдетілген формуласы.
Ca: mg/dL × 0.2495 = mmol/L; mmol/L ÷ 0.2495 = mg/dL. Albumin: g/dL × 10 = g/L.

### Шектеулер

Түзету иондалған кальцийді өлшемейді және нәтижені, әсіресе альбумин төмен кезде, қате жіктеуі мүмкін. Кальцийдің әмбебап санаты берілмейді.

### Дереккөздер

- [Payne RB et al. Interpretation of serum calcium in patients with abnormal serum proteins. Br Med J, 1973](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson JH et al. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025](https://pubmed.ncbi.nlm.nih.gov/39836424/)

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
