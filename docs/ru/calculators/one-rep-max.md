# Оценка одноповторного максимума 1RM

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/one-rep-max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/one-rep-max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/one-rep-max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/one-rep-max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/one-rep-max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/one-rep-max.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`one-rep-max` · [NutriFit](https://nutrifit.health/ru/calculators/one-rep-max)

Основной результат — авторское среднее Epley и Brzycki. Ниже показаны отдельные формулы и арифметические проценты от среднего.

### Порядок использования

1. Введите исходные данные: Основной результат — авторское среднее Epley и Brzycki. Ниже показаны отдельные формулы и арифметические проценты от среднего.
2. Уточните параметры: Epley: w × (1 + r/30); Brzycki: w / (1.0278 − 0.0278 × r); Lombardi: w × r^0.10; Wathan: 100 × w / (48.8 + 53.8 × exp(−0.075 × r)); Mayhew: 100 × w / (52.2 + 41.9 × exp(−0.055 × r)).
w — вес, кг; r — число повторений. При r = 1 все оценки равны w.
3. Прочитайте результат: Введите вес и число выполненных повторений в подходе до отказа. Формулы дают оценку, зависящую от упражнения и техники; при большом числе повторений погрешность растёт. Процент веса не гарантирует определённое число повторений.

### Методика и формула

Основной результат — авторское среднее Epley и Brzycki. Ниже показаны отдельные формулы и арифметические проценты от среднего.

Epley: w × (1 + r/30); Brzycki: w / (1.0278 − 0.0278 × r); Lombardi: w × r^0.10; Wathan: 100 × w / (48.8 + 53.8 × exp(−0.075 × r)); Mayhew: 100 × w / (52.2 + 41.9 × exp(−0.055 × r)).
w — вес, кг; r — число повторений. При r = 1 все оценки равны w.

### Ограничения

Введите вес и число выполненных повторений в подходе до отказа. Формулы дают оценку, зависящую от упражнения и техники; при большом числе повторений погрешность растёт. Процент веса не гарантирует определённое число повторений.

### Источники

- [LeSuer D.A. et al. The Accuracy of Prediction Equations for Estimating 1-RM Performance in the Bench Press, Squat, and Deadlift. J Strength Cond Res, 1997;11(4):211–213](https://paulogentil.com/pdf/The%20Accuracy%20of%20Prediction%20Equations%20for%20Estimating%201-RM%20Performance%20in%20the%20Bench%20Press%2C%20Squat%2C%20and%20Deadlift.pdf)
- [Brzycki M. Strength Testing—Predicting a One-Rep Max from Reps-to-Fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds JM et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006](https://pubmed.ncbi.nlm.nih.gov/16937972/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="one-rep-max" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="one-rep-max" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/one-rep-max?lang=ru&theme=auto"
  title="Оценка одноповторного максимума 1RM" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
