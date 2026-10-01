# Нативная интеграция React

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← Русский](README.md)


Бесплатные виджеты сохраняют бренд NutriFit и добровольные ссылки. White label требует отдельного настроенного тарифа, интеграции аккаунта и подтверждённого точного HTTPS-домена; личный Premium его не включает. Виджеты каталога могут показывать подтверждённый бренд клиента; кнопка фирменного PDF NutriFit в таком режиме скрывается. Платный калькулятор блюда поддерживает сервисные PDF/CSV с брендом клиента.

`NativeNutritionCalculator` из `@nutrifit/widgets/native` отображает калькулятор блюда прямо в вашей странице. Подключите `@nutrifit/widgets/native.css`. Компонент получает короткую сессию через ваш сервер; постоянный ключ храните только на сервере. Остальные калькуляторы используют React iframe, а не нативные DOM-компоненты. Локальные формулы каталога не расходуют квоту API питания; расчёт блюда и его PDF расходуют.

```tsx
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function NativeCalculator() {
  return <NativeNutritionCalculator locale="ru" getSession={async (signal) => {
    const response = await fetch('/api/nutrifit-session', { method: 'POST', signal });
    if (!response.ok) throw new Error('Widget session unavailable');
    return response.json();
  }} />;
}
```

В кабинете интеграций активируйте настроенный тариф с нативным доступом, добавьте точный HTTPS origin, опубликуйте TXT-запись DNS, подтвердите домен и выпустите серверный ключ. Храните `NUTRIFIT_WIDGET_KEY` и `NUTRIFIT_SITE_ORIGIN` только на сервере. Посредник ниже обменивает ключ на пятиминутную сессию и возвращает полный envelope в getSession. Ограничивайте доступ посетителей и частоту запросов к посреднику; не записывайте ключ или сессию в логи.

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

[Native API](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/NATIVE_REACT.md) · [Service](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=ru)


Используйте серверный ключ и браузерную сессию на пять минут. Возвращайте полный API envelope в getSession, не передавайте постоянный ключ браузеру и ограничивайте запросы посетителей к session broker. Ротация ключа, отключение интеграции, окончание доступа и исчерпание квоты могут запретить запрос; native никогда не переключается на анонимный API. Расчёт и PDF расходуют операции; поиск ограничен по частоте, CSV локальный. Каждый запрос проверяет текущее право. Импортируйте native.css один раз; встроенные PNG требуют data: в img-src. apiOrigin выбирает настроенный API, который должен быть разрешён в connect-src.
