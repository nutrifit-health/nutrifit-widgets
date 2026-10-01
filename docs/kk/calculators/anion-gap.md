# Аниондық саңылау және дельта-қатынас калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/anion-gap.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/anion-gap.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`anion-gap` · [NutriFit](https://nutrifit.health/kk/calculators/anion-gap)

Альбуминге түзетілген аниондық саңылау (Figge) және қышқыл-сілтілік күйді бағалауға арналған дельта-қатынас.

### Пайдалану реті

1. Электролиттерді енгізіңіз: Натрий, хлор және бикарбонат қажет.
2. Альбуминді қосыңыз: Альбуминнің төмендеуі жасырын ацидозды бүркемелейді.
3. Дельта-қатынасты бағалаңыз: Жоғары AG кезінде қатынас аралас бұзылысты көрсетеді.

### Әдістеме және формула

Аниондық саңылау — катиондар мен аниондар арасындағы айырмашылық: AG = Na − (Cl + HCO₃). Гипоальбуминемия кезінде Figge (1998) түзетуі қолданылады.

AG = Na − (Cl + HCO₃), ммоль/л, калийсіз.
Figge түзетуі: AG_түзетілген = AG + 0,25 × (40 − Альбумин, г/л).
ΔAG / ΔHCO₃ = (AG_түзетілген − 12) / (24 − HCO₃).

### Шектеулер

Аниондық саңылау референсі анализаторға байланысты (әдетте 8–12 ммоль/л). Қан газдарын зерттеуді алмастырмайды.

### Дереккөздер

- [Kraut J.A., Madias N.E. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007;2(1):162–174](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J., Jabor A., Kazda A., Fencl V. Anion gap and hypoalbuminemia. Crit Care Med, 1998;26(11):1807–1810](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K., de Vries A.P., Gans R.O. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014;371(15):1434–1445](https://pubmed.ncbi.nlm.nih.gov/25295502/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="anion-gap" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="anion-gap" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/anion-gap?lang=kk&theme=auto"
  title="Аниондық саңылау және дельта-қатынас калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
