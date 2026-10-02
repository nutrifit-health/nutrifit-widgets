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
| `tdee` | [Калькулятор суточной нормы калорий (TDEE)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) | Считает базовый обмен и полный суточный расход энергии, а также калорийность под снижение, удержание и набор массы тела. |
| `macros` | [Калькулятор БЖУ](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) | Распределяет суточную калорийность по белкам, жирам и углеводам с учётом массы тела и цели — в граммах, калориях и процентах. |
| `water` | [Калькулятор нормы воды](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) | Считает суточную потребность в жидкости от массы тела с поправками на физическую нагрузку и жаркий климат. |
| `body-composition` | [Калькулятор состава тела](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/body-composition.md) | Оценивает долю жира по обхватам тела, считает жировую и безжировую массу тела и индекс массы тела. |
| `glycemic-load` | [Калькулятор гликемической нагрузки](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) | Считает гликемическую нагрузку порции по гликемическому индексу и содержанию углеводов — величину, которая отражает реальный отклик глюкозы лучше, чем один только индекс. |
| `deficiency-risk` | [Скрининг риска дефицита нутриентов](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) | Отмечает факторы образа жизни и питания и показывает, дефицит каких нутриентов вероятен и какими анализами это проверяется. |
| `health-balance-wheel` | [Колесо баланса здоровья и питания](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) | Интерактивная диаграмма 8 сфер здоровья и образа жизни. Выявляет узкие горлышки (закон минимума Либиха) и связывает дефициты с инструментами NutriFit. |
| `homa-ir` | [Калькулятор HOMA-IR: индекс инсулинорезистентности](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/homa-ir.md) | Индексы HOMA-IR, HOMA-β и QUICKI по глюкозе и инсулину натощак: оценка инсулинорезистентности и функции β-клеток с нормами и интерпретацией. |
| `tyg-index` | [Калькулятор индекса TyG (триглицериды × глюкоза)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) | Индекс TyG и производные TyG-BMI, TyG-WC: оценка инсулинорезистентности и кардиометаболического риска по триглицеридам и глюкозе натощак — без анализа на инсулин. |
| `lipid-profile` | [Калькулятор липидного профиля: ЛПНП, non-HDL и индексы атерогенности](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lipid-profile.md) | Расчётный ЛПНП двумя методами, non-HDL, остаточный холестерин и пять индексов атерогенности по стандартной липидограмме — с целевыми значениями ESC/EAS. |
| `egfr` | [Калькулятор СКФ (eGFR) по CKD-EPI 2021](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/egfr.md) | Расчётная СКФ по CKD-EPI 2021 (креатинин, опционально цистатин C), клиренс креатинина по Кокрофту — Голту и стадия ХБП по KDIGO — с пересчётом мкмоль/л и мг/дл. |
| `hba1c-eag` | [Конвертер HbA1c ↔ средняя глюкоза (eAG)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/hba1c-eag.md) | Пересчёт HbA1c в среднюю гликемию за 3 месяца по формуле ADAG, обратный расчёт и конвертация % ↔ ммоль/моль с категориями ADA. |
| `lab-unit-converter` | [Конвертер единиц лабораторных анализов](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lab-unit-converter.md) | Пересчёт 33 лабораторных показателей между СИ (ммоль/л, мкмоль/л, нмоль/л, пмоль/л) и традиционными единицами (мг/дл, нг/мл, пг/мл) по молярным массам. |
| `vitamin-d-dose` | [Витамин D: оценка модели van Groningen](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vitamin-d-dose.md) | 25(OH)D в двух системах единиц и исследовательская суммарная оценка по массе тела. Без автоматического назначения схемы лечения. |
| `iron-deficiency` | [Калькулятор дефицита железа: TSAT, ферритин и дефицит по Ганцони](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) | TSAT, справочный порог ферритина с учётом СРБ и арифметическая модель Ганцони. Сочетания показателей не являются диагнозом. |
| `phenoage` | [Калькулятор биологического возраста PhenoAge (Levine)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) | Исследовательская оценка по девяти биомаркерам и возрасту. Результат не предсказывает индивидуальную продолжительность жизни. |
| `fib-4` | [Калькулятор FIB-4 и APRI: индексы фиброза печени](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fib-4.md) | FIB-4 и APRI по возрасту, АСТ, АЛТ и тромбоцитам: расчёт, пояснение порогов и ограничений. Для обсуждения результата со специалистом. |
| `free-testosterone` | [Калькулятор свободного тестостерона (Вермюлен)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/free-testosterone.md) | Свободная и биодоступная фракции тестостерона по модели связывания Vermeulen 1999. Результат требует референсов метода и клинического контекста. |
| `anion-gap` | [Калькулятор анионной разницы и дельта-отношения](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) | Анионная разница с поправкой на альбумин (Figge) и дельта-отношение ΔAG/ΔHCO₃ для различения ацидоза с высокой и нормальной анионной разницей. |
| `corrected-calcium` | [Калькулятор скорректированного кальция по альбумину](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) | Учебный расчёт общего кальция с поправкой на альбумин по упрощённой формуле Пейна. Не измеряет ионизированный кальций и не определяет лечение. |
| `one-rep-max` | [Калькулятор 1ПМ (одноповторный максимум)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/one-rep-max.md) | Определяет предельный вес, который атлет может поднять на одно повторение, без риска травм при субмаксимальном тестировании на 2–10 повторений. |
| `heart-rate-zones` | [Калькулятор пульсовых зон](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) | Рассчитывает индивидуальные границы 5 зон частоты сердечных сокращений для кардиотренировок, сжигания жира, развития ПАНО и МПК. |
| `vo2max` | [Калькулятор МПК (VO2max)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) | Оценивает аэробную мощность и кардиореспираторную выносливость в мл/кг/мин, прогнозирует соревновательный темп на 5 км и 10 км. |
| `ffmi` | [Калькулятор FFMI (индекс безжировой массы)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ffmi.md) | Определяет количество сухой мышечной массы с поправкой на рост человека и оценивает вероятность натурального телосложения без применения фармакологии. |
| `katch-mcardle` | [Калькулятор BMR и TDEE Кэтча — МакАрдла](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) | Определяет базовый метаболизм (BMR) и суточный расход энергии (TDEE) на основе безжировой массы тела (LBM), что критически важно для мускулистых людей и при ожирении. |
| `ideal-body-weight` | [Калькулятор идеального веса (IBW и AdjBW)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) | Рассчитывает эталонную массу тела по общепринятым клиническим формулам для дозирования медикаментов, оценки нутритивного статуса и здорового диапазона ИМТ 18,5–24,9. |
| `waist-ratios` | [Калькулятор индексов талии (WHtR, WHR, VAI)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/waist-ratios.md) | Оценивает распределение жировой ткани, висцеральное ожирение и кардиометаболический риск точнее стандартного ИМТ. |
| `sweat-rate` | [Калькулятор потоотделения и регидратации (Sweat Rate)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) | Определяет индивидуальный темп потери жидкости с потом во время тренировки и формирует план восстановления водно-солевого баланса (125–150% от потерь). |
| `muscle-potential` | [Калькулятор мышечного потенциала (Кейси Батт и Мартин Беркхан)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) | Определяет максимально достижимую сухую мышечную массу и предельные объёмы тела (грудь, бицепс, бедро) без использования анаболических стероидов. |
| `powerlifting-coefficients` | [Калькулятор коэффициентов пауэрлифтинга (DOTS, Wilks, IPF GL)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) | Сравнивает абсолютную силу атлетов разных весовых категорий и пола в троеборье (присед, жим, тяга) по формулам DOTS, Wilks и IPF GL Points. |
| `protein-intake` | [Калькулятор суточной нормы белка (ISSN и ESPEN)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) | Рассчитывает оптимальное суточное количество протеина с учётом целей (похудение, гипертрофия, здоровье 65+), типа питания и синтеза мышечного белка (MPS). |
| `fiber-intake` | [Калькулятор нормы клетчатки (пищевых волокон)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) | Определяет суточную потребность в растворимых и нерастворимых пищевых волокнах для микробиоты кишечника, нормализации холестерина и моторики ЖКТ. |
| `omega-3` | [Калькулятор Омега-3 (дозировка EPA + DHA и индекс)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/omega-3.md) | Определяет оптимальную суточную дозу эйкозапентаеновой (EPA) и докозагексаеновой (DHA) кислот под конкретные клинические цели и образ жизни. |
| `sodium-potassium` | [Калькулятор баланса натрия и калия (Na:K и соль)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) | Оценивает электролитный баланс калия и натрия в рационе, рассчитывает эквивалент поваренной соли и кардиоваскулярный риск. |
| `alcohol` | [Калькулятор выведения алкоголя (формула Видмарка)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/alcohol.md) | Рассчитывает пиковую и текущую концентрацию этанола в крови (в промилле ‰), точное время до полного отрезвления и калорийность алкоголя. |
| `caffeine` | [Калькулятор выведения кофеина и времени до сна](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/caffeine.md) | Рассчитывает динамику распада кофеина в крови, период полувыведения (с учётом курения, КОК и беременности) и остаточный уровень ко времени отхода ко сну. |
| `weight-loss-forecast` | [Калькулятор динамического прогноза снижения веса (модель Кевина Холла)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) | Строит реалистичную нелинейную траекторию похудения на основе метаболической модели Кевина Холла (NIH), учитывая адаптивное замедление обмена и сохранение мышц. |
| `sleep-cycles` | [Калькулятор циклов сна](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sleep-cycles.md) | Инструмент расчета времени сна на основе 90-минутных ультрадианных циклов (фазы медленного и быстрого сна) и среднего времени засыпания. |
| `findrisc` | [Шкала риска диабета FINDRISC](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/findrisc.md) | Международно признанный опросник ВОЗ и IDF для раннего скрининга скрытого диабета и оценки риска манифестации СД 2 типа за 10 лет. |
| `debq` | [Голландский опросник пищевого поведения (DEBQ)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) | Классический валидированный психологический инструмент для выявления трех ведущих типов нарушений пищевого поведения: ограничительного, эмоциогенного и экстернального. |
| `phq-9` | [Опросник здоровья пациента PHQ-9 (Депрессия)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) | Международный золотой стандарт первичного скрининга депрессии (Patient Health Questionnaire-9), рекомендованный ВОЗ. |
| `gad-7` | [Шкала генерализованной тревоги GAD-7](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/gad-7.md) | Международный клинический опросник для быстрой оценки выраженности генерализованного тревожного расстройства и эмоционального напряжения. |
| `pss-10` | [Шкала воспринимаемого стресса PSS-10](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) | Классическая шкала Шелдона Коэна для измерения уровня субъективно переживаемого стресса за последний месяц. |
| `isi` | [Индекс тяжести бессонницы ISI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) | Короткий клинический инструмент из 7 вопросов для оценки выраженности бессонницы, ночных пробуждений и их влияния на дневную жизнь. |
| `scoff` | [Скрининг нарушений пищевого поведения SCOFF](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/scoff.md) | Всемирно признанный скрининговый тест из 5 простых вопросов для раннего выявления признаков нервной анорексии и булимии. |
| `ies-2` | [Шкала интуитивного питания IES-2](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) | Научно валидированная шкала Трейси Тилк (23 вопроса) для измерения степени гармонии и интуитивного подхода в отношениях с едой. |
| `yfas` | [Йельская шкала пищевой зависимости mYFAS 2.0](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) | Адаптированный научный опросник Йельского университета для диагностики признаков аддиктивного влечения к высококалорийной ультрапереработанной пище. |
| `eating-behavior-wizard` | [Мастер диагностики пищевого поведения](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/eating-behavior-wizard.md) | Интегрированный диагностический мастер NutriFit, объединяющий ведущие валидированные шкалы для определения глубинного психотипа питания и персональной стратегии. |


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
