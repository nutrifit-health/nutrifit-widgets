# Калькулятор индексов талии (WHtR, WHR, VAI)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/waist-ratios.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/waist-ratios.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/waist-ratios.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/waist-ratios.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/waist-ratios.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/waist-ratios.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`waist-ratios` · [NutriFit](https://nutrifit.health/ru/calculators/waist-ratios)

Оценивает распределение жировой ткани, висцеральное ожирение и кардиометаболический риск точнее стандартного ИМТ.

### Порядок использования

1. Найдите правильную линию талии: Талию измеряют не на уровне пупка и не на уровне брючного ремня, а ровно посередине между нижним краем рёбер и верхней точкой тазовой кости.
2. Сделайте замер бёдер: Оберните ленту вокруг самой широкой выступающей части ягодиц, лента должна быть строго параллельна полу.
3. Проверьте отношение к росту: Разделите талию на рост: если значение 0,50 или выше — пора пересмотреть питание и уровень активности.

### Методика и формула

Окружность талии отражает объём опасного висцерального жира вокруг внутренних органов. Отношение талии к росту (WHtR) подчиняется правилу Маргарет Эшвелл: талия должна быть меньше половины роста. Отношение талии к бёдрам (WHR) оценивает тип распределения жира (яблоко/груша) по критериям ВОЗ. Индекс висцерального ожирения (VAI, Amato et al., 2010) комбинирует антропометрию с триглицеридами и ЛПВП.

WHtR = Талия / Рост; WHR = Талия / Бёдра; VAI (муж) = [Талия / (39,68 + 1,88×ИМТ)] × (ТГ / 1,03) × (1,31 / ЛПВП); VAI (жен) = [Талия / (36,58 + 1,89×ИМТ)] × (ТГ / 0,81) × (1,52 / ЛПВП).

### Ограничения

Не информативен во время беременности, при асците и выраженном вздутии живота. Замеры должны производиться строго на выдохе по анатомическим ориентирам.

### Источники

- [Ashwell M., Gunn P., Gibson S. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012;13(3):275–286](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato M.C. et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010;33(4):920–922](https://pubmed.ncbi.nlm.nih.gov/20067971/)

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
  title="Калькулятор индексов талии (WHtR, WHR, VAI)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
