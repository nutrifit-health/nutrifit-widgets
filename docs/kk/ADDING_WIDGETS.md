# Виджет қосу

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← Қазақша](README.md)

1. NutriFit ішінде канондық компонент, келісім және дерек иесімен ашық hosted құралын іске асырыңыз; жеке аккаунт, база немесе клиникалық мәтіндерді көшірмеңіз.
2. Екі framing саясатына тек дәл жолды қосыңыз; сессия, cookies және analytics SDK қоспаңыз.
3. src/core/registry.js ішіне ID, жол, биіктік және алты тілдегі titles қосыңыз.
4. WidgetFrame немесе жұқа орауыш қолданыңыз; типтер types.ts ішінде. Native бөлек entry және service scope талап етеді.
5. origin/source/instance, resize шектері мен қайталанатын тазартуды сақтаңыз; postMessage арқылы мән жібермеңіз. Private core көшірмесін бірге жаңартыңыз.
6. Алты тілдегі бет, каталог және README жаңартып, пакетті жариялаңыз және хостты орналастыруды келісіңіз.

```json
{
  "type": "nutrifit:widget",
  "version": 1,
  "instanceId": "nf-instance",
  "event": "ready"
}
```

`ready` · `calculated` · `error` · `resize` (100–10000 px)

[Core](../../src/core/registry.js) · [Release](RELEASING.md)
