`COMPONENT_HEAD({"title": "Loading skeleton", "module": "LoadingSkeletonModule"})`




Används för att visa ett mer indikativt gränssnitt medan användaren väntar på laddningen av datan till det riktiga gränssnittet. Skeleton-gränssnittet ska likna det kommande gränssnittet. Skeletons upplevs av användare att ha en [kortare fördröjning än andra laddvyer](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a).

Komponenten har ett antal barnkomponenter - dels "presets" som är inbyggda skeleton-gränssnitt för våra typiska vyer, och dels de komponenter som presets är uppbyggda av, vilket innebär att man kan skapa ett eget custom-skeleton vid behov.

De presets som finns är: `default`, `list`, `event-feed`, `financial instrument`.

### Preset: default

<div class="component-example-container" data-example-path="_example-displayer/#/example/loading-skeleton/1"></div>

## DOs and DON'Ts

> +> **DO** Visa så fort som möjligt de delar av gränssnittet som har den data som behövs.
>
> -> **DON'T** Fördröj inte visningen av ett HELT gränssnitt bara för att en del av gränssnittet inte har sin data än.

## API
<div class="component-library-api" data-components="loading-skeleton, skeleton-text, skeleton-card, skeleton-reserved-area, skeleton-image, skeleton-list-item, skeleton-preset-default, skeleton-preset-list, skeleton-preset-event-feed, skeleton-preset-financial-instrument"></div>



[filename](includes/_componentFooter.md ':include')
