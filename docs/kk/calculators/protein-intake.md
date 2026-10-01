# Тәуліктік ақуыз нормасының калькуляторы (ISSN және ESPEN)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/protein-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/protein-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`protein-intake` · [NutriFit](https://nutrifit.health/kk/calculators/protein-intake)

Мақсаттарды (салмақ тастау, гипертрофия, 65+ жастағы саулық), тамақтану түрін және бұлшықет ақуызының синтезін (MPS) ескере отырып, оңтайлы тәуліктік ақуыз мөлшерін есептейді.

### Пайдалану реті

1. Мақсатты көрсеткішіңізді біліңіз: Салмағыңыз бен мақсатыңызды енгізіңіз. Калькулятор тәуліктік грамм мен бір реттік порция көлемін анықтайды.
2. Әр тамақтануға 25–40 грамнан бөліңіз: Бір рет 30 г ақуыз қабылдау (сүзбе, 150 г тауық еті немесе балық) бұлшықет анаболизмінің лейцин триггерін іске қосады.
3. Көздерін әртараптандырыңыз: Жануар текті (жұмыртқа, құс еті, балық, қышқыл сүт өнімдері) және өсімдік текті ақуыздарды (тофу, жасымық, ноқат, темпе) біріктіріңіз.

### Әдістеме және формула

Есептеу Халықаралық спорттық тамақтану қоғамы (ISSN, 2017) және Еуропалық клиникалық тамақтану және метаболизм қауымдастығының (ESPEN) консенсустарына негізделген. Семіздік кезінде (ДМИ > 28) бүйректің гиперфильтрациясын болдырмау үшін есептеу автоматты түрде түзетілген дене салмағына (AdjBW) ауыстырылады.

Базалық норма: 1,0–1,4 г/кг; Бұлшықет жинау: 1,6–2,2 г/кг; Дефицит (май жою): 2,0–2,4 г/кг; Төзімділік: 1,2–1,6 г/кг; 65+ жас: 1,2–1,5 г/кг; СБA (3–4 кезең): 0,6–0,8 г/кг. Вегетариандық: нормаға +10%.

### Шектеулер

ШСЖ < 60 мл/мин төмендеген созылмалы бүйрек ауруы (СБA) кезінде ақуыз нормасы дәрігер-нефрологпен қатаң келісілуі керек.

### Дереккөздер

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Deutz N.E. et al. Protein intake and exercise for optimal muscle function with aging: recommendations from the ESPEN Expert Group. Clin Nutr, 2014;33(6):929–936](https://pubmed.ncbi.nlm.nih.gov/24814383/)
- [Morton R.W. et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on gains in muscle mass and strength in healthy adults. Br J Sports Med, 2018;52(6):376–384](https://pubmed.ncbi.nlm.nih.gov/28698222/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="protein-intake" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="protein-intake" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/protein-intake?lang=kk&theme=auto"
  title="Тәуліктік ақуыз нормасының калькуляторы (ISSN және ESPEN)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
