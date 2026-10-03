# Тағамның қоректік құндылығы калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/nutrition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/nutrition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/nutrition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/nutrition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/nutrition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/nutrition.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`nutrition`

`nutrition` үшін: ашық өнімдер немесе рецепттерді табып, граммен салмағын қосыңыз және дайын тағамның салмағын енгізіңіз. Толық тағам мен 100 г үшін есептеңіз; PDF және CSV қолжетімді. Белгісіз нутриенттер толық емес деп белгіленеді және нөлге айналмайды. Ең көбі — 50 ингредиент.

## Әдістеме және деректер

NutriFit сервері таңдалған ашық өнімдер мен рецепттердің қолжетімді нутриенттерін ингредиент массалары бойынша қосады. Дайын тағам массасына сәйкес жалпы және 100 г мәндерін береді. PDF серверде жаңадан есептейді; CSV көрсетілген нәтижені экспорттайды.

Ингредиенттің салмағын каталогта таңдалған күйінде (шикі немесе дайын), ал 100 г есебі үшін дайын тағамның салмағын көрсетіңіз. Пісіру мен сұйықтықты төгу кезіндегі нутриент шығыны есептелмейді.

## Шектеулер

50 ингредиентке дейін. Массаларды граммен енгізіңіз, дайын тағам массасы оң болуы керек. Белгісіз мәндер нөлге ауыстырылмай, толық емес деп белгіленеді. Деректер өзгеруі мүмкін, сондықтан PDF бұрынғы нәтижеден ерекшеленуі мүмкін. Бұл бағалау диагноз немесе ем тағайындау емес.

## Дереккөздер

NutriFit ашық өнімдер мен рецепттер каталогы; виджет дереккөз бен есептеу уақытын көрсетеді.

- [NutriFit](https://nutrifit.health)
- [NutriFit recipes](https://nutrifit.health/recipes)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { NutritionCalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <NutritionCalculatorFrame locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="nutrition" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/nutrition-calculator?lang=kk&theme=auto"
  title="Тағамның қоректік құндылығы калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:680px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
