# Añadir widgets

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← Español](README.md)

1. Implementa el servicio público en NutriFit con componente, contrato y propietario de datos canónicos; no copies cuentas, bases ni textos clínicos privados.
2. Autoriza solo la ruta exacta en ambas políticas de framing, sin sesión, cookies ni analytics SDK.
3. Registra ID, ruta, altura y titles de seis idiomas en src/core/registry.js.
4. Reutiliza WidgetFrame o añade una envoltura pequeña; tipos en types.ts. Native necesita entrada y ámbito de servicio separados.
5. Conserva validación origin/source/instance, límites de resize y limpieza idempotente. No envíes valores en postMessage; actualiza el core privado en el mismo cambio.
6. Añade páginas, catálogos y README en seis idiomas. Publica el paquete y coordina el despliegue del host.

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
