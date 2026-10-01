# Калькулятор циклов сна

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sleep-cycles.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sleep-cycles.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sleep-cycles.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sleep-cycles.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sleep-cycles.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sleep-cycles.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`sleep-cycles` · [NutriFit](https://nutrifit.health/ru/calculators/sleep-cycles)

Инструмент расчета времени сна на основе 90-минутных ультрадианных циклов (фазы медленного и быстрого сна) и среднего времени засыпания.

### Порядок использования

1. Выберите направление расчета: Определите, что вам нужно: узнать, во сколько лечь спать, чтобы проснуться к будильнику, или во сколько завести будильник, если ложитесь сейчас.
2. Задайте латентность засыпания: По умолчанию установлено 14 минут. Если вы обычно ворочаетесь дольше или засыпаете мгновенно, скорректируйте это значение.
3. Выберите цепочку из 5 или 6 циклов: 5 циклов (7 ч 30 мин) идеально подходят для рабочих дней, 6 циклов (9 ч) — для интенсивных тренировок или восстановления после недосыпа.

### Методика и формула

Расчет основан на модели ультрадианных циклов продолжительностью 90 минут, объединяющих стадии NREM (медленный сон) и REM (быстрый сон). Пробуждение на границе циклов предотвращает инерцию сна.

Время пробуждения = Время отбоя + Засыпание (14 мин) + N × 90 мин. Время отбоя = Время пробуждения - (N × 90 мин) - Засыпание (14 мин).

### Ограничения

Калькулятор использует среднюю продолжительность цикла 90 минут. Индивидуальный цикл может варьироваться от 70 до 120 минут. При хронических расстройствах сна необходима полисомнография.

### Источники

- [Carskadon M.A., Dement W.C. Normal Human Sleep: An Overview. Principles and Practice of Sleep Medicine, 2011;5:16–26](https://doi.org/10.1016/B978-1-4160-6645-3.00002-5)
- [Hirshkowitz M. et al. National Sleep Foundation’s sleep time duration recommendations: methodology and results summary. Sleep Health, 2015;1(1):40–43](https://pubmed.ncbi.nlm.nih.gov/29073412/)
- [Dijk D.J., Czeisler C.A. Contribution of the circadian pacemaker and the homeostatic process to the timing of human sleep. Sleep, 1995;18(5):285–304](https://pubmed.ncbi.nlm.nih.gov/7676163/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sleep-cycles" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="sleep-cycles" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sleep-cycles?lang=ru&theme=auto"
  title="Калькулятор циклов сна" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
