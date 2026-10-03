# Коефіцієнти триборства DOTS, Wilks і IPF GL

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/powerlifting-coefficients.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/powerlifting-coefficients.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/uk/calculators/powerlifting-coefficients)

Вкажіть масу на зважуванні та суму найкращих успішних присідання, жиму й тяги в кілограмах. DOTS, класичний Wilks і IPF GL 2020 для класичного триборства.

### Порядок використання

1. Введіть вихідні дані: Вкажіть масу на зважуванні та суму найкращих успішних присідання, жиму й тяги в кілограмах. DOTS, класичний Wilks і IPF GL 2020 для класичного триборства. DOTS обмежує масу для коефіцієнта до 40–210 кг у чоловіків і 40–150 кг у жінок; поза межами використовує крайнє значення.
2. Уточніть параметри: DOTS: Коефіцієнт = 500 / (A×Вага^4 + B×Вага^3 + C×Вага^2 + D×Вага + E); Бали DOTS = Сума (кг) × Коефіцієнт; IPF GL Points: 100 × Сума / (A − B × e^(−C × Вага)); Wilks: поліном 5-го ступеня.
3. Прочитайте результат: Формули дають різні порівняльні бали, не універсальний розряд. Цей IPF GL не призначений для окремого жиму чи екіпірувального триборства. Порівнюйте однакові дисципліни; вікові поправки не включені.

### Методика і формула

Вкажіть масу на зважуванні та суму найкращих успішних присідання, жиму й тяги в кілограмах. DOTS, класичний Wilks і IPF GL 2020 для класичного триборства. DOTS обмежує масу для коефіцієнта до 40–210 кг у чоловіків і 40–150 кг у жінок; поза межами використовує крайнє значення.

DOTS: Коефіцієнт = 500 / (A×Вага^4 + B×Вага^3 + C×Вага^2 + D×Вага + E); Бали DOTS = Сума (кг) × Коефіцієнт; IPF GL Points: 100 × Сума / (A − B × e^(−C × Вага)); Wilks: поліном 5-го ступеня.

### Обмеження

Формули дають різні порівняльні бали, не універсальний розряд. Цей IPF GL не призначений для окремого жиму чи екіпірувального триборства. Порівнюйте однакові дисципліни; вікові поправки не включені.

### Джерела

- [OpenPowerlifting. Reference DOTS implementation and attribution to Tim Konertz.](https://gitlab.com/openpowerlifting/opl-data/blob/main/crates/coefficients/src/dots.rs)
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
  title="Коефіцієнти триборства DOTS, Wilks і IPF GL" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
