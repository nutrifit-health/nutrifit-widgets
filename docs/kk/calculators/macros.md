# БЖК калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/macros.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/macros.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`macros` · [NutriFit](https://nutrifit.health/kk/calculators/macros)

Тәуліктік калориялықты дене салмағы мен мақсатты ескере отырып ақуыз, май және көмірсуларға бөледі — граммен, калориямен және пайызбен.

### Пайдалану реті

1. Есептеу тәсілін таңдаңыз: Белгілі калория нормаңызды енгізіңіз немесе NutriFit жүйесіне жас, жыныс, бой, салмақ және белсенділік негізінде тәуліктік шығынды (TDEE) есептеуге мүмкіндік беріңіз.
2. Параметрлер мен мақсатты көрсетіңіз: Мақсатты таңдаңыз: салмақ тастау (20% дефицит), салмақты сақтау немесе бұлшықет жинау (15% профицит). Салмақты кг және фунтпен енгізуге болады.
3. Жеке БЖК жоспарын алыңыз: Ақуыз, май және көмірсулардың граммдағы, калориядағы және рацион пайызындағы нақты ғылыми нормасын бірден көріңіз.

### Әдістеме және формула

Ақуыз бен май калория үлесінен емес, дене салмағынан есептеледі: бұл калория мөлшеріне тәуелді болмауы керек физиологиялық қажеттіліктер. Ақуыз нормасы ISSN ұстанымына сәйкес келеді (мақсатқа байланысты 1,4–2,4 г/кг). Майлар 0,8–1,2 г/кг практикалық диапазонында бағаланады және алынған энергия пайызы AMDR 20–35% эталондық диапазонымен салыстырылады. Көмірсулар қалған калорияларды алады: олар жаттығулар мен ми қызметін қуаттандырады.

Ақуыз(г) = салмақ × мақсат коэффициенті; Май(г) = салмақ × 0,8…1,2; Көмірсу(г) = (калориялық − ақуыз × 4 − май × 9) / 4

### Шектеулер

Жалпы дене салмағынан есептеу айқын семіздікте ақуыз нормасын асырады — бұл жағдайда таза массаға есептеген дұрыс. Схема тағам қабылдау бойынша бөлуді, талшықты және көмірсуларға жеке төзімділікті ескермейді.

### Дереккөздер

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: Protein and Exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids, 2005 (AMDR)](https://nap.nationalacademies.org/catalog/10490)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="macros" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="macros" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/macros?lang=kk&theme=auto"
  title="БЖК калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
