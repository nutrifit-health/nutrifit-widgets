# Генерализацияланған мазасыздық шкаласы GAD-7

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/gad-7.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/gad-7.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/gad-7.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/gad-7.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/gad-7.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/gad-7.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`gad-7` · [NutriFit](https://nutrifit.health/kk/calculators/gad-7)

Генерализацияланған мазасыздық пен эмоционалдық кернеу деңгейін жылдам әрі дәл бағалауға арналған халықаралық клиникалық сауалнама.

### Пайдалану реті

1. Соңғы 14 күндегі белгілерді бағалаңыз: Соңғы 2 апта ішінде жүйке қозуы немесе қорқыныш сізді қаншалықты жиі мазалағанын еске түсіріңіз.
2. Жауап нұсқаларын таңдаңыз: Әр белгінің жиілігін 0 («Мүлде жоқ»)-ден 3 («Барлық дерлік күндері»)-не дейін белгілеңіз.
3. Нәтиже мен ұсыныстарды алыңыз: Өз мазасыздық деңгейіңізді біліп, тыныштықты қалпына келтірудің тиімді стратегияларымен танысыңыз.

### Әдістеме және формула

Соңғы 2 аптадағы мазасыздық белгілерін 0-ден 3 ұпайға дейін бағалайтын 7 сұрақ.

GAD-7 балы = 7 сұрақтың ұпайлар қосындысы (0–21). 0–4: минималды; 5–9: жеңіл; 10–14: орташа; 15–21: айқын (ауыр) мазасыздық.

### Шектеулер

Скрининг медициналық диагноз болып табылмайды. Үрей шабуылдары (паникалық шабуылдар) немесе фобиялар болса, маманға жүгініңіз.

### Дереккөздер

- [Spitzer R.L. et al. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 2006;166(10):1092–1097](https://pubmed.ncbi.nlm.nih.gov/16717171/)
- [Löwe B. et al. Validation and standardization of the Generalized Anxiety Disorder Screener (GAD-7). Med Care, 2008;46(3):266–274](https://pubmed.ncbi.nlm.nih.gov/18388841/)

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
