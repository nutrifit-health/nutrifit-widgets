# Калькулятор баланса натрия и калия (Na:K и соль)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sodium-potassium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sodium-potassium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`sodium-potassium` · [NutriFit](https://nutrifit.health/ru/calculators/sodium-potassium)

Оценивает электролитный баланс калия и натрия в рационе, рассчитывает эквивалент поваренной соли и кардиоваскулярный риск.

### Порядок использования

1. Уберите скрытую соль: До 75% натрия попадает в организм не из солонки, а из переработанных продуктов: колбас, сыров, чипсов, консервов и магазинного хлеба.
2. Увеличьте калий из овощей и фруктов: Калий стимулирует выведение натрия почками (натрийурез). Добавьте печёный картофель, шпинат, курагу, фасоль и бананы.
3. Используйте калиевую соль: Соль с пониженным содержанием натрия (где 30% NaCl заменено на KCl) помогает снизить давление на 3–5 мм рт. ст.

### Методика и формула

Основан на руководствах ВОЗ по потреблению натрия и калия (2012) и принципах кардиологической диеты DASH. Молярное соотношение Na:K должно быть менее 1,0 (оптимально 0,5–0,7). В рационе современного человека натрий часто превышает калий в 2–3 раза.

Моли Na = Na (мг) / 23; Моли K = K (мг) / 39,1; Соотношение Na:K = Моли Na / Моли K; Эквивалент соли NaCl (г) = Na (мг) × 2,54 / 1000.

### Ограничения

Не предназначен для пациентов с терминальной почечной недостаточностью (ХБП 4–5 стадии), у которых экскреция калия нарушена и требуется ограничение калия.

### Источники

- [World Health Organization. Guideline: Sodium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504836)
- [World Health Organization. Guideline: Potassium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504829)
- [O’Donnell M. et al. Urinary sodium and potassium excretion and risk of cardiovascular events. JAMA, 2011;306(20):2229–2238](https://pubmed.ncbi.nlm.nih.gov/22110105/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sodium-potassium" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="sodium-potassium" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sodium-potassium?lang=ru&theme=auto"
  title="Калькулятор баланса натрия и калия (Na:K и соль)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
