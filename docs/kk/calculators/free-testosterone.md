# Бос тестостерон калькуляторы (Вермюлен)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/free-testosterone.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/free-testosterone.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/free-testosterone.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/free-testosterone.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/free-testosterone.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/free-testosterone.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`free-testosterone` · [NutriFit](https://nutrifit.health/kk/calculators/free-testosterone)

Vermeulen 1999 моделі бойынша тестостеронның бос және биологиялық қолжетімді фракциялары. Нәтиже әдіс референстерін талап етеді.

### Пайдалану реті

1. Жалпы тестостерон мен ЖСГБ-ны таңертең тапсырыңыз: Тестостерон таңертең сағат 7–10 арасында ең жоғары деңгейде болады. Аш қарынға тапсырыңыз.
2. Альбуминді қосыңыз: Өлшенген альбуминді г/л түрінде енгізіңіз.
3. Егер ЖСГБ стандартты болмаса, бос фракцияға қараңыз: ЖСГБ өзгергенде жалпы тестостерон мен бос фракция әртүрлі болуы мүмкін.

### Әдістеме және формула

Қандағы тестостеронның тек 1–3 %-ы бос күйде болады, 40–50 %-ы ЖСГБ-мен берік байланысқан, қалғаны альбуминмен байланысады. Vermeulen 1999 моделі осы байланыстарды есептейді.

N = Kальб × [Альбумин] + 1;  a = N × Kжсгб;  b = N + Kжсгб × ([ЖСГБ] − [T])
Бос T = (−b + √(b² + 4·a·[T])) / (2·a)
Био-қолжетімді T = Бос T × N
Қайта есептеу: T нг/дл × 0,0347 = нмоль/л; бос T нмоль/л × 288,4 = пг/мл

### Шектеулер

Жалпы тестостеронды таңертең аш қарынға дәл әдіспен (СХ-МС/МС) өлшегенде есеп дұрыс болады. Бір реттік нәтиже диагноз қоюға негіз болмайды.

### Дереккөздер

- [Vermeulen A., Verdonck L., Kaufman J.M. A critical evaluation of simple methods for the estimation of free testosterone in serum. J Clin Endocrinol Metab, 1999;84(10):3666–3672](https://pubmed.ncbi.nlm.nih.gov/10523012/)
- [Bhasin S. et al. Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab, 2018;103(5):1715–1744](https://pubmed.ncbi.nlm.nih.gov/29562364/)
- [Salonia A. et al. European Association of Urology guidelines on sexual and reproductive health — 2021 update: male sexual dysfunction. Eur Urol, 2021;80(3):333–357](https://pubmed.ncbi.nlm.nih.gov/34183196/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="free-testosterone" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="free-testosterone" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/free-testosterone?lang=kk&theme=auto"
  title="Бос тестостерон калькуляторы (Вермюлен)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
