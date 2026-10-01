# Бұлшықет әлеуетінің калькуляторы (Кейси Батт және Мартин Беркхан)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/muscle-potential.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/muscle-potential.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`muscle-potential` · [NutriFit](https://nutrifit.health/kk/calculators/muscle-potential)

Анаболикалық стероидтарсыз қол жеткізуге болатын ең жоғары құрғақ бұлшықет массасы мен дененің шекті көлемдерін (кеуде, бицепс, сан) анықтайды.

### Пайдалану реті

1. Сүйек өлшемдерін дәл өлшеңіз: Білек алақан мен шынтақ сүйегінің басы арасында өлшенеді. Тобық — буын сүйектерінен сәл жоғары ең жіңішке жерінде өлшенеді.
2. Қажетті май пайызын көрсетіңіз: Жыл бойы тамаша пішінде болу үшін 10–12% майды; жарыс бедері үшін — 6–8% бағдарлаңыз.
3. Қазіргі өлшемдерді максимуммен салыстырыңыз: Калькулятор бицепс, кеуде және санның шекті өлшемдерін көрсетеді. Бұл сіздің денеңіз үшін шынайы бағдар.

### Әдістеме және формула

Кейси Батттың (Casey Butt, Ph.D.) 6 жылдық зерттеуі стероидқа дейінгі дәуірдегі (1940–1950 жж.) бодибилдингтен жүздеген элиталық әлем чемпиондарының антропометриясын талдады. Үлгі табиғи бұлшықет массасының сүйек қаңқасының қалыңдығымен — білек пен тобық шеңберімен қатаң шектелгенін дәлелдеді.

Max LBM = Бой^1,5 × [sqrt(Білек)/22,6670 + sqrt(Тобық)/17,0104] × [(Май%/224) + 1]; Беркханның жарыс салмағы (~5% май) = Бой (см) − 100.

### Шектеулер

Ерлер үшін әзірленген. Әйелдерде гормоналды фонға байланысты бұлшықет массасының шегі ерлер формуласының шамамен 65–70%-ын құрайды. Жылдар бойғы мінсіз жаттығулар мен дұрыс тамақтануды талап етеді.

### Дереккөздер

- [Butt C. Your Maximum Muscular Potential (The Casey Butt Model). The WeighTrainer, 2009](https://www.weightrainer.net/potential.html)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="muscle-potential" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="muscle-potential" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/muscle-potential?lang=kk&theme=auto"
  title="Бұлшықет әлеуетінің калькуляторы (Кейси Батт және Мартин Беркхан)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
