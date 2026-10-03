# Шкала воспринимаемого стресса PSS-10

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/pss-10.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/pss-10.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`pss-10` · [NutriFit](https://nutrifit.health/ru/calculators/pss-10)

Оценка воспринимаемого стресса за последний месяц по 10 пунктам PSS-10.

### Порядок использования

1. Прочитайте инструкцию: Учитывайте указанный период и смысл каждого утверждения.
2. Выберите ответы: Отвечайте на каждый пункт, выбирая подходящий вариант.
3. Посмотрите результат: Результат отражает ответы; используйте его с учётом ограничений методики.

### Методика и формула

10 ответов от 0 до 4. Пункты 4, 5, 7 и 8 оцениваются как 4 минус ответ.

Сумма 0–40. Больший балл означает больше воспринимаемого стресса; автор не устанавливает порогов «низкого», «умеренного» или «высокого» стресса.

### Ограничения

Справочный результат не устанавливает диагноз и не назначает лечение. Перевод является информационной адаптацией; его отдельная психометрическая валидация не подтверждена.

### Источники

- [Cohen. Perceived Stress Scale: author instructions and scoring limitations](https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/index.html)
- [Cohen S et al. A global measure of perceived stress. J Health Soc Behav, 1983](https://pubmed.ncbi.nlm.nih.gov/6668417/)
- [Cohen S., Williamson G.M. Perceived stress in a probability sample of the United States. The Social Psychology of Health, 1988:31–67](https://psycnet.apa.org/record/1988-98838-002)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="pss-10" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="pss-10" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/pss-10?lang=ru&theme=auto"
  title="Шкала воспринимаемого стресса PSS-10" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
