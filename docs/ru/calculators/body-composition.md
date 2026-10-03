# Состав тела по обхватам и ИМТ

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/body-composition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/body-composition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/body-composition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/body-composition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/body-composition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/body-composition.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`body-composition` · [NutriFit](https://nutrifit.health/ru/calculators/body-composition)

Историческая модель Hodgdon–Beckett (1984) оценивает жир по росту и обхватам. Мужчины: живот на уровне пупка и шея; женщины: естественная узкая талия, бёдра в самом широком месте и шея. ИМТ = масса / рост².

### Порядок использования

1. Введите исходные данные: Историческая модель Hodgdon–Beckett (1984) оценивает жир по росту и обхватам. Мужчины: живот на уровне пупка и шея; женщины: естественная узкая талия, бёдра в самом широком месте и шея. ИМТ = масса / рост².
2. Уточните параметры: Историческая модель Hodgdon–Beckett (1984) оценивает жир по росту и обхватам. Мужчины: живот на уровне пупка и шея; женщины: естественная узкая талия, бёдра в самом широком месте и шея. ИМТ = масса / рост².
3. Прочитайте результат: Оценка жира по обхватам не заменяет измерение состава тела и не является текущим официальным стандартом Navy. Категории ACE — справочные категории процента жира, не диагноз; ИМТ — отдельная классификация взрослых. При неприменимых обхватах результат не рассчитывается.

### Методика и формула

Историческая модель Hodgdon–Beckett (1984) оценивает жир по росту и обхватам. Мужчины: живот на уровне пупка и шея; женщины: естественная узкая талия, бёдра в самом широком месте и шея. ИМТ = масса / рост².

Мужчины: %жира = 495 / (1,0324 − 0,19077 × log₁₀(талия − шея) + 0,15456 × log₁₀(рост)) − 450; Женщины: %жира = 495 / (1,29579 − 0,35004 × log₁₀(талия + бёдра − шея) + 0,221 × log₁₀(рост)) − 450; ИМТ = вес / рост²

### Ограничения

Оценка жира по обхватам не заменяет измерение состава тела и не является текущим официальным стандартом Navy. Категории ACE — справочные категории процента жира, не диагноз; ИМТ — отдельная классификация взрослых. При неприменимых обхватах результат не рассчитывается.

### Источники

- [Hodgdon J.A., Beckett M.B. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center, 1984](https://apps.dtic.mil/sti/citations/ADA143890)
- [WHO. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894, 2000](https://www.who.int/publications/i/item/WHO_TRS_894)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="body-composition" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="body-composition" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/body-composition?lang=ru&theme=auto"
  title="Состав тела по обхватам и ИМТ" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
