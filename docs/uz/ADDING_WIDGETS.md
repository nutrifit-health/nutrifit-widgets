# Vidjet qo‘shish

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← O‘zbekcha](README.md)

1. NutriFit ichida kanonik komponent, shartnoma va ma’lumot egasi bilan ochiq hosted vositani yarating; maxfiy akkaunt, baza yoki klinik matnlarni ko‘chirmang.
2. Ikkala framing siyosatiga faqat aniq yo‘lni kiriting; sessiya, cookies va analytics SDK qo‘shmang.
3. src/core/registry.js ga ID, yo‘l, balandlik va olti tildagi titles qo‘shing.
4. WidgetFrame yoki yupqa o‘rovchi ishlating; turlar types.ts da. Native alohida entry va service scope talab qiladi.
5. origin/source/instance, resize chegaralari va takroriy tozalashni saqlang; postMessage orqali qiymat yubormang. Private core nusxasini shu o‘zgarishda yangilang.
6. Olti tildagi sahifa, katalog va README ni yangilang, paketni nashr qiling va host joylashtirishini kelishing.

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
