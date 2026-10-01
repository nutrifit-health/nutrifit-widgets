# Салмақ төмендеуінің динамикалық болжамы калькуляторы (Кевин Холл моделі)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/weight-loss-forecast.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/weight-loss-forecast.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/kk/calculators/weight-loss-forecast)

Зат алмасудың бейімделгіш баяулауын және бұлшықеттерді сақтауды ескере отырып, Кевин Холлдың (NIH) метаболикалық моделі негізінде салмақ тастаудың нақты сызықтық емес траекториясын құрады.

### Пайдалану реті

1. Қалыпты дефицитті ұстаныңыз (15–20%): 300–500 ккал дефицит психика үшін қолайлы және бұлшықет тінін катаболизмнен қорғайды.
2. Ақуызды жеткілікті тұтыныңыз: Дефицит кезінде 1,8–2,4 г/кг ақуыз нормасы тасталған салмақтың 85–90%-ы дәл тері асты және висцеральды майға келуіне кепілдік береді.
3. Диеталық үзілістерді (Diet Breaks) жоспарлаңыз: Салмақ тастаудың әр 8–12 аптасы сайын 1–2 апта қолдау деңгейінде (TDEE) тамақтаныңыз. Бұл лептин мен Т3 гормондарын қалпына келтіреді.

### Әдістеме және формула

Классикалық Вишнофски ережесінің (1958 ж., «7700 ккал дефицит = 1 кг тастау») орнына Кевин Холлдың динамикалық энергия балансы моделіне (Lancet, 2011; NIH/NIDDK) сүйенеді. Әрбір тасталған килограмм базалық шығынды азайтып, сөзсіз плато тудырады. Форбс теңдеуі бойынша май мен бұлшықет жоғалту үлестері есептеледі.

Метаболикалық бейімделу = 22 ккал/кг жоғалту + бейімделгіш термогенез; Тиімді дефицит = Берілген дефицит − Бейімделу; Май жоғалту үлесі p = Forbes(F, W); Динамикалық салмақ(t) апта сайын интегралдау әдісімен үлгіленеді.

### Шектеулер

Читмилсіз белгіленген калория дефицитін 100% сақтауды көздейді. Күйзеліс (кортизол) немесе тұздан судың іркілуі таразыда майдың еруін уақытша жасыруы мүмкін.

### Дереккөздер

- [Hall K.D. et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011;378(9793):826–837](https://pubmed.ncbi.nlm.nih.gov/21872751/)
- [Thomas D.M. et al. Can a weight loss of one pound a week be achieved with a 3,500-kcal deficit? Commentary on a commonly accepted rule. Int J Obes, 2013;37(12):1611–1613](https://pubmed.ncbi.nlm.nih.gov/23628852/)
- [Forbes G.B. Lean body mass-body fat interrelationships in humans. Nutr Rev, 1987;45(8):225–231](https://pubmed.ncbi.nlm.nih.gov/3306482/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="weight-loss-forecast" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="weight-loss-forecast" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/weight-loss-forecast?lang=kk&theme=auto"
  title="Салмақ төмендеуінің динамикалық болжамы калькуляторы (Кевин Холл моделі)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
