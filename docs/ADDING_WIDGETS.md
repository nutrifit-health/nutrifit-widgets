# Adding a NutriFit widget

Keep the public repository a collection of reusable adapters and optional native UIs. Nutrition and all 48 published catalog calculators are registered; do not add pretend calculator entries or arbitrary
iframe URLs to represent unimplemented products.

## 1. Implement the hosted capability

Implement the interface in NutriFit's private application, next to the domain
that owns the data and calculations. Reuse the canonical API contract and server
calculation; do not copy the database, server implementation or private account UI into this repository.
A widget can be a calculator or another explicitly public, read-only experience.

Create an exact `/embed/<name>` route (catalog calculators use `/embed/calculators/<slug>`) with no application navigation, session
restoration, cookie writes or embedded analytics. Reuse the private `WidgetHost`
lifecycle bridge. Validate its `parentOrigin`, instance and supported options.
Allow framing only for this exact route in both application and reverse-proxy
policy. Do not relax framing for all application pages or `/embed/*`.

Keep useful results on the embedding site. Retain the served free attribution and
make continuation optional. Review any new data payload separately; the lifecycle
protocol has no data-export capability.

## 2. Register the public adapter

Add a frozen definition to `src/core/registry.js`:

- a stable, descriptive key;
- the exact hosted path;
- accessible default titles for all six WidgetLocale codes;
- an initial iframe height between 100 and 10000 pixels.

`WidgetId` is inferred from registry keys. Generic `WidgetFrame`, `mountWidget`,
loader `mount` and `data-nutrifit-widget` scanning then use the same definition.
Do not add widget-specific routing conditions to the loader or duplicate message
listeners in a new React component.

If a named component is useful, place a thin `WidgetFrame` wrapper under
`src/widgets/<name>/` and export it from `src/index.ts`. Its props belong in a
`types.ts` file. Nutrition demonstrates this pattern. Do not preserve replaced
implementations or obsolete public aliases.

## 3. Preserve the protocol

Host-to-parent messages use:

```json
{
  "type": "nutrifit:widget",
  "version": 1,
  "instanceId": "the-instance-from-the-query",
  "event": "ready"
}
```

Other events are `calculated`, `error` and `resize`. Resize includes finite
`height` from 100 to 10000. Post only to the validated exact parent origin. The
adapter validates origin, source, instance, version and message shape.

For a non-calculator widget, emit `ready` and `error` as relevant; do not use
`calculated` for an unrelated action. A new event needs an explicit protocol
change in core types/parser and both public documentation and private host.
There is no generic payload, access token or result forwarding.

One container owns one instance. An already mounted container returns its current
handle; changing its dataset does not reconfigure it. Destroy it before remounting
with new options. React handles option changes by destroying and remounting.

## 4. Distribute source assets together

The classic loader dynamically imports `./core/index.js` relative to its own URL.
All `.js` files in `src/core`, `src/embed.js` and `LICENSE` are the source assets
for the hosted versioned directory. They do not require compilation. Deployment
copies those source assets into the private application's public directory.
No private build may depend on the ignored `apps/widgets` checkout existing.

The npm build also bundles the React adapter and emits declarations. Browser
modules need JavaScript MIME types and CORS headers when loaded from another
site. The source loader always targets NutriFit by default, even if its assets
are self-hosted; only an explicit `hostUrl` changes the iframe origin.

## 5. Document and release the capability

For an optional native UI, place its component and UI models in a separate module
under `src/native/`; keep API payloads as `unknown` at this external package boundary
and narrow them into UI models. The private NutriFit applications continue to use
their canonical API contract. Add a separate package export/build entry so iframe
consumers do not download native UI code. Reuse the session transport only when
the new widget's explicit server contract and paid scope support it. Do not assume
that the nutrition runtime authorizes other resources.

The initial native nutrition UI was extracted from the hosted calculator. The
host keeps a source snapshot because the public checkout is intentionally outside
its workspace; changes to shared nutrition UI behavior must update both copies in
one task. Changes to iframe core must likewise update hosted source assets. A
future published dependency can replace this copying after an authorized release.

Update the registry table, example, service scope, supported locales/themes and
any widget-specific limits. Keep MIT notices when distributing code. A public
code release does not deploy the hosting route or publish an npm package.

When the owner explicitly requests checks, cover build/types, registry resolution,
unknown IDs, multiple instances, duplicate script inclusion, root scanning,
failed mounts, idempotent teardown, React cleanup, hostile messages, resize,
loading/errors, keyboard use and mobile/light/dark layouts. Verify actual framing
and module CORS through the deployed proxy. Do not run checks automatically from
these instructions.

## Catalog calculator releases

The canonical published catalog belongs to NutriFit. Add the implemented slug to the component map, exact hosted path allowlist and public core registry in the same change. A formula name in the private type union is not evidence of a published calculator: only CALCULATOR_CONFIGS and an implemented public page qualify. Reuse that component and its six-language labels; do not copy the private implementation into the public adapter repository. Update the six README files and six CALCULATORS guides. CalculatorFrame handles every catalog slug. NativeNutritionCalculator remains a separate native dish-calculation capability.

The six-language README guides explain installation and usage. Publication of a package version and deployment of its hosted routes are separate steps; mark both accurately. No build, test or browser check is automatically authorized by this guide.
