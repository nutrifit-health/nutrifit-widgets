# Adding widgets

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← English](README.md)

1. Implement a public hosted capability in the NutriFit application using its canonical component, API contract and data owner. Do not copy private accounts, databases or clinical instrument text into this repository.
2. Register its exact hosted path in both framing allowlists. Keep the embed free of account session restoration, cookie writes and analytics SDKs. Do not permit arbitrary /embed/* paths.
3. Add its frozen definition to src/core/registry.js with an ID, path, height and titles for all six locales. WidgetId and generic adapters use the same registry.
4. Reuse WidgetFrame for React, or add a thin named wrapper. Put types in types.ts and export the component. Native UI is a separate entry and requires its own supported service scope.
5. Preserve lifecycle origin/source/instance validation, finite resize limits and idempotent cleanup. Never send input values in postMessage. Update the private hosted core source snapshot in the same change.
6. Add a calculator page in every language folder, update each catalog and README, then publish the package and coordinate hosting deployment. The package release does not deploy the NutriFit application.

```json
{
  "type": "nutrifit:widget",
  "version": 1,
  "instanceId": "nf-instance",
  "event": "ready"
}
```

`ready` · `calculated` · `error` · `resize` (100–10000 px)

[Core](../../src/core/registry.js) · [Release](RELEASING.md)
