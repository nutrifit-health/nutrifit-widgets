# Nativ React integratsiyasi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← O‘zbekcha](README.md)


Bepul vidjetlar NutriFit brendi va ixtiyoriy havolalarni saqlaydi. White label uchun alohida sozlangan tarif, integratsiya va tasdiqlangan aniq HTTPS domeni kerak; shaxsiy Premium buni qamramaydi. Katalog vidjetlari mijozning tasdiqlangan brendini ko‘rsata oladi; bu rejimda NutriFit PDF tugmasi bo‘lmaydi. Pullik taom kalkulyatori mijoz brendli PDF/CSV taqdim etadi.

`@nutrifit/widgets/native` ichidagi `NativeNutritionCalculator` taom kalkulyatorini sahifangizda bevosita ko‘rsatadi. `@nutrifit/widgets/native.css` ni ulang. Qisqa seansni serveringiz beradi; doimiy kalitni faqat serverda saqlang. Qolgan kalkulyatorlar nativ DOM komponentlari emas, React iframe orqali ishlaydi. Mahalliy formulalar oziqlanish API kvotasini sarflamaydi; taom hisobi va uning PDF fayli sarflaydi.

```tsx
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function NativeCalculator() {
  return <NativeNutritionCalculator locale="uz" getSession={async (signal) => {
    const response = await fetch('/api/nutrifit-session', { method: 'POST', signal });
    if (!response.ok) throw new Error('Widget session unavailable');
    return response.json();
  }} />;
}
```

Integratsiyalar kabinetida nativ ruxsatli sozlangan tarifni faollashtiring, aniq HTTPS origin qo‘shing, DNS TXT yozuvini e’lon qiling, domenni tasdiqlang va server kalitini yarating. `NUTRIFIT_WIDGET_KEY` va `NUTRIFIT_SITE_ORIGIN` ni faqat serverda saqlang. Quyidagi vositachi kalitni besh daqiqalik seansga almashtiradi va getSession ga to‘liq envelope qaytaradi. Tashrif buyuruvchilar ruxsati va so‘rov tezligini cheklang; kalit yoki seansni jurnalga yozmang.

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

[Native API](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/NATIVE_REACT.md) · [Service](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=uz)


Server kaliti va besh daqiqalik brauzer sessiyasidan foydalaning. To‘liq API envelope ni getSession ga qaytaring, doimiy kalitni brauzerga bermang va broker tezligini cheklang. Kalit almashtirilishi, integratsiya o‘chirilishi, huquq yoki kvota tugashi so‘rovni rad qilishi mumkin; native anonim API ga o‘tmaydi. Hisoblash va PDF operatsiya sarflaydi; qidiruv cheklangan, CSV mahalliy. native.css ni bir marta import qiling, img-src da data:, connect-src da apiOrigin API ga ruxsat bering.
