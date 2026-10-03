# Үшсайыс коэффициенттері DOTS, Wilks және IPF GL

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/powerlifting-coefficients.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/powerlifting-coefficients.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/kk/calculators/powerlifting-coefficients)

Өлшеудегі салмақ пен сәтті отырып-тұру, жатып сығымдау және тартудың ең жақсы нәтижелерінің қосындысын килограммен енгізіңіз. DOTS, классикалық Wilks және классикалық үшсайысқа IPF GL 2020.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Өлшеудегі салмақ пен сәтті отырып-тұру, жатып сығымдау және тартудың ең жақсы нәтижелерінің қосындысын килограммен енгізіңіз. DOTS, классикалық Wilks және классикалық үшсайысқа IPF GL 2020. DOTS коэффициентінің салмағы ерлерде 40–210 кг, әйелдерде 40–150 кг шегімен есептеледі; шектен тыс шеткі салмақ қолданылады.
2. Параметрлерді нақтылаңыз: DOTS: Коэффициент = 500 / (A×Салмақ^4 + B×Салмақ^3 + C×Салмақ^2 + D×Салмақ + E); DOTS ұпайы = Сома (кг) × Коэффициент; IPF GL Points: 100 × Сома / (A − B × e^(−C × Салмақ)); Wilks: 5-дәрежелі көпмүшелік.
3. Нәтижені оқыңыз: Бұл әртүрлі салыстыру ұпайлары, әмбебап разряд емес. Осы IPF GL жеке сығымдауға не жабдықталған үшсайысқа арналмаған. Бірдей дисциплинаны салыстырыңыз; жас түзетулері жоқ.

### Әдіс пен формула

Өлшеудегі салмақ пен сәтті отырып-тұру, жатып сығымдау және тартудың ең жақсы нәтижелерінің қосындысын килограммен енгізіңіз. DOTS, классикалық Wilks және классикалық үшсайысқа IPF GL 2020. DOTS коэффициентінің салмағы ерлерде 40–210 кг, әйелдерде 40–150 кг шегімен есептеледі; шектен тыс шеткі салмақ қолданылады.

DOTS: Коэффициент = 500 / (A×Салмақ^4 + B×Салмақ^3 + C×Салмақ^2 + D×Салмақ + E); DOTS ұпайы = Сома (кг) × Коэффициент; IPF GL Points: 100 × Сома / (A − B × e^(−C × Салмақ)); Wilks: 5-дәрежелі көпмүшелік.

### Шектеулер

Бұл әртүрлі салыстыру ұпайлары, әмбебап разряд емес. Осы IPF GL жеке сығымдауға не жабдықталған үшсайысқа арналмаған. Бірдей дисциплинаны салыстырыңыз; жас түзетулері жоқ.

### Дереккөздер

- [OpenPowerlifting. Reference DOTS implementation and attribution to Tim Konertz.](https://gitlab.com/openpowerlifting/opl-data/blob/main/crates/coefficients/src/dots.rs)
- [Wilks R. The Wilks Formula for Powerlifting. Australian Powerlifting Federation, 1997](https://www.powerlifting.sport/)
- [International Powerlifting Federation. IPF GL Points Formula for Classic and Equipped Powerlifting, 2020](https://www.powerlifting.sport/rules/codes/info/ipf-formula)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="powerlifting-coefficients" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="powerlifting-coefficients" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/powerlifting-coefficients?lang=kk&theme=auto"
  title="Үшсайыс коэффициенттері DOTS, Wilks және IPF GL" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
