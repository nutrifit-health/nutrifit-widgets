# Публикация релизов

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← Русский](README.md)

Синхронизируйте версию пакета, tag и публикации реестров. GitHub Release vX.Y.Z запускает publish.yml: сначала npm, затем копию в GitHub Packages. При повторном запуске уже опубликованная immutable npm-версия используется повторно. Trusted publisher npm настраивается для владельца GitHub nutrifit-health, репозитория nutrifit-widgets и workflow publish.yml с разрешением прямого npm publish. GitHub Packages использует GITHUB_TOKEN репозитория и scope @nutrifit-health. Видимость пакета GitHub настраивается отдельно.

Обновите языковые инструкции и CHANGELOG, затем сохраните нужные файлы в main. Сборка создаёт JavaScript, CSS и декларации TypeScript для публикации. Тесты и другие проверки требуют отдельного явного запроса. Публикация npm не разворачивает private hosted-маршруты и не задаёт коммерческие тарифы.

```sh
npm version patch --no-git-tag-version
git add package.json package-lock.json CHANGELOG.md docs README.md
git commit -m "release: publish widget update"
git push origin main
git tag -a vX.Y.Z -m "Widgets X.Y.Z"
git push origin vX.Y.Z
gh release create vX.Y.Z --title "NutriFit Widgets X.Y.Z" --notes-file /path/to/release-notes.md
```

[npm](https://www.npmjs.com/package/@nutrifit/widgets) · [GitHub Releases](https://github.com/nutrifit-health/nutrifit-widgets/releases) · [GitHub Packages](https://github.com/nutrifit-health/nutrifit-widgets/pkgs/npm/widgets)
