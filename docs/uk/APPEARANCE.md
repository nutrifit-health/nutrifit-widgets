# Оформлення віджетів

У демонстрації відкрийте «Оформлення під ваш сайт». Налаштуйте фон калькулятора, карток і полів, основний та другорядний текст, акцент, рамку й радіус кутів. Фон може бути прозорим.

appearance містить background, surface, text, muted, accent, border і radius. Кольори — лише #RGB або #RRGGBB; background також приймає transparent. Радіус — ціле число від 0 до 32 px. Кольори мають пріоритет над темою. Для тексту на акценті обирається чорний або білий колір за контрастом; читабельність інших поєднань обирає інтегратор.

CSS сайту не діє всередині iframe: style у WidgetFrame оформлює контейнер. Передавайте appearance або параметри URL. Зміна appearance пересоздає iframe та очищає незбережені дані. Для прозорого фону підберіть світлу або темну тему під сайт.

## React

```tsx
import { WidgetFrame } from '@nutrifit/widgets';

<WidgetFrame widget="tdee" locale="uk" theme="light"
  appearance={{ background: '#f8fafc', surface: '#ffffff', text: '#172b25',
    muted: '#52655d', accent: '#2563eb', border: '#dce5df', radius: 16 }} />
```

## JavaScript

```html
<div data-nutrifit-widget="water" data-locale="uk"
  data-background="#f8fafc" data-surface="#ffffff" data-accent="#2563eb"
  data-radius="16"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

```js
import { mountWidget } from '@nutrifit/widgets/core';
mountWidget(document.getElementById('calculator'), {
  widget: 'water', locale: 'uk',
  appearance: { background: '#f8fafc', accent: '#2563eb', radius: 16 },
});
```

## iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=uk&theme=light&appearanceBackground=%23f8fafc&appearanceAccent=%232563eb&appearanceRadius=16"
  title="NutriFit TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0;border-radius:16px;background:transparent"
></iframe>
```

`appearanceBackground` · `appearanceSurface` · `appearanceText` · `appearanceMuted` · `appearanceAccent` · `appearanceBorder` · `appearanceRadius`

## Native React / CSS

Нативний калькулятор страви приймає той самий appearance і CSS-змінні нижче. За прямого налаштування CSS задавайте контрастний текст на акценті вручну. Нативний режим потребує дозволеної сервером інтеграції.

```tsx
<NativeNutritionCalculator getSession={getSession} locale="uk"
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

Офіційний горизонтальний логотип має прозорий фон. Темна тема використовує білий силует того самого логотипа. Кольори не дозволяють приховати логотип, посилання чи обмеження методик; white label потребує серверного права доступу. Оформлення не змінює розрахунки або PDF.

Локальна демонстрація показує вихідний код checkout. Для зовнішнього сайту потрібні опублікований пакет із цим контрактом і оновлений NutriFit host. Демонстрація їх не публікує та не розгортає.

[README](README.md) · [Demo](../../examples/consumer-site/README.md)

