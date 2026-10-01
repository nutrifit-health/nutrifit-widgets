# Калькулятор дефицита железа: TSAT, ферритин и дефицит по Ганцони

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/iron-deficiency.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/iron-deficiency.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`iron-deficiency` · [NutriFit](https://nutrifit.health/ru/calculators/iron-deficiency)

TSAT, справочный порог ферритина с учётом СРБ и арифметическая модель Ганцони. Сочетания показателей не являются диагнозом.

### Порядок использования

1. Подготовьте результаты анализов: Используйте результаты одной лабораторной оценки: ферритин, железо, ОЖСС или трансферрин, Hb и СРБ. Подготовку к анализу уточните в лаборатории.
2. Добавьте СРБ: При измеренном СРБ выше 5 мг/л ориентир ферритина меняется с 15 на 70 мкг/л. Это не устраняет всю неопределённость интерпретации.
3. Обсудите сочетание показателей: Низкий Hb не всегда связан с железом, а отсутствие флага не исключает дефицит. Оцените результаты с учётом симптомов и клинической ситуации.

### Методика и формула

TSAT — отношение сывороточного железа к ОЖСС в одинаковых единицах. ОЖСС по трансферрину является приближением. Для справочного сопоставления ферритина используется WHO 2020: 15 мкг/л без воспаления и 70 мкг/л при СРБ > 5 мг/л. Болезни и клинический контекст могут требовать других порогов. Сочетание показателей не устанавливает причину анемии. Ганцони показывается при Hb ниже 120 г/л у женщин или 130 г/л у мужчин с фиксированной целью 150 г/л и депо 500 мг, только при массе ≥ 35 кг.

TSAT (%) = Железо сыворотки / ОЖСС × 100
ОЖСС (мкмоль/л) ≈ Трансферрин (г/л) × 25,1
Дефицит железа (мг, Ганцони) = Масса (кг) × (Целевой Hb − Hb, г/дл) × 2,4 + Депо (500 мг при массе ≥ 35 кг)
Пересчёт: железо мкг/дл × 0,179 = мкмоль/л; Hb г/л / 10 = г/дл

### Ограничения

Для взрослых вне беременности. Введите измеренный СРБ; неизвестный анализ нельзя считать нулевым. Ферритин и TSAT зависят от воспаления, лабораторного метода и недавнего лечения. Расчёт Ганцони не выбирает путь введения, препарат, дозу на приём или длительность курса.

### Источники

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni A.M. Intravenous iron-dextran: therapeutic and experimental possibilities. Schweiz Med Wochenschr, 1970;100(7):301–303](https://pubmed.ncbi.nlm.nih.gov/5413918/)
- [Venofer. Summary of Product Characteristics: Ganzoni formula and iron stores](https://www.medicines.org.uk/emc/product/5911/smpc)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="iron-deficiency" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="iron-deficiency" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/iron-deficiency?lang=ru&theme=auto"
  title="Калькулятор дефицита железа: TSAT, ферритин и дефицит по Ганцони" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
