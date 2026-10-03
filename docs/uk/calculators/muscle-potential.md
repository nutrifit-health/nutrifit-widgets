# Антропометрична модель Casey Butt

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/muscle-potential.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/muscle-potential.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`muscle-potential` · [NutriFit](https://nutrifit.health/uk/calculators/muscle-potential)

Евристична оцінка маси й обхватів за зростом, зап’ястям, щиколоткою та припущенням жиру. Авторські обхвати описують чоловіків-бодибілдерів за приблизно 8–10% жиру. Berkhan: окремий орієнтир зріст (см) − 100 кг.

### Порядок використання

1. Введіть вихідні дані: Евристична оцінка маси й обхватів за зростом, зап’ястям, щиколоткою та припущенням жиру. Авторські обхвати описують чоловіків-бодибілдерів за приблизно 8–10% жиру. Berkhan: окремий орієнтир зріст (см) − 100 кг.
2. Уточніть параметри: Max LBM = Зріст^1,5 × [sqrt(Зап'ястя)/22,6670 + sqrt(Щиколотка)/17,0104] × [(% Жиру/224) + 1]; Вага Беркхана (~5% жиру) = Зріст (см) − 100.
3. Прочитайте результат: Чоловіча вибірка не обґрунтовує жіночі норми. Модель не вимірює генетику, не доводить межу росту м’язів і не прогнозує термін. Заданий жир — припущення, не рекомендована ціль.

### Методика і формула

Евристична оцінка маси й обхватів за зростом, зап’ястям, щиколоткою та припущенням жиру. Авторські обхвати описують чоловіків-бодибілдерів за приблизно 8–10% жиру. Berkhan: окремий орієнтир зріст (см) − 100 кг.

Max LBM = Зріст^1,5 × [sqrt(Зап'ястя)/22,6670 + sqrt(Щиколотка)/17,0104] × [(% Жиру/224) + 1]; Вага Беркхана (~5% жиру) = Зріст (см) − 100.

### Обмеження

Чоловіча вибірка не обґрунтовує жіночі норми. Модель не вимірює генетику, не доводить межу росту м’язів і не прогнозує термін. Заданий жир — припущення, не рекомендована ціль.

### Джерела

- [Casey Butt. Your Maximum Muscular Bodyweight and Measurements. Авторский текст, архивная копия.](https://forum.steelfactor.ru/index.php?app=core&attach_id=540052&module=attach&section=attach)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri EM et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995](https://pubmed.ncbi.nlm.nih.gov/7496846/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="muscle-potential" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="muscle-potential" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/muscle-potential?lang=uk&theme=auto"
  title="Антропометрична модель Casey Butt" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
