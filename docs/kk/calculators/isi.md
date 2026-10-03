# ISI ұйқысыздық индексі

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/isi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/isi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`isi` · [NutriFit](https://nutrifit.health/kk/calculators/isi)

Соңғы 2 аптадағы ұйқыны бағалау: 0–4 аралығындағы әртүрлі шкалалары бар 7 тармақ; қосынды 0–28. Қанағаттану, мәселенің байқалуы, алаңдау және күнделікті өмірге әсер үшін жауаптар бөлек.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Соңғы 2 аптадағы ұйқыны бағалау: 0–4 аралығындағы әртүрлі шкалалары бар 7 тармақ; қосынды 0–28. Қанағаттану, мәселенің байқалуы, алаңдау және күнделікті өмірге әсер үшін жауаптар бөлек.
2. Параметрлерді нақтылаңыз: Соңғы 2 аптадағы ұйқыны бағалау: 0–4 аралығындағы әртүрлі шкалалары бар 7 тармақ; қосынды 0–28. Қанағаттану, мәселенің байқалуы, алаңдау және күнделікті өмірге әсер үшін жауаптар бөлек.
3. Нәтижені оқыңыз: Өзін бағалауға арналған ақпараттық аударма. Дәл осы бейімдеудің валидациясы расталмаған. Балл диагноз қоймайды, төмен нәтиже ауруды жоққа шығармайды.

### Әдіс пен формула

Соңғы 2 аптадағы ұйқыны бағалау: 0–4 аралығындағы әртүрлі шкалалары бар 7 тармақ; қосынды 0–28. Қанағаттану, мәселенің байқалуы, алаңдау және күнделікті өмірге әсер үшін жауаптар бөлек.

Соңғы 2 аптадағы ұйқыны бағалау: 0–4 аралығындағы әртүрлі шкалалары бар 7 тармақ; қосынды 0–28. Қанағаттану, мәселенің байқалуы, алаңдау және күнделікті өмірге әсер үшін жауаптар бөлек.

### Шектеулер

Өзін бағалауға арналған ақпараттық аударма. Дәл осы бейімдеудің валидациясы расталмаған. Балл диагноз қоймайды, төмен нәтиже ауруды жоққа шығармайды.

### Дереккөздер

- [Morin CM et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases and evaluate treatment response. Sleep, 2011](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien CH et al. Validation of the Insomnia Severity Index as an outcome measure for insomnia research. Sleep Med, 2001](https://pubmed.ncbi.nlm.nih.gov/11438246/)
- [PhenX Toolkit. Insomnia Severity Index: patient questionnaire, last two weeks, protocol 640801](https://www.phenxtoolkit.org/protocols/view/640801?origin=subcollection)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="isi" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="isi" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/isi?lang=kk&theme=auto"
  title="ISI ұйқысыздық индексі" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
