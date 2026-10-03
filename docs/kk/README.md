# NutriFit Widgets — Сайтыңызға арналған тамақтану және денсаулық калькуляторлары

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[![npm](https://img.shields.io/npm/v/@nutrifit/widgets)](https://www.npmjs.com/package/@nutrifit/widgets) [![GitHub Release](https://img.shields.io/github/v/release/nutrifit-health/nutrifit-widgets)](https://github.com/nutrifit-health/nutrifit-widgets/releases) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE)

React компоненті, JavaScript немесе iframe арқылы тамақтану, фитнес, зертханалық көрсеткіштер және өмір салты бойынша 49 калькуляторды сайтыңызға енгізіңіз. TDEE мен калория нормасынан, БЖК, су нормасы, дене құрамы немесе тағамның қоректік құндылығынан бастаңыз.

**[Виджеттерді қолданып көру](https://nutrifit.health/embed/calculators/tdee?lang=kk&theme=auto)** · [БЖК](https://nutrifit.health/embed/calculators/macros?lang=kk&theme=auto) · [Су нормасы](https://nutrifit.health/embed/calculators/water?lang=kk&theme=auto) · [Барлық 49 калькулятор](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/CALCULATORS.md) · [Безендіру](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/APPEARANCE.md)

![Калькуляторлар, енгізу тәсілдері және мүмкіндіктерге шолу](https://raw.githubusercontent.com/nutrifit-health/nutrifit-widgets/main/docs/assets/widget-overview-kk.svg)

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
| `tdee` | [Тәуліктік энергия шығынының бағасы TDEE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) | Mifflin–St Jeor тыныштық шығынын бағалайды. TDEE = баға × таңдалған белсенділік коэффициенті. −20% және +15% — авторлық тапшылық пен артықтық сценарийлері. |
| `macros` | [Авторлық макронутриент жоспарлағышы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) | Ақуыз: азайтуға 1,8–2,2 г/кг, сақтауға 1,4–1,8, қосуға 1,8–2,4; май 0,8–1,2 г/кг. Орта мәндер қолданылады; көмірсу — 4/9/4 ккал/г бойынша қалған калория. |
| `water` | [Тәуліктік судың эвристикалық бағасы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) | Таңдалған модель: 30 мл/кг + жүктеме сағатына 500 мл + ыстықта 500 мл. Шартты түрде 75% сусыннан; стақан = 250 мл. Жасқа байланысты азайту жоқ. |
| `body-composition` | [Айналым бойынша дене құрамы мен ДСИ](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/body-composition.md) | Тарихи Hodgdon–Beckett (1984) моделі бой мен айналымға негізделген. Ерлер: кіндік деңгейіндегі іш және мойын; әйелдер: табиғи тар бел, ең кең мықын және мойын. ДСИ = салмақ / бой². |
| `glycemic-load` | [Порцияның гликемиялық жүктемесі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) | ГЖ = ГИ × порцияның қолжетімді көмірсуы / 100. Нақты тағам мен дайындаудың ГИ-ын глюкоза = 100 шкаласында, 100 г-ға көмірсу мен порция салмағын енгізіңіз. Бастапқы сандар — мысал. |
| `deficiency-risk` | [Тамақтану және өмір салты чек-парағы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) | Авторлық анықтамалық чек-парақ: қазіргі тамақтану және өмір салты ерекшеліктерін белгілеп, байланысты нутриент тақырыптарын қараңыз. |
| `health-balance-wheel` | [Авторлық өзін-өзі бағалау дөңгелегі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) | Соңғы 14 күндегі сегіз салаға қанағаттануды 1–10 бағалаңыз. Жалпы ұпай = орташа × 10; біркелкілік = max(0, 100 − 18 × стандартты ауытқу), дөңгелектеледі. |
| `homa-ir` | [HOMA-IR калькуляторы: инсулинге төзімділік индексі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/homa-ir.md) | Аш қарынға глюкоза мен инсулин бойынша HOMA-IR, HOMA-β және QUICKI индекстері: инсулинге төзімділік пен β-жасуша функциясын нормалармен және түсіндірмемен бағалау. |
| `tyg-index` | [TyG индексінің калькуляторы (триглицеридтер × глюкоза)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) | Ашқарындағы триглицеридтер мен глюкозаға негізделген зерттеу индексі, TyG-BMI және TyG-WC туынды көрсеткіштерімен. |
| `lipid-profile` | [Липидтік профиль: есептік көрсеткіштер](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lipid-profile.md) | Фридвальд пен Сэмпсон бойынша LDL, non-HDL, қалдық холестерин және липидтік қатынастарды есептейді. |
| `egfr` | [CKD-EPI 2021 бойынша ШСФ (eGFR) калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/egfr.md) | CKD-EPI 2021 бойынша есептік ШСФ (креатинин, қалауыңызша цистатин C), Кокрофт — Голт бойынша креатинин клиренсі және KDIGO бойынша СБА кезеңі — мкмоль/л және мг/дл қайта есептеуімен. |
| `hba1c-eag` | [HbA1c және орташа глюкозаны қайта есептеу](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/hba1c-eag.md) | Зертханалық HbA1c бойынша шамамен 2–3 айдағы орташа глюкозаны немесе кері шамалы бағалауды есептеу. |
| `lab-unit-converter` | [Зертханалық талдау бірліктерінің конвертері](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lab-unit-converter.md) | Молярлық массалар бойынша 33 зертханалық көрсеткішті ХЖ (ммоль/л, мкмоль/л, нмоль/л) және дәстүрлі бірліктер (мг/дл, нг/мл) арасында қайта есептеу. |
| `vitamin-d-dose` | [D дәрумені: van Groningen моделін бағалау](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vitamin-d-dose.md) | 25(OH)D екі бірлікте және салмақ бойынша зерттеу бағасы. Автоматты емдеу кестесі тағайындалмайды. |
| `iron-deficiency` | [Темір тапшылығы калькуляторы: TSAT, ферритин және Ганзони бойынша тапшылық](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) | TSAT = темір / жалпы темір байланыстыру қабілеті × 100%. Ганцони моделі: салмақ × (15 − Hb, г/дл) × 2,4 + 35 кг және одан жоғары салмаққа 500 мг. Hb мен ферритин екеуі де таңдалған шектерден төмен болса ғана көрсетіледі. |
| `phenoage` | [PhenoAge биологиялық жас калькуляторы (Levine)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) | Levine 2018 моделі тоғыз биомаркер мен күнтізбелік жасты біріктіреді. PhenoAge — NHANES моделіндегі популяциялық қауіптің жас баламасы; ол мүшелердің жасын не жеке өмір ұзақтығын анықтамайды. Жас айырмасы — арифметикалық азайту, қартаю жылдамдығы немесе PhenoAgeAccel статистикалық қалдығы емес. |
| `fib-4` | [FIB-4 және APRI калькуляторы: бауыр фиброзының индекстері](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fib-4.md) | FIB-4 (Sterling 2006) жас, AST, ALT және тромбоциттерді пайдаланады. AASLD 2023 шектері метаболикалық майлы бауыр ауруында айқын фиброз ықтималдығын бағалайды, сатысын анықтамайды. 35–65 жаста төменгі шек 1,3; 65 жастан жоғарыда 2,0; жоғарғы шек 2,67. 35 жасқа дейін санат берілмейді; жедел ауру кезінде түсіндірілмейді. APRI (Wai 2003) және 0,5/1,5 шектері созылмалы C гепатитіндегі елеулі фиброзға қатысты, басқа ауруларға автоматты қолданылмайды. |
| `free-testosterone` | [Вермюлен бойынша бос тестостерон](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/free-testosterone.md) | Жалпы тестостерон, SHBG және альбумин бойынша бос және SHBG-мен байланыспаған фракцияларды есептеу. |
| `anion-gap` | [Аниондық саңылау және дельта-қатынас калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) | Аниондық айырма = Na − Cl − HCO₃; альбумин түзетуі = 0,25 × (40 − альбумин, г/л). Дельта қатынасы = (түзетілген айырма − таңдалған референс) / (бикарбонат референсі − HCO₃). |
| `corrected-calcium` | [Альбумин бойынша түзетілген кальций калькуляторы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) | Түзетілген кальций = жалпы кальций + 0,02 × (40 − альбумин), кальций ммоль/л, альбумин г/л. Бұл Payne жеңілдетілген формуласы. |
| `one-rep-max` | [Бір қайталау максимумының бағасы 1RM](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/one-rep-max.md) | Негізгі нәтиже — автор таңдаған Epley мен Brzycki орташа мәні. Жеке формулалар мен орташа мәннің арифметикалық пайыздары көрсетіледі. |
| `heart-rate-zones` | [Жүрек соғу резерві бойынша аймақтар](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) | Мақсатты ЖСЖ = тыныштық ЖСЖ + үлес × (ең жоғары ЖСЖ − тыныштық ЖСЖ). Бес жолақ таңдалған: резервтің 50–60, 60–70, 70–80, 80–90 және 90–100%. |
| `vo2max` | [VO2max далалық бағалаулары](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) | Купер: 12 минуттағы қашықтық. Rockport: 1 мильді (1609,344 м) жылдам жаяу жүру, уақыт пен соңғы жүрек соғу жиілігі; бастапқы тексеру 30–69 жастағы дені сау ересектерде. Uth: 15,3 × ЖСЖмакс / ЖСЖтыныштық; 21–51 жастағы жақсы жаттыққан ерлерде тексерілген. |
| `ffmi` | [Майсыз масса индексі FFMI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ffmi.md) | Майсыз масса = салмақ × (1 − май пайызы / 100); FFMI = майсыз масса / бой², бой метрмен. Ерлер үшін: қалыпқа келтірілген FFMI = FFMI + 6,3 × (1,8 − бой), Kouri (1995) аннотациясы бойынша. |
| `katch-mcardle` | [Майсыз масса бойынша энергия бағалары](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) | Майсыз масса = салмақ × (1 − май / 100). Katch–McArdle: 370 + 21,6 × майсыз масса; Cunningham: 500 + 22 × майсыз масса. Katch тәуліктік бағасы таңдалған белсенділік коэффициентіне көбейтіледі. |
| `ideal-body-weight` | [Есептік салмақтың тарихи формулалары](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) | Бой ≥ 152,4 см үшін Devine, Robinson, Miller және жуық Hamwi. Төрт формуланың орташа мәні — автор таңдауы; AdjBW = Devine + 0,4 × (нақты салмақ − Devine), тек Devine мәнінен жоғары болса. |
| `waist-ratios` | [Бел индекстері WHR, WHtR және VAI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/waist-ratios.md) | WHR = бел / мықын; WHtR = бел / бой. Белді төменгі қабырға мен жамбас үстінің ортасында тыныш дем шығарғаннан кейін, мықынды ең кең жерінен өлшеңіз. VAI салмақты, ТГ мен ЖТЛП-ны ммоль/л түрінде Amato (2010) бойынша қолданады. |
| `sweat-rate` | [Жаттығудағы тер шығынын бағалау](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) | Тер (л) ≈ бастапқы салмақ − соңғы салмақ (кг) + ішкен (л) − зәр (л); жылдамдық = тер / уақыт сағатпен. Бірдей жағдайда, дымқыл киімсіз өлшеніңіз. |
| `muscle-potential` | [Casey Butt антропометриялық моделі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) | Бой, білек, тобық пен болжамды май бойынша масса және айналымның эвристикалық бағасы. Бастапқы айналымдар майы шамамен 8–10% ер бодибилдерлерді сипаттайды. Berkhan: бөлек бағдар — бой (см) − 100 кг. |
| `powerlifting-coefficients` | [Үшсайыс коэффициенттері DOTS, Wilks және IPF GL](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) | Өлшеудегі салмақ пен сәтті отырып-тұру, жатып сығымдау және тартудың ең жақсы нәтижелерінің қосындысын килограммен енгізіңіз. DOTS, классикалық Wilks және классикалық үшсайысқа IPF GL 2020. |
| `protein-intake` | [Ақуыздың анықтамалық мөлшерлері](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) | Дені сау ересектер үшін EFSA PRI — 0,83 г/кг/тәулік. Дені сау жаттығатын ересектер үшін ISSN 1,4–2,0 г/кг/тәулік, ал дені сау егде адамдар үшін ESPEN 1,0–1,2 мөлшерін ұсынады. Есеп енгізілген нақты дене салмағына негізделеді. Бұл аралық қауіпсіздіктің жоғарғы шегі емес. |
| `fiber-intake` | [Тағамдық талшықтың анықтамалық мөлшерлері](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) | Бағдарлар бөлек көрсетіледі: EFSA ересектерге 25 г/тәулік, IOM/NASEM 14 г/1000 ккал береді. IOM жас пен жыныс бойынша AI: 19–50 жаста ерлерге 38 г, әйелдерге 25 г; 50 жастан кейін 30 және 21 г. Энергия бойынша есеп басқа бағдарларды автоматты түрде алмастырмайды. |
| `omega-3` | [EPA және DHA анықтамалық мөлшерлері](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/omega-3.md) | EFSA ересектерге арналған AI — тағам мен қоспаларды бірге есептегенде тәулігіне 250 мг EPA+DHA. Жүктілік пен емізу кезінде осы мөлшерге қосымша тәулігіне 100–200 мг DHA көрсетілген. Бұл тұрақты EPA:DHA арақатынасы немесе балық майының толық массасы емес. |
| `sodium-potassium` | [Тәуліктік рациондағы натрий мен калий](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) | WHO ересектерге тәулігіне 2000 мг-нан аз натрий және кемінде 3510 мг калий ұсынады. Молярлық арақатынас: (Na, мг / 23) / (K, мг / 39,1). Шамамен тұз баламасы: натрий, мг × 2,5 / 1000. Арақатынас жеке қауіп санатынсыз көрсетіледі. |
| `alcohol` | [Этанол және Видмарктың оқу бағалауы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/alcohol.md) | Этанол мөлшерін, оның калориясын және қарапайым модель бойынша шамамен концентрацияны есептейді. |
| `caffeine` | [Кофеин қалдығы: есептік модель](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/caffeine.md) | Таңдалған жартылай шығарылу кезеңі бойынша қазір және ұйықтар кездегі кофеин қалдығын бағалайды. |
| `weight-loss-forecast` | [Hall–Chow салмақ өзгерісі сценарийі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) | Орташа параметрлері бар қарапайым модель бастапқы энергия тұтынуы тұрақты азайғанда және белсенділік өзгермегенде салмақ өзгерісін көрсетеді. |
| `sleep-cycles` | [Ұйқы кестесін жоспарлау](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sleep-cycles.md) | Ұйықтап кету уақытын ескере отырып, 7, 8 және 9 сағат ұйқыға арналған жату немесе ояну уақыты. |
| `findrisc` | [FINDRISC диабет қаупінің шкаласы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/findrisc.md) | FINDRISC-тің 8 факторы бойынша 2-типті диабеттің 10 жылдық анықтамалық қаупі; қосынды 0–26. Пайыздар бастапқы зерттеу тобына қатысты, жеке ықтималдықты дәл бермейді. |
| `debq` | [Тамақтану мінез-құлқы: өзгертілген DEBQ бейімдеуі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) | Әдеттегі тамақтану мінез-құлқы туралы 33 сұрақ. Үш топтың орташа жауаптары көрсетіледі; норма санаты мен диагноз берілмейді. |
| `phq-9` | [Пациент денсаулығы сауалнамасы PHQ-9 (Депрессия)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) | Соңғы 2 аптадағы депрессиялық симптомдардың айқындылығы: жиілік бойынша 0–3 балдық 9 жауап; қосынды 0–27. |
| `gad-7` | [Генерализацияланған мазасыздық шкаласы GAD-7](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/gad-7.md) | Соңғы 2 аптадағы мазасыздық симптомдарының айқындылығы: жиілік бойынша 0–3 балдық 7 жауап; қосынды 0–21. |
| `pss-10` | [Қабылданған стресс шкаласы PSS-10](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) | Соңғы айдағы қабылданатын стрессті PSS-10 шкаласының 10 тармағы арқылы бағалау. |
| `isi` | [ISI ұйқысыздық индексі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) | Соңғы 2 аптадағы ұйқыны бағалау: 0–4 аралығындағы әртүрлі шкалалары бар 7 тармақ; қосынды 0–28. Қанағаттану, мәселенің байқалуы, алаңдау және күнделікті өмірге әсер үшін жауаптар бөлек. |
| `scoff` | [SCOFF тамақтану бұзылыстарының скринингі](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/scoff.md) | Тамақтану мінез-құлқының бұзылыстары (анорексия және булимия) қаупін бастапқы анықтауға арналған әлемде танылған 5 сұрақтық клиникалық құрал. |
| `ies-2` | [IES-2 интуитивті тамақтану шкаласы](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) | IES-2: тағамға және дене белгілеріне қатынас туралы 23 тұжырым, төрт қосалқы шкала. |
| `yfas` | [Йель тағамдық тәуелділік шкаласы mYFAS 2.0](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) | mYFAS 2.0: соңғы 12 айдағы тамақтану мәселелері туралы 13 сұрақ. |
| `eating-behavior-wizard` | [Тамақтану мінез-құлқын өзіндік бағалау](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/eating-behavior-wizard.md) | SCOFF-тың бес сұрағы және тамақтану мінез-құлқын өзіндік бағалауға арналған төрт авторлық сұрақ. |


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
