# Тамақтану мінез-құлқын өзіндік бағалау

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/eating-behavior-wizard.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/eating-behavior-wizard.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/eating-behavior-wizard.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/eating-behavior-wizard.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/eating-behavior-wizard.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/eating-behavior-wizard.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`eating-behavior-wizard` · [NutriFit](https://nutrifit.health/kk/calculators/eating-behavior-wizard)

SCOFF-тың бес сұрағы және тамақтану мінез-құлқын өзіндік бағалауға арналған төрт авторлық сұрақ.

### Қолдану тәртібі

1. Нұсқаулықты оқыңыз: Көрсетілген мерзім мен әр тұжырымның мағынасын ескеріңіз.
2. Жауаптарды таңдаңыз: Әр тармаққа сәйкес нұсқаны таңдап жауап беріңіз.
3. Нәтижені қараңыз: Нәтиже жауаптарды көрсетеді; оны әдістеменің шектеулерін ескере отырып қолданыңыз.

### Әдіс пен формула

SCOFF бес нақты «иә/жоқ» жауабы бойынша есептеледі. Қалған жауаптар тікелей көрсетіледі.

SCOFF-та екі немесе одан көп «иә» жауабы — оң скрининг. Авторлық сұрақтар DEBQ, IES-2 немесе mYFAS балдарын есептемейді және психологиялық типті анықтамайды.

### Шектеулер

Анықтамалық нәтиже диагноз қоймайды және ем тағайындамайды. Аударма ақпараттық бейімдеу болып табылады; оның жеке психометриялық валидациясы расталмаған.

### Дереккөздер

- [Fairburn C.G. Cognitive Behavior Therapy and Eating Disorders. Guilford Press, 2008](https://www.guilford.com/books/Cognitive-Behavior-Therapy-and-Eating-Disorders/Christopher-Fairburn/9781593857097)
- [American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR), 2022](https://doi.org/10.1176/appi.books.9780890425787)
- [NICE (National Institute for Health and Care Excellence). Eating disorders: recognition and treatment (NG69), 2020](https://www.nice.org.uk/guidance/ng69)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="eating-behavior-wizard" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="eating-behavior-wizard" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/eating-behavior-wizard?lang=kk&theme=auto"
  title="Тамақтану мінез-құлқын өзіндік бағалау" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
