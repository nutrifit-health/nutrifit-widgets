# Тамақтану мінез-құлқы: өзгертілген DEBQ бейімдеуі

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/debq.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/debq.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`debq` · [NutriFit](https://nutrifit.health/kk/calculators/debq)

Әдеттегі тамақтану мінез-құлқы туралы 33 сұрақ. Үш топтың орташа жауаптары көрсетіледі; норма санаты мен диагноз берілмейді.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Нақты мәндер мен тиісті бірліктерді қолданыңыз.
2. Параметрлерді нақтылаңыз: Бастапқы болжамдарды өз жағдайыңызға сай өзгертіңіз.
3. Нәтижені оқыңыз: Модель шектеулерін ескеріңіз; есеп өлшеу емес.

### Әдіс пен формула

Эмоциялық топ: 1–13; сыртқы: 14–23; шектеуші: 24–33. Әр орташа 1–5 аралығында; 17-сұрақ 6-дан жауапты шегеру арқылы есептеледі.

Эмоциялық топ: 1–13; сыртқы: 14–23; шектеуші: 24–33. Әр орташа 1–5 аралығында; 17-сұрақ 6-дан жауапты шегеру арқылы есептеледі.

### Шектеулер

Мәтіндер өзгертіліп, топталған. Бұл бастапқы DEBQ-дың валидациясы расталған нұсқасы емес; клиникалық нормалар қолданылмайды. Түпнұсқа бланкті пайдалану рұқсаты бөлек расталуы керек.

### Дереккөздер

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. et al. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire in normal subjects and women with eating disorders. J Psychosom Res, 1987](https://pubmed.ncbi.nlm.nih.gov/3473234/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="debq" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="debq" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/debq?lang=kk&theme=auto"
  title="Тамақтану мінез-құлқы: өзгертілген DEBQ бейімдеуі" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
