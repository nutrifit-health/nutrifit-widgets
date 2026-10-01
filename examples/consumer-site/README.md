# Independent consumer site

Installs `@nutrifit/widgets@0.2.0` from npm (not a workspace link). Demonstrates the React frame, JavaScript mount API and plain iframe against the same hosted nutrition calculator.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5178. The default widget host is http://localhost:5100 for local NutriFit development. Enter https://nutrifit.health to check production after deploying the hosting routes and backend. The host must provide `/embed/nutrition-calculator` and the public nutrition API. No API responses are mocked.

Verify ingredient search, weights, calculation, totals/per-100g, PDF/CSV download, language/theme changes and mobile layout. React/JavaScript modes also display bridge events. The direct iframe deliberately has a fixed height; use the wrappers for automatic resizing. This example uses the free branded host; native white-label integration has a separate server-side authentication flow documented in `docs/NATIVE_REACT.md`.
