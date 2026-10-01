# Калькулятор МПК (VO2max)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vo2max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vo2max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`vo2max` · [NutriFit](https://nutrifit.health/ru/calculators/vo2max)

Оценивает аэробную мощность и кардиореспираторную выносливость в мл/кг/мин, прогнозирует соревновательный темп на 5 км и 10 км.

### Порядок использования

1. Выберите подходящий протокол: Бегунам рекомендуется 12-минутный тест Купера на стадионе. Людям без беговой подготовки или с избыточным весом безопаснее пройти 1 милю (1609 м) быстрой ходьбой по тесту Рокпорт.
2. Зафиксируйте показатели: В тесте Купера измерьте точное расстояние по GPS или дорожкам стадиона (400 м). В тесте Рокпорт засеките время с точностью до секунды и пульс за первые 10 секунд после финиша.
3. Оцените прогноз и темп: Калькулятор сопоставит ваш результат со сверстниками того же пола и покажет ориентировочный соревновательный темп.

### Методика и формула

В калькуляторе реализованы три научно подтверждённых полевых протокола: 12-минутный беговой тест Кеннета Купера (1968), одномильный тест ходьбы Рокпорт (Kline et al., 1987) и формула соотношения пульса (Uth et al., 2004). Категория физической подготовки определяется по таблицам Cooper Institute.

Купер: VO2max = (Дистанция, м − 504,9) / 44,73; Рокпорт: 132,853 − 0,0769×Вес_фунт − 0,3877×Возраст + 6,315×Пол − 3,2649×Время_мин − 0,1565×ЧСС; Uth: 15,3 × (ЧСС max / ЧСС покоя).

### Ограничения

Полевые тесты являются непрямой оценкой с корреляцией r ≈ 0,85–0,92 с лабораторным газоанализом. На результат влияют мотивация, рельеф трассы, погода и точность замера ЧСС.

### Источники

- [Cooper K.H. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968;203(3):201–204](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline G.M. et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987;19(3):253–259](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N. et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004;91(1):111–115](https://pubmed.ncbi.nlm.nih.gov/14624296/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vo2max" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="vo2max" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vo2max?lang=ru&theme=auto"
  title="Калькулятор МПК (VO2max)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
