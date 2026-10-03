# Калькулятор анионной разницы и дельта-отношения

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/anion-gap.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/anion-gap.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`anion-gap` · [NutriFit](https://nutrifit.health/ru/calculators/anion-gap)

Анионная разница = Na − Cl − HCO₃; поправка на альбумин = 0,25 × (40 − альбумин в г/л). Дельта-отношение = (скорректированная разница − выбранный референс) / (референсный бикарбонат − HCO₃).

### Порядок использования

1. Введите исходные данные: Анионная разница = Na − Cl − HCO₃; поправка на альбумин = 0,25 × (40 − альбумин в г/л). Дельта-отношение = (скорректированная разница − выбранный референс) / (референсный бикарбонат − HCO₃).
2. Уточните параметры: Анионная разница = Na − Cl − HCO₃; поправка на альбумин = 0,25 × (40 − альбумин в г/л). Дельта-отношение = (скорректированная разница − выбранный референс) / (референсный бикарбонат − HCO₃).
Референсы зависят от лабораторного метода. Дельта рассчитывается только при положительных числителе и знаменателе. По одному числу без pH, газов крови и клинического контекста диагноз не устанавливается.
3. Прочитайте результат: Референсы зависят от лабораторного метода. Дельта рассчитывается только при положительных числителе и знаменателе. По одному числу без pH, газов крови и клинического контекста диагноз не устанавливается.

### Методика и формула

Анионная разница = Na − Cl − HCO₃; поправка на альбумин = 0,25 × (40 − альбумин в г/л). Дельта-отношение = (скорректированная разница − выбранный референс) / (референсный бикарбонат − HCO₃).

Анионная разница = Na − Cl − HCO₃; поправка на альбумин = 0,25 × (40 − альбумин в г/л). Дельта-отношение = (скорректированная разница − выбранный референс) / (референсный бикарбонат − HCO₃).
Референсы зависят от лабораторного метода. Дельта рассчитывается только при положительных числителе и знаменателе. По одному числу без pH, газов крови и клинического контекста диагноз не устанавливается.

### Ограничения

Референсы зависят от лабораторного метода. Дельта рассчитывается только при положительных числителе и знаменателе. По одному числу без pH, газов крови и клинического контекста диагноз не устанавливается.

### Источники

- [Kraut JA et al. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J et al. Anion gap and hypoalbuminemia. Crit Care Med, 1998](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K et al. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014](https://pubmed.ncbi.nlm.nih.gov/25295502/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="anion-gap" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="anion-gap" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/anion-gap?lang=ru&theme=auto"
  title="Калькулятор анионной разницы и дельта-отношения" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
