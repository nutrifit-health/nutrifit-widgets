# Авторлық өзін-өзі бағалау дөңгелегі

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/health-balance-wheel.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/health-balance-wheel.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`health-balance-wheel` · [NutriFit](https://nutrifit.health/kk/calculators/health-balance-wheel)

Соңғы 14 күндегі сегіз салаға қанағаттануды 1–10 бағалаңыз. Жалпы ұпай = орташа × 10; біркелкілік = max(0, 100 − 18 × стандартты ауытқу), дөңгелектеледі.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Соңғы 14 күндегі сегіз салаға қанағаттануды 1–10 бағалаңыз. Жалпы ұпай = орташа × 10; біркелкілік = max(0, 100 − 18 × стандартты ауытқу), дөңгелектеледі.
2. Параметрлерді нақтылаңыз: Соңғы 14 күндегі сегіз салаға қанағаттануды 1–10 бағалаңыз. Жалпы ұпай = орташа × 10; біркелкілік = max(0, 100 − 18 × стандартты ауытқу), дөңгелектеледі.
3. Нәтижені оқыңыз: Бұл авторлық көрініс, валидтелген клиникалық тест не денсаулық заңы емес. Бірдей төмен бағалар жоғары біркелкілік береді, денсаулықты білдірмейді. Бастапқы мәндер мен профильдер — мысал; сегіз бағасын растаңыз.

### Әдіс пен формула

Соңғы 14 күндегі сегіз салаға қанағаттануды 1–10 бағалаңыз. Жалпы ұпай = орташа × 10; біркелкілік = max(0, 100 − 18 × стандартты ауытқу), дөңгелектеледі.

Соңғы 14 күндегі сегіз салаға қанағаттануды 1–10 бағалаңыз. Жалпы ұпай = орташа × 10; біркелкілік = max(0, 100 − 18 × стандартты ауытқу), дөңгелектеледі.

### Шектеулер

Бұл авторлық көрініс, валидтелген клиникалық тест не денсаулық заңы емес. Бірдей төмен бағалар жоғары біркелкілік береді, денсаулықты білдірмейді. Бастапқы мәндер мен профильдер — мысал; сегіз бағасын растаңыз.

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
  title="Авторлық өзін-өзі бағалау дөңгелегі" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
