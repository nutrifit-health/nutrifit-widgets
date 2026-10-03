# Бір қайталау максимумының бағасы 1RM

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/one-rep-max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/one-rep-max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/one-rep-max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/one-rep-max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/one-rep-max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/one-rep-max.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`one-rep-max` · [NutriFit](https://nutrifit.health/kk/calculators/one-rep-max)

Негізгі нәтиже — автор таңдаған Epley мен Brzycki орташа мәні. Жеке формулалар мен орташа мәннің арифметикалық пайыздары көрсетіледі.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Негізгі нәтиже — автор таңдаған Epley мен Brzycki орташа мәні. Жеке формулалар мен орташа мәннің арифметикалық пайыздары көрсетіледі.
2. Параметрлерді нақтылаңыз: Epley: w × (1 + r/30); Brzycki: w / (1.0278 − 0.0278 × r); Lombardi: w × r^0.10; Wathan: 100 × w / (48.8 + 53.8 × exp(−0.075 × r)); Mayhew: 100 × w / (52.2 + 41.9 × exp(−0.055 × r)).
w — салмақ, кг; r — қайталау саны. r = 1 болса, барлық баға w мәніне тең.
3. Нәтижені оқыңыз: Шаршағанша орындалған бір тәсілдегі салмақ пен қайталау санын енгізіңіз. Дәлдік жаттығу мен техникаға тәуелді, көп қайталауда төмендейді. Салмақ пайызы нақты қайталау санын кепілдемейді.

### Әдіс пен формула

Негізгі нәтиже — автор таңдаған Epley мен Brzycki орташа мәні. Жеке формулалар мен орташа мәннің арифметикалық пайыздары көрсетіледі.

Epley: w × (1 + r/30); Brzycki: w / (1.0278 − 0.0278 × r); Lombardi: w × r^0.10; Wathan: 100 × w / (48.8 + 53.8 × exp(−0.075 × r)); Mayhew: 100 × w / (52.2 + 41.9 × exp(−0.055 × r)).
w — салмақ, кг; r — қайталау саны. r = 1 болса, барлық баға w мәніне тең.

### Шектеулер

Шаршағанша орындалған бір тәсілдегі салмақ пен қайталау санын енгізіңіз. Дәлдік жаттығу мен техникаға тәуелді, көп қайталауда төмендейді. Салмақ пайызы нақты қайталау санын кепілдемейді.

### Дереккөздер

- [LeSuer D.A. et al. The Accuracy of Prediction Equations for Estimating 1-RM Performance in the Bench Press, Squat, and Deadlift. J Strength Cond Res, 1997;11(4):211–213](https://paulogentil.com/pdf/The%20Accuracy%20of%20Prediction%20Equations%20for%20Estimating%201-RM%20Performance%20in%20the%20Bench%20Press%2C%20Squat%2C%20and%20Deadlift.pdf)
- [Brzycki M. Strength Testing—Predicting a One-Rep Max from Reps-to-Fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds JM et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006](https://pubmed.ncbi.nlm.nih.gov/16937972/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="one-rep-max" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="one-rep-max" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/one-rep-max?lang=kk&theme=auto"
  title="Бір қайталау максимумының бағасы 1RM" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
