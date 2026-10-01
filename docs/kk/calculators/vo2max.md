# МТК (VO2max) калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vo2max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vo2max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`vo2max` · [NutriFit](https://nutrifit.health/kk/calculators/vo2max)

Арнайы зертханалық жабдықсыз дәлелденген далалық сынақтар негізінде аэробтық қуат пен кардиореспираторлық төзімділікті бағалайды.

### Пайдалану реті

1. Қолайлы хаттаманы таңдаңыз: Жүгірушілерге 12 минуттық Купер тесті ұсынылады. Жасы үлкен немесе жаңадан бастағандар үшін 1 мильге Рокпорт жылдам жүру тесті қауіпсіз.
2. Көрсеткіштерді дәл белгілеңіз: Купер тестінде стадион немесе GPS бойынша қашықтықты метрге дейін дәл өлшеңіз. Рокпорт тестінде уақытты және мәреден кейінгі алғашқы пульсті жазыңыз.
3. Болжам мен қарқынды бағалаңыз: Калькулятор нәтижеңізді Cooper Institute нормаларымен салыстырады және 5 км мен 10 км үшін жарыс қарқынын көрсетеді.

### Әдістеме және формула

Калькуляторда ғылыми дәлелденген үш әдіс жүзеге асырылған: 12 минуттық Купер жүгіру тесті, 1 мильге Рокпорт қарқынды жүру тесті және тыныштық-максималды пульс қатынасы (Uth et al.).

Купер: VO2max = (Қашықтық, м − 504,9) / 44,73; Рокпорт: 132,853 − 0,0769 × Салмақ(фунт) − 0,3877 × Жас + 6,315 × Жыныс − 3,2649 × Уақыт − 0,1565 × ЖСЖ; Uth: 15 × (ЖСЖ max / ЖСЖ тыныштық).

### Шектеулер

Далалық сынақтар орташа қателігі 5–10% құрайтын жанама бағалау болып табылады. Қарқынды сақтау, жол жабыны, ауа райы және кофеин нәтижеге әсер етуі мүмкін.

### Дереккөздер

- [Cooper K.H. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968;203(3):201–204](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline G.M. et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987;19(3):253–259](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N. et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004;91(1):111–115](https://pubmed.ncbi.nlm.nih.gov/14624296/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vo2max" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="vo2max" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vo2max?lang=kk&theme=auto"
  title="МТК (VO2max) калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
