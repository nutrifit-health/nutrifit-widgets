# NutriFit Widgets — Saytingiz uchun oziqlanish va salomatlik kalkulyatorlari

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[![npm](https://img.shields.io/npm/v/@nutrifit/widgets)](https://www.npmjs.com/package/@nutrifit/widgets) [![GitHub Release](https://img.shields.io/github/v/release/nutrifit-health/nutrifit-widgets)](https://github.com/nutrifit-health/nutrifit-widgets/releases) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE)

React komponenti, JavaScript yoki iframe orqali oziqlanish, fitnes, laboratoriya ko‘rsatkichlari va turmush tarzi bo‘yicha 49 kalkulyatorni saytingizga joylashtiring. TDEE va kaloriya me’yori, BYU, suv me’yori, tana tarkibi yoki taomning oziq qiymatidan boshlang.

**[Vidjetlarni sinab ko‘rish](https://nutrifit.health/embed/calculators/tdee?lang=uz&theme=auto)** · [BYU](https://nutrifit.health/embed/calculators/macros?lang=uz&theme=auto) · [Suv me’yori](https://nutrifit.health/embed/calculators/water?lang=uz&theme=auto) · [Barcha 49 kalkulyator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/CALCULATORS.md) · [Ko‘rinish](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/APPEARANCE.md)

![Kalkulyatorlar, joylashtirish usullari va imkoniyatlar sharhi](https://raw.githubusercontent.com/nutrifit-health/nutrifit-widgets/main/docs/assets/widget-overview-uz.svg)

- Olti til; yorug‘, qorong‘i va tizim mavzulari.
- Fon, ranglar va burchak yumaloqligini saytingizga moslang.
- Tashrif buyuruvchilar NutriFit akkauntisiz sahifangizda hisoblab, brendli PDF hisobotini yuklab olishlari mumkin.

Bepul vidjetlar NutriFit brendini saqlaydi. Kalkulyatorlar NutriFit serverlarida joylashgan; tarmoq ulanishi kerak.

## O‘rnatish

Paketni o‘rnating. React adapterlari React 18.2 va 19 ni qo‘llaydi; mustaqil JavaScript moduli uchun React kerak emas.

```sh
npm install @nutrifit/widgets
```

## React orqali ulash

Katalogdagi istalgan ID uchun `CalculatorFrame` ishlating. `NutritionCalculatorFrame` taom kalkulyatorini joylashtiradi. Umumiy variant — `WidgetFrame widget="tdee"`. Hisoblar iframe ichida qoladi; komponent formulalarni ilovangizga ko‘chirmaydi.

```tsx
import { CalculatorFrame, NutritionCalculatorFrame } from '@nutrifit/widgets';

export function Calculators() {
  return <>
    <CalculatorFrame calculator="tdee" locale="uz" theme="auto" title="NutriFit TDEE" />
    <NutritionCalculatorFrame locale="uz" theme="light" />
  </>;
}
```

## Freymvorksiz JavaScript

Yuklagichni `core/*.js` modullari bilan birga joylashtiring. Har konteyner o‘z kalkulyatori, tili va mavzusiga ega bo‘lishi mumkin. Iframe balandligi avtomatik moslanadi. Hayotiy siklni boshqarish uchun `@nutrifit/widgets/core` dan `mountWidget` import qiling va olib tashlashda `handle.destroy()` chaqiring.

```html
<div data-nutrifit-widget="tdee" data-locale="uz" data-theme="auto" data-title="NutriFit TDEE"></div>
<div data-nutrifit-widget="nutrition" data-locale="uz"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

```js
import { mountWidget } from '@nutrifit/widgets/core';
const handle = mountWidget(document.getElementById('calculator'), {
  widget: 'water', locale: 'uz', theme: 'light',
});
// handle.destroy()
```

## Oddiy iframe

Oddiy iframe balandligi belgilangan va ichki aylantirishga ega. Avtomatik balandlik uchun React yoki JavaScript ishlating. `tdee` o‘rniga katalog ID-ini qo‘ying. Taom kalkulyatori manzili — `/embed/nutrition-calculator`.

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=uz&theme=light"
  title="NutriFit TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

## Tillar va ko‘rinish

React/modulda `locale`, HTML-da `data-locale` yoki iframe URL-ida `lang` bering. Kodlar: **en, ru, es, uk, kk, uz**. Mavzular: `light`, `dark`, `auto`; auto brauzer sozlamalariga moslashadi. Sahifa tilidagi tushunarli sarlavhani `title` yoki `data-title` bilan bering.

## Kalkulyatorlardan foydalanish

ID, til va mavzuni tanlang, so‘ng qiymatlarni ko‘rsatilgan birliklarda kiriting. Formulali kalkulyatorlar kiritish paytida natijani yangilaydi; so‘rovnomalar javoblardan keyin natija beradi. Usul, cheklov va manbalar vidjet ichida mavjud. To‘liq natija NutriFit hisobisiz saytingizda ko‘rinadi. Ixtiyoriy havola to‘liq sahifani yangi varaqda ochadi; katalog kalkulyatorlarining kiritilgan qiymatlari ko‘chirilmaydi.

`nutrition` uchun: ochiq mahsulot yoki retseptlarni toping, grammda vaznlarini qo‘shing va tayyor taom vaznini kiriting. Butun taom va 100 g uchun hisoblang; PDF va CSV mavjud. Noma’lum nutrientlar to‘liq emas deb belgilanadi, nolga aylantirilmaydi. Ko‘pi bilan 50 ta masalliq.

Bepul vidjetlar mavjud brendli server PDF-ini so‘rashi mumkin. Bu ko‘rsatilgan maydon va natijalar nusxasi, mustaqil qayta hisoblash yoki diagnostik tekshiruv emas. Server mavjud bo‘lishi kerak. So‘rovnomani eksport qilishdan oldin javoblarni tugating.

[Har bir kalkulyator uchun yo‘riqnoma, usul, formula va cheklovlar](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/CALCULATORS.md).

## To‘liq katalog

| Vidjet ID-i | Kalkulyator | Maqsadi |
|---|---|---|
| `nutrition` | [Taomning oziq qiymati kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/nutrition.md) | `nutrition` uchun: ochiq mahsulot yoki retseptlarni toping, grammda vaznlarini qo‘shing va tayyor taom vaznini kiriting. Butun taom va 100 g uchun hisoblang; PDF va CSV mavjud. Noma’lum nutrientlar to‘liq emas deb belgilanadi, nolga aylantirilmaydi. Ko‘pi bilan 50 ta masalliq. |
| `tdee` | [Kunlik energiya sarfi bahosi TDEE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md) | Mifflin–St Jeor tinchlik sarfini baholaydi. TDEE = baho × tanlangan faollik koeffitsienti. −20% va +15% — muallifning kamomad va ortiqcha ssenariylari. |
| `macros` | [Mualliflik makronutrient rejalashtirgichi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md) | Oqsil: kamaytirishga 1,8–2,2 g/kg, saqlashga 1,4–1,8, oshirishga 1,8–2,4; yog‘ 0,8–1,2 g/kg. O‘rtacha qiymatlar; uglevod 4/9/4 kcal/g bo‘yicha qolgan kaloriyadan. |
| `water` | [Kunlik suvning evristik bahosi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md) | Tanlangan model: 30 mL/kg + yuklama soatiga 500 mL + issiqda 500 mL. Shartli 75% ichimlikdan; stakan = 250 mL. Yoshga qarab kamaytirilmaydi. |
| `body-composition` | [Aylanalar bo‘yicha tana tarkibi va TMI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/body-composition.md) | Tarixiy Hodgdon–Beckett (1984) modeli bo‘y va aylanalarga asoslanadi. Erkaklar: kindikdagi qorin va bo‘yin; ayollar: tabiiy tor bel, eng keng son va bo‘yin. TMI = vazn / bo‘y². |
| `glycemic-load` | [Porsiyaning glikemik yuklamasi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md) | GY = GI × porsiyadagi mavjud uglevod / 100. Aniq mahsulot va tayyorlash GI ini glyukoza = 100 shkalasida, 100 g uglevod va porsiya vaznini kiriting. Boshlang‘ich sonlar — misol. |
| `deficiency-risk` | [Ovqatlanish va turmush tarzi ro‘yxati](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md) | Mualliflik axborot ro‘yxati: hozirgi ovqatlanish va turmush tarzi xususiyatlarini belgilang va bog‘liq nutriyent mavzularini ko‘ring. |
| `health-balance-wheel` | [Mualliflik o‘zini baholash g‘ildiragi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md) | So‘nggi 14 kundagi sakkiz sohadan qoniqishni 1–10 baholang. Umumiy ball = o‘rtacha × 10; bir xillik = max(0, 100 − 18 × standart og‘ish), yaxlitlanadi. |
| `homa-ir` | [HOMA-IR kalkulyatori: insulinga chidamlilik indeksi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/homa-ir.md) | Och qoringa glyukoza va insulin bo‘yicha HOMA-IR, HOMA-β va QUICKI indekslari: insulinga chidamlilik va β-hujayra funksiyasini me’yorlar va talqin bilan baholash. |
| `tyg-index` | [TyG indeksi kalkulyatori (triglitseridlar × glyukoza)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md) | Och qoringa o‘lchangan triglitserid va glyukozaga asoslangan tadqiqot indeksi, TyG-BMI va TyG-WC hosilalari bilan. |
| `lipid-profile` | [Lipid profili: hisoblangan ko‘rsatkichlar](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lipid-profile.md) | Friedewald va Sampson LDL, non-HDL, qoldiq xolesterin va lipid nisbatlarini hisoblaydi. |
| `egfr` | [CKD-EPI 2021 bo‘yicha KFT (eGFR) kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/egfr.md) | CKD-EPI 2021 bo‘yicha hisobiy KFT (kreatinin, ixtiyoriy sistatin C), Kokroft — Golt bo‘yicha kreatinin klirensi va KDIGO bo‘yicha SBK bosqichi — mkmol/l va mg/dl qayta hisoblash bilan. |
| `hba1c-eag` | [HbA1c va o‘rtacha glyukozani aylantirish](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/hba1c-eag.md) | Laboratoriya HbA1c dan taxminan 2–3 oydagi o‘rtacha glyukozani yoki teskari taxminiy bahoni hisoblash. |
| `lab-unit-converter` | [Laboratoriya sinov birligi konvertori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lab-unit-converter.md) | Molyar massalarga asoslangan SI (mmol/l, μmol/l, nmol/l, pmol/l) va an'anaviy birliklar (mg/dl, ng/ml, pg/ml) o'rtasida 33 ta laboratoriya parametrlarini konvertatsiya qilish. |
| `vitamin-d-dose` | [D vitamini: Van Groningen modelini baholash](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vitamin-d-dose.md) | 25(OH)D ikki birlikda va tana vazniga asoslangan tadqiqot bahosi. Avtomatik davolash jadvali belgilanmaydi. |
| `iron-deficiency` | [Temir tanqisligi kalkulyatori: TSAT, Ferritin va Ganzoni tanqisligi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md) | TSAT = temir / umumiy temir bog‘lash qobiliyati × 100%. Ganzoni modeli: vazn × (15 − Hb, g/dL) × 2,4 + 35 kg va undan yuqori vazn uchun 500 mg. Faqat Hb va ferritin ikkalasi tanlangan chegaralardan past bo‘lganda ko‘rsatiladi. |
| `phenoage` | [PhenoAge biologik yosh kalkulyatori (Levine)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md) | Levine 2018 modeli to‘qqiz biomarker va xronologik yoshni birlashtiradi. PhenoAge — NHANES modelidagi populyatsion xavfning yosh ekvivalenti; a’zolar yoshi yoki individual umr davomiyligi emas. Yosh farqi arifmetik ayirma bo‘lib, qarish tezligi yoki PhenoAgeAccel statistik qoldig‘i emas. |
| `fib-4` | [FIB-4 va APRI kalkulyatori: jigar fibrozi indekslari](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fib-4.md) | FIB-4 (Sterling 2006) yosh, AST, ALT va trombotsitlardan foydalanadi. AASLD 2023 chegaralari metabolik yog‘li jigar kasalligida rivojlangan fibroz ehtimolini baholaydi, bosqichini aniqlamaydi. 35–65 yoshda quyi chegara 1,3; 65 yoshdan kattalarda 2,0; yuqori chegara 2,67. 35 yoshgacha toifa berilmaydi; o‘tkir kasallikda talqin qilinmaydi. APRI (Wai 2003) va 0,5/1,5 chegaralari surunkali C gepatitidagi sezilarli fibrozga tegishli, boshqa kasalliklarga avtomatik qo‘llanmaydi. |
| `free-testosterone` | [Vermeulen bo‘yicha erkin testosteron](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/free-testosterone.md) | Umumiy testosteron, SHBG va albumindan erkin va SHBG bilan bog‘lanmagan fraksiyalarni hisoblash. |
| `anion-gap` | [Anion bo‘shlig‘i va delta-nisbati kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md) | Anion farqi = Na − Cl − HCO₃; albumin tuzatishi = 0,25 × (40 − albumin, g/L). Delta nisbati = (tuzatilgan farq − tanlangan referens) / (bikarbonat referensi − HCO₃). |
| `corrected-calcium` | [Albumin bo‘yicha tuzatilgan kalsiy kalkulyatori (Payne)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md) | Tuzatilgan kalsiy = umumiy kalsiy + 0,02 × (40 − albumin), kalsiy mmol/L, albumin g/L da. Bu Payne soddalashtirilgan formulasi. |
| `one-rep-max` | [Bir takror maksimumi bahosi 1RM](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/one-rep-max.md) | Asosiy natija — muallif tanlagan Epley va Brzycki o‘rtachasi. Alohida formulalar va o‘rtachaning arifmetik foizlari ko‘rsatiladi. |
| `heart-rate-zones` | [Yurak urishi zaxirasi bo‘yicha zonalar](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md) | Maqsadli YU = tinch YU + ulush × (maksimal YU − tinch YU). Besh oraliq tanlangan: zaxiraning 50–60, 60–70, 70–80, 80–90 va 90–100%. |
| `vo2max` | [VO2max ning dala sharoitidagi baholari](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md) | Cooper: 12 daqiqada bosib o‘tilgan masofa. Rockport: 1 mil (1609,344 m) tez yurish, vaqt va yakuniy yurak urishi; dastlab 30–69 yoshdagi sog‘lom kattalarda tekshirilgan. Uth: 15,3 × YUmax / YUtinch; 21–51 yoshdagi yaxshi chiniqqan erkaklarda tekshirilgan. |
| `ffmi` | [Yog‘siz massa indeksi FFMI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ffmi.md) | Yog‘siz massa = vazn × (1 − yog‘ foizi / 100); FFMI = yog‘siz massa / bo‘y², bo‘y metrda. Erkaklar uchun: normallashtirilgan FFMI = FFMI + 6,3 × (1,8 − bo‘y), Kouri (1995) annotatsiyasiga ko‘ra. |
| `katch-mcardle` | [Yog‘siz massa bo‘yicha energiya baholari](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md) | Yog‘siz massa = vazn × (1 − yog‘ / 100). Katch–McArdle: 370 + 21,6 × yog‘siz massa; Cunningham: 500 + 22 × yog‘siz massa. Katch kunlik bahosi tanlangan faollik koeffitsientiga ko‘paytiriladi. |
| `ideal-body-weight` | [Hisobiy vaznning tarixiy formulalari](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md) | Bo‘y ≥ 152,4 sm uchun Devine, Robinson, Miller va taxminiy Hamwi. To‘rt formula o‘rtachasi muallif tanlovi; AdjBW = Devine + 0,4 × (haqiqiy vazn − Devine), faqat Devine dan yuqori bo‘lsa. |
| `waist-ratios` | [Bel indekslari WHR, WHtR va VAI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/waist-ratios.md) | WHR = bel / son; WHtR = bel / bo‘y. Belni pastki qovurg‘a va tos tepasining o‘rtasida tabiiy nafas chiqarilgach, sonni eng keng joyda o‘lchang. VAI vazn, TG va HDL ni mmol/L da Amato (2010) bo‘yicha qo‘llaydi. |
| `sweat-rate` | [Mashqda ter yo‘qotish bahosi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md) | Ter (L) ≈ oldingi vazn − keyingi vazn (kg) + ichimlik (L) − siydik (L); tezlik = ter / vaqt soatda. Bir xil sharoitda, ho‘l kiyimsiz tortiling. |
| `muscle-potential` | [Casey Butt antropometrik modeli](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md) | Bo‘y, bilak, to‘piq va taxminiy yog‘dan massa va aylanalar evristik bahosi. Dastlabki aylanalar taxminan 8–10% yog‘li erkak bodibildyerlarni tasvirlaydi. Berkhan: alohida mo‘ljal — bo‘y (sm) − 100 kg. |
| `powerlifting-coefficients` | [Uchkurash koeffitsientlari DOTS, Wilks va IPF GL](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md) | Tortilishdagi vazn va eng yaxshi muvaffaqiyatli o‘tirib-turish, yotib siqish hamda tortish yig‘indisini kilogrammda kiriting. DOTS, klassik Wilks va klassik uchkurash uchun IPF GL 2020. |
| `protein-intake` | [Oqsil iste’moli bo‘yicha ma’lumotnoma](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md) | Sog‘lom kattalar uchun EFSA PRI — 0,83 g/kg/kun. ISSN sog‘lom mashq qiladigan kattalarga 1,4–2,0 g/kg/kun, ESPEN sog‘lom keksalarga 1,0–1,2 miqdorini keltiradi. Hisob kiritilgan haqiqiy tana vazniga asoslanadi. Diapazon xavfsizlikning yuqori chegarasi emas. |
| `fiber-intake` | [Oziq tolalari bo‘yicha ma’lumotnoma](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md) | Yo‘nalishlar alohida ko‘rsatiladi: EFSA kattalarga 25 g/kun, IOM/NASEM 14 g/1000 kkal beradi. IOM yosh va jins bo‘yicha AI: 19–50 yoshda erkaklarga 38 g, ayollarga 25 g; 50 yoshdan keyin 30 va 21 g. Energiya hisobi boshqa yo‘nalishlarni avtomatik almashtirmaydi. |
| `omega-3` | [EPA va DHA bo‘yicha ma’lumotnoma](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/omega-3.md) | EFSA kattalar uchun AI — oziq-ovqat va qo‘shimchalarni birga hisoblaganda kuniga 250 mg EPA+DHA. Homiladorlik va emizishda bu miqdorga qo‘shimcha kuniga 100–200 mg DHA ko‘rsatilgan. Bu qat’iy EPA:DHA nisbati yoki baliq yog‘ining jami massasi emas. |
| `sodium-potassium` | [Kunlik ratsiondagi natriy va kaliy](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md) | WHO kattalarga kuniga 2000 mg dan kam natriy va kamida 3510 mg kaliy tavsiya qiladi. Molyar nisbat: (Na, mg / 23) / (K, mg / 39,1). Taxminiy tuz ekvivalenti: natriy, mg × 2,5 / 1000. Nisbat shaxsiy xavf toifasisiz ko‘rsatiladi. |
| `alcohol` | [Etanol va Vidmarkning o‘quv bahosi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/alcohol.md) | Etanol miqdori, uning kaloriyasi va soddalashtirilgan model bo‘yicha taxminiy konsentratsiyani hisoblaydi. |
| `caffeine` | [Kofein qoldig‘i: model hisobi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/caffeine.md) | Tanlangan yarim chiqarilish davri bo‘yicha hozirgi va uyqu paytidagi kofein qoldig‘ini baholaydi. |
| `weight-loss-forecast` | [Hall–Chow vazn o‘zgarishi ssenariysi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md) | O‘rtacha parametrlarga ega sodda model boshlang‘ich energiya iste’moli doimiy kamaytirilganda va faollik o‘zgarmaganda vazn o‘zgarishini ko‘rsatadi. |
| `sleep-cycles` | [Uyqu jadvalini rejalashtirish](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sleep-cycles.md) | Uyquga ketish vaqtini hisobga olib, 7, 8 va 9 soat uyqu uchun yotish yoki uyg‘onish vaqti. |
| `findrisc` | [FINDRISC diabet xavfi shkalasi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/findrisc.md) | FINDRISC ning 8 omili bo‘yicha 2-tip diabetning 10 yillik ma’lumotnoma xavfi; yig‘indi 0–26. Foizlar dastlabki tadqiqot guruhiga tegishli va aniq shaxsiy ehtimol emas. |
| `debq` | [Ovqatlanish xulqi: o‘zgartirilgan DEBQ moslamasi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md) | Odatdagi ovqatlanish xulqi haqida 33 savol. Uch guruh javoblarining o‘rtachalari ko‘rsatiladi; me’yor toifasi va tashxis yo‘q. |
| `phq-9` | [Bemor salomatligi so‘rovnomasi PHQ-9 (Depressiya)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md) | Oxirgi 2 haftadagi depressiv alomatlarning ifodalanishi: chastota bo‘yicha 0–3 ballik 9 javob; yig‘indi 0–27. |
| `gad-7` | [Umumiy xavotir shkalasi GAD-7](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/gad-7.md) | Oxirgi 2 haftadagi xavotir alomatlarining ifodalanishi: chastota bo‘yicha 0–3 ballik 7 javob; yig‘indi 0–21. |
| `pss-10` | [Qabul qilingan stress shkalasi PSS-10](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md) | Oxirgi oydagi sezilgan stressni PSS-10 ning 10 bandi orqali baholash. |
| `isi` | [Uyqusizlik og‘irligi indeksi ISI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md) | Oxirgi 2 haftadagi uyquni baholash: 0–4 oralig‘idagi turli shkalali 7 band; yig‘indi 0–28. Qoniqish, muammoning boshqalarga bilinishi, tashvish va kundalik hayotga ta’sir uchun javoblar alohida. |
| `scoff` | [Ovqatlanish xulq-atvori buzilishlari skriningi SCOFF](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/scoff.md) | Anoreksiya va bulimiya kabi ovqatlanish buzilishlari xavfini birlamchi aniqlash uchun dunyoda eʼtirof etilgan 5 savolli klinik skrining. |
| `ies-2` | [Intuitiv ovqatlanish shkalasi IES-2](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md) | IES-2: ovqatga va tana belgilariga munosabat haqida 23 fikr, to‘rtta kichik shkala. |
| `yfas` | [mYFAS 2.0 oziq-ovqatga qaramlik Yale shkalasi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md) | mYFAS 2.0: oxirgi 12 oydagi ovqatlanish muammolari haqida 13 savol. |
| `eating-behavior-wizard` | [Ovqatlanish xulqini o‘zini baholash](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/eating-behavior-wizard.md) | SCOFF ning beshta savoli va ovqatlanish xulqini o‘zini baholash uchun to‘rtta mualliflik savoli. |


## Parametrlar va hodisalar

`hostUrl` mos HTTP(S) sinov muhiti originini yo‘l, login va query-siz belgilaydi. `campaign` o‘tish manbasini bildiradi. `integrationId` hisob integratsiyasini tanlaydi; server domen va ruxsatni tekshiradi. Kalkulyator, host, til, mavzu yoki integratsiya o‘zgarsa iframe qayta yaratiladi va saqlanmagan holat tozalanadi.

`onEvent`: `ready`, `calculated`, `error`. Ready interfeys yuklanganini bildiradi, API mavjudligini emas. Katalog kalkulyatorlari natija o‘zgarganda, jumladan dastlabki hisobda calculated yuboradi. Hodisalar kiritilgan ma’lumot, javob yoki natijani sayt egasiga bermaydi. PostMessage origin, oyna, instance va protokolni tekshiradi. CSP `frame-src https://nutrifit.health`, yuklagich uchun esa `script-src https://nutrifit.health` ni ruxsat qilishi kerak.

## Joylashtirilgan xizmat va nativ React

Bepul vidjetlar NutriFit brendi va ixtiyoriy havolalarni saqlaydi. White label uchun alohida sozlangan tarif, integratsiya va tasdiqlangan aniq HTTPS domeni kerak; shaxsiy Premium buni qamramaydi. Katalog vidjetlari mijozning tasdiqlangan brendini ko‘rsata oladi; bu rejimda NutriFit PDF tugmasi bo‘lmaydi. Pullik taom kalkulyatori mijoz brendli PDF/CSV taqdim etadi.

`@nutrifit/widgets/native` ichidagi `NativeNutritionCalculator` taom kalkulyatorini sahifangizda bevosita ko‘rsatadi. `@nutrifit/widgets/native.css` ni ulang. Qisqa seansni serveringiz beradi; doimiy kalitni faqat serverda saqlang. Qolgan kalkulyatorlar nativ DOM komponentlari emas, React iframe orqali ishlaydi. Mahalliy formulalar oziqlanish API kvotasini sarflamaydi; taom hisobi va uning PDF fayli sarflaydi.

```tsx
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function NativeCalculator() {
  return <NativeNutritionCalculator locale="uz" getSession={async (signal) => {
    const response = await fetch('/api/nutrifit-session', { method: 'POST', signal });
    if (!response.ok) throw new Error('Widget session unavailable');
    return response.json();
  }} />;
}
```

Integratsiyalar kabinetida nativ ruxsatli sozlangan tarifni faollashtiring, aniq HTTPS origin qo‘shing, DNS TXT yozuvini e’lon qiling, domenni tasdiqlang va server kalitini yarating. `NUTRIFIT_WIDGET_KEY` va `NUTRIFIT_SITE_ORIGIN` ni faqat serverda saqlang. Quyidagi vositachi kalitni besh daqiqalik seansga almashtiradi va getSession ga to‘liq envelope qaytaradi. Tashrif buyuruvchilar ruxsati va so‘rov tezligini cheklang; kalit yoki seansni jurnalga yozmang.

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

[Native API](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/NATIVE_REACT.md) · [Service](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=uz)

## Litsenziya va chegaralar

Copyright (c) 2026 **NUTRIFIT LLC**. Adapter va nativ taom interfeysi kodi standart MIT litsenziyasida tarqatiladi. Kod litsenziyasi xizmat kvotasi, white label, NutriFit savdo belgisi yoki klinik so‘rovnomalar mulk huquqini bermaydi. Backend, shaxsiy kabinet va mahsulot katalogi kiritilmagan. Tibbiy va psixologik kalkulyatorlar usul cheklovlarini saqlaydi va tashxis hisoblanmaydi.

[MIT](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE) · [GitHub](https://github.com/nutrifit-health/nutrifit-widgets)

Brendli vidjetlar rasmiy NutriFit logotipidan foydalanadi: yorug‘, qorong‘i yoki `theme="auto"` bilan tizim mavzusiga mos. White-label mijoz brendini saqlaydi. Native CSS PNG fayllarini o‘z ichiga oladi; qat’iy CSP `img-src` uchun `data:` ga ruxsat berishi kerak. Brend shartlari [NOTICE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/NOTICE) faylida.


[Nativ React integratsiyasi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/NATIVE_REACT.md) · [Xizmat modeli](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/SERVICE_MODEL.md) · [Vidjet qo‘shish](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/ADDING_WIDGETS.md) · [Reliz nashr qilish](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/RELEASING.md)

Asosiy npm paketi — `@nutrifit/widgets`. GitHub Packages repozitoriyga bog‘langan `@nutrifit-health/widgets` nusxasini ham taqdim etadi; u nashr etilgan npm arxividan olinadi. Scope GitHub repozitoriysi egasiga mos. GitHub dan o‘rnatish autentifikatsiya talab qiladi; npm uchun yuqoridagi buyruqni ishlating.

[GitHub Packages](https://github.com/nutrifit-health/nutrifit-widgets/pkgs/npm/widgets)

## Mahalliy namoyish

Barcha 49 kalkulyatorni ko‘ring: interfeys to‘liq olti tilga tarjima qilingan, yorug‘ va qorong‘i mavzular hamda nusxalash uchun tayyor React, JavaScript va iframe misollari mavjud.

Klonlangan repozitoriyda bajaring:

```sh
npm install --prefix examples/consumer-site
npm run demo
```

[Namoyishni](http://127.0.0.1:5178/?lang=uz) oching. NutriFit uchun standart mahalliy manzil — `http://localhost:5100`; uni ulanish sozlamalarida o‘zgartirish mumkin. Namoyish jarayonini ishlayotgan holda qoldiring.

[Mahalliy namoyish](../../examples/consumer-site/README.md)
