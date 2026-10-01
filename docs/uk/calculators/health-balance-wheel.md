# Колесо балансу здоров'я та харчування

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/health-balance-wheel.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/health-balance-wheel.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`health-balance-wheel` · [NutriFit](https://nutrifit.health/uk/calculators/health-balance-wheel)

Інтерактивна діаграма 8 сфер здоров'я та способу життя. Виявляє вузькі місця (закон мінімуму Лібіха) та пов'язує дефіцити з інструментами NutriFit.

### Порядок використання

1. Чесна самооцінка за 8 шкалами: Виставте бали від 1 до 10 за кожною віссю. Орієнтуйтеся на динамічні підказки під повзунками: вони дають чіткі якісні критерії для кожного діапазону.
2. Знайдіть лімітуючий фактор: Тест визначить лімітуючі фактори з найменшими балами. За законом мінімуму Лібіха саме вони визначають загальне самопочуття та блокують адаптацію.
3. Почніть із цільових мікрозвичок: Не намагайтеся змінювати всі 8 сфер одразу. Сфокусуйтеся на 1–2 вузьких місцях, підключіть спеціалізовані калькулятори NutriFit і зробіть перший крок протягом 48 годин.

### Методика та формула

Методика базується на концепції медицини способу життя (Lifestyle Medicine) та законі мінімуму Юстуса фон Лібіха. 8 фундаментальних осей здоров'я (цілісність харчування, енергія, гідратація, сон, активність, усвідомленість у їжі, ШКТ та профілактика) оцінюються за 10-бальною шкалою. Інтегральний бал відображає загальний потенціал, а індекс збалансованості розраховується через дисперсію оцінок і вказує на ступінь стабільності систем організму.

Загальний бал = (Σ Балів / 8) × 10; Індекс збалансованості = max(0, 100 − СКВ × 18); Вузькі місця = min(Бали) при значенні ≤ 6

### Обмеження

Самооцінка має скринінговий характер і відображає суб'єктивне сприйняття самопочуття та звичок. Вона не замінює комплексну лабораторну діагностику та лікарський огляд, але допомагає розставити пріоритети у зміні способу життя.

### Джерела

- [Liebig J. Die organische Chemie in ihrer Anwendung auf Agricultur und Physiologie. Vieweg, Braunschweig, 1840 (Закон минимума Либиха)](https://archive.org/details/dieorganischech01liebgoog)
- [American College of Lifestyle Medicine (ACLM). Standards and Core Competencies for Lifestyle Medicine, 2022](https://lifestylemedicine.org/)
- [Katz D.L. et al. Lifestyle Medicine: The Foundation of Health Care. Am J Prev Med, 2018;54(5):737–742](https://pubmed.ncbi.nlm.nih.gov/29571948/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="health-balance-wheel" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="health-balance-wheel" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/health-balance-wheel?lang=uk&theme=auto"
  title="Колесо балансу здоров'я та харчування" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
