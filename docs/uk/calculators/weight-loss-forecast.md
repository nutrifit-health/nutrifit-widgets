# Калькулятор динамічного прогнозу зниження ваги (модель Кевіна Холла)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/weight-loss-forecast.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/weight-loss-forecast.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/uk/calculators/weight-loss-forecast)

Будує реалістичну нелінійну траєкторію схуднення на основі метаболічної моделі Кевіна Холла (NIH), враховуючи адаптивне уповільнення обміну та збереження м'язів.

### Порядок використання

1. Тримайте помірний дефіцит (15–20%): Дефіцит у 300–500 ккал комфортний для психіки та захищає м'язову тканину від катаболізму, мінімізуючи зриви.
2. Споживайте достатньо білка: Норма білка 1,8–2,4 г/кг на дефіциті гарантує, що до 85–90% скинутої ваги припаде саме на підшкірний та вісцеральний жир.
3. Плануйте дієтичні паузи (Diet Breaks): Кожні 8–12 тижнів схуднення робіть 1–2 тижні харчування на рівні підтримки (TDEE). Це перезавантажує гормони лептин і Т3, знімаючи метаболічну адаптацію.

### Методика та формула

Класичне правило Вішнофскі (1958 р., «дефіцит 7700 ккал = скидання 1 кг») помилково припускає постійну швидкість схуднення. Динамічна модель Кевіна Холла (Lancet, 2011; NIH/NIDDK) математично доводить, що кожен скинутий кілограм знижує базову витрату, викликаючи неминуче плато. Частки втрат жиру та м'язів розраховуються за рівнянням Форбса.

Метаболічна адаптація = 22 ккал/кг втрати + адаптивний термогенез; Ефективний дефіцит = Заданий дефіцит − Адаптація; Частка втрати жиру p = Forbes(F, W); Динамічна вага(t) моделюється методом чисельного інтегрування тиждень за тижнем.

### Обмеження

Передбачає 100% дотримання заданого дефіциту калорій без читмілів. Затримка води при стресі (кортизол) може тимчасово маскувати втрату жиру на вагах.

### Джерела

- [Hall K.D. et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011;378(9793):826–837](https://pubmed.ncbi.nlm.nih.gov/21872751/)
- [Thomas D.M. et al. Can a weight loss of one pound a week be achieved with a 3,500-kcal deficit? Commentary on a commonly accepted rule. Int J Obes, 2013;37(12):1611–1613](https://pubmed.ncbi.nlm.nih.gov/23628852/)
- [Forbes G.B. Lean body mass-body fat interrelationships in humans. Nutr Rev, 1987;45(8):225–231](https://pubmed.ncbi.nlm.nih.gov/3306482/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="weight-loss-forecast" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="weight-loss-forecast" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/weight-loss-forecast?lang=uk&theme=auto"
  title="Калькулятор динамічного прогнозу зниження ваги (модель Кевіна Холла)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
