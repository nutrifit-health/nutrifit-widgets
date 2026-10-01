# Нативна інтеграція React

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← Українська](README.md)


Безкоштовні віджети зберігають бренд NutriFit та добровільні посилання. White label потребує окремого налаштованого тарифу, інтеграції та підтвердженого точного HTTPS-домену; особистий Premium його не включає. Віджети каталогу можуть показувати підтверджений бренд клієнта; кнопка фірмового PDF NutriFit у цьому режимі відсутня. Платний калькулятор страви підтримує сервісні PDF/CSV з брендом клієнта.

`NativeNutritionCalculator` із `@nutrifit/widgets/native` показує калькулятор страви прямо на вашій сторінці. Підключіть `@nutrifit/widgets/native.css`. Коротку сесію надає ваш сервер; постійний ключ зберігайте лише на сервері. Решта калькуляторів використовує React iframe, а не нативні DOM-компоненти. Локальні формули не витрачають квоту API харчування; розрахунок страви та її PDF витрачають.

```tsx
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function NativeCalculator() {
  return <NativeNutritionCalculator locale="uk" getSession={async (signal) => {
    const response = await fetch('/api/nutrifit-session', { method: 'POST', signal });
    if (!response.ok) throw new Error('Widget session unavailable');
    return response.json();
  }} />;
}
```

У кабінеті інтеграцій активуйте налаштований тариф із нативним доступом, додайте точний HTTPS origin, опублікуйте TXT-запис DNS, підтвердьте домен і випустіть серверний ключ. Зберігайте `NUTRIFIT_WIDGET_KEY` та `NUTRIFIT_SITE_ORIGIN` лише на сервері. Посередник нижче обмінює ключ на п’ятихвилинну сесію та повертає повний envelope у getSession. Обмежуйте доступ відвідувачів і частоту запитів; не записуйте ключ або сесію в логи.

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

[Native API](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/NATIVE_REACT.md) · [Service](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=uk)


Використовуйте серверний ключ і браузерну сесію на п’ять хвилин. Передавайте повний API envelope у getSession, не показуйте ключ браузеру й обмежуйте broker. Ротація, вимкнення інтеграції, завершення доступу або квоти можуть заборонити запит; native не переходить на анонімний API. Розрахунок і PDF витрачають операції; пошук має обмеження частоти, CSV локальний. Імпортуйте native.css один раз, дозвольте data: в img-src та API з apiOrigin у connect-src.
