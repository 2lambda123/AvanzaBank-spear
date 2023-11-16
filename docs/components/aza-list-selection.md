`COMPONENT_HEAD({"title": "List selection", "module": "ListSelectionModule"})`



!> `List selection` är deprekerad och ska manuellt ersättas av teamen med [Binary switch list](binary-switch-list.md), [Checkbox list](checkbox-list.md) eller [Radio list](radio-list.md)

Valbara listor är kontinuerliga, vertikala index för text med eller utan prefix innehåll (t.ex. ikoner) och/eller suffix innehåll i form av radio button/checkbox/switch avsedda för filtrering. Det är också möjligt att lägga till avdelarlinjer och titlar i listan.

Om listan endast ska bestå av statiska element, knappar (som inte är valbara) eller länkar så bör man använda [List](list).

!> Denna komponent måste ha en label, spana in vår [HTML cheatsheet](../guidelines/accessibility-html-cheatsheet) för exempel!

<div class="component-example-container" data-width="phone" data-example-path="_example-displayer/#/example/list-selection/basexempel"></div>

Fler exempel på användningsområden [finns i Figma](https://www.figma.com/file/KcPTubUKnKfQ8l2gHjvJaA/Designbiblioteket?node-id=338%3A185)

## Teman
Det finns 2 teman som påverkar hur "hover", "pressing" och "selected" ser ut. Teman kan sättas på hela listan eller individuellt per element i listan. "Primary" (grön) och "Neutral" (grå). Standard är inget tema.

## Storlekar
Det finns 4 storlekar, "Small", "Medium", "Large" och "XLarge" som påverkar luften i listans element. Standard är "Medium" Det är också möjligt att inte ha någon storlek ("None") alls ifall listan ska innehålla komponenter som har egen luft i sig. Storlek sätts för hela listan och kan inte justeras individuellt på elementen i listan.

## Layout
Det finns 3 layoutvarianter som påverkar hur "hover", "pressing" och "selected" ser ut. "Default" är att bakgrundsfärgen täcker hela elementet, "Rounded" ger lite luft till kanter och lite rundade hörn, "Obround" ger lite luft till kanterna och halvcirkelhörn. 

?> Layout syns endast på element som har tema.

## Typer
Det finns 4 typer av psuedoelement som suffix innehåll, "Checkbox", "Radio", "Switch" och "None"(default). Det är också möjligt att vända ordningen på innehållet så att psuedoelement hamnar först.

### Checkbox 

<div class="component-example-container" data-width="phone" data-example-path="_example-displayer/#/example/list-selection/checkbox"></div>

### Radio (omvänd)
<div class="component-example-container" data-width="phone" data-example-path="_example-displayer/#/example/list-selection/radio_reversed"></div>

### Switch med ikon

<div class="component-example-container" data-width="phone" data-example-path="_example-displayer/#/example/list-selection/switch_och_ikoner"></div>

## DOs & DON'Ts

> -> **DON'T** Undvika att ha listor i olika storlekar i direkt anslutning till varandra.
>
> -> **DON'T** Använd inte listor i formulär, de är endast avsedda för användning vid filtrering. 
>
> -> **DON'T** Undvik att ha mer än 2 rader text i listor

## Indentering
Dividers kan indenteras (med `[isIndented]="true"`), storleken på indenteringen bestäms av `indentSize` på komponenten:
- None: 0px
- XS: 8px
- Small: 16px (på divider så linjerar det med Option-innehållets start)
- Medium: 40px (på divider linjerar det med text efter ikon som är small utan relativeSizeScale)
- Large: 54px (på divider linjerar det med text efter ikon som är medium utan relativeSizeScale & text efter checkbox/radio i reversed option layout
- XL: 73px (på divider linjerar det med text efter binary i reversed option layout
- Custom som anges manuellt med `indentCustomSize="56px"`

## API
<div class="component-library-api" data-components="list-selection, list-option, list-option-text, list-option-prepend, list-selection-title, list-selection-divider"></div>


[filename](includes/_componentFooter.md ':include')
