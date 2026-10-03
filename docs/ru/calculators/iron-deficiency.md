# Калькулятор дефицита железа: TSAT, ферритин и дефицит по Ганцони

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/iron-deficiency.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/iron-deficiency.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`iron-deficiency` · [NutriFit](https://nutrifit.health/ru/calculators/iron-deficiency)

TSAT = железо / ОЖСС × 100%. Модель Ганцони: масса × (15 − Hb в г/дл) × 2,4 + 500 мг для массы ≥ 35 кг. Она показывается только при Hb и ферритине ниже выбранных порогов.

### Порядок использования

1. Введите исходные данные: TSAT = железо / ОЖСС × 100%. Модель Ганцони: масса × (15 − Hb в г/дл) × 2,4 + 500 мг для массы ≥ 35 кг. Она показывается только при Hb и ферритине ниже выбранных порогов.
2. Уточните параметры: TSAT = железо / ОЖСС × 100%. Модель Ганцони: масса × (15 − Hb в г/дл) × 2,4 + 500 мг для массы ≥ 35 кг. Она показывается только при Hb и ферритине ниже выбранных порогов.
TIBC (µmol/L) = transferrin (g/L) × 25.1. Iron: µg/dL × 0.179 = µmol/L. Hb: g/L ÷ 10 = g/dL.
3. Прочитайте результат: Это описания лабораторных сочетаний, а не диагнозы. Пороги Hb 130 г/л для мужчин и 120 г/л для небеременных женщин; ферритин WHO 2020: 15 мкг/л, при СРБ > 5 мг/л — 70 мкг/л. Целевой Hb, масса и депо Ганцони требуют индивидуального выбора; результат не является дозой препарата.

### Методика и формула

TSAT = железо / ОЖСС × 100%. Модель Ганцони: масса × (15 − Hb в г/дл) × 2,4 + 500 мг для массы ≥ 35 кг. Она показывается только при Hb и ферритине ниже выбранных порогов.

TSAT = железо / ОЖСС × 100%. Модель Ганцони: масса × (15 − Hb в г/дл) × 2,4 + 500 мг для массы ≥ 35 кг. Она показывается только при Hb и ферритине ниже выбранных порогов.
TIBC (µmol/L) = transferrin (g/L) × 25.1. Iron: µg/dL × 0.179 = µmol/L. Hb: g/L ÷ 10 = g/dL.

### Ограничения

Это описания лабораторных сочетаний, а не диагнозы. Пороги Hb 130 г/л для мужчин и 120 г/л для небеременных женщин; ферритин WHO 2020: 15 мкг/л, при СРБ > 5 мг/л — 70 мкг/л. Целевой Hb, масса и депо Ганцони требуют индивидуального выбора; результат не является дозой препарата.

### Источники

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni AM. et al. [Intravenous iron-dextran: therapeutic and experimental possibilities]. Schweiz Med Wochenschr, 1970](https://pubmed.ncbi.nlm.nih.gov/5413918/)
- [Venofer. Summary of Product Characteristics: Ganzoni formula and iron stores](https://www.medicines.org.uk/emc/product/5911/smpc)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="iron-deficiency" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="iron-deficiency" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/iron-deficiency?lang=ru&theme=auto"
  title="Калькулятор дефицита железа: TSAT, ферритин и дефицит по Ганцони" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
