# @nutrifit/widgets

[English](../README.md) · [Русский](README.ru.md) · [Español](README.es.md) · [Українська](README.uk.md) · [Қазақша](README.kk.md) · [O‘zbekcha](README.uz.md)

Saytingiz uchun NutriFit brendli kalkulyatorlar: taom kalkulyatori va ochiq katalogdagi barcha 48 ta vosita. React, JavaScript va iframe adapterlari NutriFit bilan bir xil joylashtirilgan interfeys va hisob-kitoblardan foydalanadi.

Manba kodida **0.3.0** versiyasi tayyorlandi. Avval e’lon qilingan npm versiyasi — **0.2.0**. Yangi turlar va tillar uchun 0.3.0 ni e’lon qilish va NutriFit saytini birgalikda yangilash kerak. Ushbu hujjat nashr, joylashtirish yoki reliz tekshiruvlari bajarilganini tasdiqlamaydi.

## O‘rnatish

0.3.0 e’lon qilingandan keyin paketni quyidagi buyruq bilan o‘rnating. React 18.2 va 19 qo‘llanadi. Mustaqil JavaScript moduliga React kerak emas.

```sh
npm install @nutrifit/widgets@^0.3.0
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

[Har bir kalkulyator uchun yo‘riqnoma, usul, formula va cheklovlar](CALCULATORS.uz.md).

## To‘liq katalog

| Vidjet ID-i | Kalkulyator | Maqsadi |
|---|---|---|
| `nutrition` | Hisob NutriFit | `nutrition` uchun: ochiq mahsulot yoki retseptlarni toping, grammda vaznlarini qo‘shing va tayyor taom vaznini kiriting. Butun taom va 100 g uchun hisoblang; PDF va CSV mavjud. Noma’lum nutrientlar to‘liq emas deb belgilanadi, nolga aylantirilmaydi. Ko‘pi bilan 50 ta masalliq. |
| `tdee` | [Kunlik kaloriya normasi kalkulyatori (TDEE)](CALCULATORS.uz.md#tdee) | Asosiy almashinuv va kunlik umumiy energiya sarfini, shuningdek vaznni kamaytirish, saqlash va to‘plash uchun kaloriyani hisoblaydi. |
| `macros` | [BYU kalkulyatori](CALCULATORS.uz.md#macros) | Kunlik kaloriyani tana vazni va maqsadni hisobga olib oqsil, yog‘ va uglevodlarga taqsimlaydi — grammda, kaloriyada va foizda. |
| `water` | [Suv normasi kalkulyatori](CALCULATORS.uz.md#water) | Tana vaznidan kunlik suyuqlik ehtiyojini jismoniy yuklama va issiq iqlimga tuzatish bilan hisoblaydi. |
| `body-composition` | [Tana tarkibi kalkulyatori](CALCULATORS.uz.md#body-composition) | Tana o‘lchamlari bo‘yicha yog‘ ulushini baholaydi, yog‘ va toza massani hamda tana vazni indeksini hisoblaydi. |
| `glycemic-load` | [Glikemik yuklama kalkulyatori](CALCULATORS.uz.md#glycemic-load) | Porsiyaning glikemik yuklamasini glikemik indeks va uglevod miqdori bo‘yicha hisoblaydi — bu kattalik glyukoza javobini indeksning o‘zidan ko‘ra yaxshiroq aks ettiradi. |
| `deficiency-risk` | [Nutriyent tanqisligi xavfi skriningi](CALCULATORS.uz.md#deficiency-risk) | Turmush tarzi va ovqatlanish omillarini belgilaydi hamda qaysi nutriyent tanqisligi ehtimoli borligini va uni qanday tahlillar bilan tekshirishni ko‘rsatadi. |
| `health-balance-wheel` | [Salomatlik va ovqatlanish balansi g'ildiragi](CALCULATORS.uz.md#health-balance-wheel) | Salomatlikning 8 sohasi bo'yicha interaktiv diagramma. Libix qonuni bo'yicha tor bo'g'inlarni aniqlaydi va NutriFit vositalari bilan bog'laydi. |
| `homa-ir` | [HOMA-IR kalkulyatori: insulinga chidamlilik indeksi](CALCULATORS.uz.md#homa-ir) | Och qoringa glyukoza va insulin bo‘yicha HOMA-IR, HOMA-β va QUICKI indekslari: insulinga chidamlilik va β-hujayra funksiyasini me’yorlar va talqin bilan baholash. |
| `tyg-index` | [TyG indeksi kalkulyatori (triglitseridlar × glyukoza)](CALCULATORS.uz.md#tyg-index) | TyG indeksi va TyG-BMI, TyG-WC hosilalari: och qoringa triglitseridlar va glyukoza bo‘yicha insulinga chidamlilik va kardiometabolik xavfni baholash — insulin tahlilisiz. |
| `lipid-profile` | [Lipid profili kalkulyatori: PZLP, non-HDL va aterogenlik indekslari](CALCULATORS.uz.md#lipid-profile) | Standart lipidogramma bo‘yicha ikki usulda hisoblangan PZLP, non-HDL, qoldiq xolesterin va beshta aterogenlik indeksi — ESC/EAS maqsadli qiymatlari bilan. |
| `egfr` | [CKD-EPI 2021 bo‘yicha KFT (eGFR) kalkulyatori](CALCULATORS.uz.md#egfr) | CKD-EPI 2021 bo‘yicha hisobiy KFT (kreatinin, ixtiyoriy sistatin C), Kokroft — Golt bo‘yicha kreatinin klirensi va KDIGO bo‘yicha SBK bosqichi — mkmol/l va mg/dl qayta hisoblash bilan. |
| `hba1c-eag` | [HbA1c ↔ o‘rtacha glyukoza (eAG) konvertori](CALCULATORS.uz.md#hba1c-eag) | ADAG formulasi bo‘yicha HbA1c ni 3 oylik o‘rtacha glikemiyaga qayta hisoblash, teskari hisob va ADA toifalari bilan % ↔ mmol/mol konvertatsiya. |
| `lab-unit-converter` | [Laboratoriya sinov birligi konvertori](CALCULATORS.uz.md#lab-unit-converter) | Molyar massalarga asoslangan SI (mmol/l, μmol/l, nmol/l, pmol/l) va an&#39;anaviy birliklar (mg/dl, ng/ml, pg/ml) o&#39;rtasida 33 ta laboratoriya parametrlarini konvertatsiya qilish. |
| `vitamin-d-dose` | [D vitamini: Van Groningen modelini baholash](CALCULATORS.uz.md#vitamin-d-dose) | Ikki birlikda 25(OH)D va tana vazniga asoslangan tadqiqot xulosasi bahosi. Avtomatik davolash rejimi tayinlanmaydi. |
| `iron-deficiency` | [Temir tanqisligi kalkulyatori: TSAT, Ferritin va Ganzoni tanqisligi](CALCULATORS.uz.md#iron-deficiency) | TSAT, CRP uchun sozlangan ferritin mos yozuvlar chegarasi va Ganzoni arifmetik modeli. Ushbu parametrlarning kombinatsiyasi tashxis qo&#39;yish uchun asos bo&#39;lmaydi. |
| `phenoage` | [PhenoAge biologik yosh kalkulyatori (Levine)](CALCULATORS.uz.md#phenoage) | 9 ta biokimyoviy va gematologik biomarker asosida biologik fenotipik yoshni va qarish tezligini hisoblaydi. |
| `fib-4` | [FIB-4 va APRI kalkulyatori: jigar fibrozi indekslari](CALCULATORS.uz.md#fib-4) | AST, ALT, trombotsitlar va yosh asosida jigar fibrozi darajasini invaziv bo‘lmagan usulda baholaydi. |
| `free-testosterone` | [Erkin testosteron kalkulyatori (Vermeulen)](CALCULATORS.uz.md#free-testosterone) | Vermeulen 1999 bog‘lanish modeli bo‘yicha testosteronning erkin va bio-mavjud fraksiyalari. Natija usul referenslari va klinik kontekstni talab qiladi. |
| `anion-gap` | [Anion bo‘shlig‘i va delta-nisbati kalkulyatori](CALCULATORS.uz.md#anion-gap) | Elektrolitlar balansi va kislota-ishqor holatini (KShH), yashirin metabolik asidoz va alkalozlarni aniqlaydi. |
| `corrected-calcium` | [Albumin bo‘yicha tuzatilgan kalsiy kalkulyatori (Payne)](CALCULATORS.uz.md#corrected-calcium) | Gipoalbuminemiya yoki giperalbuminemiyada qondagi kalsiyning soxta o‘zgarishlarini to‘g‘rilab, haqiqiy kalsiy konsentratsiyasini aniqlaydi. |
| `one-rep-max` | [1RM kalkulyatori (bir martalik maksimal vazn)](CALCULATORS.uz.md#one-rep-max) | Sportchining 2–10 takrorlik submaksimal test yordamida jarohat xavfisiz bitta takrorda ko‘tara oladigan maksimal og‘irligini aniqlaydi. |
| `heart-rate-zones` | [Yurak urish zonalari kalkulyatori](CALCULATORS.uz.md#heart-rate-zones) | Maksimal puls va tinch holatdagi yurak urish tezligini hisobga olgan holda 5 ta individual mashg‘ulot zonasini hisoblaydi (yurak urishi zaxirasi usuli). |
| `vo2max` | [MKId (VO2max) kalkulyatori](CALCULATORS.uz.md#vo2max) | Maxsus laboratoriya uskunalarisiz tasdiqlangan amaliy sinovlar asosida aerob quvvat va yurak-nafas tizimi chidamliligini baholaydi. |
| `ffmi` | [FFMI kalkulyatori (yog‘siz tana massasi indeksi)](CALCULATORS.uz.md#ffmi) | Bo‘yga nisbatan quruq mushak massasini aniqlaydi, haqiqiy mushak gipertrofiyasini tana yog‘i to‘planishidan ajratib beradi. |
| `katch-mcardle` | [Ketch — MakArdl BMR va TDEE kalkulyatori](CALCULATORS.uz.md#katch-mcardle) | Umumiy tana vazni o‘rniga faqat quruq mushak massasi asosida bazal metabolizm (BMR) va kunlik umumiy energiya sarfini (TDEE) aniqlaydi. |
| `ideal-body-weight` | [Ideal tana vazni kalkulyatori (IBW va AdjBW)](CALCULATORS.uz.md#ideal-body-weight) | Umumiy qabul qilingan klinik formulalar bo‘yicha etalon tana vaznini hisoblaydi va tibbiy maqsadlar uchun tuzatilgan vaznni (AdjBW) aniqlaydi. |
| `waist-ratios` | [Bel antropometrik indekslari kalkulyatori (WHtR, WHR, VAI)](CALCULATORS.uz.md#waist-ratios) | Yog‘ to‘qimalarining taqsimlanishini, visseral yog‘ miqdorini va yurak-qon tomir xavflarini oddiy TMI ga qaraganda ancha aniq baholaydi. |
| `sweat-rate` | [Terlash tezligi va regidratatsiya kalkulyatori](CALCULATORS.uz.md#sweat-rate) | Terlash tezligini aniqlaydi va mashg‘ulotdan keyin suv va elektrolitlarni to‘ldirish bo‘yicha individual reja tuzadi. |
| `muscle-potential` | [Mushak salohiyati kalkulyatori (Keysi Batt va Martin Berxan)](CALCULATORS.uz.md#muscle-potential) | Anabolik steroidlarsiz erishish mumkin bo‘lgan maksimal yog‘siz tana massasi va tana aylanalarini (ko‘krak, bisept, son) aniqlaydi. |
| `powerlifting-coefficients` | [Pauerlifting koeffitsientlari kalkulyatori (DOTS, Wilks, IPF GL)](CALCULATORS.uz.md#powerlifting-coefficients) | DOTS, Wilks va IPF GL Points formulalari bo‘yicha turli vazn toifalari va jinsdagi sportchilarning uchkurashdagi (o‘tirib turish, yotib siqish, tortish) mutlaq kuchini solishtiradi. |
| `protein-intake` | [Kunlik oqsil meʼyori kalkulyatori (ISSN va ESPEN)](CALCULATORS.uz.md#protein-intake) | Maqsadlar (vazn tashlash, gipertrofiya, 65+ yosh salomatligi), ovqatlanish turi va mushak oqsili sintezini (MPS) hisobga olgan holda kunlik optimal oqsil miqdorini hisoblaydi. |
| `fiber-intake` | [Kletchatka (ozuqaviy tolalar) meʼyori kalkulyatori](CALCULATORS.uz.md#fiber-intake) | Ichak mikrobiotasini oziqlantirish, xolesterinni normallashtirish va oshqozon-ichak motorikasini yaxshilash uchun zarur kunlik kletchatka miqdorini aniqlaydi. |
| `omega-3` | [Omega-3 kalkulyatori (EPK + DGK dozasi va indeksi)](CALCULATORS.uz.md#omega-3) | Aniq klinik maqsadlar va turmush tarzi uchun eykozapentaen (EPK) va dokozageksaen (DGK) kislotalarining maqbul kunlik dozasini aniqlaydi. |
| `sodium-potassium` | [Natriy va kaliy balansi kalkulyatori (Na:K va tuz)](CALCULATORS.uz.md#sodium-potassium) | Ratsiondagi kaliy va natriy elektrolitlar balansini baholaydi, osh tuzi ekvivalentini va yurak-qon tomir xavfini hisoblab chiqadi. |
| `alcohol` | [Alkogolning chiqib ketishi kalkulyatori (Vidmark formulasi)](CALCULATORS.uz.md#alcohol) | Qondagi etanolning cho‘qqi va joriy konsentratsiyasini (promille ‰ da), to‘liq hushyor bo‘lish vaqtini va alkogol kaloriyasini hisoblaydi. |
| `caffeine` | [Kofeinning chiqib ketishi va uxlash vaqti kalkulyatori](CALCULATORS.uz.md#caffeine) | Qonda kofein parchalanish dinamikasini, yarimparchalanish davrini va uxlash vaqtida qoladigan qoldiq miqdorini hisoblaydi. |
| `weight-loss-forecast` | [Vazn yo‘qotishning dinamik prognozi kalkulyatori (Kevin Xoll modeli)](CALCULATORS.uz.md#weight-loss-forecast) | Metabolizmning sekinlashishi va mushaklarni saqlashni hisobga olgan holda Kevin Xoll (NIH) modeli asosida ozishning real chiziqli bo‘lmagan trayektoriyasini tuzadi. |
| `sleep-cycles` | [Uyqu sikllari kalkulyatori](CALCULATORS.uz.md#sleep-cycles) | 90 daqiqalik ultradian sikllar (sekin va tez uyqu fazalari) hamda o‘rtacha uxlab qolish vaqti asosida uyqu vaqtini hisoblash vositasi. |
| `findrisc` | [FINDRISC diabet xavfi shkalasi](CALCULATORS.uz.md#findrisc) | Yashirin diabetni erta skrining qilish va 10 yil ichida 2-toifa QD paydo bo‘lish xavfini baholash uchun JSST va IDF tomonidan xalqaro tan olingan so‘rovnoma. |
| `debq` | [Golland ovqatlanish xulq-atvori so‘rovnomasi (DEBQ)](CALCULATORS.uz.md#debq) | Ovqatlanish xulq-atvorining uch asosiy turini (cheklovchi, emotsiogen va tashqi) aniqlash uchun mo‘ljallangan klassik psixologik vosita. |
| `phq-9` | [Bemor salomatligi so‘rovnomasi PHQ-9 (Depressiya)](CALCULATORS.uz.md#phq-9) | DSM-5 mezonlari asosida depressiya darajasini aniqlash va birlamchi skrining qilish uchun xalqaro oltin standart. |
| `gad-7` | [Umumiy xavotir shkalasi GAD-7](CALCULATORS.uz.md#gad-7) | Umumiy xavotir darajasi va hissiy taranglikni tezkor baholash uchun mo‘ljallangan xalqaro klinik so‘rovnoma. |
| `pss-10` | [Qabul qilingan stress shkalasi PSS-10](CALCULATORS.uz.md#pss-10) | Insonning o‘z hayotidagi vaziyatlarni oldindan aytib bo‘lmaydigan, nazorat qilib bo‘lmaydigan va ortiqcha yuklama sifatida baholashini o‘lchaydigan Sheldon Koenning klassik shkalasi. |
| `isi` | [Uyqusizlik og‘irligi indeksi ISI](CALCULATORS.uz.md#isi) | Uyqusizlik alomatlarining xususiyati, og‘irligi va kunduzgi faoliyatga taʼsirini baholash uchun mo‘ljallangan 7 savolli qisqa klinik vosita. |
| `scoff` | [Ovqatlanish xulq-atvori buzilishlari skriningi SCOFF](CALCULATORS.uz.md#scoff) | Anoreksiya va bulimiya kabi ovqatlanish buzilishlari xavfini birlamchi aniqlash uchun dunyoda eʼtirof etilgan 5 savolli klinik skrining. |
| `ies-2` | [Intuitiv ovqatlanish shkalasi IES-2](CALCULATORS.uz.md#ies-2) | Treysi Tilka tomonidan ishlab chiqilgan, taom va tana bilan uyg‘un hamda intuitiv munosabatni o‘lchovchi 23 savolli ilmiy shkala. |
| `yfas` | [mYFAS 2.0 oziq-ovqatga qaramlik Yale shkalasi](CALCULATORS.uz.md#yfas) | Yuqori kaloriyali va chuqur qayta ishlangan taomlarga addiktiv maylni aniqlash uchun Yale universiteti tomonidan moslashtirilgan ilmiy so‘rovnoma. |
| `eating-behavior-wizard` | [Ovqatlanish xulq-atvori diagnostikasi ustasi](CALCULATORS.uz.md#eating-behavior-wizard) | Taomlanishning chuqur psixotipini va shaxsiy strategiyani aniqlash uchun yetakchi validatsiyalangan shkalalarni birlashtiruvchi NutriFit integratsiyalashgan diagnostika ustasi. |


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

[Native API](NATIVE_REACT.md) · [Service](../SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=uz)

## Litsenziya va chegaralar

Copyright (c) 2026 **NUTRIFIT LLC**. Adapter va nativ taom interfeysi kodi standart MIT litsenziyasida tarqatiladi. Kod litsenziyasi xizmat kvotasi, white label, NutriFit savdo belgisi yoki klinik so‘rovnomalar mulk huquqini bermaydi. Backend, shaxsiy kabinet va mahsulot katalogi kiritilmagan. Tibbiy va psixologik kalkulyatorlar usul cheklovlarini saqlaydi va tashxis hisoblanmaydi.

[MIT](../LICENSE) · [GitHub](https://github.com/nutrifit-health/nutrifit-widgets)
