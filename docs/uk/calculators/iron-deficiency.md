# Калькулятор дефіциту заліза: TSAT, феритин та дефіцит за Ганзоні

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/iron-deficiency.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/iron-deficiency.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`iron-deficiency` · [NutriFit](https://nutrifit.health/uk/calculators/iron-deficiency)

TSAT = залізо / ЗЗЗС × 100%. Модель Ганцоні: маса × (15 − Hb у г/дл) × 2,4 + 500 мг для маси ≥ 35 кг. Її показують лише за Hb і феритину нижче обраних порогів.

### Порядок використання

1. Введіть вихідні дані: TSAT = залізо / ЗЗЗС × 100%. Модель Ганцоні: маса × (15 − Hb у г/дл) × 2,4 + 500 мг для маси ≥ 35 кг. Її показують лише за Hb і феритину нижче обраних порогів.
2. Уточніть параметри: TSAT = залізо / ЗЗЗС × 100%. Модель Ганцоні: маса × (15 − Hb у г/дл) × 2,4 + 500 мг для маси ≥ 35 кг. Її показують лише за Hb і феритину нижче обраних порогів.
TIBC (µmol/L) = transferrin (g/L) × 25.1. Iron: µg/dL × 0.179 = µmol/L. Hb: g/L ÷ 10 = g/dL.
3. Прочитайте результат: Це описові поєднання показників, а не діагнози. Пороги Hb: 130 г/л для чоловіків і 120 г/л для невагітних жінок; феритин WHO 2020: 15 мкг/л, за СРБ > 5 мг/л — 70 мкг/л. Цільовий Hb, маса й депо Ганцоні потребують індивідуального вибору; це не доза препарату.

### Методика і формула

TSAT = залізо / ЗЗЗС × 100%. Модель Ганцоні: маса × (15 − Hb у г/дл) × 2,4 + 500 мг для маси ≥ 35 кг. Її показують лише за Hb і феритину нижче обраних порогів.

TSAT = залізо / ЗЗЗС × 100%. Модель Ганцоні: маса × (15 − Hb у г/дл) × 2,4 + 500 мг для маси ≥ 35 кг. Її показують лише за Hb і феритину нижче обраних порогів.
TIBC (µmol/L) = transferrin (g/L) × 25.1. Iron: µg/dL × 0.179 = µmol/L. Hb: g/L ÷ 10 = g/dL.

### Обмеження

Це описові поєднання показників, а не діагнози. Пороги Hb: 130 г/л для чоловіків і 120 г/л для невагітних жінок; феритин WHO 2020: 15 мкг/л, за СРБ > 5 мг/л — 70 мкг/л. Цільовий Hb, маса й депо Ганцоні потребують індивідуального вибору; це не доза препарату.

### Джерела

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni AM. et al. [Intravenous iron-dextran: therapeutic and experimental possibilities]. Schweiz Med Wochenschr, 1970](https://pubmed.ncbi.nlm.nih.gov/5413918/)
- [Venofer. Summary of Product Characteristics: Ganzoni formula and iron stores](https://www.medicines.org.uk/emc/product/5911/smpc)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="iron-deficiency" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="iron-deficiency" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/iron-deficiency?lang=uk&theme=auto"
  title="Калькулятор дефіциту заліза: TSAT, феритин та дефіцит за Ганзоні" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
