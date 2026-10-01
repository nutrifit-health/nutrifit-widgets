# Шкала ризику діабету FINDRISC

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/findrisc.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/findrisc.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/findrisc.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/findrisc.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/findrisc.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/findrisc.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`findrisc` · [NutriFit](https://nutrifit.health/uk/calculators/findrisc)

Міжнародно визнаний опитувальник ВООЗ та IDF для раннього скринінгу прихованого діабету та оцінки ризику маніфестації ЦД 2 типу за 10 років.

### Порядок використання

1. Вкажіть вік та антропометрію: Виберіть вікову групу, категорію ІМТ та окружність талії, виміряну сантиметровою стрічкою посередині між нижнім ребром і гребенем клубової кістки.
2. Оцініть спосіб життя та харчування: Відзначте, чи приділяєте ви фізичній активності не менше 30 хвилин на день і чи вживаєте овочі, фрукти або ягоди щодня.
3. Вкажіть медичний анамнез: Відзначте прийом препаратів від тиску, випадки підвищеного цукру в минулому та наявність діабету у кровних родичів.

### Методика та формула

Підсумовування 8 доведених факторів ризику: вік, ІМТ, окружність талії, фізична активність, овочі в раціоні, антигіпертензивна терапія, глікемія в анамнезі та спадковість.

Бал FINDRISC = Вік (0–4) + ІМТ (0–3) + Талія (0–4) + Фізактивність (0/2) + Овочі (0/1) + Препарати АТ (0/2) + Глюкоза в анамнезі (0/5) + Спадковість (0/3/5). Разом: 0–26 балів.

### Обмеження

Шкала є скринінговим предиктивним інструментом і не замінює лабораторну діагностику (глюкоза плазми натще, HbA1c, пероральний глюкозотолерантний тест).

### Джерела

- [Lindström J., Tuomilehto J. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003;26(3):725–731](https://pubmed.ncbi.nlm.nih.gov/12610029/)
- [International Diabetes Federation (IDF). Clinical Practice Recommendations for managing Type 2 Diabetes in Primary Care, 2017](https://www.idf.org/our-activities/care-prevention/clinical-practice-recommendations/)
- [Saaristo T. et al. FINDRISC as an early intervention tool in primary health care. Diabetes Care, 2005;28(12):2900–2907](https://pubmed.ncbi.nlm.nih.gov/16316578/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="findrisc" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="findrisc" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/findrisc?lang=uk&theme=auto"
  title="Шкала ризику діабету FINDRISC" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
