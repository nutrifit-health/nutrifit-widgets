# Пациент денсаулығы сауалнамасы PHQ-9 (Депрессия)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phq-9.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phq-9.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`phq-9` · [NutriFit](https://nutrifit.health/kk/calculators/phq-9)

DSM-5 клиникалық критерийлері бойынша депрессияның алғашқы скринингі мен симптомдар ауырлығын бағалаудың халықаралық алтын стандарты.

### Пайдалану реті

1. Соңғы 2 аптаны еске түсіріңіз: Соңғы 14 күн ішіндегі жағдайыңызды әр белгінің қаншалықты жиі мазалағанына сүйене отырып бағалаңыз.
2. Барлық 9 сұраққа жауап беріңіз: Әрбір белгінің жиілігін «Мүлде жоқ» (0)-тан «Барлық дерлік күндері» (3)-не дейін таңдаңыз.
3. Клиникалық түсініктемемен танысыңыз: Симптомдардың ауырлық деңгейін және сарапшылардың ұсыныстарын қараңыз.

### Әдістеме және формула

Соңғы 2 аптадағы депрессиялық белгілердің пайда болу жиілігін 0-ден («Мүлде жоқ») 3-ке («Барлық дерлік күндері») дейінгі шкала бойынша бағалайтын 9 сұрақ.

Жалпы PHQ-9 балы = Барлық 9 сұрақ ұпайларының қосындысы (0–27). 0–4: минималды; 5–9: жеңіл; 10–14: орташа; 15–19: орташа-ауыр; 20–27: ауыр депрессия.

### Шектеулер

Бұл скрининг дәрігер-психиатрдың немесе психотерапевтің қабылдауын алмастырмайды. 9-сұраққа оң жауап берілген жағдайда маманға шұғыл қаралу қажет.

### Дереккөздер

- [Kroenke K. et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001;16(9):606–613](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer R.L. et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. JAMA, 1999;282(18):1737–1744](https://pubmed.ncbi.nlm.nih.gov/10568646/)

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
