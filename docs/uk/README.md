# @nutrifit/widgets

[Оформлення віджетів](APPEARANCE.md)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[![npm](https://img.shields.io/npm/v/@nutrifit/widgets)](https://www.npmjs.com/package/@nutrifit/widgets) [![GitHub Release](https://img.shields.io/github/v/release/nutrifit-health/nutrifit-widgets)](https://github.com/nutrifit-health/nutrifit-widgets/releases) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE)

Брендовані калькулятори NutriFit для вашого сайту: калькулятор страви та всі 48 інструментів публічного каталогу. Адаптери React, JavaScript та iframe використовують ті самі розміщені форми й обчислення, що й NutriFit.

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
| `tdee` | [Калькулятор добової норми калорій (TDEE)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) | Рахує базальний обмін і повні добові витрати енергії, а також калорійність для зниження, утримання та набору маси тіла. |
| `macros` | [Калькулятор БЖВ](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) | Розподіляє добову калорійність між білками, жирами та вуглеводами з урахуванням маси тіла й мети — у грамах, калоріях і відсотках. |
| `water` | [Калькулятор норми води](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) | Рахує добову потребу в рідині від маси тіла з поправками на фізичне навантаження та спекотний клімат. |
| `body-composition` | [Калькулятор складу тіла](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/body-composition.md) | Оцінює частку жиру за обхватами тіла, рахує жирову й суху масу та індекс маси тіла. |
| `glycemic-load` | [Калькулятор глікемічного навантаження](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) | Рахує глікемічне навантаження порції за глікемічним індексом і вмістом вуглеводів — величину, що відображає реальний відгук глюкози краще, ніж сам лише індекс. |
| `deficiency-risk` | [Скринінг ризику дефіциту нутрієнтів](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) | Позначає чинники способу життя та харчування й показує, дефіцит яких нутрієнтів імовірний і якими аналізами це перевіряється. |
| `health-balance-wheel` | [Колесо балансу здоров'я та харчування](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) | Інтерактивна діаграма 8 сфер здоров'я та способу життя. Виявляє вузькі місця (закон мінімуму Лібіха) та пов'язує дефіцити з інструментами NutriFit. |
| `homa-ir` | [Калькулятор HOMA-IR: індекс інсулінорезистентності](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/homa-ir.md) | Індекси HOMA-IR, HOMA-β і QUICKI за глюкозою та інсуліном натще: оцінка інсулінорезистентності та функції β-клітин із нормами та інтерпретацією. |
| `tyg-index` | [Калькулятор індексу TyG (тригліцериди × глюкоза)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) | Індекс TyG і похідні TyG-BMI, TyG-WC: оцінка інсулінорезистентності та кардіометаболічного ризику за тригліцеридами і глюкозою натще — без аналізу на інсулін. |
| `lipid-profile` | [Калькулятор ліпідного профілю: ЛПНЩ, non-HDL та індекси атерогенності](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lipid-profile.md) | Розрахунковий ЛПНЩ двома методами, non-HDL, залишковий холестерин і п’ять індексів атерогенності за стандартною ліпідограмою — з цільовими значеннями ESC/EAS. |
| `egfr` | [Калькулятор ШКФ (eGFR) за CKD-EPI 2021](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/egfr.md) | Розрахункова ШКФ за CKD-EPI 2021 (креатинін, опційно цистатин C), кліренс креатиніну за Кокрофтом — Голтом і стадія ХХН за KDIGO — з перерахунком мкмоль/л і мг/дл. |
| `hba1c-eag` | [Конвертер HbA1c ↔ середня глюкоза (eAG)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/hba1c-eag.md) | Перерахунок HbA1c у середню глікемію за 3 місяці за формулою ADAG, зворотний розрахунок і конвертація % ↔ ммоль/моль із категоріями ADA. |
| `lab-unit-converter` | [Конвертер одиниць лабораторних аналізів](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lab-unit-converter.md) | Перерахунок 33 лабораторних показників між СІ (ммоль/л, мкмоль/л, нмоль/л, пмоль/л) і традиційними одиницями (мг/дл, нг/мл, пг/мл) за молярними масами. |
| `vitamin-d-dose` | [Вітамін D: оцінка моделі van Groningen](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vitamin-d-dose.md) | 25(OH)D у двох системах одиниць і дослідницька сумарна оцінка навантажувальної дози холекальциферолу за формулою van Groningen 2010. |
| `iron-deficiency` | [Калькулятор дефіциту заліза: TSAT, феритин та дефіцит за Ганзоні](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) | TSAT, довідковий поріг феритину з урахуванням СРБ та арифметична оцінка за формулою Ганзоні 1970. |
| `phenoage` | [Калькулятор біологічного віку PhenoAge (Levine)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) | Дослідницька оцінка за дев'ятьма біомаркерами та хронологічним віком за моделлю Morgan Levine 2018 (Aging). |
| `fib-4` | [Калькулятор FIB-4 та APRI: індекси фіброзу печінки](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fib-4.md) | FIB-4 та APRI за віком, АСТ, АЛТ і тромбоцитами: розрахунок, пороги ризику та алгоритми наступних дій. |
| `free-testosterone` | [Калькулятор вільного тестостерону (Вермюлен)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/free-testosterone.md) | Вільна та біодоступна фракції тестостерону за моделлю зв'язування Vermeulen 1999. Результат вимагає референсів методу та клінічного контексту. |
| `anion-gap` | [Калькулятор аніонної різниці та дельта-співвідношення](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) | Аніонна різниця з поправкою на альбумін (Figge) та дельта-відношення (ΔAG/ΔHCO₃) при оцінці кислотно-лужного стану. |
| `corrected-calcium` | [Калькулятор скоригованого кальцію за альбуміном](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) | Розрахунок загального кальцію з поправкою на альбумін за формулою Payne (1973) та сучасні обмеження методу. |
| `one-rep-max` | [Калькулятор 1ПМ (одноповторний максимум)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/one-rep-max.md) | Визначає граничну вагу, яку атлет може підняти на одне повторення, без ризику травм під час субмаксимального тестування на 2–10 повторень. |
| `heart-rate-zones` | [Калькулятор пульсових зон](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) | Розраховує індивідуальні межі 5 тренувальних пульсових зон з урахуванням максимального пульсу та пульсу у спокої (метод резерву серцевого ритму). |
| `vo2max` | [Калькулятор МПК (VO2max)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) | Оцінює аеробну потужність і кардіореспіраторну витривалість на основі валідованих польових тестів без спеціального лабораторного обладнання. |
| `ffmi` | [Калькулятор FFMI (індекс безжирової маси тіла)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ffmi.md) | Визначає кількість сухої м'язової маси відносно зросту, відокремлюючи справжню м'язову гіпертрофію від накопичення жиру. |
| `katch-mcardle` | [Калькулятор BMR і TDEE Кетча — МакАрдла](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) | Визначає базовий метаболізм (BMR) і добову витрату енергії (TDEE) на основі чистої м'язової маси тіла замість загальної ваги. |
| `ideal-body-weight` | [Калькулятор ідеальної ваги (IBW та AdjBW)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) | Розраховує еталонну масу тіла за загальновизнаними клінічними формулами та визначає скориговану вагу (AdjBW) для нутриціології та медицини. |
| `waist-ratios` | [Калькулятор індексів талії (WHtR, WHR, VAI)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/waist-ratios.md) | Оцінює розподіл жирової тканини, об'єм вісцерального жиру та кардіометаболічний ризик набагато точніше за звичайний ІМТ. |
| `sweat-rate` | [Калькулятор потовиділення та регідратації](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) | Визначає індивідуальний темп втрати рідини з потом і розраховує персоналізований об'єм відновлення рідини та електролітів. |
| `muscle-potential` | [Калькулятор м'язового потенціалу (Кейсі Батт та Мартін Беркхан)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) | Визначає максимально досяжну суху м'язову масу та граничні обхвати тіла (груди, біцепс, стегно) без використання анаболічних стероїдів. |
| `powerlifting-coefficients` | [Калькулятор коефіцієнтів пауерліфтингу (DOTS, Wilks, IPF GL)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) | Порівнює абсолютну силу атлетів різних вагових категорій та статі у триборстві (присідання, жим, тяга) за формулами DOTS, Wilks та IPF GL Points. |
| `protein-intake` | [Калькулятор добової норми білка (ISSN та ESPEN)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) | Розраховує оптимальну добову кількість протеїну з урахуванням цілей (схуднення, гіпертрофія, здоров'я 65+), типу харчування та синтезу м'язового білка (MPS). |
| `fiber-intake` | [Калькулятор норми клітковини (харчових волокон)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) | Визначає добову потребу в розчинних та нерозчинних харчових волокнах для мікробіоти кишечника, нормалізації холестерину та моторики ШКТ. |
| `omega-3` | [Калькулятор Омега-3 (дозування EPA + DHA та індекс)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/omega-3.md) | Визначає оптимальну добову дозу ейкозапентаєнової (EPA) та докозагексаєнової (DHA) кислот під конкретні клінічні цілі та спосіб життя. |
| `sodium-potassium` | [Калькулятор балансу натрію та калію (Na:K та сіль)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) | Оцінює електролітний баланс калію та натрію в раціоні, розраховує еквівалент кухонної солі та кардіоваскулярний ризик. |
| `alcohol` | [Калькулятор виведення алкоголю (формула Відмарка)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/alcohol.md) | Розраховує пікову та поточну концентрацію етанолу в крові (у проміле ‰), точний час до повного витвереження та калорійність алкоголю. |
| `caffeine` | [Калькулятор виведення кофеїну та часу до сну](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/caffeine.md) | Розраховує динаміку розпаду кофеїну в крові, період напіввиведення (з урахуванням куріння, КОК та вагітності) та залишковий рівень до часу відходу до сну. |
| `weight-loss-forecast` | [Калькулятор динамічного прогнозу зниження ваги (модель Кевіна Холла)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) | Будує реалістичну нелінійну траєкторію схуднення на основі метаболічної моделі Кевіна Холла (NIH), враховуючи адаптивне уповільнення обміну та збереження м'язів. |
| `sleep-cycles` | [Калькулятор циклів сну](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sleep-cycles.md) | Інструмент розрахунку часу сну на основі 90-хвилинних ультрадіанних циклів (фази повільного та швидкого сну) і середнього часу засинання. |
| `findrisc` | [Шкала ризику діабету FINDRISC](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/findrisc.md) | Міжнародно визнаний опитувальник ВООЗ та IDF для раннього скринінгу прихованого діабету та оцінки ризику маніфестації ЦД 2 типу за 10 років. |
| `debq` | [Нідерландський опитувальник харчової поведінки (DEBQ)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) | Класичний валідований психологічний інструмент для виявлення трьох провідних типів порушень харчової поведінки: обмежувального, емоціогенного та екстернального. |
| `phq-9` | [Опитувальник здоров'я пацієнта PHQ-9 (Депресія)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) | Міжнародний золотий стандарт первинного скринінгу депресії та оцінки тяжкості симптомів за клінічними критеріями DSM-5. |
| `gad-7` | [Шкала генералізованої тривоги GAD-7](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/gad-7.md) | Міжнародний клінічний опитувальник для швидкої оцінки вираженості генералізованої тривоги та психоемоційного напруження. |
| `pss-10` | [Шкала сприйманого стресу PSS-10](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) | Класична психологічна шкала Шелдона Коена для вимірювання ступеня суб'єктивного сприйняття життєвих ситуацій як непередбачуваних і надмірних. |
| `isi` | [Індекс тяжкості безсоння ISI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) | Короткий клінічний інструмент із 7 запитань для оцінки вираженості, природи та денних наслідків інсомнії. |
| `scoff` | [Скринінг порушень харчової поведінки SCOFF](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/scoff.md) | Всесвітньо визнаний скринінговий тест із 5 простих запитань для виявлення ризику розладів харчової поведінки (анорексії та булімії). |
| `ies-2` | [Шкала інтуїтивного харчування IES-2](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) | Науково валідована шкала Трейсі Тілка (23 запитання) для вимірювання здорових, інтуїтивних стосунків з їжею та власним тілом. |
| `yfas` | [Єльська шкала харчової залежності mYFAS 2.0](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) | Адаптований науковий опитувальник Єльського університету для діагностики ознак адиктивного потягу до висококалорійної ультрапереробленої їжі. |
| `eating-behavior-wizard` | [Майстер діагностики харчової поведінки](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/eating-behavior-wizard.md) | Інтегрований діагностичний майстер NutriFit, що об'єднує провідні валідовані шкали для визначення глибинного психотипу харчування та індивідуальної стратегії. |


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
