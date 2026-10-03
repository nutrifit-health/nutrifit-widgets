# Майсыз масса бойынша энергия бағалары

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/katch-mcardle.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/katch-mcardle.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`katch-mcardle` · [NutriFit](https://nutrifit.health/kk/calculators/katch-mcardle)

Майсыз масса = салмақ × (1 − май / 100). Katch–McArdle: 370 + 21,6 × майсыз масса; Cunningham: 500 + 22 × майсыз масса. Katch тәуліктік бағасы таңдалған белсенділік коэффициентіне көбейтіледі.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Майсыз масса = салмақ × (1 − май / 100). Katch–McArdle: 370 + 21,6 × майсыз масса; Cunningham: 500 + 22 × майсыз масса. Katch тәуліктік бағасы таңдалған белсенділік коэффициентіне көбейтіледі.
2. Параметрлерді нақтылаңыз: LBM = Салмақ × (1 − % Май / 100); BMR (Katch) = 370 + 21,6 × LBM(кг); TDEE = BMR × Белсенділік коэффициенті; BMR (Cunningham) = 500 + 22 × LBM(кг).
3. Нәтижені оқыңыз: Бұл калориметриялық өлшеу емес, бағалау. Май пайызы мен жуық белсенділік коэффициентінің қатесі нәтижеге әсер етеді. Формула айырмасы қайсысы сізге дәлірек екенін дәлелдемейді.

### Әдіс пен формула

Майсыз масса = салмақ × (1 − май / 100). Katch–McArdle: 370 + 21,6 × майсыз масса; Cunningham: 500 + 22 × майсыз масса. Katch тәуліктік бағасы таңдалған белсенділік коэффициентіне көбейтіледі.

LBM = Салмақ × (1 − % Май / 100); BMR (Katch) = 370 + 21,6 × LBM(кг); TDEE = BMR × Белсенділік коэффициенті; BMR (Cunningham) = 500 + 22 × LBM(кг).

### Шектеулер

Бұл калориметриялық өлшеу емес, бағалау. Май пайызы мен жуық белсенділік коэффициентінің қатесі нәтижеге әсер етеді. Формула айырмасы қайсысы сізге дәлірек екенін дәлелдемейді.

### Дереккөздер

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer](https://medicine.lww.com/Book/isbn/9781451191554)
- [Cunningham JJ. et al. Body composition as a determinant of energy expenditure: a synthetic review and a proposed general prediction equation. Am J Clin Nutr, 1991](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990](https://pubmed.ncbi.nlm.nih.gov/2305711/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="katch-mcardle" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="katch-mcardle" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/katch-mcardle?lang=kk&theme=auto"
  title="Майсыз масса бойынша энергия бағалары" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
