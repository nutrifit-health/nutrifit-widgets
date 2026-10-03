# Оценка потерь пота за тренировку

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sweat-rate.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sweat-rate.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`sweat-rate` · [NutriFit](https://nutrifit.health/ru/calculators/sweat-rate)

Пот (л) ≈ масса до − масса после (кг) + выпитое (л) − моча (л); скорость = пот / время в часах. Взвешивайтесь в одинаковых условиях без мокрой одежды.

### Порядок использования

1. Введите исходные данные: Пот (л) ≈ масса до − масса после (кг) + выпитое (л) − моча (л); скорость = пот / время в часах. Взвешивайтесь в одинаковых условиях без мокрой одежды.
2. Уточните параметры: Потери пота (мл) = (Вес_до − Вес_после, г) + Выпитая_вода (мл) − Моча (мл); Скорость (л/ч) = (Потери, мл / Время, мин) × 60 / 1000; % Дегидратации = (Потери / Вес_до) × 100; План восполнения = Потери × 1,25 – 1,50.
3. Прочитайте результат: Процент потери массы не является диагнозом обезвоживания; отрицательное значение означает прибавку. NATA (2017): 100–150% чистой потери массы — условный ориентир восполнения после нагрузки, особенно при восстановлении менее четырёх часов. Это не обязательный объём для всех и не темп питья во время нагрузки.

### Методика и формула

Пот (л) ≈ масса до − масса после (кг) + выпитое (л) − моча (л); скорость = пот / время в часах. Взвешивайтесь в одинаковых условиях без мокрой одежды.

Пот (л) ≈ масса до − масса после (кг) + выпитое (л) − моча (л); скорость = пот / время в часах. Взвешивайтесь в одинаковых условиях без мокрой одежды.

### Ограничения

Процент потери массы не является диагнозом обезвоживания; отрицательное значение означает прибавку. NATA (2017): 100–150% чистой потери массы — условный ориентир восполнения после нагрузки, особенно при восстановлении менее четырёх часов. Это не обязательный объём для всех и не темп питья во время нагрузки.

### Источники

- [NATA. Fluid Replacement for the Physically Active, 2017.](https://nata.kglmeridian.com/view/journals/attr/52/9/article-p877.xml)
- [American College of Sports Medicine et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas DT et al. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs SM et al. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011](https://pubmed.ncbi.nlm.nih.gov/22150427/)

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
  title="Оценка потерь пота за тренировку" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
