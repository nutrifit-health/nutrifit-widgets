# Калькулятор 1ПМ (одноповторный максимум)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/one-rep-max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/one-rep-max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/one-rep-max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/one-rep-max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/one-rep-max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/one-rep-max.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`one-rep-max` · [NutriFit](https://nutrifit.health/ru/calculators/one-rep-max)

Определяет предельный вес, который атлет может поднять на одно повторение, без риска травм при субмаксимальном тестировании на 2–10 повторений.

### Порядок использования

1. Выполните качественную разминку: Сделайте общую суставную разминку, затем 3–4 разминочных подхода с постепенным повышением веса до рабочего.
2. Сделайте рабочий подход на 3–6 повторений: Подберите вес, с которым можете выполнить от 3 до 6 чистых повторений с запасом не более 1 повторения (RPE 9).
3. Внесите данные и используйте проценты: Введите вес и число повторений в калькулятор. По таблице процентов определите веса для силовых (85%), гипертрофийных (75%) или восстановительных (60%) тренировок.

### Методика и формула

Расчёт одноповторного максимума основан на регрессионных уравнениях зависимости числа выполненных до отказа повторений от доли предельного веса. Формула Эпли лучше работает в диапазоне 2–6 повторений, а формула Бжицки даёт точные оценки на 6–10 повторениях.

Epley: 1RM = Вес × (1 + 0,0333 × Повт); Brzycki: 1RM = Вес / (1,0278 − 0,0278 × Повт); Lombardi: Вес × Повт^0,10; Wathan: (100 × Вес) / (48,8 + 53,8 × e^(-0,075 × Повт)).

### Ограничения

Не предназначен для подходов более 10–12 повторений из-за накопления локального метаболического утомления. Точность зависит от техники упражнения и долевого состава мышечных волокон атлета.

### Источники

- [Epley B. Poundage chart. Boyd Epley Workout, Lincoln, NE, 1985](https://pubmed.ncbi.nlm.nih.gov/2706858/)
- [Brzycki M. Strength testing—predicting a one-rep max from reps-to-fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds J.M. et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006;20(3):584–592](https://pubmed.ncbi.nlm.nih.gov/16937972/)

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
  title="Калькулятор 1ПМ (одноповторный максимум)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
