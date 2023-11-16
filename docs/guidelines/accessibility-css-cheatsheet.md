# CSS cheatsheet
i> Robust och responsiv CSS är en viktig faktor för att skapa tillgängliga gränssnitt som funkar för zoom och 
förändringar av typsnittsstorlek eller luft. På Avanza används fasta bredder och fasta höjder väldigt flitigt, vilket kan ställa till problem.

Ett bra sätt att testa hur robust och responsivt något är, är att ändra font-storlek, vilket man kan göra med dessa [bookmarklets](https://wiki.avanza.se/pages/viewpage.action?spaceKey=UTV&title=Bookmarklets).


## Höjd
Att jobba med fasta höjder kan ställa till det när innehåll växer eller flödar om. Vi bör alltid undvika att använda fasta höjder men det finns såklart undantag. 
T.ex. element med egen scroll som contextual overlay och right overlay kan ha en fast höjd. Eftersom vi ibland är begränsade i vad vi kan göra på bredden, t.ex. p.g.a. skärmstorlekar, så blir det extra viktigt att säkerställa att vi kan jobba på höjden.

> -> ![Fast höjd](/docs/_media/guidelines/css-dont-height-do-min-height.png)
> **DON'T** Sätt inte `height` på element
> 
>
> +> ![Minsta höjd](/docs/_media/guidelines/css-do-min-height.png)
> **DO** Sätt `min-height` på element
> 


När vi har boxar i flera rader och/eller kolumner som ska vara lika stora så kan det vara frestande att sätta en fast höjd men genom att använda `grid` (eller `flexbox` om du vill ha samma höjd på element som ALLA ligger på EN och samma rad) så får vi en mer robust och responsiv layout där boxar kan växa när innehållet innuti växer eller flödar om.   

> -> ![Fast höjd](/docs/_media/guidelines/css-dont-height-do-grid.png)
> **DON'T** Sätt inte `height` på element
>
> +> ![Minsta höjd](/docs/_media/guidelines/css-do-grid.png)
> **DO** Använd `grid` (eller `flexbox`)

**Exempel CSS**
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-gap: 20px;
}
```


## Bredd
Även fasta bredder kan ställa till problem när innehåll växer, då kan det vara värt att se över hur saker flödar eller hur bredder sätts.

I CSS finns det många enheter att jobba med; pixlar, rem, procent, ch (antal tecken), mm. När det finns utrymme för bredden att växa kan det vara värt att fundera på om pixlar verkligen är det bästa valet.

> -> ![Fast bredd](/docs/_media/guidelines/css-dont-pixel-width.png)
> **DON'T** Sätt inte bredd i pixlar på element som har utrymme att växa.
>
> +> ![Rem bredd](/docs/_media/guidelines/css-do-rem-width.png)
> **DO** Använd rem på element som bör växa om textstorleken blir större.

?> **Tips** Mint foundation SCSS har en funktion som kan underlätta konverteringen till rem, `getPixelValueAsRem`.


Ibland kanske vi inte kan göra något åt bredden som element befinner sig i men då kan vi istället fundera på hur saker ska flöda om när de inte riktigt får plats. 

> -> ![Fast bredd i procent](/docs/_media/guidelines/css-dont-no-reflow.png)
> **DON'T** Tvinga in innehåll till en rad när innehållet inte får plats
>
> +> ![Låt saker flöda om med flexbox](/docs/_media/guidelines/css-do-flexbox-reflow.png)
> **DO** Använd `flexbox` för att låta innehållet flöda om

**Exempel CSS**
```css
.container {
    display: flex;
    flex-flow: row wrap;
    width: 430px;
}
.shortcut-button {
    flex: 1 0 0%;
}
```

?> Content queries kan med fördel användas som en "progressive enhancement". De har dock begränsat webbläsarstöd i dagsläget, så vi kan inte förlita oss på det som en ensam lösning förrän slutet av **2024/2025**

<div class="columns">
<div class="column">

```css
.container {
    display: flex;
    flex-flow: row wrap;
    width: 430px;
    container-name: shortcut-container;
    container-type: inline-size;
}
.shortcut-button {
    flex: 1 0 0%;
}
@container shortcut-container (max-width: 53ch) {
  .shortcut-button {
    flex-basis: 100%;
  }
}
```

</div>
<div class="column">

![Progressive enhancement](/docs/_media/guidelines/css-do-progressive-enhancement-reflow.png)
  
</div>
</div>
