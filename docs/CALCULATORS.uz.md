# To‘liq katalog — NutriFit

[English](../README.md) · [Русский](README.ru.md) · [Español](README.es.md) · [Українська](README.uk.md) · [Қазақша](README.kk.md) · [O‘zbekcha](README.uz.md)

Yo‘riqnomalar NutriFit mavjud ochiq tavsif va usullaridan foydalanadi. Kalkulyatorni tanlang va adapterga aniq ID-ini bering. Vidjet va ochiq sahifa bir komponentni ishlatadi.

Bepul vidjetlar mavjud brendli server PDF-ini so‘rashi mumkin. Bu ko‘rsatilgan maydon va natijalar nusxasi, mustaqil qayta hisoblash yoki diagnostik tekshiruv emas. Server mavjud bo‘lishi kerak. So‘rovnomani eksport qilishdan oldin javoblarni tugating.

- [Kunlik kaloriya normasi kalkulyatori (TDEE)](#tdee)
- [BYU kalkulyatori](#macros)
- [Suv normasi kalkulyatori](#water)
- [Tana tarkibi kalkulyatori](#body-composition)
- [Glikemik yuklama kalkulyatori](#glycemic-load)
- [Nutriyent tanqisligi xavfi skriningi](#deficiency-risk)
- [Salomatlik va ovqatlanish balansi g'ildiragi](#health-balance-wheel)
- [HOMA-IR kalkulyatori: insulinga chidamlilik indeksi](#homa-ir)
- [TyG indeksi kalkulyatori (triglitseridlar × glyukoza)](#tyg-index)
- [Lipid profili kalkulyatori: PZLP, non-HDL va aterogenlik indekslari](#lipid-profile)
- [CKD-EPI 2021 bo‘yicha KFT (eGFR) kalkulyatori](#egfr)
- [HbA1c ↔ o‘rtacha glyukoza (eAG) konvertori](#hba1c-eag)
- [Laboratoriya sinov birligi konvertori](#lab-unit-converter)
- [D vitamini: Van Groningen modelini baholash](#vitamin-d-dose)
- [Temir tanqisligi kalkulyatori: TSAT, Ferritin va Ganzoni tanqisligi](#iron-deficiency)
- [PhenoAge biologik yosh kalkulyatori (Levine)](#phenoage)
- [FIB-4 va APRI kalkulyatori: jigar fibrozi indekslari](#fib-4)
- [Erkin testosteron kalkulyatori (Vermeulen)](#free-testosterone)
- [Anion bo‘shlig‘i va delta-nisbati kalkulyatori](#anion-gap)
- [Albumin bo‘yicha tuzatilgan kalsiy kalkulyatori (Payne)](#corrected-calcium)
- [1RM kalkulyatori (bir martalik maksimal vazn)](#one-rep-max)
- [Yurak urish zonalari kalkulyatori](#heart-rate-zones)
- [MKId (VO2max) kalkulyatori](#vo2max)
- [FFMI kalkulyatori (yog‘siz tana massasi indeksi)](#ffmi)
- [Ketch — MakArdl BMR va TDEE kalkulyatori](#katch-mcardle)
- [Ideal tana vazni kalkulyatori (IBW va AdjBW)](#ideal-body-weight)
- [Bel antropometrik indekslari kalkulyatori (WHtR, WHR, VAI)](#waist-ratios)
- [Terlash tezligi va regidratatsiya kalkulyatori](#sweat-rate)
- [Mushak salohiyati kalkulyatori (Keysi Batt va Martin Berxan)](#muscle-potential)
- [Pauerlifting koeffitsientlari kalkulyatori (DOTS, Wilks, IPF GL)](#powerlifting-coefficients)
- [Kunlik oqsil meʼyori kalkulyatori (ISSN va ESPEN)](#protein-intake)
- [Kletchatka (ozuqaviy tolalar) meʼyori kalkulyatori](#fiber-intake)
- [Omega-3 kalkulyatori (EPK + DGK dozasi va indeksi)](#omega-3)
- [Natriy va kaliy balansi kalkulyatori (Na:K va tuz)](#sodium-potassium)
- [Alkogolning chiqib ketishi kalkulyatori (Vidmark formulasi)](#alcohol)
- [Kofeinning chiqib ketishi va uxlash vaqti kalkulyatori](#caffeine)
- [Vazn yo‘qotishning dinamik prognozi kalkulyatori (Kevin Xoll modeli)](#weight-loss-forecast)
- [Uyqu sikllari kalkulyatori](#sleep-cycles)
- [FINDRISC diabet xavfi shkalasi](#findrisc)
- [Golland ovqatlanish xulq-atvori so‘rovnomasi (DEBQ)](#debq)
- [Bemor salomatligi so‘rovnomasi PHQ-9 (Depressiya)](#phq-9)
- [Umumiy xavotir shkalasi GAD-7](#gad-7)
- [Qabul qilingan stress shkalasi PSS-10](#pss-10)
- [Uyqusizlik og‘irligi indeksi ISI](#isi)
- [Ovqatlanish xulq-atvori buzilishlari skriningi SCOFF](#scoff)
- [Intuitiv ovqatlanish shkalasi IES-2](#ies-2)
- [mYFAS 2.0 oziq-ovqatga qaramlik Yale shkalasi](#yfas)
- [Ovqatlanish xulq-atvori diagnostikasi ustasi](#eating-behavior-wizard)

<a id="tdee"></a>

## Kunlik kaloriya normasi kalkulyatori (TDEE)

`tdee` · [NutriFit](https://nutrifit.health/uz/calculators/tdee)

Asosiy almashinuv va kunlik umumiy energiya sarfini, shuningdek vaznni kamaytirish, saqlash va to‘plash uchun kaloriyani hisoblaydi.

### Foydalanish tartibi

1. Tana parametrlarini ko‘rsating: Aniq vazn, bo‘y, jins va yoshni kiriting. Bu asosiy metabolizmni (BMR) hisoblash uchun zarur.
2. Faollik darajasini baholang: Haftalik faolligingizni xolisona tanlang. O‘tirib ishlaganda doimiy sportsiz faollik darajasini oshirib ko‘rsatmang.
3. Maqsadingizga mos kaloriyani tanlang: Vaznni saqlash, yog‘ yoqish (-500 kkal) yoki mushak to‘plash (+300 kkal) me’yorlarini oling.

### Usul va formula

Asosiy almashinuv (BMR) 1990-yilgi Mifflin-St Jeor tenglamasi bilan hisoblanadi — bu sog‘lom kattalarda tinch holatdagi sarfni baholashning amaldagi standarti. Kunlik umumiy sarf (TDEE) BMR ni faollik koeffitsiyentiga ko‘paytirish orqali olinadi. Vaznni kamaytirish kaloriyasi TDEE dan 20% kam, to‘plash uchun 15% ko‘p: bunday sur’at mushak to‘qimasini yo‘qotmasdan va keskin sakrashlarsiz vaznni o‘zgartiradi.

BMR (erkak) = 10 × vazn(kg) + 6,25 × bo‘y(sm) − 5 × yosh + 5; BMR (ayol) = 10 × vazn(kg) + 6,25 × bo‘y(sm) − 5 × yosh − 161; TDEE = BMR × faollik koeffitsiyenti

### Cheklovlar

Tenglama sog‘lom kattalarda olingan va taxminan ±10% xatolik beradi. U tana tarkibini hisobga olmaydi: mushak massasi yuqori bo‘lganda natija pasaytirilgan, semizlikda oshirilgan bo‘ladi. Homiladorlar, bolalar, yuqori darajadagi sportchilar va qalqonsimon bez kasalliklari bo‘lganlar uchun alohida metodikalar kerak.

### Manbalar

- [Mifflin M.D., St Jeor S.T. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

<a id="macros"></a>

## BYU kalkulyatori

`macros` · [NutriFit](https://nutrifit.health/uz/calculators/macros)

Kunlik kaloriyani tana vazni va maqsadni hisobga olib oqsil, yog‘ va uglevodlarga taqsimlaydi — grammda, kaloriyada va foizda.

### Foydalanish tartibi

1. Hisoblash usulini tanlang: Mavjud kaloriya meʼyoringizni kiriting yoki NutriFit tizimiga yosh, jins, boʻy, vazn va faollik asosida kunlik sarfni (TDEE) hisoblashga ruxsat bering.
2. Parametrlar va maqsadni koʻrsating: Maqsadni tanlang: vazn yoʻqotish (20% defitsit), vaznni saqlash yoki mushak toʻplash (15% profitsit). Vaznni kg yoki funtda kiritish mumkin.
3. Shaxsiy BQY rejangizni oling: Oqsil, yogʻ va uglevodlarning gramm, kaloriya va foizdagi ilmiy asoslangan aniq meʼyorlarini darhol oling.

### Usul va formula

Oqsil va yogʻlar kaloriya ulushidan emas, balki tana vaznidan hisoblanadi: bular kaloriya miqdoriga qarab oʻzgarmasligi kerak boʻlgan fiziologik ehtiyojlardir. Oqsil meʼyori ISSN pozitsiyasiga mos keladi (maqsadga qarab 1,4–2,4 g/kg). Yogʻlar 0,8–1,2 g/kg amaliy oraliqda baholanadi va olingan energiya foizi AMDR 20–35% mos yozuvlar oraligʻi bilan taqqoslanadi. Uglevodlar qolgan kaloriyalarni oladi: ular mashgʻulotlar va miya faoliyatini energiya bilan taʼminlaydi.

Oqsil(g) = vazn × maqsad koeffitsiyenti; Yog‘(g) = vazn × 0,8…1,2; Uglevod(g) = (kaloriya − oqsil × 4 − yog‘ × 9) / 4

### Cheklovlar

Umumiy tana vaznidan hisoblash aniq semizlikda oqsil normasini oshirib yuboradi — bu holda toza massaga hisoblash to‘g‘riroq. Sxema ovqatlanishlar bo‘yicha taqsimotni, tolani va uglevodlarga individual chidamlilikni hisobga olmaydi.

### Manbalar

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: Protein and Exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids, 2005 (AMDR)](https://nap.nationalacademies.org/catalog/10490)

<a id="water"></a>

## Suv normasi kalkulyatori

`water` · [NutriFit](https://nutrifit.health/uz/calculators/water)

Tana vaznidan kunlik suyuqlik ehtiyojini jismoniy yuklama va issiq iqlimga tuzatish bilan hisoblaydi.

### Foydalanish tartibi

1. Tana vaznini ko‘rsating: Suvga bo‘lgan asosiy fiziologik ehtiyoj tana vazniga to‘g‘ridan-to‘g‘ri proporsionaldir (o‘rtacha 1 kg vaznga 30–35 ml).
2. Jismoniy faollikni qo‘shing: Har 30 daqiqalik mashg‘ulot ter bilan yo‘qotilgan suyuqlik o‘rnini qoplash uchun qo‘shimcha 350–500 ml suyuqlik talab qiladi.
3. Iqlim va haroratni inobatga oling: Issiq ob-havo (>25°C) yoki havoning past namligi kunlik ehtiyojni yana 500 ml ga oshiradi.

### Usul va formula

Asosiy ehtiyoj — kattalar uchun tana vaznining har kg iga 30 ml, 60 yoshdan keyin 25 ml/kg, chunki buyrakning konsentratsiya qobiliyati pasayadi. Har bir soat jadal yuklama ter bilan yo‘qotishni qoplash uchun 500 ml, issiq iqlim yoki quruq isitiladigan xona uchun yana 500 ml qo‘shadi. Yakun — suvga to‘liq ehtiyoj; uning 20–30% oziq-ovqat bilan keladi, shuning uchun ichimliklar normasi alohida ko‘rsatilgan (EFSA, 2010).

Jami(ml) = vazn × 30 (yoki 60 yoshdan keyin × 25) + 500 × yuklama soatlari + issiqda 500; Ichimliklar(ml) = jami × 0,75

### Cheklovlar

Sog‘lom kattalar uchun mo‘ljal. Yurak va buyrak yetishmovchiligida, diuretik qabul qilishda, isitmada va issiq ishlab chiqarishda normani shifokor belgilaydi. Chanqoq va siydik rangi har qanday hisobdan ko‘ra ishonchliroq mo‘ljal bo‘lib qoladi.

### Manbalar

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [Sawka M.N. et al. American College of Sports Medicine Position Stand: Exercise and Fluid Replacement, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

<a id="body-composition"></a>

## Tana tarkibi kalkulyatori

`body-composition` · [NutriFit](https://nutrifit.health/uz/calculators/body-composition)

Tana o‘lchamlari bo‘yicha yog‘ ulushini baholaydi, yog‘ va toza massani hamda tana vazni indeksini hisoblaydi.

### Foydalanish tartibi

1. Santimetrli lentani oling: Cho‘zilmaydigan egiluvchan o‘lchov lentasidan foydalaning. O‘lchovlarni ertalab och qoringa bajaring.
2. Tana aylanalarini o‘lchang: Erkaklarga bo‘yin va bel kerak. Ayollarga — bo‘yin, bel va dumba. Lenta teriga zich tegib turishi, lekin qisib qo‘ymasligi lozim.
3. Tana tarkibingizni bilib oling: Kalkulyator yog‘ foizini, mutlaq yog‘ massasini va yog‘siz quruq (mushak) massasini hisoblab beradi.

### Usul va formula

Yog‘ ulushi U.S. Navy usuli bilan baholanadi (Hodgdon va Beckett, 1984): hisobga bo‘y hamda bo‘yin, bel, ayollarda esa son aylanasi kiradi. Usul jihoz talab qilmagani uchun tanlangan, xatoligi esa maishiy bioimpedans tarozilari bilan solishtirsa bo‘ladi. Qo‘shimcha ravishda JSST tasnifi bo‘yicha TVI hisoblanadi — u tana tarkibi haqida hech narsa aytmaydi, lekin populyatsion normalar bilan solishtirish uchun kerak.

Erkaklar: %yog‘ = 495 / (1,0324 − 0,19077 × log₁₀(bel − bo‘yin) + 0,15456 × log₁₀(bo‘y)) − 450; Ayollar: %yog‘ = 495 / (1,29579 − 0,35004 × log₁₀(bel + son − bo‘yin) + 0,221 × log₁₀(bo‘y)) − 450; TVI = vazn / bo‘y²

### Cheklovlar

Usul xatoligi DXA bilan solishtirganda taxminan ±3–4% va tana tuzilishi noodatiy bo‘lgani sari ortadi. O‘lchovlarni ertalab nahorda, lentani tortmasdan, doim bir nuqtalarda oling: beldagi 1 sm farq natijani sezilarli o‘zgartiradi. TVI mushak bilan yog‘ni ajratmaydi va sportchilar, homiladorlar hamda bolalarga qo‘llanmaydi.

### Manbalar

- [Hodgdon J.A., Beckett M.B. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center, 1984](https://apps.dtic.mil/sti/citations/ADA143890)
- [WHO. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894, 2000](https://www.who.int/publications/i/item/WHO_TRS_894)

<a id="glycemic-load"></a>

## Glikemik yuklama kalkulyatori

`glycemic-load` · [NutriFit](https://nutrifit.health/uz/calculators/glycemic-load)

Porsiyaning glikemik yuklamasini glikemik indeks va uglevod miqdori bo‘yicha hisoblaydi — bu kattalik glyukoza javobini indeksning o‘zidan ko‘ra yaxshiroq aks ettiradi.

### Foydalanish tartibi

1. Mahsulotni tanlang yoki GIni kiriting: Ma’lumotnoma mahsulotlar bazasidan (Atkinson 2021 xalqaro jadvallari) foydalaning yoki glikemik indeksni qo‘lda ko‘rsating.
2. Uglevodlar va porsiya hajmini ko‘rsating: 100 g mahsulotdagi uglevodlar miqdorini va porsiyaning haqiqiy vaznini grammda kiriting.
3. Metabolik ta’sirni baholang: Porsiyaning qon qandiga haqiqiy ta’sirini bilib oling: past (≤10), o‘rtacha (11–19) yoki yuqori (≥20) yuklama.

### Usul va formula

Glikemik indeks 50 g uglevod saqlagan porsiyadan keyin glyukoza ko‘tarilish tezligini ko‘rsatadi, lekin haqiqiy porsiya hajmi haqida hech narsa aytmaydi. Glikemik yuklama ikkalasini ham hisobga oladi: indeks aniq porsiyadagi uglevod miqdoriga ko‘paytirilib, 100 ga bo‘linadi. Shuning uchun indeksi yuqori tarvuz past yuklama beradi — porsiyada uglevod kam.

Porsiya uglevodi(g) = 100 g dagi uglevod × porsiya vazni / 100; GY = GI × porsiya uglevodi / 100

### Cheklovlar

Jadval indeks qiymatlari o‘rtachalashtirilgan: nav, yetilganlik, maydalash, tayyorlash usuli hamda oqsil, yog‘ va tola bilan birikish glyukoza javobini o‘zgartiradi. Individual javob sezilarli farq qiladi, diabetda esa hisob glyukozani o‘lchashni yoki monitoring ma’lumotlarini almashtirmaydi.

### Manbalar

- [Atkinson F.S., Brand-Miller J.C. et al. International tables of glycemic index and glycemic load values 2021. Am J Clin Nutr, 2021;114(5):1625–1632](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin L.S.A. et al. Glycemic index, glycemic load and glycemic response: International Scientific Consensus Summit. Nutr Metab Cardiovasc Dis, 2015;25(9):795–815](https://pubmed.ncbi.nlm.nih.gov/26160327/)

<a id="deficiency-risk"></a>

## Nutriyent tanqisligi xavfi skriningi

`deficiency-risk` · [NutriFit](https://nutrifit.health/uz/calculators/deficiency-risk)

Turmush tarzi va ovqatlanish omillarini belgilaydi hamda qaysi nutriyent tanqisligi ehtimoli borligini va uni qanday tahlillar bilan tekshirishni ko‘rsatadi.

### Foydalanish tartibi

1. Ovqatlanish xususiyatlarini belgilang: Parhezdagi cheklovlarni (go‘sht, baliq, sut mahsulotlaridan voz kechish) va odatlarni ko‘rsating.
2. Turmush tarzi va dorilarni inobatga oling: Atrof-muhit omillarini (quyosh kamligi, intensiv sport) va dorilar qabul qilishni (antatsidlar, metformin) belgilang.
3. Tahlillar ro‘yxatini oling: Har bir nutriyent bo‘yicha xavf ballarini va klinik tekshirish uchun aniq laboratoriya markerlarini bilib oling.

### Usul va formula

Bu tashxis emas, xavf omillari ro‘yxati. Har bir omilga NIH Office of Dietary Supplements fact sheets va EFSA ning iste’mol referens qiymatlari bo‘yicha materiallarida xavf omili deb tan olingan nutriyentlar mos qo‘yilgan. Omil vazni bog‘liqlik kuchini aks ettiradi: 3 ball — qoplanmasa tanqislik qonuniy bo‘ladigan holat, 2 — muhim omil, 1 — qo‘shimcha hissa. Ballar har bir nutriyent bo‘yicha yig‘iladi: 2 balldan xavf o‘rtacha, 4 dan yuqori.

Nutriyent bali = belgilangan omillar vaznlari yig‘indisi; 0–1 ball — past xavf, 2–3 — o‘rtacha, 4 va undan yuqori — yuqori

### Cheklovlar

Skrining faqat belgilangan omillarga tayanadi va haqiqiy iste’molni, qo‘shimchalar qabulini, genetikani hamda yondosh kasalliklarni hisobga olmaydi. U tanqislikni tasdiqlamaydi va istisno ham qilmaydi — nutriyent holati laboratoriyada aniqlanadi va shifokor yoki ovqatlanish mutaxassisi tomonidan baholanadi.

### Manbalar

- [NIH Office of Dietary Supplements. Dietary Supplement Fact Sheets (группы риска по нутриентам)](https://ods.od.nih.gov/factsheets/list-all/)
- [EFSA. Dietary Reference Values for the EU (DRV Finder)](https://multimedia.efsa.europa.eu/drvs/index.htm)

<a id="health-balance-wheel"></a>

## Salomatlik va ovqatlanish balansi g'ildiragi

`health-balance-wheel` · [NutriFit](https://nutrifit.health/uz/calculators/health-balance-wheel)

Salomatlikning 8 sohasi bo'yicha interaktiv diagramma. Libix qonuni bo'yicha tor bo'g'inlarni aniqlaydi va NutriFit vositalari bilan bog'laydi.

### Foydalanish tartibi

1. 8 shkala bo‘yicha xolis o‘z-o‘zini baholash: Har bir o‘q bo‘yicha 1 dan 10 gacha ball qo‘ying. Slayderlar ostidagi dinamik ko‘rsatmalarga tayaning: ular har bir diapazon uchun aniq sifat mezonlarini beradi.
2. Cheklovchi omilni aniqlang: Test eng past ballga ega cheklovchi omillarni aniqlaydi. Lixbix minimumi qonuniga ko‘ra aynan ular umumiy farovonlikni belgilaydi va moslashuvni bloklaydi.
3. Maqsadli mikro-odatlardan boshlang: Barcha 8 sohani birdan o‘zgartirishga urinmang. 1–2 ta tor doiraga e’tibor qarating, maxsus NutriFit kalkulyatorlarini ulang va birinchi qadamni 48 soat ichida bajaring.

### Usul va formula

Metodika turmush tarzi tibbiyoti (Lifestyle Medicine) kontseptsiyasi va Yustus fon Libixning minimum qonuniga asoslangan. Sog‘liqning 8 asosiy o‘qi (ovqatlanish to‘liqligi, energiya, gidratatsiya, uyqu, faollik, ovqatlanishda onglilik, OshQT va profilaktika) 10 ballik shkala bo‘yicha baholanadi. Integral ball umumiy salohiyatni aks ettiradi, muvozanatlilik indeksi esa baholar dispersiyasi orqali hisoblanadi va organizm tizimlarining barqarorlik darajasini ko‘rsatadi.

Umumiy ball = (Σ Ballar / 8) × 10; Muvozanatlilik indeksi = max(0, 100 − SO‘Ch × 18); Tor joylar = min(Ballar) qiymati ≤ 6 bo‘lganda

### Cheklovlar

O‘z-o‘zini baholash skrining xarakteriga ega va o‘zini his qilish hamda odatlarni subyektiv qabul qilishni aks ettiradi. U kompleks laboratoriya diagnostikasi va shifokor ko‘rigini almashtirmaydi, ammo turmush tarzini o‘zgartirishda ustuvorliklarni belgilashga yordam beradi.

### Manbalar

- [Liebig J. Die organische Chemie in ihrer Anwendung auf Agricultur und Physiologie. Vieweg, Braunschweig, 1840 (Закон минимума Либиха)](https://archive.org/details/dieorganischech01liebgoog)
- [American College of Lifestyle Medicine (ACLM). Standards and Core Competencies for Lifestyle Medicine, 2022](https://lifestylemedicine.org/)
- [Katz D.L. et al. Lifestyle Medicine: The Foundation of Health Care. Am J Prev Med, 2018;54(5):737–742](https://pubmed.ncbi.nlm.nih.gov/29571948/)

<a id="homa-ir"></a>

## HOMA-IR kalkulyatori: insulinga chidamlilik indeksi

`homa-ir` · [NutriFit](https://nutrifit.health/uz/calculators/homa-ir)

Och qoringa glyukoza va insulin bo‘yicha HOMA-IR, HOMA-β va QUICKI indekslari: insulinga chidamlilik va β-hujayra funksiyasini me’yorlar va talqin bilan baholash.

### Foydalanish tartibi

1. Glyukoza va insulinni bitta namunadan topshiring: Ikkala ko‘rsatkich ham och qoringa bitta qon olishdan o‘lchanishi kerak — ertalab 8–12 soat ovqat, qahva va mashg‘ulotsiz. «Boshqa kundagi» insulin indeksni ma’nosiz qiladi.
2. Qiymatlarni blank birliklarida kiriting: Laboratoriyalar glyukozani mmol/l yoki mg/dl, insulinni mkXB/ml (µIU/mL) yoki pmol/l ko‘rinishida beradi. Birliklarni blankga moslab o‘zgartiring — kalkulyator o‘zi qayta hisoblaydi.
3. Uchala indeksni solishtiring: Indekslarni dastlabki tahlillar, qon olish sharoiti va laboratoriya me’yorlari bilan birga ko‘rib chiqing. HOMA-β oshqozon osti bezining holdan toyishini aniqlamaydi.

### Usul va formula

HOMA1 (Matthews, 1985) va QUICKI (Katz, 2000) och qoringa o‘lchangan glyukoza va insulinga asoslangan modellardir. Ular bir xil ma’lumotlarning turli jihatlarini ifodalaydi va asosan tadqiqotlarda ishlatiladi. HOMA-IR insulin rezistentligini, HOMA-β model doirasidagi sekretsiyani, QUICKI esa insulinga sezgirlikni baholaydi. Indekslar diabetning klinik diagnostika mezonlarini almashtirmaydi.

HOMA-IR = Glyukoza (mmol/l) × Insulin (mkXB/ml) / 22,5
HOMA-β (%) = 20 × Insulin (mkXB/ml) / (Glyukoza (mmol/l) − 3,5)
QUICKI = 1 / [log10(Insulin, mkXB/ml) + log10(Glyukoza, mg/dl)]

### Cheklovlar

Indekslar faqat och qoringa olingan namunalar (8–12 soat) uchun yaroqli va insulinoterapiya, sekretagoglar qabul qilish, dekompensatsiyalangan 1-tip diabet va past glyukoza paytida qo‘llanilmaydi (glyukoza ≤ 3,5 mmol/l bo‘lganda HOMA-β aniqlanmaydi). Insulinning referens qiymatlari laboratoriya usuliga, HOMA-IR chegaralari esa populyatsiyaga bog‘liq (turli tadqiqotlarda 2,0–3,8). Natija — tashxis emas, uglevod almashinuvini shifokor bilan muhokama qilish uchun sabab.

### Manbalar

- [Matthews D.R. et al. Homeostasis model assessment: insulin resistance and β-cell function from fasting plasma glucose and insulin concentrations in man. Diabetologia, 1985;28(7):412–419](https://pubmed.ncbi.nlm.nih.gov/3899825/)
- [Katz A. et al. Quantitative insulin sensitivity check index (QUICKI): a simple, accurate method for assessing insulin sensitivity in humans. J Clin Endocrinol Metab, 2000;85(7):2402–2410](https://pubmed.ncbi.nlm.nih.gov/10902785/)
- [Gayoso-Diz P. et al. Insulin resistance (HOMA-IR) cut-off values and the metabolic syndrome in a general adult population. BMC Endocr Disord, 2013;13:47](https://pubmed.ncbi.nlm.nih.gov/24131857/)

<a id="tyg-index"></a>

## TyG indeksi kalkulyatori (triglitseridlar × glyukoza)

`tyg-index` · [NutriFit](https://nutrifit.health/uz/calculators/tyg-index)

TyG indeksi va TyG-BMI, TyG-WC hosilalari: och qoringa triglitseridlar va glyukoza bo‘yicha insulinga chidamlilik va kardiometabolik xavfni baholash — insulin tahlilisiz.

### Foydalanish tartibi

1. Och qoringa triglitseridlar va glyukozani oling: Ikkala ko‘rsatkich ham qonning standart bioximiyasiga kiradi. Namuna och qoringa olinishi muhim: ovqatdan keyin triglitseridlar 1,5–2 baravar oshib, indeksni «shishiradi».
2. Blank birliklarini ko‘rsating: Formula mg/dl uchun aniqlangan. Laboratoriya mmol/l bergan bo‘lsa, o‘tkazgichni mmol/l da qoldiring — kalkulyator mg/dl ga avtomatik qayta hisoblaydi.
3. Vazn, bo‘y va belni qo‘shing: TyG-BMI va TyG-WC vistseral semizlik va jigar yog‘li kasalligini «sof» TyG dan aniqroq aniqlaydi. Belni kindik darajasida nafas chiqarganda o‘lchang.

### Usul va formula

TyG indeksi (Simental-Mendía, 2008) — mg/dl dagi och qoringa triglitseridlar va glyukoza ko‘paytmasining yarmining natural logarifmi. U lipotoksiklik va glyukoza o‘zlashtirilishining buzilishini — insulinga chidamlilikning ikki asosiy mexanizmini — aks ettiradi va euglikemik klamp bilan HOMA-IR dan kam bo‘lmagan darajada korrelyatsiyalanadi, bunda qimmat va yomon standartlashtirilgan insulin tahlilini talab qilmaydi. TyG-BMI va TyG-WC hosilalari tana vazni va bel aylanasini qo‘shib, metabolik sindrom va NAJKni aniqlash aniqligini oshiradi.

TyG = ln[ Triglitseridlar (mg/dl) × Glyukoza (mg/dl) / 2 ]
TyG-BMI = TyG × TVI (kg/m²)
TyG-WC = TyG × Bel aylanasi (sm)
Qayta hisoblash: TG mg/dl = mmol/l × 88,57; glyukoza mg/dl = mmol/l × 18,016

### Cheklovlar

TyG ning yagona chegarasi yo‘q: turli populyatsiyalarda yuqori xavf chegarasi 8,5 dan 9,0 gacha o‘zgaradi, osiyo kogortalarida esa pastroq. Indeks oilaviy gipertriglitseridemiya, fibratlar, statinlar va bir kun oldingi alkogol qabulida, shuningdek o‘tkir kasallikda buziladi. Och qoringa (8–12 soat) qiymatlar talab qilinadi. Indeks — tashxis emas, skrining vositasi.

### Manbalar

- [Simental-Mendía L.E., Rodríguez-Morán M., Guerrero-Romero F. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008;6(4):299–304](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F. et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010;95(7):3347–3351](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A. et al. Diagnostic accuracy of the triglyceride and glucose index for insulin resistance: a systematic review. Int J Endocrinol, 2020;2020:4678526](https://pubmed.ncbi.nlm.nih.gov/32256572/)

<a id="lipid-profile"></a>

## Lipid profili kalkulyatori: PZLP, non-HDL va aterogenlik indekslari

`lipid-profile` · [NutriFit](https://nutrifit.health/uz/calculators/lipid-profile)

Standart lipidogramma bo‘yicha ikki usulda hisoblangan PZLP, non-HDL, qoldiq xolesterin va beshta aterogenlik indeksi — ESC/EAS maqsadli qiymatlari bilan.

### Foydalanish tartibi

1. Uchta asosiy ko‘rsatkichni kiriting: Umumiy xolesterin, YZLP va triglitseridlar har qanday lipidogrammada bor. Blank birliklarini tanlang: mmol/l (MDH, Yevropa) yoki mg/dl (AQSh, Lotin Amerikasi laboratoriyalarining bir qismi).
2. Bo‘lsa, o‘lchangan PZLP ni qo‘shing: PZLP ni to‘g‘ridan-to‘g‘ri o‘lchash hisoblashdan aniqroq. U bo‘lmasa — kalkulyator Sempson tenglamasidan foydalanadi va laboratoriya blanki bilan solishtirish uchun parallel Fridvaldni ko‘rsatadi.
3. Bitta ko‘rsatkichga emas, nisbatlarga qarang: Past YZLP va yuqori triglitseridlardagi normal umumiy xolesterin — aterogen profil. AIP va aterogenlik koeffitsienti buni «UX me’yorda» bo‘lganda aniqlaydi.

### Usul va formula

Umumiy xolesterin, YZLP va triglitseridlardan kalkulyator PZLP ni klassik Fridvald formulasi (1972) va 9 mmol/l gacha triglitseridlar hamda past PZLP da aniq bo‘lib qoladigan Sempson tenglamasi (NIH, 2020) bo‘yicha chiqaradi. Non-HDL — butun aterogen xolesterin (PZLP + JPZLP + qoldiq zarrachalar), qoldiq xolesterin esa non-HDL va PZLP farqi. Castelli indekslari (UX/YZLP va PZLP/YZLP), Klimov aterogenlik koeffitsienti va plazma aterogenlik indeksi AIP = log10(TG/YZLP) «yomon» va «himoya» fraksiyalar nisbatini aks ettiradi va xavfni alohida ko‘rsatkichlardan yaxshiroq bashorat qiladi.

PZLP (Fridvald, mmol/l) = UX − YZLP − TG / 2,2   [TG ≤ 4,5 mmol/l bo‘lganda]
PZLP (Sempson, mg/dl) = UX/0,948 − YZLP/0,971 − (TG/8,56 + TG×non-HDL/2140 − TG²/16100) − 9,44
non-HDL = UX − YZLP;  Qoldiq XS = non-HDL − PZLP
AK (Klimov) = (UX − YZLP) / YZLP;  Castelli I = UX/YZLP;  Castelli II = PZLP/YZLP
AIP = log10(TG / YZLP), mmol/l

### Cheklovlar

Hisoblangan PZLP — o‘lchov emas, baho: TG > 4,5 mmol/l bo‘lganda Fridvald formulasi qo‘llanilmaydi, TG > 9 mmol/l va xilomikronemiyada esa Sempson tenglamasi ham aniq emas. Indekslar SCORE2, apolipoprotein B va lipoprotein(a) bo‘yicha umumiy xavf bahosini almashtirmaydi. PZLP maqsadli qiymatlari xavf toifasiga bog‘liq (ESC/EAS 2019 bo‘yicha 1,4 dan 3,0 mmol/l gacha) — ularni shifokor belgilaydi. Tahlil laboratoriya tavsiyasi bo‘yicha och qoringa yoki och qorinsiz topshiriladi.

### Manbalar

- [Friedewald W.T., Levy R.I., Fredrickson D.S. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972;18(6):499–502](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M. et al. A new equation for calculation of low-density lipoprotein cholesterol in patients with normolipidemia and/or hypertriglyceridemia. JAMA Cardiol, 2020;5(5):540–548](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiášová M., Frohlich J. The plasma parameter log (TG/HDL-C) as an atherogenic index. Clin Biochem, 2001;34(7):583–588](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F. et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J, 2020;41(1):111–188](https://pubmed.ncbi.nlm.nih.gov/31504418/)

<a id="egfr"></a>

## CKD-EPI 2021 bo‘yicha KFT (eGFR) kalkulyatori

`egfr` · [NutriFit](https://nutrifit.health/uz/calculators/egfr)

CKD-EPI 2021 bo‘yicha hisobiy KFT (kreatinin, ixtiyoriy sistatin C), Kokroft — Golt bo‘yicha kreatinin klirensi va KDIGO bo‘yicha SBK bosqichi — mkmol/l va mg/dl qayta hisoblash bilan.

### Foydalanish tartibi

1. Blankdan kreatininni toping: Zardob kreatinini asosiy bioximiyaga kiradi. MDH va Yevropa laboratoriyalari mkmol/l, AQSh va Lotin Amerikasi — mg/dl beradi. Kerakli birlikni tanlang.
2. Jins va yoshni ko‘rsating: Mushak massasi, demak «normal» kreatinin ham erkaklar va ayollarda farq qiladi va yosh bilan pasayadi — tenglama buni hisobga oladi. 2021 yilgi versiyada irqiy tuzatish chiqarib tashlangan.
3. Bo‘lsa, sistatin C qo‘shing: Sistatin C mushak massasi va ratsionga bog‘liq emas. Birlashgan tenglama albuminuriyasiz eGFRcr 45–59 da SBK ni tasdiqlash uchun KDIGO 2024 tomonidan tavsiya etilgan.

### Usul va formula

Koptokcha filtratsiya tezligi — buyrak funksiyasining asosiy ko‘rsatkichi. CKD-EPI 2021 tenglamasi (Inker et al., NEJM) uni zardob kreatinini, yosh va jins bo‘yicha amaliyotdan chiqarilgan irqiy koeffitsientsiz chiqaradi. Sistatin C mavjud bo‘lganda CKD-EPI 2021 cr-cys birlashgan tenglamasi qo‘llaniladi — u nostandart mushak massasi bo‘lgan odamlarda (sportchilar, sarkopeniya, amputatsiyalar, veganlar) aniqroq. Qo‘shimcha kalkulyator dori dozalash uchun hozirgacha qo‘llaniladigan Kokroft — Golt bo‘yicha kreatinin klirensini va KDIGO bo‘yicha G1–G5 SBK bosqichini ko‘rsatadi.

eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1,200 × 0,9938^Yosh × 1,012 [ayol]
κ = 0,7 (ayol) / 0,9 (erkak);  α = −0,241 (ayol) / −0,302 (erkak);  Scr — kreatinin, mg/dl (= mkmol/l / 88,4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0,544 × min(Scys/0,8,1)^−0,323 × max(Scys/0,8,1)^−0,778 × 0,9961^Yosh × 0,963 [ayol]
Kokroft — Golt (ml/min) = (140 − Yosh) × Vazn (kg) × 0,85 [ayol] / (72 × Scr, mg/dl)

### Cheklovlar

Hisobiy KFT barqaror holatdagi 18 yoshdan katta kattalar uchun validatsiyalangan: buyrakning o‘tkir shikastlanishi, homiladorlik, tana vazni va mushak massasining ekstremal qiymatlari, amputatsiyalar va kreatinin sekretsiyasiga ta’sir qiluvchi preparatlar (trimetoprim, simetidin) qabul qilishda u noaniq. Bitta eGFR < 60 qiymati SBK degani emas — tashxis 3 oydan keyin tasdiqlash va albuminuriyani baholashni talab qiladi. Kokroft — Golt formulasi tana yuzasiga normalanmagan va semizlikda klirensni oshirib ko‘rsatadi.

### Manbalar

- [Inker L.A. et al. New creatinine- and cystatin C-based equations to estimate GFR without race. N Engl J Med, 2021;385(19):1737–1749](https://pubmed.ncbi.nlm.nih.gov/34554658/)
- [KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl, 2013;3(1):1–150](https://kdigo.org/guidelines/ckd-evaluation-and-management/)
- [Cockcroft D.W., Gault M.H. Prediction of creatinine clearance from serum creatinine. Nephron, 1976;16(1):31–41](https://pubmed.ncbi.nlm.nih.gov/1244564/)

<a id="hba1c-eag"></a>

## HbA1c ↔ o‘rtacha glyukoza (eAG) konvertori

`hba1c-eag` · [NutriFit](https://nutrifit.health/uz/calculators/hba1c-eag)

ADAG formulasi bo‘yicha HbA1c ni 3 oylik o‘rtacha glikemiyaga qayta hisoblash, teskari hisob va ADA toifalari bilan % ↔ mmol/mol konvertatsiya.

### Foydalanish tartibi

1. Nima borligini tanlang: Qo‘lingizda HbA1c tahlili bo‘lsa — uni kiriting. Glyukometr yoki CGM yuritsangiz va 2–3 oydagi o‘rtacha glyukozani bilsangiz — teskari hisobga o‘ting.
2. Blank birliklarini ko‘rsating: HbA1c foizda (NGSP, AQSh va MDH) yoki mmol/mol da (IFCC, Yevropa) beriladi. 6,5 % 48 mmol/mol ga mos keladi — kalkulyator avtomatik qayta hisoblaydi.
3. eAG ni glyukometr ko‘rsatkichlari bilan solishtiring: Glyukometr bo‘yicha o‘rtacha eAG dan sezilarli past bo‘lsa — siz asosan och qoringa o‘lchab, ovqatdan keyingi cho‘qqilarni o‘tkazib yuborayotgan bo‘lishingiz mumkin. 1,5 mmol/l dan ortiq farqni shifokor bilan muhokama qilish kerak.

### Usul va formula

Glikirlangan gemoglobin 8–12 hafta — eritrotsit hayoti muddati — davomidagi o‘rtacha glyukoza konsentratsiyasini aks ettiradi. A1c-Derived Average Glucose tadqiqoti (ADAG, Nathan 2008) 507 kishida HbA1c ni glyukozaning uzluksiz monitoringi bilan solishtirib, chiziqli bog‘liqlikni chiqardi: eAG (mg/dl) = 28,7 × HbA1c − 46,7. Kalkulyator ikki tomonga ishlaydi — HbA1c dan o‘rtacha glyukozaga va ma’lum o‘rtacha glikemiyadan (masalan, glyukometr yoki CGM bo‘yicha) kutilayotgan HbA1c ga — va NGSP foizlarini Yevropa va Avstraliyada qabul qilingan IFCC birliklariga (mmol/mol) o‘tkazadi.

eAG (mg/dl) = 28,7 × HbA1c (%) − 46,7
eAG (mmol/l) = 1,59 × HbA1c (%) − 2,59
HbA1c (mmol/mol, IFCC) = (HbA1c (%, NGSP) − 2,15) × 10,929
Teskari: HbA1c (%) = (eAG, mg/dl + 46,7) / 28,7

### Cheklovlar

HbA1c eritrotsitlar hayoti muddatini yoki gemoglobin tuzilishini o‘zgartiruvchi holatlarda noaniq: anemiya, gemoglobinopatiyalar, homiladorlik, SBK, yaqinda qon yo‘qotish yoki quyish, temir va B12 tanqisligi. Odamlarning 10–15 % ida HbA1c va glyukoza o‘rtasidagi individual bog‘liqlik o‘rtachadan sezilarli farq qiladi («glikatsiya uzilishi» fenomeni), shuning uchun eAG — o‘lchov emas, populyatsion baho. Diabet tashxisi takroriy test bilan tasdiqlashni talab qiladi.

### Manbalar

- [Nathan D.M. et al. Translating the A1C assay into estimated average glucose values. Diabetes Care, 2008;31(8):1473–1478](https://pubmed.ncbi.nlm.nih.gov/18540046/)
- [American Diabetes Association. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes — 2024. Diabetes Care, 2024;47(Suppl 1):S20–S42](https://pubmed.ncbi.nlm.nih.gov/38078589/)
- [NGSP. IFCC Standardization of HbA1c: master equation NGSP ↔ IFCC](https://ngsp.org/ifcc.asp)

<a id="lab-unit-converter"></a>

## Laboratoriya sinov birligi konvertori

`lab-unit-converter` · [NutriFit](https://nutrifit.health/uz/calculators/lab-unit-converter)

Molyar massalarga asoslangan SI (mmol/l, μmol/l, nmol/l, pmol/l) va an&#39;anaviy birliklar (mg/dl, ng/ml, pg/ml) o&#39;rtasida 33 ta laboratoriya parametrlarini konvertatsiya qilish.

### Foydalanish tartibi

1. Ko&#39;rsatkichni tanlang: Ro&#39;yxat eng keng tarqalgan 33 ta analitni o&#39;z ichiga oladi: glyukoza va xolesteroldan tortib D vitamini, testosteron va kortizolgacha. Koeffitsient xolesterin, LDL va HDL uchun bir xil.
2. Iltimos, yo&#39;nalishni ko&#39;rsating: SI → an&#39;anaviy, agar shakl mmol/L yoki nmol/L da bo&#39;lsa va xorijiy mahsulotdan olingan ma&#39;lumotnoma mg/dL yoki ng/ml da bo&#39;lsa. Va aksincha, agar test chet elda o&#39;tkazilgan bo&#39;lsa.
3. Faqat raqamni emas, balki ma&#39;lumotnomani tekshiring: Malumot intervallari laboratoriya usuliga bog&#39;liq. Qiymatni to&#39;g&#39;ri diapazon bilan taqqoslash uchun shakldagi normal diapazonlarni qayta hisoblang.

### Usul va formula

Koeffitsient massa konsentratsiyasini molar massa va birlik hajmini hisobga olgan holda molyar konsentratsiyaga o&#39;zgartiradi. AMA va Labcorp dan olingan umumiy laboratoriya koeffitsientlari qo&#39;llaniladi. Insulin va prolaktin uchun koeffitsient tahlil kalibrlashiga bog&#39;liq; siz laboratoriyangiz qiymatini kiritishingiz mumkin. Karbamid uchun birlik mg/dL butun karbamid molekulasining massasini emas, balki karbamid azotining massasini - BUN ni ifodalaydi.

SI = massa qiymati × koeffitsient. Teskari tarjima: SI ÷ koeffitsient. Insulin va prolaktin uchun laboratoriya koeffitsientini tekshiring; mg/dL BUN va mg/dL karbamid bir-birining o&#39;rnini bosa olmaydi.

### Cheklovlar

Birliklarni konvertatsiya qilish natijani sharhlamaydi yoki tashxis qo&#39;ymaydi. Malumot intervallari laboratoriya va usulga qarab farq qiladi; ularning chegaralarini alohida konvertatsiya qiling. Insulin va prolaktin uchun koeffitsientni laboratoriya bilan tekshiring. BUN konvertatsiyasi mg/dL da karbamid sifatida ko&#39;rsatilgan natijalar uchun mos emas.

### Manbalar

- [Young D.S. Implementation of SI units for clinical laboratory data. Style specifications and conversion tables. Ann Intern Med, 1987;106(1):114–129](https://pubmed.ncbi.nlm.nih.gov/3789557/)
- [AMA Manual of Style, 11th ed. Units of Measure: Conventional Units and SI Units in Clinical Chemistry. Oxford University Press, 2020](https://academic.oup.com/amamanualofstyle/si-conversion-calculator)
- [NIST Special Publication 811. Guide for the Use of the International System of Units (SI), 2008](https://www.nist.gov/pml/special-publication-811)

<a id="vitamin-d-dose"></a>

## D vitamini: Van Groningen modelini baholash

`vitamin-d-dose` · [NutriFit](https://nutrifit.health/uz/calculators/vitamin-d-dose)

Ikki birlikda 25(OH)D va tana vazniga asoslangan tadqiqot xulosasi bahosi. Avtomatik davolash rejimi tayinlanmaydi.

### Foydalanish tartibi

1. O&#39;lchangan 25(OH)D ni kiriting: Xususan, 1,25(OH)2D emas, balki 25-gidroksivitamin D (kalsidiol). Formadagi birliklar nmol/L yoki ng/ml; kerakli birlikni tanlang, shunda kalkulyator o&#39;zgartiradi.
2. Qo&#39;llanilish doirasini tekshiring: 75 nmol/L maqsadli ko&#39;rsatkich tadqiqotda belgilangan va universal norma sifatida tanlanmagan. 50 nmol/L yoki undan yuqori boshlang&#39;ich darajalar uchun model bu yerda hisoblanmaydi.
3. Iltimos, tana vazningizni ko&#39;rsating: Hisoblab bo&#39;lgandan so&#39;ng, bu haqda mutaxassis bilan muhokama qiling. Raqamning o&#39;zi dori vositasini, bir martalik dozani yoki qabul qilish chastotasini aniqlamaydi.

### Usul va formula

QUERY LENGTH LIMIT EXCEEDED. MAX ALLOWED QUERY : 500 CHARS

Jami XB = 40 x (75 − 25(OH)D, nmol/L) x vazn (kg). 1 ng/ml = 2.496 nmol/L.

### Cheklovlar

Bu mutaxassis bilan muhokama qilish uchun tadqiqot bahosi, individual retsept emas. Agar sizda homilador bo&#39;lsangiz, farzandlaringiz bo&#39;lsa, kaltsiy almashinuvi buzilgan bo&#39;lsa, buyrak kasalligi bo&#39;lsa, malabsorbsiya bo&#39;lsa yoki granulomatoz kasalliklar bo&#39;lsa, mustaqil ravishda foydalanmang. Ushbu model dorilar va qo&#39;shimchalarni hisobga olmaydi; umumiy miqdor bitta dozada qabul qilinmasligi kerak.

### Manbalar

- [van Groningen L. et al. Cholecalciferol loading dose guideline for vitamin D-deficient adults. Eur J Endocrinol, 2010;162(4):805–811](https://pubmed.ncbi.nlm.nih.gov/20139241/)
- [Endocrine Society. Vitamin D for the Prevention of Disease: Clinical Practice Guideline, 2024](https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease)

<a id="iron-deficiency"></a>

## Temir tanqisligi kalkulyatori: TSAT, Ferritin va Ganzoni tanqisligi

`iron-deficiency` · [NutriFit](https://nutrifit.health/uz/calculators/iron-deficiency)

TSAT, CRP uchun sozlangan ferritin mos yozuvlar chegarasi va Ganzoni arifmetik modeli. Ushbu parametrlarning kombinatsiyasi tashxis qo&#39;yish uchun asos bo&#39;lmaydi.

### Foydalanish tartibi

1. Sinov natijalarini tayyorlang: Bitta laboratoriya testi natijalaridan foydalaning: ferritin, temir, TIBC yoki transferrin, gemoglobin va CRP. Testga tayyorgarlik ko&#39;rish bo&#39;yicha ko&#39;rsatmalar uchun laboratoriya bilan bog&#39;laning.
2. SRB qo&#39;shish: CRP 5 mg/L dan yuqori o&#39;lchanganda, ferritin mos yozuvlar diapazoni 15 dan 70 mkg/L gacha o&#39;zgaradi. Bu talqindagi barcha noaniqliklarni bartaraf etmaydi.
3. Ko&#39;rsatkichlar kombinatsiyasini muhokama qiling: Gemoglobinning pastligi har doim ham temir tanqisligi bilan bog&#39;liq emas va uning yo&#39;qligi temir tanqisligini istisno qilmaydi. Natijalarni alomatlaringiz va klinik holatingizga qarab baholang.

### Usul va formula

TSAT - bu sarum temirining TIBC ga teng birliklarda nisbati. Transferringa asoslangan TIBC taxminiy hisoblanadi. JSST 2020 ferritin ma&#39;lumotnoma qiymati qo&#39;llaniladi: yallig&#39;lanishsiz 15 mkg/L va CRP &gt; 5 mg/L bilan 70 mkg/L. Kasalliklar va klinik sharoit turli chegaralarni talab qilishi mumkin. Ko&#39;rsatkichlarning kombinatsiyasi anemiya sababini aniqlamaydi. Ganzoni ayollarda 120 g/L dan past Hb yoki erkaklarda 130 g/L uchun, belgilangan maqsad 150 g/L va 500 mg depo bilan, faqat vazni ≥ 35 kg uchun ko&#39;rsatiladi.

TSAT (%) = Sarum temir / TIBC × 100&#10; TLC (µmol/l) ≈ Transferrin (g/l) × 25.1&#10; Temir tanqisligi (mg, Ganzoni) = Og&#39;irligi (kg) × (Nishonli Hb − Hb, g/dL) × 2.4 + Depot (35 kg ≥ vazn uchun 500 mg)&#10; Konversiya: Temir mkg/dL x 0.179 = μmol/L; Hb g/L / 10 = g/dL

### Cheklovlar

Homilador bo&#39;lmagan kattalar uchun. O&#39;lchangan CRP ni kiriting; noma&#39;lum natija nolga teng deb hisoblanmaydi. Ferritin va TSAT yallig&#39;lanishga, laboratoriya test natijalariga va yaqinda o&#39;tkazilgan davolanishga bog&#39;liq. Ganzoni hisoblashi yuborish yo&#39;lini, preparatni, dozani yoki davolash davomiyligini aniqlamaydi.

### Manbalar

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni A.M. Intravenous iron-dextran: therapeutic and experimental possibilities. Schweiz Med Wochenschr, 1970;100(7):301–303](https://pubmed.ncbi.nlm.nih.gov/5413918/)
- [Venofer. Summary of Product Characteristics: Ganzoni formula and iron stores](https://www.medicines.org.uk/emc/product/5911/smpc)

<a id="phenoage"></a>

## PhenoAge biologik yosh kalkulyatori (Levine)

`phenoage` · [NutriFit](https://nutrifit.health/uz/calculators/phenoage)

9 ta biokimyoviy va gematologik biomarker asosida biologik fenotipik yoshni va qarish tezligini hisoblaydi.

### Foydalanish tartibi

1. Qon tahlillarini topshiring: Umumiy qon tahlili (leykotsitlar, limfotsitlar %, MCV, RDW) va biokimyo (albumin, kreatinin, glyukoza, CRO, ALP) talab etiladi.
2. Qiymatlarni kalkulyatorga kiriting: Ko‘rsatkichlar o‘lchov birliklariga eʼtibor bering va ularni mos maydonlarga kiriting.
3. Natijani tahlil qiling: Agar biologik yosh pasport yoshidan katta bo‘lsa, yallig‘lanish va metabolik biomarkerlarni tuzatishga eʼtibor qarating.

### Usul va formula

Morgan Levine (2018, Aging) ning NHANES IV maʼlumotlari asosidagi Gompertz modeliga tayangan. 9 ta biomarker (albumin, kreatinin, glyukoza, CRO, limfotsitlar ulushi, MCV, RDW, ishqoriy fosfataza, leykotsitlar) hamda xronologik yoshni birlashtiradi.

Chiziqli yig‘indi xb = koeffitsiyentlar × biomarkerlar; O‘lim xavfi M = 1 − exp(−exp(xb) × (exp(120/b) − 1) / (10 × 0.00769)); PhenoAge = 141.5 + ln(−0.00553 × ln(1 − M)) / 0.090165.

### Cheklovlar

Model o‘tkir infektsiyalar, jarohatlar yoki o‘tkir yallig‘lanish davrida qo‘llanilmaydi, chunki vaqtinchalik CRO yoki leykotsitoz ko‘rsatkichlarni buzadi.

### Manbalar

- [Levine M.E. et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018;10(4):573–591](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z. et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: a cohort study. PLoS Med, 2018;15(12):e1002718](https://pubmed.ncbi.nlm.nih.gov/30596641/)

<a id="fib-4"></a>

## FIB-4 va APRI kalkulyatori: jigar fibrozi indekslari

`fib-4` · [NutriFit](https://nutrifit.health/uz/calculators/fib-4)

AST, ALT, trombotsitlar va yosh asosida jigar fibrozi darajasini invaziv bo‘lmagan usulda baholaydi.

### Foydalanish tartibi

1. Qon tahlillarini tayyorlang: Biokimyoviy tahlildan AST va ALT, umumiy qon tahlilidan esa trombotsitlar soni kerak bo‘ladi.
2. Qiymatlarni kiriting: Yoshingiz, fermentlar faolligi va trombotsitlar sonini kiriting.
3. Klinik tavsiyalar bilan tanishing: Past xavfda 1–2 yildan so‘ng qayta tekshiruv, yuqori xavfda esa mutaxassis maslahati kerak.

### Usul va formula

Sterling (2006) va Wai (2003) algoritmlariga asoslangan. Xalqaro EASL va AASLD ko‘rsatmalarida tavsiya etilgan.

FIB-4 = (Yosh × AST) / (Trombotsitlar × √ALT); APRI = ((AST / AST_yuqori_chegara) / Trombotsitlar) × 100.

### Cheklovlar

Natijalar o‘tkir gepatit, gemoliz yoki kuchli alkogol isteʼmoli paytida buzilishi mumkin. Tashxisni faqat shifokor tasdiqlaydi.

### Manbalar

- [Sterling R.K. et al. Development of a simple noninvasive index to predict significant fibrosis in patients with HIV/HCV coinfection. Hepatology, 2006;43(6):1317–1325](https://pubmed.ncbi.nlm.nih.gov/16729309/)
- [Wai C.T. et al. A simple noninvasive index can predict both significant fibrosis and cirrhosis in patients with chronic hepatitis C. Hepatology, 2003;38(2):518–526](https://pubmed.ncbi.nlm.nih.gov/12883497/)
- [EASL Clinical Practice Guidelines on non-invasive tests for evaluation of liver disease severity and prognosis — 2021 update. J Hepatol, 2021;75(3):659–689](https://pubmed.ncbi.nlm.nih.gov/34166721/)

<a id="free-testosterone"></a>

## Erkin testosteron kalkulyatori (Vermeulen)

`free-testosterone` · [NutriFit](https://nutrifit.health/uz/calculators/free-testosterone)

Vermeulen 1999 bog‘lanish modeli bo‘yicha testosteronning erkin va bio-mavjud fraksiyalari. Natija usul referenslari va klinik kontekstni talab qiladi.

### Foydalanish tartibi

1. Ertalab umumiy testosteron va SHBG topshiring: Testosteron ertalab soat 7 dan 10 gacha maksimal bo‘lib, kechqurunga kelib 20–30 % ga kamayadi. Och qoringa, o‘tkir kasalliklarsiz, imkon qadar SK-MS/MS usulida topshiring.
2. Albuminni qo‘shing: O‘lchangan albuminni g/l da kiriting. Shakldagi 43 g/l qiymati misoldir; tahlil o‘rniga taxminiy qiymat kiritish noaniqlikni oshiradi.
3. Agar SHBG nostandart bo‘lsa, erkin fraksiyaga qarang: SHBG o‘zgarganda, umumiy testosteron va erkin fraksiya talqini bo‘yicha farq qilishi mumkin. Ularni belgilar, tahlil usuli va takroriy o‘lchovlar bilan birgalikda ko‘rib chiqing.

### Usul va formula

QUERY LENGTH LIMIT EXCEEDED. MAX ALLOWED QUERY : 500 CHARS

N = Kalb × [Albumin] + 1;  a = N × Kshbg;  b = N + Kshbg × ([SHBG] − [T])
Erkin T = (−b + √(b² + 4·a·[T])) / (2·a)
Bio-mavjud T = Erkin T × N
Kshbg = 1×10⁹ l/mol; Kalb = 3,6×10⁴ l/mol; konsentratsiyalar mol/l da; albumin g/l / 69 000
Qayta hisoblash: T ng/dl × 0,0347 = nmol/l; erkin T nmol/l × 288,4 = pg/ml

### Cheklovlar

Hisoblash umumiy testosteron aniq usulda (SK-MS/MS yoki kalibrlangan immunoanaliz) ertalab soat 7 dan 11 gacha och qoringa, bir necha hafta oralig‘ida ikki marta o‘lchanganda to‘g‘ri bo‘ladi. Albumin meʼyordan chetga chiqqanda natija siljiydi; homiladorlikda va KOK qabul qilinganda SHBG keskin o‘zgaradi. Erkin testosteron referenslari usul va yoshga bog‘liq; quyidagi chegaralar erkaklarga tegishli — ayollar uchun kalkulyator toifasiz qiymatlarni ko‘rsatadi. Gipogonadizm tashxisi belgilar va shaxsiy ko‘rikni talab qiladi.

### Manbalar

- [Vermeulen A., Verdonck L., Kaufman J.M. A critical evaluation of simple methods for the estimation of free testosterone in serum. J Clin Endocrinol Metab, 1999;84(10):3666–3672](https://pubmed.ncbi.nlm.nih.gov/10523012/)
- [Bhasin S. et al. Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab, 2018;103(5):1715–1744](https://pubmed.ncbi.nlm.nih.gov/29562364/)
- [Salonia A. et al. European Association of Urology guidelines on sexual and reproductive health — 2021 update: male sexual dysfunction. Eur Urol, 2021;80(3):333–357](https://pubmed.ncbi.nlm.nih.gov/34183196/)

<a id="anion-gap"></a>

## Anion bo‘shlig‘i va delta-nisbati kalkulyatori

`anion-gap` · [NutriFit](https://nutrifit.health/uz/calculators/anion-gap)

Elektrolitlar balansi va kislota-ishqor holatini (KShH), yashirin metabolik asidoz va alkalozlarni aniqlaydi.

### Foydalanish tartibi

1. Elektrolitlar tahlilini oling: Qon biokimyosidan natriy, xlorid, bikarbonat (yoki umumiy CO2) va albumin qiymatlarini oling.
2. Qiymatlarni kiriting: Qiymatlarni tegishli maydonlarga kiriting.
3. Buzilish turini aniqlang: Kalkulyator oddiy yoki aralash asidozni aniqlab beradi.

### Usul va formula

Klassik Gamblegram tenglamasiga va Figge-Jabor-Kazda albumin tuzatishiga asoslangan. Kuchli kislotalar va intoksikatsiyalarni aniqlaydi.

Anion bo‘shlig‘i (AG) = [Na+] − ([Cl−] + [HCO3−]); Albumin bo‘yicha tuzatilgan AG = AG + 2.5 × (40 − Albumin g/l) / 10; Delta nisbati = (Tuzatilgan AG − 12) / (24 − HCO3−).

### Cheklovlar

Natijalar qon gazlari tahlili (KShH), laktat va ketonlar bilan birgalikda shifokor tomonidan talqin qilinishi kerak.

### Manbalar

- [Kraut J.A., Madias N.E. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007;2(1):162–174](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J., Jabor A., Kazda A., Fencl V. Anion gap and hypoalbuminemia. Crit Care Med, 1998;26(11):1807–1810](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K., de Vries A.P., Gans R.O. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014;371(15):1434–1445](https://pubmed.ncbi.nlm.nih.gov/25295502/)

<a id="corrected-calcium"></a>

## Albumin bo‘yicha tuzatilgan kalsiy kalkulyatori (Payne)

`corrected-calcium` · [NutriFit](https://nutrifit.health/uz/calculators/corrected-calcium)

Gipoalbuminemiya yoki giperalbuminemiyada qondagi kalsiyning soxta o‘zgarishlarini to‘g‘rilab, haqiqiy kalsiy konsentratsiyasini aniqlaydi.

### Foydalanish tartibi

1. Qon tahlillarini oling: Biokimyoviy tahlildan umumiy kalsiy va albumin konsentratsiyasini bilib oling.
2. Ko‘rsatkichlarni kiriting: Umumiy kalsiy va albumin qiymatlarini kalkulyatorga kiriting.
3. Haqiqiy holatni baholang: Tuzatilgan qiymat meʼyor doirasida ekanligini tekshiring.

### Usul va formula

Payne (1973) klassik formulasiga asoslangan. Kalsiyning qariyb 40-50% qismi albumni bilan bog‘langan bo‘lib, albumin kamayganda umumiy kalsiy ham soxta kamayadi.

Tuzatilgan kalsiy (mmol/l) = Umumiy kalsiy (mmol/l) + 0.02 × (40 − Albumin g/l); mg/dl da = Umumiy kalsiy (mg/dl) + 0.8 × (4.0 − Albumin g/dl).

### Cheklovlar

Buyrak yetishmovchiligi, KShH ning og‘ir buzilishlarida yoki kritik holatlarda ionlashgan kalsiy (Ca2+) ni bevosita o‘lchash talab etiladi.

### Manbalar

- [Payne R.B., Little A.J., Williams R.B., Milner J.R. Interpretation of serum calcium in patients with abnormal serum proteins. BMJ, 1973;4(5893):643–646](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson J.H., Lewis J.W., Boyd J.C. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978;46(6):986–993](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N. et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025;8(1):e2455251](https://pubmed.ncbi.nlm.nih.gov/39836424/)

<a id="one-rep-max"></a>

## 1RM kalkulyatori (bir martalik maksimal vazn)

`one-rep-max` · [NutriFit](https://nutrifit.health/uz/calculators/one-rep-max)

Sportchining 2–10 takrorlik submaksimal test yordamida jarohat xavfisiz bitta takrorda ko‘tara oladigan maksimal og‘irligini aniqlaydi.

### Foydalanish tartibi

1. To‘liq qizdirish mashqlarini bajaring: Bo‘g‘inlarni umumiy qizdiring, so‘ngra ishchi vaznga qadar asta-sekin og‘irlikni oshirib 3–4 ta tayyorgarlik yondashuvini bajaring.
2. 3–6 takrorlik ishchi yondashuvni bajaring: Zaxirada 1 tadan ko‘p bo‘lmagan takror qoldirib (RPE 9), toza texnika bilan 3 tadan 6 tagacha bajara oladigan vaznni tanlang.
3. Ma’lumotlarni kiriting va foizlardan foydalaning: Vazn va takrorlar sonini kalkulyatorga kiriting. Foizlar jadvali orqali kuch (85%), gipertrofiya (75%) yoki tiklanish (60%) mashg‘ulotlari yuklamasini belgilang.

### Usul va formula

Bir takrorlik maksimum hisobi charchoqqa qadar bajarilgan takrorlar soni va maksimal kuch ulushi o‘rtasidagi regressiya tenglamalariga asoslanadi. Epley formulasi 2–6 takror oralig‘ida yaxshiroq ishlaydi, Brzycki formulasi esa 6–10 takrorda yuqori aniqlik beradi.

Epley: 1RM = Vazn × (1 + 0.0333 × Takr); Brzycki: 1RM = Vazn / (1.0278 − 0.0278 × Takr); Lombardi: Vazn × Takr^0.10; Wathan: (100 × Vazn) / (48.8 + 53.8 × e^(-0.075 × Takr)).

### Cheklovlar

Metabolik charchoq sababli 10–12 takrordan ortiq yondashuvlar uchun tavsiya etilmaydi. Aniqlik harakat texnikasi va mushak tolalari tarkibiga bog‘liq.

### Manbalar

- [Epley B. Poundage chart. Boyd Epley Workout, Lincoln, NE, 1985](https://pubmed.ncbi.nlm.nih.gov/2706858/)
- [Brzycki M. Strength testing—predicting a one-rep max from reps-to-fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds J.M. et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006;20(3):584–592](https://pubmed.ncbi.nlm.nih.gov/16937972/)

<a id="heart-rate-zones"></a>

## Yurak urish zonalari kalkulyatori

`heart-rate-zones` · [NutriFit](https://nutrifit.health/uz/calculators/heart-rate-zones)

Maksimal puls va tinch holatdagi yurak urish tezligini hisobga olgan holda 5 ta individual mashg‘ulot zonasini hisoblaydi (yurak urishi zaxirasi usuli).

### Foydalanish tartibi

1. Ertalabki tinch holatdagi pulsni o‘lchang: Ertalab uyqudan uyg‘ongach, o‘rindan turmasdan pulsometor yoki barmoq bilan 60 soniya davomida pulsni o‘lchang va 3 kunlik o‘rtacha qiymatni oling.
2. Karvonen formulasi bo‘yicha zonalarni hisoblang: Kalkulyator maksimal pulsdan tinch holatdagi pulsni ayirib, yurak zaxirasini aniqlaydi.
3. Yuklamani 80/20 qoidasi bo‘yicha taqsimlang: Barcha mashg‘ulotlarning taxminan 80 foizini 2-zonada o‘tkazing, 20 foizini esa 4 va 5-zonalardagi kuchli ishlarga ajrating.

### Usul va formula

Karvonen usuli yurak urish tezligi zaxirasiga asoslanadi (HRR = YuUT max − YuUT tinch). Tinch holatdagi ertalabki pulsni hisobga olish zonalarni sportchining haqiqiy aerob tayyorgarlik darajasiga moslashtiradi.

YuUT max (Tanaka) = 208 − 0.7 × Yosh; HRR = YuUT max − YuUT tinch; Maqsadli puls = YuUT tinch + (% jadallik × HRR). Haskell formulasi: YuUT max = 220 − Yosh.

### Cheklovlar

Maksimal puls formulalari ±10–12 zarba/daq standart xatolikka ega. Yuqori aniqlik uchun laboratoriya gaz tahlili (CPET) tavsiya etiladi.

### Manbalar

- [Tanaka H., Monahan K.D., Seals D.R. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001;37(1):153–156](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [Karvonen M.J., Kentala E., Mustala O. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957;35(3):307–315](https://pubmed.ncbi.nlm.nih.gov/13470504/)
- [American College of Sports Medicine. ACSM’s Guidelines for Exercise Testing and Prescription. 11th ed. Wolters Kluwer, 2021](https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription)

<a id="vo2max"></a>

## MKId (VO2max) kalkulyatori

`vo2max` · [NutriFit](https://nutrifit.health/uz/calculators/vo2max)

Maxsus laboratoriya uskunalarisiz tasdiqlangan amaliy sinovlar asosida aerob quvvat va yurak-nafas tizimi chidamliligini baholaydi.

### Foydalanish tartibi

1. Mos protokolni tanlang: Yuguruvchilarga 12 daqiqalik Kuper testi tavsiya etiladi. Yoshi kattalar yoki yangi boshlovchilar uchun 1 milga Rokport tez yurish testi xavfsizroq.
2. Ko‘rsatkichlarni aniq qayd eting: Kuper testida stadion yoki GPS orqali masofani metrgacha aniqlang. Rokport testida vaqtni va marradan keyingi dastlabki pulsni yozib oling.
3. Natija va sur’atni baholang: Kalkulyator sizning natijangizni Cooper Institute me’yorlari bilan solishtiradi va 5 km hamda 10 km uchun tavsiya etilgan sur’atni ko‘rsatadi.

### Usul va formula

Kalkulyatorda uchta ilmiy tasdiqlangan usul amalga oshirilgan: 12 daqiqalik Kuper yugurish testi, 1 milga Rokport tez yurish testi va tinch-maksimal puls nisbati (Uth et al.).

Kuper: VO2max = (Masofa, m − 504.9) / 44.73; Rokport: 132.853 − 0.0769 × Og‘irlik(funt) − 0.3877 × Yosh + 6.315 × Jins − 3.2649 × Vaqt − 0.1565 × Puls; Uth: 15 × (YuUT max / YuUT tinch).

### Cheklovlar

Maydondagi sinovlar bilvosita baholash usuli hisoblanib, o‘rtacha 5–10% xatolikka ega. Tezlikni taqsimlash, yo‘l qoplamasi, ob-havo va kofein natijalarga ta’sir qiladi.

### Manbalar

- [Cooper K.H. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968;203(3):201–204](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline G.M. et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987;19(3):253–259](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N. et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004;91(1):111–115](https://pubmed.ncbi.nlm.nih.gov/14624296/)

<a id="ffmi"></a>

## FFMI kalkulyatori (yog‘siz tana massasi indeksi)

`ffmi` · [NutriFit](https://nutrifit.health/uz/calculators/ffmi)

Bo‘yga nisbatan quruq mushak massasini aniqlaydi, haqiqiy mushak gipertrofiyasini tana yog‘i to‘planishidan ajratib beradi.

### Foydalanish tartibi

1. Bo‘y va vaznni aniq o‘lchang: Ertalab och qoringa hojatdan so‘ng tortiling, bo‘yingizni poyabzalsiz o‘lchang.
2. Tana yog‘i foizini aniqlang: 3–7 bukla bo‘yicha kaliper, professional bioimpedans yoki DEXA skaneridan foydalaning.
3. Normallashtirilgan indeksni tahlil qiling: Normallashtirilgan ko‘rsatkich uzun bo‘yli (>180 sm) yoki past bo‘yli (<170 sm) insonlar uchun xatolikni bartaraf etib, jadval bilan solishtirishga imkon beradi.

### Usul va formula

Oddiy TMI (BMI) mushakni yog‘dan ajrata olmaydi. Yog‘siz tana massasi indeksi (FFMI) quruq to‘qimalarni hisoblaydi va turli bo‘y uzunliklarini solishtirish uchun bo‘yga tuzatish koeffitsientini kiritadi (Kouri et al., 1995).

Quruq massa (LBM) = Vazn × (1 − % Yog‘ / 100); Baza FFMI = LBM / Bo‘y(m)²; Normallashtirilgan FFMI = Baza FFMI + 6.1 × (1.80 − Bo‘y(m)).

### Cheklovlar

Hisobning aniqligi bevosita tana yog‘i foizining qanchalik to‘g‘ri o‘lchanganiga bog‘liq. Kaliper, DEXA yoki gidrostatik tortish eng aniq usullardir.

### Manbalar

- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)
- [Trexler E.T. et al. Physiological changes after a female bodybuilding contest preparation. J Int Soc Sports Nutr, 2017;14:34](https://pubmed.ncbi.nlm.nih.gov/28878643/)

<a id="katch-mcardle"></a>

## Ketch — MakArdl BMR va TDEE kalkulyatori

`katch-mcardle` · [NutriFit](https://nutrifit.health/uz/calculators/katch-mcardle)

Umumiy tana vazni o‘rniga faqat quruq mushak massasi asosida bazal metabolizm (BMR) va kunlik umumiy energiya sarfini (TDEE) aniqlaydi.

### Foydalanish tartibi

1. Quruq massani aniqlang: Hozirgi vazn va yog‘ foizini kiriting. Kalkulyator metabolik faol quruq massani hisoblab beradi.
2. Haqiqiy faollik darajasini tanlang: Samimiy bo‘ling: agar ofisda ishlasangiz va haftasiga 3 marta mashq qilsangiz, 'Yengil' yoki 'O‘rtacha' variantini tanlang.
3. Mifflin formulasi bilan solishtiring: Farqni ko‘ring: agar yog‘ foizingiz past va mushaklaringiz ko‘p bo‘lsa, oddiy formulalar ehtiyojingizni 150–300 kkalga kam ko‘rsatadi.

### Usul va formula

Umumiy tana vazniga tayanadigan Mifflin — San Jeor yoki Xarris — Benedikt formulalaridan farqli o‘laroq, Ketch — MakArdl tenglamasi metabolik faol quruq tana massasiga (LBM) asoslanadi. Bu mushakdor sportchilar va yog‘ miqdori nostandart bo‘lgan insonlar uchun eng yuqori aniqlikni ta’minlaydi.

LBM = Vazn × (1 − % Yog‘ / 100); BMR (Katch) = 370 + 21.6 × LBM(kg); TDEE = BMR × Faollik koeffitsienti; BMR (Cunningham) = 500 + 22 × LBM(kg).

### Cheklovlar

Tana yog‘i foizini oldindan bilishni talab qiladi. Yog‘ foizining noaniqligi kaloriya hisobiga to‘g‘ridan-to‘g‘ri xatolik kiritadi.

### Manbalar

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer, 2014](https://pubmed.ncbi.nlm.nih.gov/15570161/)
- [Cunningham J.J. A reanalysis of balanced nutrition and the relationship to body composition and resting metabolic rate. Am J Clin Nutr, 1991;54(6):963–969](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin M.D. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)

<a id="ideal-body-weight"></a>

## Ideal tana vazni kalkulyatori (IBW va AdjBW)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/uz/calculators/ideal-body-weight)

Umumiy qabul qilingan klinik formulalar bo‘yicha etalon tana vaznini hisoblaydi va tibbiy maqsadlar uchun tuzatilgan vaznni (AdjBW) aniqlaydi.

### Foydalanish tartibi

1. Devayn formulasini sog‘lom TMI bilan solishtiring: Devine formulasi odatda sog‘lom vaznning o‘rtasi bo‘lgan 21.5–22.5 TMI oralig‘iga to‘g‘ri keladi.
2. Ortiqcha vaznda AdjBW dan foydalaning: Agar haqiqiy vazn ideal vazndan 20% dan ortiq bo‘lsa (TMI > 30), ovqatlanishni haqiqiy vazn emas, AdjBW bo‘yicha rejalashtiring.
3. Suyak tuzilishini hisobga oling: Keng suyakli odamlar uchun JSST me’yorining yuqori chegarasi (TMI 23–24.9) tabiiy va qulay hisoblanadi.

### Usul va formula

Ideal tana vaznining tibbiy formulalari dori-darmonlar miqdorini aniqlash va bemorlarni me’yoriy ta’minlash uchun ishlab chiqilgan. Kosmetik jadvallardan farqli o‘laroq, ular fiziologik me’yorni ifodalaydi.

Devine (Erkak): 50 + 2.3 × (Bo‘y_dyuym − 60); Devine (Ayol): 45.5 + 2.3 × (Bo‘y_dyuym − 60); AdjBW = IBW + 0.4 × (Haqiqiy_Vazn − IBW); Robinson: Erkak 52 + 1.9×dyuym, Ayol 49 + 1.7×dyuym.

### Cheklovlar

Formulalar rivojlangan sport mushaklarini va suyak tuzilishining individual xususiyatlarini (keng yoki ingichka suyak) hisobga olmaydi.

### Manbalar

- [Devine B.J. Gentamicin therapy. Drug Intell Clin Pharm, 1974;8:650–655](https://pubmed.ncbi.nlm.nih.gov/4611413/)
- [Robinson J.D. et al. Determination of ideal body weight for drug dosing. Am J Hosp Pharm, 1983;40(6):1016–1019](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Miller P.F. et al. Comparison of formulas for estimating ideal body weight. Am J Hosp Pharm, 1983;40:1622](https://pubmed.ncbi.nlm.nih.gov/6638027/)
- [Hamwi G.J. Therapy: changing concepts in diabetes mellitus. In: Danowski T.S. (ed). Diabetes Mellitus: Diagnosis and Treatment. ADA, 1964:73–78](https://pubmed.ncbi.nlm.nih.gov/14207860/)

<a id="waist-ratios"></a>

## Bel antropometrik indekslari kalkulyatori (WHtR, WHR, VAI)

`waist-ratios` · [NutriFit](https://nutrifit.health/uz/calculators/waist-ratios)

Yog‘ to‘qimalarining taqsimlanishini, visseral yog‘ miqdorini va yurak-qon tomir xavflarini oddiy TMI ga qaraganda ancha aniq baholaydi.

### Foydalanish tartibi

1. Belning to‘g‘ri chizig‘ini toping: Bel kindik ustidan emas, pastki qovurg‘a va tos suyagi o‘rtasidagi masofaning qoq o‘rtasida o‘lchanadi. Oddiy nafas chiqaring.
2. Dumba aylanasi o‘lchovini oling: Santimetr tasmasini dumbaning eng keng, bo‘rtib chiqqan joyidan gorizontal o‘tkazing.
3. Bo‘yga nisbatini tekshiring: Belni bo‘yga bo‘ling: agar natija 0.50 dan past bo‘lsa, sizning ichki a’zolaringiz xavfsiz holatda.

### Usul va formula

Bel aylanasi ichki a’zolar atrofidagi xavfli visseral yog‘ hajmini to‘g‘ridan-to‘g‘ri aks ettiradi. Bel-bo‘y nisbati (WHtR) va bel-dumba nisbati (WHR) qandli diabet va gipertoniya xavfini oldindan bashorat qiladi.

WHtR = Bel / Bo‘y; WHR = Bel / Dumba; VAI (Erkak) = (Bel/(39.68+1.88×TMI)) × (TG/1.03) × (1.31/HDL); VAI (Ayol) = (Bel/(35.58+1.89×TMI)) × (TG/0.81) × (1.52/HDL).

### Cheklovlar

Homiladorlik davrida, assit, qorin churrasi yoki qorin bo‘shlig‘i operatsiyalaridan keyingi davrda qo‘llanilmaydi.

### Manbalar

- [Ashwell M., Gunn P., Gibson S. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012;13(3):275–286](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato M.C. et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010;33(4):920–922](https://pubmed.ncbi.nlm.nih.gov/20067971/)

<a id="sweat-rate"></a>

## Terlash tezligi va regidratatsiya kalkulyatori

`sweat-rate` · [NutriFit](https://nutrifit.health/uz/calculators/sweat-rate)

Terlash tezligini aniqlaydi va mashg‘ulotdan keyin suv va elektrolitlarni to‘ldirish bo‘yicha individual reja tuzadi.

### Foydalanish tartibi

1. Mashg‘ulotdan oldin tortiling: Hojatxonaga boring va mashg‘ulot boshlanishidan oldin kiyimsiz tortilib, vaznni aniq yozing.
2. Ichilgan suv miqdorini nazorat qiling: Mashg‘ulot paytida qancha ichganingizni aniq bilish uchun o‘lchovli idishdan foydalaning.
3. Marradan keyin quruq holda tortiling: Badandagi va sochlaringizdagi terni sochiq bilan to‘liq artib, so‘ng kiyimsiz tortiling.

### Usul va formula

Amerika Sport Tibbiyoti Kolleji (ACSM) uslubiga asoslangan. Mashg‘ulotdan oldin va keyin quruq tanani kiyimsiz tortish, ichilgan suyuqlik va siydik hajmini hisobga olish orqali soatlik terlash tezligi hisoblanadi.

Ter yo‘qotish (ml) = (Vazn_oldin − Vazn_keyin, g) + Ichilgan_suv(ml) − Siydik(ml); Terlash tezligi (l/soat) = (Ter yo‘qotish / Vaqt_daq) × 60 / 1000; Degidratatsiya % = ((Vazn_oldin − Vazn_keyin) / Vazn_oldin) × 100.

### Cheklovlar

Glikogen sarflanishi va nafas orqali bug‘lanishni (~100–150 g/soat) hisobga olmaydi. Shunga qaramay, amaliyotda suyuqlik tanqisligini juda aniq ko‘rsatadi.

### Manbalar

- [Sawka M.N. et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007;39(2):377–390](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas D.T., Erdman K.A., Burke L.M. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016;116(3):501–528](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs S.M., Sawka M.N. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011;29(Suppl 1):S39–S46](https://pubmed.ncbi.nlm.nih.gov/22150427/)

<a id="muscle-potential"></a>

## Mushak salohiyati kalkulyatori (Keysi Batt va Martin Berxan)

`muscle-potential` · [NutriFit](https://nutrifit.health/uz/calculators/muscle-potential)

Anabolik steroidlarsiz erishish mumkin bo‘lgan maksimal yog‘siz tana massasi va tana aylanalarini (ko‘krak, bisept, son) aniqlaydi.

### Foydalanish tartibi

1. Suyak o‘lchamlarini aniq o‘lchang: Bilak qo‘l panjasi va tirsak suyagi boshi orasida o‘lchanadi. To‘piq esa bo‘g‘im suyagidan biroz yuqoridagi eng ingichka qismida o‘lchanadi.
2. Istalgan yog‘ foizini ko‘rsating: Yil bo‘yi ajoyib jismoniy holatda yurish uchun 10–12% yog‘ni; musobaqa relefi uchun 6–8% ni mo‘ljallang.
3. Joriy o‘lchamlarni maksimal ko‘rsatkichlar bilan solishtiring: Kalkulyator bisept, ko‘krak va sonning maksimal aylanalarini ko‘rsatadi. Bu sizning tanangiz uchun real mo‘ljaldir.

### Usul va formula

Keysi Batt (Casey Butt, Ph.D.) 6 yil davomida steroidlar paydo bo‘lishidan oldingi davrdagi (1940–1950-yillar) yuzlab elita chempionlarining antropometriyasini tahlil qilgan. Model tabiiy mushak massasi suyak skeletining qalinligi — bilak va to‘piq aylanasi bilan qat’iy chegaralanganligini isbotlagan.

Maks LBM = Bo‘y^1,5 × [sqrt(Bilak)/22,6670 + sqrt(To‘piq)/17,0104] × [(Yog‘%/224) + 1]; Berxan musobaqa vazni (~5% yog‘) = Bo‘y (sm) − 100.

### Cheklovlar

Erkaklar uchun ishlab chiqilgan. Ayollarda gormonal fon tufayli maksimal mushak massasi erkaklar formulasining taxminan 65–70% ni tashkil qiladi. Ko‘p yillik intizomli mashg‘ulotlar va to‘g‘ri ovqatlanishni nazarda tutadi.

### Manbalar

- [Butt C. Your Maximum Muscular Potential (The Casey Butt Model). The WeighTrainer, 2009](https://www.weightrainer.net/potential.html)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)

<a id="powerlifting-coefficients"></a>

## Pauerlifting koeffitsientlari kalkulyatori (DOTS, Wilks, IPF GL)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/uz/calculators/powerlifting-coefficients)

DOTS, Wilks va IPF GL Points formulalari bo‘yicha turli vazn toifalari va jinsdagi sportchilarning uchkurashdagi (o‘tirib turish, yotib siqish, tortish) mutlaq kuchini solishtiradi.

### Foydalanish tartibi

1. Uch harakatdagi eng yaxshi vaznlarni qo‘shing: Musobaqa qoidalariga muvofiq bajarilgan o‘tirib turish, yotib siqish va tortishdagi maksimal vaznlarni jamlang.
2. Vazn o‘lchashdagi aniq o‘z vazningizni ko‘rsating: Pomostga chiqishdan oldingi musobaqa vazn o‘lchashidagi ertalabki vazndan foydalaning.
3. DOTS va IPF GL ballaringizni baholang: Natijani mahorat shkalasi bilan taqqoslang: 300 ball — baquvvat havaskor, 400 — sport ustaligiga nomzod, 500 — xalqaro elita.

### Usul va formula

Allometrik masshtablash qonuni mushaklar kuchi ularning ko‘ndalang kesimi maydoniga (bo‘yning kvadrati) mutanosib ekanligini, tana vazni esa hajmga (bo‘yning kubi) mutanosib o‘sishini ko‘rsatadi. Pauerlifting koeffitsientlari yengil va og‘ir vaznli sportchilarning imkoniyatlarini tenglashtirish uchun yuqori tartibli tenglamalardan foydalanadi.

DOTS: Koeffitsient = 500 / (A×Vazn^4 + B×Vazn^3 + C×Vazn^2 + D×Vazn + E); DOTS ballari = Jami (kg) × Koeffitsient; IPF GL Points: 100 × Jami / (A − B × e^(−C × Vazn)); Wilks: 5-darajali ko‘phad.

### Cheklovlar

Standart musobaqa uchkurashi (pauerlifting) uchun mo‘ljallangan. Tosh ko‘tarish, og‘ir atletika (Sinkler formulasi qo‘llaniladi) yoki armrestling uchun qo‘llanilmaydi.

### Manbalar

- [Perotti L. et al. The DOTS Formula: A new formula for evaluating strength athletes across weight classes, 2019](https://pubmed.ncbi.nlm.nih.gov/31804245/)
- [Wilks R. The Wilks Formula for Powerlifting. Australian Powerlifting Federation, 1997](https://www.powerlifting.sport/)
- [International Powerlifting Federation. IPF GL Points Formula for Classic and Equipped Powerlifting, 2020](https://www.powerlifting.sport/rules/codes/info/ipf-formula)

<a id="protein-intake"></a>

## Kunlik oqsil meʼyori kalkulyatori (ISSN va ESPEN)

`protein-intake` · [NutriFit](https://nutrifit.health/uz/calculators/protein-intake)

Maqsadlar (vazn tashlash, gipertrofiya, 65+ yosh salomatligi), ovqatlanish turi va mushak oqsili sintezini (MPS) hisobga olgan holda kunlik optimal oqsil miqdorini hisoblaydi.

### Foydalanish tartibi

1. Maqsadli ko‘rsatkichingizni bilib oling: Vazn va maqsadingizni kiriting. Kalkulyator kunlik gramm meʼyorini va bir martalik porsiya hajmini aniqlaydi.
2. Har bir taomlanishga 25–40 grammdan taqsimlang: Bir marta 30 g oqsil qabul qilish (tvorog, 150 g tovuq filesi yoki baliq) mushak anabolizmining leysin triggerini faollashtiradi.
3. Manbalarni xilma-xil qiling: Hayvon oqsillarini (tuxum, parranda go‘shti, baliq, nordon sut mahsulotlari) va o‘simlik oqsillarini (tofu, yasmiq, no‘xat, tempe) birgalikda isteʼmol qiling.

### Usul va formula

Hisoblash Xalqaro sport ovqatlanishi jamiyati (ISSN, 2017) va Yevropa klinik ovqatlanish va metabolizm assotsiatsiyasi (ESPEN) konsensuslariga asoslanadi. Semizlikda (TVI > 28) buyrak giperfiltratsiyasining oldini olish uchun hisob avtomatik ravishda tuzatilgan tana vazniga (AdjBW) o‘tkaziladi.

Baza meʼyori: 1,0–1,4 g/kg; Mushak chiqarish: 1,6–2,2 g/kg; Kaloriya taqchilligi (ozish): 2,0–2,4 g/kg; Chidamlilik: 1,2–1,6 g/kg; 65+ yosh: 1,2–1,5 g/kg; SKK (3–4-bosqich): 0,6–0,8 g/kg. Vegetarianlik: meʼyorga +10%.

### Cheklovlar

Surunkali buyrak kasalligida (SKK) koptokchalar filtratsiyasi tezligi < 60 ml/daq bo‘lganda oqsil meʼyori qatʼiy ravishda nefrolog shifokor bilan kelishilishi shart.

### Manbalar

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Deutz N.E. et al. Protein intake and exercise for optimal muscle function with aging: recommendations from the ESPEN Expert Group. Clin Nutr, 2014;33(6):929–936](https://pubmed.ncbi.nlm.nih.gov/24814383/)
- [Morton R.W. et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on gains in muscle mass and strength in healthy adults. Br J Sports Med, 2018;52(6):376–384](https://pubmed.ncbi.nlm.nih.gov/28698222/)

<a id="fiber-intake"></a>

## Kletchatka (ozuqaviy tolalar) meʼyori kalkulyatori

`fiber-intake` · [NutriFit](https://nutrifit.health/uz/calculators/fiber-intake)

Ichak mikrobiotasini oziqlantirish, xolesterinni normallashtirish va oshqozon-ichak motorikasini yaxshilash uchun zarur kunlik kletchatka miqdorini aniqlaydi.

### Foydalanish tartibi

1. Har bir ovqatlanishga sabzavot qo‘shing: Kuniga kamida 400–500 g kraxmalsiz sabzavotlar va ko‘katlar isteʼmol qiling (Garvard tarelkasi qoidasi).
2. Tozalangan yormalarni to‘liq donlilarga almashtiring: Oq guruch va oliy navli un o‘rniga grechka, kinoa, suli yormasi, arpa va butun donli nonni tanlang.
3. Urug‘lar va dukkaklilarni qo‘shing: 1 osh qoshiq chia yoki zig‘ir urug‘i hamda bir porsiya yasmiq darhol 8–12 g sifatli tola beradi.

### Usul va formula

JSST va Yevropa oziq-ovqat xavfsizligi agentligi (EFSA: ratsionning har 1000 kkaliga 14 g kletchatka, ayollar uchun kamida 25 g va erkaklar uchun 38 g) standartlariga asoslangan. Suv balansini (+1 g tola uchun 40 ml suv) hisoblaydi va TIS bo‘yicha moslashtiradi.

Maqsadli kletchatka = max(25/38 g, Kaloriya × 0,014); Eruvchan fraksiya ~30–35%; Erimaydigan fraksiya ~65–70%; Qo‘shimcha suv = Kletchatka (g) × 40 ml.

### Cheklovlar

Ichakda bakteriyalarning ortiqcha o‘sishi sindromi (SIBO) va kolit xurujida fermentatsiyalanuvchi tolalar meteorizmni kuchaytirishi mumkin. Kletchatka dozasini bosqichma-bosqich oshirish lozim.

### Manbalar

- [EFSA Panel on Dietetic Products, Nutrition, and Allergies. Scientific Opinion on Dietary Reference Values for carbohydrates and dietary fibre. EFSA Journal, 2010;8(3):1462](https://doi.org/10.2903/j.efsa.2010.1462)
- [Reynolds A. et al. Carbohydrate quality and human health: a series of systematic reviews and meta-analyses. Lancet, 2019;393(10170):434–445](https://pubmed.ncbi.nlm.nih.gov/30638909/)
- [Stephen A.M. et al. Dietary fibre in Europe: current state of knowledge on definitions, sources, recommendations, intakes and relationships to health. Nutr Res Rev, 2017;30(2):149–190](https://pubmed.ncbi.nlm.nih.gov/28676135/)

<a id="omega-3"></a>

## Omega-3 kalkulyatori (EPK + DGK dozasi va indeksi)

`omega-3` · [NutriFit](https://nutrifit.health/uz/calculators/omega-3)

Aniq klinik maqsadlar va turmush tarzi uchun eykozapentaen (EPK) va dokozageksaen (DGK) kislotalarining maqbul kunlik dozasini aniqlaydi.

### Foydalanish tartibi

1. Kapsula tarkibiga qarang (EPK + DGK): '1000 mg baliq yog‘i' yozuvi ortida ko‘pincha atigi 300 mg EPK+DGK yashiringan bo‘ladi. Yorliqdagi EPK va DGK milligrammlarini qo‘shing.
2. To‘g‘ri shaklni tanlang (rTG yoki TG): Qayta eterifikatsiyalangan triglitseridlar (rTG) sintetik etil efirlariga (EE) nisbatan ancha yuqori bio-o‘zlashtirilishga ega.
3. Oksidlanish indeksini tekshiring (TOTOX): Sifatli baliq yog‘i TOTOX indeksi < 26 va IFOS xalqaro sertifikatiga ega bo‘ladi. U sasigan baliq hidiga ega bo‘lmasligi lozim.

### Usul va formula

GOED, Amerika yurak assotsiatsiyasi (AHA) va ISSFAL klinik ko‘rsatmalariga asoslangan. Eritrotsitlar membranasi Omega-3 indeksining maqsadli darajasini (> 8%) hisobga oladi.

Bazaviy salomatlik: 500 mg/kun; Kardioproteksiya: 1000 mg/kun; Gipertriglitseridemiya: 2000–4000 mg/kun; Homiladorlik: 600 mg (DGK ga urg‘u); Depressiya: 1000–2000 mg (EPK:DGK ≥ 2:1); Sport: 1500–2000 mg.

### Cheklovlar

Kuniga 3000–4000 mg dan ortiq EPK+DGK qabul qilish antiagregant (qonni suyultirish) taʼsiri sababli koagulogramma nazoratini talab qiladi.

### Manbalar

- [Harris W.S., Von Schacky C. The Omega-3 Index: a new risk factor for death from coronary heart disease? Prev Med, 2004;39(1):212–220](https://pubmed.ncbi.nlm.nih.gov/15207989/)
- [Global Organization for EPA and DHA Omega-3s (GOED). Clinical Practice Recommendations for EPA and DHA Omega-3 Intake, 2022](https://goedomega3.com/intake-recommendations)
- [Guu T.W. et al. International Society for Nutritional Psychiatry Research Practice Guidelines for Omega-3 Fatty Acids in the Treatment of Major Depressive Disorder. Psychother Psychosom, 2019;88(5):263–273](https://pubmed.ncbi.nlm.nih.gov/31480072/)

<a id="sodium-potassium"></a>

## Natriy va kaliy balansi kalkulyatori (Na:K va tuz)

`sodium-potassium` · [NutriFit](https://nutrifit.health/uz/calculators/sodium-potassium)

Ratsiondagi kaliy va natriy elektrolitlar balansini baholaydi, osh tuzi ekvivalentini va yurak-qon tomir xavfini hisoblab chiqadi.

### Foydalanish tartibi

1. Yashirin tuzni olib tashlang: Natriyning 75% gachasi tuzdondan emas, balki qayta ishlangan mahsulotlardan tushadi: kolbasalar, pishloqlar, chipslar, konservalar va do‘kon noni.
2. Sabzavot va mevalardan kaliyni oshiring: Kaliy natriyning buyraklar orqali chiqib ketishini rag‘batlantiradi (natriyurez). Tandirda pishgan kartoshka, ismaloq, turshak, loviya va banan qo‘shing.
3. Kaliy tuzi ishlatishga o‘ting: Natriysi kamaytirilgan tuz (30% NaCl o‘rniga KCl ishlatilgan) taʼmni yo‘qotmasdan qon bosimini 3–5 mm simob ustuniga pasaytirishga yordam beradi.

### Usul va formula

JSSTning natriy va kaliy isteʼmoli bo‘yicha qo‘llanmasi (2012) va DASH kardiologik parhezi tamoyillariga asoslangan. Na:K molyar nisbati 1,0 dan kam bo‘lishi kerak (optimal 0,5–0,7). Zamonaviy inson ratsionida natriy ko‘pincha kaliydan 2–3 baravar oshib ketadi.

Na mollari = Na (mg) / 23; K mollari = K (mg) / 39,1; Na:K nisbati = Na mollari / K mollari; Osh tuzi NaCl (g) = Na (mg) × 2,54 / 1000.

### Cheklovlar

Kaliy ajralishi buzilgan va kaliyni cheklash talab etiladigan terminal buyrak yetishmovchiligi (SKK 4–5-bosqich) bo‘lgan bemorlar uchun mo‘ljallanmagan.

### Manbalar

- [World Health Organization. Guideline: Sodium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504836)
- [World Health Organization. Guideline: Potassium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504829)
- [O’Donnell M. et al. Urinary sodium and potassium excretion and risk of cardiovascular events. JAMA, 2011;306(20):2229–2238](https://pubmed.ncbi.nlm.nih.gov/22110105/)

<a id="alcohol"></a>

## Alkogolning chiqib ketishi kalkulyatori (Vidmark formulasi)

`alcohol` · [NutriFit](https://nutrifit.health/uz/calculators/alcohol)

Qondagi etanolning cho‘qqi va joriy konsentratsiyasini (promille ‰ da), to‘liq hushyor bo‘lish vaqtini va alkogol kaloriyasini hisoblaydi.

### Foydalanish tartibi

1. Oshqozon va ichakda so‘rilish: Alkogolning qariyb 20% qismi oshqozonda, qolgan 80% qismi esa ingichka ichakda so‘riladi. Zich ovqat mastlik cho‘qqisini pasaytiradi.
2. Jigar fermentlari tomonidan oksidlanish: Jigar etanolning 95% gachasini doimiy tezlikda ADG orqali toksik atsetaldegidgacha, so‘ngra ALDG orqali atsetatgacha oksidlaydi.
3. Chiziqli chiqib ketish: Fermentlar tez to‘yinadi: hushyor tortish tezligi ichilgan miqdordan qatʼi nazar qatʼiy soatiga taxminan 0,15 promilleni tashkil etadi.

### Usul va formula

Shvetsiyalik sud kimyogari Erik Vidmarkning farmakokinetik modeliga (1932) asoslangan. Organizmda suv taqsimlanishi hajmini (erkaklarda r = 0,68, ayollarda 0,55), meʼda ADH fermentini va chiziqli eliminatsiya tezligini (0,15 ‰/soat) hisobga oladi.

Sof etanol (g) = Hajm (ml) × (Kuchliligi % / 100) × 0,789; BAC_cho‘qqi = (Etanol × So‘rilish_omili) / (Vazn × r); BAC_joriy = max(0, BAC_cho‘qqi − 0,15 × Soat); Vaqt (soat) = BAC_cho‘qqi / 0,15.

### Cheklovlar

Chiqib ketish tezligi jigar faoliyati va genetikaga qarab 0,10 dan 0,20 ‰/soatgacha farq qiladi. Avtomobil boshqarish uchun yuridik dalil hisoblanmaydi.

### Manbalar

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones A.W. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework and pharmacokinetics. Forensic Sci Int, 2010;200(1-3):1–20](https://pubmed.ncbi.nlm.nih.gov/20434270/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

<a id="caffeine"></a>

## Kofeinning chiqib ketishi va uxlash vaqti kalkulyatori

`caffeine` · [NutriFit](https://nutrifit.health/uz/calculators/caffeine)

Qonda kofein parchalanish dinamikasini, yarimparchalanish davrini va uxlash vaqtida qoladigan qoldiq miqdorini hisoblaydi.

### Foydalanish tartibi

1. Birinchi finjonni uyg‘ongandan keyin 60–90 daqiqaga kechiktiring: Ertalabki kortizol cho‘qqisiga kechasi to‘plangan adenozin qoldiqlarini tabiiy tozalashga imkon bering.
2. Kofein to‘xtatish vaqtiga rioya qiling: Yarimparchalanish davri 5 soat bo‘lganida, ichilgan kofeinning to‘rtdan bir qismi 10–12 soatdan keyin ham miyada qoladi. Soat 23:00 da yotganda 14:00 dan keyin qahva ichmang.
3. Yashirin manbalarni hisobga oling: Qora shokolad, kola, ko‘k choy va og‘riq qoldiruvchi dorilar ham sezilarli kofein saqlaydi.

### Usul va formula

EFSA (2015) va AASM maʼlumotlari bo‘yicha jigar CYP1A2 sitoxromi orqali kofein metabolizmiga asoslangan. O‘rtacha yarimparchalanish davri 5 soatni tashkil etadi; chekish uni 3 soatgacha tezlashtiradi, KOK qabul qilish 9 soatgacha, homiladorlik esa 12 soatgacha uzaytiradi.

C(t) = C0 × e^(−k × t), bu yerda k = ln(2) / t_half; Standart t_half = 5,0 soat; Chekish = 3,0 soat; KOK = 9,0 soat; Homiladorlik = 12,0 soat; EFSA meʼyori = 400 mg/kun.

### Cheklovlar

Klirens tezligi CYP1A2 genotipiga qarab farqlanadi. Yuqori sezuvchan shaxslar past dozalarda ham xavotir yoki taxikardiya his qilishlari mumkin.

### Manbalar

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest N.S. et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021;18(1):1](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C. et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013;9(11):1195–1200](https://pubmed.ncbi.nlm.nih.gov/24235826/)

<a id="weight-loss-forecast"></a>

## Vazn yo‘qotishning dinamik prognozi kalkulyatori (Kevin Xoll modeli)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/uz/calculators/weight-loss-forecast)

Metabolizmning sekinlashishi va mushaklarni saqlashni hisobga olgan holda Kevin Xoll (NIH) modeli asosida ozishning real chiziqli bo‘lmagan trayektoriyasini tuzadi.

### Foydalanish tartibi

1. O‘rtacha taqchillikni saqlang (15–20%): 300–500 kkal taqchillik ruhiyat uchun qulay bo‘lib, mushak to‘qimasini yemirilishdan asraydi.
2. Yetarlicha oqsil isteʼmol qiling: Taqchillikda 1,8–2,4 g/kg oqsil meʼyori yo‘qotilgan vaznning 85–90% qismi aynan yog‘ to‘qimasiga to‘g‘ri kelishini taʼminlaydi.
3. Parhez tanaffuslarini (Diet Breaks) rejalashtiring: Har 8–12 haftalik ozishdan so‘ng 1–2 hafta joriy saqlash kaloriyasida (TDEE) ovqatlaning. Bu leptin va T3 gormonlarini yangilaydi.

### Usul va formula

Klassik 7700 kkal qoidasi o‘rniga Kevin Xollning dinamik energiya balansi modeliga (Lancet, 2011; NIH/NIDDK) tayanadi. Har bir yo‘qotilgan kg bazaviy sarfni kamaytirib (~22 kkal/kg), platoga olib keladi. Forbs tenglamasi bo‘yicha yog‘ va mushak yo‘qotilishi hisoblanadi.

Metabolik moslashuv = 22 kkal/kg yo‘qotish + adaptiv termogenez; Samarali taqchillik = Belgilangan taqchillik − Moslashuv; Yog‘ yo‘qotish ulushi p = Forbes(F, W); Dinamik vazn(t) haftama-hafta integrallanadi.

### Cheklovlar

Belgilangan kaloriya taqchilligiga 100% rioya qilishni nazarda tutadi. Stress (kortizol) yoki tuzdan suv tutilishi tarozida yog‘ erishini vaqtincha yashirishi mumkin.

### Manbalar

- [Hall K.D. et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011;378(9793):826–837](https://pubmed.ncbi.nlm.nih.gov/21872751/)
- [Thomas D.M. et al. Can a weight loss of one pound a week be achieved with a 3,500-kcal deficit? Commentary on a commonly accepted rule. Int J Obes, 2013;37(12):1611–1613](https://pubmed.ncbi.nlm.nih.gov/23628852/)
- [Forbes G.B. Lean body mass-body fat interrelationships in humans. Nutr Rev, 1987;45(8):225–231](https://pubmed.ncbi.nlm.nih.gov/3306482/)

<a id="sleep-cycles"></a>

## Uyqu sikllari kalkulyatori

`sleep-cycles` · [NutriFit](https://nutrifit.health/uz/calculators/sleep-cycles)

90 daqiqalik ultradian sikllar (sekin va tez uyqu fazalari) hamda o‘rtacha uxlab qolish vaqti asosida uyqu vaqtini hisoblash vositasi.

### Foydalanish tartibi

1. Hisoblash yo‘nalishini tanlang: Sizga nima kerakligini belgilang: budilnikka uyg‘onish uchun soat nechada uxlashga yotishni bilish yoki hozir yotganda budilnikni nechaga qo‘yish kerakligini aniqlash.
2. Uxlab qolish vaqtini belgilang: Standart holatda 14 daqiqa qilib belgilangan. Agar odatda uzoqroq ag‘anab yotsangiz yoki darhol uxlab qolsangiz, ushbu qiymatni moslang.
3. 5 yoki 6 siklli zanjirni tanlang: 5 ta sikl (7 s 30 daq) ish kunlari uchun, 6 ta sikl (9 s) esa intensiv mashg‘ulotlar yoki uyqusizlikdan keyin tiklanish uchun juda mos keladi.

### Usul va formula

Hisoblash NREM (sekin uyqu) va REM (tez uyqu) bosqichlarini birlashtiruvchi 90 daqiqalik ultradian sikllar modeliga asoslangan. Sikl chegarasida uyg‘onish uyqu inersiyasining oldini oladi.

Uyg‘onish vaqti = Uxlash vaqti + Uxlab qolish (14 daq) + N × 90 daq. Uxlash vaqti = Uyg‘onish vaqti - (N × 90 daq) - Uxlab qolish (14 daq).

### Cheklovlar

Kalkulyator 90 daqiqalik o‘rtacha sikl davomiyligidan foydalanadi. Shaxsiy sikl 70 dan 120 daqiqagacha farq qilishi mumkin. Surunkali uyqu buzilishlarida polisomnografiya talab etiladi.

### Manbalar

- [Carskadon M.A., Dement W.C. Normal Human Sleep: An Overview. Principles and Practice of Sleep Medicine, 2011;5:16–26](https://doi.org/10.1016/B978-1-4160-6645-3.00002-5)
- [Hirshkowitz M. et al. National Sleep Foundation’s sleep time duration recommendations: methodology and results summary. Sleep Health, 2015;1(1):40–43](https://pubmed.ncbi.nlm.nih.gov/29073412/)
- [Dijk D.J., Czeisler C.A. Contribution of the circadian pacemaker and the homeostatic process to the timing of human sleep. Sleep, 1995;18(5):285–304](https://pubmed.ncbi.nlm.nih.gov/7676163/)

<a id="findrisc"></a>

## FINDRISC diabet xavfi shkalasi

`findrisc` · [NutriFit](https://nutrifit.health/uz/calculators/findrisc)

Yashirin diabetni erta skrining qilish va 10 yil ichida 2-toifa QD paydo bo‘lish xavfini baholash uchun JSST va IDF tomonidan xalqaro tan olingan so‘rovnoma.

### Foydalanish tartibi

1. Yosh va tana o‘lchamlarini ko‘rsating: Yosh guruhi, BMI toifasi va pastki qovurg‘a bilan yonbosh suyagi qirrasi o‘rtasida santimetrli lenta bilan o‘lchangan bel aylanasini tanlang.
2. Turmush tarzi va ovqatlanishni baholang: Kuniga kamida 30 daqiqa jismoniy faollik bilan shug‘ullanasizmi va har kuni sabzavot, meva yoki rezavorlar isteʼmol qilasizmi, belgilang.
3. Tibbiy anamnezni ko‘rsating: Qon bosimi dori-darmonlarini qabul qilish, o‘tmishda qondagi qand miqdorining oshishi va yaqin qarindoshlarda diabet mavjudligini belgilang.

### Usul va formula

Isbotlangan 8 ta xavf omilini jamlash: yosh, BMI, bel aylanasi, jismoniy faollik, taomnomadagi sabzavotlar, antigipertenziv davolash, anamnezdagi glikemiya va irsiyat.

FINDRISC balli = Yosh (0–4) + BMI (0–3) + Bel (0–4) + Jismoniy faollik (0/2) + Sabzavotlar (0/1) + Qon bosimi dorilari (0/2) + Anamnezdagi glyukoza (0/5) + Irsiyat (0/3/5). Jami: 0–26 ball.

### Cheklovlar

Shkala skrining prognoz vositasi bo‘lib, laboratoriya diagnostikasi (och qoringa plazma glyukozasi, HbA1c, peroral glyukozaga tolerantlik testi) o‘rnini bosmaydi.

### Manbalar

- [Lindström J., Tuomilehto J. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003;26(3):725–731](https://pubmed.ncbi.nlm.nih.gov/12610029/)
- [International Diabetes Federation (IDF). Clinical Practice Recommendations for managing Type 2 Diabetes in Primary Care, 2017](https://www.idf.org/our-activities/care-prevention/clinical-practice-recommendations/)
- [Saaristo T. et al. FINDRISC as an early intervention tool in primary health care. Diabetes Care, 2005;28(12):2900–2907](https://pubmed.ncbi.nlm.nih.gov/16316578/)

<a id="debq"></a>

## Golland ovqatlanish xulq-atvori so‘rovnomasi (DEBQ)

`debq` · [NutriFit](https://nutrifit.health/uz/calculators/debq)

Ovqatlanish xulq-atvorining uch asosiy turini (cheklovchi, emotsiogen va tashqi) aniqlash uchun mo‘ljallangan klassik psixologik vosita.

### Foydalanish tartibi

1. Samimiy javob bering: So‘nggi oylardagi odatiy xatti-harakatlaringizga eng mos keladigan javob variantini tanlang.
2. Uzoq o‘ylanib qolmang: Birinchi spontan javob ko‘pincha eng to‘g‘ri va aniq ko‘rsatkich bo‘ladi.
3. Uchta subshkala bo‘yicha natijalarni o‘rganing: Ballaringizni meʼyoriy ko‘rsatkichlar bilan taqqoslang va tavsiyalar bilan tanishing.

### Usul va formula

So‘rovnoma Likert shkalasi bo‘yicha 1 dan 5 gacha baholanadigan 33 ta savoldan iborat: kognitiv cheklov (10 ta), emotsiogen ortiqcha ovqatlanish (13 ta) va tashqi stimulyatsiya (10 ta).

Har bir subshkala bali = Savollarga berilgan javoblarning o‘rtacha arifmetik qiymati (1,0 dan 5,0 gacha). Cheklovchi: meʼyor ~2.4; Emotsiogen: meʼyor ~1.8; Tashqi: meʼyor ~2.7.

### Cheklovlar

Ushbu so‘rovnoma o‘z-o‘zini psixologik baholash vositasi bo‘lib, klinik tashxis hisoblanmaydi. Kuchli distress holatlarida mutaxassisga murojaat qiling.

### Manbalar

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire. J Psychosom Res, 1987;31(2):161–169](https://pubmed.ncbi.nlm.nih.gov/3585818/)

<a id="phq-9"></a>

## Bemor salomatligi so‘rovnomasi PHQ-9 (Depressiya)

`phq-9` · [NutriFit](https://nutrifit.health/uz/calculators/phq-9)

DSM-5 mezonlari asosida depressiya darajasini aniqlash va birlamchi skrining qilish uchun xalqaro oltin standart.

### Foydalanish tartibi

1. So‘nggi 2 haftani yodga oling: Oxirgi 14 kun davomidagi umumiy holatingiz va har bir alomat qanchalik tez-tez bezovta qilganini baholang.
2. Barcha 9 ta savolga javob bering: Har bir holatning uchrash tezligini 'Umuman yo‘q' (0) dan 'Deyarli har kuni' (3) gacha tanlang.
3. Klinik xulosani o‘rganing: Alomatlarning og‘irlik toifasi va mutaxassislarning amaliy tavsiyalari bilan tanishing.

### Usul va formula

So‘nggi 2 hafta davomida depressiv alomatlarning uchrash tezligini 0 dan ('Umuman yo‘q') 3 gacha ('Deyarli har kuni') baholovchi 9 ta savol.

PHQ-9 umumiy bali = Barcha 9 ta savol ballari yig‘indisi (0–27). 0–4: minimal; 5–9: yengil; 10–14: o‘rtacha; 15–19: o‘rtacha og‘ir; 20–27: og‘ir depressiya.

### Cheklovlar

Ushbu skrining shifokor-psixiatr yoki psixoterapevt qabulini almashtirmaydi. 9-savolga ijobiy javob berilganda zudlik bilan shifokorga murojaat qilish zarur.

### Manbalar

- [Kroenke K. et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001;16(9):606–613](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer R.L. et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. JAMA, 1999;282(18):1737–1744](https://pubmed.ncbi.nlm.nih.gov/10568646/)

<a id="gad-7"></a>

## Umumiy xavotir shkalasi GAD-7

`gad-7` · [NutriFit](https://nutrifit.health/uz/calculators/gad-7)

Umumiy xavotir darajasi va hissiy taranglikni tezkor baholash uchun mo‘ljallangan xalqaro klinik so‘rovnoma.

### Foydalanish tartibi

1. Oxirgi 14 kundagi alomatlarni baholang: So‘nggi 2 hafta davomida asabiylik, qo‘rquv yoki taranglik sizni qanchalik tez-tez bezovta qilganini eslang.
2. Javob variantlarini tanlang: Har bir alomat tezligini 0 ('Umuman yo‘q') dan 3 ('Deyarli har kuni') gacha belgilang.
3. Natija va tavsiyalarni oling: O‘z xavotir darajangizni bilib oling va asab tizimini meʼyorga keltirish bo‘yicha tavsiyalar bilan tanishing.

### Usul va formula

So‘nggi 2 hafta davomidagi xavotir alomatlarini 0 dan 3 ballgacha baholovchi 7 ta savol.

GAD-7 umumiy bali = 7 ta savol ballari yig‘indisi (0–21). 0–4: minimal; 5–9: yengil; 10–14: o‘rtacha; 15–21: kuchli (og‘ir) xavotir.

### Cheklovlar

Skrining tibbiy tashxis sanalmaydi. Vahima xurujlari (panik ataka) yoki fobiyalar bo‘lsa, mutaxassisga murojaat qiling.

### Manbalar

- [Spitzer R.L. et al. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 2006;166(10):1092–1097](https://pubmed.ncbi.nlm.nih.gov/16717171/)
- [Löwe B. et al. Validation and standardization of the Generalized Anxiety Disorder Screener (GAD-7). Med Care, 2008;46(3):266–274](https://pubmed.ncbi.nlm.nih.gov/18388841/)

<a id="pss-10"></a>

## Qabul qilingan stress shkalasi PSS-10

`pss-10` · [NutriFit](https://nutrifit.health/uz/calculators/pss-10)

Insonning o‘z hayotidagi vaziyatlarni oldindan aytib bo‘lmaydigan, nazorat qilib bo‘lmaydigan va ortiqcha yuklama sifatida baholashini o‘lchaydigan Sheldon Koenning klassik shkalasi.

### Foydalanish tartibi

1. Oxirgi bir oyga eʼtibor qarating: So‘nggi 30 kun davomidagi umumiy his-tuyg‘ularingiz va kechinmalaringizni tahlil qiling.
2. Javoblar tezligini tanlang: Har bir savolga 0 ('Hech qachon') dan 4 ('Juda tez-tez') gacha bo‘lgan bahoni belgilang.
3. Stress profilingizni o‘rganing: O‘z ballingiz bilan tanishing va asab tizimini tiklash bo‘yicha tavsiyalarni ko‘rib chiqing.

### Usul va formula

0 dan 4 gacha bo‘lgan 5 ta javob variantiga ega 10 ta savol. 4, 5, 7 va 8-savollar shaxsiy resurslar va chidamlilikni baholash uchun teskari hisoblanadi.

PSS-10 umumiy bali = To‘g‘ri savollar (1, 2, 3, 6, 9, 10) + Teskari savollar (4, 5, 7, 8). 0–13: past stress; 14–26: o‘rtacha stress; 27–40: yuqori stress darajasi.

### Cheklovlar

Test hayotiy yuklamalarni subyektiv qabul qilishni aks ettiradi va tibbiy tashxis sanalmaydi. Surunkali toliqishda mutaxassisga murojaat qiling.

### Manbalar

- [Cohen S. et al. A global measure of perceived stress. J Health Soc Behav, 1983;24(4):385–396](https://pubmed.ncbi.nlm.nih.gov/6668417/)
- [Cohen S., Williamson G.M. Perceived stress in a probability sample of the United States. The Social Psychology of Health, 1988:31–67](https://psycnet.apa.org/record/1988-98838-002)

<a id="isi"></a>

## Uyqusizlik og‘irligi indeksi ISI

`isi` · [NutriFit](https://nutrifit.health/uz/calculators/isi)

Uyqusizlik alomatlarining xususiyati, og‘irligi va kunduzgi faoliyatga taʼsirini baholash uchun mo‘ljallangan 7 savolli qisqa klinik vosita.

### Foydalanish tartibi

1. Oxirgi 2 haftani yodga oling: So‘nggi 14 kun davomida qanday uxlaganingizni va kunduzi o‘zingizni qanchalik tetik his qilganingizni baholang.
2. Barcha 7 ta savolga javob bering: Har bir qiyinchilik darajasini 0 ('Umuman yo‘q') dan 4 ('Juda kuchli') gacha belgilang.
3. Natija va tavsiyalarni ko‘rib chiqing: O‘z og‘irlik toifangizni aniqlang va uyquni yaxshilash bo‘yicha tavsiyalardan foydalaning.

### Usul va formula

Har biri 0 dan 4 ballgacha baholanadigan 7 ta savol. Umumiy ball 0 dan 28 gacha bo‘lib, uxlab qolish, uyquni saqlash va erta uyg‘onishni qamrab oladi.

ISI umumiy bali = Barcha 7 ta savol ballari yig‘indisi (0–28). 0–7: klinik uyqusizlik yo‘q; 8–14: chegara osti (yengil); 15–21: o‘rtacha klinik; 22–28: og‘ir klinik uyqusizlik.

### Cheklovlar

Indeks skrining maqsadida qo‘llaniladi. Uyqudagi apnoe (nafas to‘xtashi) yoki bezovta oyoqlar sindromida polisomnografiya talab etiladi.

### Manbalar

- [Morin C.M. et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases. Sleep, 2011;34(5):601–608](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien C.H. et al. Validation of the Insomnia Severity Index as an outcome measure. Sleep Med, 2001;2(4):297–307](https://pubmed.ncbi.nlm.nih.gov/11438246/)

<a id="scoff"></a>

## Ovqatlanish xulq-atvori buzilishlari skriningi SCOFF

`scoff` · [NutriFit](https://nutrifit.health/uz/calculators/scoff)

Anoreksiya va bulimiya kabi ovqatlanish buzilishlari xavfini birlamchi aniqlash uchun dunyoda eʼtirof etilgan 5 savolli klinik skrining.

### Foydalanish tartibi

1. Barcha 5 ta savolni diqqat bilan o‘qing: So‘nggi oylardagi taomlanish odatlaringiz va tana vazningizga munosabatingizni tahlil qiling.
2. Samimiy 'Ha' yoki 'Yo‘q' deb javob bering: O‘z holatingizni xaspo‘shlamasdan va kamaytirmasdan ochiq javob bering.
3. Skrining xulosasini bilib oling: Klinik xavf mavjudligini tekshiring va shifokor tavsiyalari bilan tanishing.

### Usul va formula

Asosiy klinik mezonlarni aks ettiruvchi 5 ta yopiq savoldan (Ha/Yo‘q) iborat: sunʼiy qayt qilish, nazoratni yo‘qotish, vazn yo‘qotish, tana buzilishi va ovqatga bog‘lanib qolish.

SCOFF umumiy bali = Tasdiqlovchi javoblar soni (0–5). Natija ≥ 2 bo‘lganda skrining ijobiy hisoblanadi va OXB xavfi yuqori deb baholanadi.

### Cheklovlar

SCOFF testi faqatgina birlamchi skrining vositasi hisoblanadi. U yakuniy tibbiy tashxis qo‘ymaydi va mutaxassis konsultatsiyasini talab qiladi.

### Manbalar

- [Morgan J.F. et al. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ, 1999;319(7223):1467–1468](https://pubmed.ncbi.nlm.nih.gov/10582927/)
- [Luck A.J. et al. The SCOFF questionnaire and clinical interview for detecting eating disorders. BMJ, 2002;325(7367):755–756](https://pubmed.ncbi.nlm.nih.gov/12364305/)

<a id="ies-2"></a>

## Intuitiv ovqatlanish shkalasi IES-2

`ies-2` · [NutriFit](https://nutrifit.health/uz/calculators/ies-2)

Treysi Tilka tomonidan ishlab chiqilgan, taom va tana bilan uyg‘un hamda intuitiv munosabatni o‘lchovchi 23 savolli ilmiy shkala.

### Foydalanish tartibi

1. Taomga bo‘lgan odatiy munosabatingizni baholang: Oxirgi oylardagi odatlaringiz va haqiqiy his-tuyg‘ularingizga tayanib javob bering.
2. 1 dan 5 gacha bo‘lgan rozilik darajasini belgilang: 1 — mutlaqo qo‘shilmayman, 5 — to‘liq qo‘shilaman.
3. 4 ta komponent bo‘yicha profilingizni o‘rganing: Bali 3,0 dan past bo‘lgan subshkalalarga eʼtibor qarating — bular yaxshilanishi kerak bo‘lgan sohalardir.

### Usul va formula

5 ballik Likert shkalasi bo‘yicha baholanadigan 23 ta savol. 4 ta subshkalani o‘z ichiga oladi: so‘zsiz ruxsat (UPE), jismoniy sabablarga ko‘ra yeyish (EPR), ochlik/to‘qlikka tayanish (RHSC) va tana mutanosibligi (B-FCC).

IES-2 umumiy bali = Barcha 23 ta savol bo‘yicha o‘rtacha arifmetik qiymat (1,0 dan 5,0 gacha). 3,5 dan yuqori ball intuitiv ovqatlanish ko‘nikmasini bildiradi.

### Cheklovlar

Shkala taomlanishning psixologik odatlarini baholaydi. Klinik OXB mavjud bo‘lganda jarayon maxsus shifokor nazorati ostida olib borilishi lozim.

### Manbalar

- [Tylka T.L., Kroon Van Diest A.M. The Intuitive Eating Scale-2: item refinement and psychometric evaluation. J Couns Psychol, 2013;60(1):137–153](https://pubmed.ncbi.nlm.nih.gov/23356469/)
- [Tribole E., Resch E. Intuitive Eating: A Revolutionary Anti-Diet Approach. St. Martin’s Essentials, 2020](https://www.intuitiveeating.org/)

<a id="yfas"></a>

## mYFAS 2.0 oziq-ovqatga qaramlik Yale shkalasi

`yfas` · [NutriFit](https://nutrifit.health/uz/calculators/yfas)

Yuqori kaloriyali va chuqur qayta ishlangan taomlarga addiktiv maylni aniqlash uchun Yale universiteti tomonidan moslashtirilgan ilmiy so‘rovnoma.

### Foydalanish tartibi

1. Muammoli mahsulotlarni eslang: Isteʼmol qilishda o‘zingizni to‘xtatish eng qiyin bo‘lgan taomlar haqida o‘ylang (shirinliklar, gazaklar, pishiriqlar).
2. 13 ta savolga javob bering: Agar bu holat so‘nggi 12 oy davomida muntazam kuzatilgan bo‘lsa, 'Ha' deb belgilang.
3. Alomatlar va tashxis natijalarini ko‘ring: Tashxisiy mezonlar soni va ularning hayotingizga taʼsiri darajasini bilib oling.

### Usul va formula

Moddalarga qaramlik bo‘yicha DSM-5 ning oziq-ovqatga moslashtirilgan 11 ta diagnostik mezoniga asoslangan 13 ta savol va klinik distress bo‘yicha 2 ta savol.

Oziq-ovqatga qaramlik tashxisi klinik distress/dezadaptatsiya (12 yoki 13-savollar) va kamida 2 ta alomat mavjudligini talab qiladi. 2–3: yengil; 4–5: o‘rtacha; ≥ 6: og‘ir darajadagi qaramlik.

### Cheklovlar

'Oziq-ovqatga qaramlik' tushunchasi ilmiy bahslar mavzusi hisoblanadi. So‘rovnoma shirin, yog‘li va tuzli taomlarga nisbatan kompulsiv xatti-harakatlarni aniqlaydi.

### Manbalar

- [Schulte E.M., Gearhardt A.N. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017;25(4):302–308](https://pubmed.ncbi.nlm.nih.gov/28543787/)
- [Gearhardt A.N. et al. Preliminary validation of the Yale Food Addiction Scale. Appetite, 2009;52(2):430–436](https://pubmed.ncbi.nlm.nih.gov/19028533/)

<a id="eating-behavior-wizard"></a>

## Ovqatlanish xulq-atvori diagnostikasi ustasi

`eating-behavior-wizard` · [NutriFit](https://nutrifit.health/uz/calculators/eating-behavior-wizard)

Taomlanishning chuqur psixotipini va shaxsiy strategiyani aniqlash uchun yetakchi validatsiyalangan shkalalarni birlashtiruvchi NutriFit integratsiyalashgan diagnostika ustasi.

### Foydalanish tartibi

1. Xavflar skriningidan o‘ting: Vazn va ovqatni nazorat qilishga bo‘lgan o‘ta kuchli diqqat belgilarini belgilang.
2. Ovqatlanish shkalalarini sozlang: Cheklovlar, stressni yeyish va tashqi ovqatga munosabat darajasini ko‘rsating.
3. Psixotipingiz va strategiyangizni oling: Yetakchi taomlanish profilingiz tavsifi bilan tanishing va batafsil PDF-hisobotni yuklab oling.

### Usul va formula

NutriFit ko‘p omilli algoritmi parhez nazorati, emotsional yeb qo‘yish, tashqi stimullarga bog‘liqlik va OXB xavfi belgilarini yagona psixotipga umumlashtiradi.

DEBQ, SCOFF, IES-2 va mYFAS 2.0 shkalalari o‘zaro korrelyatsiyasiga asoslangan ovqatlanish xulq-atvorini tasniflashning kompleks matritsasi.

### Cheklovlar

Ushbu vosita o‘z-o‘zini anglash va mutaxassis bilan ishlashda yo‘nalish olish uchun mo‘ljallangan bo‘lib, shifokorning klinik ko‘rigi o‘rnini bosmaydi.

### Manbalar

- [Fairburn C.G. Cognitive Behavior Therapy and Eating Disorders. Guilford Press, 2008](https://www.guilford.com/books/Cognitive-Behavior-Therapy-and-Eating-Disorders/Christopher-Fairburn/9781593857097)
- [American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR), 2022](https://doi.org/10.1176/appi.books.9780890425787)
- [NICE (National Institute for Health and Care Excellence). Eating disorders: recognition and treatment (NG69), 2020](https://www.nice.org.uk/guidance/ng69)
