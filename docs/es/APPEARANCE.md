# Diseño de los widgets

Abre Adapta el diseño a tu sitio en la demostración. Personaliza el fondo, las tarjetas y los campos, el texto principal y secundario, el acento, el borde y el radio de las esquinas. El fondo puede ser transparente.

appearance admite background, surface, text, muted, accent, border y radius. Los colores deben ser #RGB o #RRGGBB; background también admite transparent. El radio es un entero entre 0 y 32 px. Los colores tienen prioridad sobre el tema. El texto sobre el acento se elige en blanco o negro según el contraste; el integrador elige combinaciones legibles para el resto.

El CSS del sitio no entra en el iframe: style de WidgetFrame afecta a su contenedor. Usa appearance o parámetros de URL. Cambiar appearance recrea el iframe y borra los datos no guardados. Con un fondo transparente, adapta el tema claro u oscuro al sitio.

## React

```tsx
import { WidgetFrame } from '@nutrifit/widgets';

<WidgetFrame widget="tdee" locale="es" theme="light"
  appearance={{ background: '#f8fafc', surface: '#ffffff', text: '#172b25',
    muted: '#52655d', accent: '#2563eb', border: '#dce5df', radius: 16 }} />
```

## JavaScript

```html
<div data-nutrifit-widget="water" data-locale="es"
  data-background="#f8fafc" data-surface="#ffffff" data-accent="#2563eb"
  data-radius="16"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

```js
import { mountWidget } from '@nutrifit/widgets/core';
mountWidget(document.getElementById('calculator'), {
  widget: 'water', locale: 'es',
  appearance: { background: '#f8fafc', accent: '#2563eb', radius: 16 },
});
```

## iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=es&theme=light&appearanceBackground=%23f8fafc&appearanceAccent=%232563eb&appearanceRadius=16"
  title="NutriFit TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0;border-radius:16px;background:transparent"
></iframe>
```

`appearanceBackground` · `appearanceSurface` · `appearanceText` · `appearanceMuted` · `appearanceAccent` · `appearanceBorder` · `appearanceRadius`

## Native React / CSS

La calculadora nativa de platos acepta el mismo appearance. También permite las variables CSS siguientes. Si usas CSS directamente, define manualmente un texto legible sobre el acento. El modo nativo requiere una integración autorizada por el servidor.

```tsx
<NativeNutritionCalculator getSession={getSession} locale="es"
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

El logotipo horizontal oficial tiene fondo transparente. El tema oscuro usa una silueta blanca del mismo logotipo. Cambiar colores no autoriza a ocultar logotipos, enlaces o limitaciones; white label requiere permisos del servidor. Los colores no cambian cálculos ni PDF.

La demostración local muestra los archivos del checkout. Un sitio externo necesita un paquete publicado con este contrato y un servidor NutriFit actualizado. La demostración no publica ni despliega estos cambios.

[README](README.md) · [Demo](../../examples/consumer-site/README.md)

