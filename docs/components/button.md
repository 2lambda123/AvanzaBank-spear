`COMPONENT_HEAD({"title": "Button", "package": "@avanzabank/mint-button", "module": "ButtonModule"})`



Texten i knappar ska vara skriven i versalgement, d.v.s. "Tryck på mig" och inte "TRYCK PÅ MIG", "tryck på mig" eller "Tryck På Mig".

?> **Tips!** Spana in vår [HTML cheatsheet](../guidelines/accessibility-html-cheatsheet) och [Knappbeteenden för skärmläsare](../guidelines/accessibility-button)

## Knappar 
<div class="component-example-container" data-example-path="/mint/button/#/button-dj"></div>

<b>Primary</b><br/>
Är fullt anpassad för hög tillgänglighet och passar därför på de flesta ställena. Såsom formulär och call-to-actions där hög läsbarhet är ett krav.

<b>Secondary</b><br/>
Kan med fördel användas i samband med en primary button där uppmärksamheten inte behöver riktas mot just den action som secondary-knappen genomför.

<b>Buy/Sell</b><br/>
Används för att tydligt markera möjlighet att köpa eller sälja värdepapper. Ska ej innehålla någon ikon.

## Textknappar
<div class="component-example-container" data-example-path="/mint/button/#/textbutton-dj"></div>

<b>Primary</b><br/>
Är fullt anpassad för hög tillgänglighet och passar därför på de flesta ställena. Såsom formulär och call-to-actions där hög läsbarhet är ett krav.

<b>Secondary</b><br/>
Kan med fördel användas i samband med en primary button där uppmärksamheten inte behöver riktas mot just den action som secondary-knappen genomför.

<b>Buy/Sell</b><br/>
Används för att tydligt markera möjlighet att köpa eller sälja värdepapper. Ska ej innehålla någon ikon.

## Spökknappar
En knapp där den action man genomför inte är kritisk för sidans syfte, t.ex. en knapp för inställningar eller läsa mer om något.
Om "valt"/"aktivt"-state används, behöver lämplig state type väljas. [Läs mer om vilket aria-attribut som är lämpligast](../guidelines/accessibility-button).

<div class="component-example-container" data-example-path="/mint/button/#/ghost-dj"></div>

## Hero-knappar
Används mycket sällan. Den är inte 100% tillgänglighetsanpassad men bidrar med en hög grad varumärkesigenkänning.
Exempel på användningsområden kan vara kampanjsidor eller i toppen av startsidan alt. startskärm i app.
<div class="component-example-container" data-example-path="/mint/button/#/hero-dj"></div>

## Ikoner i knappar
Knappar som endast består av en ikon ska kompletteras med [aria-label som beskriver vad knappen gör](../guidelines/accessibility-html-cheatsheet?id=tydlig-beskrivning).

<div class="component-example-container" data-example-path="/mint/button/#/icon-button"></div>

### Rekommendrat val av ikon för olika vanliga åtgärder
Kan användas med eller utan synlig text, [läs om ikoner i knappar](#ikoner-i-knappar).
<div class="component-example-container" data-example-path="/mint/button/#/action-button"></div>

> -> ![Don't](/docs/_media/components/action_button_dont_1.svg)
> **DON'T** Var försiktig med att använda åtgärder i svart färg i anslutning till text, då det kan vara svårt att urskilja vad som är klickbart.

## Disablade knappar
Undvik att använda disabled på knappar eftersom inaktiverade knappar:
- inte kan få fokus vid tangentbordsnavigering
- inte ger information om vad som krävs för att knappen ska bli aktiv
- inte ger feedback vid klick
- har väldigt låg färgkontrast

Använd endast när det är uppenbart för användaren varför knappen inte går att trycka på, tex då vi har direktvalidering som inte kan missas. I längre formulär som saknar direktvalidering är det bättre att använda en ej disablad knapp så att användaren får trycka så att det genereras valideringstext. 

!> `disabled` är bara är ett giltigt attibut på knappar (`<button>`) och inte på länkar (`<a>`).

> -> **DON'T** Hero-knappar ska aldrig vara disablade.
>
> -> **DON'T** Disablade knappar ska inte ligga på ytor med "valideringsfärger" som t.ex. infoboxar.

## API

!> Tänk på att default value på HTML attributet `type` är `submit`, det är rekommenderat att använda `type="button"` för knappar som inte skickar eller återställer formulär.

<div class="component-example-container" data-example-path="/mint/button/#/api"></div>


[filename](includes/_componentFooter.md ':include')
