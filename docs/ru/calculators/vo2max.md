# Полевые оценки VO2max

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vo2max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vo2max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`vo2max` · [NutriFit](https://nutrifit.health/ru/calculators/vo2max)

Купер: дистанция за 12 минут. Rockport: быстрая ходьба 1 мили (1609,344 м), время и конечная ЧСС; исходная проверка у здоровых взрослых 30–69 лет. Uth: 15,3 × ЧССмакс / ЧССпокоя; проверен у хорошо тренированных мужчин 21–51 года.

### Порядок использования

1. Введите исходные данные: Купер: дистанция за 12 минут. Rockport: быстрая ходьба 1 мили (1609,344 м), время и конечная ЧСС; исходная проверка у здоровых взрослых 30–69 лет. Uth: 15,3 × ЧССмакс / ЧССпокоя; проверен у хорошо тренированных мужчин 21–51 года.
2. Уточните параметры: Купер: дистанция за 12 минут. Rockport: быстрая ходьба 1 мили (1609,344 м), время и конечная ЧСС; исходная проверка у здоровых взрослых 30–69 лет. Uth: 15,3 × ЧССмакс / ЧССпокоя; проверен у хорошо тренированных мужчин 21–51 года.
3. Прочитайте результат: Это непрямые оценки, а не измерение газообмена. Метод Uth не экстраполируется здесь на женщин, Rockport — за указанную возрастную область. Возрастной прогноз максимальной ЧСС добавляет неопределённость. Отрицательные оценки, категории подготовки и прогноз темпа 5/10 км не выдаются.

### Методика и формула

Купер: дистанция за 12 минут. Rockport: быстрая ходьба 1 мили (1609,344 м), время и конечная ЧСС; исходная проверка у здоровых взрослых 30–69 лет. Uth: 15,3 × ЧССмакс / ЧССпокоя; проверен у хорошо тренированных мужчин 21–51 года.

Купер: дистанция за 12 минут. Rockport: быстрая ходьба 1 мили (1609,344 м), время и конечная ЧСС; исходная проверка у здоровых взрослых 30–69 лет. Uth: 15,3 × ЧССмакс / ЧССпокоя; проверен у хорошо тренированных мужчин 21–51 года.

### Ограничения

Это непрямые оценки, а не измерение газообмена. Метод Uth не экстраполируется здесь на женщин, Rockport — за указанную возрастную область. Возрастной прогноз максимальной ЧСС добавляет неопределённость. Отрицательные оценки, категории подготовки и прогноз темпа 5/10 км не выдаются.

### Источники

- [Cooper KH. et al. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline GM et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004](https://pubmed.ncbi.nlm.nih.gov/14624296/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vo2max" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="vo2max" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vo2max?lang=ru&theme=auto"
  title="Полевые оценки VO2max" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
