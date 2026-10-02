# Оформление виджетов

В витрине откройте «Оформление под ваш сайт». Можно задать фон калькулятора, фон карточек и полей, основной и вторичный текст, акцент, рамку и радиус углов. Фон может быть прозрачным.

Параметры appearance — background, surface, text, muted, accent, border и radius. Цвета принимают только #RGB или #RRGGBB; background также принимает transparent. Радиус — целое число от 0 до 32 px. Цвета имеют приоритет над темой. Для текста на акценте выбирается чёрный или белый цвет по контрасту; читаемость остальных сочетаний выбирает интегратор.

CSS сайта не проходит внутрь iframe: style у WidgetFrame оформляет контейнер. Передавайте appearance либо параметры URL. Изменение appearance пересоздаёт iframe и очищает несохранённые данные. Для прозрачного фона светлую или тёмную тему подбирайте под фон сайта.

## React

```tsx
import { WidgetFrame } from '@nutrifit/widgets';

<WidgetFrame widget="tdee" locale="ru" theme="light"
  appearance={{ background: '#f8fafc', surface: '#ffffff', text: '#172b25',
    muted: '#52655d', accent: '#2563eb', border: '#dce5df', radius: 16 }} />
```

## JavaScript

```html
<div data-nutrifit-widget="water" data-locale="ru"
  data-background="#f8fafc" data-surface="#ffffff" data-accent="#2563eb"
  data-radius="16"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

```js
import { mountWidget } from '@nutrifit/widgets/core';
mountWidget(document.getElementById('calculator'), {
  widget: 'water', locale: 'ru',
  appearance: { background: '#f8fafc', accent: '#2563eb', radius: 16 },
});
```

## iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=ru&theme=light&appearanceBackground=%23f8fafc&appearanceAccent=%232563eb&appearanceRadius=16"
  title="NutriFit TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0;border-radius:16px;background:transparent"
></iframe>
```

`appearanceBackground` · `appearanceSurface` · `appearanceText` · `appearanceMuted` · `appearanceAccent` · `appearanceBorder` · `appearanceRadius`

## Native React / CSS

Нативный калькулятор блюда принимает тот же appearance. Его оформление также доступно через CSS-переменные ниже. При прямой настройке CSS задавайте контрастный цвет надписей на акценте вручную. Нативный режим требует разрешённой сервером интеграции.

```tsx
<NativeNutritionCalculator getSession={getSession} locale="ru"
  appearance={{ background: 'transparent', accent: '#2563eb', radius: 16 }}
  className="website-calculator" />
```

```css
.website-calculator {
  --nutrifit-background: transparent;
  --nutrifit-surface: #ffffff;
  --nutrifit-text: #172b25;
  --nutrifit-muted: #52655d;
  --nutrifit-accent: #2563eb;
  --nutrifit-accent-text: #ffffff;
  --nutrifit-border: #dce5df;
  --nutrifit-radius: 16px;
}
```

Официальный горизонтальный логотип NutriFit сохраняет прозрачный фон. В тёмной теме используется белая версия того же силуэта. Настройка цветов не даёт права скрывать логотип, ссылки или ограничения методик; white label требует серверного entitlement. Цвета не меняют расчёты или PDF.

Локальная витрина показывает исходники checkout. Для внешнего сайта нужны опубликованный пакет с этим контрактом и обновлённый NutriFit host. Витрина не выполняет публикацию или deployment.

[README](README.md) · [Demo](../../examples/consumer-site/README.md)

