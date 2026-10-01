# NutriFit Widgets

Embed NutriFit calculators and widgets with React, JavaScript or an iframe.
Maintained by **NUTRIFIT LLC**.

**Status:** source implementation 0.2.0. The npm package has not been published
and the hosting changes have not been deployed as part of this work. Production
URLs below are deployment targets. Build, typecheck and browser checks have not
been run.

## Why use it?

Give visitors a complete nutrition calculator on your website without running
a food database or calculation service. They can search public foods and
recipes, add ingredient weights, set the finished dish weight, view energy,
protein, fat and carbohydrates, and download a server-generated PDF or a CSV. Whole-dish and per-100-g
values are available. Missing nutrients stay unknown; partial totals are labeled.

No account, email, payment or visit to NutriFit is required for the free result, PDF or CSV.
English, Russian and Spanish, light/dark/automatic themes, automatic iframe
height and multiple widgets on one page are supported by the source implementation.

The free hosted interface and its PDF retain NutriFit attribution. The PDF includes
a NutriFit link and QR code; it is generated from a fresh server calculation and
does not upload or store a personal recipe. An optional link opens the
same ingredient draft in NutriFit. It does not automatically save a recipe or
post to Feed. Large drafts that exceed the transfer limit can still be calculated
and exported on the embedding site.

## Available widgets

| ID | React component | Hosted route |
| --- | --- | --- |
| `nutrition` | `NutritionCalculatorFrame` | `/embed/nutrition-calculator` |

The registry is extensible; only the nutrition calculator is currently implemented.
[Adding a widget](docs/ADDING_WIDGETS.md) explains the public and hosted changes.

## JavaScript embed

After the hosting deployment, add:

```html
<div data-nutrifit-widget="nutrition" data-locale="en" data-theme="light"
     data-campaign="recipe-blog"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

The classic loader imports the shared browser runtime, scans the document and
creates an isolated iframe. It does not load React into your page. Include the
loader more than once safely; a container is mounted only once.

Call the following after the script has loaded:

```js
await window.NutriFitWidgets.ready;
const container = document.getElementById("calculator");
const handle = await window.NutriFitWidgets.mount(container, {
  widget: "nutrition",
  locale: "en",
  theme: "auto",
  campaign: "recipe-blog",
  onEvent(event) {
    console.log(event);
  },
});

handle.destroy();
```

`mount` and `scan` are asynchronous on the loader API. Keep the handle and call
`destroy()` before removing a container in a single-page application. Repeated
`destroy()` calls are harmless and cannot remove a later mount.

For new markup:

```js
const result = await window.NutriFitWidgets.scan(container);
console.log(result.widgets, result.errors);
```

The scan includes the root container itself and its descendants. An unsupported
widget or invalid container does not prevent other containers from mounting.
`scan` returns handles and per-container errors.

## React

After the first npm release, install `@nutrifit/widgets` in your React application:

```tsx
"use client";

import { NutritionCalculatorFrame, WidgetFrame } from "@nutrifit/widgets";

export function RecipePage() {
  return <NutritionCalculatorFrame locale="en" theme="light" campaign="recipe-blog" />;
}

export function GenericWidgetSlot() {
  return <WidgetFrame widget="nutrition" locale="en" />;
}
```

React 18.2+ or 19 must be installed by the React consumer. No stylesheet import
is needed. The generic component and the nutrition convenience component share
the same iframe runtime as the JavaScript adapter. Imports are safe for SSR;
the iframe mounts on the client and is cleaned up on unmount or option changes.

| Option | Default | Purpose |
| --- | --- | --- |
| `widget` | Required on `WidgetFrame` and `mount` | A registry ID; fixed on `NutritionCalculatorFrame` |
| `locale` | `en` | `en`, `ru`, `es` |
| `theme` | `light` | `light`, `dark`, `auto` |
| `title` | Registry title | Accessible iframe title |
| `campaign` | `nutrition_calculator` on continuation | Campaign label, truncated to 80 characters |
| `hostUrl` | `https://nutrifit.health` | Explicit HTTP(S) origin for a matching staging host; no path or credentials |
| `integrationId` | — | Paid hosted integration from your account; the server decides branding and allowed domain |
| `onEvent` | — | `ready`, `calculated`, `error`; no calculation payload |
| `className`, `style` | — | React container only; cannot style the document inside the iframe |

Callbacks can change without remounting. Changing widget/host/locale/theme/title/
campaign/integrationId remounts the iframe and clears its unsaved state. `initialDraft` is not
part of the public adapter API.

## Framework-free module

After the npm release:

```js
import { mountWidget, scanWidgets, widgets } from "@nutrifit/widgets/core";

const handle = mountWidget(document.getElementById("calculator"), {
  widget: "nutrition",
  locale: "en",
});
```

Module `mountWidget` and `scanWidgets` are synchronous, unlike the loader methods
that wait for the module download. The core has no React dependency. Supported
IDs are inferred from the registry for TypeScript consumers; public types are
exported from `@nutrifit/widgets` using `import type`.

For a source checkout or a static host, import `src/core/index.js` directly using
a module script. Serve files over HTTP(S); `file:` and opaque sandbox origins
are not supported. Self-hosting adapter files does not self-host NutriFit's
private interface or backend. The calculator origin stays NutriFit unless
`hostUrl` is explicitly changed for a corresponding deployment.

## Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/nutrition-calculator?lang=en&theme=light"
  title="NutriFit nutrition calculator"
  loading="lazy"
  referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:680px;border:0"
