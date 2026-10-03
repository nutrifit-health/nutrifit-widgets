# EPA және DHA анықтамалық мөлшерлері

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/omega-3.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/omega-3.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/omega-3.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/omega-3.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/omega-3.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/omega-3.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`omega-3` · [NutriFit](https://nutrifit.health/kk/calculators/omega-3)

EFSA ересектерге арналған AI — тағам мен қоспаларды бірге есептегенде тәулігіне 250 мг EPA+DHA. Жүктілік пен емізу кезінде осы мөлшерге қосымша тәулігіне 100–200 мг DHA көрсетілген. Бұл тұрақты EPA:DHA арақатынасы немесе балық майының толық массасы емес.

### Қолдану тәртібі

1. Деректерді енгізіңіз: EFSA ересектерге арналған AI — тағам мен қоспаларды бірге есептегенде тәулігіне 250 мг EPA+DHA. Жүктілік пен емізу кезінде осы мөлшерге қосымша тәулігіне 100–200 мг DHA көрсетілген. Бұл тұрақты EPA:DHA арақатынасы немесе балық майының толық массасы емес.
2. Бағдарларды салыстырыңыз: EFSA ересектерге арналған AI — тағам мен қоспаларды бірге есептегенде тәулігіне 250 мг EPA+DHA. Жүктілік пен емізу кезінде осы мөлшерге қосымша тәулігіне 100–200 мг DHA көрсетілген. Бұл тұрақты EPA:DHA арақатынасы немесе балық майының толық массасы емес.
3. Шектеулерді ескеріңіз: Бұл бағдар қоспа қабылдау міндетті дегенді білдірмейді және рационды бағалауды алмастырмайды. Нысан жоғары триглицеридтер мен депрессияны емдеуді тағайындамайды, омега-3 индексі бойынша тапшылық диагнозын қоймайды. Дәрілерді, өзара әсерлерді және жеке дозаларды дәрігермен талқылаңыз.

### Әдіс пен формула

EFSA ересектерге арналған AI — тағам мен қоспаларды бірге есептегенде тәулігіне 250 мг EPA+DHA. Жүктілік пен емізу кезінде осы мөлшерге қосымша тәулігіне 100–200 мг DHA көрсетілген. Бұл тұрақты EPA:DHA арақатынасы немесе балық майының толық массасы емес.

EFSA ересектерге арналған AI — тағам мен қоспаларды бірге есептегенде тәулігіне 250 мг EPA+DHA. Жүктілік пен емізу кезінде осы мөлшерге қосымша тәулігіне 100–200 мг DHA көрсетілген. Бұл тұрақты EPA:DHA арақатынасы немесе балық майының толық массасы емес.

### Шектеулер

Бұл бағдар қоспа қабылдау міндетті дегенді білдірмейді және рационды бағалауды алмастырмайды. Нысан жоғары триглицеридтер мен депрессияны емдеуді тағайындамайды, омега-3 индексі бойынша тапшылық диагнозын қоймайды. Дәрілерді, өзара әсерлерді және жеке дозаларды дәрігермен талқылаңыз.

### Дереккөздер

- [EFSA. Dietary Reference Values summary, 2017, Table 2](https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="omega-3" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="omega-3" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/omega-3?lang=kk&theme=auto"
  title="EPA және DHA анықтамалық мөлшерлері" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
