# NutriFit Widgets — Калькулятори харчування та здоров’я для вашого сайту

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[![npm](https://img.shields.io/npm/v/@nutrifit/widgets)](https://www.npmjs.com/package/@nutrifit/widgets) [![GitHub Release](https://img.shields.io/github/v/release/nutrifit-health/nutrifit-widgets)](https://github.com/nutrifit-health/nutrifit-widgets/releases) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE)

Вбудуйте 49 калькуляторів харчування, фітнесу, лабораторних показників і способу життя через React-компонент, JavaScript або iframe. Почніть із TDEE та норми калорій, БЖВ, норми води, складу тіла або поживної цінності страви.

**[Спробувати віджети](https://nutrifit.health/embed/calculators/tdee?lang=uk&theme=auto)** · [БЖВ](https://nutrifit.health/embed/calculators/macros?lang=uk&theme=auto) · [Норма води](https://nutrifit.health/embed/calculators/water?lang=uk&theme=auto) · [Усі 49 калькуляторів](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/CALCULATORS.md) · [Оформлення](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/APPEARANCE.md)

![Огляд калькуляторів, способів вбудовування та можливостей](https://raw.githubusercontent.com/nutrifit-health/nutrifit-widgets/main/docs/assets/widget-overview-uk.svg)

- Шість мов; світла, темна та системна теми.
- Налаштування тла, кольорів і заокруглення під ваш сайт.
- Відвідувачі рахують на вашій сторінці без облікового запису NutriFit і можуть завантажити брендований PDF.

Безкоштовні віджети зберігають бренд NutriFit. Калькулятори розміщені на серверах NutriFit; потрібне мережеве з’єднання.

## Встановлення

Встановіть пакет. React-адаптери підтримують React 18.2 і 19; незалежному JavaScript-модулю React не потрібен.

```sh
npm install @nutrifit/widgets
```

## Підключення через React

Використовуйте `CalculatorFrame` з будь-яким ID каталогу. `NutritionCalculatorFrame` вбудовує калькулятор страви. Універсальний варіант — `WidgetFrame widget="tdee"`. Обчислення залишаються в iframe; компонент не копіює формули до вашого застосунку.

```tsx
import { CalculatorFrame, NutritionCalculatorFrame } from '@nutrifit/widgets';

export function Calculators() {
  return <>
    <CalculatorFrame calculator="tdee" locale="uk" theme="auto" title="NutriFit TDEE" />
    <NutritionCalculatorFrame locale="uk" theme="light" />
  </>;
}
```

## JavaScript без фреймворку

Розміщуйте завантажувач разом із модулями `core/*.js`. Кожен контейнер може мати власний калькулятор, мову й тему. Висота iframe налаштовується автоматично. Для керування життєвим циклом імпортуйте `mountWidget` із `@nutrifit/widgets/core`; при видаленні викликайте `handle.destroy()`.

```html
<div data-nutrifit-widget="tdee" data-locale="uk" data-theme="auto" data-title="NutriFit TDEE"></div>
<div data-nutrifit-widget="nutrition" data-locale="uk"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

```js
import { mountWidget } from '@nutrifit/widgets/core';
const handle = mountWidget(document.getElementById('calculator'), {
  widget: 'water', locale: 'uk', theme: 'light',
});
// handle.destroy()
```

## Звичайний iframe

Звичайний iframe має фіксовану висоту та внутрішню прокрутку. Для автоматичної висоти використовуйте React або JavaScript. Замініть `tdee` на ID каталогу. Калькулятор страви має адресу `/embed/nutrition-calculator`.

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=uk&theme=light"
  title="NutriFit TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

## Мови та оформлення

Передайте `locale` у React або модуль, `data-locale` у HTML або `lang` в адресу iframe. Доступні **en, ru, es, uk, kk, uz**. Теми: `light`, `dark`, `auto`; auto враховує налаштування браузера. Додайте зрозумілий заголовок мовою сторінки через `title` або `data-title`.

## Як користуватися калькуляторами

Оберіть ID, мову й тему та заповніть поля у вказаних одиницях. Формульні калькулятори оновлюють результат під час введення; опитувальники показують підсумок після відповідей. Методика, обмеження та джерела доступні у віджеті. Повний результат видно на вашому сайті без облікового запису NutriFit. Добровільне посилання відкриває повну сторінку в новій вкладці; введені значення калькуляторів каталогу не переносяться.

Для `nutrition`: знайдіть публічні продукти або рецепти, додайте їхню вагу в грамах і вкажіть вагу готової страви. Натисніть розрахунок для сум і значень на 100 г; доступні PDF та CSV. Відсутні значення нутрієнтів позначаються як неповні й не перетворюються на нуль. Максимум — 50 інгредієнтів.

Безкоштовні віджети можуть запросити наявний фірмовий серверний PDF. Це знімок показаних полів і результатів, а не незалежний перерахунок чи діагностична перевірка. Потрібен доступний сервер. В опитувальниках завершіть відповіді перед експортом.

[Докладні інструкції, методики, формули та обмеження кожного калькулятора](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/CALCULATORS.md).

## Повний каталог

| ID віджета | Калькулятор | Призначення |
|---|---|---|
| `nutrition` | [Калькулятор поживної цінності страви](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/nutrition.md) | Для `nutrition`: знайдіть публічні продукти або рецепти, додайте їхню вагу в грамах і вкажіть вагу готової страви. Натисніть розрахунок для сум і значень на 100 г; доступні PDF та CSV. Відсутні значення нутрієнтів позначаються як неповні й не перетворюються на нуль. Максимум — 50 інгредієнтів. |
| `tdee` | [Оцінка добових енерговитрат TDEE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) | Mifflin–St Jeor оцінює витрати у спокої. TDEE = оцінка × обраний коефіцієнт активності. −20% і +15% — авторські сценарії дефіциту й профіциту. |
| `macros` | [Авторський планувальник БЖВ](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) | Білок: 1,8–2,2 г/кг для зниження, 1,4–1,8 для утримання, 1,8–2,4 для набору; жир 0,8–1,2 г/кг. Використано середини; вуглеводи — залишок калорій за 4/9/4 ккал/г. |
| `water` | [Евристична оцінка добової води](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) | Обрана модель: 30 мл/кг + 500 мл за годину навантаження + 500 мл у спеку. Умовно 75% з напоїв; склянка = 250 мл. Вікового зниження немає. |
| `body-composition` | [Склад тіла за обхватами й ІМТ](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/body-composition.md) | Історична модель Hodgdon–Beckett (1984) за зростом і обхватами. Чоловіки: живіт на рівні пупка й шия; жінки: природна вузька талія, найширші стегна й шия. ІМТ = маса / зріст². |
| `glycemic-load` | [Глікемічне навантаження порції](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) | ГН = ГІ × доступні вуглеводи порції / 100. Вкажіть ГІ конкретного продукту й приготування за шкалою глюкоза = 100, доступні вуглеводи на 100 г і масу порції. Початкові числа — приклад. |
| `deficiency-risk` | [Чек-лист харчування та способу життя](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) | Авторський довідковий чек-лист: позначте поточні особливості харчування та способу життя й перегляньте пов’язані теми нутрієнтів. |
| `health-balance-wheel` | [Авторське колесо самооцінки](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) | Оцініть задоволеність вісьмома сферами за останні 14 днів від 1 до 10. Загальний бал = середнє × 10; однорідність = max(0, 100 − 18 × стандартне відхилення), з округленням. |
| `homa-ir` | [Калькулятор HOMA-IR: індекс інсулінорезистентності](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/homa-ir.md) | Індекси HOMA-IR, HOMA-β і QUICKI за глюкозою та інсуліном натще: оцінка інсулінорезистентності та функції β-клітин із нормами та інтерпретацією. |
| `tyg-index` | [Калькулятор індексу TyG (тригліцериди × глюкоза)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) | Дослідницький індекс за тригліцеридами та глюкозою натще, з похідними TyG-BMI і TyG-WC. |
| `lipid-profile` | [Ліпідний профіль: розрахункові показники](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lipid-profile.md) | Обчислює LDL за Фрідвальдом і Семпсоном, non-HDL, залишковий холестерин та ліпідні співвідношення. |
| `egfr` | [Калькулятор ШКФ (eGFR) за CKD-EPI 2021](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/egfr.md) | Розрахункова ШКФ за CKD-EPI 2021 (креатинін, опційно цистатин C), кліренс креатиніну за Кокрофтом — Голтом і стадія ХХН за KDIGO — з перерахунком мкмоль/л і мг/дл. |
| `hba1c-eag` | [Перерахунок HbA1c та середньої глюкози](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/hba1c-eag.md) | Оцінка середньої глюкози приблизно за 2–3 місяці з лабораторного HbA1c або зворотна приблизна оцінка. |
| `lab-unit-converter` | [Конвертер одиниць лабораторних аналізів](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lab-unit-converter.md) | Перерахунок 33 лабораторних показників між СІ (ммоль/л, мкмоль/л, нмоль/л, пмоль/л) і традиційними одиницями (мг/дл, нг/мл, пг/мл) за молярними масами. |
| `vitamin-d-dose` | [Вітамін D: оцінка моделі van Groningen](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vitamin-d-dose.md) | 25(OH)D у двох одиницях і дослідницька оцінка за масою тіла. Автоматична схема лікування не призначається. |
| `iron-deficiency` | [Калькулятор дефіциту заліза: TSAT, феритин та дефіцит за Ганзоні](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) | TSAT = залізо / ЗЗЗС × 100%. Модель Ганцоні: маса × (15 − Hb у г/дл) × 2,4 + 500 мг для маси ≥ 35 кг. Її показують лише за Hb і феритину нижче обраних порогів. |
| `phenoage` | [Калькулятор біологічного віку PhenoAge (Levine)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) | Модель Levine 2018 поєднує дев’ять біомаркерів і календарний вік. PhenoAge — віковий еквівалент популяційного ризику в моделі NHANES, а не вік органів чи індивідуальна тривалість життя. Різниця з віком — арифметичне віднімання, не швидкість старіння та не статистичний залишок PhenoAgeAccel. |
| `fib-4` | [Калькулятор FIB-4 та APRI: індекси фіброзу печінки](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fib-4.md) | FIB-4 (Sterling 2006) використовує вік, AST, ALT і тромбоцити. Пороги AASLD 2023 оцінюють імовірність вираженого фіброзу при метаболічній жировій хворобі печінки, а не його стадію. Вік 35–65: нижній поріг 1,3; понад 65: 2,0; верхній поріг 2,67. До 35 років категорія не присвоюється; при гострому захворюванні результат не інтерпретують. APRI (Wai 2003) і пороги 0,5/1,5 стосуються значущого фіброзу при хронічному гепатиті C і не переносяться автоматично на інші захворювання. |
| `free-testosterone` | [Вільний тестостерон за Вермюленом](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/free-testosterone.md) | Розрахунок вільної та не зв’язаної з SHBG фракцій із загального тестостерону, SHBG і альбуміну. |
| `anion-gap` | [Калькулятор аніонної різниці та дельта-співвідношення](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) | Аніонна різниця = Na − Cl − HCO₃; поправка на альбумін = 0,25 × (40 − альбумін у г/л). Дельта-відношення = (скоригована різниця − обраний референс) / (референсний бікарбонат − HCO₃). |
| `corrected-calcium` | [Калькулятор скоригованого кальцію за альбуміном](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) | Скоригований кальцій = загальний кальцій + 0,02 × (40 − альбумін), кальцій у ммоль/л, альбумін у г/л. Це спрощена формула Payne. |
| `one-rep-max` | [Оцінка одноповторного максимуму 1RM](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/one-rep-max.md) | Основний результат — авторське середнє Epley і Brzycki. Нижче окремі формули та арифметичні відсотки середнього. |
| `heart-rate-zones` | [Пульсові зони за резервом ЧСС](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) | Цільова ЧСС = ЧССпокою + частка × (ЧССмакс − ЧССпокою). Обрано п’ять смуг: 50–60, 60–70, 70–80, 80–90 і 90–100% резерву. |
| `vo2max` | [Польові оцінки VO2max](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) | Купер: дистанція за 12 хвилин. Rockport: швидка ходьба 1 милі (1609,344 м), час і кінцева ЧСС; початкова перевірка у здорових дорослих 30–69 років. Uth: 15,3 × ЧССмакс / ЧССпокою; перевірений у добре тренованих чоловіків 21–51 року. |
| `ffmi` | [Індекс безжирової маси FFMI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ffmi.md) | Безжирова маса = маса × (1 − відсоток жиру / 100); FFMI = безжирова маса / зріст², зріст у метрах. Для чоловіків: нормалізований FFMI = FFMI + 6,3 × (1,8 − зріст), за анотацією Kouri (1995). |
| `katch-mcardle` | [Оцінки обміну за безжировою масою](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) | Безжирова маса = маса × (1 − жир / 100). Katch–McArdle: 370 + 21,6 × безжирова маса; Cunningham: 500 + 22 × безжирова маса. Добову оцінку Katch множать на обраний коефіцієнт активності. |
| `ideal-body-weight` | [Історичні формули розрахункової маси](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) | Devine, Robinson, Miller і наближена Hamwi для зросту ≥ 152,4 см. Середнє чотирьох формул — авторський агрегат; AdjBW = Devine + 0,4 × (фактична маса − Devine), лише за перевищення Devine. |
| `waist-ratios` | [Індекси талії WHR, WHtR і VAI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/waist-ratios.md) | WHR = талія / стегна; WHtR = талія / зріст. Талію вимірюють між нижнім ребром і верхом таза після спокійного видиху, стегна — у найширшому місці. VAI також використовує масу, ТГ і ЛПВЩ у ммоль/л за Amato (2010). |
| `sweat-rate` | [Оцінка втрат поту за тренування](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) | Піт (л) ≈ маса до − маса після (кг) + випите (л) − сеча (л); швидкість = піт / час у годинах. Зважуйтеся в однакових умовах без мокрого одягу. |
| `muscle-potential` | [Антропометрична модель Casey Butt](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) | Евристична оцінка маси й обхватів за зростом, зап’ястям, щиколоткою та припущенням жиру. Авторські обхвати описують чоловіків-бодибілдерів за приблизно 8–10% жиру. Berkhan: окремий орієнтир зріст (см) − 100 кг. |
| `powerlifting-coefficients` | [Коефіцієнти триборства DOTS, Wilks і IPF GL](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) | Вкажіть масу на зважуванні та суму найкращих успішних присідання, жиму й тяги в кілограмах. DOTS, класичний Wilks і IPF GL 2020 для класичного триборства. |
| `protein-intake` | [Довідкові орієнтири білка](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) | Для здорових дорослих EFSA PRI — 0,83 г/кг/добу. Для здорових людей, що тренуються, ISSN наводить 1,4–2,0 г/кг/добу; ESPEN для здорових літніх людей — 1,0–1,2. Кількість розраховано за введеною фактичною масою тіла. Діапазон не є верхньою межею безпеки. |
| `fiber-intake` | [Довідкові орієнтири клітковини](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) | Орієнтири показано окремо: EFSA — 25 г/добу для дорослих; IOM/NASEM — 14 г/1000 ккал. AI IOM за віком і статтю: 19–50 років — 38 г для чоловіків і 25 г для жінок; після 50 — 30 і 21 г. Енергетичний розрахунок не замінює автоматично інші орієнтири. |
| `omega-3` | [Довідкові орієнтири EPA та DHA](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/omega-3.md) | AI EFSA для дорослих — 250 мг EPA+DHA на добу з їжі та добавок разом. Під час вагітності й лактації додатково до цієї кількості вказано 100–200 мг DHA на добу. Це не фіксоване співвідношення EPA:DHA і не маса всього риб’ячого жиру. |
| `sodium-potassium` | [Натрій і калій у добовому раціоні](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) | Для дорослих WHO рекомендує менш ніж 2000 мг натрію і щонайменше 3510 мг калію на добу. Молярне співвідношення: (Na, мг / 23) / (K, мг / 39,1). Приблизний сольовий еквівалент: натрій, мг × 2,5 / 1000. Співвідношення показано без категорії індивідуального ризику. |
| `alcohol` | [Етанол і навчальна оцінка Відмарка](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/alcohol.md) | Обчислює кількість етанолу, його калорії та приблизну концентрацію за спрощеною моделлю. |
| `caffeine` | [Залишок кофеїну: розрахункова модель](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/caffeine.md) | Оцінює залишок кофеїну зараз і перед сном за вибраного періоду напіввиведення. |
| `weight-loss-forecast` | [Сценарій зміни ваги Hall–Chow](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) | Спрощена модель із середніми параметрами показує зміну ваги за постійного зниження початкового споживання енергії та незмінної активності. |
| `sleep-cycles` | [Планувальник сну](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sleep-cycles.md) | Час відходу до сну або підйому для 7, 8 і 9 годин сну з урахуванням часу засинання. |
| `findrisc` | [Шкала ризику діабету FINDRISC](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/findrisc.md) | Довідковий ризик діабету 2 типу за 10 років за 8 чинниками FINDRISC; сума 0–26. Відсотки стосуються початкової дослідженої популяції й не є точною особистою ймовірністю. |
| `debq` | [Харчова поведінка: змінена адаптація DEBQ](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) | 33 питання про звичну харчову поведінку. Показано середні відповідей у трьох групах, без категорій норми та діагнозу. |
| `phq-9` | [Опитувальник здоров'я пацієнта PHQ-9 (Депресія)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) | Вираженість депресивних симптомів за останні 2 тижні: 9 частотних відповідей від 0 до 3; сума 0–27. |
| `gad-7` | [Шкала генералізованої тривоги GAD-7](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/gad-7.md) | Вираженість симптомів тривоги за останні 2 тижні: 7 частотних відповідей від 0 до 3; сума 0–21. |
| `pss-10` | [Шкала сприйманого стресу PSS-10](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) | Оцінка сприйманого стресу за останній місяць за 10 пунктами PSS-10. |
| `isi` | [Індекс тяжкості безсоння ISI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) | Оцінка сну за останні 2 тижні: 7 пунктів із різними шкалами від 0 до 4; сума 0–28. Задоволеність, помітність проблем, занепокоєння та вплив на життя мають власні відповіді. |
| `scoff` | [Скринінг порушень харчової поведінки SCOFF](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/scoff.md) | Всесвітньо визнаний скринінговий тест із 5 простих запитань для виявлення ризику розладів харчової поведінки (анорексії та булімії). |
| `ies-2` | [Шкала інтуїтивного харчування IES-2](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) | IES-2: 23 твердження про ставлення до їжі та тілесних сигналів, чотири субшкали. |
| `yfas` | [Єльська шкала харчової залежності mYFAS 2.0](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) | mYFAS 2.0: 13 запитань про проблеми з харчуванням за останні 12 місяців. |
| `eating-behavior-wizard` | [Самооцінка харчової поведінки](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/eating-behavior-wizard.md) | П’ять запитань SCOFF і чотири авторські запитання для самооцінки харчової поведінки. |


## Параметри та події

`hostUrl` задає origin відповідного стенда HTTP(S) без шляху, логіна й query. `campaign` позначає джерело переходу. `integrationId` обирає інтеграцію облікового запису; сервер перевіряє домен і доступ. Зміна калькулятора, хоста, мови, теми або інтеграції створює iframe заново та очищає незбережений стан.

`onEvent` отримує `ready`, `calculated` або `error`. Ready означає завантаження інтерфейсу, а не доступність API. Калькулятори каталогу надсилають calculated при зміні результату, включно з початковим розрахунком. Події не передають введені дані, відповіді або результати сайту-власнику. PostMessage перевіряє origin, вікно, instance і протокол. CSP має дозволяти `frame-src https://nutrifit.health`, а для завантажувача також `script-src https://nutrifit.health`.

## Розміщений сервіс і нативний React

Безкоштовні віджети зберігають бренд NutriFit та добровільні посилання. White label потребує окремого налаштованого тарифу, інтеграції та підтвердженого точного HTTPS-домену; особистий Premium його не включає. Віджети каталогу можуть показувати підтверджений бренд клієнта; кнопка фірмового PDF NutriFit у цьому режимі відсутня. Платний калькулятор страви підтримує сервісні PDF/CSV з брендом клієнта.

`NativeNutritionCalculator` із `@nutrifit/widgets/native` показує калькулятор страви прямо на вашій сторінці. Підключіть `@nutrifit/widgets/native.css`. Коротку сесію надає ваш сервер; постійний ключ зберігайте лише на сервері. Решта калькуляторів використовує React iframe, а не нативні DOM-компоненти. Локальні формули не витрачають квоту API харчування; розрахунок страви та її PDF витрачають.

```tsx
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function NativeCalculator() {
  return <NativeNutritionCalculator locale="uk" getSession={async (signal) => {
    const response = await fetch('/api/nutrifit-session', { method: 'POST', signal });
    if (!response.ok) throw new Error('Widget session unavailable');
    return response.json();
  }} />;
}
```

У кабінеті інтеграцій активуйте налаштований тариф із нативним доступом, додайте точний HTTPS origin, опублікуйте TXT-запис DNS, підтвердьте домен і випустіть серверний ключ. Зберігайте `NUTRIFIT_WIDGET_KEY` та `NUTRIFIT_SITE_ORIGIN` лише на сервері. Посередник нижче обмінює ключ на п’ятихвилинну сесію та повертає повний envelope у getSession. Обмежуйте доступ відвідувачів і частоту запитів; не записуйте ключ або сесію в логи.

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

[Native API](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/NATIVE_REACT.md) · [Service](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=uk)

## Ліцензія та межі

Copyright (c) 2026 **NUTRIFIT LLC**. Код адаптерів і нативного інтерфейсу страви поширюється за стандартною MIT. Ліцензія на код не надає квоти сервісу, права white label, прав на знак NutriFit або власності на клінічні опитувальники. Backend, особистий кабінет і каталог продуктів не включені. Медичні та психологічні калькулятори зберігають обмеження й не є діагнозом.

[MIT](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE) · [GitHub](https://github.com/nutrifit-health/nutrifit-widgets)

Брендовані віджети використовують офіційний логотип NutriFit: світлий, темний або за системною темою з `theme="auto"`. White-label зберігає бренд клієнта. Native CSS містить PNG; суворий CSP має дозволяти `data:` у `img-src`. Умови використання бренду — у [NOTICE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/NOTICE).


[Нативна інтеграція React](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/NATIVE_REACT.md) · [Модель сервісу](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/SERVICE_MODEL.md) · [Додавання віджетів](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/ADDING_WIDGETS.md) · [Публікація релізів](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/RELEASING.md)

Основний npm-пакет — `@nutrifit/widgets`. GitHub Packages також надає `@nutrifit-health/widgets`, пов’язаний із репозиторієм і створений з опублікованого npm-архіву. Scope відповідає власнику репозиторію GitHub. Установлення з GitHub потребує авторизації; для npm використовуйте команду вище.

[GitHub Packages](https://github.com/nutrifit-health/nutrifit-widgets/pkgs/npm/widgets)

## Локальна демонстрація

Перегляньте всі 49 калькуляторів: увесь інтерфейс перекладено шістьма мовами, доступні світла й темна теми та готові приклади React, JavaScript і iframe.

У клонованому репозиторії виконайте:

```sh
npm install --prefix examples/consumer-site
npm run demo
```

Відкрийте [демонстрацію](http://127.0.0.1:5178/?lang=uk). Типова локальна адреса NutriFit — `http://localhost:5100`; її можна змінити в налаштуваннях підключення. Залиште процес демонстрації запущеним.

[Локальна демонстрація](../../examples/consumer-site/README.md)
