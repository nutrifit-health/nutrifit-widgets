# Денсаулық пен тамақтану балансының дөңгелегі

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/health-balance-wheel.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/health-balance-wheel.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`health-balance-wheel` · [NutriFit](https://nutrifit.health/kk/calculators/health-balance-wheel)

Денсаулықтың 8 саласы бойынша интерактивті диаграмма. Либих заңы бойынша тар буындарды анықтайды және NutriFit құралдарымен байланыстырады.

### Пайдалану реті

1. 8 шкала бойынша шынайы өзін-өзі бағалау: Әрбір ось бойынша 1-ден 10-ға дейін балл қойыңыз. Слайдерлер астындағы динамикалық нұсқауларға сүйеніңіз: олар әр диапазон үшін нақты сапалық өлшемдерді береді.
2. Шектеуші факторды анықтаңыз: Тест ең төмен ұпайы бар шектеуші факторларды анықтайды. Либих минимумы заңы бойынша дәл солар жалпы әл-ауқатты анықтайды және бейімделуге кедергі жасайды.
3. Мақсатты микро-әдеттерден бастаңыз: Барлық 8 саланы бірден өзгертуге тырыспаңыз. 1–2 шектеулі тұсқа назар аударып, арнайы NutriFit калькуляторларын қосыңыз және алғашқы қадамды 48 сағат ішінде жасаңыз.

### Әдістеме және формула

Әдістеме өмір салты медицинасы (Lifestyle Medicine) тұжырымдамасы мен Юстус фон Либихтің минимум заңына негізделген. Денсаулықтың 8 негізгі осі (тамақтанудың толықтығы, энергия, гидратация, ұйқы, белсенділік, тамақтанудағы саналылық, АІЖ және алдын алу) 10 балдық шкала бойынша бағаланады. Интегралды балл жалпы әлеуетті көрсетеді, ал теңгерімділік индексі бағалардың дисперсиясы арқылы есептеліп, дене жүйелерінің тұрақтылық дәрежесін көрсетеді.

Жалпы балл = (Σ Баллар / 8) × 10; Теңгерімділік индексі = max(0, 100 − СКА × 18); Тар жерлер = min(Баллар) мәні ≤ 6 болғанда

### Шектеулер

Өзін-өзі бағалау скринингтік сипатта болады және өзін-өзі сезіну мен әдеттерді субъективті қабылдауды көрсетеді. Ол кешенді зертханалық диагностика мен дәрігерлік тексеруді алмастырмайды, бірақ өмір салтын өзгертуде басымдықтарды анықтауға көмектеседі.

### Дереккөздер

- [Liebig J. Die organische Chemie in ihrer Anwendung auf Agricultur und Physiologie. Vieweg, Braunschweig, 1840 (Закон минимума Либиха)](https://archive.org/details/dieorganischech01liebgoog)
- [American College of Lifestyle Medicine (ACLM). Standards and Core Competencies for Lifestyle Medicine, 2022](https://lifestylemedicine.org/)
- [Katz D.L. et al. Lifestyle Medicine: The Foundation of Health Care. Am J Prev Med, 2018;54(5):737–742](https://pubmed.ncbi.nlm.nih.gov/29571948/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="health-balance-wheel" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="health-balance-wheel" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/health-balance-wheel?lang=kk&theme=auto"
  title="Денсаулық пен тамақтану балансының дөңгелегі" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
