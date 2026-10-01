# Native React integration

This source integration requires the matching NutriFit service deployment, a
configured plan with `native: true`, a verified HTTPS domain and a server key.
The package build and TypeScript checks pass for 0.2.0. Runtime service checks
have not been run, and the matching service changes have not been deployed as
part of this package release. Review your deployment before exposing it to visitors.

## Account setup

1. Sign in to `https://nutrifit.health/widgets/integrations` and activate a plan.
2. Add your exact origin (for example `https://recipes.example.com`) and brand.
3. Publish the DNS TXT name/value shown in your account, then select Verify.
4. Issue a server key. Copy it to server-only environment variable
   `NUTRIFIT_WIDGET_KEY`. A new key invalidates the previous key and sessions.
5. Set `NUTRIFIT_SITE_ORIGIN` to the verified origin and deploy the session broker
   below on that site. Never use a `NEXT_PUBLIC_` prefix for the key.

Changing domain requires a new integration. Disabled integrations can no longer
issue or use sessions. The site count is bounded by your plan.

## Server endpoint

[Next.js example](../examples/next-session-route.ts) exposes a same-origin POST
endpoint. It exchanges the permanent key on the server using:

```http
POST https://api.nutrifit.health/api/v2/widget-runtime/session
Content-Type: application/json
X-NutriFit-Key: <server-only key>

{"origin":"https://recipes.example.com"}
```

The success envelope is `{ "ok": true, "data": { "token": "...",
"expiresAt": "...", "brandName": "...", "integrationId": "..." }, ... }`.
Forward that envelope to `getSession`. Do not unwrap it or persist tokens in local
storage. Sessions expire in five minutes and are refreshed on demand. The SDK
checks the fields it consumes; it does not import the private API package.

Restrict your broker to your own site, apply visitor rate limits at your reverse
proxy and use your application's access controls if the page is private. Origin
checking prevents ordinary cross-site browser use; it is not authentication of a
server caller. NutriFit also rate limits requests and enforces the account quota.
Never log the server key or session response.

## Client

```tsx
"use client";
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function NutritionTool() {
  return <NativeNutritionCalculator
    locale="en"
    theme="auto"
    getSession={async (signal) => {
      const response = await fetch('/api/nutrifit-session', {
        method: 'POST', credentials: 'same-origin', cache: 'no-store', signal,
      });
      if (!response.ok) throw new Error('Nutrition service unavailable');
      return response.json();
    }}
  />;
}
```

`locale` supports `en`, `ru`, `es`; theme supports `light`, `dark`, `auto`.
`apiOrigin` can target an explicitly configured staging API. Add that API to your
site's `connect-src` CSP. The component mounts on the client and shows loading,
retry and calculation/PDF error states. It sends no NutriFit login cookies.
`onCalculated` and `onError` are optional native callbacks; avoid collecting
visitors' ingredient or health information through callbacks or logs.

Unlike the iframe, native UI shares your document and styles. The `nf-` CSS prefix
limits naming collisions but does not provide iframe isolation. Import the CSS
once and apply host overrides deliberately. The default branded UI uses a
voluntary continuation; a white-label session removes NutriFit branding and that
link. Brand selection is returned by the server, not a browser entitlement flag.

## Failure and billing behavior

- Calculations and PDFs each consume one account operation. PDF recalculates from
  current server sources and may differ from an earlier result. CSV is local.
- Search is rate limited but does not consume monthly operations.
- A refused/expired/revoked session never falls back to an anonymous endpoint.
  The next explicit user operation can request a new session; metered operations
  are not automatically retried.
- Expired subscriptions and exhausted quotas need account action. A UI retry
  cannot grant additional rights. Failed computation after quota admission counts.
- Each request checks the current grant, so an unexpired session cannot prolong
  an expired or revoked entitlement. Cancelling renewal preserves the paid period.

For iframe isolation with your brand, use a paid `integrationId` with the regular
React frame or JS loader. A web component can later wrap that same loader; it is
not a separate authorization model and is not implemented in this release.
