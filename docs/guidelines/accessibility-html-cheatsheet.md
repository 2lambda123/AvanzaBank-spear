# HTML cheatsheet
i> Korrekt HTML är en viktig faktor för att skapa tillgängliga gränssnitt som är tillgängliga för tangentbordsnavigering och skärmläsare. 
På Avanza finns det framförallt tre komponenter som används väldigt flitigt och som är lätta att göra rätt med väldigt små insatser: knappar, rubriker, labels & formulärfält.

I en del exempel förekommer användning av en CSS class som heter `mint-screen-reader-only` denna döljer innehållet visuellt på 
skärmen men är tillgänglig för skärmläsare. Den är lämplig att använda i situationer där `aria-label` är okonventionellt eller inte applicerbart. 
T.ex. är det inte applicerbart för att dölja rubriker och det är inte konventionen för att ge HTML form element som `<input>` en label. 
Klassen finns i Mint foundation och importeras globalt i vår base.scss i PWA. För att förstå vad den gör [läs denna WebAIM artikeln om att dölja innehåll](https://webaim.org/techniques/css/invisiblecontent/).

!> I första hand bör alltid semantisk HTML användas! `aria-label` har lite inkonsekvent beteende på olika element mellan olika skärmläsare. 
Skärmläsarens beteende på iOS bör alltid prioriteras, då de flesta som använder skärmläsare gör det på en iOS-enhet.

## Knappar & länkar

<div class="columns">
<div class="column">

**En knapp, `<button>`, har följande egenskaper:**
- Kan klickas på med muspekare, touch, tangentbordstangenterna SPACE & ENTER
- Kan få fokus av tangentbord/skärmläsare
- Är semantisk och kan tolkas av skärmläsare
- Kan vara `disabled`
  
</div>
<div class="column">

**En länk, `<a>`, har förjande egenskaper**
- Kan klickas på med en muspekare, touch, tangentbordstangenten ENTER
- Kan få fokus av tangentbord/skärmläsare
- Är semantisk och kan tolkas av skärmläsare
- Kan inte vara `disabled`

</div>
</div>

*Undvik att använda `disabled` på knappar eftersom inaktiverade knappar inte kan få fokus vid tangentbordsnavigering, de ger ingen information om vad som krävs för att knappen ska bli aktiv, ger ingen feedback vid klick och färgkontrasten är generellt väldigt låg på disablade knappar.*

!> Knappar och länkar ska aldrig nästlas i andra knappar/länkar.

### Knapp eller länk?
När ett klick **endast** navigering till en ny sida (eller en ny plats på sidan) ska länkar användas. På länkar måste alltid `href` vara närvarande, annars slutar den vara tillgänglig för tangentbordsinteraktion och tolkas som text av skärmläsare. 

Generellt ska `(click)` alltid användas på knappar och aldrig på länkar.  
Det finns två undantag för när `(click)` är tillåtet på länkar: när den anropar en metod som pusslar ihop en navigeringslänk & navigerar (utan logik eller ytterligare funktionalitet) eller om länken har en `href` som den navigerar samtidigt som `(click)` sparar information till t.ex. backend. Används ytterligare funktionalitet eller logik som t.ex. att öppna en modal/dialog eller validering av ett formulär för att avgöra var/om användaren ska navigeras så ska det vara en knapp!


<br>
<div class="columns">
<div class="column">
    <p class="dont"><strong>DON’T</strong></p>

```html
<a (click)="toggleMenu()">
<a (click)="validateFormThenNagivateBasedOnResult()">
<a (click)="concatUrlThenNavigate(/sida.html)">
<button routerLink="/sida.html">
```

</div>
<div class="column">
    <p class="do"><strong>DO</strong></p>

```html
<button (click)="toggleMenu()">
<button (click)="validateFormThenNagivateBasedOnResult()">
<a href="#" (click)="concatUrlThenNavigate(/sida.html)">
<a routerLink="/sida.html">
```

</div>
</div>



### Fokus & klick
Knappar/länkar ska alltid kunna få fokus vid tangentbordsnavigering och kunna hantera klick med SPACE (ej länkar), ENTER, touchklick & musklick. Allt detta får vi gratis genom att använda `<button>` & `<a>`, annars måste det läggas till manuellt.

*Om ett custom-element, eller något annat element som inte är en `<button>`, ska användas som en knapp så behöver den kompletteras för att få snarlika egenskaper som en knapp med bl.a. `tabindex="0"`, `role="button"` och stöd för klick med `SPACE` & `ENTER` (utöver `(click)`).*

<br>
<div class="columns">
<div class="column">
    <p class="dont"><strong>DON’T</strong></p>

```html
<my-custom-component (click)="doSomething()">
<div (click)="doSomething()">
```

</div>
<div class="column">
    <p class="do"><strong>DO</strong></p>

```html
<button (click)="doSomething()">
    <my-custom-component> / <div>
</button>
```

</div>
</div>


### Tydlig beskrivning 
Knappar/länkar ska ALLTID ha en tydlig beskrivning av vad de gör utan att anta att det är underförstått, beskrivningen ska finnas även om texten inte syns på skärmen.

Knappar kan även ha ytterligare attribut som kan beskriva knappens tillstånd och beteenden, dessa är viktiga för användarupplevelsen hos personer som använder sig av skärmläsare. [Kodexempel på hur olika knappbeteenden görs tillgängliga för skärmläsare.](accessibility-button)


<br>
<div class="columns">
<div class="column">
    <p class="dont"><strong>DON’T</strong></p>

```html
<a href="...">Prova nu!</a>
<a href="...">Visa fler</a>
<a href="...">Läs mer</a> 

<button>
    <mint-icon ...></mint-icon>
</button>
```

</div>
<div class="column">
    <p class="do"><strong>DO</strong></p>

```html
<a href="...">Prova Avanza Auto nu!</a>
<a href="...">Visa relaterade fonder</a>
<a href="...">Läs mer om kapitalförsäkringar</a>

<button aria-label="Visa fler tjänster">
    <mint-icon ...></mint-icon>
</button>
```

</div>
</div>


## Labels & formulärfält
- formulärfält ska alltid ha en `label` som förklarar syftet med med fältet
- `placeholder` är inte ett tillgängligt attribut och kan inte ersätta en `label`
- knappar ska **aldrig** ligga i en `label`


### Label på form-element
När vi använder [HTML form element](https://www.w3schools.com/html/html_form_elements.asp) så ska alltid en [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) med korrekt struktur finnas även om texten inte syns på skärmen. `aria-label`/`aria-labelledby` funkar på form element men eftersom `<label>` är korrekt HTML så är det att föredra.

<br>
<div class="columns">
<div class="column">
    <p class="dont"><strong>DON’T</strong></p>

```html
<input placeholder="Sök">

<label>Sök</label>
<input placeholder="Sök">
```

</div>
<div class="column">
    <p class="do"><strong>DO</strong></p>

```html
<label>
    <span>Sök</span>
    <input placeholder="Sök">
</label>

<label for="unikt-id-på-sidan">Sök</label>
<input id="unikt-id-på-sidan" placeholder="Sök">

<!--
    om texten inte ska synas visuellt:
    lägg till class="mint-screen-reader-only"
    på span/label som innehåller texten
-->
```

</div>
</div>


### Label på specialbyggda form-element
När vi använder specialbyggda form element t.ex. `aza-button-toggle` så ska `aria-label`/`aria-labelledby` användas och inte `<label>` eftersom den är avsedd för [HTML form element](https://www.w3schools.com/html/html_form_elements.asp). `aza-select` & `aza-account-picker` har en `screenReaderLabel`-input som ska användas.

!> Det är viktigt att testa med skärmläsare om `aria-label` är applicerbar, t.ex. läses inte `aria-label` upp på element med `role="radiogroup"` på iOS! Då kan andra lösningar behövas t.ex. utförligare beskrivning i `aria-label` på alternativen eller `fieldset + legend`.

<div class="columns">
<div class="column">
    <p class="dont"><strong>DON’T</strong></p>

```html
<label>
    <span>Är du pep?</span>
    <aza-button-toggle>...
</label>

<label for="unikt-id-på-sidan">Är du pep?</label>
<aza-button-toggle id="unikt-id-på-sidan">...
```

</div>
<div class="column">
    <p class="do"><strong>DO</strong></p>

```html

<span id="unikt-id-på-sidan">Är du pep?</span>
<aza-button-toggle aria-labelledby="unikt-id-på-sidan">...

<aza-button-toggle aria-label="Är du pep?">...
```

</div>
</div>


### Fristående labels
`<label>` ska **aldrig** användas fristående från formulärfält ([HTML form element](https://www.w3schools.com/html/html_form_elements.asp)). Lämpligt element kan vara [rubrik](#rubriker), `<strong>`, `<small>` eller `<span>`. 

<br>
<div class="columns">
<div class="column">
    <p class="dont"><strong>DON’T</strong></p>

```html
<div>
  <label>Nyhet</label>
  <p>Brödtext...</p>
</div>
```

</div>
<div class="column">
    <p class="do"><strong>DO</strong></p>

```html
<div>
  <strong class="mint-font-form-label">Nyhet</strong>
  <p>Brödtext...</p>
</div>
```

</div>
</div>


### Gruppering av formulärfält/labels
Ibland är label dedikerad till ett svarsalternativ, t.ex. `input type="radio/checkbox"`, då kan vi behöva `fieldset` för att ge hela gruppen en label (`legend`). Det kan även vara en god idé att använda `fieldset` till gruppering av andra fält om det finns väldigt många fält på en och samma sida.

<br>
<div class="columns">
<div class="column">
    <p class="dont"><strong>OK</strong></p>

```html
<h2>Vart kommer pengarna ifrån?</h2>

<label>
    <input type="radio" name="money-origin" value="salary">
    Lön
</label>

<label>
    <input type="radio" name="money-origin" value="savings">
    Sparande
</label>

<label>
    <input type="radio" name="money-origin" value="inheritance">
    Arv
</label>



```

</div>
<div class="column">
    <p class="do"><strong>BÄTTRE</strong></p>

```html
<fieldset>
    <legend><h2>Vart kommer pengarna ifrån?</h2></legend>

    <label>
        <input type="radio" name="money-origin" value="salary">
        Lön
    </label>

    <label>
        <input type="radio" name="money-origin" value="savings">
        Sparande
    </label>

    <label>
        <input type="radio" name="money-origin" value="inheritance">
        Arv
    </label>
</fieldset>
```

</div>
</div>


### Input för siffror
Input med `type="number"` har visat sig vara en ganska otillgänglig lösning trots att det är korrekt HTML, [läs mer om numerisk input i detta blogginlägg på gov.uk](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)

<br>
<div class="columns">
<div class="column">
    <p class="dont"><strong>DON’T</strong></p>

```html
<input type=“number”>
```

</div>
<div class="column">
    <p class="do"><strong>DO</strong></p>

```html
<input type=“text” inputmode=“numeric” pattern=“[0-9]*”>
```

</div>
</div>


## Rubriker
Rubriker anger ett dokuments struktur, det är viktigt att särskilja dess semantik (i html) från utseende (i css).

<br>
<div class="columns">
<div class="column">
    <p class="dont"><strong>DON’T</strong></p>

```html
<h1>Sidans rubrik</h1>
<!-- h2 saknas -->
<h3>
    Relaterat innehåll till sidans rubrik
</h3>
...
<h4>
    Rubrik som inte är relaterad till föregående
    rubrik men kommer tolkas som en underrubrik.
</h4>
...
<div>
    relevant innehåll men som inte ha någon
    rubrik och inte är relaterad till 
    föregående rubrik
</div>
```

</div>
<div class="column">
    <p class="do"><strong>DO</strong></p>

```html
<h1>Sidans rubrik</h1>
<h2 class="mint-font-heading-large">
    Relaterat innehåll till sidans rubrik
</h2>
...
<h3>Underrubrik till föregående h2</h3>
...
<h2 class="mint-font-heading-medium">
    Inte relaterat till föregående h2
</h2>
...
<h2 class="mint-screen-reader-only">
    Visuellt dold rubrik till innehållet nedan
    men inte relaterat till föregående rubrik
</h2>
<div>
    relevant innehåll med rubrik
</div>
```

</div>
</div>



### Gruppering av texter
Med skärmläsare krävs det ibland många svep för att ta sig igenom ett gränssnitt enbart för att utseendet på en del av texten förändras. T.ex. när vi markerar en del av texten med en färg eller byter semantiskt typsnitt. En härligare upplevelse hade för en skärmläsare varit att få allt uppläst i ett svep, då kan vi använda oss av `role="pesentation"`. 

!> **OBS!** Använd ALDRIG `role="presentation"` på ett element med semantik t.ex. `h2`, `button`, `li`, osv. för då försvinner semantiken för skärmläsare. Skapa istället en `div/span` som omsluter allt innehåll i det semantiska elementet. 

<div class="columns">
<div class="column">
    <p class="dont"><strong>DON'T</strong></p>

```html
<h2 class="mint-font-heading-medium">
    <aza-flag [flagCode]="'SE'"></aza-flag>
    Värdepappersnamn
    <span class="mint-font-subhead-medium">
        Utveckling idag 
        <span class="mint-text-negative">-0,95%</span>
    </span>
</h2>



```

</div>

<div class="column">
    <p class="do"><strong>DO</strong></p>

```html
<h2 class="mint-font-heading-medium">
    <div role="presentation">
        <aza-flag [flagCode]="'SE'"></aza-flag>
        Värdepappersnamn
        <span class="mint-font-subhead-medium">
            Utveckling idag 
            <span class="mint-text-negative">-0,95%</span>
        </span>
    </div>
</h2>
```

</div>
</div>
