# Қабылданған стресс шкаласы PSS-10

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/pss-10.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/pss-10.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`pss-10` · [NutriFit](https://nutrifit.health/kk/calculators/pss-10)

Шелдон Коэннің өмірлік жағдайлардың қаншалықты болжаусыз, бақыланбайтын және шектен тыс ретінде қабылданатынын өлшеуге арналған классикалық шкаласы.

### Пайдалану реті

1. Соңғы бір айға назар аударыңыз: Соңғы 30 күндегі ойларыңыз бен көңіл-күйіңізді тұтас бағалаңыз.
2. Сәйкес жиілікті таңдаңыз: Әрбір тұжырымды 0 («Ешқашан»)-ден 4 («Өте жиі»)-ке дейін бағалаңыз.
3. Стресс бейініңізді талдаңыз: Өз ұпайыңызды көріп, күш-қуатты қалпына келтірудің тиімді әдістерімен танысыңыз.

### Әдістеме және формула

0-ден 4-ке дейінгі 5 жауап нұсқасы бар 10 сұрақ. 4, 5, 7 және 8-тармақтар ішкі тұрақтылық пен сенімділікті бағалау үшін кері есептеледі.

Жалпы PSS-10 балы = Тікелей сұрақтар (1, 2, 3, 6, 9, 10) + Кері сұрақтар (4, 5, 7, 8). 0–13: төмен; 14–26: орташа; 27–40: жоғары стресс деңгейі.

### Шектеулер

Тест жүктемелерді субъективті бағалауды көрсетеді және медициналық диагноз болып табылмайды. Созылмалы шаршау кезінде маманға қаралыңыз.

### Дереккөздер

- [Cohen S. et al. A global measure of perceived stress. J Health Soc Behav, 1983;24(4):385–396](https://pubmed.ncbi.nlm.nih.gov/6668417/)
- [Cohen S., Williamson G.M. Perceived stress in a probability sample of the United States. The Social Psychology of Health, 1988:31–67](https://psycnet.apa.org/record/1988-98838-002)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="pss-10" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="pss-10" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/pss-10?lang=kk&theme=auto"
  title="Қабылданған стресс шкаласы PSS-10" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
