# Колесо баланса здоровья и питания

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/health-balance-wheel.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/health-balance-wheel.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`health-balance-wheel` · [NutriFit](https://nutrifit.health/ru/calculators/health-balance-wheel)

Интерактивная диаграмма 8 сфер здоровья и образа жизни. Выявляет узкие горлышки (закон минимума Либиха) и связывает дефициты с инструментами NutriFit.

### Порядок использования

1. Честная самооценка по 8 шкалам: Выставите баллы от 1 до 10 по каждой оси. Ориентируйтесь на динамические подсказки под ползунками: они дают чёткие качественные критерии для каждого диапазона.
2. Найдите лимитирующий фактор: Тест определит лимитирующие факторы с наименьшими баллами. По закону минимума Либиха именно они определяют общее самочувствие и блокируют адаптацию.
3. Начните с целевых микропривычек: Не пытайтесь менять все 8 сфер сразу. Сфокусируйтесь на 1–2 узких горлышках, подключите специализированные калькуляторы NutriFit и сделайте первый шаг в течение 48 часов.

### Методика и формула

Методика основана на концепции медицины образа жизни (Lifestyle Medicine) и законе минимума Юстуса фон Либиха. 8 фундаментальных осей здоровья (цельность питания, энергия, гидратация, сон, активность, осознанность в еде, ЖКТ и профилактика) оцениваются по 10-балльной шкале. Интегральный балл отражает общий потенциал, а индекс сбалансированности рассчитывается через дисперсию оценок и указывает на степень стабильности систем организма.

Общий балл = (Σ Баллов / 8) × 10; Индекс сбалансированности = max(0, 100 − СКО × 18); Узкие горлышки = min(Баллы) при значении ≤ 6

### Ограничения

Самооценка носит скрининговый характер и отражает субъективное восприятие самочувствия и привычек. Она не заменяет комплексную лабораторную диагностику и врачебный осмотр, но помогает расставить приоритеты в изменении образа жизни.

### Источники

- [Liebig J. Die organische Chemie in ihrer Anwendung auf Agricultur und Physiologie. Vieweg, Braunschweig, 1840 (Закон минимума Либиха)](https://archive.org/details/dieorganischech01liebgoog)
- [American College of Lifestyle Medicine (ACLM). Standards and Core Competencies for Lifestyle Medicine, 2022](https://lifestylemedicine.org/)
- [Katz D.L. et al. Lifestyle Medicine: The Foundation of Health Care. Am J Prev Med, 2018;54(5):737–742](https://pubmed.ncbi.nlm.nih.gov/29571948/)

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
  title="Колесо баланса здоровья и питания" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
