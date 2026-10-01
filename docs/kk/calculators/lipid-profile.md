# Липидтік профиль калькуляторы: ТТЛП, non-HDL және атерогендік индекстер

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lipid-profile.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lipid-profile.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lipid-profile.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lipid-profile.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lipid-profile.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lipid-profile.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`lipid-profile` · [NutriFit](https://nutrifit.health/kk/calculators/lipid-profile)

Стандартты липидограмма бойынша екі әдіспен есептелген ТТЛП, non-HDL, қалдық холестерин және бес атерогендік индекс — ESC/EAS мақсатты мәндерімен.

### Пайдалану реті

1. Үш негізгі көрсеткішті енгізіңіз: Жалпы холестерин, ЖТЛП және триглицеридтер кез келген липидограммада бар. Бланк бірліктерін таңдаңыз: ммоль/л (ТМД, Еуропа) немесе мг/дл (АҚШ, Латын Америкасының бір бөлігі).
2. Бар болса, өлшенген ТТЛП-ны қосыңыз: ТТЛП-ны тікелей өлшеу есептеуден дәлірек. Ол болмаса — калькулятор Сэмпсон теңдеуін қолданады және зертхана бланкімен салыстыру үшін қатар Фридвальдты көрсетеді.
3. Бір көрсеткішке емес, арақатынастарға қараңыз: Төмен ЖТЛП және жоғары триглицеридтер кезіндегі қалыпты жалпы холестерин — атерогендік профиль. AIP және атерогендік коэффициент мұны «ЖХ нормада» болғанда анықтайды.

### Әдістеме және формула

Жалпы холестерин, ЖТЛП және триглицеридтерден калькулятор ТТЛП-ны классикалық Фридвальд формуласы (1972) және 9 ммоль/л-ге дейінгі триглицеридтер мен төмен ТТЛП кезінде дәл болып қалатын Сэмпсон теңдеуі (NIH, 2020) бойынша шығарады. Non-HDL — бүкіл атерогендік холестерин (ТТЛП + ӨТТЛП + қалдық бөлшектер), ал қалдық холестерин — non-HDL мен ТТЛП айырмасы. Castelli индекстері (ЖХ/ЖТЛП және ТТЛП/ЖТЛП), Климовтың атерогендік коэффициенті және плазманың атерогендік индексі AIP = log10(ТГ/ЖТЛП) «жаман» және «қорғаушы» фракциялардың арақатынасын көрсетеді және қауіпті жеке көрсеткіштерден жақсырақ болжайды.

ТТЛП (Фридвальд, ммоль/л) = ЖХ − ЖТЛП − ТГ / 2,2   [ТГ ≤ 4,5 ммоль/л болғанда]
ТТЛП (Сэмпсон, мг/дл) = ЖХ/0,948 − ЖТЛП/0,971 − (ТГ/8,56 + ТГ×non-HDL/2140 − ТГ²/16100) − 9,44
non-HDL = ЖХ − ЖТЛП;  Қалдық ХС = non-HDL − ТТЛП
АК (Климов) = (ЖХ − ЖТЛП) / ЖТЛП;  Castelli I = ЖХ/ЖТЛП;  Castelli II = ТТЛП/ЖТЛП
AIP = log10(ТГ / ЖТЛП), ммоль/л

### Шектеулер

Есептелген ТТЛП — өлшеу емес, бағалау: ТГ > 4,5 ммоль/л болғанда Фридвальд формуласы қолданылмайды, ал ТГ > 9 ммоль/л және хиломикронемияда Сэмпсон теңдеуі де дәл емес. Индекстер SCORE2, аполипопротеин B және липопротеин(а) бойынша жалпы қауіпті бағалауды алмастырмайды. ТТЛП-ның мақсатты мәндері қауіп санатына байланысты (ESC/EAS 2019 бойынша 1,4-тен 3,0 ммоль/л-ге дейін) — оларды дәрігер анықтайды. Талдау зертхана ұсынымы бойынша аш қарынға немесе аш қарынсыз тапсырылады.

### Дереккөздер

- [Friedewald W.T., Levy R.I., Fredrickson D.S. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972;18(6):499–502](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M. et al. A new equation for calculation of low-density lipoprotein cholesterol in patients with normolipidemia and/or hypertriglyceridemia. JAMA Cardiol, 2020;5(5):540–548](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiášová M., Frohlich J. The plasma parameter log (TG/HDL-C) as an atherogenic index. Clin Biochem, 2001;34(7):583–588](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F. et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J, 2020;41(1):111–188](https://pubmed.ncbi.nlm.nih.gov/31504418/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lipid-profile" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="lipid-profile" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lipid-profile?lang=kk&theme=auto"
  title="Липидтік профиль калькуляторы: ТТЛП, non-HDL және атерогендік индекстер" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
