`COMPONENT_HEAD({"title": "Contextual overlay", "module": "ContextualOverlayModule"})`



i> Används för att visa kontextuella actions på mobil, till exempel: filtrering, *Ändra fördelning* eller *Välj konto*. Används även för kontextuell info/hjälp såsom *Hur funkar det?*-knappar.

!> **För adminappar:** `ContextualOverlayAreaModule` ska läggas till under `imports` i `AppModule` och
`<aza-contextual-overlay-area></aza-contextual-overlay-area>` bör finnas i `AppComponent`s template
för att Contextual Overlay ska fungera.


Contextual overlay är endast avsedd för användning på mobil. Vissa komponenter är adaptiva och har CO inbyggt för mobillayout t.ex. account-picker, contextual-menu och aza-responsive-overlay-button (CO i mobil & right-overlay i desktop, denna finns under Shared-mappen i PWA och är en rekommenderad lösning). Använd i första hand adaptiva komponenter.

<div class="component-example-container" data-height="300" data-width="phone" data-example-path="_example-displayer/#/example/contextual-overlay-link/stacked"></div>

**Egenskaper hos Contextual overlay:**
- Kan ha fast höjd eller automatisk höjd (max 95% av skärmens höjd)
- Kan vara med eller utan scroll
- Stängs genom att dra ner, tryck utanför, klick på handle-bar eller med ESC-tangent
- Kan visas med eller utan titel på en eller flera rader
- En knapp i en CO kan öppna en annan CO eller ett [Flowerlay](/styleguides/view-type-flow-overlay).
    - Om en flowerlay öppnas stängs befintlig CO. 
    - Om ny CO öppnas kan man välja mellan att stänga och att behålla befintlig CO.  Behåll befintlig om du vill att kunden ska komma tillbaka till den funktionaliteten, stäng om det behovet inte finns. 
- En CO får användas i max två steg. Först en övergripande med kategorier i, sedan får ytterligare ett contextual öppnas med inställningar för den kategorin (se facebooks “Spara sida”-contextual flöde)

Exempel på en ny CO som stänger en befintlig är de tre prickarna på nuvarande aktieguide, eller Androids funktionsmeny.

*Innehåll bakom CO reagerar på scroll med touchpad/mus i bakgrunden när en befinner sig i toppen/botten av en CO. Det kan hända när man t ex testar mobil i webbläsaren på dator. Detta händer inte vid touch på fysisk mobil.*

!> **Utvecklare:** En knapp som vid klick öppnar en contextual-overlay ska **ALLITD** vara en `<button>` och inte ett valfritt element med `(click)`, Spana in vår [HTML cheatsheet](../guidelines/accessibility-html-cheatsheet) för exempel! Det gäller oavsett om knappen använder `azaContextualOverlayLink` eller om knappen anropar en metod som öppnar den med `contextualOverlayService.open()`.


## Titel
Vi strävar efter att titeln ska få plats på en rad, som default trunkeras titeln om den är för lång men ibland är det viktigt att hela titeln framgår och då kan man tillåta fler rader. Detta är bra ur tillgänglighetsperspektiv!

<div class="component-example-container" data-height="300" data-width="phone" data-example-path="_example-displayer/#/example/contextual-overlay-link/basexempel"></div>


## Teman
Teman på contextual overlays används för att förstärka känslan av en produkt om legaltext behöver visas initialt innan man kommer in på en produktsida. Exempel på detta är när du går från t.ex. en bolåne-puff på Utforska och behöver lyfta fram legala aspekter innan användaren går vidare till produktsidan. För att inte mötas av en tråkig vägg med text så kan ett tema användas på CO:n för att göra steget mindre torrt och tråkigt. 

<div class="component-example-container" data-height="350" data-width="phone" data-example-path="_example-displayer/#/example/contextual-overlay-link/teman"></div>


## Dos & don'ts
> +> ![DO](/docs/_media/components/Contextual_Overlay_do.png)
> **DO** Använd handle-baren för att stänga din CO och fyll den med härligt content
>
> +> ![DO](/docs/_media/components/Contextual_Overlay_do2.png)
> **DO** Vi rekommenderar pragraph medium (16px) som brötextstorlek på contextuals. Detta då det är mer tillgängligt med en större typsnittstorlek än en mindre. Fler exempel på mått och avstånd finns nedan.

> -> ![DONT](/docs/_media/components/Contextual_Overlay_dont1.png)
> **DON'T** Använd inte Avbryt eller kryss för att stänga
>
> -> ![DONT](/docs/_media/components/Contextual_Overlay_dont2.png)
> **DON'T** Använd inte för flöden i flera steg


## Mått och avstånd
20px i toppen och 36px i botten. Det är 16 px från kant till innehåll i Contextual overlays

![Visualisering av avstånd för contextual overlay](/docs/_media/layout/mall_co.png) 

## API
<div class="component-library-api" data-components="contextual-overlay-link"></div>

?> Inkludera inte `ContextualOverlayAreaModule` i din kod, `<aza-contextual-overlay-area>` är tillgänglig globalt i PWA.



[filename](includes/_componentFooter.md ':include')
