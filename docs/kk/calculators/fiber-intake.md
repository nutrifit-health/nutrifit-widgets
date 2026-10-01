# Тағамдық талшықтар (жасұнық) нормасының калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fiber-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fiber-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`fiber-intake` · [NutriFit](https://nutrifit.health/kk/calculators/fiber-intake)

Ішек микробиотасын қоректендіру, холестеринді қалыпқа келтіру және АІЖ моторикасын жақсарту үшін қажетті тәуліктік талшық мөлшерін анықтайды.

### Пайдалану реті

1. Әрбір тамақтануға көкөніс қосыңыз: Күніне кемінде 400–500 г крахмалсыз көкөністер мен жасыл шөптер жеңіз (Гарвард тәрелкесі ережесі).
2. Тазартылған жармаларды тұтас дәнділерге ауыстырыңыз: Ақ күріш пен жоғары сұрыпты ұнның орнына қарақұмық, киноа, ұзақ пісетін сұлы үлпектері, арпа және тұтас дәнді нанды таңдаңыз.
3. Тұқымдар мен бұршақтарды қосыңыз: 1 ас қасық чиа немесе зығыр тұқымы, сондай-ақ жасымық үлесі бірден 8–12 г сапалы талшық береді.

### Әдістеме және формула

ДДСҰ және Еуропалық азық-түлік қауіпсіздігі агенттігінің (EFSA: рационның әр 1000 ккал-на 14 г талшық, әйелдер үшін кемінде 25 г және ерлер үшін 38 г) стандарттарына негізделген. Су балансын (+1 г талшыққа 40 мл су) есептейді және ТІС кезінде ұсыныстарды сүзгіден өткізеді.

Мақсатты талшық = max(25/38 г, Калория × 0,014); Еритін фракция ~30–35%; Ерімейтін ~65–70%; Қосымша су = Талшық (г) × 40 мл.

### Шектеулер

Бактериялардың шамадан тыс өсу синдромы (СИБР) және колит асқынған кезде ашитын талшықтардың артық болуы метеоризмді күшейтуі мүмкін. Талшық дозасын біртіндеп арттырады.

### Дереккөздер

- [EFSA Panel on Dietetic Products, Nutrition, and Allergies. Scientific Opinion on Dietary Reference Values for carbohydrates and dietary fibre. EFSA Journal, 2010;8(3):1462](https://doi.org/10.2903/j.efsa.2010.1462)
- [Reynolds A. et al. Carbohydrate quality and human health: a series of systematic reviews and meta-analyses. Lancet, 2019;393(10170):434–445](https://pubmed.ncbi.nlm.nih.gov/30638909/)
- [Stephen A.M. et al. Dietary fibre in Europe: current state of knowledge on definitions, sources, recommendations, intakes and relationships to health. Nutr Res Rev, 2017;30(2):149–190](https://pubmed.ncbi.nlm.nih.gov/28676135/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fiber-intake" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="fiber-intake" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fiber-intake?lang=kk&theme=auto"
  title="Тағамдық талшықтар (жасұнық) нормасының калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
