# Шкала интуитивного питания IES-2

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ies-2.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ies-2.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`ies-2` · [NutriFit](https://nutrifit.health/ru/calculators/ies-2)

Научно валидированная шкала Трейси Тилк (23 вопроса) для измерения степени гармонии и интуитивного подхода в отношениях с едой.

### Порядок использования

1. Оцените свое обычное отношение к пище: Отвечайте на вопросы, опираясь на свои привычные чувства и реакции за последние месяцы.
2. Отметьте степень согласия от 1 до 5: 1 — категорически не согласен, 5 — полностью согласен.
3. Изучите профиль по 4 компонентам: Обратите внимание на субшкалы, где балл ниже 3,0 — это ключевые точки для развития осознанности.

### Методика и формула

23 утверждения по 5-балльной шкале. Включает 4 субшкалы: безусловное разрешение есть (UPE), еда для физических нужд (EPR), доверие сигналам голода/сытости (RHSC) и соответствие тела и питания (B-FCC).

Балл IES-2 = Среднее арифметическое всех 23 пунктов с учетом инверсии обратных вопросов (1, 2, 4, 5, 9, 10, 11). Диапазон: 1,0–5,0.

### Ограничения

Шкала оценивает психологические паттерны питания. При наличии клинических симптомов РПП переход на интуитивное питание требует руководства терапевта.

### Источники

- [Tylka T.L., Kroon Van Diest A.M. The Intuitive Eating Scale-2: item refinement and psychometric evaluation. J Couns Psychol, 2013;60(1):137–153](https://pubmed.ncbi.nlm.nih.gov/23356469/)
- [Tribole E., Resch E. Intuitive Eating: A Revolutionary Anti-Diet Approach. St. Martin’s Essentials, 2020](https://www.intuitiveeating.org/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ies-2" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="ies-2" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ies-2?lang=ru&theme=auto"
  title="Шкала интуитивного питания IES-2" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
