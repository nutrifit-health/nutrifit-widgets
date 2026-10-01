# Йельская шкала пищевой зависимости mYFAS 2.0

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/yfas.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/yfas.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`yfas` · [NutriFit](https://nutrifit.health/ru/calculators/yfas)

Адаптированный научный опросник Йельского университета для диагностики признаков аддиктивного влечения к высококалорийной ультрапереработанной пище.

### Порядок использования

1. Вспомните проблемные продукты: Подумайте о продуктах, в отношении которых вам труднее всего остановиться (сладкое, снеки, выпечка).
2. Ответьте на 13 вопросов: Отметьте «Да», если это поведение наблюдалось регулярно за последние 12 месяцев.
3. Ознакомьтесь с оценкой симптомов: Узнайте количество совпавших диагностических симптомов и степень клинического влияния.

### Методика и формула

13 вопросов, базирующихся на 11 диагностических критериях расстройства употребления психоактивных веществ по DSM-5, примененных к еде, плюс 2 вопроса о клиническом дистрессе.

Диагноз пищевой зависимости требует наличия клинического дистресса/дезадаптации (вопросы 12 или 13) и не менее 2 симптомов. 2–3: легкая; 4–5: умеренная; ≥ 6: выраженная зависимость.

### Ограничения

Понятие «пищевая зависимость» является объектом научных дискуссий. Опросник выявляет компульсивное поведение по отношению к гипервкусной пище (сахар, жир, соль).

### Источники

- [Schulte E.M., Gearhardt A.N. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017;25(4):302–308](https://pubmed.ncbi.nlm.nih.gov/28543787/)
- [Gearhardt A.N. et al. Preliminary validation of the Yale Food Addiction Scale. Appetite, 2009;52(2):430–436](https://pubmed.ncbi.nlm.nih.gov/19028533/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="yfas" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="yfas" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/yfas?lang=ru&theme=auto"
  title="Йельская шкала пищевой зависимости mYFAS 2.0" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
