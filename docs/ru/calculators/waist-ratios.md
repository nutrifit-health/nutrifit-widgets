# Индексы талии WHR, WHtR и VAI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/waist-ratios.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/waist-ratios.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/waist-ratios.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/waist-ratios.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/waist-ratios.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/waist-ratios.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`waist-ratios` · [NutriFit](https://nutrifit.health/ru/calculators/waist-ratios)

WHR = талия / бёдра; WHtR = талия / рост. Талию измеряют между нижним ребром и верхом таза после спокойного выдоха, бёдра — в самом широком месте. VAI дополнительно использует массу, ТГ и ЛПВП в ммоль/л по Amato (2010).

### Порядок использования

1. Введите исходные данные: WHR = талия / бёдра; WHtR = талия / рост. Талию измеряют между нижним ребром и верхом таза после спокойного выдоха, бёдра — в самом широком месте. VAI дополнительно использует массу, ТГ и ЛПВП в ммоль/л по Amato (2010).
2. Уточните параметры: WHtR = Талия / Рост; WHR = Талия / Бёдра; VAI (муж) = [Талия / (39,68 + 1,88×ИМТ)] × (ТГ / 1,03) × (1,31 / ЛПВП); VAI (жен) = [Талия / (35,58 + 1,89×ИМТ)] × (ТГ / 0,81) × (1,52 / ЛПВП).
3. Прочитайте результат: Ни один индекс не измеряет непосредственно висцеральный жир. Малое отношение талии к росту не устанавливает недостаток массы; универсальные категории WHR и VAI не присваиваются. Рекомендации NICE по WHtR относятся к взрослым с ИМТ < 35.

### Методика и формула

WHR = талия / бёдра; WHtR = талия / рост. Талию измеряют между нижним ребром и верхом таза после спокойного выдоха, бёдра — в самом широком месте. VAI дополнительно использует массу, ТГ и ЛПВП в ммоль/л по Amato (2010).

WHtR = Талия / Рост; WHR = Талия / Бёдра; VAI (муж) = [Талия / (39,68 + 1,88×ИМТ)] × (ТГ / 1,03) × (1,31 / ЛПВП); VAI (жен) = [Талия / (35,58 + 1,89×ИМТ)] × (ТГ / 0,81) × (1,52 / ЛПВП).

### Ограничения

Ни один индекс не измеряет непосредственно висцеральный жир. Малое отношение талии к росту не устанавливает недостаток массы; универсальные категории WHR и VAI не присваиваются. Рекомендации NICE по WHtR относятся к взрослым с ИМТ < 35.

### Источники

- [Ashwell M et al. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato MC et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010](https://pubmed.ncbi.nlm.nih.gov/20067971/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="waist-ratios" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="waist-ratios" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/waist-ratios?lang=ru&theme=auto"
  title="Индексы талии WHR, WHtR и VAI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
