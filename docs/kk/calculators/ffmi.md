# Майсыз масса индексі FFMI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ffmi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ffmi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ffmi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ffmi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ffmi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ffmi.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`ffmi` · [NutriFit](https://nutrifit.health/kk/calculators/ffmi)

Майсыз масса = салмақ × (1 − май пайызы / 100); FFMI = майсыз масса / бой², бой метрмен. Ерлер үшін: қалыпқа келтірілген FFMI = FFMI + 6,3 × (1,8 − бой), Kouri (1995) аннотациясы бойынша.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Майсыз масса = салмақ × (1 − май пайызы / 100); FFMI = майсыз масса / бой², бой метрмен. Ерлер үшін: қалыпқа келтірілген FFMI = FFMI + 6,3 × (1,8 − бой), Kouri (1995) аннотациясы бойынша.
2. Параметрлерді нақтылаңыз: Майсыз масса = салмақ × (1 − май пайызы / 100); FFMI = майсыз масса / бой², бой метрмен. Ерлер үшін: қалыпқа келтірілген FFMI = FFMI + 6,3 × (1,8 − бой), Kouri (1995) аннотациясы бойынша.
3. Нәтижені оқыңыз: Бастапқы зерттеуге ерлер қатысты. Әйелдер үшін қалыпқа келтіру есептелмейді. Мән майды бағалау дәлдігіне тәуелді; ол стероид қолдану диагнозы, генетикалық шектің дәлелі немесе денсаулықтың әмбебап санаты емес.

### Әдіс пен формула

Майсыз масса = салмақ × (1 − май пайызы / 100); FFMI = майсыз масса / бой², бой метрмен. Ерлер үшін: қалыпқа келтірілген FFMI = FFMI + 6,3 × (1,8 − бой), Kouri (1995) аннотациясы бойынша.

Майсыз масса = салмақ × (1 − май пайызы / 100); FFMI = майсыз масса / бой², бой метрмен. Ерлер үшін: қалыпқа келтірілген FFMI = FFMI + 6,3 × (1,8 − бой), Kouri (1995) аннотациясы бойынша.

### Шектеулер

Бастапқы зерттеуге ерлер қатысты. Әйелдер үшін қалыпқа келтіру есептелмейді. Мән майды бағалау дәлдігіне тәуелді; ол стероид қолдану диагнозы, генетикалық шектің дәлелі немесе денсаулықтың әмбебап санаты емес.

### Дереккөздер

- [Kouri EM et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995](https://pubmed.ncbi.nlm.nih.gov/7496846/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ffmi" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="ffmi" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ffmi?lang=kk&theme=auto"
  title="Майсыз масса индексі FFMI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
