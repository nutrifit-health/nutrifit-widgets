# Публікація релізів

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← Українська](README.md)

Синхронізуйте версію, tag і реєстри. GitHub Release vX.Y.Z запускає publish.yml: npm, потім GitHub Packages. Повторний запуск використовує наявну immutable npm-версію. Trusted publisher npm: nutrifit-health / nutrifit-widgets / publish.yml із дозволеним npm publish. GitHub використовує GITHUB_TOKEN і @nutrifit-health; видимість налаштовується окремо.

Оновіть інструкції й CHANGELOG, збережіть файли в main. Збірка створює JavaScript, CSS і декларації TypeScript для публікації. Перевірки потребують окремого запиту. Публікація npm не розгортає хост і не налаштовує тарифи.

```sh
npm version patch --no-git-tag-version
git add package.json package-lock.json CHANGELOG.md docs README.md
git commit -m "release: publish widget update"
git push origin main
git tag -a vX.Y.Z -m "Widgets X.Y.Z"
git push origin vX.Y.Z
gh release create vX.Y.Z --title "NutriFit Widgets X.Y.Z" --notes-file /path/to/release-notes.md
```

[npm](https://www.npmjs.com/package/@nutrifit/widgets) · [GitHub Releases](https://github.com/nutrifit-health/nutrifit-widgets/releases) · [GitHub Packages](https://github.com/orgs/nutrifit-health/packages?repo_name=nutrifit-widgets)
