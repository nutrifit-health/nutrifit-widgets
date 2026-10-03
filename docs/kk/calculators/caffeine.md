# Кофеин қалдығы: есептік модель

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/caffeine.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/caffeine.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/caffeine.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/caffeine.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/caffeine.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/caffeine.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`caffeine` · [NutriFit](https://nutrifit.health/kk/calculators/caffeine)

Таңдалған жартылай шығарылу кезеңі бойынша қазір және ұйықтар кездегі кофеин қалдығын бағалайды.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Нақты мәндер мен тиісті бірліктерді қолданыңыз.
2. Параметрлерді нақтылаңыз: Бастапқы болжамдарды өз жағдайыңызға сай өзгертіңіз.
3. Нәтижені оқыңыз: Модель шектеулерін ескеріңіз; есеп өлшеу емес.

### Әдіс пен формула

Қалдық = доза × 2^(−t / T½). Тәуліктік сомаға соңғы 24 сағатта енгізілген дозалар ғана кіреді.

Қалдық = доза × 2^(−t / T½). Тәуліктік сомаға соңғы 24 сағатта енгізілген дозалар ғана кіреді.

### Шектеулер

Жартылай шығарылу кезеңі адамға байланысты және жүктілік, аурулар мен дәрілер әсерінен өзгеруі мүмкін. Болжам енгізіңіз; 5 сағат сіздің өлшенген шығарылу жылдамдығыңыз емес. Қалдық ұйқы сапасын болжай алмайды. EFSA-ның дені сау ересектерге 400 мг/тәулік және жүктілік кезінде 200 мг/тәулік бағдарлары жеке қауіпсіздікке кепіл болмайды.

### Дереккөздер

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest NS et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013](https://pubmed.ncbi.nlm.nih.gov/24235903/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="caffeine" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="caffeine" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/caffeine?lang=kk&theme=auto"
  title="Кофеин қалдығы: есептік модель" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
