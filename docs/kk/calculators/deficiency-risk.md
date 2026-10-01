# Нутриент тапшылығы қаупінің скринингі

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/deficiency-risk.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/deficiency-risk.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`deficiency-risk` · [NutriFit](https://nutrifit.health/kk/calculators/deficiency-risk)

Өмір салты мен тамақтану факторларын белгілеп, қандай нутриенттің тапшылығы ықтимал екенін және оны қандай талдаумен тексеретінін көрсетеді.

### Пайдалану реті

1. Тамақтану ерекшеліктерін белгілеңіз: Диетадағы шектеулерді (еттен, балықтан, сүт өнімдерінен бас тарту) және әдеттерді көрсетіңіз.
2. Өмір салты мен дәрі-дәрмектерді ескеріңіз: Қоршаған орта факторларын (күн сәулесінің аздығы, қарқынды спорт) және препараттар қабылдауды (антацидтер, метформин) белгілеңіз.
3. Талдаулар тізімін алыңыз: Әрбір нутриент бойынша қауіп балдарын және клиникалық тексеру үшін нақты зертханалық маркерлерді біліңіз.

### Әдістеме және формула

Бұл диагностика емес, қауіп факторларының тізімі. Әр факторға NIH Office of Dietary Supplements fact sheets және EFSA тұтыну референстік шамалары бойынша материалдарында қауіп факторы деп танылған нутриенттер сәйкестендірілген. Фактор салмағы байланыс күшін көрсетеді: 3 ұпай — өтеусіз тапшылық заңды болатын жағдай, 2 — елеулі фактор, 1 — қосымша үлес. Ұпайлар әр нутриент бойынша қосылады: 2 ұпайдан бастап қауіп орташа, 4-тен бастап жоғары.

Нутриент ұпайы = белгіленген факторлар салмағының қосындысы; 0–1 ұпай — төмен қауіп, 2–3 — орташа, 4 және одан жоғары — жоғары

### Шектеулер

Скрининг тек белгіленген факторларға сүйенеді және нақты тұтынуды, қоспа қабылдауды, генетиканы әрі қатар жүретін ауруларды ескермейді. Ол тапшылықты растамайды да, жоққа шығармайды да — нутриент мәртебесі зертханалық анықталып, дәрігер немесе тамақтану маманы бағалайды.

### Дереккөздер

- [NIH Office of Dietary Supplements. Dietary Supplement Fact Sheets (группы риска по нутриентам)](https://ods.od.nih.gov/factsheets/list-all/)
- [EFSA. Dietary Reference Values for the EU (DRV Finder)](https://multimedia.efsa.europa.eu/drvs/index.htm)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="deficiency-risk" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="deficiency-risk" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/deficiency-risk?lang=kk&theme=auto"
  title="Нутриент тапшылығы қаупінің скринингі" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
