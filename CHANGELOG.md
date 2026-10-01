# Changelog

## 0.3.0 — prepared source, not yet published

- Six locales throughout the SDK and dish UI: en, ru, es, uk, kk, uz.
- All 48 currently published NutriFit calculators registered as hosted widgets; nutrition remains a separate dish calculator. Total: 49 widget IDs.
- CalculatorFrame React adapter, generic WidgetFrame and framework-free adapters support the whole registry.
- Six README files with language links and six detailed guides covering the full catalog.
- Localized default iframe titles, dish CSV, retries and continuation messages.
- Matching NutriFit source adds exact hosted routes, original calculator components, theme and locale providers, attribution, methodology, limitations and PDF support.
- Public catalog PDF requests omit application credentials. White-label catalog frames omit the NutriFit PDF button; native dish PDF remains managed by the service entitlement.
- Registry definitions now expose `titles` keyed by locale instead of one `title`. The mount option `title` remains a caller-provided accessibility label.

- Official NutriFit light/dark logos are included in branded widget headers. Auto theme follows the system preference; white-label integrations retain their customer brand. Native CSS bundles the supplied PNG assets as data URLs. See NOTICE for brand attribution.

Publication, production deployment and release checks are separate. No 0.3.0 validation results are claimed here.

## 0.2.0 — published

- Initial hosted dish-calculation widget with React, JavaScript and iframe integration.
- Optional native React dish UI with server-issued sessions.
- Branded PDF/CSV, paid hosted integration and lifecycle transport.
- Independent npm consumer example.
