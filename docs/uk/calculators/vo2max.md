# Калькулятор МПК (VO2max)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vo2max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vo2max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`vo2max` · [NutriFit](https://nutrifit.health/uk/calculators/vo2max)

Оцінює аеробну потужність і кардіореспіраторну витривалість на основі валідованих польових тестів без спеціального лабораторного обладнання.

### Порядок використання

1. Оберіть відповідний протокол: Бігунам рекомендується 12-хвилинний тест Купера. Людям старшого віку або початківцям краще обрати тест швидкої ходьби Рокпорт на 1 милю.
2. Зафіксуйте показники: У тесті Купера виміряйте точну відстань на стадіоні або за GPS. У тесті Рокпорт зафіксуйте точний час і пульс одразу після перетину фінішу.
3. Оцініть прогноз і темп: Калькулятор зіставить ваш результат із нормами Cooper Institute та розрахує прогнозований змагальний темп на 5 та 10 км.

### Методика та формула

У калькуляторі реалізовано три науково підтверджені методи: 12-хвилинний біговий тест Купера, тест швидкої ходьби Рокпорт на 1 милю та співвідношення пульсу спокою і максимуму (Uth et al.).

Купер: VO2max = (Дистанція, м − 504,9) / 44,73; Рокпорт: 132,853 − 0,0769 × Вага(фунти) − 0,3877 × Вік + 6,315 × Стать − 3,2649 × Час − 0,1565 × ЧСС; Uth: 15 × (ЧСС max / ЧСС спокою).

### Обмеження

Польові тести є непрямою оцінкою із середньою похибкою 5–10%. Рівномірність темпу, рельєф, погодні умови та вживання кофеїну можуть впливати на результат.

### Джерела

- [Cooper K.H. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968;203(3):201–204](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline G.M. et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987;19(3):253–259](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N. et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004;91(1):111–115](https://pubmed.ncbi.nlm.nih.gov/14624296/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vo2max" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="vo2max" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vo2max?lang=uk&theme=auto"
  title="Калькулятор МПК (VO2max)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
