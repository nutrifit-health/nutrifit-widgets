# Hall–Chow салмақ өзгерісі сценарийі

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/weight-loss-forecast.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/weight-loss-forecast.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/kk/calculators/weight-loss-forecast)

Орташа параметрлері бар қарапайым модель бастапқы энергия тұтынуы тұрақты азайғанда және белсенділік өзгермегенде салмақ өзгерісін көрсетеді.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Нақты мәндер мен тиісті бірліктерді қолданыңыз.
2. Параметрлерді нақтылаңыз: Бастапқы болжамдарды өз жағдайыңызға сай өзгертіңіз.
3. Нәтижені оқыңыз: Модель шектеулерін ескеріңіз; есеп өлшеу емес.

### Әдіс пен формула

W(t)=W0−D/22×(1−exp(−22×t/9100)); t — күн, D — ккал/тәуліктегі азаю. Орташа параметрлер: ρ=9100 ккал/кг, ε=22 ккал/(кг·тәулік). Сызықтық салыстыру: D×t/7700 жоғалту.

W(t)=W0−D/22×(1−exp(−22×t/9100)); t — күн, D — ккал/тәуліктегі азаю. Орташа параметрлер: ρ=9100 ккал/кг, ε=22 ккал/(кг·тәулік). Сызықтық салыстыру: D×t/7700 жоғалту.

### Шектеулер

Бұл Hall–Chow (2011) екі параметрлі сызықтандырылған моделі, NIH Body Weight Planner толық жеке моделі емес. Май, бұлшықет немесе платоның нақты күнін болжай алмайды. Ересектерге арналған сценарий; жүктілік пен емізу кезінде қолданылмайды. Бастапқы тұтыну салмақты сақтайды, ал азаю тұрақты деп алынады; су, дәрілер, аурулар мен рационды ұстану модельденбейді. Калория тапшылығын тағайындамайды.

### Дереккөздер

- [Hall K.D., Chow C.C. Estimating changes in free-living energy intake and its confidence interval. Am J Clin Nutr, 2011;94(1):66–74. Linearized energy-balance model](https://pmc.ncbi.nlm.nih.gov/articles/PMC3127505/)
- [Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011](https://pubmed.ncbi.nlm.nih.gov/21872751/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="weight-loss-forecast" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="weight-loss-forecast" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/weight-loss-forecast?lang=kk&theme=auto"
  title="Hall–Chow салмақ өзгерісі сценарийі" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
