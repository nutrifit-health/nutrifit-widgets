# Калькулятор нормы клетчатки (пищевых волокон)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fiber-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fiber-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`fiber-intake` · [NutriFit](https://nutrifit.health/ru/calculators/fiber-intake)

Определяет суточную потребность в растворимых и нерастворимых пищевых волокнах для микробиоты кишечника, нормализации холестерина и моторики ЖКТ.

### Порядок использования

1. Добавляйте овощи в каждый приём пищи: Съедайте не менее 400–500 г некрахмалистых овощей и зелени в день (правило тарелки Гарварда).
2. Замените очищенные крупы на цельнозерновые: Выбирайте гречку, киноа, овсяные хлопья долгой варки, перловку и цельнозерновой хлеб вместо белого риса и муки высшего сорта.
3. Подключите семена и бобовые: 1 столовая ложка семян чиа или льна, а также порция чечевицы дают сразу 8–12 г качественной клетчатки.

### Методика и формула

Основан на стандартах ВОЗ и Европейского агентства по безопасности продуктов питания (EFSA: 14 г клетчатки на 1000 ккал рациона, минимум 25 г для женщин и 38 г для мужчин). Калькулятор рассчитывает водный баланс (+40 мл воды на грамм волокон) и фильтрует рекомендации при СРК.

Целевая клетчатка = max(25/38 г, Калории × 0,014); Растворимая фракция ~30–35%; Нерастворимая ~65–70%; Дополнительная вода = Клетчатка (г) × 40 мл.

### Ограничения

При синдроме избыточного бактериального роста (СИБР) и обострении колита избыток ферментируемых волокон может усиливать метеоризм. Дозу клетчатки повышают плавно.

### Источники

- [EFSA Panel on Dietetic Products, Nutrition, and Allergies. Scientific Opinion on Dietary Reference Values for carbohydrates and dietary fibre. EFSA Journal, 2010;8(3):1462](https://doi.org/10.2903/j.efsa.2010.1462)
- [Reynolds A. et al. Carbohydrate quality and human health: a series of systematic reviews and meta-analyses. Lancet, 2019;393(10170):434–445](https://pubmed.ncbi.nlm.nih.gov/30638909/)
- [Stephen A.M. et al. Dietary fibre in Europe: current state of knowledge on definitions, sources, recommendations, intakes and relationships to health. Nutr Res Rev, 2017;30(2):149–190](https://pubmed.ncbi.nlm.nih.gov/28676135/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fiber-intake" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="fiber-intake" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fiber-intake?lang=ru&theme=auto"
  title="Калькулятор нормы клетчатки (пищевых волокон)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
