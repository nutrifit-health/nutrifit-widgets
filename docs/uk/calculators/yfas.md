# Єльська шкала харчової залежності mYFAS 2.0

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/yfas.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/yfas.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`yfas` · [NutriFit](https://nutrifit.health/uk/calculators/yfas)

Адаптований науковий опитувальник Єльського університету для діагностики ознак адиктивного потягу до висококалорійної ультрапереробленої їжі.

### Порядок використання

1. Згадайте проблемні продукти: Подумайте про їжу, щодо якої вам найважче зупинитися (солодощі, чипси, фастфуд, випічка).
2. Дайте відповіді на 13 запитань: Позначте «Так», якщо така поведінка регулярно траплялася протягом останніх 12 місяців.
3. Ознайомтеся з підсумком та категорією: Дізнайтеся кількість підтверджених критеріїв та ступінь клінічного впливу на ваше життя.

### Методика та формула

13 запитань, розроблених на основі 11 діагностичних критеріїв розладів вживання речовин за DSM-5 стосовно їжі, та 2 запитання щодо клінічного дистресу.

Діагноз харчової залежності потребує наявності клінічного дистресу/дезадаптації (питання 12 або 13) та щонайменше 2 симптомів. 2–3: легка; 4–5: помірна; ≥ 6: тяжка залежність.

### Обмеження

Поняття «харчова залежність» є предметом наукових дискусій. Опитувальник виявляє компульсивні патерни поведінки щодо гіперсмакової їжі (цукор, жир, сіль).

### Джерела

- [Schulte E.M., Gearhardt A.N. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017;25(4):302–308](https://pubmed.ncbi.nlm.nih.gov/28543787/)
- [Gearhardt A.N. et al. Preliminary validation of the Yale Food Addiction Scale. Appetite, 2009;52(2):430–436](https://pubmed.ncbi.nlm.nih.gov/19028533/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="yfas" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="yfas" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/yfas?lang=uk&theme=auto"
  title="Єльська шкала харчової залежності mYFAS 2.0" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
