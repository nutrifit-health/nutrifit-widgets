# Гликемиялық жүктеме калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/glycemic-load.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/glycemic-load.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`glycemic-load` · [NutriFit](https://nutrifit.health/kk/calculators/glycemic-load)

Порцияның гликемиялық жүктемесін гликемиялық индекс пен көмірсу мөлшері бойынша есептейді — бұл шама глюкоза реакциясын индекстің өзінен гөрі жақсы көрсетеді.

### Пайдалану реті

1. Өнімді таңдаңыз немесе ГИ енгізіңіз: Анықтамалық өнімдер базасын (Atkinson 2021 халықаралық кестелері) пайдаланыңыз немесе гликемиялық индексті қолмен көрсетіңіз.
2. Көмірсулар мен порция мөлшерін көрсетіңіз: 100 г-дағы көмірсулар мөлшерін және порцияның нақты салмағын граммен енгізіңіз.
3. Метаболикалық әсерді бағалаңыз: Порцияның қандағы қантқа нақты әсерін біліңіз: төмен (≤10), орташа (11–19) немесе жоғары (≥20) жүктеме.

### Әдістеме және формула

Гликемиялық индекс 50 г көмірсуы бар порциядан кейін глюкозаның көтерілу жылдамдығын көрсетеді, бірақ нақты порция мөлшері туралы ештеңе айтпайды. Гликемиялық жүктеме екеуін де ескереді: индекс нақты порциядағы көмірсу мөлшеріне көбейтіліп, 100-ге бөлінеді. Сондықтан индексі жоғары қарбыз төмен жүктеме береді — порциядағы көмірсу аз.

Порция көмірсуы(г) = 100 г-дағы көмірсу × порция салмағы / 100; ГЖ = ГИ × порция көмірсуы / 100

### Шектеулер

Кестелік индекс мәндері орташаланған: сұрып, пісу дәрежесі, ұнтақтау, дайындау тәсілі әрі ақуыз, май және талшықпен үйлесуі глюкоза реакциясын өзгертеді. Жеке реакция айтарлықтай ерекшеленеді, ал қант диабетінде есеп глюкозаны өлшеуді немесе мониторинг деректерін алмастырмайды.

### Дереккөздер

- [Atkinson F.S., Brand-Miller J.C. et al. International tables of glycemic index and glycemic load values 2021. Am J Clin Nutr, 2021;114(5):1625–1632](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin L.S.A. et al. Glycemic index, glycemic load and glycemic response: International Scientific Consensus Summit. Nutr Metab Cardiovasc Dis, 2015;25(9):795–815](https://pubmed.ncbi.nlm.nih.gov/26160327/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="glycemic-load" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="glycemic-load" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/glycemic-load?lang=kk&theme=auto"
  title="Гликемиялық жүктеме калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
