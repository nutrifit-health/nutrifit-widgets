# Порцияның гликемиялық жүктемесі

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/glycemic-load.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/glycemic-load.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`glycemic-load` · [NutriFit](https://nutrifit.health/kk/calculators/glycemic-load)

ГЖ = ГИ × порцияның қолжетімді көмірсуы / 100. Нақты тағам мен дайындаудың ГИ-ын глюкоза = 100 шкаласында, 100 г-ға көмірсу мен порция салмағын енгізіңіз. Бастапқы сандар — мысал.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: ГЖ = ГИ × порцияның қолжетімді көмірсуы / 100. Нақты тағам мен дайындаудың ГИ-ын глюкоза = 100 шкаласында, 100 г-ға көмірсу мен порция салмағын енгізіңіз. Бастапқы сандар — мысал.
2. Параметрлерді нақтылаңыз: ГЖ = ГИ × порцияның қолжетімді көмірсуы / 100. Нақты тағам мен дайындаудың ГИ-ын глюкоза = 100 шкаласында, 100 г-ға көмірсу мен порция салмағын енгізіңіз. Бастапқы сандар — мысал.
3. Нәтижені оқыңыз: ГЖ жеке глюкозаны не инсулин дозасын болжамайды. Порция санаттары әмбебап тәуліктік норманы бермейді. Нақты тағамға тексерілмеген орташа мәндер автоматты қойылмайды.

### Әдіс пен формула

ГЖ = ГИ × порцияның қолжетімді көмірсуы / 100. Нақты тағам мен дайындаудың ГИ-ын глюкоза = 100 шкаласында, 100 г-ға көмірсу мен порция салмағын енгізіңіз. Бастапқы сандар — мысал.

Порция көмірсуы(г) = 100 г-дағы көмірсу × порция салмағы / 100; ГЖ = ГИ × порция көмірсуы / 100

### Шектеулер

ГЖ жеке глюкозаны не инсулин дозасын болжамайды. Порция санаттары әмбебап тәуліктік норманы бермейді. Нақты тағамға тексерілмеген орташа мәндер автоматты қойылмайды.

### Дереккөздер

- [Atkinson FS et al. International tables of glycemic index and glycemic load values 2021: a systematic review. Am J Clin Nutr, 2021](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin LSA et al. Glycemic index, glycemic load and glycemic response: An International Scientific Consensus Summit from the International Carbohydrate Quality Consortium (ICQC). Nutr Metab Cardiovasc Dis, 2015](https://pubmed.ncbi.nlm.nih.gov/26160327/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="glycemic-load" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="glycemic-load" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/glycemic-load?lang=kk&theme=auto"
  title="Порцияның гликемиялық жүктемесі" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
