# Тәуліктік калория нормасының калькуляторы (TDEE)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tdee.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tdee.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`tdee` · [NutriFit](https://nutrifit.health/kk/calculators/tdee)

Негізгі алмасуды және тәуліктік толық энергия шығынын, сондай-ақ салмақты азайту, ұстап тұру және қосу үшін калориялықты есептейді.

### Пайдалану реті

1. Дене өлшемдерін көрсетіңіз: Нақты салмақ, бой, жыныс және жасты енгізіңіз. Бұл базалық зат алмасуды (BMR) есептеу үшін қажет.
2. Белсенділік деңгейін бағалаңыз: Апта ішіндегі белсенділігіңізді шынайы таңдаңыз. Отырықшы жұмыс кезінде тұрақты спортсыз деңгейді асырмаңыз.
3. Мақсат мәндерін қараңыз: Салмақты сақтау TDEE мәніне тең; азайту мақсаты TDEE-ден 20% төмен, қосу мақсаты 15% жоғары.

### Әдістеме және формула

Негізгі алмасу (BMR) 1990 жылғы Миффлин-Сан Жеор теңдеуімен есептеледі — бұл дені сау ересектердегі тыныштық шығынын бағалаудың қазіргі стандарты. Тәуліктік толық шығын (TDEE) BMR-ді белсенділік коэффициентіне көбейту арқылы алынады. Салмақты азайту калориялығы — TDEE-ден 20% кем, қосу үшін — 15% артық: мұндай қарқын бұлшықет тінін жоғалтпай және күрт секірмей салмақты өзгертеді.

BMR (ер) = 10 × салмақ(кг) + 6,25 × бой(см) − 5 × жас + 5; BMR (әйел) = 10 × салмақ(кг) + 6,25 × бой(см) − 5 × жас − 161; TDEE = BMR × белсенділік коэффициенті

### Шектеулер

Теңдеу дені сау ересектерде шығарылған және шамамен ±10% қателік береді. Ол дене құрамын ескермейді: бұлшықет массасы жоғары болса нәтиже төмендетілген, семіздікте — асырылған. Жүкті әйелдерге, балаларға, жоғары деңгейлі спортшыларға және қалқанша без ауруы барларға бөлек әдістеме керек.

### Дереккөздер

- [Mifflin M.D., St Jeor S.T. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)
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
  title="Тәуліктік калория нормасының калькуляторы (TDEE)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
