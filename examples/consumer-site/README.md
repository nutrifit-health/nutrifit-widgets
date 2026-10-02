# Calculator integration playground

A React playground using the widget source in this checkout. Preview all 49 branded calculators, switch between React, JavaScript and plain iframe, and copy the corresponding integration code. Source preview lets you see changes before the next npm publication; production integrations use the published package.

The complete playground interface supports **en, ru, es, uk, kk, uz**: navigation, controls, status messages, connection settings and code instructions. The selected language also applies to the embedded calculator. Light, dark and system themes use the official NutriFit logos.

## Start from the repository root

```sh
npm install --prefix examples/consumer-site
npm run demo
```

Open [the playground](http://127.0.0.1:5178/). The development server listens only on the local computer. Keep the terminal process running; stop it with Ctrl+C. From this directory, the equivalent commands are `npm install` and `npm run dev`.

The browser language is selected initially. Choose another language in the header, or open a direct link:

| Language | URL |
|---|---|
| English | http://127.0.0.1:5178/?lang=en |
| Русский | http://127.0.0.1:5178/?lang=ru |
| Español | http://127.0.0.1:5178/?lang=es |
| Українська | http://127.0.0.1:5178/?lang=uk |
| Қазақша | http://127.0.0.1:5178/?lang=kk |
| O‘zbekcha | http://127.0.0.1:5178/?lang=uz |

## Connect to NutriFit

On localhost the default host is `http://localhost:5100`. Start your NutriFit frontend separately on that port, or open Connection settings and enter an available NutriFit origin. Outside localhost, the default is `https://nutrifit.health`. The origin must be HTTP(S), without a path, credentials or query.

The host must serve `/embed/calculators/{id}`, `/embed/nutrition-calculator`, and the public JavaScript modules under `/widgets/v1/core/`. Food search, dish calculation and PDF require the corresponding backend. This example uses real hosted interfaces; it does not simulate responses or copy calculation formulas. Availability of production hosting depends on deployment of the NutriFit frontend and backend. New appearance options require an updated host and adapters; the playground does not publish or deploy them.

## Use the playground

Select a calculator, language and theme. Choose an integration mode, interact with the embedded calculator, then copy the code into your site. The code includes the selected origin; replace a localhost origin with your deployed NutriFit host before publishing a website.

Open Match your website and enable custom colors to choose background, surface, text, muted text, accent, border and a corner radius from 0 to 32 px. You can make the calculator background transparent. Colors override the selected theme; use readable text contrast. Appearance changes reload the iframe and clear its inputs. The official horizontal NutriFit logo remains visible; branding removal requires an entitled white-label integration.

React and JavaScript adapters resize the iframe and show bridge status. Ready means the interface has loaded, not that all backend operations are available. The plain iframe has a fixed height, internal scrolling and no bridge status; its height can be adjusted in the copied HTML.

The free branded host does not require a key. Native white-label integration needs a separate server-side authentication flow; no private keys belong in this playground. See [native integration](../../docs/en/NATIVE_REACT.md).

[Six-language documentation](../../README.md) · [Catalog example](../catalog.html) · [React example](../ReactExample.tsx)
