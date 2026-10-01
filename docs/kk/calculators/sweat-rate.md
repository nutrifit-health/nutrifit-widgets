# Терлеу және регидратация калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sweat-rate.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sweat-rate.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`sweat-rate` · [NutriFit](https://nutrifit.health/kk/calculators/sweat-rate)

Тер шығынының жеке қарқынын анықтайды және жаттығудан кейін сұйықтық пен электролиттерді толтыру бойынша дербес жоспар жасайды.

### Пайдалану реті

1. Жаттығу алдында өлшеніңіз: Дәретханаға барып, жаттығу басталар алдында киімсіз дәл сандық таразыда өлшеніңіз.
2. Ішілген су көлемін қадағалаңыз: Қанша ішкеніңізді нақты білу үшін бөтелкедегі өлшем белгілеріне қараңыз.
3. Мәреден кейін құрғақ күйде өлшеніңіз: Қайта өлшенер алдында тері мен шаштағы терді сүлгімен мұқият сүртіңіз.

### Әдістеме және формула

Америкалық спорттық медицина колледжінің (ACSM) әдістемесіне негізделген. Жаттығуға дейінгі және кейінгі құрғақ денені киімсіз өлшеу, ішілген су мен несеп көлемін есепке алу сағаттық терлеу қарқынын көрсетеді.

Тер шығыны (мл) = (Салмақ_дейін − Салмақ_кейін, г) + Ішілген_су(мл) − Несеп(мл); Терлеу қарқыны (л/сағ) = (Тер шығыны / Уақыт_мин) × 60 / 1000; Дегидратация % = ((Салмақ_дейін − Салмақ_кейін) / Салмақ_дейін) × 100.

### Шектеулер

Гликогеннің тотығуын және тыныс алу арқылы судың булануын (~100–150 г/сағ) есепке алмайды. Дегенмен сұйықтық тапшылығын өте дәл көрсетеді.

### Дереккөздер

- [Sawka M.N. et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007;39(2):377–390](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas D.T., Erdman K.A., Burke L.M. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016;116(3):501–528](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs S.M., Sawka M.N. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011;29(Suppl 1):S39–S46](https://pubmed.ncbi.nlm.nih.gov/22150427/)

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
  title="Терлеу және регидратация калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
