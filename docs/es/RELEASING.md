# Publicar versiones

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← Español](README.md)

Alinea versión, tag y registros. GitHub Release vX.Y.Z inicia publish.yml: npm y después GitHub Packages. El flujo reutiliza versiones npm inmutables existentes. Configura trusted publisher npm para nutrifit-health / nutrifit-widgets / publish.yml y permite npm publish. GitHub usa GITHUB_TOKEN y @nutrifit-health; la visibilidad se configura por separado.

Actualiza guías y CHANGELOG y guarda los archivos en main. La compilación produce JavaScript, CSS y declaraciones TypeScript para publicación. Las pruebas requieren petición explícita. Publicar npm no despliega el host ni configura planes comerciales.

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
