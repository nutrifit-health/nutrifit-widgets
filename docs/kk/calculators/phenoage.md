# PhenoAge биологиялық жас калькуляторы (Levine)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phenoage.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phenoage.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`phenoage` · [NutriFit](https://nutrifit.health/kk/calculators/phenoage)

Morgan Levine 2018 моделі бойынша 9 биомаркер мен жасқа негізделген ғылыми бағалау.

### Пайдалану реті

1. Талдау нәтижелерін жинаңыз: Қажет: ЖҚТ (лейкоциттер, лимфоциттер %, MCV, RDW) және биохимия (альбумин, креатинин, глюкоза, СРА, сілтілік фосфатаза).
2. Деректерді ХЖ бірлігінде енгізіңіз: Пішіндегі өлшем бірліктеріне назар аударыңыз.
3. Жас айырмашылығын бағалаңыз: Теріс мән ағзаның тозу деңгейінің құрдастарға қарағанда аз екенін көрсетеді.

### Әдістеме және формула

Levine 2018 моделі NHANES IV деректері негізінде 9 биомаркерді біріктіреді. Ол паспорттық жасқа қарағанда биологиялық қартаюды жақсырақ көрсетеді.

xb = −19,907 − 0,0336·Альбумин(г/л) + 0,0095·Креатинин(мкмоль/л) + 0,1953·Глюкоза(ммоль/л) + 0,0954·ln(СРА, мг/л) − 0,0120·Лимфоциттер(%) + 0,0268·MCV(фл) + 0,3306·RDW(%) + 0,00188·СФ(Б/л) + 0,0554·Лейкоциттер(10⁹/л) + 0,0804·Жас(жыл).

### Шектеулер

20–84 жас аралығына арналған зерттеу құралы. Жіті инфекциялар көрсеткіштерді бұрмалайды.

### Дереккөздер

- [Levine M.E. et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018;10(4):573–591](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z. et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: a cohort study. PLoS Med, 2018;15(12):e1002718](https://pubmed.ncbi.nlm.nih.gov/30596641/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phenoage" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="phenoage" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phenoage?lang=kk&theme=auto"
  title="PhenoAge биологиялық жас калькуляторы (Levine)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
