# Widget appearance

Open Match your website in the playground. Customize calculator background, card and field surface, main and secondary text, accent, border and corner radius. The background can be transparent.

appearance accepts background, surface, text, muted, accent, border and radius. Colors must be #RGB or #RRGGBB; background also accepts transparent. Radius is an integer from 0 to 32 px. Custom colors override the theme. Text on the accent is chosen as black or white by contrast; the integrator chooses readable contrast for other combinations.

Parent CSS cannot cross an iframe boundary: WidgetFrame style affects its container. Pass appearance or URL parameters instead. Changing appearance recreates the iframe and clears unsaved inputs. For a transparent background, match the light or dark theme to your website.

## React

```tsx
import { WidgetFrame } from '@nutrifit/widgets';

<WidgetFrame widget="tdee" locale="en" theme="light"
  appearance={{ background: '#f8fafc', surface: '#ffffff', text: '#172b25',
    muted: '#52655d', accent: '#2563eb', border: '#dce5df', radius: 16 }} />
```

## JavaScript

```html
<div data-nutrifit-widget="water" data-locale="en"
  data-background="#f8fafc" data-surface="#ffffff" data-accent="#2563eb"
  data-radius="16"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

```js
import { mountWidget } from '@nutrifit/widgets/core';
mountWidget(document.getElementById('calculator'), {
  widget: 'water', locale: 'en',
  appearance: { background: '#f8fafc', accent: '#2563eb', radius: 16 },
});
```

## iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=en&theme=light&appearanceBackground=%23f8fafc&appearanceAccent=%232563eb&appearanceRadius=16"
  title="NutriFit TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0;border-radius:16px;background:transparent"
></iframe>
```

`appearanceBackground` · `appearanceSurface` · `appearanceText` · `appearanceMuted` · `appearanceAccent` · `appearanceBorder` · `appearanceRadius`

## Native React / CSS

The native dish calculator accepts the same appearance. You can also use the CSS variables below. When using CSS directly, set readable accent text manually. Native mode requires a server-authorized integration.

```tsx
<NativeNutritionCalculator getSession={getSession} locale="en"
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

The official horizontal NutriFit logo has a transparent background. Dark mode uses a white silhouette of the same logo. Color customization does not authorize hiding logos, links or method limitations; white label requires a server entitlement. Colors do not change calculations or PDFs.

The local playground previews checkout source. External sites need a published package implementing this contract and an updated NutriFit host. The playground does not publish or deploy them.

[README](README.md) · [Demo](../../examples/consumer-site/README.md)

