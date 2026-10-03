# Тәуліктік судың эвристикалық бағасы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/water.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/water.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`water` · [NutriFit](https://nutrifit.health/kk/calculators/water)

Таңдалған модель: 30 мл/кг + жүктеме сағатына 500 мл + ыстықта 500 мл. Шартты түрде 75% сусыннан; стақан = 250 мл. Жасқа байланысты азайту жоқ.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Таңдалған модель: 30 мл/кг + жүктеме сағатына 500 мл + ыстықта 500 мл. Шартты түрде 75% сусыннан; стақан = 250 мл. Жасқа байланысты азайту жоқ.
2. Параметрлерді нақтылаңыз: Таңдалған модель: 30 мл/кг + жүктеме сағатына 500 мл + ыстықта 500 мл. Шартты түрде 75% сусыннан; стақан = 250 мл. Жасқа байланысты азайту жоқ.
3. Нәтижені оқыңыз: Бұлар жорамалдар, EFSA нормасы емес. EFSA: сусын мен тағамнан жалпы су әйелдерге 2,0 л, ерлерге 2,5 л; қалыпты жағдайда ересектер мен қарттарға бірдей. Тер шығыны мен ауру шектеулері бөлек бағаланады.

### Әдіс пен формула

Таңдалған модель: 30 мл/кг + жүктеме сағатына 500 мл + ыстықта 500 мл. Шартты түрде 75% сусыннан; стақан = 250 мл. Жасқа байланысты азайту жоқ.

Таңдалған модель: 30 мл/кг + жүктеме сағатына 500 мл + ыстықта 500 мл. Шартты түрде 75% сусыннан; стақан = 250 мл. Жасқа байланысты азайту жоқ.

### Шектеулер

Бұлар жорамалдар, EFSA нормасы емес. EFSA: сусын мен тағамнан жалпы су әйелдерге 2,0 л, ерлерге 2,5 л; қалыпты жағдайда ересектер мен қарттарға бірдей. Тер шығыны мен ауру шектеулері бөлек бағаланады.

### Дереккөздер

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [American College of Sports Medicine et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="water" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="water" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/water?lang=kk&theme=auto"
  title="Тәуліктік судың эвристикалық бағасы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
