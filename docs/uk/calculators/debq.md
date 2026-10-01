# Нідерландський опитувальник харчової поведінки (DEBQ)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/debq.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/debq.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`debq` · [NutriFit](https://nutrifit.health/uk/calculators/debq)

Класичний валідований психологічний інструмент для виявлення трьох провідних типів порушень харчової поведінки: обмежувального, емоціогенного та екстернального.

### Порядок використання

1. Відповідайте щиро: Обирайте варіант відповіді, який найкраще описує вашу звичну поведінку за останні кілька місяців.
2. Не роздумуйте занадто довго: Перша спонтанна реакція найчастіше є найточнішою.
3. Ознайомтеся з результатами за трьома субшкалами: Оцініть бали щодо нормативних порогів і ознайомтеся з персональними рекомендаціями.

### Методика та формула

Опитувальник містить 33 твердження за шкалою Лайкерта від 1 до 5. Оцінюються три субшкали: когнітивне обмеження (10 пунктів), емоціогенне переїдання (13 пунктів) та екстернальна стимуляція (10 пунктів).

Бал за кожною субшкалою = Середнє арифметичне відповідей на відповідні запитання (від 1,0 до 5,0). Обмежувальне: норма ~2.4; Емоціогенне: норма ~1.8; Екстернальне: норма ~2.7.

### Обмеження

Опитувальник є інструментом психологічної самооцінки, а не клінічним діагнозом. При вираженому дистресі зверніться до фахівця з розладів харчової поведінки.

### Джерела

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire. J Psychosom Res, 1987;31(2):161–169](https://pubmed.ncbi.nlm.nih.gov/3585818/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="debq" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="debq" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/debq?lang=uk&theme=auto"
  title="Нідерландський опитувальник харчової поведінки (DEBQ)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
