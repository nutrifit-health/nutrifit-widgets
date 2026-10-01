# Шкала риска диабета FINDRISC

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/findrisc.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/findrisc.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/findrisc.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/findrisc.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/findrisc.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/findrisc.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`findrisc` · [NutriFit](https://nutrifit.health/ru/calculators/findrisc)

Международно признанный опросник ВОЗ и IDF для раннего скрининга скрытого диабета и оценки риска манифестации СД 2 типа за 10 лет.

### Порядок использования

1. Укажите возраст и антропометрию: Выберите возрастную группу, категорию ИМТ и окружность талии, измеренную сантиметровой лентой посередине между нижним ребром и гребнем подвздошной кости.
2. Оцените образ жизни и питание: Отметьте, уделяете ли вы физической активности не менее 30 минут в день и употребляете ли овощи, фрукты или ягоды ежедневно.
3. Укажите медицинский анамнез: Отметьте прием препаратов от давления, случаи повышенного сахара в прошлом и наличие диабета у кровных родственников.

### Методика и формула

Суммирование 8 доказанных факторов риска: возраст, ИМТ, окружность талии, физическая активность, овощи в рационе, антигипертензивная терапия, гликемия в анамнезе и наследственность.

Балл FINDRISC = Возраст (0–4) + ИМТ (0–3) + Талия (0–4) + Физактивность (0/2) + Овощи (0/1) + Препараты АД (0/2) + Глюкоза в анамнезе (0/5) + Наследственность (0/3/5). Итого: 0–26 баллов.

### Ограничения

Шкала является скрининговым предиктивным инструментом и не заменяет лабораторную диагностику (глюкоза плазмы натощак, HbA1c, пероральный глюкозотолерантный тест).

### Источники

- [Lindström J., Tuomilehto J. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003;26(3):725–731](https://pubmed.ncbi.nlm.nih.gov/12610029/)
- [International Diabetes Federation (IDF). Clinical Practice Recommendations for managing Type 2 Diabetes in Primary Care, 2017](https://www.idf.org/our-activities/care-prevention/clinical-practice-recommendations/)
- [Saaristo T. et al. FINDRISC as an early intervention tool in primary health care. Diabetes Care, 2005;28(12):2900–2907](https://pubmed.ncbi.nlm.nih.gov/16316578/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="findrisc" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="findrisc" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/findrisc?lang=ru&theme=auto"
  title="Шкала риска диабета FINDRISC" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
