# Integración React nativa

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← Español](README.md)


Los widgets gratuitos conservan la marca NutriFit y enlaces opcionales. La marca blanca requiere un plan de widgets configurado, una integración y un dominio HTTPS exacto verificado; Premium personal no la incluye. Los widgets del catálogo pueden mostrar la marca verificada; su botón PDF de NutriFit se omite en modo marca blanca. La calculadora de platos de pago permite PDF/CSV con la marca del cliente.

`NativeNutritionCalculator` de `@nutrifit/widgets/native` muestra la calculadora del plato dentro de tu página. Importa `@nutrifit/widgets/native.css`. Necesita una sesión breve obtenida por tu servidor; guarda la clave permanente solo en ese servidor. Las demás calculadoras utilizan adaptadores React iframe, no componentes DOM nativos. Las fórmulas locales no consumen la cuota API de nutrición; el cálculo del plato y su PDF sí.

```tsx
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function NativeCalculator() {
  return <NativeNutritionCalculator locale="es" getSession={async (signal) => {
    const response = await fetch('/api/nutrifit-session', { method: 'POST', signal });
    if (!response.ok) throw new Error('Widget session unavailable');
    return response.json();
  }} />;
}
```

En la cuenta de integraciones, activa un plan configurado con acceso nativo, añade el origen HTTPS exacto, publica el registro TXT DNS, verifica el dominio y emite una clave de servidor. Guarda `NUTRIFIT_WIDGET_KEY` y `NUTRIFIT_SITE_ORIGIN` solo en tu servidor. El intermediario siguiente intercambia la clave por una sesión de cinco minutos y devuelve el sobre completo a getSession. Aplica controles de acceso y límites de solicitudes; nunca registres la clave ni la sesión.

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

[Native API](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/NATIVE_REACT.md) · [Service](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=es)


Usa una clave solo en el servidor y una sesión del navegador de cinco minutos. Devuelve el envelope completo a getSession y limita el broker. Una clave rotada, integración desactivada, acceso vencido o cuota agotada puede rechazar solicitudes; native nunca usa el API anónimo como alternativa. Cálculo y PDF consumen operaciones; búsqueda tiene límites y CSV es local. Importa native.css una vez, permite data: en img-src y el API seleccionado por apiOrigin en connect-src.
