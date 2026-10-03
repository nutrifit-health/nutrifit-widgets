# Калькулятор индекса TyG (триглицериды × глюкоза)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tyg-index.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tyg-index.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`tyg-index` · [NutriFit](https://nutrifit.health/ru/calculators/tyg-index)

Исследовательский индекс по триглицеридам и глюкозе натощак, с производными TyG-BMI и TyG-WC.

### Порядок использования

1. Возьмите триглицериды и глюкозу натощак: Оба показателя входят в стандартную биохимию крови. Важно, чтобы забор был натощак: триглицериды после еды вырастают в 1,5–2 раза и «раздувают» индекс.
2. Укажите единицы бланка: Формула определена для мг/дл. Если лаборатория выдала ммоль/л, оставьте переключатель в ммоль/л — калькулятор пересчитает в мг/дл автоматически.
3. Добавьте вес, рост и талию: TyG-BMI и TyG-WC точнее выявляют висцеральное ожирение и жировую болезнь печени, чем «чистый» TyG. Талию измеряйте на уровне пупка на выдохе.

### Методика и формула

Здесь используется вариант ln(TG × глюкоза / 2), обе концентрации в мг/дл, как в Lee et al. (2018). Другой опубликованный вариант — ln(TG × глюкоза)/2 — имеет другую числовую шкалу; его пороги нельзя переносить сюда.

TyG = ln[TG (мг/дл) × глюкоза (мг/дл) / 2]. TyG-BMI = TyG × ИМТ; TyG-WC = TyG × талия (см).

### Ограничения

Универсальных диагностических порогов для этого расчёта не установлено. Индекс не подтверждает инсулинорезистентность, диабет или сердечно-сосудистое заболевание.

### Источники

- [Lee J.W., Lim N.K., Park H.Y. TyG and type 2 diabetes risk in middle-aged Koreans. BMC Endocr Disord, 2018;18:33](https://link.springer.com/article/10.1186/s12902-018-0259-x)
- [Simental-Mendía LE et al. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A et al. Diagnostic Accuracy of the Triglyceride and Glucose Index for Insulin Resistance: A Systematic Review. Int J Endocrinol, 2020](https://pubmed.ncbi.nlm.nih.gov/32256572/)

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
