# Service model

## The exchange

Website owners receive a complete on-site calculator and CSV export. NutriFit
operates the catalog, calculations, translations and interface, and receives
visible attribution plus voluntary referrals. Visitors are not required to
register or leave the website to obtain their results.

Free delivery is an iframe hosted by NutriFit. The JavaScript loader and React
component are convenience adapters for that iframe. A brand-free native
calculator is not part of this public repository.

## Attribution that remains under NutriFit's control

The logo, source label and continuation link render inside the hosted document.
Embedding-site CSS cannot edit that document. No supported free setting removes
them. Branding changes are made on the NutriFit host. This controls the contents
we serve; it is not a claim that a website cannot conceal or crop an iframe.

## Proposed commercial route

The intended product flow is: account sign-in → integration subscription →
confirmed payment → active integration entitlement → domain setup and access
credentials. Stripe, verified crypto payment and an audited manual bank-transfer
grant should enable the same resource entitlement. Personal NutriFit Premium
or promotional/research access must not automatically enable commercial widgets.

The recommended first paid format is a NutriFit-hosted iframe with the customer's
branding. Native React/direct API access can follow as a separate commercial
level. The current release provides an inquiry path for domain, use case,
expected traffic, branding and support requirements; automatic billing and
credential provisioning are not implemented.

A later paid product should tie access to an integration account and server-side
entitlement, resource quotas, approved origins, credential revocation and billing
state. A browser-visible key is an integration identifier, not a secret or
proof of authorization. Domain CORS alone is not authorization either. Prefer a
short-lived, narrowly scoped widget session; permanent secret keys belong on
customer servers, not inside HTML or React. Each request needs an entitlement,
revocation and quota check, including sessions issued before a subscription
expired or was revoked.
Existing anonymous public catalog routes must not be presented as subscription
protected merely because their cross-origin browser access is restricted.

This release creates no payment plan, secret/key issuing service, entitlement
enforcement or automatic onboarding. No price or paid SLA has been invented.
The commercial contact link is an inquiry path, not checkout.

## Measuring whether the free service is worthwhile

Pilot with three real websites. Count usable integrations, successful user
tasks, continuation landings, registration intent, completed registrations and
eventual revenue against support effort and API costs.

The implemented continuation uses campaign and referring hostname, then emits
`widget_handoff` on the NutriFit destination and
`widget_registration_click` for its account CTA. `widget_calculation` covers a
calculation on that destination. Those events do not prove account creation
or payment; those outcomes must come from the existing product analytics.
No ingredients, gram values or nutrient results are analytics properties.
Downloads/stars and the presence of an iframe are not revenue evidence or
a guarantee of SEO gains.
