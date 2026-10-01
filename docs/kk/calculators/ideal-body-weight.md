# Мінсіз салмақ калькуляторы (IBW және AdjBW)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ideal-body-weight.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ideal-body-weight.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/kk/calculators/ideal-body-weight)

Жалпы қабылданған клиникалық формулалар бойынша эталондық дене салмағын есептейді және медициналық мақсаттар үшін түзетілген салмақты (AdjBW) анықтайды.

### Пайдалану реті

1. Девайн формуласын салауатты ДМИ-мен салыстырыңыз: Devine формуласы әдетте норманың ортасына — ДМИ 21,5–22,5 кг/м² аралығына сәйкес келеді.
2. Артық салмақ кезінде AdjBW пайдаланыңыз: Егер нақты салмақ мінсіз салмақтан 20%-дан астам артық болса (ДМИ > 30), тамақтануды нақты салмақ бойынша емес, AdjBW бойынша есептеңіз.
3. Сүйек бітімін ескеріңіз: Сүйегі ірі адамдар үшін ДДҰ нормасының жоғарғы шекарасында (ДМИ 23–24,9) болу табиғи әрі қолайлы.

### Әдістеме және формула

Мінсіз дене салмағының медициналық формулалары дәрі-дәрмектердің мөлшерін анықтау және өкпені жасанды желдету параметрлерін белгілеу үшін жасалған. Эстетикалық кестелерден айырмашылығы, олар физиологиялық гомеостазды анықтайды.

Devine (Ер): 50 + 2,3 × (Бой_дюйм − 60); Devine (Әйел): 45,5 + 2,3 × (Бой_дюйм − 60); AdjBW = IBW + 0,4 × (Нақты_Салмақ − IBW); Robinson: Ер 52 + 1,9×дюйм, Әйел 49 + 1,7×дюйм.

### Шектеулер

Формулалар спортшылардың дамыған бұлшықеттерін және сүйек құрылымының жеке ерекшеліктерін (кең немесе жіңішке сүйек) ескермейді.

### Дереккөздер

- [Devine B.J. Gentamicin therapy. Drug Intell Clin Pharm, 1974;8:650–655](https://pubmed.ncbi.nlm.nih.gov/4611413/)
- [Robinson J.D. et al. Determination of ideal body weight for drug dosing. Am J Hosp Pharm, 1983;40(6):1016–1019](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Miller P.F. et al. Comparison of formulas for estimating ideal body weight. Am J Hosp Pharm, 1983;40:1622](https://pubmed.ncbi.nlm.nih.gov/6638027/)
- [Hamwi G.J. Therapy: changing concepts in diabetes mellitus. In: Danowski T.S. (ed). Diabetes Mellitus: Diagnosis and Treatment. ADA, 1964:73–78](https://pubmed.ncbi.nlm.nih.gov/14207860/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ideal-body-weight" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="ideal-body-weight" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ideal-body-weight?lang=kk&theme=auto"
  title="Мінсіз салмақ калькуляторы (IBW және AdjBW)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
