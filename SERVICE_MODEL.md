# Service model

## Value for both sides

Website owners give visitors a complete calculator, nutrition totals, PDF and CSV
without operating a food catalog or calculation server. Results stay on their
website. NutriFit receives visible attribution, branded reports and optional
referrals. No registration, payment or visit to NutriFit is required for free results.

| Format | Website owner receives | NutriFit receives |
| --- | --- | --- |
| Free iframe, JS loader or React frame | Hosted calculator, branded PDF and CSV, maintained interface | Attribution and voluntary referrals |
| Paid hosted white label | Own brand, approved origins, account quota, managed hosting | Subscription or prepaid revenue |
| Paid native React | UI inside the site's DOM, custom composition, scoped backend access | Paid use of catalog/calculation resources |

Source code is MIT, including native UI. Service access is separate. Removing a
logo from a copied React component does not bypass paid API authorization. The
existing anonymous public API remains public; this product does not pretend it
is a new subscription paywall. Paid value is branding, native integration and a
managed integration account with explicit resource limits. No SLA is promised.

## Attribution and control

The free logo, source label and continuation link are inside NutriFit's iframe.
Embedding-site CSS cannot modify that document. There is no supported free option
to remove them. A site can still crop or cover a frame; iframe hosting is not a
guarantee of permanent visual attribution or SEO backlinks.

The free PDF includes a NutriFit link and QR code. White-label UI, PDF and CSV use
the customer's configured brand. White-label continuation is disabled. PDF is a
fresh server calculation: source updates can make it differ from an earlier
on-screen result. Neither report generation nor continuation saves a recipe or
publishes to Feed automatically.

## Account and payments

The companion application's source implements sign-in → configured plan → payment
→ active widget access → domain verification → embed code or server key. It still
requires deployment and commercial configuration; this repository alone does not
activate a hosted subscription. Personal Premium gives no widget rights.

- Stripe uses a separate monthly USD price and verified payment events. Redirects
  from checkout do not grant access. Cancelling renewal preserves the paid period.
- Wallet purchases debit the existing available USD balance transactionally and
  buy one calendar month. Existing supported crypto top-ups can fund that balance;
  the widget does not collect crypto itself or equate a token with USD.
- For bank transfers, a support operator with billing permission records a
  confirmed payment reference and dates. Access is audited and can be revoked.

There are no default prices, trial, grace, automatic wallet renewal or overage.
The owner configures plan limits and prices. Failed renewal cannot extend access;
refunds and unresolved/lost disputes block the affected Stripe grant. A manual
revocation survives provider-event replays.

## Keys, domains and quotas

Each integration has one exact HTTPS origin, verified using DNS TXT. No wildcard
domains. A paid iframe uses a public integration ID with server-selected branding
and a restricted frame-ancestors policy. Its bootstrap is a publishable
capability, not cryptographic proof of the embedding visitor's identity.

Native React uses a server-held key exchanged for a five-minute browser session.
NutriFit stores hashes of opaque keys and sessions. Keys are shown once; rotation
and disablement invalidate existing sessions through the integration revision.
Each request checks expiry, origin, current integration, current paid period and
native permission. CORS/origin restrictions alone cannot authenticate non-browser
callers. Protect the customer's session endpoint against abuse too.

Quota is shared by the account across integrations and resets each UTC calendar
month. One calculation and one PDF each consume one operation; search consumes no
monthly operation but is rate limited. Failed computation after admission still
counts. There is no automatic charged retry. A lower site limit permits only the
earliest enabled integrations up to the new limit; disable an unused one to
release its slot. Usage stores counts and period, not ingredient data.

## Measuring value

Pilot with three real websites. Compare successful user tasks, voluntary visits,
registrations and resulting revenue with support effort and service cost.
Continuation emits widget_handoff, its account CTA widget_registration_click,
and destination calculations widget_calculation. They do not prove registration
or payment; those outcomes need existing product analytics. No ingredients, gram
values or nutrient results are analytics properties. Stars/downloads are not
revenue evidence and a free widget does not guarantee SEO gains.

## Catalog scope in the prepared 0.3.0 source

There are 49 widget IDs: the dish nutrition widget and all 48 published catalog calculators. All accept six languages. Catalog frames reuse existing local formulas and questionnaire scoring; only nutrition uses the managed search/calculation runtime. Catalog formula interactions do not consume its API-operation quota. Their free branded server PDF is the existing public report endpoint, separate from the nutrition runtime. In hosted white-label catalog frames this NutriFit PDF action is omitted; the dish widget continues to use entitled service branding for UI/PDF/CSV. Native DOM support is specifically NativeNutritionCalculator; the other calculators use iframe adapters.

Read the installation and full catalog documentation in [English](README.md), [Русский](docs/README.ru.md), [Español](docs/README.es.md), [Українська](docs/README.uk.md), [Қазақша](docs/README.kk.md) or [O‘zbekcha](docs/README.uz.md). Source version preparation is not publication or hosted-service availability.
