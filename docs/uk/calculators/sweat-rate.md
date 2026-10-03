# Оцінка втрат поту за тренування

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sweat-rate.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sweat-rate.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`sweat-rate` · [NutriFit](https://nutrifit.health/uk/calculators/sweat-rate)

Піт (л) ≈ маса до − маса після (кг) + випите (л) − сеча (л); швидкість = піт / час у годинах. Зважуйтеся в однакових умовах без мокрого одягу.

### Порядок використання

1. Введіть вихідні дані: Піт (л) ≈ маса до − маса після (кг) + випите (л) − сеча (л); швидкість = піт / час у годинах. Зважуйтеся в однакових умовах без мокрого одягу.
2. Уточніть параметри: Втрати поту (мл) = (Вага_до − Вага_після, г) + Випита_рідина(мл) − Сеча(мл); Швидкість потовиділення (л/год) = (Втрати / Час_хв) × 60 / 1000; % Дегідратації = ((Вага_до − Вага_після) / Вага_до) × 100.
3. Прочитайте результат: Відсоток втрати маси не є діагнозом зневоднення; від’ємне значення означає приріст. NATA (2017): 100–150% чистої втрати — умовний орієнтир після навантаження, особливо за відновлення менш ніж чотири години. Це не обов’язковий об’єм для всіх і не темп пиття під час навантаження.

### Методика і формула

Піт (л) ≈ маса до − маса після (кг) + випите (л) − сеча (л); швидкість = піт / час у годинах. Зважуйтеся в однакових умовах без мокрого одягу.

Піт (л) ≈ маса до − маса після (кг) + випите (л) − сеча (л); швидкість = піт / час у годинах. Зважуйтеся в однакових умовах без мокрого одягу.

### Обмеження

Відсоток втрати маси не є діагнозом зневоднення; від’ємне значення означає приріст. NATA (2017): 100–150% чистої втрати — умовний орієнтир після навантаження, особливо за відновлення менш ніж чотири години. Це не обов’язковий об’єм для всіх і не темп пиття під час навантаження.

### Джерела

- [NATA. Fluid Replacement for the Physically Active, 2017.](https://nata.kglmeridian.com/view/journals/attr/52/9/article-p877.xml)
- [American College of Sports Medicine et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas DT et al. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs SM et al. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011](https://pubmed.ncbi.nlm.nih.gov/22150427/)

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
  title="Оцінка втрат поту за тренування" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
