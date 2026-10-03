# Тағамдық талшықтың анықтамалық мөлшерлері

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fiber-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fiber-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`fiber-intake` · [NutriFit](https://nutrifit.health/kk/calculators/fiber-intake)

Бағдарлар бөлек көрсетіледі: EFSA ересектерге 25 г/тәулік, IOM/NASEM 14 г/1000 ккал береді. IOM жас пен жыныс бойынша AI: 19–50 жаста ерлерге 38 г, әйелдерге 25 г; 50 жастан кейін 30 және 21 г. Энергия бойынша есеп басқа бағдарларды автоматты түрде алмастырмайды.

### Қолдану тәртібі

1. Деректерді енгізіңіз: Бағдарлар бөлек көрсетіледі: EFSA ересектерге 25 г/тәулік, IOM/NASEM 14 г/1000 ккал береді. IOM жас пен жыныс бойынша AI: 19–50 жаста ерлерге 38 г, әйелдерге 25 г; 50 жастан кейін 30 және 21 г. Энергия бойынша есеп басқа бағдарларды автоматты түрде алмастырмайды.
2. Бағдарларды салыстырыңыз: Бағдарлар бөлек көрсетіледі: EFSA ересектерге 25 г/тәулік, IOM/NASEM 14 г/1000 ккал береді. IOM жас пен жыныс бойынша AI: 19–50 жаста ерлерге 38 г, әйелдерге 25 г; 50 жастан кейін 30 және 21 г. Энергия бойынша есеп басқа бағдарларды автоматты түрде алмастырмайды.
3. Шектеулерді ескеріңіз: Жүкті емес және емізбейтін, 19 жастан асқан ересектерге арналған. Бұл жеке қауіпсіздік шектері немесе іш қатуды, ТІС пен жоғары холестеринді емдеу тәсілдері емес. Мөлшерді көтерімділікке қарай арттырыңыз. Талшықтың әр грамына қосымша 40 мл су есептелмейді.

### Әдіс пен формула

Бағдарлар бөлек көрсетіледі: EFSA ересектерге 25 г/тәулік, IOM/NASEM 14 г/1000 ккал береді. IOM жас пен жыныс бойынша AI: 19–50 жаста ерлерге 38 г, әйелдерге 25 г; 50 жастан кейін 30 және 21 г. Энергия бойынша есеп басқа бағдарларды автоматты түрде алмастырмайды.

Бағдарлар бөлек көрсетіледі: EFSA ересектерге 25 г/тәулік, IOM/NASEM 14 г/1000 ккал береді. IOM жас пен жыныс бойынша AI: 19–50 жаста ерлерге 38 г, әйелдерге 25 г; 50 жастан кейін 30 және 21 г. Энергия бойынша есеп басқа бағдарларды автоматты түрде алмастырмайды.

### Шектеулер

Жүкті емес және емізбейтін, 19 жастан асқан ересектерге арналған. Бұл жеке қауіпсіздік шектері немесе іш қатуды, ТІС пен жоғары холестеринді емдеу тәсілдері емес. Мөлшерді көтерімділікке қарай арттырыңыз. Талшықтың әр грамына қосымша 40 мл су есептелмейді.

### Дереккөздер

- [EFSA. Dietary Reference Values summary, 2017](https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf)
- [IOM/NASEM. Dietary Reference Intakes: Fiber, 2006](https://www.nationalacademies.org/read/11537/chapter/11)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fiber-intake" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="fiber-intake" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fiber-intake?lang=kk&theme=auto"
  title="Тағамдық талшықтың анықтамалық мөлшерлері" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
