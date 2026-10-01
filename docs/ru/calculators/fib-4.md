# Калькулятор FIB-4 и APRI: индексы фиброза печени

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fib-4.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fib-4.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fib-4.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fib-4.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fib-4.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fib-4.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`fib-4` · [NutriFit](https://nutrifit.health/ru/calculators/fib-4)

FIB-4 и APRI по возрасту, АСТ, АЛТ и тромбоцитам: расчёт, пояснение порогов и ограничений. Для обсуждения результата со специалистом.

### Порядок использования

1. Возьмите АСТ, АЛТ и тромбоциты: Трансаминазы — из биохимии, тромбоциты — из общего анализа крови. Анализы должны быть из одного периода (в пределах 1–2 недель) и вне острого заболевания.
2. Укажите возраст и ВГН АСТ: FIB-4 зависит от возраста: после 65 лет порог низкого риска повышается до 2,0. Для APRI нужна верхняя граница нормы АСТ вашей лаборатории.
3. Действуйте по алгоритму: Низкий FIB-4 — наблюдение и коррекция факторов риска. Серая зона — эластография. Высокий — гепатолог. Это официальный путь EASL/AASLD для НАЖБП.

### Методика и формула

FIB-4 (Sterling, 2006) объединяет возраст, АСТ, АЛТ и тромбоциты. В алгоритмах оценки метаболической жировой болезни печени низкий результат помогает выделять пациентов с меньшей вероятностью продвинутого фиброза; промежуточный или высокий требует дополнительной оценки. Это не стадия фиброза и не диагноз. APRI (Wai, 2003) разработан для хронического гепатита C; его пороги нельзя автоматически переносить на другие болезни.

FIB-4 = Возраст (лет) × АСТ (Ед/л) / [ Тромбоциты (10⁹/л) × √АЛТ (Ед/л) ]
APRI = [ АСТ / ВГН АСТ ] × 100 / Тромбоциты (10⁹/л)
Пороги FIB-4: < 1,3 (< 2,0 при возрасте ≥ 65) — низкий риск; 1,3–2,67 — неопределённый; > 2,67 — высокий
Пороги APRI: < 0,5 — низкий; > 1,5 — высокая вероятность значимого фиброза

### Ограничения

FIB-4 помогает оценить вероятность продвинутого фиброза, но не подтверждает и не исключает его у каждого человека. До 35 лет точность низкая, при острой болезни индекс не интерпретируют. Тромбоцитопения другой природы и мышечные причины повышения АСТ искажают результат. Порог зависит от возраста, причины болезни и клинического контекста.

### Источники

- [Sterling R.K. et al. Development of a simple noninvasive index to predict significant fibrosis in patients with HIV/HCV coinfection. Hepatology, 2006;43(6):1317–1325](https://pubmed.ncbi.nlm.nih.gov/16729309/)
- [Wai C.T. et al. A simple noninvasive index can predict both significant fibrosis and cirrhosis in patients with chronic hepatitis C. Hepatology, 2003;38(2):518–526](https://pubmed.ncbi.nlm.nih.gov/12883497/)
- [EASL Clinical Practice Guidelines on non-invasive tests for evaluation of liver disease severity and prognosis — 2021 update. J Hepatol, 2021;75(3):659–689](https://pubmed.ncbi.nlm.nih.gov/34166721/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fib-4" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="fib-4" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fib-4?lang=ru&theme=auto"
  title="Калькулятор FIB-4 и APRI: индексы фиброза печени" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
