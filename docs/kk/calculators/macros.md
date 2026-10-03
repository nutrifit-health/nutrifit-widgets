# Авторлық макронутриент жоспарлағышы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/macros.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/macros.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`macros` · [NutriFit](https://nutrifit.health/kk/calculators/macros)

Ақуыз: азайтуға 1,8–2,2 г/кг, сақтауға 1,4–1,8, қосуға 1,8–2,4; май 0,8–1,2 г/кг. Орта мәндер қолданылады; көмірсу — 4/9/4 ккал/г бойынша қалған калория.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Ақуыз: азайтуға 1,8–2,2 г/кг, сақтауға 1,4–1,8, қосуға 1,8–2,4; май 0,8–1,2 г/кг. Орта мәндер қолданылады; көмірсу — 4/9/4 ккал/г бойынша қалған калория.
2. Параметрлерді нақтылаңыз: Ақуыз: азайтуға 1,8–2,2 г/кг, сақтауға 1,4–1,8, қосуға 1,8–2,4; май 0,8–1,2 г/кг. Орта мәндер қолданылады; көмірсу — 4/9/4 ккал/г бойынша қалған калория.
3. Нәтижені оқыңыз: Бұл авторлық бөлу, ISSN нақты нормасы не майдың физиологиялық минимумы емес. Ақуыз бен май калориядан асса, толық жоспар берілмейді. Ересектерге май AMDR 20–35% — бөлек бағдар, жеке тағайындау емес.

### Әдіс пен формула

Ақуыз: азайтуға 1,8–2,2 г/кг, сақтауға 1,4–1,8, қосуға 1,8–2,4; май 0,8–1,2 г/кг. Орта мәндер қолданылады; көмірсу — 4/9/4 ккал/г бойынша қалған калория.

Ақуыз(г) = салмақ × мақсат коэффициенті; Май(г) = салмақ × 0,8…1,2; Көмірсу(г) = (калориялық − ақуыз × 4 − май × 9) / 4

### Шектеулер

Бұл авторлық бөлу, ISSN нақты нормасы не майдың физиологиялық минимумы емес. Ақуыз бен май калориядан асса, толық жоспар берілмейді. Ересектерге май AMDR 20–35% — бөлек бағдар, жеке тағайындау емес.

### Дереккөздер

- [Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids, 2005 (AMDR)](https://nap.nationalacademies.org/catalog/10490)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="macros" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="macros" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/macros?lang=kk&theme=auto"
  title="Авторлық макронутриент жоспарлағышы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
