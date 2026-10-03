# Шкала интуитивного питания IES-2

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ies-2.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ies-2.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`ies-2` · [NutriFit](https://nutrifit.health/ru/calculators/ies-2)

IES-2: 23 утверждения об отношении к еде и телесным сигналам, четыре субшкалы.

### Порядок использования

1. Прочитайте инструкцию: Укажите, насколько каждое утверждение описывает ваши взгляды и поведение. Фиксированный период воспоминания не задан.
2. Выберите ответы: Отвечайте на каждый пункт, выбирая подходящий вариант.
3. Посмотрите результат: Результат отражает ответы; используйте его с учётом ограничений методики.

### Методика и формула

Степень согласия от 1 до 5. В сгруппированном авторском бланке пункты 1, 2, 3, 7, 8, 9 и 10 оцениваются как 6 минус ответ.

Общий балл — среднее 23 ответов после инверсии. Субшкалы: пункты 1–6, 7–14, 15–20 и 21–23. Все средние от 1 до 5; диагностических порогов нет.

### Ограничения

Справочный результат не устанавливает диагноз и не назначает лечение. Перевод является информационной адаптацией; его отдельная психометрическая валидация не подтверждена.

### Источники

- [Tylka. Intuitive Eating Scale-2: grouped original items and scoring](https://cpb-us-w2.wpmucdn.com/u.osu.edu/dist/1/10560/files/2015/02/IES-2-Items-sz2at8.doc)
- [Tylka TL et al. The Intuitive Eating Scale-2: item refinement and psychometric evaluation with college women and men. J Couns Psychol, 2013](https://pubmed.ncbi.nlm.nih.gov/23356469/)
- [Tribole E., Resch E. Intuitive Eating: A Revolutionary Anti-Diet Approach. St. Martin’s Essentials, 2020](https://www.intuitiveeating.org/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ies-2" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="ies-2" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ies-2?lang=ru&theme=auto"
  title="Шкала интуитивного питания IES-2" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
