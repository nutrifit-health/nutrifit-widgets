// Разместите как app/api/nutrifit-session/route.ts на сервере своего сайта.
// Ограничьте частоту запросов к этому маршруту на reverse proxy.
export async function POST(request: Request): Promise<Response> {
  const key = process.env.NUTRIFIT_WIDGET_KEY;
  const origin = process.env.NUTRIFIT_SITE_ORIGIN;
  const headers = { 'Cache-Control': 'private, no-store', 'Content-Type': 'application/json' };
  if (!key || !origin) return new Response('{"error":"unavailable"}', { status: 503, headers });
  if (request.headers.get('Origin') !== origin) return new Response('{"error":"forbidden"}', { status: 403, headers });
  try {
    const upstream = await fetch('https://api.nutrifit.health/api/v2/widget-runtime/session', {
      method: 'POST', cache: 'no-store', signal: AbortSignal.timeout(8000),
      headers: { 'Content-Type': 'application/json', 'X-NutriFit-Key': key },
      body: JSON.stringify({ origin }),
    });
    if (!upstream.ok) return new Response('{"error":"widget_access_unavailable"}', { status: upstream.status, headers });
    return new Response(await upstream.text(), { status: 200, headers });
  } catch {
    return new Response('{"error":"upstream_unavailable"}', { status: 503, headers });
  }
}
