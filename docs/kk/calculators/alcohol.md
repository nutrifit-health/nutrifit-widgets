# Этанол және Видмарктың оқу бағалауы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/alcohol.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/alcohol.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/alcohol.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/alcohol.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/alcohol.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/alcohol.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`alcohol` · [NutriFit](https://nutrifit.health/kk/calculators/alcohol)

Этанол мөлшерін, оның калориясын және қарапайым модель бойынша шамамен концентрацияны есептейді.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Нақты мәндер мен тиісті бірліктерді қолданыңыз.
2. Параметрлерді нақтылаңыз: Бастапқы болжамдарды өз жағдайыңызға сай өзгертіңіз.
3. Нәтижені оқыңыз: Модель шектеулерін ескеріңіз; есеп өлшеу емес.

### Әдіс пен формула

Этанол, г = көлем, мл × күштілік / 100 × 0,789. C0 = этанол / (салмақ × r); C(t) = max(0, C0 − 0,15 × t). Ерлер үшін r = 0,68, әйелдер үшін 0,55.

Этанол, г = көлем, мл × күштілік / 100 × 0,789. C0 = этанол / (салмақ × r); C(t) = max(0, C0 − 0,15 × t). Ерлер үшін r = 0,68, әйелдер үшін 0,55.

### Шектеулер

Орташа коэффициенттер нақты адамды сипаттамайды. Модель енгізілген мөлшерді бір доза деп санайды; сіңуді, тамақты және ішу ұзақтығын ескермейді. Нәтиже айығуды, көлік жүргізудің қауіпсіз уақытын немесе заң талаптарына сәйкестікті анықтамайды. Есептік нөл де алкогольдің жоқ екенін растамайды.

### Дереккөздер

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones AW. et al. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework. Forensic Sci Int, 2010](https://pubmed.ncbi.nlm.nih.gov/20304569/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="alcohol" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="alcohol" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/alcohol?lang=kk&theme=auto"
  title="Этанол және Видмарктың оқу бағалауы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
