# Калькулятор поживної цінності страви

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/nutrition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/nutrition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/nutrition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/nutrition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/nutrition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/nutrition.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`nutrition`

Для `nutrition`: знайдіть публічні продукти або рецепти, додайте їхню вагу в грамах і вкажіть вагу готової страви. Натисніть розрахунок для сум і значень на 100 г; доступні PDF та CSV. Відсутні значення нутрієнтів позначаються як неповні й не перетворюються на нуль. Максимум — 50 інгредієнтів.

## Методика й дані

Сервер NutriFit підсумовує доступні нутрієнти вибраних публічних продуктів і рецептів за масою інгредієнтів. Повертає загальні значення та значення на 100 г за масою готової страви. PDF виконує новий серверний розрахунок; CSV експортує показаний результат.

Вказуйте вагу інгредієнта в тому вигляді, який обрано в каталозі (сирий або готовий), і вагу готової страви для розрахунку на 100 г. Втрати нутрієнтів при приготуванні та зливанні рідини не враховуються.

## Обмеження

До 50 інгредієнтів. Маси вводяться у грамах, маса готової страви має бути додатною. Невідомі значення позначаються як неповні, а не нульові. Дані можуть змінюватися, тому PDF може відрізнятися від попереднього результату. Це оцінка, а не діагноз або призначення лікування.

## Джерела

Публічний каталог продуктів і рецептів NutriFit; віджет показує джерело та час розрахунку.

- [NutriFit](https://nutrifit.health)
- [NutriFit recipes](https://nutrifit.health/recipes)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { NutritionCalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <NutritionCalculatorFrame locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="nutrition" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/nutrition-calculator?lang=uk&theme=auto"
  title="Калькулятор поживної цінності страви" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:680px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
