# Dokumentera i Mint

i> Dokumentation av komponenter, riktlinjer, stilguider m.m. finns samlat här på Mintsidan.
Nedan finns guider för att uppdatera eller lägga till ny information på hemsidan. 

## Uppdatera befintlig sida
1. Klicka på ”edit” uppe i högra hörnet på den sidan du vill ändra.
2. Klicka på den blå knappen ”Open in Web IDE” i GitLab.
3. Gör de ändringar du vill göra i texteditorn. 
   - Använd gärna [lathunden](/guidelines/write-markdown) om du behöver hjälp att formatera olika element i markdown. 
4. Klicka på den blå knappen "Create commit" längst ner i vänstra hörnet när du är nöjd med dina ändringar. 
5. Lägg till ett "Commit Message" och beskriv de ändringar du gjort. Välj sedan "Create a new branch" och klicka på ”Commit”-knappen. 

?> Det går även att göra ändringar i genom att checka ut [Mint-repot](http://redacted/frontend/mint) och göra ändringarna i sin IDE istället för online.   

## Komponenter
En ny komponentsida kan med fördel kopieras från en befintlig komponentsida och uppdateras utifrån den nya komponenten.

### Sidhuvud
Överst på en komponentsida finns `COMPONENT_HEAD` som sätter en titel på sidan samt information om vilket paket, modul och repo som komponenten tillhör.
Vid migreringar till Gaia eller nya komponenter som skapas i Gaia behöver `COMPONENT_HEAD` innehålla `"package":"@avanzabank/mint-xxx"`. Om "package" inte finns antas komponenten finnas i component-library.

Under sidhuvudet bör det finnas en text som beskriver hur och när komponenten ska användas.

### Visa exempel
Exempel för komponenter som ligger i [Gaia](/how-to/gaia) kan enkelt skapas i kod (se [README.md](https://redacted/frontend/gaia/-/blob/main/README.md)) och visas på komponentens sida.
Alla exempel för en komponent publiceras till /mint/xxx där xxx i URLen motsvarar komponentnamnet.
Där finns embed-länkar för alla exempel samt Gaia Component DJ som du kan lägga in på komponentsidan med följande kod:

``` html
<div class="component-example-container" 
data-example-path="/mint/xxx/#/dj"></div>
```

Du kan öka storlek på exemplet genom att lägga till CSS-klassen `full-width`.

### API
API-tabellen för komponenten visas med följande kod:
``` html
<div class="component-library-api" data-package-name="xxx"></div>
```
Ersätt `xxx` med paketets namn, exempelvis `assets`. Du kan begränsa vilka komponenter från paketet som ska visas genom att lägga till `data-show-only-components="mint-komponent1;mint-komponent2;osv"`
