# Калькулятор ліпідного профілю: ЛПНЩ, non-HDL та індекси атерогенності

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lipid-profile.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lipid-profile.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lipid-profile.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lipid-profile.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lipid-profile.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lipid-profile.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`lipid-profile` · [NutriFit](https://nutrifit.health/uk/calculators/lipid-profile)

Розрахунковий ЛПНЩ двома методами, non-HDL, залишковий холестерин і п’ять індексів атерогенності за стандартною ліпідограмою — з цільовими значеннями ESC/EAS.

### Порядок використання

1. Введіть три базові показники: Загальний холестерин, ЛПВЩ і тригліцериди є в будь-якій ліпідограмі. Оберіть одиниці бланка: ммоль/л (Європа, СНД) або мг/дл (США, частина лабораторій Латинської Америки).
2. Додайте виміряний ЛПНЩ, якщо він є: Пряме вимірювання ЛПНЩ точніше за розрахунок. Якщо його немає — калькулятор використає рівняння Семпсона і паралельно покаже Фрідвальда для звірки з бланком лабораторії.
3. Дивіться не на один показник, а на співвідношення: Нормальний загальний холестерин за низького ЛПВЩ і високих тригліцеридів — атерогенний профіль. AIP і коефіцієнт атерогенності виявляють це, коли «ЗХ у нормі».

### Методика та формула

Із загального холестерину, ЛПВЩ і тригліцеридів калькулятор виводить ЛПНЩ за класичною формулою Фрідвальда (1972) і за рівнянням Семпсона (NIH, 2020), яке залишається точним за тригліцеридів до 9 ммоль/л і низького ЛПНЩ. Non-HDL — увесь атерогенний холестерин (ЛПНЩ + ЛПДНЩ + залишкові частинки), а залишковий холестерин — різниця non-HDL і ЛПНЩ. Індекси Castelli (ЗХ/ЛПВЩ і ЛПНЩ/ЛПВЩ), коефіцієнт атерогенності Клімова та індекс атерогенності плазми AIP = log10(ТГ/ЛПВЩ) відображають співвідношення «поганих» і «захисних» фракцій і передбачають ризик краще за окремі показники.

ЛПНЩ (Фрідвальд, ммоль/л) = ЗХ − ЛПВЩ − ТГ / 2,2   [при ТГ ≤ 4,5 ммоль/л]
ЛПНЩ (Семпсон, мг/дл) = ЗХ/0,948 − ЛПВЩ/0,971 − (ТГ/8,56 + ТГ×non-HDL/2140 − ТГ²/16100) − 9,44
non-HDL = ЗХ − ЛПВЩ;  Залишковий ХС = non-HDL − ЛПНЩ
КА (Клімов) = (ЗХ − ЛПВЩ) / ЛПВЩ;  Castelli I = ЗХ/ЛПВЩ;  Castelli II = ЛПНЩ/ЛПВЩ
AIP = log10(ТГ / ЛПВЩ), ммоль/л

### Обмеження

Розрахунковий ЛПНЩ — оцінка, а не вимірювання: при ТГ > 4,5 ммоль/л формула Фрідвальда незастосовна, а при ТГ > 9 ммоль/л і хіломікронемії неточне й рівняння Семпсона. Індекси не замінюють оцінку загального ризику за SCORE2, аполіпопротеїном B і ліпопротеїном(а). Цільові значення ЛПНЩ залежать від категорії ризику (від 1,4 до 3,0 ммоль/л за ESC/EAS 2019) — їх визначає лікар. Аналіз здається натще або не натще за рекомендацією лабораторії.

### Джерела

- [Friedewald W.T., Levy R.I., Fredrickson D.S. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972;18(6):499–502](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M. et al. A new equation for calculation of low-density lipoprotein cholesterol in patients with normolipidemia and/or hypertriglyceridemia. JAMA Cardiol, 2020;5(5):540–548](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiášová M., Frohlich J. The plasma parameter log (TG/HDL-C) as an atherogenic index. Clin Biochem, 2001;34(7):583–588](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F. et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J, 2020;41(1):111–188](https://pubmed.ncbi.nlm.nih.gov/31504418/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lipid-profile" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="lipid-profile" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lipid-profile?lang=uk&theme=auto"
  title="Калькулятор ліпідного профілю: ЛПНЩ, non-HDL та індекси атерогенності" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
