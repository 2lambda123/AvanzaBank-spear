`COMPONENT_HEAD({"title": "Categories", "module": "CategoriesModule", "package": "@avanzabank/mint-categories"})`



Används för att lista kategorier.

<div class="component-example-container" data-example-path="/mint/categories/#/basic"></div>

Kategorier kan vara klickbara för att t.ex. öppna en Right overlay eller en Contextual overlay med mer information. 
Klickbara kategorier kan också vara "vald" t.ex. i en filtrering.

<div class="component-example-container" data-example-path="/mint/categories/#/clickable"></div>

Undvik att använda disabled på kategorier eftersom de: 
- inte kan få fokus vid tangentbordsnavigering
- inte ger information om vad som krävs för att knappen ska bli aktiv
- inte ger feedback vid klick
- har väldigt låg färgkontrast

## Layout
Kategorier kan listas som antingen `cloud` eller `scroll`

### Cloud 
<div class="component-example-container" data-width="phone" data-example-path="/mint/categories/#/basic"></div>

### Scroll
<div class="component-example-container" data-width="phone" data-example-path="/mint/categories/#/scroll"></div>


## DOs and DON'Ts för taggar
> +> ![logo](/docs/_media/components/tag_do1.png)
> **DO** Kategorier kan ligga på rad under en rubrik. Taggar kan ligga på **surface main** färg eller **surface main-a**.
>
> +> ![logo](/docs/_media/components/tag_do2.png)
> **DO** Kategorier kan också ligga som ett taggmoln eller kluster i ett grupperat sammanhang. 
>
> -> ![logo](/docs/_media/components/tag_dont2.png)
**DON'T** Kategorier får inte användas som knappar eller ihop med knappar av något slag. Detta då de inte ska förväxlas som knappar. De har inte heller samma tillgänglighetsstandard i kontrastvärde på klickytan som våra knappar har. 
>
> -> ![logo](/docs/_media/components/tag_dont1.png)
**DON'T** Kategorier får inte användas på färgade bakgrunder då de lätt försvinner in i bakgrunden. 

## API
<div class="component-library-api" data-package-name="categories" data-show-only-components="mint-categories"></div>



[filename](includes/_componentFooter.md ':include')
