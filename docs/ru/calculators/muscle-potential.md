# Антропометрическая модель Casey Butt

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/muscle-potential.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/muscle-potential.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`muscle-potential` · [NutriFit](https://nutrifit.health/ru/calculators/muscle-potential)

Эвристическая оценка массы и обхватов по росту, запястью, щиколотке и заданному проценту жира. Авторские обхваты описывают мужчин-бодибилдеров при примерно 8–10% жира. Berkhan: отдельный ориентир рост (см) − 100 кг.

### Порядок использования

1. Введите исходные данные: Эвристическая оценка массы и обхватов по росту, запястью, щиколотке и заданному проценту жира. Авторские обхваты описывают мужчин-бодибилдеров при примерно 8–10% жира. Berkhan: отдельный ориентир рост (см) − 100 кг.
2. Уточните параметры: Max LBM = Рост^1,5 × [sqrt(Запястье)/22,6670 + sqrt(Лодыжка)/17,0104] × [(% Жира/224) + 1]; Berkhan Contest Weight (~5% BF) = Рост (см) − 100.
3. Прочитайте результат: Мужская выборка не обосновывает женские нормы. Модель не измеряет генетику, не доказывает предел роста мышц и не предсказывает срок достижения. Заданный процент жира — допущение, не рекомендуемая цель.

### Методика и формула

Эвристическая оценка массы и обхватов по росту, запястью, щиколотке и заданному проценту жира. Авторские обхваты описывают мужчин-бодибилдеров при примерно 8–10% жира. Berkhan: отдельный ориентир рост (см) − 100 кг.

Max LBM = Рост^1,5 × [sqrt(Запястье)/22,6670 + sqrt(Лодыжка)/17,0104] × [(% Жира/224) + 1]; Berkhan Contest Weight (~5% BF) = Рост (см) − 100.

### Ограничения

Мужская выборка не обосновывает женские нормы. Модель не измеряет генетику, не доказывает предел роста мышц и не предсказывает срок достижения. Заданный процент жира — допущение, не рекомендуемая цель.

### Источники

- [Casey Butt. Your Maximum Muscular Bodyweight and Measurements. Авторский текст, архивная копия.](https://forum.steelfactor.ru/index.php?app=core&attach_id=540052&module=attach&section=attach)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri EM et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995](https://pubmed.ncbi.nlm.nih.gov/7496846/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="muscle-potential" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="muscle-potential" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/muscle-potential?lang=ru&theme=auto"
  title="Антропометрическая модель Casey Butt" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
