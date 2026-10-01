# Додавання віджетів

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← Українська](README.md)

1. Реалізуйте публічний hosted-інструмент у NutriFit із канонічними компонентом, контрактом і власником даних. Не копіюйте приватні акаунти, бази чи клінічні тексти.
2. Дозвольте точний маршрут у двох framing-політиках без сесії, cookies й analytics SDK.
3. Додайте ID, шлях, висоту й titles шести мов у src/core/registry.js.
4. Повторно використовуйте WidgetFrame або тонку обгортку; типи зберігайте у types.ts. Native має окремий entry і scope.
5. Збережіть origin/source/instance, межі resize та ідемпотентне очищення; не надсилайте значення в postMessage. Оновіть private core в тому самому change.
6. Додайте сторінки, каталоги й README шести мов. Опублікуйте пакет і узгодьте deployment хоста.

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
