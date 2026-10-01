# Алкогольдің шығарылуы калькуляторы (Видмарк формуласы)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/alcohol.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/alcohol.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/alcohol.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/alcohol.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/alcohol.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/alcohol.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`alcohol` · [NutriFit](https://nutrifit.health/kk/calculators/alcohol)

Қандағы этанолдың шыңдық және ағымдағы концентрациясын (промилле ‰-де), толық айығуға дейінгі нақты уақытты және алкогольдің калориялығын есептейді.

### Пайдалану реті

1. Асқазан мен ішекте сіңірілу: Алкогольдің шамамен 20%-ы асқазанда, қалған 80%-ы аш ішекте сіңеді. Тығыз тағам ішекке өтуді баяулатып, мастық шыңын тегістейді.
2. Бауыр ферменттерімен тотығу: Бауыр этанолдың 95%-ға дейінгі бөлігін тұрақты жылдамдықпен алкогольдегидрогеназа (АДГ) арқылы уытты ацетальдегидке дейін, одан кейін альдегиддегидрогеназамен (АЛДГ) ацетатқа дейін тотықтырады.
3. Сызықтық шығарылу: Ферменттер жылдам қанығады: айығу жылдамдығы ішілген көлемге қарамастан қатаң түрде сағатына шамамен 0,15 промиллені құрайды.

### Әдістеме және формула

Швед сот химигі Эрик Видмарктің (1932) Уэйн Джонс (A.W. Jones, 2010) түзетулері енгізілген фармакокинетикалық моделіне негізделген. Денедегі судың үлестірілу көлемін (ерлерде r = 0,68, әйелдерде 0,55), асқазанның АДГ ферментін және элиминацияның сызықтық жылдамдығын (0,15 ‰/сағат) ескереді.

Таза этанол (г) = Көлем (мл) × (Қаттылығы % / 100) × 0,789; BAC_шың = (Этанол × Сіңу_факторы) / (Салмақ × r); BAC_ағымдағы = max(0, BAC_шың − 0,15 × Сағат); Уақыт (сағ) = BAC_шың / 0,15.

### Шектеулер

Шығарылу жылдамдығы бауыр қызметі мен генетикаға байланысты жеке ерекшеленеді және 0,10-нан 0,20 ‰/сағатқа дейін ауытқиды. Жол полициясы үшін заңды дәлел болып табылмайды.

### Дереккөздер

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones A.W. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework and pharmacokinetics. Forensic Sci Int, 2010;200(1-3):1–20](https://pubmed.ncbi.nlm.nih.gov/20434270/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="alcohol" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="alcohol" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/alcohol?lang=kk&theme=auto"
  title="Алкогольдің шығарылуы калькуляторы (Видмарк формуласы)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
