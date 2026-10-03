# Евристична оцінка добової води

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/water.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/water.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`water` · [NutriFit](https://nutrifit.health/uk/calculators/water)

Обрана модель: 30 мл/кг + 500 мл за годину навантаження + 500 мл у спеку. Умовно 75% з напоїв; склянка = 250 мл. Вікового зниження немає.

### Порядок використання

1. Введіть вихідні дані: Обрана модель: 30 мл/кг + 500 мл за годину навантаження + 500 мл у спеку. Умовно 75% з напоїв; склянка = 250 мл. Вікового зниження немає.
2. Уточніть параметри: Обрана модель: 30 мл/кг + 500 мл за годину навантаження + 500 мл у спеку. Умовно 75% з напоїв; склянка = 250 мл. Вікового зниження немає.
3. Прочитайте результат: Це припущення, не норматив EFSA. EFSA: загальна вода з напоїв і їжі 2,0 л для жінок і 2,5 л для чоловіків, однаково для дорослих і літніх за помірних умов. Піт і обмеження за хвороб оцінюють окремо.

### Методика і формула

Обрана модель: 30 мл/кг + 500 мл за годину навантаження + 500 мл у спеку. Умовно 75% з напоїв; склянка = 250 мл. Вікового зниження немає.

Обрана модель: 30 мл/кг + 500 мл за годину навантаження + 500 мл у спеку. Умовно 75% з напоїв; склянка = 250 мл. Вікового зниження немає.

### Обмеження

Це припущення, не норматив EFSA. EFSA: загальна вода з напоїв і їжі 2,0 л для жінок і 2,5 л для чоловіків, однаково для дорослих і літніх за помірних умов. Піт і обмеження за хвороб оцінюють окремо.

### Джерела

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [American College of Sports Medicine et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="water" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="water" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/water?lang=uk&theme=auto"
  title="Евристична оцінка добової води" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
