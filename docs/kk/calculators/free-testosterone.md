# Вермюлен бойынша бос тестостерон

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/free-testosterone.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/free-testosterone.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/free-testosterone.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/free-testosterone.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/free-testosterone.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/free-testosterone.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`free-testosterone` · [NutriFit](https://nutrifit.health/kk/calculators/free-testosterone)

Жалпы тестостерон, SHBG және альбумин бойынша бос және SHBG-мен байланыспаған фракцияларды есептеу.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Нақты мәндер мен тиісті бірліктерді қолданыңыз.
2. Параметрлерді нақтылаңыз: Бастапқы болжамдарды өз жағдайыңызға сай өзгертіңіз.
3. Нәтижені оқыңыз: Модель шектеулерін ескеріңіз; есеп өлшеу емес.

### Әдіс пен формула

Vermeulen (1999) тепе-теңдік байланысу моделі: K_SHBG=10⁹ л/моль, K_Alb=3,6×10⁴ л/моль, альбумин молярлық массасы 69 000 г/моль. Модельдегі биожетімді фракция — бос және альбуминмен байланысқан тестостерон.

Vermeulen (1999) тепе-теңдік байланысу моделі: K_SHBG=10⁹ л/моль, K_Alb=3,6×10⁴ л/моль, альбумин молярлық массасы 69 000 г/моль. Модельдегі биожетімді фракция — бос және альбуминмен байланысқан тестостерон.

### Шектеулер

Бұл есеп, тікелей өлшеу емес. Әмбебап норма берілмейді: түсіндіру симптомдарға, жасқа, жынысқа, зертхана әдісіне және қайталанған өлшемдерге байланысты.

### Дереккөздер

- [Vermeulen A et al. A critical evaluation of simple methods for the estimation of free testosterone in serum. J Clin Endocrinol Metab, 1999](https://pubmed.ncbi.nlm.nih.gov/10523012/)
- [Bhasin S et al. Testosterone Therapy in Men With Hypogonadism: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab, 2018](https://pubmed.ncbi.nlm.nih.gov/29562364/)
- [Salonia A et al. European Association of Urology Guidelines on Sexual and Reproductive Health-2021 Update: Male Sexual Dysfunction. Eur Urol, 2021](https://pubmed.ncbi.nlm.nih.gov/34183196/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="free-testosterone" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="free-testosterone" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/free-testosterone?lang=kk&theme=auto"
  title="Вермюлен бойынша бос тестостерон" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
