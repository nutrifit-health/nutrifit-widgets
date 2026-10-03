# Айналым бойынша дене құрамы мен ДСИ

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/body-composition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/body-composition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/body-composition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/body-composition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/body-composition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/body-composition.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`body-composition` · [NutriFit](https://nutrifit.health/kk/calculators/body-composition)

Тарихи Hodgdon–Beckett (1984) моделі бой мен айналымға негізделген. Ерлер: кіндік деңгейіндегі іш және мойын; әйелдер: табиғи тар бел, ең кең мықын және мойын. ДСИ = салмақ / бой².

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Тарихи Hodgdon–Beckett (1984) моделі бой мен айналымға негізделген. Ерлер: кіндік деңгейіндегі іш және мойын; әйелдер: табиғи тар бел, ең кең мықын және мойын. ДСИ = салмақ / бой².
2. Параметрлерді нақтылаңыз: Тарихи Hodgdon–Beckett (1984) моделі бой мен айналымға негізделген. Ерлер: кіндік деңгейіндегі іш және мойын; әйелдер: табиғи тар бел, ең кең мықын және мойын. ДСИ = салмақ / бой².
3. Нәтижені оқыңыз: Баға дене құрамын өлшеуді алмастырмайды әрі Navy қазіргі ресми стандарты емес. ACE санаттары сипаттамалық референстер, диагноз емес; ДСИ — ересектерге бөлек жіктеу. Сәйкес емес айналымдарда есептелмейді.

### Әдіс пен формула

Тарихи Hodgdon–Beckett (1984) моделі бой мен айналымға негізделген. Ерлер: кіндік деңгейіндегі іш және мойын; әйелдер: табиғи тар бел, ең кең мықын және мойын. ДСИ = салмақ / бой².

Ерлер: %май = 495 / (1,0324 − 0,19077 × log₁₀(бел − мойын) + 0,15456 × log₁₀(бой)) − 450; Әйелдер: %май = 495 / (1,29579 − 0,35004 × log₁₀(бел + сан − мойын) + 0,221 × log₁₀(бой)) − 450; ДСИ = салмақ / бой²

### Шектеулер

Баға дене құрамын өлшеуді алмастырмайды әрі Navy қазіргі ресми стандарты емес. ACE санаттары сипаттамалық референстер, диагноз емес; ДСИ — ересектерге бөлек жіктеу. Сәйкес емес айналымдарда есептелмейді.

### Дереккөздер

- [Hodgdon J.A., Beckett M.B. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center, 1984](https://apps.dtic.mil/sti/citations/ADA143890)
- [WHO. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894, 2000](https://www.who.int/publications/i/item/WHO_TRS_894)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="body-composition" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="body-composition" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/body-composition?lang=kk&theme=auto"
  title="Айналым бойынша дене құрамы мен ДСИ" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
