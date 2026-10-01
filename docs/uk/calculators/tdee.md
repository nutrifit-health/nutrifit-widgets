# Калькулятор добової норми калорій (TDEE)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tdee.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tdee.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`tdee` · [NutriFit](https://nutrifit.health/uk/calculators/tdee)

Рахує базальний обмін і повні добові витрати енергії, а також калорійність для зниження, утримання та набору маси тіла.

### Порядок використання

1. Вкажіть параметри тіла: Введіть точну вагу, зріст, стать і вік для обчислення базового метаболізму (BMR).
2. Оцініть рівень активності: Чесно оберіть активність протягом тижня. При сидячій роботі не завищуйте коефіцієнт без регулярного спорту.
3. Перегляньте значення для мети: Підтримання відповідає TDEE; для зниження маси — на 20% нижче, для набору — на 15% вище.

### Методика та формула

Базальний обмін (BMR) розраховується за рівнянням Міффліна-Сан Жеора 1990 року — це чинний стандарт оцінки спокою в здорових дорослих. Повні добові витрати (TDEE) отримують множенням BMR на коефіцієнт активності. Калорійність для зниження маси — мінус 20% від TDEE, для набору — плюс 15%: такі темпи змінюють масу тіла без втрати м’язової тканини та без різких стрибків.

BMR (чол.) = 10 × вага(кг) + 6,25 × зріст(см) − 5 × вік + 5; BMR (жін.) = 10 × вага(кг) + 6,25 × зріст(см) − 5 × вік − 161; TDEE = BMR × коефіцієнт активності

### Обмеження

Рівняння виведене на здорових дорослих і має похибку близько ±10%. Воно не враховує склад тіла: за високої м’язової маси результат занижений, за ожиріння — завищений. Для вагітних, дітей, спортсменів високого рівня та людей із захворюваннями щитоподібної залози потрібні окремі методики.

### Джерела

- [Mifflin M.D., St Jeor S.T. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tdee" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="tdee" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=uk&theme=auto"
  title="Калькулятор добової норми калорій (TDEE)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
