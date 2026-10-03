# Есептік салмақтың тарихи формулалары

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ideal-body-weight.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ideal-body-weight.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/kk/calculators/ideal-body-weight)

Бой ≥ 152,4 см үшін Devine, Robinson, Miller және жуық Hamwi. Төрт формуланың орташа мәні — автор таңдауы; AdjBW = Devine + 0,4 × (нақты салмақ − Devine), тек Devine мәнінен жоғары болса.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Бой ≥ 152,4 см үшін Devine, Robinson, Miller және жуық Hamwi. Төрт формуланың орташа мәні — автор таңдауы; AdjBW = Devine + 0,4 × (нақты салмақ − Devine), тек Devine мәнінен жоғары болса.
2. Параметрлерді нақтылаңыз: Devine (M): 50 + 2.3 × x; Devine (F): 45.5 + 2.3 × x; Robinson (M): 52 + 1.9 × x; Robinson (F): 49 + 1.7 × x; x = height(cm)/2.54 − 60; AdjBW = Devine + 0.4 × (weight − Devine).
Бой ≥ 152,4 см үшін Devine, Robinson, Miller және жуық Hamwi. Төрт формуланың орташа мәні — автор таңдауы; AdjBW = Devine + 0,4 × (нақты салмақ − Devine), тек Devine мәнінен жоғары болса.
3. Нәтижені оқыңыз: Формулалар жалғыз дұрыс не қалаулы салмақты анықтамайды. AdjBW тамақтану мен дәріге әмбебап емес. ДСИ 18,5–24,9 бойынша салмақ — ересектерге арналған бөлек арифметикалық бағдар, жеке мақсат емес.

### Әдіс пен формула

Бой ≥ 152,4 см үшін Devine, Robinson, Miller және жуық Hamwi. Төрт формуланың орташа мәні — автор таңдауы; AdjBW = Devine + 0,4 × (нақты салмақ − Devine), тек Devine мәнінен жоғары болса.

Devine (M): 50 + 2.3 × x; Devine (F): 45.5 + 2.3 × x; Robinson (M): 52 + 1.9 × x; Robinson (F): 49 + 1.7 × x; x = height(cm)/2.54 − 60; AdjBW = Devine + 0.4 × (weight − Devine).
Бой ≥ 152,4 см үшін Devine, Robinson, Miller және жуық Hamwi. Төрт формуланың орташа мәні — автор таңдауы; AdjBW = Devine + 0,4 × (нақты салмақ − Devine), тек Devine мәнінен жоғары болса.

### Шектеулер

Формулалар жалғыз дұрыс не қалаулы салмақты анықтамайды. AdjBW тамақтану мен дәріге әмбебап емес. ДСИ 18,5–24,9 бойынша салмақ — ересектерге арналған бөлек арифметикалық бағдар, жеке мақсат емес.

### Дереккөздер

- [Robinson JD et al. Determination of ideal body weight for drug dosage calculations. Am J Hosp Pharm, 1983](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Peterson C.M. et al. Universal equation for estimating ideal body weight and body weight at any BMI. Am J Clin Nutr, 2016;103(5):1197–1203. Historical IBW equations and their limits](https://pmc.ncbi.nlm.nih.gov/articles/PMC4841935/)

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
  title="Есептік салмақтың тарихи формулалары" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
