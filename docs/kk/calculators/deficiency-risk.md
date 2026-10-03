# Тамақтану және өмір салты чек-парағы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/deficiency-risk.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/deficiency-risk.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`deficiency-risk` · [NutriFit](https://nutrifit.health/kk/calculators/deficiency-risk)

Авторлық анықтамалық чек-парақ: қазіргі тамақтану және өмір салты ерекшеліктерін белгілеп, байланысты нутриент тақырыптарын қараңыз.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Факторлар мен нутриенттер байланысы — талқылауға арналған анықтамалық тақырыптар. NIH ODS және EFSA тамақтану мен қауіп топтары туралы мәлімет береді, бірақ бұл сауалнама үшін балл немесе тапшылық ықтималдығын белгілемейді.
2. Параметрлерді нақтылаңыз: Авторлық анықтамалық чек-парақ: қазіргі тамақтану және өмір салты ерекшеліктерін белгілеп, байланысты нутриент тақырыптарын қараңыз.
3. Нәтижені оқыңыз: Чек-парақ нақты тұтынуды, сіңірілуді, байытылған тағамдарды, қоспалар мен ауруларды ескермейді. Ол тапшылықты растамайды және жоққа шығармайды; талдаулар мен түзету қажеттілігі жеке анықталады.

### Әдіс пен формула

Факторлар мен нутриенттер байланысы — талқылауға арналған анықтамалық тақырыптар. NIH ODS және EFSA тамақтану мен қауіп топтары туралы мәлімет береді, бірақ бұл сауалнама үшін балл немесе тапшылық ықтималдығын белгілемейді.

Қауіп балдары мен санаттары есептелмейді. Тек белгіленген факторлар мен байланысты нутриенттер көрсетіледі.

### Шектеулер

Чек-парақ нақты тұтынуды, сіңірілуді, байытылған тағамдарды, қоспалар мен ауруларды ескермейді. Ол тапшылықты растамайды және жоққа шығармайды; талдаулар мен түзету қажеттілігі жеке анықталады.

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
  title="Тамақтану және өмір салты чек-парағы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
