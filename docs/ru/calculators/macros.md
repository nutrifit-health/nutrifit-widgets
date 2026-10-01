# Калькулятор БЖУ

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/macros.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/macros.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`macros` · [NutriFit](https://nutrifit.health/ru/calculators/macros)

Распределяет суточную калорийность по белкам, жирам и углеводам с учётом массы тела и цели — в граммах, калориях и процентах.

### Порядок использования

1. Выберите способ расчёта: Укажите уже известную норму калорий или позвольте NutriFit рассчитать суточный расход энергии (TDEE) на основе возраста, пола, роста, веса и уровня активности.
2. Укажите параметры и цель: Выберите цель: похудение (дефицит 20%), поддержание веса или набор мышечной массы (профицит 15%). Ввод веса доступен в кг и фунтах.
3. Получите индивидуальный план БЖУ: Мгновенно узнайте норму белков, жиров и углеводов в граммах, калориях и процентах от рациона с научно обоснованными диапазонами.

### Методика и формула

Белок и жир считаются от массы тела, а не от доли калорий: это физиологические потребности, которые не должны меняться вслед за калорийностью. Норма белка берётся из позиции ISSN (1,4–2,4 г/кг в зависимости от цели). Жиры оцениваются в практическом диапазоне 0,8–1,2 г/кг, а полученный процент энергии сопоставляется с референсным диапазоном AMDR 20–35%. Углеводы получают остаток калорийности: они закрывают энергию тренировок и работу мозга.

Белок(г) = вес × коэффициент цели; Жир(г) = вес × 0,8…1,2; Углеводы(г) = (калорийность − белок × 4 − жир × 9) / 4

### Ограничения

Расчёт от общей массы тела завышает норму белка при выраженном ожирении — в этом случае корректнее считать на безжировую массу тела. Схема не учитывает распределение нутриентов по приёмам пищи, клетчатку и индивидуальную переносимость углеводов.

### Источники

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: Protein and Exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
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
  title="Калькулятор БЖУ" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
