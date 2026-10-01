# Нативті React интеграциясы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← Қазақша](README.md)


Тегін виджеттер NutriFit бренді мен ерікті сілтемелерді сақтайды. White label үшін бөлек бапталған тариф, интеграция және расталған нақты HTTPS домені қажет; жеке Premium оны қамтымайды. Каталог виджеттері клиенттің расталған брендін көрсете алады; бұл режимде NutriFit PDF батырмасы болмайды. Ақылы тағам калькуляторы клиент бренді бар PDF/CSV ұсынады.

`@nutrifit/widgets/native` ішіндегі `NativeNutritionCalculator` тағам калькуляторын бетіңізде тікелей көрсетеді. `@nutrifit/widgets/native.css` қосыңыз. Қысқа сессияны серверіңіз береді; тұрақты кілтті тек серверде сақтаңыз. Басқа калькуляторлар нативті DOM компоненттері емес, React iframe қолданады. Жергілікті формулалар тағам API квотасын жұмсамайды; тағам есебі мен оның PDF файлы жұмсайды.

```tsx
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function NativeCalculator() {
  return <NativeNutritionCalculator locale="kk" getSession={async (signal) => {
    const response = await fetch('/api/nutrifit-session', { method: 'POST', signal });
    if (!response.ok) throw new Error('Widget session unavailable');
    return response.json();
  }} />;
}
```

Интеграциялар кабинетінде нативті қолжетімділігі бар бапталған тарифті белсендіріңіз, нақты HTTPS origin қосыңыз, DNS TXT жазбасын жариялап, доменді растаңыз және сервер кілтін шығарыңыз. `NUTRIFIT_WIDGET_KEY` және `NUTRIFIT_SITE_ORIGIN` мәндерін тек серверде сақтаңыз. Төмендегі делдал кілтті бес минуттық сессияға ауыстырып, getSession функциясына толық envelope қайтарады. Келушілерге қолжетімділік пен сұрау жиілігін шектеңіз; кілт пен сессияны логқа жазбаңыз.

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

[Native API](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/NATIVE_REACT.md) · [Service](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=kk)


Серверлік кілт пен бес минуттық браузер сессиясын қолданыңыз. Толық API envelope нысанын getSession ішіне қайтарыңыз, кілтті браузерге бермеңіз және broker жиілігін шектеңіз. Кілтті ауыстыру, интеграцияны өшіру, қолжетімділік не квотаның бітуі сұрауды тоқтатуы мүмкін; native анонимді API-ға ауыспайды. Есептеу мен PDF операция жұмсайды; іздеу жиілігі шектелген, CSV жергілікті. native.css бір рет импортталып, img-src ішінде data:, connect-src ішінде apiOrigin API рұқсат етілуі керек.
