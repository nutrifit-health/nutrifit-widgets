# Калькулятор суточной нормы белка (ISSN и ESPEN)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/protein-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/protein-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`protein-intake` · [NutriFit](https://nutrifit.health/ru/calculators/protein-intake)

Рассчитывает оптимальное суточное количество протеина с учётом целей (похудение, гипертрофия, здоровье 65+), типа питания и синтеза мышечного белка (MPS).

### Порядок использования

1. Узнайте свою целевую цифру: Введите вес и цель. Калькулятор определит суточный граммаж и порцию на один приём пищи.
2. Распределите по 25–40 г на приём: Разовый приём 30 г белка (пачка творога, 150 г куриной грудки или рыбы) активирует лейциновый триггер мышечного анаболизма.
3. Разнообразьте источники: Комбинируйте животный (яйца, птица, рыба, кисломолочные продукты) и растительный белок (тофу, чечевица, нут, темпе).

### Методика и формула

Расчёт базируется на клинических консенсусах Международного общества спортивного питания (ISSN, 2017) и Европейской ассоциации клинического питания и метаболизма (ESPEN). При ожирении (ИМТ > 28) расчёт автоматически переводится на скорректированную массу тела (AdjBW), чтобы предотвратить гиперфильтрацию в почках.

Базовая норма: 1,0–1,2 г/кг; Набор мышц: 1,6–2,2 г/кг; Дефицит (сушка): 2,0–2,4 г/кг; Выносливость: 1,2–1,6 г/кг; Возраст 65+: 1,2–1,5 г/кг; ХБП (стадии 3–4): 0,6–0,8 г/кг. Вегетарианство: +10% к норме.

### Ограничения

При хронической болезни почек (ХБП) со снижением СКФ < 60 мл/мин норма белка должна быть строго согласована с врачом-нефрологом.

### Источники

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Deutz N.E. et al. Protein intake and exercise for optimal muscle function with aging: recommendations from the ESPEN Expert Group. Clin Nutr, 2014;33(6):929–936](https://pubmed.ncbi.nlm.nih.gov/24814383/)
- [Morton R.W. et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on gains in muscle mass and strength in healthy adults. Br J Sports Med, 2018;52(6):376–384](https://pubmed.ncbi.nlm.nih.gov/28698222/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="protein-intake" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="protein-intake" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/protein-intake?lang=ru&theme=auto"
  title="Калькулятор суточной нормы белка (ISSN и ESPEN)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
