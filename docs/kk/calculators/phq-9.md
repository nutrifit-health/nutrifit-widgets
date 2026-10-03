# Пациент денсаулығы сауалнамасы PHQ-9 (Депрессия)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phq-9.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phq-9.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`phq-9` · [NutriFit](https://nutrifit.health/kk/calculators/phq-9)

Соңғы 2 аптадағы депрессиялық симптомдардың айқындылығы: жиілік бойынша 0–3 балдық 9 жауап; қосынды 0–27.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Соңғы 2 аптадағы депрессиялық симптомдардың айқындылығы: жиілік бойынша 0–3 балдық 9 жауап; қосынды 0–27.
2. Параметрлерді нақтылаңыз: Соңғы 2 аптадағы депрессиялық симптомдардың айқындылығы: жиілік бойынша 0–3 балдық 9 жауап; қосынды 0–27.
3. Нәтижені оқыңыз: Өзін бағалауға арналған ақпараттық аударма. Дәл осы бейімдеудің валидациясы расталмаған. Балл диагноз қоймайды, төмен нәтиже ауруды жоққа шығармайды. 9-тармаққа кез келген нөлден жоғары жауап жалпы балға қарамастан өлім не өзіне зиян келтіру туралы ойларды маманмен бөлек талқылауды қажет етеді. Тікелей қауіп болса, шұғыл көмекке жүгініңіз.

### Әдіс пен формула

Соңғы 2 аптадағы депрессиялық симптомдардың айқындылығы: жиілік бойынша 0–3 балдық 9 жауап; қосынды 0–27.

Соңғы 2 аптадағы депрессиялық симптомдардың айқындылығы: жиілік бойынша 0–3 балдық 9 жауап; қосынды 0–27.

### Шектеулер

Өзін бағалауға арналған ақпараттық аударма. Дәл осы бейімдеудің валидациясы расталмаған. Балл диагноз қоймайды, төмен нәтиже ауруды жоққа шығармайды. 9-тармаққа кез келген нөлден жоғары жауап жалпы балға қарамастан өлім не өзіне зиян келтіру туралы ойларды маманмен бөлек талқылауды қажет етеді. Тікелей қауіп болса, шұғыл көмекке жүгініңіз.

### Дереккөздер

- [Kroenke K et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer RL et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. Primary Care Evaluation of Mental Disorders. Patient Health Questionnaire. JAMA, 1999](https://pubmed.ncbi.nlm.nih.gov/10568646/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phq-9" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="phq-9" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phq-9?lang=kk&theme=auto"
  title="Пациент денсаулығы сауалнамасы PHQ-9 (Депрессия)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
