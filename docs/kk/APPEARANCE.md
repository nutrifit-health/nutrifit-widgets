# Виджеттерді безендіру

Демонстрацияда «Сайтыңызға сай безендіру» бөлімін ашыңыз. Калькулятор, карточка және өріс фонын, негізгі және қосымша мәтінді, акцентті, жиекті және бұрыш радиусын таңдаңыз. Фон мөлдір болуы мүмкін.

appearance параметрлері: background, surface, text, muted, accent, border және radius. Түстер тек #RGB немесе #RRGGBB форматында; background үшін transparent да рұқсат етіледі. Радиус — 0–32 px аралығындағы бүтін сан. Таңдалған түстер тақырыптан басым. Акцент үстіндегі мәтін контрастқа қарай қара не ақ болады; қалған түстердің оқылуын интегратор таңдайды.

Сайттың CSS стильдері iframe ішіне өтпейді: WidgetFrame style тек контейнерді безендіреді. appearance немесе URL параметрлерін беріңіз. Безендіру өзгергенде iframe қайта жасалып, сақталмаған деректер өшеді. Мөлдір фон үшін ашық не қараңғы тақырыпты сайт фонына сай таңдаңыз.

## React

```tsx
import { WidgetFrame } from '@nutrifit/widgets';

<WidgetFrame widget="tdee" locale="kk" theme="light"
  appearance={{ background: '#f8fafc', surface: '#ffffff', text: '#172b25',
    muted: '#52655d', accent: '#2563eb', border: '#dce5df', radius: 16 }} />
```

## JavaScript

```html
<div data-nutrifit-widget="water" data-locale="kk"
  data-background="#f8fafc" data-surface="#ffffff" data-accent="#2563eb"
  data-radius="16"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

```js
import { mountWidget } from '@nutrifit/widgets/core';
mountWidget(document.getElementById('calculator'), {
  widget: 'water', locale: 'kk',
  appearance: { background: '#f8fafc', accent: '#2563eb', radius: 16 },
});
```

## iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=kk&theme=light&appearanceBackground=%23f8fafc&appearanceAccent=%232563eb&appearanceRadius=16"
  title="NutriFit TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0;border-radius:16px;background:transparent"
></iframe>
```

`appearanceBackground` · `appearanceSurface` · `appearanceText` · `appearanceMuted` · `appearanceAccent` · `appearanceBorder` · `appearanceRadius`

## Native React / CSS

Нативті тағам калькуляторы осы appearance және төмендегі CSS айнымалыларын қабылдайды. CSS арқылы баптағанда акцент үстіндегі мәтін түсін қолмен таңдаңыз. Нативті режим сервер рұқсат берген интеграцияны қажет етеді.

```tsx
<NativeNutritionCalculator getSession={getSession} locale="kk"
  appearance={{ background: 'transparent', accent: '#2563eb', radius: 16 }}
  className="website-calculator" />
```

```css
.website-calculator {
  --nutrifit-background: transparent;
  --nutrifit-surface: #ffffff;
  --nutrifit-text: #172b25;
  --nutrifit-muted: #52655d;
  --nutrifit-accent: #2563eb;
  --nutrifit-accent-text: #ffffff;
  --nutrifit-border: #dce5df;
  --nutrifit-radius: 16px;
}
```

Ресми көлденең логотиптің фоны мөлдір. Қараңғы тақырыпта сол логотиптің ақ силуэті қолданылады. Түстерді өзгерту логотипті, сілтемелерді немесе әдіс шектеулерін жасыруға құқық бермейді; white label серверлік рұқсатты қажет етеді. Түстер есептеулерді немесе PDF файлдарын өзгертпейді.

Жергілікті демонстрация checkout ішіндегі бастапқы кодты көрсетеді. Сыртқы сайтқа осы келісімшартты іске асыратын жарияланған пакет және жаңартылған NutriFit host қажет. Демонстрация оларды жарияламайды және орналастырмайды.

[README](README.md) · [Demo](../../examples/consumer-site/README.md)
