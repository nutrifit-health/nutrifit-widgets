# Adding a NutriFit widget

Keep the public repository a collection of reusable adapters. Nutrition is the
first registered widget; do not add pretend calculator entries or arbitrary
iframe URLs to represent unimplemented products.

## 1. Implement the hosted capability

Implement the interface in NutriFit's private application, next to the domain
that owns the data and calculations. Reuse the canonical API contract and server
calculation; do not copy the database, formulas or private UI into this repository.
A widget can be a calculator or another explicitly public, read-only experience.

Create an exact `/embed/<name>` route with no application navigation, session
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
- an accessible default title;
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

Update the registry table, example, service scope, supported locales/themes and
any widget-specific limits. Keep MIT notices when distributing code. A public
code release does not deploy the hosting route or publish an npm package.

When the owner explicitly requests checks, cover build/types, registry resolution,
unknown IDs, multiple instances, duplicate script inclusion, root scanning,
failed mounts, idempotent teardown, React cleanup, hostile messages, resize,
loading/errors, keyboard use and mobile/light/dark layouts. Verify actual framing
and module CORS through the deployed proxy. Do not run checks automatically from
these instructions.
