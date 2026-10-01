# FIB-4 және APRI калькуляторы: бауыр фиброзының индекстері

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fib-4.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fib-4.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fib-4.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fib-4.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fib-4.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fib-4.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`fib-4` · [NutriFit](https://nutrifit.health/kk/calculators/fib-4)

Жас, АСТ, АЛТ және тромбоциттер бойынша FIB-4 және APRI: есептеу, қауіп шектері және келесі қадамдар.

### Пайдалану реті

1. Жасты және талдауларды енгізіңіз: Қажет: биохимиядан АСТ және АЛТ, жалпы қан талдауынан тромбоциттер.
2. АСТ нормасын көрсетіңіз: Зертхананың жоғарғы шегін енгізіңіз (әдепкі 40 Б/л).
3. Қауіп санатымен танысыңыз: Төмен қауіпте 1–2 жылда бір бақылау жеткілікті. Жоғары қауіпте эластография қажет.

### Әдістеме және формула

FIB-4 (Sterling, 2006) бауырдың айқын фиброзын анықтау үшін жасты, АСТ, АЛТ және тромбоциттерді біріктіреді. EASL 2021 бойынша < 65 жас үшін төмен қауіп шегі 1,30, ал ≥ 65 жас үшін 2,00 құрайды.

FIB-4 = Жас (жыл) × АСТ (Б/л) / [ Тромбоциттер (10⁹/л) × √(АЛТ, Б/л) ]
APRI = ( АСТ / ЖШ_АСТ ) × 100 / Тромбоциттер (10⁹/л)

### Шектеулер

Фиброз ықтималдығын бағалауға көмектеседі, бірақ эластографияны алмастырмайды. 35 жасқа дейін қолдану шектелген.

### Дереккөздер

- [Sterling R.K. et al. Development of a simple noninvasive index to predict significant fibrosis in patients with HIV/HCV coinfection. Hepatology, 2006;43(6):1317–1325](https://pubmed.ncbi.nlm.nih.gov/16729309/)
- [Wai C.T. et al. A simple noninvasive index can predict both significant fibrosis and cirrhosis in patients with chronic hepatitis C. Hepatology, 2003;38(2):518–526](https://pubmed.ncbi.nlm.nih.gov/12883497/)
- [EASL Clinical Practice Guidelines on non-invasive tests for evaluation of liver disease severity and prognosis — 2021 update. J Hepatol, 2021;75(3):659–689](https://pubmed.ncbi.nlm.nih.gov/34166721/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fib-4" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="fib-4" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fib-4?lang=kk&theme=auto"
  title="FIB-4 және APRI калькуляторы: бауыр фиброзының индекстері" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
