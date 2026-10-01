# D дәрумені: van Groningen моделін бағалау

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vitamin-d-dose.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vitamin-d-dose.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vitamin-d-dose.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vitamin-d-dose.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vitamin-d-dose.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vitamin-d-dose.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`vitamin-d-dose` · [NutriFit](https://nutrifit.health/kk/calculators/vitamin-d-dose)

Екі бірлік жүйесіндегі 25(OH)D және van Groningen 2010 формуласы бойынша холекальциферолдың жүктемелік дозасын ғылыми бағалау.

### Пайдалану реті

1. Өлшенген 25(OH)D енгізіңіз: 1,25(OH)₂D емес, дәл 25-гидроксидәрумен D (кальцидиол) енгізілуі керек.
2. Модель шектерін тексеріңіз: 75 нмоль/л мақсаты зерттеуде бекітілген. Егер деңгей ≥ 50 нмоль/л болса, модель қолданылмайды.
3. Дене салмағын көрсетіңіз: Есептеуден кейін оны дәрігермен талқылаңыз. Жалпы сан қабылдау курсына бөлінуі тиіс.

### Әдістеме және формула

van Groningen (2010) моделі тапшылығы бар (< 50 нмоль/л) ересектерде холекальциферолдың жалпы дозасын салмақ пен бастапқы деңгейге байланыстырады.

Жалпы баға (ХБ) = 40 × (75 − 25(OH)D, нмоль/л) × салмақ (кг). Модель бастапқы 25(OH)D < 50 нмоль/л үшін жасалған.

### Шектеулер

Дәрігермен талқылауға арналған зерттеу есебі. Модель дайын емдеу сызбасын қалыптастырмайды.

### Дереккөздер

- [van Groningen L. et al. Cholecalciferol loading dose guideline for vitamin D-deficient adults. Eur J Endocrinol, 2010;162(4):805–811](https://pubmed.ncbi.nlm.nih.gov/20139241/)
- [Endocrine Society. Vitamin D for the Prevention of Disease: Clinical Practice Guideline, 2024](https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vitamin-d-dose" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="vitamin-d-dose" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vitamin-d-dose?lang=kk&theme=auto"
  title="D дәрумені: van Groningen моделін бағалау" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
