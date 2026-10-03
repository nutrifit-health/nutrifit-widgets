# Авторский планировщик БЖУ

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/macros.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/macros.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`macros` · [NutriFit](https://nutrifit.health/ru/calculators/macros)

Белок: выбранные пресеты 1,8–2,2 г/кг для снижения, 1,4–1,8 для удержания, 1,8–2,4 для набора; жир 0,8–1,2 г/кг. Используются середины диапазонов; углеводы — остаток калорий при коэффициентах 4/9/4 ккал/г.

### Порядок использования

1. Введите исходные данные: Белок: выбранные пресеты 1,8–2,2 г/кг для снижения, 1,4–1,8 для удержания, 1,8–2,4 для набора; жир 0,8–1,2 г/кг. Используются середины диапазонов; углеводы — остаток калорий при коэффициентах 4/9/4 ккал/г.
2. Уточните параметры: Белок: выбранные пресеты 1,8–2,2 г/кг для снижения, 1,4–1,8 для удержания, 1,8–2,4 для набора; жир 0,8–1,2 г/кг. Используются середины диапазонов; углеводы — остаток калорий при коэффициентах 4/9/4 ккал/г.
3. Прочитайте результат: Это авторское распределение, не дословные нормы ISSN и не физиологический минимум жиров. Если белки и жиры превышают калорийность, полноценный результат не выдаётся. AMDR жиров 20–35% для взрослых — отдельный справочный диапазон, не персональное назначение.

### Методика и формула

Белок: выбранные пресеты 1,8–2,2 г/кг для снижения, 1,4–1,8 для удержания, 1,8–2,4 для набора; жир 0,8–1,2 г/кг. Используются середины диапазонов; углеводы — остаток калорий при коэффициентах 4/9/4 ккал/г.

Белок(г) = вес × коэффициент цели; Жир(г) = вес × 0,8…1,2; Углеводы(г) = (калорийность − белок × 4 − жир × 9) / 4

### Ограничения

Это авторское распределение, не дословные нормы ISSN и не физиологический минимум жиров. Если белки и жиры превышают калорийность, полноценный результат не выдаётся. AMDR жиров 20–35% для взрослых — отдельный справочный диапазон, не персональное назначение.

### Источники

- [Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids, 2005 (AMDR)](https://nap.nationalacademies.org/catalog/10490)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="macros" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="macros" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/macros?lang=ru&theme=auto"
  title="Авторский планировщик БЖУ" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
