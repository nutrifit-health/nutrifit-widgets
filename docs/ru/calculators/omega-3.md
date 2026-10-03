# Справочные ориентиры EPA и DHA

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/omega-3.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/omega-3.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/omega-3.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/omega-3.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/omega-3.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/omega-3.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`omega-3` · [NutriFit](https://nutrifit.health/ru/calculators/omega-3)

AI EFSA для взрослых — 250 мг EPA+DHA в сутки из пищи и добавок вместе. При беременности и лактации дополнительно к этому количеству указаны 100–200 мг DHA в сутки. Это не фиксированное соотношение EPA:DHA и не масса всего рыбьего жира.

### Порядок использования

1. Введите данные: AI EFSA для взрослых — 250 мг EPA+DHA в сутки из пищи и добавок вместе. При беременности и лактации дополнительно к этому количеству указаны 100–200 мг DHA в сутки. Это не фиксированное соотношение EPA:DHA и не масса всего рыбьего жира.
2. Сравните ориентиры: AI EFSA для взрослых — 250 мг EPA+DHA в сутки из пищи и добавок вместе. При беременности и лактации дополнительно к этому количеству указаны 100–200 мг DHA в сутки. Это не фиксированное соотношение EPA:DHA и не масса всего рыбьего жира.
3. Учитывайте ограничения: Ориентир не означает обязательный приём добавки и не заменяет оценку рациона. Форма не назначает лечение гипертриглицеридемии или депрессии и не диагностирует дефицит по омега-3 индексу. Лечебные препараты, взаимодействия и индивидуальные дозы обсуждаются с врачом.

### Методика и формула

AI EFSA для взрослых — 250 мг EPA+DHA в сутки из пищи и добавок вместе. При беременности и лактации дополнительно к этому количеству указаны 100–200 мг DHA в сутки. Это не фиксированное соотношение EPA:DHA и не масса всего рыбьего жира.

AI EFSA для взрослых — 250 мг EPA+DHA в сутки из пищи и добавок вместе. При беременности и лактации дополнительно к этому количеству указаны 100–200 мг DHA в сутки. Это не фиксированное соотношение EPA:DHA и не масса всего рыбьего жира.

### Ограничения

Ориентир не означает обязательный приём добавки и не заменяет оценку рациона. Форма не назначает лечение гипертриглицеридемии или депрессии и не диагностирует дефицит по омега-3 индексу. Лечебные препараты, взаимодействия и индивидуальные дозы обсуждаются с врачом.

### Источники

- [EFSA. Dietary Reference Values summary, 2017, Table 2](https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="omega-3" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="omega-3" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/omega-3?lang=ru&theme=auto"
  title="Справочные ориентиры EPA и DHA" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
