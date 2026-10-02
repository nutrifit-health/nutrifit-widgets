# NutriFit Widgets — Сайтыңызға арналған тамақтану және денсаулық калькуляторлары

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[![npm](https://img.shields.io/npm/v/@nutrifit/widgets)](https://www.npmjs.com/package/@nutrifit/widgets) [![GitHub Release](https://img.shields.io/github/v/release/nutrifit-health/nutrifit-widgets)](https://github.com/nutrifit-health/nutrifit-widgets/releases) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE)

React компоненті, JavaScript немесе iframe арқылы тамақтану, фитнес, зертханалық көрсеткіштер және өмір салты бойынша 49 калькуляторды сайтыңызға енгізіңіз. TDEE мен калория нормасынан, БЖК, су нормасы, дене құрамы немесе тағамның қоректік құндылығынан бастаңыз.

**[Виджеттерді қолданып көру](https://nutrifit.health/embed/calculators/tdee?lang=kk&theme=auto)** · [БЖК](https://nutrifit.health/embed/calculators/macros?lang=kk&theme=auto) · [Су нормасы](https://nutrifit.health/embed/calculators/water?lang=kk&theme=auto) · [Барлық 49 калькулятор](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/CALCULATORS.md) · [Безендіру](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/APPEARANCE.md)

![Калькуляторлар, енгізу тәсілдері және мүмкіндіктерге шолу](https://raw.githubusercontent.com/nutrifit-health/nutrifit-widgets/main/docs/assets/widget-overview.svg)

- Алты тіл; ашық, қараңғы және жүйелік тақырыптар.
- Сайтыңызға сай фонды, түстерді және бұрыштарды дөңгелектеуді баптаңыз.
- Келушілер NutriFit аккаунтынсыз сіздің бетіңізде есептеп, брендтелген PDF есебін жүктей алады.

Тегін виджеттер NutriFit брендін сақтайды. Калькуляторлар NutriFit серверлерінде орналасқан; желіге қосылу қажет.

## Орнату

Пакетті орнатыңыз. React адаптерлері React 18.2 және 19 нұсқаларын қолдайды; тәуелсіз JavaScript модуліне React қажет емес.

```sh
npm install @nutrifit/widgets
```

## React арқылы қосу

Каталогтағы кез келген ID үшін `CalculatorFrame` қолданыңыз. `NutritionCalculatorFrame` тағам калькуляторын ендіреді. Жалпы нұсқа — `WidgetFrame widget="tdee"`. Есептеулер iframe ішінде қалады; компонент формулаларды қолданбаңызға көшірмейді.

```tsx
import { CalculatorFrame, NutritionCalculatorFrame } from '@nutrifit/widgets';

export function Calculators() {
  return <>
    <CalculatorFrame calculator="tdee" locale="kk" theme="auto" title="NutriFit TDEE" />
    <NutritionCalculatorFrame locale="kk" theme="light" />
  </>;
}
```

## Фреймворксіз JavaScript

Жүктеушіні `core/*.js` модульдерімен бірге орналастырыңыз. Әр контейнерде жеке калькулятор, тіл және тақырып болуы мүмкін. Iframe биіктігі автоматты түрде реттеледі. Өмірлік циклді басқару үшін `@nutrifit/widgets/core` ішінен `mountWidget` импорттап, жойғанда `handle.destroy()` шақырыңыз.

```html
<div data-nutrifit-widget="tdee" data-locale="kk" data-theme="auto" data-title="NutriFit TDEE"></div>
<div data-nutrifit-widget="nutrition" data-locale="kk"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

```js
import { mountWidget } from '@nutrifit/widgets/core';
const handle = mountWidget(document.getElementById('calculator'), {
  widget: 'water', locale: 'kk', theme: 'light',
});
// handle.destroy()
```

## Қарапайым iframe

Қарапайым iframe биіктігі бекітілген және ішкі айналдыруы бар. Автоматты биіктік үшін React немесе JavaScript қолданыңыз. `tdee` орнына каталог ID-ын қойыңыз. Тағам калькуляторының мекенжайы — `/embed/nutrition-calculator`.

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=kk&theme=light"
  title="NutriFit TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

## Тілдер және безендіру

React/модульге `locale`, HTML-ге `data-locale` немесе iframe URL-ына `lang` беріңіз. Кодтар: **en, ru, es, uk, kk, uz**. Тақырыптар: `light`, `dark`, `auto`; auto браузер баптауына сәйкес келеді. Бет тіліндегі түсінікті атауды `title` немесе `data-title` арқылы беріңіз.

## Калькуляторларды пайдалану

ID, тіл және тақырыпты таңдап, көрсетілген өлшем бірліктерімен деректерді енгізіңіз. Формулалық калькуляторлар енгізген кезде нәтижені жаңартады; сауалнамалар жауаптардан кейін қорытындыны көрсетеді. Әдістеме, шектеулер және дереккөздер виджет ішінде бар. Толық нәтиже сайтыңызда NutriFit аккаунтынсыз қолжетімді. Ерікті сілтеме толық бетті жаңа қойындыда ашады; каталог калькуляторларына енгізілген мәндер көшірілмейді.

`nutrition` үшін: ашық өнімдер немесе рецепттерді табып, граммен салмағын қосыңыз және дайын тағамның салмағын енгізіңіз. Толық тағам мен 100 г үшін есептеңіз; PDF және CSV қолжетімді. Белгісіз нутриенттер толық емес деп белгіленеді және нөлге айналмайды. Ең көбі — 50 ингредиент.

Тегін виджеттер бар брендті серверлік PDF файлын сұрай алады. Бұл көрсетілген өрістер мен нәтижелердің көшірмесі, тәуелсіз қайта есептеу немесе диагностикалық тексеру емес. Қолжетімді сервер қажет. Сауалнаманы экспорттау алдында барлық жауапты аяқтаңыз.

[Әр калькулятордың нұсқаулығы, әдістемесі, формуласы және шектеулері](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/CALCULATORS.md).

## Толық каталог

| Виджет ID-ы | Калькулятор | Мақсаты |
|---|---|---|
| `nutrition` | [Тағамның қоректік құндылығы калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/nutrition.md) | `nutrition` үшін: ашық өнімдер немесе рецепттерді табып, граммен салмағын қосыңыз және дайын тағамның салмағын енгізіңіз. Толық тағам мен 100 г үшін есептеңіз; PDF және CSV қолжетімді. Белгісіз нутриенттер толық емес деп белгіленеді және нөлге айналмайды. Ең көбі — 50 ингредиент. |
| `tdee` | [Тәуліктік калория нормасының калькуляторы (TDEE)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) | Негізгі алмасуды және тәуліктік толық энергия шығынын, сондай-ақ салмақты азайту, ұстап тұру және қосу үшін калориялықты есептейді. |
| `macros` | [БЖК калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) | Тәуліктік калориялықты дене салмағы мен мақсатты ескере отырып ақуыз, май және көмірсуларға бөледі — граммен, калориямен және пайызбен. |
| `water` | [Су нормасының калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) | Дене салмағынан тәуліктік сұйықтық қажеттілігін дене жүктемесі мен ыстық климатқа түзетумен есептейді. |
| `body-composition` | [Дене құрамының калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/body-composition.md) | Дене өлшемдері бойынша май үлесін бағалайды, май және таза массаны әрі дене салмағы индексін есептейді. |
| `glycemic-load` | [Гликемиялық жүктеме калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) | Порцияның гликемиялық жүктемесін гликемиялық индекс пен көмірсу мөлшері бойынша есептейді — бұл шама глюкоза реакциясын индекстің өзінен гөрі жақсы көрсетеді. |
| `deficiency-risk` | [Нутриент тапшылығы қаупінің скринингі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) | Өмір салты мен тамақтану факторларын белгілеп, қандай нутриенттің тапшылығы ықтимал екенін және оны қандай талдаумен тексеретінін көрсетеді. |
| `health-balance-wheel` | [Денсаулық пен тамақтану балансының дөңгелегі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) | Денсаулықтың 8 саласы бойынша интерактивті диаграмма. Либих заңы бойынша тар буындарды анықтайды және NutriFit құралдарымен байланыстырады. |
| `homa-ir` | [HOMA-IR калькуляторы: инсулинге төзімділік индексі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/homa-ir.md) | Аш қарынға глюкоза мен инсулин бойынша HOMA-IR, HOMA-β және QUICKI индекстері: инсулинге төзімділік пен β-жасуша функциясын нормалармен және түсіндірмемен бағалау. |
| `tyg-index` | [TyG индексінің калькуляторы (триглицеридтер × глюкоза)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) | TyG индексі және TyG-BMI, TyG-WC туындылары: аш қарынға триглицеридтер мен глюкоза бойынша инсулинге төзімділік пен кардиометаболикалық қауіпті бағалау — инсулин талдауынсыз. |
| `lipid-profile` | [Липидтік профиль калькуляторы: ТТЛП, non-HDL және атерогендік индекстер](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lipid-profile.md) | Стандартты липидограмма бойынша екі әдіспен есептелген ТТЛП, non-HDL, қалдық холестерин және бес атерогендік индекс — ESC/EAS мақсатты мәндерімен. |
| `egfr` | [CKD-EPI 2021 бойынша ШСФ (eGFR) калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/egfr.md) | CKD-EPI 2021 бойынша есептік ШСФ (креатинин, қалауыңызша цистатин C), Кокрофт — Голт бойынша креатинин клиренсі және KDIGO бойынша СБА кезеңі — мкмоль/л және мг/дл қайта есептеуімен. |
| `hba1c-eag` | [HbA1c ↔ орташа глюкоза (eAG) түрлендіргіші](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/hba1c-eag.md) | ADAG формуласы бойынша HbA1c-ті 3 айлық орташа гликемияға қайта есептеу, кері есептеу және ADA санаттарымен % ↔ ммоль/моль түрлендіру. |
| `lab-unit-converter` | [Зертханалық талдау бірліктерінің конвертері](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lab-unit-converter.md) | Молярлық массалар бойынша 33 зертханалық көрсеткішті ХЖ (ммоль/л, мкмоль/л, нмоль/л) және дәстүрлі бірліктер (мг/дл, нг/мл) арасында қайта есептеу. |
| `vitamin-d-dose` | [D дәрумені: van Groningen моделін бағалау](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vitamin-d-dose.md) | Екі бірлік жүйесіндегі 25(OH)D және van Groningen 2010 формуласы бойынша холекальциферолдың жүктемелік дозасын ғылыми бағалау. |
| `iron-deficiency` | [Темір тапшылығы калькуляторы: TSAT, ферритин және Ганзони бойынша тапшылық](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) | TSAT, СРА ескерілген ферритин шегі және Ганзони 1970 формуласы бойынша арифметикалық бағалау. |
| `phenoage` | [PhenoAge биологиялық жас калькуляторы (Levine)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) | Morgan Levine 2018 моделі бойынша 9 биомаркер мен жасқа негізделген ғылыми бағалау. |
| `fib-4` | [FIB-4 және APRI калькуляторы: бауыр фиброзының индекстері](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fib-4.md) | Жас, АСТ, АЛТ және тромбоциттер бойынша FIB-4 және APRI: есептеу, қауіп шектері және келесі қадамдар. |
| `free-testosterone` | [Бос тестостерон калькуляторы (Вермюлен)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/free-testosterone.md) | Vermeulen 1999 моделі бойынша тестостеронның бос және биологиялық қолжетімді фракциялары. Нәтиже әдіс референстерін талап етеді. |
| `anion-gap` | [Аниондық саңылау және дельта-қатынас калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) | Альбуминге түзетілген аниондық саңылау (Figge) және қышқыл-сілтілік күйді бағалауға арналған дельта-қатынас. |
| `corrected-calcium` | [Альбумин бойынша түзетілген кальций калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) | Payne (1973) формуласы бойынша альбуминге түзетілген жалпы кальцийді есептеу және әдістің заманауи шектеулері. |
| `one-rep-max` | [1ҚМ калькуляторы (бір реттік максимум)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/one-rep-max.md) | Спортшының 2–10 қайталау аралығындағы субмаксималды тестілеу арқылы жарақат қаупінсіз бір қайталауда көтере алатын ең жоғары салмағын анықтайды. |
| `heart-rate-zones` | [Пульс аймақтарының калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) | Максималды пульс пен тыныштықтағы тамыр соғысын ескере отырып, 5 жеке жаттығу аймағының шекараларын есептейді (жүрек соғу жиілігінің резерві әдісі). |
| `vo2max` | [МТК (VO2max) калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) | Арнайы зертханалық жабдықсыз дәлелденген далалық сынақтар негізінде аэробтық қуат пен кардиореспираторлық төзімділікті бағалайды. |
| `ffmi` | [FFMI калькуляторы (майсыз дене массасының индексі)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ffmi.md) | Бойға қатысты құрғақ бұлшықет массасының мөлшерін анықтайды, шынайы гипертрофияны майдың жиналуынан ажыратады. |
| `katch-mcardle` | [Кэтч — МакАрдл BMR және TDEE калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) | Таразыдағы жалпы салмақтың орнына тек құрғақ бұлшықет массасы негізінде базалық зат алмасуды (BMR) және тәуліктік энергия шығынын (TDEE) анықтайды. |
| `ideal-body-weight` | [Мінсіз салмақ калькуляторы (IBW және AdjBW)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) | Жалпы қабылданған клиникалық формулалар бойынша эталондық дене салмағын есептейді және медициналық мақсаттар үшін түзетілген салмақты (AdjBW) анықтайды. |
| `waist-ratios` | [Бел антропометриялық индекстерінің калькуляторы (WHtR, WHR, VAI)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/waist-ratios.md) | Май тінінің таралуын, висцералды май мөлшерін және кардиометаболикалық қауіпті қарапайым ДМИ-ге қарағанда әлдеқайда дәл бағалайды. |
| `sweat-rate` | [Терлеу және регидратация калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) | Тер шығынының жеке қарқынын анықтайды және жаттығудан кейін сұйықтық пен электролиттерді толтыру бойынша дербес жоспар жасайды. |
| `muscle-potential` | [Бұлшықет әлеуетінің калькуляторы (Кейси Батт және Мартин Беркхан)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) | Анаболикалық стероидтарсыз қол жеткізуге болатын ең жоғары құрғақ бұлшықет массасы мен дененің шекті көлемдерін (кеуде, бицепс, сан) анықтайды. |
| `powerlifting-coefficients` | [Пауэрлифтинг коэффициенттерінің калькуляторы (DOTS, Wilks, IPF GL)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) | DOTS, Wilks және IPF GL Points формулалары бойынша әртүрлі салмақ дәрежелері мен жыныстағы атлеттердің үшсайыстағы (отырып-тұру, жатып сығу, тартылыс) абсолютті күшін салыстырады. |
| `protein-intake` | [Тәуліктік ақуыз нормасының калькуляторы (ISSN және ESPEN)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) | Мақсаттарды (салмақ тастау, гипертрофия, 65+ жастағы саулық), тамақтану түрін және бұлшықет ақуызының синтезін (MPS) ескере отырып, оңтайлы тәуліктік ақуыз мөлшерін есептейді. |
| `fiber-intake` | [Тағамдық талшықтар (жасұнық) нормасының калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) | Ішек микробиотасын қоректендіру, холестеринді қалыпқа келтіру және АІЖ моторикасын жақсарту үшін қажетті тәуліктік талшық мөлшерін анықтайды. |
| `omega-3` | [Омега-3 калькуляторы (EPA + DHA мөлшері және индексі)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/omega-3.md) | Нақты клиникалық мақсаттар мен өмір салтына сәйкес эйкозапентаен (EPA) және докозагексаен (DHA) қышқылдарының оңтайлы тәуліктік мөлшерін анықтайды. |
| `sodium-potassium` | [Натрий және калий балансының калькуляторы (Na:K және тұз)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) | Рациондағы калий мен натрийдің электролиттік теңгерімін бағалайды, ас тұзының баламасын және жүрек-қантамырлық қауіпті есептейді. |
| `alcohol` | [Алкогольдің шығарылуы калькуляторы (Видмарк формуласы)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/alcohol.md) | Қандағы этанолдың шыңдық және ағымдағы концентрациясын (промилле ‰-де), толық айығуға дейінгі нақты уақытты және алкогольдің калориялығын есептейді. |
| `caffeine` | [Кофеиннің шығарылуы және ұйықтау уақыты калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/caffeine.md) | Қандағы кофеиннің ыдырау динамикасын, жартылай шығарылу кезеңін және ұйықтау уақытына қарай қалдық деңгейін есептейді. |
| `weight-loss-forecast` | [Салмақ төмендеуінің динамикалық болжамы калькуляторы (Кевин Холл моделі)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) | Зат алмасудың бейімделгіш баяулауын және бұлшықеттерді сақтауды ескере отырып, Кевин Холлдың (NIH) метаболикалық моделі негізінде салмақ тастаудың нақты сызықтық емес траекториясын құрады. |
| `sleep-cycles` | [Ұйқы циклдерінің калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sleep-cycles.md) | 90 минуттық ультрадиандық циклдер (баяу және жылдам ұйқы фазалары) мен орташа ұйықтап кету уақыты негізінде ұйқы уақытын есептеу құралы. |
| `findrisc` | [FINDRISC диабет қаупінің шкаласы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/findrisc.md) | Жасырын диабетті ерте скринингтеу және 10 жылда 2 типті ҚД пайда болу қаупін бағалау үшін ДДҰ мен IDF халықаралық деңгейде мойындаған сауалнамасы. |
| `debq` | [Голландтық тамақтану мінез-құлқы сұрақтамасы (DEBQ)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) | Тамақтану мінез-құлқының жетекші үш түрін (шектеулі, эмоциогенді және экстерналды) анықтауға арналған классикалық валидацияланған психологиялық құрал. |
| `phq-9` | [Пациент денсаулығы сауалнамасы PHQ-9 (Депрессия)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) | DSM-5 клиникалық критерийлері бойынша депрессияның алғашқы скринингі мен симптомдар ауырлығын бағалаудың халықаралық алтын стандарты. |
| `gad-7` | [Генерализацияланған мазасыздық шкаласы GAD-7](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/gad-7.md) | Генерализацияланған мазасыздық пен эмоционалдық кернеу деңгейін жылдам әрі дәл бағалауға арналған халықаралық клиникалық сауалнама. |
| `pss-10` | [Қабылданған стресс шкаласы PSS-10](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) | Шелдон Коэннің өмірлік жағдайлардың қаншалықты болжаусыз, бақыланбайтын және шектен тыс ретінде қабылданатынын өлшеуге арналған классикалық шкаласы. |
| `isi` | [ISI ұйқысыздық индексі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) | Ұйқысыздық белгілерінің сипатын, ауырлығын және күндізгі белсенділікке әсерін бағалауға арналған 7 сұрақтық қысқа клиникалық құрал. |
| `scoff` | [SCOFF тамақтану бұзылыстарының скринингі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/scoff.md) | Тамақтану мінез-құлқының бұзылыстары (анорексия және булимия) қаупін бастапқы анықтауға арналған әлемде танылған 5 сұрақтық клиникалық құрал. |
| `ies-2` | [IES-2 интуитивті тамақтану шкаласы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) | Трейси Тилк әзірлеген (23 сұрақ), тағаммен және өз денеңізбен интуитивті әрі салауатты қарым-қатынасты бағалайтын ғылыми шкала. |
| `yfas` | [Йель тағамдық тәуелділік шкаласы mYFAS 2.0](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) | Жоғары калориялы және өңделген тағамдарға тәуелділік белгілерін диагностикалауға арналған Йель университетінің бейімделген ғылыми сауалнамасы. |
| `eating-behavior-wizard` | [Тамақтану мінез-құлқын диагностикалау шебері](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/eating-behavior-wizard.md) | Терең тамақтану психотипі мен жеке стратегияны анықтау үшін жетекші валидацияланған шкалаларды біріктіретін NutriFit интеграцияланған шебері. |


## Параметрлер мен оқиғалар

`hostUrl` сәйкес HTTP(S) тест ортасының origin-ын жолсыз, тіркелгі деректерінсіз және query-сіз береді. `campaign` өту көзін белгілейді. `integrationId` аккаунт интеграциясын таңдайды; сервер домен мен құқықты тексереді. Калькулятор, хост, тіл, тақырып немесе интеграция өзгерсе, iframe қайта жасалып, сақталмаған күйі тазаланады.

`onEvent` мәндері: `ready`, `calculated`, `error`. Ready интерфейстің жүктелгенін білдіреді, API қолжетімділігін емес. Каталог калькуляторлары нәтиже өзгергенде, соның ішінде бастапқы есептеуде calculated жібереді. Оқиғалар енгізілген деректерді, жауаптарды немесе нәтижелерді иесінің сайтына бермейді. PostMessage origin, терезе, instance және протоколды тексереді. CSP ішінде `frame-src https://nutrifit.health`, ал жүктеуші үшін `script-src https://nutrifit.health` рұқсат етілуі тиіс.

## Орналастырылған сервис және нативті React

Тегін виджеттер NutriFit бренді мен ерікті сілтемелерді сақтайды. White label үшін бөлек бапталған тариф, интеграция және расталған нақты HTTPS домені қажет; жеке Premium оны қамтымайды. Каталог виджеттері клиенттің расталған брендін көрсете алады; бұл режимде NutriFit PDF батырмасы болмайды. Ақылы тағам калькуляторы клиент бренді бар PDF/CSV ұсынады.

`@nutrifit/widgets/native` ішіндегі `NativeNutritionCalculator` тағам калькуляторын бетіңізде тікелей көрсетеді. `@nutrifit/widgets/native.css` қосыңыз. Қысқа сессияны серверіңіз береді; тұрақты кілтті тек серверде сақтаңыз. Басқа калькуляторлар нативті DOM компоненттері емес, React iframe қолданады. Жергілікті формулалар тағам API квотасын жұмсамайды; тағам есебі мен оның PDF файлы жұмсайды.

```tsx
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function NativeCalculator() {
  return <NativeNutritionCalculator locale="kk" getSession={async (signal) => {
    const response = await fetch('/api/nutrifit-session', { method: 'POST', signal });
    if (!response.ok) throw new Error('Widget session unavailable');
    return response.json();
  }} />;
}
```

Интеграциялар кабинетінде нативті қолжетімділігі бар бапталған тарифті белсендіріңіз, нақты HTTPS origin қосыңыз, DNS TXT жазбасын жариялап, доменді растаңыз және сервер кілтін шығарыңыз. `NUTRIFIT_WIDGET_KEY` және `NUTRIFIT_SITE_ORIGIN` мәндерін тек серверде сақтаңыз. Төмендегі делдал кілтті бес минуттық сессияға ауыстырып, getSession функциясына толық envelope қайтарады. Келушілерге қолжетімділік пен сұрау жиілігін шектеңіз; кілт пен сессияны логқа жазбаңыз.

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

[Native API](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/NATIVE_REACT.md) · [Service](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=kk)

## Лицензия және шекаралар

Copyright (c) 2026 **NUTRIFIT LLC**. Адаптерлер мен нативті тағам интерфейсі стандартты MIT лицензиясымен таратылады. Код лицензиясы сервис квотасын, white label, NutriFit тауар белгісін немесе клиникалық сауалнамаларға меншік құқығын бермейді. Backend, жеке кабинет және өнімдер каталогы қосылмаған. Медициналық және психологиялық калькуляторлар әдістеме шектеулерін сақтайды және диагноз болып саналмайды.

[MIT](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE) · [GitHub](https://github.com/nutrifit-health/nutrifit-widgets)

Брендтелген виджеттер ресми NutriFit логотипін қолданады: ашық, қараңғы немесе `theme="auto"` арқылы жүйе тақырыбына сай. White-label клиент брендін сақтайды. Native CSS ішіне PNG енгізілген; қатаң CSP `img-src` ішінде `data:` рұқсат етуі керек. Бренд шарттары [NOTICE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/NOTICE) файлында.


[Нативті React интеграциясы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/NATIVE_REACT.md) · [Қызмет моделі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/SERVICE_MODEL.md) · [Виджет қосу](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/ADDING_WIDGETS.md) · [Релиз жариялау](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/RELEASING.md)

Негізгі npm пакеті — `@nutrifit/widgets`. GitHub Packages репозиториймен байланысқан `@nutrifit-health/widgets` көшірмесін де береді; ол жарияланған npm архивінен алынады. Scope GitHub репозиторийінің иесіне сәйкес келеді. GitHub орнату үшін авторизация керек; npm үшін жоғарыдағы пәрменді қолданыңыз.

[GitHub Packages](https://github.com/nutrifit-health/nutrifit-widgets/pkgs/npm/widgets)

## Жергілікті демонстрация

Барлық 49 калькуляторды қараңыз: интерфейс толықтай алты тілге аударылған, ашық және қараңғы тақырыптар, көшіруге дайын React, JavaScript және iframe мысалдары бар.

Клондалған репозиторийде орындаңыз:

```sh
npm install --prefix examples/consumer-site
npm run demo
```

[Демонстрацияны](http://127.0.0.1:5178/?lang=kk) ашыңыз. NutriFit жүйесінің әдепкі жергілікті мекенжайы — `http://localhost:5100`; оны қосылым баптауларында өзгертуге болады. Демонстрация процесін іске қосулы қалдырыңыз.

[Жергілікті демонстрация](../../examples/consumer-site/README.md)
