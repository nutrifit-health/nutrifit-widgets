# Repository boundaries

This repository contains open-source adapters for NutriFit's hosted widgets.
It is independent of the private NutriFit application, even when checked out
inside its directory. Work on main; do not commit or publish without a request.

The public native calculator UI is MIT; paid access is enforced by NutriFit servers.
Keep API credentials, private contracts,
catalog exports and commercial entitlement logic out of this repository.
Free adapters render the hosted iframe. Paid integrationId selects server-verified branding; native React requires a short-lived session from the customer backend.

Keep TypeScript types in types.ts and import them with import type.
Use unknown for external messages; validate origin, source, instance and shape.
Source comments are written in Russian.

Do not run builds, tests, typecheck, linters, formatters, generators or browser
checks unless the user explicitly requests those checks. Reference commands in
README and scripts are not authorization to execute them.

Use src/core for the registry, browser transport and lifecycle. React and classic
script adapters must reuse it. Add only implemented widget definitions; adding
an ID does not deploy its private host. Keep the hosted copies of source browser
assets synchronized in the same change. See docs/ADDING_WIDGETS.md.

Keep the standard MIT license and NUTRIFIT LLC copyright notice intact. Never
copy company tax forms, private documents, credentials or internal source here.
