# Скрининг нарушений пищевого поведения SCOFF

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/scoff.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/scoff.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/scoff.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/scoff.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/scoff.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/scoff.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`scoff` · [NutriFit](https://nutrifit.health/ru/calculators/scoff)

Всемирно признанный скрининговый тест из 5 простых вопросов для раннего выявления признаков нервной анорексии и булимии.

### Порядок использования

1. Прочитайте инструкцию: Учитывайте указанный период и смысл каждого утверждения.
2. Выберите ответы: Отвечайте на каждый пункт, выбирая подходящий вариант.
3. Посмотрите результат: Положительный скрининг — требуется дальнейшая оценка

### Методика и формула

Опросник содержит 5 закрытых вопросов (Да/Нет), отражающих ключевые критерии РПП (Sick, Control, One stone, Fat, Food).

Балл SCOFF = Количество положительных ответов (0–5). Результат считается положительным (высокий риск РПП) при балле ≥ 2.

### Ограничения

Справочный результат не устанавливает диагноз и не назначает лечение. Перевод является информационной адаптацией; его отдельная психометрическая валидация не подтверждена.

### Источники

- [Morgan JF et al. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ, 1999](https://pubmed.ncbi.nlm.nih.gov/10582927/)
- [Luck AJ et al. The SCOFF questionnaire and clinical interview for eating disorders in general practice: comparative study. BMJ, 2002](https://pubmed.ncbi.nlm.nih.gov/12364305/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="scoff" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="scoff" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/scoff?lang=ru&theme=auto"
  title="Скрининг нарушений пищевого поведения SCOFF" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
