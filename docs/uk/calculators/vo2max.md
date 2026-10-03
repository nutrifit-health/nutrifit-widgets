# Польові оцінки VO2max

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vo2max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vo2max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`vo2max` · [NutriFit](https://nutrifit.health/uk/calculators/vo2max)

Купер: дистанція за 12 хвилин. Rockport: швидка ходьба 1 милі (1609,344 м), час і кінцева ЧСС; початкова перевірка у здорових дорослих 30–69 років. Uth: 15,3 × ЧССмакс / ЧССпокою; перевірений у добре тренованих чоловіків 21–51 року.

### Порядок використання

1. Введіть вихідні дані: Купер: дистанція за 12 хвилин. Rockport: швидка ходьба 1 милі (1609,344 м), час і кінцева ЧСС; початкова перевірка у здорових дорослих 30–69 років. Uth: 15,3 × ЧССмакс / ЧССпокою; перевірений у добре тренованих чоловіків 21–51 року.
2. Уточніть параметри: Купер: дистанція за 12 хвилин. Rockport: швидка ходьба 1 милі (1609,344 м), час і кінцева ЧСС; початкова перевірка у здорових дорослих 30–69 років. Uth: 15,3 × ЧССмакс / ЧССпокою; перевірений у добре тренованих чоловіків 21–51 року.
3. Прочитайте результат: Це непрямі оцінки, а не вимірювання газообміну. Uth тут не екстраполюють на жінок, Rockport — за вказані вікові межі. Прогноз максимальної ЧСС за віком додає невизначеність. Від’ємні оцінки, категорії підготовки та прогноз темпу 5/10 км не надаються.

### Методика і формула

Купер: дистанція за 12 хвилин. Rockport: швидка ходьба 1 милі (1609,344 м), час і кінцева ЧСС; початкова перевірка у здорових дорослих 30–69 років. Uth: 15,3 × ЧССмакс / ЧССпокою; перевірений у добре тренованих чоловіків 21–51 року.

Купер: дистанція за 12 хвилин. Rockport: швидка ходьба 1 милі (1609,344 м), час і кінцева ЧСС; початкова перевірка у здорових дорослих 30–69 років. Uth: 15,3 × ЧССмакс / ЧССпокою; перевірений у добре тренованих чоловіків 21–51 року.

### Обмеження

Це непрямі оцінки, а не вимірювання газообміну. Uth тут не екстраполюють на жінок, Rockport — за вказані вікові межі. Прогноз максимальної ЧСС за віком додає невизначеність. Від’ємні оцінки, категорії підготовки та прогноз темпу 5/10 км не надаються.

### Джерела

- [Cooper KH. et al. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline GM et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004](https://pubmed.ncbi.nlm.nih.gov/14624296/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vo2max" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="vo2max" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vo2max?lang=uk&theme=auto"
  title="Польові оцінки VO2max" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
