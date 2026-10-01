# Калькулятор индекса TyG (триглицериды × глюкоза)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tyg-index.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tyg-index.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`tyg-index` · [NutriFit](https://nutrifit.health/ru/calculators/tyg-index)

Индекс TyG и производные TyG-BMI, TyG-WC: оценка инсулинорезистентности и кардиометаболического риска по триглицеридам и глюкозе натощак — без анализа на инсулин.

### Порядок использования

1. Возьмите триглицериды и глюкозу натощак: Оба показателя входят в стандартную биохимию крови. Важно, чтобы забор был натощак: триглицериды после еды вырастают в 1,5–2 раза и «раздувают» индекс.
2. Укажите единицы бланка: Формула определена для мг/дл. Если лаборатория выдала ммоль/л, оставьте переключатель в ммоль/л — калькулятор пересчитает в мг/дл автоматически.
3. Добавьте вес, рост и талию: TyG-BMI и TyG-WC точнее выявляют висцеральное ожирение и жировую болезнь печени, чем «чистый» TyG. Талию измеряйте на уровне пупка на выдохе.

### Методика и формула

Индекс TyG (Simental-Mendía, 2008) — натуральный логарифм половины произведения триглицеридов и глюкозы натощак в мг/дл. Он отражает липотоксичность и нарушение утилизации глюкозы — два ключевых механизма инсулинорезистентности — и коррелирует с эугликемическим клэмпом не хуже HOMA-IR, при этом не требует дорогого и плохо стандартизованного анализа на инсулин. Производные TyG-BMI и TyG-WC добавляют массу тела и окружность талии, повышая точность выявления метаболического синдрома и НАЖБП.

TyG = ln[ Триглицериды (мг/дл) × Глюкоза (мг/дл) / 2 ]
TyG-BMI = TyG × ИМТ (кг/м²)
TyG-WC = TyG × Окружность талии (см)
Пересчёт: ТГ мг/дл = ммоль/л × 88,57; глюкоза мг/дл = ммоль/л × 18,016

### Ограничения

Единого порога TyG нет: в разных популяциях граница высокого риска колеблется от 8,5 до 9,0, а в азиатских когортах — ниже. Индекс искажается при семейной гипертриглицеридемии, приёме фибратов, статинов и алкоголя накануне, а также при остром заболевании. Требуются значения натощак (8–12 ч). Индекс — скрининговый инструмент, а не диагноз.

### Источники

- [Simental-Mendía L.E., Rodríguez-Morán M., Guerrero-Romero F. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008;6(4):299–304](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F. et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010;95(7):3347–3351](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A. et al. Diagnostic accuracy of the triglyceride and glucose index for insulin resistance: a systematic review. Int J Endocrinol, 2020;2020:4678526](https://pubmed.ncbi.nlm.nih.gov/32256572/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tyg-index" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="tyg-index" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tyg-index?lang=ru&theme=auto"
  title="Калькулятор индекса TyG (триглицериды × глюкоза)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
