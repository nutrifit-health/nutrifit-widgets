# Релиз жариялау

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← Қазақша](README.md)

Нұсқа, tag және registry бірдей болуы керек. GitHub Release vX.Y.Z publish.yml іске қосады: npm, содан кейін GitHub Packages. Қайта іске қосу бар immutable npm нұсқасын қолданады. npm trusted publisher: nutrifit-health / nutrifit-widgets / publish.yml, npm publish рұқсаты керек. GitHub GITHUB_TOKEN және @nutrifit-health қолданады; көрінуі бөлек бапталады.

Нұсқаулықтар мен CHANGELOG жаңартып, файлдарды main ішінде сақтаңыз. Құрастыру жариялауға арналған JavaScript, CSS және TypeScript декларацияларын жасайды. Тексерулер жеке сұрауды талап етеді. npm жариялау хост пен коммерциялық тарифті орналастырмайды.

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
