# Зертханалық талдау бірліктерінің конвертері

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lab-unit-converter.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lab-unit-converter.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lab-unit-converter.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lab-unit-converter.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lab-unit-converter.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lab-unit-converter.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`lab-unit-converter` · [NutriFit](https://nutrifit.health/kk/calculators/lab-unit-converter)

Молярлық массалар бойынша 33 зертханалық көрсеткішті ХЖ (ммоль/л, мкмоль/л, нмоль/л) және дәстүрлі бірліктер (мг/дл, нг/мл) арасында қайта есептеу.

### Пайдалану реті

1. Көрсеткішті таңдаңыз: Тізімде 33 ең жиі талдау бар: глюкоза мен холестериннен D дәруменіне, тестостеронға және кортизолға дейін.
2. Бағытты көрсетіңіз: Егер бланк ммоль/л немесе нмоль/л болса, ал шетелдік мақаладан референс мг/дл болса, ХЖ → дәстүрлі бағытын таңдаңыз.
3. Тек санды емес, референсті де салыстырыңыз: Референттік аралықтар зертхана әдісіне байланысты. Дұрыс диапазонмен салыстыру үшін бланкідегі норма шектерін де қайта есептеңіз.

### Әдістеме және формула

Коэффициент массалық концентрацияны молярлық масса мен көлем бірлігін ескере отырып молярлыққа ауыстырады. AMA және Labcorp кең таралған зертханалық коэффициенттері қолданылады.

SI = массалық бірліктегі мән × коэффициент. Кері есептеу: SI ÷ коэффициент. Инсулин мен пролактин үшін зертхана коэффициентін тексеріңіз.

### Шектеулер

Бірліктерді ауыстыру нәтижені түсіндірмейді және диагноз қоймайды. Референттік аралықтар зертхана мен әдіске байланысты.

### Дереккөздер

- [Young D.S. Implementation of SI units for clinical laboratory data. Style specifications and conversion tables. Ann Intern Med, 1987;106(1):114–129](https://pubmed.ncbi.nlm.nih.gov/3789557/)
- [AMA Manual of Style, 11th ed. Units of Measure: Conventional Units and SI Units in Clinical Chemistry. Oxford University Press, 2020](https://academic.oup.com/amamanualofstyle/si-conversion-calculator)
- [NIST Special Publication 811. Guide for the Use of the International System of Units (SI), 2008](https://www.nist.gov/pml/special-publication-811)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lab-unit-converter" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="lab-unit-converter" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lab-unit-converter?lang=kk&theme=auto"
  title="Зертханалық талдау бірліктерінің конвертері" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
