# Casey Butt антропометриялық моделі

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/muscle-potential.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/muscle-potential.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`muscle-potential` · [NutriFit](https://nutrifit.health/kk/calculators/muscle-potential)

Бой, білек, тобық пен болжамды май бойынша масса және айналымның эвристикалық бағасы. Бастапқы айналымдар майы шамамен 8–10% ер бодибилдерлерді сипаттайды. Berkhan: бөлек бағдар — бой (см) − 100 кг.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Бой, білек, тобық пен болжамды май бойынша масса және айналымның эвристикалық бағасы. Бастапқы айналымдар майы шамамен 8–10% ер бодибилдерлерді сипаттайды. Berkhan: бөлек бағдар — бой (см) − 100 кг.
2. Параметрлерді нақтылаңыз: Max LBM = Бой^1,5 × [sqrt(Білек)/22,6670 + sqrt(Тобық)/17,0104] × [(Май%/224) + 1]; Беркханның жарыс салмағы (~5% май) = Бой (см) − 100.
3. Нәтижені оқыңыз: Ерлер үлгісі әйелдер нормасын негіздемейді. Модель генетиканы өлшемейді, бұлшықет шегін дәлелдемейді, мерзімді болжамайды. Таңдалған май — жорамал, ұсынылған мақсат емес.

### Әдіс пен формула

Бой, білек, тобық пен болжамды май бойынша масса және айналымның эвристикалық бағасы. Бастапқы айналымдар майы шамамен 8–10% ер бодибилдерлерді сипаттайды. Berkhan: бөлек бағдар — бой (см) − 100 кг.

Max LBM = Бой^1,5 × [sqrt(Білек)/22,6670 + sqrt(Тобық)/17,0104] × [(Май%/224) + 1]; Беркханның жарыс салмағы (~5% май) = Бой (см) − 100.

### Шектеулер

Ерлер үлгісі әйелдер нормасын негіздемейді. Модель генетиканы өлшемейді, бұлшықет шегін дәлелдемейді, мерзімді болжамайды. Таңдалған май — жорамал, ұсынылған мақсат емес.

### Дереккөздер

- [Casey Butt. Your Maximum Muscular Bodyweight and Measurements. Авторский текст, архивная копия.](https://forum.steelfactor.ru/index.php?app=core&attach_id=540052&module=attach&section=attach)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri EM et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995](https://pubmed.ncbi.nlm.nih.gov/7496846/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="muscle-potential" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="muscle-potential" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/muscle-potential?lang=kk&theme=auto"
  title="Casey Butt антропометриялық моделі" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
