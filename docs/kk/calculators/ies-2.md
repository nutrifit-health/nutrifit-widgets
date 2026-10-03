# IES-2 интуитивті тамақтану шкаласы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ies-2.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ies-2.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`ies-2` · [NutriFit](https://nutrifit.health/kk/calculators/ies-2)

IES-2: тағамға және дене белгілеріне қатынас туралы 23 тұжырым, төрт қосалқы шкала.

### Қолдану тәртібі

1. Нұсқаулықты оқыңыз: Әр тұжырым сіздің көзқарасыңыз бен мінез-құлқыңызды қаншалықты сипаттайтынын көрсетіңіз. Белгілі бір еске түсіру мерзімі берілмеген.
2. Жауаптарды таңдаңыз: Әр тармаққа сәйкес нұсқаны таңдап жауап беріңіз.
3. Нәтижені қараңыз: Нәтиже жауаптарды көрсетеді; оны әдістеменің шектеулерін ескере отырып қолданыңыз.

### Әдіс пен формула

Келісу дәрежесі 1-ден 5-ке дейін. Автордың топталған бланкісінде 1, 2, 3, 7, 8, 9 және 10-тармақтар 6-дан жауапты шегеру арқылы бағаланады.

Жалпы балл — кері бағалаудан кейінгі 23 жауаптың орташа мәні. Қосалқы шкалалар: 1–6, 7–14, 15–20 және 21–23-тармақтар. Барлық орташа мәндер 1–5 аралығында; диагностикалық шектер жоқ.

### Шектеулер

Анықтамалық нәтиже диагноз қоймайды және ем тағайындамайды. Аударма ақпараттық бейімдеу болып табылады; оның жеке психометриялық валидациясы расталмаған.

### Дереккөздер

- [Tylka. Intuitive Eating Scale-2: grouped original items and scoring](https://cpb-us-w2.wpmucdn.com/u.osu.edu/dist/1/10560/files/2015/02/IES-2-Items-sz2at8.doc)
- [Tylka TL et al. The Intuitive Eating Scale-2: item refinement and psychometric evaluation with college women and men. J Couns Psychol, 2013](https://pubmed.ncbi.nlm.nih.gov/23356469/)
- [Tribole E., Resch E. Intuitive Eating: A Revolutionary Anti-Diet Approach. St. Martin’s Essentials, 2020](https://www.intuitiveeating.org/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ies-2" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="ies-2" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ies-2?lang=kk&theme=auto"
  title="IES-2 интуитивті тамақтану шкаласы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
