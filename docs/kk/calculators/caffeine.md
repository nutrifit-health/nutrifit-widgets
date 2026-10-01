# Кофеиннің шығарылуы және ұйықтау уақыты калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/caffeine.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/caffeine.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/caffeine.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/caffeine.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/caffeine.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/caffeine.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`caffeine` · [NutriFit](https://nutrifit.health/kk/calculators/caffeine)

Қандағы кофеиннің ыдырау динамикасын, жартылай шығарылу кезеңін және ұйықтау уақытына қарай қалдық деңгейін есептейді.

### Пайдалану реті

1. Бірінші шыныаяқты оянғаннан кейін 60–90 минутқа қалдырыңыз: Түстен кейінгі сергектіктің төмендеуін болдырмау үшін таңғы кортизол шыңына түнгі аденозин қалдықтарын табиғи жолмен тазартуға мүмкіндік беріңіз.
2. Кофеинді тоқтату уақытын сақтаңыз: Жартылай шығарылу кезеңі 5 сағат болғанда, ішілген кофеиннің төрттен бірі 10–12 сағаттан кейін де мида қалады. 23:00-де ұйықтаған кезде сағат 14:00-ден кейін кофе ішпеңіз.
3. Жасырын көздерді ескеріңіз: Қара шоколад, кола, жасыл шай және рецептсіз ауырсынуды басатын дәрілер де кофеиннің айтарлықтай дозаларын қамтиды.

### Әдістеме және формула

EFSA (2015) және AASM деректері бойынша бауырдың CYP1A2 цитохромы арқылы кофеин метаболизміне негізделген. Орташа жартылай шығарылу кезеңі 5 сағатты құрайды; темекі шегу оны 3 сағатқа дейін жеделдетеді, КОК қабылдау 9 сағатқа, жүктілік 12 сағатқа дейін созады.

C(t) = C0 × e^(−k × t), мұндағы k = ln(2) / t_half; Қалыпты t_half = 5,0 сағ; Темекі = 3,0 сағ; КОК = 9,0 сағ; Жүктілік = 12,0 сағ; EFSA шегі = 400 мг/тәулік.

### Шектеулер

Клиренс жылдамдығы CYP1A2 генотипіне байланысты өзгереді. Сезімтал адамдар төмен дозаларда да үрей немесе тахикардияны сезінуі мүмкін.

### Дереккөздер

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest N.S. et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021;18(1):1](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C. et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013;9(11):1195–1200](https://pubmed.ncbi.nlm.nih.gov/24235826/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="caffeine" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="caffeine" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/caffeine?lang=kk&theme=auto"
  title="Кофеиннің шығарылуы және ұйықтау уақыты калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
