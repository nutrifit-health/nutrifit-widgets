# Native React integration

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← English](README.md)


Free hosted widgets retain the NutriFit brand and optional links. White label requires a separately configured widget plan, account integration and verified exact HTTPS domain. It is not included in personal Premium. Hosted catalog widgets can use the verified brand; their NutriFit PDF button is omitted in white-label mode. The paid dish calculator supports branded service PDF/CSV.

`NativeNutritionCalculator` from `@nutrifit/widgets/native` renders the dish calculator directly in your page. Import `@nutrifit/widgets/native.css`. It requires a short-lived session obtained by your server; keep the permanent key only on that server. Other catalog calculators use React iframe adapters, not native DOM components. Local catalog formulas do not use the nutrition API operation quota; dish calculation and PDF do.

```tsx
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function NativeCalculator() {
  return <NativeNutritionCalculator locale="en" getSession={async (signal) => {
    const response = await fetch('/api/nutrifit-session', { method: 'POST', signal });
    if (!response.ok) throw new Error('Widget session unavailable');
    return response.json();
  }} />;
}
```

In the integrations account, activate a configured native plan, add the exact HTTPS origin, publish the DNS TXT challenge, verify the domain and issue a server key. Store `NUTRIFIT_WIDGET_KEY` and `NUTRIFIT_SITE_ORIGIN` only on your server. The broker below exchanges the key for a five-minute session and returns the complete envelope to getSession. Apply visitor access controls and rate limits to your broker; never log the session or permanent key.

```ts
export async function POST() {
  const key = process.env.NUTRIFIT_WIDGET_KEY;
  const origin = process.env.NUTRIFIT_SITE_ORIGIN;
  if (!key || !origin) return new Response(null, { status: 503 });
  const response = await fetch('https://api.nutrifit.health/api/v2/widget-runtime/session', {
    method: 'POST', cache: 'no-store',
    headers: { 'Content-Type': 'application/json', 'X-NutriFit-Key': key },
    body: JSON.stringify({ origin }),
  });
  if (!response.ok) return new Response(null, { status: response.status });
  return new Response(await response.text(), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' },
  });
}
```

[Native API](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/NATIVE_REACT.md) · [Service](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=en)


Use a server-held key and a five-minute browser session. Return the complete API envelope to getSession, keep secrets off the browser and apply visitor rate limits to the session broker. Session rotation, disabled integrations, expired access and quota exhaustion can deny a request; native mode never falls back to the anonymous API. Calculations and PDFs consume operations; search is rate limited and CSV is local. Each request checks the current entitlement. Import native.css once; its embedded PNG assets require data: in img-src. apiOrigin selects an explicitly configured API and must be allowed by connect-src.
