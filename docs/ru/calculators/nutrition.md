# Калькулятор пищевой ценности блюда

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/nutrition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/nutrition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/nutrition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/nutrition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/nutrition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/nutrition.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`nutrition`

Для `nutrition`: найдите публичные продукты или рецепты, добавьте их вес в граммах и укажите вес готового блюда. Нажмите расчёт, чтобы увидеть суммы и значения на 100 г; доступны PDF и CSV. Отсутствующие значения нутриентов отмечаются как неполные и не превращаются в ноль. Максимум — 50 ингредиентов.

## Методика и данные

Сервер NutriFit суммирует доступные нутриенты выбранных публичных продуктов и рецептов по указанной массе ингредиентов. Возвращает значения на всё блюдо и на 100 г по массе готового блюда. PDF выполняет свежий серверный расчёт; CSV выгружает показанный результат.

Указывайте вес ингредиента в том виде, который выбран в каталоге (сырой или готовый), и вес готового блюда для расчёта на 100 г. Потери нутриентов при приготовлении и сливе жидкости не учитываются.

## Ограничения

До 50 ингредиентов. Массы вводятся в граммах, масса готового блюда должна быть положительной. Неизвестные значения помечаются как неполные, а не заменяются нулём. Данные продуктов и рецептов могут меняться, поэтому PDF может отличаться от предыдущего результата на экране. Расчёт является оценкой и не устанавливает диагноз или лечение.

## Источники

Публичный каталог продуктов и рецептов NutriFit; виджет показывает источник данных и время расчёта.

- [NutriFit](https://nutrifit.health)
- [NutriFit recipes](https://nutrifit.health/recipes)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { NutritionCalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <NutritionCalculatorFrame locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="nutrition" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/nutrition-calculator?lang=ru&theme=auto"
  title="Калькулятор пищевой ценности блюда" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:680px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
