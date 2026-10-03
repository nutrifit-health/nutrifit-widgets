# Йель тағамдық тәуелділік шкаласы mYFAS 2.0

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/yfas.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/yfas.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`yfas` · [NutriFit](https://nutrifit.health/kk/calculators/yfas)

mYFAS 2.0: соңғы 12 айдағы тамақтану мәселелері туралы 13 сұрақ.

### Қолдану тәртібі

1. Нұсқаулықты оқыңыз: Көрсетілген мерзім мен әр тұжырымның мағынасын ескеріңіз.
2. Жауаптарды таңдаңыз: Әр тармаққа сәйкес нұсқаны таңдап жауап беріңіз.
3. Нәтижені қараңыз: Нәтиже жауаптарды көрсетеді; оны әдістеменің шектеулерін ескере отырып қолданыңыз.

### Әдіс пен формула

«Ешқашан» мен «күн сайын» арасындағы сегіз жиілік жауабы. Әр тармақтың өз жиілік шегі бар; «иә/жоқ» жауаптары қолданылмайды.

5 және 6-тармақтар күйзелісті/күнделікті қызметтің бұзылуын бағалайды. Қалған 11 тармақ симптомдар санын береді. Күйзеліс болса: 2–3 — жеңіл, 4–5 — орташа, 6–11 — айқын скринингтік санат; басқа жағдайда шкала критерийі орындалмайды.

### Шектеулер

Анықтамалық нәтиже диагноз қоймайды және ем тағайындамайды. Аударма ақпараттық бейімдеу болып табылады; оның жеке психометриялық валидациясы расталмаған.

### Дереккөздер

- [Schulte, Gearhardt. Modified Yale Food Addiction Scale 2.0: original form and scoring](https://sites.lsa.umich.edu/fastlab/yale-food-addiction-scale/)
- [Schulte EM et al. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017](https://pubmed.ncbi.nlm.nih.gov/28370722/)
- [Gearhardt AN et al. Development of the Yale Food Addiction Scale Version 2.0. Psychol Addict Behav, 2016](https://pubmed.ncbi.nlm.nih.gov/26866783/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="yfas" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="yfas" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/yfas?lang=kk&theme=auto"
  title="Йель тағамдық тәуелділік шкаласы mYFAS 2.0" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