></iframe>
```

This uses fixed height and internal scrolling. Keep download permission for PDF and CSV
and popup permissions for voluntary continuation. Use the loader or React for
automatic height.

## Events and browser policies

Mounted containers dispatch `nutrifit:ready`, `nutrifit:calculated` and
`nutrifit:error`. Lifecycle event detail contains `instanceId` and `widget` only.
A scan-time mount error contains `{ code: "mount_failed" }` instead. Loader network
failures emit `nutrifit:loader-error` on `window` with `{ code: "load_failed" }`;
`ready`, `mount` and `scan` also reject on a failed module load.

The ready event means the interface mounted; it does not prove backend availability.
Messages are accepted only from the configured origin and iframe window, with a
matching instance, protocol version and validated shape. Resize heights are
finite and bounded. Ingredients and nutrient results are never posted to the host.

The embedding site's CSP must allow `frame-src https://nutrifit.health` and,
for the loader, `script-src https://nutrifit.health`. Hosts serving adapter modules
must return JavaScript MIME types and permit CORS module loading. The versioned
asset directory must be deployed together: `embed.js`, `core/*.js` and `LICENSE`.
Copying only `embed.js` is insufficient.

The embedded calculator does not bootstrap the user's NutriFit session, store a
local draft, set language cookies or load analytics SDKs. Only a voluntary
continuation transfers the draft in a URL fragment. The NutriFit destination
removes that fragment before loading analytics. Ingredient values and results
are not analytics properties; campaign and source hostname are used for attribution.

## License and hosted service

Copyright (c) 2026 **NUTRIFIT LLC**. This repository's adapter code is licensed
under the standard [MIT License](LICENSE). Retain its copyright and permission
notice when distributing copies or substantial portions. The license permits
modifying and redistributing the adapter code.

This repository includes the native calculator UI and transport, together with
iframe adapters. It does not distribute NutriFit's backend or food catalog.
Its code license does not grant a hosted-service quota,
white-label service entitlement or rights to NutriFit trademarks. Hosted service
availability and limits are managed separately. No SLA is offered in this release.
The served free iframe retains its attribution; embedding-site CSS cannot edit
its document, although a site can visually crop or cover a frame.

The companion NutriFit application contains account onboarding, configured Stripe
subscriptions, prepaid purchases from the existing wallet, audited bank-transfer
activation, DNS verification, key rotation, revocation and monthly quotas.
These server changes require a coordinated deployment. Prices are not invented
by this repository: without configured plans, commercial purchase is unavailable.
Personal NutriFit Premium does not grant widget rights. See
[SERVICE_MODEL.md](SERVICE_MODEL.md), [native React setup](docs/NATIVE_REACT.md) or
[contact NUTRIFIT LLC](mailto:office@nutrifit.company?subject=NutriFit%20widget%20integration).

## Paid white label and native React

After the service is configured and deployed, sign in at
`https://nutrifit.health/widgets/integrations`, obtain a widget plan, add an exact
HTTPS origin and publish the DNS TXT challenge shown in your account. Verify the
domain before embedding. A white-label plan changes the hosted UI and PDF to
your configured brand and removes the NutriFit continuation link.

For hosted white label, pass `integrationId` to either React frame component or
`mountWidget`, add `data-integration-id` to the loader container, or use the iframe
code from your account. The ID is public. There is no free `hideLogo` option.

For a native component rendered in your page:

```tsx
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function Calculator() {
  return <NativeNutritionCalculator locale="en" theme="light"
    getSession={async (signal) => {
      const response = await fetch('/api/nutrifit-session', { method: 'POST', signal });
      if (!response.ok) throw new Error('Widget access unavailable');
      return response.json();
    }} />;
}
```

Your server exchanges a secret key for a five-minute session. Never put that key
in React props, HTML, public environment variables or a browser request.
[The complete integration guide](docs/NATIVE_REACT.md) includes the server side,
failure handling, quotas and domain limitations. Native sessions require a plan
with native access; the MIT license applies to UI code, not free service usage.

## Development

The source repository is independent of the private application. When nested
inside that checkout it lives at `apps/widgets/`, excluded from parent Git and
the parent workspace. It has its own Git/main and remote.

```text
src/core/                 Registry, options, postMessage, mount/scan and types
src/react/                Generic React adapter and React props
src/native/               Native nutrition UI, styles and session transport
src/widgets/nutrition/    Nutrition convenience component
src/browser/types.ts     Asynchronous loader API types
src/embed.js              Classic script bootstrap
examples/                 HTML and React integrations
docs/ADDING_WIDGETS.md    Extension and hosting contract
```

The browser runtime is JavaScript with JSDoc references to central TypeScript
types. This allows the same source to run directly in a browser and be consumed
by the React build, without a second manually maintained transport implementation.

When explicitly authorized to install/build/check:

```sh
npm install
npm run typecheck
npm run build
```

Build emits the iframe React bundle, native React bundle/CSS, browser modules,
loader and TypeScript declarations
into `dist/`. `prepublishOnly` builds before npm publication; the npm scope must
be accessible to the publisher. Build/check scripts are documentation, not a
claim that checks ran. The host must deploy corresponding private UI/routes and
adapter assets before the examples can work against production.

Examples: [HTML](examples/basic.html), [React](examples/ReactExample.tsx).
References: [MIT](https://opensource.org/license/mit),
[iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe),
[postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).
