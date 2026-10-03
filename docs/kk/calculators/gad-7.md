# Генерализацияланған мазасыздық шкаласы GAD-7

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/gad-7.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/gad-7.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/gad-7.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/gad-7.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/gad-7.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/gad-7.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`gad-7` · [NutriFit](https://nutrifit.health/kk/calculators/gad-7)

Соңғы 2 аптадағы мазасыздық симптомдарының айқындылығы: жиілік бойынша 0–3 балдық 7 жауап; қосынды 0–21.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Соңғы 2 аптадағы мазасыздық симптомдарының айқындылығы: жиілік бойынша 0–3 балдық 7 жауап; қосынды 0–21.
2. Параметрлерді нақтылаңыз: Соңғы 2 аптадағы мазасыздық симптомдарының айқындылығы: жиілік бойынша 0–3 балдық 7 жауап; қосынды 0–21.
3. Нәтижені оқыңыз: Өзін бағалауға арналған ақпараттық аударма. Дәл осы бейімдеудің валидациясы расталмаған. Балл диагноз қоймайды, төмен нәтиже ауруды жоққа шығармайды.

### Әдіс пен формула

Соңғы 2 аптадағы мазасыздық симптомдарының айқындылығы: жиілік бойынша 0–3 балдық 7 жауап; қосынды 0–21.

Соңғы 2 аптадағы мазасыздық симптомдарының айқындылығы: жиілік бойынша 0–3 балдық 7 жауап; қосынды 0–21.

### Шектеулер

Өзін бағалауға арналған ақпараттық аударма. Дәл осы бейімдеудің валидациясы расталмаған. Балл диагноз қоймайды, төмен нәтиже ауруды жоққа шығармайды.

### Дереккөздер

- [Spitzer RL et al. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 2006](https://pubmed.ncbi.nlm.nih.gov/16717171/)
- [Löwe B et al. Validation and standardization of the Generalized Anxiety Disorder Screener (GAD-7) in the general population. Med Care, 2008](https://pubmed.ncbi.nlm.nih.gov/18388841/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="gad-7" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="gad-7" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/gad-7?lang=kk&theme=auto"
  title="Генерализацияланған мазасыздық шкаласы GAD-7" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
