# Самооценка пищевого поведения

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/eating-behavior-wizard.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/eating-behavior-wizard.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/eating-behavior-wizard.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/eating-behavior-wizard.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/eating-behavior-wizard.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/eating-behavior-wizard.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`eating-behavior-wizard` · [NutriFit](https://nutrifit.health/ru/calculators/eating-behavior-wizard)

Пять вопросов SCOFF и четыре авторских вопроса для самооценки пищевого поведения.

### Порядок использования

1. Прочитайте инструкцию: Учитывайте указанный период и смысл каждого утверждения.
2. Выберите ответы: Отвечайте на каждый пункт, выбирая подходящий вариант.
3. Посмотрите результат: Результат отражает ответы; используйте его с учётом ограничений методики.

### Методика и формула

SCOFF подсчитывается по пяти фактическим ответам «да/нет». Остальные ответы показываются напрямую.

Два и более ответа «да» в SCOFF — положительный скрининг. Авторские вопросы не рассчитывают DEBQ, IES-2 или mYFAS и не определяют психотип.

### Ограничения

Справочный результат не устанавливает диагноз и не назначает лечение. Перевод является информационной адаптацией; его отдельная психометрическая валидация не подтверждена.

### Источники

- [Fairburn C.G. Cognitive Behavior Therapy and Eating Disorders. Guilford Press, 2008](https://www.guilford.com/books/Cognitive-Behavior-Therapy-and-Eating-Disorders/Christopher-Fairburn/9781593857097)
- [American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR), 2022](https://doi.org/10.1176/appi.books.9780890425787)
- [NICE (National Institute for Health and Care Excellence). Eating disorders: recognition and treatment (NG69), 2020](https://www.nice.org.uk/guidance/ng69)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="eating-behavior-wizard" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="eating-behavior-wizard" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/eating-behavior-wizard?lang=ru&theme=auto"
  title="Самооценка пищевого поведения" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
