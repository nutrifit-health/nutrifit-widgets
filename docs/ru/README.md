# NutriFit Widgets — Калькуляторы питания и здоровья для вашего сайта

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[![npm](https://img.shields.io/npm/v/@nutrifit/widgets)](https://www.npmjs.com/package/@nutrifit/widgets) [![GitHub Release](https://img.shields.io/github/v/release/nutrifit-health/nutrifit-widgets)](https://github.com/nutrifit-health/nutrifit-widgets/releases) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE)

Встройте 49 калькуляторов питания, фитнеса, лабораторных показателей и образа жизни через React-компонент, JavaScript или iframe. Начните с TDEE и нормы калорий, БЖУ, нормы воды, состава тела или пищевой ценности блюда.

**[Попробовать виджеты](https://nutrifit.health/embed/calculators/tdee?lang=ru&theme=auto)** · [БЖУ](https://nutrifit.health/embed/calculators/macros?lang=ru&theme=auto) · [Норма воды](https://nutrifit.health/embed/calculators/water?lang=ru&theme=auto) · [Все 49 калькуляторов](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/CALCULATORS.md) · [Оформление](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/APPEARANCE.md)

![Обзор калькуляторов, способов встраивания и возможностей](https://raw.githubusercontent.com/nutrifit-health/nutrifit-widgets/main/docs/assets/widget-overview-ru.svg)

- Шесть языков; светлая, тёмная и системная темы.
- Настройка фона, цветов и скругления под ваш сайт.
- Посетители считают на вашей странице без аккаунта NutriFit и могут скачать брендированный PDF.

Бесплатные виджеты сохраняют бренд NutriFit. Калькуляторы размещены на серверах NutriFit; нужно сетевое подключение.

## Установка

Установите пакет. React-адаптеры поддерживают React 18.2 и 19; независимому JavaScript-модулю React не нужен.

```sh
npm install @nutrifit/widgets
```

## Подключение через React

Используйте `CalculatorFrame` с любым ID каталога. `NutritionCalculatorFrame` встраивает калькулятор блюда. Универсальный вариант — `WidgetFrame widget="tdee"`. Расчёты остаются внутри iframe; компонент не копирует формулы в ваше приложение.

```tsx
import { CalculatorFrame, NutritionCalculatorFrame } from '@nutrifit/widgets';

export function Calculators() {
  return <>
    <CalculatorFrame calculator="tdee" locale="ru" theme="auto" title="NutriFit TDEE" />
    <NutritionCalculatorFrame locale="ru" theme="light" />
  </>;
}
```

## JavaScript без фреймворка

Размещайте загрузчик вместе с модулями `core/*.js`. У каждого контейнера может быть свой калькулятор, язык и тема. Загрузчик автоматически подбирает высоту iframe. Для управления жизненным циклом импортируйте `mountWidget` из `@nutrifit/widgets/core`; при удалении вызывайте `handle.destroy()`.

```html
<div data-nutrifit-widget="tdee" data-locale="ru" data-theme="auto" data-title="NutriFit TDEE"></div>
<div data-nutrifit-widget="nutrition" data-locale="ru"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

```js
import { mountWidget } from '@nutrifit/widgets/core';
const handle = mountWidget(document.getElementById('calculator'), {
  widget: 'water', locale: 'ru', theme: 'light',
});
// handle.destroy()
```

## Обычный iframe

У обычного iframe фиксированная высота и внутренняя прокрутка. Для автоматической высоты используйте React или JavaScript. Замените `tdee` на ID из каталога. Калькулятор блюда располагается по адресу `/embed/nutrition-calculator`.

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=ru&theme=light"
  title="NutriFit TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

## Языки и оформление

Передайте `locale` в React или модуль, `data-locale` в HTML либо `lang` в адрес iframe. Доступны **en, ru, es, uk, kk, uz**. Темы: `light`, `dark`, `auto`. Режим `auto` следует настройкам браузера. Добавьте понятный заголовок iframe на языке страницы: параметр `title` для React/модуля или `data-title` для загрузчика.

## Как пользоваться калькуляторами

Выберите ID, язык и тему, затем заполните поля в указанных единицах. Формульные калькуляторы обновляют результат при вводе; опросники показывают итог после ответов. Методика, ограничения и источники доступны внутри виджета. Полный результат виден на вашем сайте без аккаунта NutriFit. Добровольная ссылка открывает полную страницу NutriFit в новой вкладке; введённые значения калькуляторов каталога при этом не переносятся.

Для `nutrition`: найдите публичные продукты или рецепты, добавьте их вес в граммах и укажите вес готового блюда. Нажмите расчёт, чтобы увидеть суммы и значения на 100 г; доступны PDF и CSV. Отсутствующие значения нутриентов отмечаются как неполные и не превращаются в ноль. Максимум — 50 ингредиентов.

Бесплатные виджеты каталога могут запросить существующий фирменный серверный PDF. Это снимок показанных полей и результатов, а не независимый пересчёт или диагностическая проверка. Нужен доступный сервер. В опросниках завершите ответы перед экспортом.

[Подробные инструкции, методики, формулы и ограничения для каждого калькулятора](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/CALCULATORS.md).

## Полный каталог

| ID виджета | Калькулятор | Назначение |
|---|---|---|
| `nutrition` | [Калькулятор пищевой ценности блюда](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/nutrition.md) | Для `nutrition`: найдите публичные продукты или рецепты, добавьте их вес в граммах и укажите вес готового блюда. Нажмите расчёт, чтобы увидеть суммы и значения на 100 г; доступны PDF и CSV. Отсутствующие значения нутриентов отмечаются как неполные и не превращаются в ноль. Максимум — 50 ингредиентов. |
| `tdee` | [Оценка суточного расхода энергии TDEE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) | Mifflin–St Jeor оценивает расход в покое. TDEE = эта оценка × выбранный коэффициент активности. −20% и +15% — авторские сценарии дефицита и профицита. |
| `macros` | [Авторский планировщик БЖУ](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) | Белок: выбранные пресеты 1,8–2,2 г/кг для снижения, 1,4–1,8 для удержания, 1,8–2,4 для набора; жир 0,8–1,2 г/кг. Используются середины диапазонов; углеводы — остаток калорий при коэффициентах 4/9/4 ккал/г. |
| `water` | [Эвристическая оценка суточной воды](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) | Выбранная модель: 30 мл/кг + 500 мл за час нагрузки + 500 мл при жаре. 75% условно относится к напиткам; стакан = 250 мл. Возрастное снижение не применяется. |
| `body-composition` | [Состав тела по обхватам и ИМТ](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/body-composition.md) | Историческая модель Hodgdon–Beckett (1984) оценивает жир по росту и обхватам. Мужчины: живот на уровне пупка и шея; женщины: естественная узкая талия, бёдра в самом широком месте и шея. ИМТ = масса / рост². |
| `glycemic-load` | [Гликемическая нагрузка порции](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) | ГН = ГИ × доступные углеводы порции / 100. Введите ГИ конкретного продукта и приготовления на шкале глюкоза = 100, доступные углеводы на 100 г и массу порции. Начальные числа — демонстрационный пример. |
| `deficiency-risk` | [Чек-лист питания и факторов образа жизни](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) | Авторский справочный чек-лист: отметьте текущие особенности питания и образа жизни и посмотрите связанные темы нутриентов. |
| `health-balance-wheel` | [Авторское колесо самооценки](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) | Оцените удовлетворённость восемью сферами за последние 14 дней от 1 до 10. Общий балл = среднее × 10; индекс однородности = max(0, 100 − 18 × стандартное отклонение), с округлением. |
| `homa-ir` | [Калькулятор HOMA-IR: индекс инсулинорезистентности](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/homa-ir.md) | Индексы HOMA-IR, HOMA-β и QUICKI по глюкозе и инсулину натощак: оценка инсулинорезистентности и функции β-клеток с нормами и интерпретацией. |
| `tyg-index` | [Калькулятор индекса TyG (триглицериды × глюкоза)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) | Исследовательский индекс по триглицеридам и глюкозе натощак, с производными TyG-BMI и TyG-WC. |
| `lipid-profile` | [Липидный профиль: расчётные показатели](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lipid-profile.md) | Рассчитывает LDL по Фридвальду и Сэмпсону, non-HDL, остаточный холестерин и липидные отношения. |
| `egfr` | [Калькулятор СКФ (eGFR) по CKD-EPI 2021](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/egfr.md) | Расчётная СКФ по CKD-EPI 2021 (креатинин, опционально цистатин C), клиренс креатинина по Кокрофту — Голту и стадия ХБП по KDIGO — с пересчётом мкмоль/л и мг/дл. |
| `hba1c-eag` | [Пересчёт HbA1c и средней глюкозы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/hba1c-eag.md) | Оценка средней глюкозы примерно за 2–3 месяца из лабораторного HbA1c или обратная приблизительная оценка. |
| `lab-unit-converter` | [Конвертер единиц лабораторных анализов](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lab-unit-converter.md) | Пересчёт 33 лабораторных показателей между СИ (ммоль/л, мкмоль/л, нмоль/л, пмоль/л) и традиционными единицами (мг/дл, нг/мл, пг/мл) по молярным массам. |
| `vitamin-d-dose` | [Витамин D: оценка модели van Groningen](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vitamin-d-dose.md) | 25(OH)D в двух единицах и исследовательская оценка по массе тела. Автоматическая схема лечения не назначается. |
| `iron-deficiency` | [Калькулятор дефицита железа: TSAT, ферритин и дефицит по Ганцони](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) | TSAT = железо / ОЖСС × 100%. Модель Ганцони: масса × (15 − Hb в г/дл) × 2,4 + 500 мг для массы ≥ 35 кг. Она показывается только при Hb и ферритине ниже выбранных порогов. |
| `phenoage` | [Калькулятор биологического возраста PhenoAge (Levine)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) | Модель Levine 2018 объединяет девять биомаркеров и календарный возраст. PhenoAge — возрастной эквивалент популяционного риска в модели NHANES, а не возраст органов или индивидуальная продолжительность жизни. Разность с возрастом — арифметическое вычитание, не скорость старения и не статистический остаток PhenoAgeAccel. |
| `fib-4` | [Калькулятор FIB-4 и APRI: индексы фиброза печени](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fib-4.md) | FIB-4 (Sterling 2006) использует возраст, AST, ALT и тромбоциты. Пороги AASLD 2023 относятся к оценке вероятности выраженного фиброза при метаболической жировой болезни печени, а не к определению стадии. Возраст 35–65: нижний порог 1,3; старше 65: 2,0; верхний порог 2,67. До 35 лет категория не присваивается; при остром заболевании результат не интерпретируют. APRI (Wai 2003) и пороги 0,5/1,5 относятся к значимому фиброзу при хроническом гепатите C и не переносятся автоматически на другие заболевания. |
| `free-testosterone` | [Свободный тестостерон по Вермюлену](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/free-testosterone.md) | Расчёт свободной и не связанной с SHBG фракций из общего тестостерона, SHBG и альбумина. |
| `anion-gap` | [Калькулятор анионной разницы и дельта-отношения](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) | Анионная разница = Na − Cl − HCO₃; поправка на альбумин = 0,25 × (40 − альбумин в г/л). Дельта-отношение = (скорректированная разница − выбранный референс) / (референсный бикарбонат − HCO₃). |
| `corrected-calcium` | [Калькулятор скорректированного кальция по альбумину](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) | Скорректированный кальций = общий кальций + 0,02 × (40 − альбумин), кальций в ммоль/л, альбумин в г/л. Это упрощённая формула Payne. |
| `one-rep-max` | [Оценка одноповторного максимума 1RM](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/one-rep-max.md) | Основной результат — авторское среднее Epley и Brzycki. Ниже показаны отдельные формулы и арифметические проценты от среднего. |
| `heart-rate-zones` | [Пульсовые зоны по резерву ЧСС](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) | Целевая ЧСС = ЧССпокоя + доля × (ЧССмакс − ЧССпокоя). Здесь выбраны пять полос 50–60, 60–70, 70–80, 80–90 и 90–100% резерва. |
| `vo2max` | [Полевые оценки VO2max](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) | Купер: дистанция за 12 минут. Rockport: быстрая ходьба 1 мили (1609,344 м), время и конечная ЧСС; исходная проверка у здоровых взрослых 30–69 лет. Uth: 15,3 × ЧССмакс / ЧССпокоя; проверен у хорошо тренированных мужчин 21–51 года. |
| `ffmi` | [Индекс безжировой массы FFMI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ffmi.md) | Безжировая масса = масса × (1 − процент жира / 100); FFMI = безжировая масса / рост², рост в метрах. Для мужчин: нормализованный FFMI = FFMI + 6,3 × (1,8 − рост), по аннотации Kouri (1995). |
| `katch-mcardle` | [Оценки обмена по безжировой массе](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) | Безжировая масса = масса × (1 − жир / 100). Katch–McArdle: 370 + 21,6 × безжировая масса; Cunningham: 500 + 22 × безжировая масса. Суточная оценка Katch умножается на выбранный коэффициент активности. |
| `ideal-body-weight` | [Исторические формулы расчётной массы тела](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) | Сравнение Devine, Robinson, Miller и приближённой Hamwi для роста ≥ 152,4 см. Среднее четырёх формул — авторский агрегат; AdjBW = Devine + 0,4 × (фактическая масса − Devine), только при превышении Devine. |
| `waist-ratios` | [Индексы талии WHR, WHtR и VAI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/waist-ratios.md) | WHR = талия / бёдра; WHtR = талия / рост. Талию измеряют между нижним ребром и верхом таза после спокойного выдоха, бёдра — в самом широком месте. VAI дополнительно использует массу, ТГ и ЛПВП в ммоль/л по Amato (2010). |
| `sweat-rate` | [Оценка потерь пота за тренировку](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) | Пот (л) ≈ масса до − масса после (кг) + выпитое (л) − моча (л); скорость = пот / время в часах. Взвешивайтесь в одинаковых условиях без мокрой одежды. |
| `muscle-potential` | [Антропометрическая модель Casey Butt](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) | Эвристическая оценка массы и обхватов по росту, запястью, щиколотке и заданному проценту жира. Авторские обхваты описывают мужчин-бодибилдеров при примерно 8–10% жира. Berkhan: отдельный ориентир рост (см) − 100 кг. |
| `powerlifting-coefficients` | [Коэффициенты троеборья DOTS, Wilks и IPF GL](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) | Введите массу на взвешивании и сумму лучших успешных приседа, жима и тяги в килограммах. Используются DOTS, классический Wilks и коэффициенты IPF GL 2020 для классического троеборья. |
| `protein-intake` | [Справочные ориентиры белка](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) | Для здоровых взрослых EFSA PRI — 0,83 г/кг/сут. Для здоровых тренирующихся ISSN приводит диапазон 1,4–2,0 г/кг/сут; ESPEN для здоровых пожилых — 1,0–1,2. Количество рассчитано по введённой фактической массе тела; диапазон не является верхним пределом безопасности. |
| `fiber-intake` | [Справочные ориентиры клетчатки](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) | Ориентиры показаны раздельно: EFSA — 25 г/сут для взрослых; IOM/NASEM — 14 г/1000 ккал. AI IOM по возрасту и полу: 19–50 лет — 38 г для мужчин и 25 г для женщин; после 50 — 30 и 21 г. Энергетический расчёт не заменяет автоматически другие ориентиры. |
| `omega-3` | [Справочные ориентиры EPA и DHA](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/omega-3.md) | AI EFSA для взрослых — 250 мг EPA+DHA в сутки из пищи и добавок вместе. При беременности и лактации дополнительно к этому количеству указаны 100–200 мг DHA в сутки. Это не фиксированное соотношение EPA:DHA и не масса всего рыбьего жира. |
| `sodium-potassium` | [Натрий и калий в суточном рационе](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) | Для взрослых WHO рекомендует менее 2000 мг натрия и не менее 3510 мг калия в сутки. Молярное отношение: (Na, мг / 23) / (K, мг / 39,1). Приблизительный солевой эквивалент: натрий, мг × 2,5 / 1000. Отношение показано без категории индивидуального риска. |
| `alcohol` | [Этанол и учебная оценка Видмарка](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/alcohol.md) | Рассчитывает количество этанола, его калории и приблизительную концентрацию по упрощённой модели. |
| `caffeine` | [Остаток кофеина: расчётная модель](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/caffeine.md) | Оценивает остаток кофеина сейчас и ко времени сна при выбранном периоде полувыведения. |
| `weight-loss-forecast` | [Сценарий изменения веса Hall–Chow](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) | Упрощённая модель со средними параметрами показывает изменение веса при постоянном снижении исходного потребления энергии и неизменной активности. |
| `sleep-cycles` | [Планировщик сна](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sleep-cycles.md) | Время отхода ко сну или подъёма для 7, 8 и 9 часов сна с учётом времени засыпания. |
| `findrisc` | [Шкала риска диабета FINDRISC](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/findrisc.md) | Справочный риск диабета 2 типа за 10 лет по 8 факторам FINDRISC; сумма 0–26. Проценты относятся к исходной исследованной популяции и не являются точной личной вероятностью. |
| `debq` | [Пищевое поведение: изменённая адаптация DEBQ](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) | 33 вопроса о привычном пищевом поведении. Показаны средние ответов в трёх группах, без категорий нормы и диагноза. |
| `phq-9` | [Опросник здоровья пациента PHQ-9 (Депрессия)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) | Выраженность депрессивных симптомов за последние 2 недели: 9 ответов по частоте от 0 до 3; сумма 0–27. |
| `gad-7` | [Шкала генерализованной тревоги GAD-7](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/gad-7.md) | Выраженность симптомов тревоги за последние 2 недели: 7 ответов по частоте от 0 до 3; сумма 0–21. |
| `pss-10` | [Шкала воспринимаемого стресса PSS-10](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) | Оценка воспринимаемого стресса за последний месяц по 10 пунктам PSS-10. |
| `isi` | [Индекс тяжести бессонницы ISI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) | Оценка сна за последние 2 недели: 7 пунктов с разными шкалами от 0 до 4; сумма 0–28. Удовлетворённость, заметность проблем, беспокойство и влияние на жизнь имеют собственные ответы. |
| `scoff` | [Скрининг нарушений пищевого поведения SCOFF](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/scoff.md) | Всемирно признанный скрининговый тест из 5 простых вопросов для раннего выявления признаков нервной анорексии и булимии. |
| `ies-2` | [Шкала интуитивного питания IES-2](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) | IES-2: 23 утверждения об отношении к еде и телесным сигналам, четыре субшкалы. |
| `yfas` | [Йельская шкала пищевой зависимости mYFAS 2.0](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) | mYFAS 2.0: 13 вопросов о проблемах с питанием за последние 12 месяцев. |
| `eating-behavior-wizard` | [Самооценка пищевого поведения](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/eating-behavior-wizard.md) | Пять вопросов SCOFF и четыре авторских вопроса для самооценки пищевого поведения. |


## Параметры и события

`hostUrl` задаёт origin соответствующего стенда HTTP(S), без пути, логина и query. `campaign` обозначает источник перехода. `integrationId` выбирает интеграцию аккаунта; сервер проверяет домен и право доступа. Смена калькулятора, хоста, языка, темы или интеграции пересоздаёт iframe и очищает несохранённое состояние.

`onEvent` получает `ready`, `calculated` или `error`. Ready означает загрузку интерфейса, а не доступность API. Калькуляторы каталога отправляют calculated при изменении показанного результата, включая начальный расчёт по умолчанию. События не передают введённые данные, ответы или результаты сайту-владельцу. PostMessage проверяет origin, окно, instance и версию протокола. CSP вашего сайта должна разрешать `frame-src https://nutrifit.health`, а для загрузчика — также `script-src https://nutrifit.health`.

## Размещённый сервис и нативный React

Бесплатные виджеты сохраняют бренд NutriFit и добровольные ссылки. White label требует отдельного настроенного тарифа, интеграции аккаунта и подтверждённого точного HTTPS-домена; личный Premium его не включает. Виджеты каталога могут показывать подтверждённый бренд клиента; кнопка фирменного PDF NutriFit в таком режиме скрывается. Платный калькулятор блюда поддерживает сервисные PDF/CSV с брендом клиента.

`NativeNutritionCalculator` из `@nutrifit/widgets/native` отображает калькулятор блюда прямо в вашей странице. Подключите `@nutrifit/widgets/native.css`. Компонент получает короткую сессию через ваш сервер; постоянный ключ храните только на сервере. Остальные калькуляторы используют React iframe, а не нативные DOM-компоненты. Локальные формулы каталога не расходуют квоту API питания; расчёт блюда и его PDF расходуют.

```tsx
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function NativeCalculator() {
  return <NativeNutritionCalculator locale="ru" getSession={async (signal) => {
    const response = await fetch('/api/nutrifit-session', { method: 'POST', signal });
    if (!response.ok) throw new Error('Widget session unavailable');
    return response.json();
  }} />;
}
```

В кабинете интеграций активируйте настроенный тариф с нативным доступом, добавьте точный HTTPS origin, опубликуйте TXT-запись DNS, подтвердите домен и выпустите серверный ключ. Храните `NUTRIFIT_WIDGET_KEY` и `NUTRIFIT_SITE_ORIGIN` только на сервере. Посредник ниже обменивает ключ на пятиминутную сессию и возвращает полный envelope в getSession. Ограничивайте доступ посетителей и частоту запросов к посреднику; не записывайте ключ или сессию в логи.

```ts
export async function POST() {
  const key = process.env.NUTRIFIT_WIDGET_KEY;
  const origin = process.env.NUTRIFIT_SITE_ORIGIN;
  if (!key || !origin) return new Response(null, { status: 503 });
  const response = await fetch('https://api.nutrifit.health/api/v2/widget-runtime/session', {
    method: 'POST', cache: 'no-store',
    headers: { 'Content-Type': 'application/json', 'X-NutriFit-Key': key },
    body: JSON.stringify({ origin }),
  });
  if (!response.ok) return new Response(null, { status: response.status });
  return new Response(await response.text(), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' },
  });
}
```

[Native API](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/NATIVE_REACT.md) · [Service](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=ru)

## Лицензия и границы

Copyright (c) 2026 **NUTRIFIT LLC**. Код адаптеров и нативного интерфейса блюда распространяется по стандартной MIT. Лицензия на код не даёт квоту сервиса, право white label, права на товарный знак NutriFit или владение клиническими опросниками. Backend, личный кабинет и каталог продуктов не включены. Медицинские и психологические калькуляторы сохраняют ограничения методик и не являются диагнозом.

[MIT](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE) · [GitHub](https://github.com/nutrifit-health/nutrifit-widgets)

В брендированных виджетах используется официальный логотип NutriFit: светлый, тёмный или по системной теме при `theme="auto"`. White-label сохраняет бренд клиента. В native CSS PNG встроены; строгий CSP сайта должен разрешать `data:` в `img-src`. Условия использования бренда — в [NOTICE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/NOTICE).


[Нативная интеграция React](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/NATIVE_REACT.md) · [Модель сервиса](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/SERVICE_MODEL.md) · [Добавление виджетов](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/ADDING_WIDGETS.md) · [Публикация релизов](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/RELEASING.md)

Основной npm-пакет — `@nutrifit/widgets`. GitHub Packages также предоставляет `@nutrifit-health/widgets`, связанный с этим репозиторием. Сборка берётся из опубликованного npm-архива; scope соответствует владельцу репозитория GitHub. Установка из GitHub требует авторизации в его реестре. Для обычной установки npm используйте команду выше.

[GitHub Packages](https://github.com/nutrifit-health/nutrifit-widgets/pkgs/npm/widgets)

## Локальная витрина

Посмотрите все 49 калькуляторов: весь интерфейс переведён на шесть языков, доступны светлая и тёмная темы и готовые примеры React, JavaScript и iframe.

В клонированном репозитории выполните:

```sh
npm install --prefix examples/consumer-site
npm run demo
```

Откройте [витрину](http://127.0.0.1:5178/?lang=ru). Локальный адрес NutriFit по умолчанию — `http://localhost:5100`; его можно изменить в настройках подключения. Оставьте процесс демонстрации запущенным.

[Локальная витрина](../../examples/consumer-site/README.md)
