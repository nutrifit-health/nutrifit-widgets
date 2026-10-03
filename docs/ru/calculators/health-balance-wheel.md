# Авторское колесо самооценки

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/health-balance-wheel.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/health-balance-wheel.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`health-balance-wheel` · [NutriFit](https://nutrifit.health/ru/calculators/health-balance-wheel)

Оцените удовлетворённость восемью сферами за последние 14 дней от 1 до 10. Общий балл = среднее × 10; индекс однородности = max(0, 100 − 18 × стандартное отклонение), с округлением.

### Порядок использования

1. Введите исходные данные: Оцените удовлетворённость восемью сферами за последние 14 дней от 1 до 10. Общий балл = среднее × 10; индекс однородности = max(0, 100 − 18 × стандартное отклонение), с округлением.
2. Уточните параметры: Оцените удовлетворённость восемью сферами за последние 14 дней от 1 до 10. Общий балл = среднее × 10; индекс однородности = max(0, 100 − 18 × стандартное отклонение), с округлением.
3. Прочитайте результат: Это авторская визуализация, не валидированный клинический тест или закон здоровья. Равные низкие оценки дают высокий индекс однородности и не означают хорошее здоровье. Начальные значения и пресеты — демонстрации; подтвердите все восемь оценок.

### Методика и формула

Оцените удовлетворённость восемью сферами за последние 14 дней от 1 до 10. Общий балл = среднее × 10; индекс однородности = max(0, 100 − 18 × стандартное отклонение), с округлением.

Оцените удовлетворённость восемью сферами за последние 14 дней от 1 до 10. Общий балл = среднее × 10; индекс однородности = max(0, 100 − 18 × стандартное отклонение), с округлением.

### Ограничения

Это авторская визуализация, не валидированный клинический тест или закон здоровья. Равные низкие оценки дают высокий индекс однородности и не означают хорошее здоровье. Начальные значения и пресеты — демонстрации; подтвердите все восемь оценок.

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="health-balance-wheel" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="health-balance-wheel" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/health-balance-wheel?lang=ru&theme=auto"
  title="Авторское колесо самооценки" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
