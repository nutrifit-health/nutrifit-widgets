# Харчова поведінка: змінена адаптація DEBQ

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/debq.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/debq.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`debq` · [NutriFit](https://nutrifit.health/uk/calculators/debq)

33 питання про звичну харчову поведінку. Показано середні відповідей у трьох групах, без категорій норми та діагнозу.

### Порядок використання

1. Введіть вихідні дані: Використовуйте фактичні значення й відповідні одиниці.
2. Уточніть параметри: Змініть початкові припущення відповідно до вашої ситуації.
3. Прочитайте результат: Враховуйте обмеження моделі та не сприймайте розрахунок як вимірювання.

### Методика і формула

Емоційна група: питання 1–13; зовнішня: 14–23; обмежувальна: 24–33. Середнє кожної групи від 1 до 5; питання 17 оцінюється як 6 мінус відповідь.

Емоційна група: питання 1–13; зовнішня: 14–23; обмежувальна: 24–33. Середнє кожної групи від 1 до 5; питання 17 оцінюється як 6 мінус відповідь.

### Обмеження

Формулювання змінено й згруповано. Це не підтверджена валідована версія оригінального DEBQ; клінічні норми до неї не застосовуються. Дозвіл на використання оригінального бланка потребує окремого підтвердження.

### Джерела

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. et al. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire in normal subjects and women with eating disorders. J Psychosom Res, 1987](https://pubmed.ncbi.nlm.nih.gov/3473234/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="debq" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="debq" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/debq?lang=uk&theme=auto"
  title="Харчова поведінка: змінена адаптація DEBQ" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
