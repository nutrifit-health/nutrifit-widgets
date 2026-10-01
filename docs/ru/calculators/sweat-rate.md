# Калькулятор потоотделения и регидратации (Sweat Rate)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sweat-rate.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sweat-rate.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`sweat-rate` · [NutriFit](https://nutrifit.health/ru/calculators/sweat-rate)

Определяет индивидуальный темп потери жидкости с потом во время тренировки и формирует план восстановления водно-солевого баланса (125–150% от потерь).

### Порядок использования

1. Взвесьтесь перед тренировкой: Сходите в туалет и взвесьтесь без одежды на точных электронных весах.
2. Контролируйте питьё во время занятия: Пейте воду из отдельной бутылки с мерными делениями, чтобы точно знать выпитый объём в миллилитрах.
3. Взвесьтесь насухо после финиша: Насухо оботрите тело полотенцем перед взвешиванием. Внесите цифры в калькулятор и узнайте свой часовой расход пота.

### Методика и формула

Основан на методике Американского колледжа спортивной медицины (ACSM, 2007). Сравнение массы сухого обнажённого тела до и после нагрузки с поправкой на выпитую воду и выделенную мочу даёт точный объём потерянной жидкости. Потеря более 2% массы тела критически снижает физическую и когнитивную работоспособность.

Потери пота (мл) = (Вес_до − Вес_после, г) + Выпитая_вода (мл) − Моча (мл); Скорость (л/ч) = (Потери, мл / Время, мин) × 60 / 1000; % Дегидратации = (Потери / Вес_до) × 100; План восполнения = Потери × 1,25 – 1,50.

### Ограничения

Не учитывает метаболическую воду окисления субстратов (~50–100 г) и дыхательные потери влаги, что при тренировках короче 2 часов даёт пренебрежимо малую погрешность (< 3%). Взвешивание должно проводиться сухим без одежды.

### Источники

- [Sawka M.N. et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007;39(2):377–390](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas D.T., Erdman K.A., Burke L.M. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016;116(3):501–528](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs S.M., Sawka M.N. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011;29(Suppl 1):S39–S46](https://pubmed.ncbi.nlm.nih.gov/22150427/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sweat-rate" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="sweat-rate" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sweat-rate?lang=ru&theme=auto"
  title="Калькулятор потоотделения и регидратации (Sweat Rate)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
