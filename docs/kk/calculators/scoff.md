# SCOFF тамақтану бұзылыстарының скринингі

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/scoff.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/scoff.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/scoff.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/scoff.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/scoff.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/scoff.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`scoff` · [NutriFit](https://nutrifit.health/kk/calculators/scoff)

Тамақтану мінез-құлқының бұзылыстары (анорексия және булимия) қаупін бастапқы анықтауға арналған әлемде танылған 5 сұрақтық клиникалық құрал.

### Қолдану тәртібі

1. Нұсқаулықты оқыңыз: Көрсетілген мерзім мен әр тұжырымның мағынасын ескеріңіз.
2. Жауаптарды таңдаңыз: Әр тармаққа сәйкес нұсқаны таңдап жауап беріңіз.
3. Нәтижені қараңыз: Оң скрининг — қосымша бағалау қажет

### Әдіс пен формула

Негізгі клиникалық белгілерді көрсететін 5 жабық сұрақтан (Иә/Жоқ) тұрады: жасанды құсу, бақылауды жоғалту, салмақ тастау, дене бітімін қате қабылдау және тағамға тәуелділік.

SCOFF жалпы балы = Мақұлдау жауаптарының саны (0–5). Нәтиже ≥ 2 болғанда скрининг оң нәтиже береді және ТББ қаупі жоғары деп бағаланады.

### Шектеулер

Анықтамалық нәтиже диагноз қоймайды және ем тағайындамайды. Аударма ақпараттық бейімдеу болып табылады; оның жеке психометриялық валидациясы расталмаған.

### Дереккөздер

- [Morgan JF et al. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ, 1999](https://pubmed.ncbi.nlm.nih.gov/10582927/)
- [Luck AJ et al. The SCOFF questionnaire and clinical interview for eating disorders in general practice: comparative study. BMJ, 2002](https://pubmed.ncbi.nlm.nih.gov/12364305/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="scoff" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="scoff" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/scoff?lang=kk&theme=auto"
  title="SCOFF тамақтану бұзылыстарының скринингі" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
