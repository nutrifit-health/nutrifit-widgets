# Жаттығудағы тер шығынын бағалау

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sweat-rate.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sweat-rate.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`sweat-rate` · [NutriFit](https://nutrifit.health/kk/calculators/sweat-rate)

Тер (л) ≈ бастапқы салмақ − соңғы салмақ (кг) + ішкен (л) − зәр (л); жылдамдық = тер / уақыт сағатпен. Бірдей жағдайда, дымқыл киімсіз өлшеніңіз.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Тер (л) ≈ бастапқы салмақ − соңғы салмақ (кг) + ішкен (л) − зәр (л); жылдамдық = тер / уақыт сағатпен. Бірдей жағдайда, дымқыл киімсіз өлшеніңіз.
2. Параметрлерді нақтылаңыз: Тер шығыны (мл) = (Салмақ_дейін − Салмақ_кейін, г) + Ішілген_су(мл) − Несеп(мл); Терлеу қарқыны (л/сағ) = (Тер шығыны / Уақыт_мин) × 60 / 1000; Дегидратация % = ((Салмақ_дейін − Салмақ_кейін) / Салмақ_дейін) × 100.
3. Нәтижені оқыңыз: Салмақ жоғалту пайызы сусыздану диагнозы емес; теріс мән қосылған салмақты білдіреді. NATA (2017): таза жоғалтудың 100–150% — жаттығудан кейінгі шартты бағдар, әсіресе қалпына келу төрт сағаттан аз болса. Бұл бәріне міндетті көлем не жаттығуда ішу жылдамдығы емес.

### Әдіс пен формула

Тер (л) ≈ бастапқы салмақ − соңғы салмақ (кг) + ішкен (л) − зәр (л); жылдамдық = тер / уақыт сағатпен. Бірдей жағдайда, дымқыл киімсіз өлшеніңіз.

Тер (л) ≈ бастапқы салмақ − соңғы салмақ (кг) + ішкен (л) − зәр (л); жылдамдық = тер / уақыт сағатпен. Бірдей жағдайда, дымқыл киімсіз өлшеніңіз.

### Шектеулер

Салмақ жоғалту пайызы сусыздану диагнозы емес; теріс мән қосылған салмақты білдіреді. NATA (2017): таза жоғалтудың 100–150% — жаттығудан кейінгі шартты бағдар, әсіресе қалпына келу төрт сағаттан аз болса. Бұл бәріне міндетті көлем не жаттығуда ішу жылдамдығы емес.

### Дереккөздер

- [NATA. Fluid Replacement for the Physically Active, 2017.](https://nata.kglmeridian.com/view/journals/attr/52/9/article-p877.xml)
- [American College of Sports Medicine et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas DT et al. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs SM et al. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011](https://pubmed.ncbi.nlm.nih.gov/22150427/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sweat-rate" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="sweat-rate" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sweat-rate?lang=kk&theme=auto"
  title="Жаттығудағы тер шығынын бағалау" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
