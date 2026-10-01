# TyG индексінің калькуляторы (триглицеридтер × глюкоза)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tyg-index.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tyg-index.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`tyg-index` · [NutriFit](https://nutrifit.health/kk/calculators/tyg-index)

TyG индексі және TyG-BMI, TyG-WC туындылары: аш қарынға триглицеридтер мен глюкоза бойынша инсулинге төзімділік пен кардиометаболикалық қауіпті бағалау — инсулин талдауынсыз.

### Пайдалану реті

1. Аш қарынға триглицеридтер мен глюкозаны алыңыз: Екі көрсеткіш те қанның стандартты биохимиясына кіреді. Үлгі аш қарынға алынуы маңызды: тамақтан кейін триглицеридтер 1,5–2 есе өсіп, индексті «үрлейді».
2. Бланк бірліктерін көрсетіңіз: Формула мг/дл үшін анықталған. Зертхана ммоль/л берсе, ауыстырғышты ммоль/л-де қалдырыңыз — калькулятор мг/дл-ге автоматты түрде қайта есептейді.
3. Салмақ, бой және белді қосыңыз: TyG-BMI және TyG-WC висцеральды семіздік пен бауырдың майлы ауруын «таза» TyG-ден дәлірек анықтайды. Белді кіндік деңгейінде дем шығарғанда өлшеңіз.

### Әдістеме және формула

TyG индексі (Simental-Mendía, 2008) — мг/дл-дегі аш қарынға триглицеридтер мен глюкоза көбейтіндісінің жартысының натурал логарифмі. Ол липотоксикалықты және глюкозаның игерілуінің бұзылуын — инсулинге төзімділіктің екі негізгі механизмін — көрсетеді және эугликемиялық клэмппен HOMA-IR-ден кем емес корреляцияланады, бұл ретте қымбат және нашар стандартталған инсулин талдауын қажет етпейді. TyG-BMI және TyG-WC туындылары дене салмағы мен бел орамын қосып, метаболикалық синдром мен АБМА анықтау дәлдігін арттырады.

TyG = ln[ Триглицеридтер (мг/дл) × Глюкоза (мг/дл) / 2 ]
TyG-BMI = TyG × ДСИ (кг/м²)
TyG-WC = TyG × Бел орамы (см)
Қайта есептеу: ТГ мг/дл = ммоль/л × 88,57; глюкоза мг/дл = ммоль/л × 18,016

### Шектеулер

TyG-дің бірыңғай шегі жоқ: әртүрлі популяцияларда жоғары қауіп шегі 8,5-тен 9,0-ге дейін ауытқиды, ал азиялық когорттарда — төмен. Индекс отбасылық гипертриглицеридемияда, фибраттар, статиндер қабылдағанда және алдыңғы күні алкоголь ішкенде, сондай-ақ жедел ауру кезінде бұрмаланады. Аш қарынға (8–12 сағ) мәндер қажет. Индекс — диагноз емес, скринингтік құрал.

### Дереккөздер

- [Simental-Mendía L.E., Rodríguez-Morán M., Guerrero-Romero F. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008;6(4):299–304](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F. et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010;95(7):3347–3351](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A. et al. Diagnostic accuracy of the triglyceride and glucose index for insulin resistance: a systematic review. Int J Endocrinol, 2020;2020:4678526](https://pubmed.ncbi.nlm.nih.gov/32256572/)

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
