# Голландский опросник пищевого поведения (DEBQ)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/debq.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/debq.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`debq` · [NutriFit](https://nutrifit.health/ru/calculators/debq)

Классический валидированный психологический инструмент для выявления трех ведущих типов нарушений пищевого поведения: ограничительного, эмоциогенного и экстернального.

### Порядок использования

1. Отвечайте искренне: Выбирайте вариант ответа, который лучше всего описывает ваше обычное поведение за последние несколько месяцев.
2. Не задумывайтесь слишком долго: Первая спонтанная реакция чаще всего является наиболее точной.
3. Изучите результаты по трем субшкалам: Оцените баллы по отношению к нормативным порогам и ознакомьтесь с индивидуальными рекомендациями.

### Методика и формула

Опросник состоит из 33 утверждений по шкале Лайкерта от 1 до 5. Оцениваются три субшкалы: когнитивное ограничение (10 пунктов), эмоциогенное переедание (13 пунктов) и экстернальная стимуляция (10 пунктов).

Балл по каждой субшкале = Среднее арифметическое ответов на входящие вопросы (от 1,0 до 5,0). Ограничительное: норма ~2.4; Эмоциогенное: норма ~1.8; Экстернальное: норма ~2.7.

### Ограничения

Опросник является инструментом психологической самооценки, а не клиническим диагнозом. При выраженном дистрессе обратитесь к специалисту по расстройствам пищевого поведения.

### Источники

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire. J Psychosom Res, 1987;31(2):161–169](https://pubmed.ncbi.nlm.nih.gov/3585818/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="debq" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="debq" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/debq?lang=ru&theme=auto"
  title="Голландский опросник пищевого поведения (DEBQ)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
