# Тәуліктік энергия шығынының бағасы TDEE

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tdee.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tdee.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`tdee` · [NutriFit](https://nutrifit.health/kk/calculators/tdee)

Mifflin–St Jeor тыныштық шығынын бағалайды. TDEE = баға × таңдалған белсенділік коэффициенті. −20% және +15% — авторлық тапшылық пен артықтық сценарийлері.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Mifflin–St Jeor тыныштық шығынын бағалайды. TDEE = баға × таңдалған белсенділік коэффициенті. −20% және +15% — авторлық тапшылық пен артықтық сценарийлері.
2. Параметрлерді нақтылаңыз: Mifflin–St Jeor тыныштық шығынын бағалайды. TDEE = баға × таңдалған белсенділік коэффициенті. −20% және +15% — авторлық тапшылық пен артықтық сценарийлері.
3. Нәтижені оқыңыз: Ересектерге. Коэффициенттер — жуық мәндер, өлшенген PAL емес. Формула жеке қажеттілік пен қауіпсіз тапшылықты анықтамайды; қате зат алмасу бұзылуын дәлелдемейді.

### Әдіс пен формула

Mifflin–St Jeor тыныштық шығынын бағалайды. TDEE = баға × таңдалған белсенділік коэффициенті. −20% және +15% — авторлық тапшылық пен артықтық сценарийлері.

BMR (ер) = 10 × салмақ(кг) + 6,25 × бой(см) − 5 × жас + 5; BMR (әйел) = 10 × салмақ(кг) + 6,25 × бой(см) − 5 × жас − 161; TDEE = BMR × белсенділік коэффициенті

### Шектеулер

Ересектерге. Коэффициенттер — жуық мәндер, өлшенген PAL емес. Формула жеке қажеттілік пен қауіпсіз тапшылықты анықтамайды; қате зат алмасу бұзылуын дәлелдемейді.

### Дереккөздер

- [Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tdee" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="tdee" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=kk&theme=auto"
  title="Тәуліктік энергия шығынының бағасы TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
