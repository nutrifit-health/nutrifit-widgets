# Натрий и калий в суточном рационе

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sodium-potassium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sodium-potassium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`sodium-potassium` · [NutriFit](https://nutrifit.health/ru/calculators/sodium-potassium)

Для взрослых WHO рекомендует менее 2000 мг натрия и не менее 3510 мг калия в сутки. Молярное отношение: (Na, мг / 23) / (K, мг / 39,1). Приблизительный солевой эквивалент: натрий, мг × 2,5 / 1000. Отношение показано без категории индивидуального риска.

### Порядок использования

1. Введите данные: Для взрослых WHO рекомендует менее 2000 мг натрия и не менее 3510 мг калия в сутки. Молярное отношение: (Na, мг / 23) / (K, мг / 39,1). Приблизительный солевой эквивалент: натрий, мг × 2,5 / 1000. Отношение показано без категории индивидуального риска.
2. Сравните ориентиры: Для взрослых WHO рекомендует менее 2000 мг натрия и не менее 3510 мг калия в сутки. Молярное отношение: (Na, мг / 23) / (K, мг / 39,1). Приблизительный солевой эквивалент: натрий, мг × 2,5 / 1000. Отношение показано без категории индивидуального риска.
3. Учитывайте ограничения: Введите потребление с пищей за одни сутки, а не концентрации анализа крови или мочи. Общий ориентир калия не применяют автоматически при нарушенном его выведении, болезни почек или лекарственной терапии, влияющей на калий. Гипертензия сама по себе не определяет здесь новую персональную норму.

### Методика и формула

Для взрослых WHO рекомендует менее 2000 мг натрия и не менее 3510 мг калия в сутки. Молярное отношение: (Na, мг / 23) / (K, мг / 39,1). Приблизительный солевой эквивалент: натрий, мг × 2,5 / 1000. Отношение показано без категории индивидуального риска.

Для взрослых WHO рекомендует менее 2000 мг натрия и не менее 3510 мг калия в сутки. Молярное отношение: (Na, мг / 23) / (K, мг / 39,1). Приблизительный солевой эквивалент: натрий, мг × 2,5 / 1000. Отношение показано без категории индивидуального риска.

### Ограничения

Введите потребление с пищей за одни сутки, а не концентрации анализа крови или мочи. Общий ориентир калия не применяют автоматически при нарушенном его выведении, болезни почек или лекарственной терапии, влияющей на калий. Гипертензия сама по себе не определяет здесь новую персональную норму.

### Источники

- [WHO. Healthy diet: sodium and potassium](https://www.who.int/news-room/fact-sheets/detail/healthy-diet)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sodium-potassium" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="sodium-potassium" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sodium-potassium?lang=ru&theme=auto"
  title="Натрий и калий в суточном рационе" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
