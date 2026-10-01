# Пульс аймақтарының калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/heart-rate-zones.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/heart-rate-zones.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`heart-rate-zones` · [NutriFit](https://nutrifit.health/kk/calculators/heart-rate-zones)

Максималды пульс пен тыныштықтағы тамыр соғысын ескере отырып, 5 жеке жаттығу аймағының шекараларын есептейді (жүрек соғу жиілігінің резерві әдісі).

### Пайдалану реті

1. Таңертеңгі тыныштық пульсін өлшеңіз: Таңертең оянғанда, төсектен тұрмай, пульсометрмен немесе саусақпен 60 секунд бойы пульсті өлшеп, 3 күндік орташа мәнді шығарыңыз.
2. Карвонен формуласы бойынша аймақтарды есептеңіз: Калькулятор максималды пульстен тыныштық пульсін алып тастап, жүрек резервін анықтайды.
3. Жүктемені 80/20 ережесі бойынша бөліңіз: Барлық жаттығулардың шамамен 80%-ын 2-аймақта өткізіңіз, ал қалған 20%-ын 4 және 5-аймақтағы қарқынды жұмысқа арнаңыз.

### Әдістеме және формула

Карвонен әдісі жүрек соғу жиілігінің резервін ескереді (HRR = ЖСЖ max − ЖСЖ тыныштық). Таңертеңгі тыныштық пульсін есепке алу аймақтарды спортшының аэробтық дайындық деңгейіне дәл бейімдейді.

ЖСЖ max (Tanaka) = 208 − 0,7 × Жас; HRR = ЖСЖ max − ЖСЖ тыныштық; Мақсатты пульс = ЖСЖ тыныштық + (% қарқындылық × HRR). Haskell формуласы: ЖСЖ max = 220 − Жас.

### Шектеулер

Максималды пульс формулаларының стандартты қателігі ±10–12 соққы/мин құрайды. Жоғары дәлдік үшін зертханалық газ талдау тесті (CPET) ұсынылады.

### Дереккөздер

- [Tanaka H., Monahan K.D., Seals D.R. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001;37(1):153–156](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [Karvonen M.J., Kentala E., Mustala O. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957;35(3):307–315](https://pubmed.ncbi.nlm.nih.gov/13470504/)
- [American College of Sports Medicine. ACSM’s Guidelines for Exercise Testing and Prescription. 11th ed. Wolters Kluwer, 2021](https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="heart-rate-zones" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="heart-rate-zones" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/heart-rate-zones?lang=kk&theme=auto"
  title="Пульс аймақтарының калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
