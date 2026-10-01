# FINDRISC диабет қаупінің шкаласы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/findrisc.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/findrisc.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/findrisc.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/findrisc.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/findrisc.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/findrisc.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`findrisc` · [NutriFit](https://nutrifit.health/kk/calculators/findrisc)

Жасырын диабетті ерте скринингтеу және 10 жылда 2 типті ҚД пайда болу қаупін бағалау үшін ДДҰ мен IDF халықаралық деңгейде мойындаған сауалнамасы.

### Пайдалану реті

1. Жасыңыз бен антропометрияны көрсетіңіз: Жас тобын, ДСИ санатын және төменгі қабырға мен мықын сүйегінің қыры арасындағы ортада өлшенген бел шеңберін таңдаңыз.
2. Өмір салты мен тамақтануды бағалаңыз: Күніне кемінде 30 минут физикалық белсенділікке уақыт бөлетініңізді және күн сайын көкөністер, жемістер немесе жидектер жейтініңізді белгілеңіз.
3. Медициналық анамнезді көрсетіңіз: Қан қысымына қарсы дәрі-дәрмектерді қабылдауды, өткенде қанттың көтерілу жағдайларын және туыстарда диабеттің бар-жоғын белгілеңіз.

### Әдістеме және формула

Дәлелденген 8 қауіп факторын қосу: жас, ДСИ, бел шеңбері, физикалық белсенділік, диетадағы көкөністер, антигипертензивті терапия, анамнездегі гликемия және тұқым қуалаушылық.

FINDRISC балы = Жас (0–4) + ДСИ (0–3) + Бел (0–4) + Белсенділік (0/2) + Көкөністер (0/1) + ҚҚ препараттары (0/2) + Анамнездегі глюкоза (0/5) + Тұқым қуалаушылық (0/3/5). Барлығы: 0–26 балл.

### Шектеулер

Шкала скринингтік болжамдық құрал болып табылады және зертханалық диагностиканы (аш қарындағы плазма глюкозасы, HbA1c, глюкозаға төзімділіктің пероральді сынағы) алмастырмайды.

### Дереккөздер

- [Lindström J., Tuomilehto J. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003;26(3):725–731](https://pubmed.ncbi.nlm.nih.gov/12610029/)
- [International Diabetes Federation (IDF). Clinical Practice Recommendations for managing Type 2 Diabetes in Primary Care, 2017](https://www.idf.org/our-activities/care-prevention/clinical-practice-recommendations/)
- [Saaristo T. et al. FINDRISC as an early intervention tool in primary health care. Diabetes Care, 2005;28(12):2900–2907](https://pubmed.ncbi.nlm.nih.gov/16316578/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="findrisc" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="findrisc" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/findrisc?lang=kk&theme=auto"
  title="FINDRISC диабет қаупінің шкаласы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
