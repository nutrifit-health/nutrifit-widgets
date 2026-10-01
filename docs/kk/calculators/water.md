# Су нормасының калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/water.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/water.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`water` · [NutriFit](https://nutrifit.health/kk/calculators/water)

Дене салмағынан тәуліктік сұйықтық қажеттілігін дене жүктемесі мен ыстық климатқа түзетумен есептейді.

### Пайдалану реті

1. Дене салмағын көрсетіңіз: Суға базалық физиологиялық қажеттілік дене салмағына тікелей пропорционал (орта есеппен 1 кг салмаққа 30–35 мл).
2. Дене белсенділігін қосыңыз: Әр 30 минуттық жаттығу термен жоғалған сұйықтықтың орнын толтыру үшін қосымша 350–500 мл сұйықтықты талап етеді.
3. Климат пен температураны ескеріңіз: Ыстық ауа райы (>25°C) немесе ауаның төмен ылғалдылығы тәуліктік қажеттілікті тағы 500 мл-ге арттырады.

### Әдістеме және формула

Негізгі қажеттілік — ересектерге дене салмағының әр кг-на 30 мл, 60 жастан кейін 25 мл/кг, өйткені бүйректің концентрациялау қабілеті төмендейді. Қарқынды жүктеменің әр сағатына термен жоғалтуды өтеу үшін 500 мл, ыстық климат немесе құрғақ жылытылатын бөлме үшін тағы 500 мл қосылады. Қорытынды — судың толық қажеттілігі; оның 20–30% тағаммен түседі, сондықтан сусын нормасы бөлек көрсетілген (EFSA, 2010).

Барлығы(мл) = салмақ × 30 (немесе 60 жастан кейін × 25) + 500 × жүктеме сағаты + ыстықта 500; Сусындар(мл) = барлығы × 0,75

### Шектеулер

Дені сау ересектерге арналған бағдар. Жүрек және бүйрек жеткіліксіздігінде, диуретик қабылдағанда, қызбада және ыстық өндірісте норманы дәрігер белгілейді. Шөлдеу мен зәрдің түсі кез келген есептен сенімдірек бағдар болып қала береді.

### Дереккөздер

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [Sawka M.N. et al. American College of Sports Medicine Position Stand: Exercise and Fluid Replacement, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="water" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="water" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/water?lang=kk&theme=auto"
  title="Су нормасының калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
