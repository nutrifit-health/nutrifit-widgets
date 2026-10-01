# Скрининг нарушений пищевого поведения SCOFF

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/scoff.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/scoff.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/scoff.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/scoff.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/scoff.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/scoff.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`scoff` · [NutriFit](https://nutrifit.health/ru/calculators/scoff)

Всемирно признанный скрининговый тест из 5 простых вопросов для раннего выявления признаков нервной анорексии и булимии.

### Порядок использования

1. Ответьте на 5 прямых вопросов: Выберите «Да» или «Нет» для каждого утверждения максимально честно.
2. Узнайте результат скрининга: 2 и более положительных ответа сигнализируют о высокой вероятности клинического расстройства пищевого поведения.
3. Следуйте клиническим рекомендациям: Обратитесь к квалифицированному специалисту по расстройствам пищевого поведения.

### Методика и формула

Опросник содержит 5 закрытых вопросов (Да/Нет), отражающих ключевые критерии РПП (Sick, Control, One stone, Fat, Food).

Балл SCOFF = Количество положительных ответов (0–5). Результат считается положительным (высокий риск РПП) при балле ≥ 2.

### Ограничения

Тест SCOFF — это исключительно первичный скрининг. Он не ставит диагноз, но надежно указывает на необходимость консультации специалиста.

### Источники

- [Morgan J.F. et al. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ, 1999;319(7223):1467–1468](https://pubmed.ncbi.nlm.nih.gov/10582927/)
- [Luck A.J. et al. The SCOFF questionnaire and clinical interview for detecting eating disorders. BMJ, 2002;325(7367):755–756](https://pubmed.ncbi.nlm.nih.gov/12364305/)

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
