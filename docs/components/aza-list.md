`COMPONENT_HEAD({"title": "List", "module": "ListModule"})`



!> aza-list är deprekerad och ska manuellt ersättas av teamen med [mint-list](list.md) 

Listor är kontinuerliga, vertikala index för text med eller utan prefix/suffix innehåll som t.ex. ikoner, mer texter eller andra komponenter. Elementen i listor kan vara statiska, knappar eller länkar. Det är också möjligt att lägga till avdelarlinjer och titlar i listan.

Om listan ska användas för filtrering så bör man använda [List selection](aza-list-selection).

<div class="component-example-container" data-width="phone" data-example-path="_example-displayer/#/example/list/basexempel"></div>

Fler exempel på användningsområden [finns i Figma](https://www.figma.com/file/KcPTubUKnKfQ8l2gHjvJaA/Designbiblioteket?node-id=338%3A185)

## Teman
Det finns 5 teman som påverkar hur "hover" och "pressing" ser ut. Teman kan sättas på hela listan eller individuellt per element i listan. "Primary" (grön), "Neutral" (grå), "Positive" (blå), "Negative" (röd). Standard är inget tema ("None").

?> Tema syns endast på element som är `<button>`-, `<a>`-taggar eller som ligger i en lista med `isFakeInteractive`.

## Storlekar
Det finns 4 storlekar, "Small", "Medium", "Large" och "XLarge" som påverkar luften i listans element. Standard är "Medium". Det är också möjligt att inte ha någon storlek ("None") alls ifall listan ska innehålla komponenter som har egen luft i sig. Storlek sätts för hela listan och kan inte justeras individuellt på elementen i listan.

## Layout
Det finns 4 layoutvarianter som påverkar hur "hover" och "pressing" ser ut. "Default" är att bakgrundsfärgen täcker hela elementen, "Rounded" ger lite luft till kanter och lite rundade hörn, "Obround" ger lite luft till kanterna och halvcirkelhörn. 

?> Layout syns endast på element som är `<button>`, `<a>` eller som ligger i en lista med `isFakeInteractive` och som har tema.

### Rounded hover/pressed

<div class="component-example-container" data-width="800" data-example-path="_example-displayer/#/example/list/rounded"></div>

### Obround hover/pressed

<div class="component-example-container" data-width="800" data-example-path="_example-displayer/#/example/list/obround"></div>

## Knappar i item med hover-effekt
Det finns en lite mer avancerad lösning när knappen ligger i ett list-item men hover/pressing ska visas på hela itemet.
<div class="component-example-container" data-width="800" data-example-path="_example-displayer/#/example/list/fake_interactive"></div>


## DOs and DON'Ts

> -> **DON'T** Undvika att ha listor i olika storlekar i direkt anslutning till varandra.
>
> -> **DON'T** Undvik att ha mer än 2 rader text i listor


?> **Utvecklare:** om listan endast består av icke-interaktiva element (d.v.s. inte knappar/länkar) så bör listan av tillgänglighetsskäl ha `role="list"` och listelementen ha `role="listitem"`.

## Indentering
Dividers kan indenteras (med `[isIndented]="true"`), storleken på indenteringen bestäms av `indentSize` på komponenten:
- None: 0px
- XS: 8px
- Small: 16px (på divider så linjerar det med Item-innehållets start)
- Medium: 40px (på divider linjerar det med text efter ikon som är small utan relativeSizeScale)
- Large: 54px (på divider linjerar det med text efter ikon som är medium utan relativeSizeScale)
- Custom som anges manuellt med `indentCustomSize="56px"`

## API
<div class="component-library-api" data-components="list, list-item, list-item-text, list-item-prepend, list-title, list-divider"></div>



[filename](includes/_componentFooter.md ':include')
