# Калькулятор коэффициентов пауэрлифтинга (DOTS, Wilks, IPF GL)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/powerlifting-coefficients.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/powerlifting-coefficients.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/ru/calculators/powerlifting-coefficients)

Сравнивает абсолютную силу атлетов разных весовых категорий и пола в троеборье (присед, жим, тяга) по формулам DOTS, Wilks и IPF GL Points.

### Порядок использования

1. Сложите лучшие веса в трёх движениях: Суммируйте максимальный вес в приседаниях, жиме лёжа и становой тяге, выполненных по соревновательным правилам.
2. Укажите точный собственный вес на взвешивании: Используйте утренний вес на соревновательном взвешивании (до выхода на помост).
3. Оцените свои баллы DOTS и IPF GL: Сравните результат со шкалой мастерства: 300 очков — крепкий любитель, 400 — кандидат в мастера спорта, 500 — элита.

### Методика и формула

Закон аллометрического масштабирования показывает, что сила мышц пропорциональна площади их поперечного сечения (рост в квадрате), тогда как масса тела растёт пропорционально объёму (рост в кубе). Коэффициенты пауэрлифтинга используют полиномиальные уравнения высоких порядков, чтобы уравнять шансы легковесов и тяжеловесов.

DOTS: Коэффициент = 500 / (A×Вес^4 + B×Вес^3 + C×Вес^2 + D×Вес + E); Очки DOTS = Сумма (кг) × Коэффициент; IPF GL Points: 100 × Сумма / (A − B × e^(−C × Вес)); Wilks: полином 5-й степени.

### Ограничения

Предназначены для стандартного соревновательного троеборья (пауэрлифтинг). Не применяются для гиревого спорта, тяжелой атлетики (где используется формула Синклера) или армрестлинга.

### Источники

- [Perotti L. et al. The DOTS Formula: A new formula for evaluating strength athletes across weight classes, 2019](https://pubmed.ncbi.nlm.nih.gov/31804245/)
- [Wilks R. The Wilks Formula for Powerlifting. Australian Powerlifting Federation, 1997](https://www.powerlifting.sport/)
- [International Powerlifting Federation. IPF GL Points Formula for Classic and Equipped Powerlifting, 2020](https://www.powerlifting.sport/rules/codes/info/ipf-formula)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="powerlifting-coefficients" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="powerlifting-coefficients" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/powerlifting-coefficients?lang=ru&theme=auto"
  title="Калькулятор коэффициентов пауэрлифтинга (DOTS, Wilks, IPF GL)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
