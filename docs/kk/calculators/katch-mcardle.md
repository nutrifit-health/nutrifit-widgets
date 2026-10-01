# Кэтч — МакАрдл BMR және TDEE калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/katch-mcardle.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/katch-mcardle.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`katch-mcardle` · [NutriFit](https://nutrifit.health/kk/calculators/katch-mcardle)

Таразыдағы жалпы салмақтың орнына тек құрғақ бұлшықет массасы негізінде базалық зат алмасуды (BMR) және тәуліктік энергия шығынын (TDEE) анықтайды.

### Пайдалану реті

1. Құрғақ массаны анықтаңыз: Ағымдағы салмақ пен май пайызын енгізіңіз. Калькулятор белсенді құрғақ массаңызды есептейді.
2. Шынайы белсенділік деңгейін таңдаңыз: Шынайы болыңыз: егер кеңседе істеп, аптасына 3 рет жаттықсаңыз, 'Жеңіл' немесе 'Орташа' белсенділікті таңдаңыз.
3. Миффлин формуласымен салыстырыңыз: Айырмашылықты бақылаңыз: май пайызы төмен атлеттерде қарапайым формулалар калорияны 150–300 ккал-ға кем есептейді.

### Әдістеме және формула

Жалпы дене салмағына сүйенетін Миффлин — Сан Жеор немесе Харрис — Бенедикт формулаларынан айырмашылығы, Кэтч — МакАрдл теңдеуі метаболикалық белсенді құрғақ дене салмағына (LBM) негізделген. Бұл спортшылар мен май пайызы ерекше адамдар үшін жоғары дәлдікті қамтамасыз етеді.

LBM = Салмақ × (1 − % Май / 100); BMR (Katch) = 370 + 21,6 × LBM(кг); TDEE = BMR × Белсенділік коэффициенті; BMR (Cunningham) = 500 + 22 × LBM(кг).

### Шектеулер

Денедегі май пайызын алдын ала білуді талап етеді. Май пайызын қате анықтау калория есебіне тікелей қателік енгізеді.

### Дереккөздер

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer, 2014](https://pubmed.ncbi.nlm.nih.gov/15570161/)
- [Cunningham J.J. A reanalysis of balanced nutrition and the relationship to body composition and resting metabolic rate. Am J Clin Nutr, 1991;54(6):963–969](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin M.D. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="katch-mcardle" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="katch-mcardle" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/katch-mcardle?lang=kk&theme=auto"
  title="Кэтч — МакАрдл BMR және TDEE калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
