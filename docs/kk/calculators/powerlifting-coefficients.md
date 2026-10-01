# Пауэрлифтинг коэффициенттерінің калькуляторы (DOTS, Wilks, IPF GL)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/powerlifting-coefficients.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/powerlifting-coefficients.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/kk/calculators/powerlifting-coefficients)

DOTS, Wilks және IPF GL Points формулалары бойынша әртүрлі салмақ дәрежелері мен жыныстағы атлеттердің үшсайыстағы (отырып-тұру, жатып сығу, тартылыс) абсолютті күшін салыстырады.

### Пайдалану реті

1. Үш қозғалыстағы ең үздік салмақтарды қосыңыз: Жарыс ережелері бойынша орындалған отырып-тұру, жатып сығу және становалық тартылыстағы максималды салмақтарды қосыңыз.
2. Өлшеу кезіндегі нақты жеке салмағыңызды көрсетіңіз: Помостқа шығар алдындағы ресми техникалық өлшеудегі таңертеңгі салмақты пайдаланыңыз.
3. DOTS және IPF GL ұпайларыңызды бағалаңыз: Нәтижені шеберлік шкаласымен салыстырыңыз: 300 ұпай — сенімді әуесқой, 400 — спорт шеберіне үміткер, 500 — элита.

### Әдістеме және формула

Аллометриялық масштабтау заңы бұлшықет күші олардың көлденең қимасының ауданына (бойдың квадратына), ал дене салмағы көлемге (бойдың кубына) пропорционалды өсетінін көрсетеді. Пауэрлифтинг коэффициенттері жеңіл және ауыр салмақтағы спортшылардың мүмкіндіктерін теңестіру үшін жоғары дәрежелі теңдеулерді пайдаланады.

DOTS: Коэффициент = 500 / (A×Салмақ^4 + B×Салмақ^3 + C×Салмақ^2 + D×Салмақ + E); DOTS ұпайы = Сома (кг) × Коэффициент; IPF GL Points: 100 × Сома / (A − B × e^(−C × Салмақ)); Wilks: 5-дәрежелі көпмүшелік.

### Шектеулер

Стандартты жарыс үшсайысына (пауэрлифтинг) арналған. Гир спорты, ауыр атлетика (Синклер формуласы қолданылады) немесе армрестлинг үшін қолданылмайды.

### Дереккөздер

- [Perotti L. et al. The DOTS Formula: A new formula for evaluating strength athletes across weight classes, 2019](https://pubmed.ncbi.nlm.nih.gov/31804245/)
- [Wilks R. The Wilks Formula for Powerlifting. Australian Powerlifting Federation, 1997](https://www.powerlifting.sport/)
- [International Powerlifting Federation. IPF GL Points Formula for Classic and Equipped Powerlifting, 2020](https://www.powerlifting.sport/rules/codes/info/ipf-formula)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="powerlifting-coefficients" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="powerlifting-coefficients" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/powerlifting-coefficients?lang=kk&theme=auto"
  title="Пауэрлифтинг коэффициенттерінің калькуляторы (DOTS, Wilks, IPF GL)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
