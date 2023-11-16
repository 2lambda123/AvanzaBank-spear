`COMPONENT_HEAD({"title": "Contextual menu", "module": "ContextualMenuModule"})`



En kontextuell meny används för att visa ett begränsat antal funktioner som kan användas med det innehåll som är aktuellt där man är. På mobil öppnas den kontextuella menyn som en contextual overlay och på desktop som en modal. 

För layout av knapp använd [button](button) (rekommenderat tema: discreet/subtle). För innehåll i meny använd t.ex. [list](list) eller [list-selection](aza-list-selection).

!> **Utvecklare:** Knappen ska **ALLTID** vara en `<button>` och inte ett valfritt element med `(click)`. Spana in vår [HTML cheatsheet](../guidelines/accessibility-html-cheatsheet) för exempel!

!> **För adminappar:** För att kunna öppna i en contextual overlay, se dess [dokumentation](./contextual-overlay.md).


<div class="component-example-container" data-height="phone" data-width="phone" data-example-path="_example-displayer/#/example/contextual-menu/basexempel"></div>

<div class="component-example-container" data-height="300" data-example-path="_example-displayer/#/example/contextual-menu/ikon-knapp"></div>


## DOs and DON'Ts

> +> ![DO](/docs/_media/components/contextual_menu_do.png)
> **DO** Funktionerna ska vara relevanta för det aktuella innehållet
>
> -> ![DON'T](/docs/_media/components/contextual_menu_dont.png)
> **DON'T** Undvik att bara ha en funktion i menyn

<!-- Jag förstår inte vad dessa betyder?
## Kombinationer (Illustrera med tre bilder?)

### Med rubrik
Exempel finns på nya innehavsvyn
### Med ikon
Exempel finns på nya kontoöversikten
### Med sektioner
Exempel finns på nya kontoöversikten

-->

## Exempel där komponenten används
* [Fondorderläggningen](https://www.avanza.se/handla/fonder.html/kop/788394/avanza-auto-6)

## API
<div class="component-library-api" data-components="contextual-menu, contextual-menu-item"></div>



[filename](includes/_componentFooter.md ':include')
