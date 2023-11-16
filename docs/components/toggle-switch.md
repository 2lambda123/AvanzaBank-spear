`COMPONENT_HEAD({"title": "Toggle switch", "module": "ToggleModule"})`



Toggle switch används för att ändra:
- vad som visas
- hur någonting visas i ett gränssnitt

Ett värde är **alltid** valt.
Kan innehålla text både med och utan ikon.
Kan innehålla upp till fem alternativ.

!> En toggle switch måste ha en label, spana in vår [HTML cheatsheet](../guidelines/accessibility-html-cheatsheet) för exempel! **OBS!** `aria-label` läses inte upp på iOS när det ligger på `<aza-toggle-switch>` överväg utförligare beskrivningar i `aria-label` på `<aza-toggle-option>` eller `fieldset + legend` runt komponenten. 

<div class="component-example-container" data-example-path="/mint/component-library/#/toggle-switch"></div>


## Varianter
### Auto-width
När komponenten ska använda så mycket bredd alternativen behöver istället för att fördela fullbredd mellan alternativen

<div class="component-example-container" data-example-path="/mint/component-library/#/toggle-switch-autowidth"></div>

### Auto-toggle
När det endast finns 2 alternativ och klickytan är liten, t ex vid `size="small"` så kan `autoToggle` vara till hjälp, då den kommer byta till det icke-valda alternativet oavsett vilket alternativ användaren klickar på.

<div class="component-example-container" data-example-path="/mint/component-library/#/toggle-switch-auto-toggle"></div>


## Dos & don'ts
> +> ![DO](/docs/_media/components/toggle_switch_do.png)
> **DO** Visa innehåll på olika sätt
>
> -> ![DONT](/docs/_media/components/toggle_switch_dont.png)
> **DON'T** Använd inte i formulär för att svara på frågor

## API
<div class="component-library-api" data-components="toggle-switch, toggle-option"></div>

## Exempel där komponenten används
* [Sparkonto+](https://www.avanza.se/sparkonto.html)
* [Min ekonomi](https://www.avanza.se/min-ekonomi/oversikt.html)



[filename](includes/_componentFooter.md ':include')
