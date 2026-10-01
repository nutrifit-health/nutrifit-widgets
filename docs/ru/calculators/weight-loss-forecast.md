# Калькулятор динамического прогноза снижения веса (модель Кевина Холла)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/weight-loss-forecast.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/weight-loss-forecast.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/ru/calculators/weight-loss-forecast)

Строит реалистичную нелинейную траекторию похудения на основе метаболической модели Кевина Холла (NIH), учитывая адаптивное замедление обмена и сохранение мышц.

### Порядок использования

1. Держите умеренный дефицит (15–20%): Дефицит в 300–500 ккал комфортен для психики и защищает мышечную ткань от катаболизма, минимизируя срывы.
2. Потребляйте достаточно белка: Норма белка 1,8–2,4 г/кг на дефиците гарантирует, что до 85–90% сброшенного веса придётся именно на подкожный и висцеральный жир.
3. Планируйте диетические паузы (Diet Breaks): Каждые 8–12 недель похудения делайте 1–2 недели питания на уровне поддержки (TDEE). Это перезагружает гормоны лептин и Т3, снимая метаболическую адаптацию.

### Методика и формула

Классическое правило Уишнофски (1958 г., «дефицит 7700 ккал = сброс 1 кг») ошибочно предполагает постоянную скорость похудения. Динамическая модель Кевина Холла (Lancet, 2011; NIH/NIDDK) математически доказывает, что каждый сброшенный килограмм снижает базовый расход, вызывая неизбежное плато. Доли потерь жира и мышц рассчитываются по уравнению Форбса.

Метаболическая адаптация = 22 ккал/кг потери + адаптивный термогенез; Эффективный дефицит = Заданный дефицит − Адаптация; Доля потери жира p = Forbes(F, W); Динамический вес(t) моделируется методом численного интегрирования неделя за неделей.

### Ограничения

Предполагает 100% соблюдение заданного дефицита калорий без читмилов. Задержка воды при стрессе (кортизол) может временно маскировать потерю жира на весах.

### Источники

- [Hall K.D. et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011;378(9793):826–837](https://pubmed.ncbi.nlm.nih.gov/21872751/)
- [Thomas D.M. et al. Can a weight loss of one pound a week be achieved with a 3,500-kcal deficit? Commentary on a commonly accepted rule. Int J Obes, 2013;37(12):1611–1613](https://pubmed.ncbi.nlm.nih.gov/23628852/)
- [Forbes G.B. Lean body mass-body fat interrelationships in humans. Nutr Rev, 1987;45(8):225–231](https://pubmed.ncbi.nlm.nih.gov/3306482/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="weight-loss-forecast" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="weight-loss-forecast" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/weight-loss-forecast?lang=ru&theme=auto"
  title="Калькулятор динамического прогноза снижения веса (модель Кевина Холла)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
