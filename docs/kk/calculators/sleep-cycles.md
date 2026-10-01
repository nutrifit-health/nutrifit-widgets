# Ұйқы циклдерінің калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sleep-cycles.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sleep-cycles.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sleep-cycles.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sleep-cycles.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sleep-cycles.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sleep-cycles.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`sleep-cycles` · [NutriFit](https://nutrifit.health/kk/calculators/sleep-cycles)

90 минуттық ультрадиандық циклдер (баяу және жылдам ұйқы фазалары) мен орташа ұйықтап кету уақыты негізінде ұйқы уақытын есептеу құралы.

### Пайдалану реті

1. Есептеу бағытын таңдаңыз: Сізге не қажет екенін анықтаңыз: оятқышқа ояну үшін сағат нешеде жату керектігін білу немесе қазір жатсаңыз оятқышты нешеге қою керектігін білу.
2. Ұйықтап кету латенттілігін орнатыңыз: Әдепкі бойынша 14 минут орнатылған. Егер сіз әдетте ұзағырақ дөңбекшісеңіз немесе лезде ұйықтап кетсеңіз, осы мәнді түзетіңіз.
3. 5 немесе 6 циклден тұратын тізбекті таңдаңыз: 5 цикл (7 сағ 30 мин) жұмыс күндері үшін өте қолайлы, 6 цикл (9 сағ) — қарқынды жаттығулар немесе ұйқы тапшылығын қалпына келтіру үшін.

### Әдістеме және формула

Есептеу NREM (баяу ұйқы) және REM (жылдам ұйқы) сатыларын біріктіретін 90 минуттық ультрадиандық циклдер моделіне негізделген. Цикл шекарасында ояну ұйқы инерциясын болдырмайды.

Ояну уақыты = Ұйықтау уақыты + Ұйықтап кету (14 мин) + N × 90 мин. Ұйықтау уақыты = Ояну уақыты - (N × 90 мин) - Ұйықтап кету (14 мин).

### Шектеулер

Калькулятор 90 минуттық орташа цикл ұзақтығын пайдаланады. Жеке цикл 70-тен 120 минутқа дейін өзгеруі мүмкін. Созылмалы ұйқы бұзылыстарында полисомнография қажет.

### Дереккөздер

- [Carskadon M.A., Dement W.C. Normal Human Sleep: An Overview. Principles and Practice of Sleep Medicine, 2011;5:16–26](https://doi.org/10.1016/B978-1-4160-6645-3.00002-5)
- [Hirshkowitz M. et al. National Sleep Foundation’s sleep time duration recommendations: methodology and results summary. Sleep Health, 2015;1(1):40–43](https://pubmed.ncbi.nlm.nih.gov/29073412/)
- [Dijk D.J., Czeisler C.A. Contribution of the circadian pacemaker and the homeostatic process to the timing of human sleep. Sleep, 1995;18(5):285–304](https://pubmed.ncbi.nlm.nih.gov/7676163/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sleep-cycles" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="sleep-cycles" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sleep-cycles?lang=kk&theme=auto"
  title="Ұйқы циклдерінің калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
