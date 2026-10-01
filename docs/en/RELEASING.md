# Publishing releases

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[← English](README.md)

Keep package version, tag and published registries aligned. A GitHub Release named vX.Y.Z triggers publish.yml: npm publication first, then the GitHub Packages mirror. Existing immutable npm versions are reused when rerunning the workflow. Configure the npm trusted publisher for GitHub owner nutrifit-health, repository nutrifit-widgets and workflow publish.yml, with direct npm publish allowed. GitHub Packages uses the repository GITHUB_TOKEN and @nutrifit-health scope. Its package visibility is managed separately.

Update all language guides and CHANGELOG, then commit the intended files from main. Build produces JavaScript, CSS and TypeScript declarations; it is part of publication. Tests and other checks require a separate explicit request. A published npm package does not deploy private hosted routes or configure commercial plans.

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
