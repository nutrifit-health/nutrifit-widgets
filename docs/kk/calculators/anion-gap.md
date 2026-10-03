# Аниондық саңылау және дельта-қатынас калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/anion-gap.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/anion-gap.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`anion-gap` · [NutriFit](https://nutrifit.health/kk/calculators/anion-gap)

Аниондық айырма = Na − Cl − HCO₃; альбумин түзетуі = 0,25 × (40 − альбумин, г/л). Дельта қатынасы = (түзетілген айырма − таңдалған референс) / (бикарбонат референсі − HCO₃).

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Аниондық айырма = Na − Cl − HCO₃; альбумин түзетуі = 0,25 × (40 − альбумин, г/л). Дельта қатынасы = (түзетілген айырма − таңдалған референс) / (бикарбонат референсі − HCO₃).
2. Параметрлерді нақтылаңыз: Аниондық айырма = Na − Cl − HCO₃; альбумин түзетуі = 0,25 × (40 − альбумин, г/л). Дельта қатынасы = (түзетілген айырма − таңдалған референс) / (бикарбонат референсі − HCO₃).
Референстер зертхана әдісіне тәуелді. Дельта тек оң алым мен бөлім кезінде есептеледі. Бір сан pH, қан газдары және клиникалық контекстсіз диагноз қоймайды.
3. Нәтижені оқыңыз: Референстер зертхана әдісіне тәуелді. Дельта тек оң алым мен бөлім кезінде есептеледі. Бір сан pH, қан газдары және клиникалық контекстсіз диагноз қоймайды.

### Әдіс пен формула

Аниондық айырма = Na − Cl − HCO₃; альбумин түзетуі = 0,25 × (40 − альбумин, г/л). Дельта қатынасы = (түзетілген айырма − таңдалған референс) / (бикарбонат референсі − HCO₃).

Аниондық айырма = Na − Cl − HCO₃; альбумин түзетуі = 0,25 × (40 − альбумин, г/л). Дельта қатынасы = (түзетілген айырма − таңдалған референс) / (бикарбонат референсі − HCO₃).
Референстер зертхана әдісіне тәуелді. Дельта тек оң алым мен бөлім кезінде есептеледі. Бір сан pH, қан газдары және клиникалық контекстсіз диагноз қоймайды.

### Шектеулер

Референстер зертхана әдісіне тәуелді. Дельта тек оң алым мен бөлім кезінде есептеледі. Бір сан pH, қан газдары және клиникалық контекстсіз диагноз қоймайды.

### Дереккөздер

- [Kraut JA et al. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J et al. Anion gap and hypoalbuminemia. Crit Care Med, 1998](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K et al. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014](https://pubmed.ncbi.nlm.nih.gov/25295502/)

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
