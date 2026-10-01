# 1ҚМ калькуляторы (бір реттік максимум)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/one-rep-max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/one-rep-max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/one-rep-max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/one-rep-max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/one-rep-max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/one-rep-max.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`one-rep-max` · [NutriFit](https://nutrifit.health/kk/calculators/one-rep-max)

Спортшының 2–10 қайталау аралығындағы субмаксималды тестілеу арқылы жарақат қаупінсіз бір қайталауда көтере алатын ең жоғары салмағын анықтайды.

### Пайдалану реті

1. Мұқият қыздырынуды орындаңыз: Жалпы буындық қыздырыну жасаңыз, содан кейін салмақты біртіндеп жұмыс салмағына дейін арттыра отырып, 3–4 дайындық тәсілін орындаңыз.
2. 3–6 қайталауға жұмыс тәсілін жасаңыз: 1 қайталаудан артық қалдырмай (RPE 9), таза техникамен 3-тен 6-ға дейін қайталай алатын салмақты таңдаңыз.
3. Деректерді енгізіп, пайыздарды пайдаланыңыз: Салмақ пен қайталау санын калькуляторға енгізіңіз. Пайыздар кестесі бойынша күш (85%), гипертрофия (75%) немесе қалпына келтіру (60%) жаттығуларына арналған салмақтарды анықтаңыз.

### Әдістеме және формула

Бір қайталаулық максимумды есептеу шаршағанға дейін орындалған қайталаулар саны мен шекті салмақ үлесі арасындағы регрессиялық теңдеулерге негізделген. Эпли формуласы 2–6 қайталау аралығында жақсырақ жұмыс істейді, ал Бжицки формуласы 6–10 қайталауда жоғары дәлдік береді.

Epley: 1RM = Салмақ × (1 + 0,0333 × Қайт); Brzycki: 1RM = Салмақ / (1,0278 − 0,0278 × Қайт); Lombardi: Салмақ × Қайт^0,10; Wathan: (100 × Салмақ) / (48,8 + 53,8 × e^(-0,075 × Қайт)).

### Шектеулер

Жергілікті метаболикалық шаршауға байланысты 10–12 қайталаудан асатын тәсілдер үшін жарамсыз. Дәлдік техникалық орындалуға және бұлшықет талшықтарының құрамына байланысты.

### Дереккөздер

- [Epley B. Poundage chart. Boyd Epley Workout, Lincoln, NE, 1985](https://pubmed.ncbi.nlm.nih.gov/2706858/)
- [Brzycki M. Strength testing—predicting a one-rep max from reps-to-fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds J.M. et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006;20(3):584–592](https://pubmed.ncbi.nlm.nih.gov/16937972/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="one-rep-max" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="one-rep-max" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/one-rep-max?lang=kk&theme=auto"
  title="1ҚМ калькуляторы (бір реттік максимум)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
