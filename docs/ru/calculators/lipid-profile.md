# Калькулятор липидного профиля: ЛПНП, non-HDL и индексы атерогенности

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lipid-profile.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lipid-profile.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lipid-profile.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lipid-profile.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lipid-profile.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lipid-profile.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`lipid-profile` · [NutriFit](https://nutrifit.health/ru/calculators/lipid-profile)

Расчётный ЛПНП двумя методами, non-HDL, остаточный холестерин и пять индексов атерогенности по стандартной липидограмме — с целевыми значениями ESC/EAS.

### Порядок использования

1. Введите три базовых показателя: Общий холестерин, ЛПВП и триглицериды есть в любой липидограмме. Выберите единицы бланка: ммоль/л (СНГ, Европа) или мг/дл (США, часть лабораторий Латинской Америки).
2. Добавьте измеренный ЛПНП, если он есть: Прямое измерение ЛПНП точнее расчёта. Если его нет — калькулятор использует уравнение Сэмпсона и параллельно покажет Фридвальда для сравнения с бланком лаборатории.
3. Смотрите не на один показатель, а на соотношения: Нормальный общий холестерин при низком ЛПВП и высоких триглицеридах — атерогенный профиль. AIP и коэффициент атерогенности выявляют это, когда «ОХ в норме».

### Методика и формула

Из общего холестерина, ЛПВП и триглицеридов калькулятор выводит ЛПНП по классической формуле Фридвальда (1972) и по уравнению Сэмпсона (NIH, 2020), которое остаётся точным при триглицеридах до 9 ммоль/л и низком ЛПНП. Non-HDL — весь атерогенный холестерин (ЛПНП + ЛПОНП + остаточные частицы), а остаточный холестерин — разность non-HDL и ЛПНП. Индексы Castelli (ОХ/ЛПВП и ЛПНП/ЛПВП), коэффициент атерогенности Климова и индекс атерогенности плазмы AIP = log10(ТГ/ЛПВП) отражают соотношение «плохих» и «защитных» фракций и предсказывают риск лучше, чем отдельные показатели.

ЛПНП (Фридвальд, ммоль/л) = ОХ − ЛПВП − ТГ / 2,2   [при ТГ ≤ 4,5 ммоль/л]
ЛПНП (Сэмпсон, мг/дл) = ОХ/0,948 − ЛПВП/0,971 − (ТГ/8,56 + ТГ×non-HDL/2140 − ТГ²/16100) − 9,44
non-HDL = ОХ − ЛПВП;  Остаточный ХС = non-HDL − ЛПНП
КА (Климов) = (ОХ − ЛПВП) / ЛПВП;  Castelli I = ОХ/ЛПВП;  Castelli II = ЛПНП/ЛПВП
AIP = log10(ТГ / ЛПВП), ммоль/л

### Ограничения

Расчётный ЛПНП — оценка, а не измерение: при ТГ > 4,5 ммоль/л формула Фридвальда неприменима, а при ТГ > 9 ммоль/л и хиломикронемии неточно и уравнение Сэмпсона. Индексы не заменяют оценку общего риска по SCORE2, аполипопротеину B и липопротеину(а). Целевые значения ЛПНП зависят от категории риска (от 1,4 до 3,0 ммоль/л по ESC/EAS 2019) — их определяет врач. Анализ сдаётся натощак или не натощак по рекомендации лаборатории.

### Источники

- [Friedewald W.T., Levy R.I., Fredrickson D.S. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972;18(6):499–502](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M. et al. A new equation for calculation of low-density lipoprotein cholesterol in patients with normolipidemia and/or hypertriglyceridemia. JAMA Cardiol, 2020;5(5):540–548](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiášová M., Frohlich J. The plasma parameter log (TG/HDL-C) as an atherogenic index. Clin Biochem, 2001;34(7):583–588](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F. et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J, 2020;41(1):111–188](https://pubmed.ncbi.nlm.nih.gov/31504418/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lipid-profile" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="lipid-profile" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lipid-profile?lang=ru&theme=auto"
  title="Калькулятор липидного профиля: ЛПНП, non-HDL и индексы атерогенности" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
