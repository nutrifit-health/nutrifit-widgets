# Калькулятор Омега-3 (дозировка EPA + DHA и индекс)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/omega-3.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/omega-3.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/omega-3.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/omega-3.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/omega-3.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/omega-3.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`omega-3` · [NutriFit](https://nutrifit.health/ru/calculators/omega-3)

Определяет оптимальную суточную дозу эйкозапентаеновой (EPA) и докозагексаеновой (DHA) кислот под конкретные клинические цели и образ жизни.

### Порядок использования

1. Смотрите на состав капсулы (EPA + DHA): Надпись «1000 мг рыбьего жира» часто скрывает всего 300 мг EPA+DHA. Складывайте именно миллиграммы EPA и DHA на этикетке.
2. Выбирайте правильную форму (rTG или TG): Реэстерифицированные триглицериды (rTG) обладают наивысшей биодоступностью по сравнению с дешевыми этиловыми эфирами (EE).
3. Проверяйте индекс окисления (TOTOX): Качественный рыбий жир имеет индекс TOTOX < 26 и сертификат IFOS (International Fish Oil Standards). Он не должен пахнуть тухлой рыбой.

### Методика и формула

Основан на клинических гайдлайнах Global Organization for EPA and DHA Omega-3s (GOED), Американской кардиологической ассоциации (AHA) и Международного общества по изучению жирных кислот (ISSFAL). Учитывает целевое значение Омега-3 индекса мембран эритроцитов (> 8%).

Базовое здоровье: 500 мг/сут; Кардиопротекция: 1000 мг/сут; Гипертриглицеридемия: 2000–4000 мг/сут; Беременность: 600 мг (акцент на DHA); Депрессия: 1000–2000 мг (EPA:DHA ≥ 2:1); Спорт: 1500–2000 мг.

### Ограничения

Приём доз свыше 3000–4000 мг EPA+DHA в сутки требует контроля коагулограммы из-за антиагрегантного эффекта (разжижения крови).

### Источники

- [Harris W.S., Von Schacky C. The Omega-3 Index: a new risk factor for death from coronary heart disease? Prev Med, 2004;39(1):212–220](https://pubmed.ncbi.nlm.nih.gov/15207989/)
- [Global Organization for EPA and DHA Omega-3s (GOED). Clinical Practice Recommendations for EPA and DHA Omega-3 Intake, 2022](https://goedomega3.com/intake-recommendations)
- [Guu T.W. et al. International Society for Nutritional Psychiatry Research Practice Guidelines for Omega-3 Fatty Acids in the Treatment of Major Depressive Disorder. Psychother Psychosom, 2019;88(5):263–273](https://pubmed.ncbi.nlm.nih.gov/31480072/)

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
  title="Калькулятор Омега-3 (дозировка EPA + DHA и индекс)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
