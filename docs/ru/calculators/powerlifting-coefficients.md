# Коэффициенты троеборья DOTS, Wilks и IPF GL

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/powerlifting-coefficients.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/powerlifting-coefficients.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/ru/calculators/powerlifting-coefficients)

Введите массу на взвешивании и сумму лучших успешных приседа, жима и тяги в килограммах. Используются DOTS, классический Wilks и коэффициенты IPF GL 2020 для классического троеборья.

### Порядок использования

1. Введите исходные данные: Введите массу на взвешивании и сумму лучших успешных приседа, жима и тяги в килограммах. Используются DOTS, классический Wilks и коэффициенты IPF GL 2020 для классического троеборья. Коэффициент DOTS рассчитывается с ограничением массы 40–210 кг для мужчин и 40–150 кг для женщин; за границами используется крайнее значение массы.
2. Уточните параметры: DOTS: Коэффициент = 500 / (A×Вес^4 + B×Вес^3 + C×Вес^2 + D×Вес + E); Очки DOTS = Сумма (кг) × Коэффициент; IPF GL Points: 100 × Сумма / (A − B × e^(−C × Вес)); Wilks: полином 5-й степени.
3. Прочитайте результат: Формулы дают разные сравнительные баллы, а не универсальный спортивный разряд. IPF GL здесь не предназначен для отдельного жима или экипировочного троеборья. Сравнивайте одинаковые дисциплины; возрастные поправки не включены.

### Методика и формула

Введите массу на взвешивании и сумму лучших успешных приседа, жима и тяги в килограммах. Используются DOTS, классический Wilks и коэффициенты IPF GL 2020 для классического троеборья. Коэффициент DOTS рассчитывается с ограничением массы 40–210 кг для мужчин и 40–150 кг для женщин; за границами используется крайнее значение массы.

DOTS: Коэффициент = 500 / (A×Вес^4 + B×Вес^3 + C×Вес^2 + D×Вес + E); Очки DOTS = Сумма (кг) × Коэффициент; IPF GL Points: 100 × Сумма / (A − B × e^(−C × Вес)); Wilks: полином 5-й степени.

### Ограничения

Формулы дают разные сравнительные баллы, а не универсальный спортивный разряд. IPF GL здесь не предназначен для отдельного жима или экипировочного троеборья. Сравнивайте одинаковые дисциплины; возрастные поправки не включены.

### Источники

- [OpenPowerlifting. Reference DOTS implementation and attribution to Tim Konertz.](https://gitlab.com/openpowerlifting/opl-data/blob/main/crates/coefficients/src/dots.rs)
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
  title="Коэффициенты троеборья DOTS, Wilks и IPF GL" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
