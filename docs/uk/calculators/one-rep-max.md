# Оцінка одноповторного максимуму 1RM

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/one-rep-max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/one-rep-max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/one-rep-max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/one-rep-max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/one-rep-max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/one-rep-max.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`one-rep-max` · [NutriFit](https://nutrifit.health/uk/calculators/one-rep-max)

Основний результат — авторське середнє Epley і Brzycki. Нижче окремі формули та арифметичні відсотки середнього.

### Порядок використання

1. Введіть вихідні дані: Основний результат — авторське середнє Epley і Brzycki. Нижче окремі формули та арифметичні відсотки середнього.
2. Уточніть параметри: Epley: w × (1 + r/30); Brzycki: w / (1.0278 − 0.0278 × r); Lombardi: w × r^0.10; Wathan: 100 × w / (48.8 + 53.8 × exp(−0.075 × r)); Mayhew: 100 × w / (52.2 + 41.9 × exp(−0.055 × r)).
w — вага, кг; r — кількість повторень. При r = 1 усі оцінки дорівнюють w.
3. Прочитайте результат: Вкажіть вагу та виконані повторення в підході до відмови. Похибка залежить від вправи й техніки та зростає за великої кількості повторень. Відсоток ваги не гарантує певної кількості повторень.

### Методика і формула

Основний результат — авторське середнє Epley і Brzycki. Нижче окремі формули та арифметичні відсотки середнього.

Epley: w × (1 + r/30); Brzycki: w / (1.0278 − 0.0278 × r); Lombardi: w × r^0.10; Wathan: 100 × w / (48.8 + 53.8 × exp(−0.075 × r)); Mayhew: 100 × w / (52.2 + 41.9 × exp(−0.055 × r)).
w — вага, кг; r — кількість повторень. При r = 1 усі оцінки дорівнюють w.

### Обмеження

Вкажіть вагу та виконані повторення в підході до відмови. Похибка залежить від вправи й техніки та зростає за великої кількості повторень. Відсоток ваги не гарантує певної кількості повторень.

### Джерела

- [LeSuer D.A. et al. The Accuracy of Prediction Equations for Estimating 1-RM Performance in the Bench Press, Squat, and Deadlift. J Strength Cond Res, 1997;11(4):211–213](https://paulogentil.com/pdf/The%20Accuracy%20of%20Prediction%20Equations%20for%20Estimating%201-RM%20Performance%20in%20the%20Bench%20Press%2C%20Squat%2C%20and%20Deadlift.pdf)
- [Brzycki M. Strength Testing—Predicting a One-Rep Max from Reps-to-Fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds JM et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006](https://pubmed.ncbi.nlm.nih.gov/16937972/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="one-rep-max" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="one-rep-max" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/one-rep-max?lang=uk&theme=auto"
  title="Оцінка одноповторного максимуму 1RM" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
