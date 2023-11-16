# Knappbeteenden för skärmläsare
i> Knappar kan ha många olika beteenden, med hjälp av ytterligare attibut i markup så kan skärmläsare beskriva knappens state & beteende. Det är viktig information för användarupplevelsen för personer som använder sig av skärmläsare.

!> I första hand bör alltid semantisk HTML användas! `aria-label` har lite inkonsekvent beteende på olika element mellan olika skärmläsare. Skärmläsarens beteendet på iOS bör alltid prioriteras, då de flesta som använder skärmläsare gör det på en iOS-enhet.

## En knapp

### ...som endast innehåller grafik 
En knapp som endast innehåller en ikon/bild behöver anpassas så att användaren kan förstå funktionen vid uppläsning av skärmläsare. 
Det är även rekommenderat att använda tooltips så att användare som inte använder en skärmläsare också förstår.

```html
<button aria-label="Favorit">
  <mint-icon name="heart_small"></mint-icon>
</button>
```

*Utan aria-label skulle en skärmläsare endast säga "knapp" men med kommer den säga "Favorit, knapp"*

### ...som kan ha ett valt (på/av) tillstånd
En knapp som kan aktiveras/avaktiveras av användaren behöver anpassas så att skärmläsaren kan förstå dess tillstånd.

```html
<button aria-label="Favorit" aria-pressed="true">
  <mint-icon name="heart_small"></mint-icon>
</button>
```

*Utan aria-pressed skulle en skärmläsare endast säga "Favorit, knapp" men med kan den säga något i stil med "Favorit, knapp, vald"*

Alternativt om det är en på/av-switch:

```html
<button aria-label="Skicka notifieringar via sms" role="switch" aria-checked="true">
  <mint-icon name="like_small"></mint-icon>
</button>

<!-- eller -->

<span id="customId">Skicka notifieringar via sms</span>
<button aria-labelledby="customId" role="switch" aria-checked="true">
  <mint-icon name="like_small"></mint-icon>
</button>
```

*Utan aria-checked och role skulle en skärmläsare endast säga "Skicka notifieringar via sms, knapp" men med dessa så kan den säga något i stil med "Skicka notifieringar via sms, på/av, switch"*


### ...som visar/döljer ett annat element
En, eller flera knappar, som visar/döljer ett relaterat element, t.ex. en meny, en informationsruta eller en expansion-panel/accordion behöver anpassas så att en skärmläsare kan förstå knappens tillstånd och eventuell koppling till andra element. 

Om innehållet som visas endast består av text (snarare än knappar/länkar) så bör innehållet få fokus vid klick.

Om det förekommer annat innehåll mellan knappen och innehållet den visar/döljer så bör innehållet få fokus vid klick.

Innehåll kan också döljas för skärmläsare genom att applicera:
- `aria-hidden="true"`
- `display: none;`
- `*ngIf="val"`

```html
<button aria-expanded="false" aria-haspopup="true">Meny</button>
<div aria-hidden="true">
  <button>Ändra</button>
  <button>Ta bort</button>
</div>

<!-- eller -->

<button aria-expanded="false">Vad betyder...?</button>
<p>Annat innehåll</p>
<div aria-hidden="true">
  Det betyder...
</div>
```

*Utan aria-expanded skulle en skärmläsare endast säga "Vad betyder...?, knapp" men med kan den säga t.ex. "Vad betyder...?, expanderad, knapp"*

## Grupp av knappar

i> På knappar som ligger i en grupp ska användaren kunna navigera mellan de olika knapparna med hjälp av tabb och/eller piltangenter. Enligt en del [WAI specifikationerna](https://www.w3.org/TR/wai-aria-practices/) ska endast piltangenter användas men enligt en användarstudie genomförd av **Axess lab** så vet användare sällan att/när de kan använda piltangenter och förlitar sig mest på navigation med tabb. 

**OBS!** grupper måste ha en label som beskriver vad gruppens syfte är.

### ... som används för inställning/filrering med flera valda element - eller - om inget annat passar
En grupp av knappar där varje knapp kan vara vald. Och om inget av de andra alternativen på denna sida passar ditt behov så är följande med stor sannolikhet good-enough. 

```html
<div role="group" aria-label="Visa endast fonder med">
  <button aria-pressed="true">Låg CO2-risk</button>
  <button aria-pressed="true">Rating</button>
  <button aria-pressed="false">Avigt under 1%</button>
<div>
```

### ...som används för inställning/filtrering med ETT valt element
En grupp av två eller flera knappar som endast kan ha ett alternativ valt t.ex. toggle-switch behöver anpassas så att en skärmläsare
kan utgöra vilka element som ingår i gruppen och vilket element i gruppen som är valt.

!> Viktigt att testa med skärmläsare om `aria-label` är applicerbar.

```html
<fieldset>
  <legend>Visa utveckling i</legend>
  <div role="radiogroup">
    <button role="radio">kr</button>
    <button role="radio" aria-checked="true">%</button>
  <div>
</fieldset>
```

Ett alternativ tills vi har en komponent som tillhandahåller ovan lösning så kan en potentiell lösning vara:

```html
<div role="radiogroup">
  <button role="radio" aria-label="Visa utveckling i kronor">kr</button>
  <button role="radio" arial-label="Visa utveckling i procent" aria-checked="true">%</button>
<div>
```

Tidigare visades nedan som exempel på lösning, gör inte så. `aria-label` läses inte upp på element med `role="radiogroup"` på iOS! 

```html
<!-- DON'T! -->
<div role="radiogroup" aria-label="Visa utveckling i">
  <button role="radio">kr</button>
  <button role="radio" aria-checked="true">%</button>
<div>
```

### ...som används för att byta innehåll utifrån ETT aktivt element
En grupp av knappar som byter ut statiskt innehåll på samma plats baserat på vilken knapp som är aktiv behöver anpassas så att 
en skärmläsare kan utgöra vilka element som ingår i gruppen, vilket element som är valt och eventuell koppling till andra element

```html
<div role="tablist" aria-label="Avanza zero">
  <button role="tab">Om fonden</button>
  <button role="tab" aria-selected="true">Handelsinfo</button>
  <button role="tab">Detaljer och nyckeltal</button>
  <button role="tab">Nyheter</button>
</div>
<div role="tabpanel">Handelsinfo innehåll</div>
```

### ...som visar/döljer ett annat element
Se exempel under "En knapp" "...som visar/döljer ett annat element"


## Avancerade knappar
Om du håller på med något mer avancerat som inte täcks av de exempel som har tagits upp på denna sida så kan ett tips vara att spana in exempel på [WAI-ARIA practices](https://www.w3.org/TR/wai-aria-practices/).
