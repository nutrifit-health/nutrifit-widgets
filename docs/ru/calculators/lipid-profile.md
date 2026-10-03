# Липидный профиль: расчётные показатели

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lipid-profile.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lipid-profile.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lipid-profile.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lipid-profile.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lipid-profile.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lipid-profile.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`lipid-profile` · [NutriFit](https://nutrifit.health/ru/calculators/lipid-profile)

Рассчитывает LDL по Фридвальду и Сэмпсону, non-HDL, остаточный холестерин и липидные отношения.

### Порядок использования

1. Введите исходные данные: Используйте фактические значения и подходящие единицы.
2. Уточните параметры: Измените исходные предположения с учётом вашей ситуации.
3. Прочитайте результат: Учитывайте ограничения модели и не воспринимайте расчёт как измерение.

### Методика и формула

Фридвальд: LDL = общий холестерин − HDL − TG/5, всё в мг/дл, при TG <400 мг/дл. Сэмпсон (2020) применяется при TG ≤800 мг/дл; отрицательные оценки не показываются. AIP = log10(TG/HDL), обе концентрации в ммоль/л.

Фридвальд: LDL = общий холестерин − HDL − TG/5, всё в мг/дл, при TG <400 мг/дл. Сэмпсон (2020) применяется при TG ≤800 мг/дл; отрицательные оценки не показываются. AIP = log10(TG/HDL), обе концентрации в ммоль/л.

### Ограничения

Целевой LDL зависит от общего сердечно-сосудистого риска. Эти показатели не устанавливают индивидуальный риск, диагноз или необходимость лекарств. Коэффициенты и AIP показываются без универсальных категорий нормы.

### Источники

- [Friedewald WT et al. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M et al. A New Equation for Calculation of Low-Density Lipoprotein Cholesterol in Patients With Normolipidemia and/or Hypertriglyceridemia. JAMA Cardiol, 2020](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiásová M et al. The plasma parameter log (TG/HDL-C) as an atherogenic index: correlation with lipoprotein particle size and esterification rate in apoB-lipoprotein-depleted plasma (FER(HDL)). Clin Biochem, 2001](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias: lipid modification to reduce cardiovascular risk. Eur Heart J, 2020](https://pubmed.ncbi.nlm.nih.gov/31504418/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lipid-profile" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="lipid-profile" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lipid-profile?lang=ru&theme=auto"
  title="Липидный профиль: расчётные показатели" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
