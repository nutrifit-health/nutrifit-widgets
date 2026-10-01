# Скринінг порушень харчової поведінки SCOFF

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/scoff.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/scoff.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/scoff.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/scoff.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/scoff.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/scoff.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`scoff` · [NutriFit](https://nutrifit.health/uk/calculators/scoff)

Всесвітньо визнаний скринінговий тест із 5 простих запитань для виявлення ризику розладів харчової поведінки (анорексії та булімії).

### Порядок використання

1. Уважно прочитайте 5 запитань: Згадайте свої звички в харчуванні та ставлення до власного тіла за останні місяці.
2. Відповідайте щиро «Так» або «Ні»: Давайте чесні відповіді, не намагаючись применшити або виправдати власні труднощі.
3. Ознайомтеся з висновком: Дізнайтеся рівень ризику та рекомендації спеціалістів щодо подальших дій.

### Методика та формула

Опитувальник містить 5 закритих запитань (Так/Ні), що відображають ключові діагностичні маркери: штучне блювання, втрату контролю, втрату ваги, дисморфофобію та нав'язливі думки про їжу.

Бал SCOFF = Кількість позитивних відповідей (0–5). Результат ≥ 2 балів свідчить про високий ризик РХП та необхідність консультації лікаря.

### Обмеження

Тест SCOFF — це виключно первинний скринінг. Він не встановлює медичного діагнозу і потребує фахової клінічної оцінки.

### Джерела

- [Morgan J.F. et al. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ, 1999;319(7223):1467–1468](https://pubmed.ncbi.nlm.nih.gov/10582927/)
- [Luck A.J. et al. The SCOFF questionnaire and clinical interview for detecting eating disorders. BMJ, 2002;325(7367):755–756](https://pubmed.ncbi.nlm.nih.gov/12364305/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="scoff" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="scoff" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/scoff?lang=uk&theme=auto"
  title="Скринінг порушень харчової поведінки SCOFF" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
