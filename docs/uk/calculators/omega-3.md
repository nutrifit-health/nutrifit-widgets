# Калькулятор Омега-3 (дозування EPA + DHA та індекс)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/omega-3.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/omega-3.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/omega-3.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/omega-3.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/omega-3.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/omega-3.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`omega-3` · [NutriFit](https://nutrifit.health/uk/calculators/omega-3)

Визначає оптимальну добову дозу ейкозапентаєнової (EPA) та докозагексаєнової (DHA) кислот під конкретні клінічні цілі та спосіб життя.

### Порядок використання

1. Дивіться на склад капсули (EPA + DHA): Напис «1000 мг риб'ячого жиру» часто приховує лише 300 мг EPA+DHA. Додавайте саме міліграми EPA та DHA на етикетці.
2. Обирайте правильну форму (rTG або TG): Реестерифіковані тригліцериди (rTG) мають найвищу біодоступність порівняно з дешевими етиловими ефірами (EE).
3. Перевіряйте індекс окиснення (TOTOX): Якісний риб'ячий жир має індекс TOTOX < 26 та сертифікат IFOS. Він не повинен мати запаху тухлої риби.

### Методика та формула

Базується на клінічних гайдлайнах GOED, Американської кардіологічної асоціації (AHA) та ISSFAL. Враховує цільове значення Омега-3 індексу мембран еритроцитів (> 8%).

Базове здоров'я: 500 мг/добу; Кардіопротекція: 1000 мг/добу; Гіпертригліцеридемія: 2000–4000 мг/добу; Вагітність: 600 мг (акцент на DHA); Депресія: 1000–2000 мг (EPA:DHA ≥ 2:1); Спорт: 1500–2000 мг.

### Обмеження

Прийом доз понад 3000–4000 мг EPA+DHA на добу потребує контролю коагулограми через антиагрегантний ефект (розрідження крові).

### Джерела

- [Harris W.S., Von Schacky C. The Omega-3 Index: a new risk factor for death from coronary heart disease? Prev Med, 2004;39(1):212–220](https://pubmed.ncbi.nlm.nih.gov/15207989/)
- [Global Organization for EPA and DHA Omega-3s (GOED). Clinical Practice Recommendations for EPA and DHA Omega-3 Intake, 2022](https://goedomega3.com/intake-recommendations)
- [Guu T.W. et al. International Society for Nutritional Psychiatry Research Practice Guidelines for Omega-3 Fatty Acids in the Treatment of Major Depressive Disorder. Psychother Psychosom, 2019;88(5):263–273](https://pubmed.ncbi.nlm.nih.gov/31480072/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="omega-3" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="omega-3" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/omega-3?lang=uk&theme=auto"
  title="Калькулятор Омега-3 (дозування EPA + DHA та індекс)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
