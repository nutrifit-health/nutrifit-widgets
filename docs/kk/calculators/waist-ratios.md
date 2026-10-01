# Бел антропометриялық индекстерінің калькуляторы (WHtR, WHR, VAI)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/waist-ratios.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/waist-ratios.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/waist-ratios.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/waist-ratios.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/waist-ratios.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/waist-ratios.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`waist-ratios` · [NutriFit](https://nutrifit.health/kk/calculators/waist-ratios)

Май тінінің таралуын, висцералды май мөлшерін және кардиометаболикалық қауіпті қарапайым ДМИ-ге қарағанда әлдеқайда дәл бағалайды.

### Пайдалану реті

1. Белдің дұрыс анатомиялық сызығын табыңыз: Бел кіндік деңгейінде емес, ең төменгі қабырға мен жамбас сүйегінің арасындағы қашықтықтың дәл ортасында өлшенеді. Қалыпты тыныс шығарыңыз.
2. Мықын өлшемін алыңыз: Өлшеуіш таспаны бөксенің ең кең, шығыңқы тұсынан көлденең өткізіңіз.
3. Бойға қатынасын тексеріңіз: Белді бойға бөліңіз: егер нәтиже 0,50-ден төмен болса, ішкі ағзаларыңыз қауіпсіз жағдайда.

### Әдістеме және формула

Бел шеңбері ішкі ағзалардың айналасындағы қауіпті висцералды май көлемін тікелей көрсетеді. Бел мен бой қатынасы (WHtR) және бел мен мықын қатынасы (WHR) қант диабеті мен гипертония қаупін болжайтын басты көрсеткіштер.

WHtR = Бел / Бой; WHR = Бел / Мықын; VAI (Ер) = (Бел/(39,68+1,88×ДМИ)) × (ТГ/1,03) × (1,31/HDL); VAI (Әйел) = (Бел/(35,58+1,89×ДМИ)) × (ТГ/0,81) × (1,52/HDL).

### Шектеулер

Жүктілік кезінде, асцитте, іш жарығында немесе іш қуысы отасынан кейінгі алғашқы кезеңде қолданылмайды.

### Дереккөздер

- [Ashwell M., Gunn P., Gibson S. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012;13(3):275–286](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato M.C. et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010;33(4):920–922](https://pubmed.ncbi.nlm.nih.gov/20067971/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="waist-ratios" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="waist-ratios" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/waist-ratios?lang=kk&theme=auto"
  title="Бел антропометриялық индекстерінің калькуляторы (WHtR, WHR, VAI)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
