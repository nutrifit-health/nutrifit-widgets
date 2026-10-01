# Reliz nashr qilish

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← O‘zbekcha](README.md)

Versiya, tag va registrlar mos bo‘lsin. GitHub Release vX.Y.Z publish.yml ni boshlaydi: npm, keyin GitHub Packages. Qayta ishga tushirish mavjud immutable npm versiyasini ishlatadi. npm trusted publisher: nutrifit-health / nutrifit-widgets / publish.yml va npm publish ruxsati. GitHub GITHUB_TOKEN va @nutrifit-health ishlatadi; ko‘rinishi alohida sozlanadi.

Qo‘llanmalar va CHANGELOG ni yangilab, fayllarni main da saqlang. Yig‘ish nashr uchun JavaScript, CSS va TypeScript deklaratsiyalarini yaratadi. Tekshiruvlar alohida so‘rov talab qiladi. npm nashri host yoki tijoriy tariflarni joylashtirmaydi.

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
