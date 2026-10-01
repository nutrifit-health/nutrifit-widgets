# Добавление виджетов

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← Русский](README.md)

1. Реализуйте публичный hosted-инструмент в NutriFit с каноническим компонентом, API-контрактом и владельцем данных. Не копируйте приватные аккаунты, базы или тексты клинических инструментов в этот репозиторий.
2. Добавьте точный маршрут в оба списка разрешённого встраивания. Embed не восстанавливает сессию аккаунта, не пишет cookies и не подключает analytics SDK. Произвольные /embed/* не разрешаются.
3. Добавьте frozen-описание в src/core/registry.js: ID, путь, высота и titles для шести локалей. WidgetId и общие адаптеры используют один реестр.
4. Переиспользуйте WidgetFrame либо добавьте тонкую именованную обёртку. Типы храните в types.ts, компонент экспортируйте. Native UI — отдельный entry с собственным подтверждённым scope сервиса.
5. Сохраняйте проверку origin/source/instance, пределы resize и идемпотентную очистку. Значения полей в postMessage не отправляются. Обновляйте private hosted-копию core в том же изменении.
6. Добавьте страницу калькулятора на каждом языке, обновите каталоги и README, выпустите пакет и согласуйте deployment хоста. Релиз пакета не разворачивает приложение NutriFit.

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
