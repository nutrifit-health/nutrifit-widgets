# Қабылданған стресс шкаласы PSS-10

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/pss-10.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/pss-10.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`pss-10` · [NutriFit](https://nutrifit.health/kk/calculators/pss-10)

Соңғы айдағы қабылданатын стрессті PSS-10 шкаласының 10 тармағы арқылы бағалау.

### Қолдану тәртібі

1. Нұсқаулықты оқыңыз: Көрсетілген мерзім мен әр тұжырымның мағынасын ескеріңіз.
2. Жауаптарды таңдаңыз: Әр тармаққа сәйкес нұсқаны таңдап жауап беріңіз.
3. Нәтижені қараңыз: Нәтиже жауаптарды көрсетеді; оны әдістеменің шектеулерін ескере отырып қолданыңыз.

### Әдіс пен формула

0-ден 4-ке дейінгі 10 жауап. 4, 5, 7 және 8-тармақтар 4-тен жауапты шегеру арқылы бағаланады.

Қосынды 0–40. Жоғары балл қабылданатын стресстің көбірек екенін көрсетеді; автор төмен, орташа немесе жоғары стресс шектерін белгілемейді.

### Шектеулер

Анықтамалық нәтиже диагноз қоймайды және ем тағайындамайды. Аударма ақпараттық бейімдеу болып табылады; оның жеке психометриялық валидациясы расталмаған.

### Дереккөздер

- [Cohen. Perceived Stress Scale: author instructions and scoring limitations](https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/index.html)
- [Cohen S et al. A global measure of perceived stress. J Health Soc Behav, 1983](https://pubmed.ncbi.nlm.nih.gov/6668417/)
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
