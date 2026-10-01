# Калькулятор потовиділення та регідратації

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sweat-rate.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sweat-rate.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`sweat-rate` · [NutriFit](https://nutrifit.health/uk/calculators/sweat-rate)

Визначає індивідуальний темп втрати рідини з потом і розраховує персоналізований об'єм відновлення рідини та електролітів.

### Порядок використання

1. Зважтеся перед тренуванням: Сходіть у туалет і зважтеся без одягу на точних цифрових вагах перед початком заняття.
2. Контролюйте пиття під час бігу або вправ: Пийте з пляшки з мірними поділками, щоб точно зафіксувати випитий об'єм.
3. Зважтеся насухо після фінішу: Ретельно витріть рушником піт зі шкіри та волосся перед повторним зважуванням без одягу.

### Методика та формула

Базується на протоколі Американського коледжу спортивної медицини (ACSM). Порівняння сухої ваги до і після навантаження без одягу з урахуванням випитої води та виділеної сечі дає погодинну швидкість потовиділення.

Втрати поту (мл) = (Вага_до − Вага_після, г) + Випита_рідина(мл) − Сеча(мл); Швидкість потовиділення (л/год) = (Втрати / Час_хв) × 60 / 1000; % Дегідратації = ((Вага_до − Вага_після) / Вага_до) × 100.

### Обмеження

Не враховує окиснення глікогену та дихальне випаровування води (~100–150 г/год при важкому навантаженні). Є надійним клінічним орієнтиром дефіциту рідини.

### Джерела

- [Sawka M.N. et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007;39(2):377–390](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas D.T., Erdman K.A., Burke L.M. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016;116(3):501–528](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs S.M., Sawka M.N. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011;29(Suppl 1):S39–S46](https://pubmed.ncbi.nlm.nih.gov/22150427/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sweat-rate" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="sweat-rate" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sweat-rate?lang=uk&theme=auto"
  title="Калькулятор потовиділення та регідратації" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
