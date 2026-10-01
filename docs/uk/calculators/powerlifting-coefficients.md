# Калькулятор коефіцієнтів пауерліфтингу (DOTS, Wilks, IPF GL)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/powerlifting-coefficients.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/powerlifting-coefficients.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/uk/calculators/powerlifting-coefficients)

Порівнює абсолютну силу атлетів різних вагових категорій та статі у триборстві (присідання, жим, тяга) за формулами DOTS, Wilks та IPF GL Points.

### Порядок використання

1. Складіть найкращі ваги у трьох рухах: Підсумуйте максимальну вагу в присіданнях, жимі лежачи та становій тязі, виконаних за змагальними правилами.
2. Вкажіть точну власну вагу на зважуванні: Використовуйте ранкову вагу на змагальному зважуванні (до виходу на помост).
3. Оцініть свої бали DOTS та IPF GL: Порівняйте результат зі шкалою майстерності: 300 балів — міцний любитель, 400 — кандидат у майстри спорту, 500 — еліта.

### Методика та формула

Закон алометричного масштабування показує, що сила м'язів пропорційна площі їхнього поперечного перерізу (зріст у квадраті), тоді як маса тіла зростає пропорційно об'єму (зріст у кубі). Коефіцієнти пауерліфтингу використовують поліноміальні рівняння високих порядків, щоб зрівняти шанси легковаговиків та великоваговиків.

DOTS: Коефіцієнт = 500 / (A×Вага^4 + B×Вага^3 + C×Вага^2 + D×Вага + E); Бали DOTS = Сума (кг) × Коефіцієнт; IPF GL Points: 100 × Сума / (A − B × e^(−C × Вага)); Wilks: поліном 5-го ступеня.

### Обмеження

Призначені для стандартного змагального триборства (пауерліфтинг). Не застосовуються для гирьового спорту, важкої атлетики (де використовується формула Сінклера) або армреслінгу.

### Джерела

- [Perotti L. et al. The DOTS Formula: A new formula for evaluating strength athletes across weight classes, 2019](https://pubmed.ncbi.nlm.nih.gov/31804245/)
- [Wilks R. The Wilks Formula for Powerlifting. Australian Powerlifting Federation, 1997](https://www.powerlifting.sport/)
- [International Powerlifting Federation. IPF GL Points Formula for Classic and Equipped Powerlifting, 2020](https://www.powerlifting.sport/rules/codes/info/ipf-formula)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="powerlifting-coefficients" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="powerlifting-coefficients" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/powerlifting-coefficients?lang=uk&theme=auto"
  title="Калькулятор коефіцієнтів пауерліфтингу (DOTS, Wilks, IPF GL)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
