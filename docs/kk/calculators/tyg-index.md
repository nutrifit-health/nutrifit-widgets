# TyG индексінің калькуляторы (триглицеридтер × глюкоза)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tyg-index.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tyg-index.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`tyg-index` · [NutriFit](https://nutrifit.health/kk/calculators/tyg-index)

Ашқарындағы триглицеридтер мен глюкозаға негізделген зерттеу индексі, TyG-BMI және TyG-WC туынды көрсеткіштерімен.

### Қолдану тәртібі

1. Аш қарынға триглицеридтер мен глюкозаны алыңыз: Екі көрсеткіш те қанның стандартты биохимиясына кіреді. Үлгі аш қарынға алынуы маңызды: тамақтан кейін триглицеридтер 1,5–2 есе өсіп, индексті «үрлейді».
2. Бланк бірліктерін көрсетіңіз: Формула мг/дл үшін анықталған. Зертхана ммоль/л берсе, ауыстырғышты ммоль/л-де қалдырыңыз — калькулятор мг/дл-ге автоматты түрде қайта есептейді.
3. Салмақ, бой және белді қосыңыз: TyG-BMI және TyG-WC висцеральды семіздік пен бауырдың майлы ауруын «таза» TyG-ден дәлірек анықтайды. Белді кіндік деңгейінде дем шығарғанда өлшеңіз.

### Әдіс пен формула

Мұнда Lee et al. (2018) қолданған ln(TG × глюкоза / 2) нұсқасы пайдаланылады, екі концентрация да мг/дл-де. Басқа жарияланған ln(TG × глюкоза)/2 нұсқасының сандық шкаласы бөлек; оның шектерін мұнда қолдануға болмайды.

TyG = ln[TG (мг/дл) × глюкоза (мг/дл) / 2]. TyG-BMI = TyG × ДСИ; TyG-WC = TyG × бел (см).

### Шектеулер

Бұл есептеу үшін әмбебап диагностикалық шектер белгіленбеген. Индекс инсулинге төзімділікті, диабетті немесе жүрек-қан тамырлары ауруын растамайды.

### Дереккөздер

- [Lee J.W., Lim N.K., Park H.Y. TyG and type 2 diabetes risk in middle-aged Koreans. BMC Endocr Disord, 2018;18:33](https://link.springer.com/article/10.1186/s12902-018-0259-x)
- [Simental-Mendía LE et al. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A et al. Diagnostic Accuracy of the Triglyceride and Glucose Index for Insulin Resistance: A Systematic Review. Int J Endocrinol, 2020](https://pubmed.ncbi.nlm.nih.gov/32256572/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tyg-index" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="tyg-index" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tyg-index?lang=kk&theme=auto"
  title="TyG индексінің калькуляторы (триглицеридтер × глюкоза)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
