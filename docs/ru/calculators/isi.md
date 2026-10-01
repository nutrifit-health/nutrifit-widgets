# Индекс тяжести бессонницы ISI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/isi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/isi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`isi` · [NutriFit](https://nutrifit.health/ru/calculators/isi)

Короткий клинический инструмент из 7 вопросов для оценки выраженности бессонницы, ночных пробуждений и их влияния на дневную жизнь.

### Порядок использования

1. Оцените сон за последние недели: Вспомните характер засыпания и пробуждений за последние 2–4 недели.
2. Ответьте на 7 вопросов о сне: Оцените выраженность проблем от 0 (нет) до 4 (очень сильно).
3. Получите оценку тяжести инсомнии: Узнайте свою категорию и доказанные рекомендации по улучшению сна.

### Методика и формула

7 пунктов, каждый оценивается от 0 до 4 баллов. Сумма баллов от 0 до 28.

Балл ISI = Сумма 7 вопросов. 0–7: бессонница отсутствует; 8–14: подпороговая (легкая); 15–21: клиническая средней тяжести; 22–28: тяжелая бессонница.

### Ограничения

Индекс предназначен для скрининга. При подозрениях на синдром обструктивного апноэ сна (храп, остановки дыхания) обратитесь к сомнологу.

### Источники

- [Morin C.M. et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases. Sleep, 2011;34(5):601–608](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien C.H. et al. Validation of the Insomnia Severity Index as an outcome measure. Sleep Med, 2001;2(4):297–307](https://pubmed.ncbi.nlm.nih.gov/11438246/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="isi" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="isi" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/isi?lang=ru&theme=auto"
  title="Индекс тяжести бессонницы ISI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
