# Калькулятор суточной нормы калорий (TDEE)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tdee.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tdee.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`tdee` · [NutriFit](https://nutrifit.health/ru/calculators/tdee)

Считает базовый обмен и полный суточный расход энергии, а также калорийность под снижение, удержание и набор массы тела.

### Порядок использования

1. Укажите параметры тела: Введите точный вес, рост, пол и возраст. Это необходимо для вычисления базового метаболизма (BMR).
2. Оцените уровень активности: Честно выберите вашу активность в течение недели. При сидячей работе не завышайте уровень без регулярного спорта.
3. Посмотрите значения под цель: Поддержание соответствует TDEE; цель снижения массы — на 20% ниже TDEE, цель набора — на 15% выше.

### Методика и формула

Базовый обмен (BMR) рассчитывается по уравнению Миффлина-Сан Жеора 1990 года — это текущий стандарт оценки покоя у здоровых взрослых. Полный суточный расход (TDEE) получается умножением BMR на коэффициент активности. Калорийность для снижения массы — минус 20% от TDEE, для набора — плюс 15%: такие темпы позволяют менять массу тела без потери мышечной ткани и без резких скачков.

BMR (муж) = 10 × вес(кг) + 6,25 × рост(см) − 5 × возраст + 5; BMR (жен) = 10 × вес(кг) + 6,25 × рост(см) − 5 × возраст − 161; TDEE = BMR × коэффициент активности

### Ограничения

Уравнение выведено на здоровых взрослых и даёт ошибку около ±10%. Оно не учитывает состав тела: при высокой мышечной массе результат занижен, при ожирении — завышен. Для беременных, детей, спортсменов высокого уровня и людей с заболеваниями щитовидной железы нужны отдельные методики.

### Источники

- [Mifflin M.D., St Jeor S.T. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tdee" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="tdee" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=ru&theme=auto"
  title="Калькулятор суточной нормы калорий (TDEE)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
