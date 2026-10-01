# @nutrifit/widgets

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[![npm](https://img.shields.io/npm/v/@nutrifit/widgets)](https://www.npmjs.com/package/@nutrifit/widgets) [![GitHub Release](https://img.shields.io/github/v/release/nutrifit-health/nutrifit-widgets)](https://github.com/nutrifit-health/nutrifit-widgets/releases) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE)

Saytingiz uchun NutriFit brendli kalkulyatorlar: taom kalkulyatori va ochiq katalogdagi barcha 48 ta vosita. React, JavaScript va iframe adapterlari NutriFit bilan bir xil joylashtirilgan interfeys va hisob-kitoblardan foydalanadi.

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
| `tdee` | [Kunlik kaloriya normasi kalkulyatori (TDEE)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md) | Asosiy almashinuv va kunlik umumiy energiya sarfini, shuningdek vaznni kamaytirish, saqlash va to‘plash uchun kaloriyani hisoblaydi. |
| `macros` | [BYU kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md) | Kunlik kaloriyani tana vazni va maqsadni hisobga olib oqsil, yog‘ va uglevodlarga taqsimlaydi — grammda, kaloriyada va foizda. |
| `water` | [Suv normasi kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md) | Tana vaznidan kunlik suyuqlik ehtiyojini jismoniy yuklama va issiq iqlimga tuzatish bilan hisoblaydi. |
| `body-composition` | [Tana tarkibi kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/body-composition.md) | Tana o‘lchamlari bo‘yicha yog‘ ulushini baholaydi, yog‘ va toza massani hamda tana vazni indeksini hisoblaydi. |
| `glycemic-load` | [Glikemik yuklama kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md) | Porsiyaning glikemik yuklamasini glikemik indeks va uglevod miqdori bo‘yicha hisoblaydi — bu kattalik glyukoza javobini indeksning o‘zidan ko‘ra yaxshiroq aks ettiradi. |
| `deficiency-risk` | [Nutriyent tanqisligi xavfi skriningi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md) | Turmush tarzi va ovqatlanish omillarini belgilaydi hamda qaysi nutriyent tanqisligi ehtimoli borligini va uni qanday tahlillar bilan tekshirishni ko‘rsatadi. |
| `health-balance-wheel` | [Salomatlik va ovqatlanish balansi g'ildiragi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md) | Salomatlikning 8 sohasi bo'yicha interaktiv diagramma. Libix qonuni bo'yicha tor bo'g'inlarni aniqlaydi va NutriFit vositalari bilan bog'laydi. |
| `homa-ir` | [HOMA-IR kalkulyatori: insulinga chidamlilik indeksi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/homa-ir.md) | Och qoringa glyukoza va insulin bo‘yicha HOMA-IR, HOMA-β va QUICKI indekslari: insulinga chidamlilik va β-hujayra funksiyasini me’yorlar va talqin bilan baholash. |
| `tyg-index` | [TyG indeksi kalkulyatori (triglitseridlar × glyukoza)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md) | TyG indeksi va TyG-BMI, TyG-WC hosilalari: och qoringa triglitseridlar va glyukoza bo‘yicha insulinga chidamlilik va kardiometabolik xavfni baholash — insulin tahlilisiz. |
| `lipid-profile` | [Lipid profili kalkulyatori: PZLP, non-HDL va aterogenlik indekslari](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lipid-profile.md) | Standart lipidogramma bo‘yicha ikki usulda hisoblangan PZLP, non-HDL, qoldiq xolesterin va beshta aterogenlik indeksi — ESC/EAS maqsadli qiymatlari bilan. |
| `egfr` | [CKD-EPI 2021 bo‘yicha KFT (eGFR) kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/egfr.md) | CKD-EPI 2021 bo‘yicha hisobiy KFT (kreatinin, ixtiyoriy sistatin C), Kokroft — Golt bo‘yicha kreatinin klirensi va KDIGO bo‘yicha SBK bosqichi — mkmol/l va mg/dl qayta hisoblash bilan. |
| `hba1c-eag` | [HbA1c ↔ o‘rtacha glyukoza (eAG) konvertori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/hba1c-eag.md) | ADAG formulasi bo‘yicha HbA1c ni 3 oylik o‘rtacha glikemiyaga qayta hisoblash, teskari hisob va ADA toifalari bilan % ↔ mmol/mol konvertatsiya. |
| `lab-unit-converter` | [Laboratoriya sinov birligi konvertori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lab-unit-converter.md) | Molyar massalarga asoslangan SI (mmol/l, μmol/l, nmol/l, pmol/l) va an&#39;anaviy birliklar (mg/dl, ng/ml, pg/ml) o&#39;rtasida 33 ta laboratoriya parametrlarini konvertatsiya qilish. |
| `vitamin-d-dose` | [D vitamini: Van Groningen modelini baholash](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vitamin-d-dose.md) | Ikki birlikda 25(OH)D va tana vazniga asoslangan tadqiqot xulosasi bahosi. Avtomatik davolash rejimi tayinlanmaydi. |
| `iron-deficiency` | [Temir tanqisligi kalkulyatori: TSAT, Ferritin va Ganzoni tanqisligi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md) | TSAT, CRP uchun sozlangan ferritin mos yozuvlar chegarasi va Ganzoni arifmetik modeli. Ushbu parametrlarning kombinatsiyasi tashxis qo&#39;yish uchun asos bo&#39;lmaydi. |
| `phenoage` | [PhenoAge biologik yosh kalkulyatori (Levine)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md) | 9 ta biokimyoviy va gematologik biomarker asosida biologik fenotipik yoshni va qarish tezligini hisoblaydi. |
| `fib-4` | [FIB-4 va APRI kalkulyatori: jigar fibrozi indekslari](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fib-4.md) | AST, ALT, trombotsitlar va yosh asosida jigar fibrozi darajasini invaziv bo‘lmagan usulda baholaydi. |
| `free-testosterone` | [Erkin testosteron kalkulyatori (Vermeulen)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/free-testosterone.md) | Vermeulen 1999 bog‘lanish modeli bo‘yicha testosteronning erkin va bio-mavjud fraksiyalari. Natija usul referenslari va klinik kontekstni talab qiladi. |
| `anion-gap` | [Anion bo‘shlig‘i va delta-nisbati kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md) | Elektrolitlar balansi va kislota-ishqor holatini (KShH), yashirin metabolik asidoz va alkalozlarni aniqlaydi. |
| `corrected-calcium` | [Albumin bo‘yicha tuzatilgan kalsiy kalkulyatori (Payne)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md) | Gipoalbuminemiya yoki giperalbuminemiyada qondagi kalsiyning soxta o‘zgarishlarini to‘g‘rilab, haqiqiy kalsiy konsentratsiyasini aniqlaydi. |
| `one-rep-max` | [1RM kalkulyatori (bir martalik maksimal vazn)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/one-rep-max.md) | Sportchining 2–10 takrorlik submaksimal test yordamida jarohat xavfisiz bitta takrorda ko‘tara oladigan maksimal og‘irligini aniqlaydi. |
| `heart-rate-zones` | [Yurak urish zonalari kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md) | Maksimal puls va tinch holatdagi yurak urish tezligini hisobga olgan holda 5 ta individual mashg‘ulot zonasini hisoblaydi (yurak urishi zaxirasi usuli). |
| `vo2max` | [MKId (VO2max) kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md) | Maxsus laboratoriya uskunalarisiz tasdiqlangan amaliy sinovlar asosida aerob quvvat va yurak-nafas tizimi chidamliligini baholaydi. |
| `ffmi` | [FFMI kalkulyatori (yog‘siz tana massasi indeksi)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ffmi.md) | Bo‘yga nisbatan quruq mushak massasini aniqlaydi, haqiqiy mushak gipertrofiyasini tana yog‘i to‘planishidan ajratib beradi. |
| `katch-mcardle` | [Ketch — MakArdl BMR va TDEE kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md) | Umumiy tana vazni o‘rniga faqat quruq mushak massasi asosida bazal metabolizm (BMR) va kunlik umumiy energiya sarfini (TDEE) aniqlaydi. |
| `ideal-body-weight` | [Ideal tana vazni kalkulyatori (IBW va AdjBW)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md) | Umumiy qabul qilingan klinik formulalar bo‘yicha etalon tana vaznini hisoblaydi va tibbiy maqsadlar uchun tuzatilgan vaznni (AdjBW) aniqlaydi. |
| `waist-ratios` | [Bel antropometrik indekslari kalkulyatori (WHtR, WHR, VAI)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/waist-ratios.md) | Yog‘ to‘qimalarining taqsimlanishini, visseral yog‘ miqdorini va yurak-qon tomir xavflarini oddiy TMI ga qaraganda ancha aniq baholaydi. |
| `sweat-rate` | [Terlash tezligi va regidratatsiya kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md) | Terlash tezligini aniqlaydi va mashg‘ulotdan keyin suv va elektrolitlarni to‘ldirish bo‘yicha individual reja tuzadi. |
| `muscle-potential` | [Mushak salohiyati kalkulyatori (Keysi Batt va Martin Berxan)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md) | Anabolik steroidlarsiz erishish mumkin bo‘lgan maksimal yog‘siz tana massasi va tana aylanalarini (ko‘krak, bisept, son) aniqlaydi. |
| `powerlifting-coefficients` | [Pauerlifting koeffitsientlari kalkulyatori (DOTS, Wilks, IPF GL)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md) | DOTS, Wilks va IPF GL Points formulalari bo‘yicha turli vazn toifalari va jinsdagi sportchilarning uchkurashdagi (o‘tirib turish, yotib siqish, tortish) mutlaq kuchini solishtiradi. |
| `protein-intake` | [Kunlik oqsil meʼyori kalkulyatori (ISSN va ESPEN)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md) | Maqsadlar (vazn tashlash, gipertrofiya, 65+ yosh salomatligi), ovqatlanish turi va mushak oqsili sintezini (MPS) hisobga olgan holda kunlik optimal oqsil miqdorini hisoblaydi. |
| `fiber-intake` | [Kletchatka (ozuqaviy tolalar) meʼyori kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md) | Ichak mikrobiotasini oziqlantirish, xolesterinni normallashtirish va oshqozon-ichak motorikasini yaxshilash uchun zarur kunlik kletchatka miqdorini aniqlaydi. |
| `omega-3` | [Omega-3 kalkulyatori (EPK + DGK dozasi va indeksi)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/omega-3.md) | Aniq klinik maqsadlar va turmush tarzi uchun eykozapentaen (EPK) va dokozageksaen (DGK) kislotalarining maqbul kunlik dozasini aniqlaydi. |
| `sodium-potassium` | [Natriy va kaliy balansi kalkulyatori (Na:K va tuz)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md) | Ratsiondagi kaliy va natriy elektrolitlar balansini baholaydi, osh tuzi ekvivalentini va yurak-qon tomir xavfini hisoblab chiqadi. |
| `alcohol` | [Alkogolning chiqib ketishi kalkulyatori (Vidmark formulasi)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/alcohol.md) | Qondagi etanolning cho‘qqi va joriy konsentratsiyasini (promille ‰ da), to‘liq hushyor bo‘lish vaqtini va alkogol kaloriyasini hisoblaydi. |
| `caffeine` | [Kofeinning chiqib ketishi va uxlash vaqti kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/caffeine.md) | Qonda kofein parchalanish dinamikasini, yarimparchalanish davrini va uxlash vaqtida qoladigan qoldiq miqdorini hisoblaydi. |
| `weight-loss-forecast` | [Vazn yo‘qotishning dinamik prognozi kalkulyatori (Kevin Xoll modeli)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md) | Metabolizmning sekinlashishi va mushaklarni saqlashni hisobga olgan holda Kevin Xoll (NIH) modeli asosida ozishning real chiziqli bo‘lmagan trayektoriyasini tuzadi. |
| `sleep-cycles` | [Uyqu sikllari kalkulyatori](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sleep-cycles.md) | 90 daqiqalik ultradian sikllar (sekin va tez uyqu fazalari) hamda o‘rtacha uxlab qolish vaqti asosida uyqu vaqtini hisoblash vositasi. |
| `findrisc` | [FINDRISC diabet xavfi shkalasi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/findrisc.md) | Yashirin diabetni erta skrining qilish va 10 yil ichida 2-toifa QD paydo bo‘lish xavfini baholash uchun JSST va IDF tomonidan xalqaro tan olingan so‘rovnoma. |
| `debq` | [Golland ovqatlanish xulq-atvori so‘rovnomasi (DEBQ)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md) | Ovqatlanish xulq-atvorining uch asosiy turini (cheklovchi, emotsiogen va tashqi) aniqlash uchun mo‘ljallangan klassik psixologik vosita. |
| `phq-9` | [Bemor salomatligi so‘rovnomasi PHQ-9 (Depressiya)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md) | DSM-5 mezonlari asosida depressiya darajasini aniqlash va birlamchi skrining qilish uchun xalqaro oltin standart. |
| `gad-7` | [Umumiy xavotir shkalasi GAD-7](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/gad-7.md) | Umumiy xavotir darajasi va hissiy taranglikni tezkor baholash uchun mo‘ljallangan xalqaro klinik so‘rovnoma. |
| `pss-10` | [Qabul qilingan stress shkalasi PSS-10](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md) | Insonning o‘z hayotidagi vaziyatlarni oldindan aytib bo‘lmaydigan, nazorat qilib bo‘lmaydigan va ortiqcha yuklama sifatida baholashini o‘lchaydigan Sheldon Koenning klassik shkalasi. |
| `isi` | [Uyqusizlik og‘irligi indeksi ISI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md) | Uyqusizlik alomatlarining xususiyati, og‘irligi va kunduzgi faoliyatga taʼsirini baholash uchun mo‘ljallangan 7 savolli qisqa klinik vosita. |
| `scoff` | [Ovqatlanish xulq-atvori buzilishlari skriningi SCOFF](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/scoff.md) | Anoreksiya va bulimiya kabi ovqatlanish buzilishlari xavfini birlamchi aniqlash uchun dunyoda eʼtirof etilgan 5 savolli klinik skrining. |
| `ies-2` | [Intuitiv ovqatlanish shkalasi IES-2](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md) | Treysi Tilka tomonidan ishlab chiqilgan, taom va tana bilan uyg‘un hamda intuitiv munosabatni o‘lchovchi 23 savolli ilmiy shkala. |
| `yfas` | [mYFAS 2.0 oziq-ovqatga qaramlik Yale shkalasi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md) | Yuqori kaloriyali va chuqur qayta ishlangan taomlarga addiktiv maylni aniqlash uchun Yale universiteti tomonidan moslashtirilgan ilmiy so‘rovnoma. |
| `eating-behavior-wizard` | [Ovqatlanish xulq-atvori diagnostikasi ustasi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/eating-behavior-wizard.md) | Taomlanishning chuqur psixotipini va shaxsiy strategiyani aniqlash uchun yetakchi validatsiyalangan shkalalarni birlashtiruvchi NutriFit integratsiyalashgan diagnostika ustasi. |


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

[MIT](../LICENSE) · [GitHub](https://github.com/nutrifit-health/nutrifit-widgets)

Brendli vidjetlar rasmiy NutriFit logotipidan foydalanadi: yorug‘, qorong‘i yoki `theme="auto"` bilan tizim mavzusiga mos. White-label mijoz brendini saqlaydi. Native CSS PNG fayllarini o‘z ichiga oladi; qat’iy CSP `img-src` uchun `data:` ga ruxsat berishi kerak. Brend shartlari [NOTICE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/NOTICE) faylida.


[Nativ React integratsiyasi](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/NATIVE_REACT.md) · [Xizmat modeli](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/SERVICE_MODEL.md) · [Vidjet qo‘shish](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/ADDING_WIDGETS.md) · [Reliz nashr qilish](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/RELEASING.md)

Asosiy npm paketi — `@nutrifit/widgets`. GitHub Packages repozitoriyga bog‘langan `@nutrifit-health/widgets` nusxasini ham taqdim etadi; u nashr etilgan npm arxividan olinadi. Scope GitHub tashkilotiga mos. GitHub dan o‘rnatish autentifikatsiya talab qiladi; npm uchun yuqoridagi buyruqni ishlating.

[GitHub Packages](https://github.com/orgs/nutrifit-health/packages?repo_name=nutrifit-widgets)
