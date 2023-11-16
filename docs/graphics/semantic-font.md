# Semantiska typsnitt

i> Semantiska typsnitt används för att specificera typsnitt på ett abstrakt sätt, där ett namn innehåller information om storlek, tjocklek, radavstånd, typsnitt och teckenavstånd. Semantiska typsnitt ger oss även förutsättningar för att i framtiden kunna stödja operativsystem-/webbläsar-inställningar för större/mindre textstorlek. De används även för att kunna göra övergripande uppdateringar på typsnitten utan att behöva byta ut ett typsnittsnamn eller typsnittsvärde.

Om vi är konsekventa i vår användning av typsnitt och hur vi utformar våra 
texter, bidrar vi till ytterligare stärka vårt varumärke. I första hand använder vi 
våra profiltypsnitt Roboto Avanza Slab (en modifierad version av Roboto Slab) 
och Roboto Sans.

## Utforska våra semantiska typsnitt
<iframe class="full-width" style="height: calc(100vh - 320px);" src="/mint/foundation/#/typography"></iframe>

## Generella riktlinjer
Brödtext får inte vara mindre än 14 px och långa texter får inte sättas med fetare stil utom på enstaka/få ord. Vill du feta något i brödtext använder du den semantiska typsnittsklassen för <i>paragraph</i> och markerar upp det som är viktigt med `<strong>`.

På data-tunga sidor där typsnitt i detailgruppen används får typsnittstorleken 12 px användas men att man i största möjliga mån ska använda 14 px och uppåt.

Knappar har sina egna storlekar och sin egen semantiska grupp.


## Fontfamilj
![Roboto Slag](/docs/_media/typography/roboto-slab.png) <br>
Robotoslab är vårt rubriktypsnitt. Det får användas ner till storlek 16  <br><br>

![Roboto](/docs/_media/typography/roboto-sans.png) <br>
Efter det används Roboto Sans. Den minsta fontstorleken vi använder är 10 som heter Non-essential. Non-essential får enbart användas på sådan text som sidan egentligen skulle klara sig utan. Den får endast användas i grafer och på datum. <br><br>

?> **Undantag** I vissa fall kan vi inte använda vårt egna typsnitt av olika anledningar.
Då använder vi Arial som är ett typsnitt som ofta finns installerat från
början på de flesta datorer.

## Lägg till nya semantiska typsnitt
För att lägga till nya typsnitt behöver du lägga till dom i [Mint Foundation](http://redacted/frontend/gaia/-/blob/main/libs/mint/foundation/README.md ':target=_blank') samt lägga till "text styles" och exempel i Figma biblioteket [Semantiska typsnitt](https://www.figma.com/file/tSG8eCuVYv78AzC1ej0zeX/Semantiska-typsnitt?node-id=2%3A5 ':target=_blank'). Glöm inte att publicera uppdateringarna i Figma.

## Teknisk beskrivning
För att semantiska typsnitt ska fungera krävs att `@import '@avanzabank/mint-foundation/styles/base-global'` finns i projektets bas-CSS och att pathen till font-filerna är satt med `@include setupFontFaces($fontsDir)`. Genom import av `@avanzabank/mint-foundation/styles/utils` fås sedan tillgång till [mixins](https://sass-lang.com/documentation/at-rules/mixin ':target=_blank') för att använda semantiska typsnitt.

### CSS-klasser
`<h1 class="mint-font-heading-large">`\
`<p> class="mint-font-paragraph-medium">`

### SCSS-mixin
`@include setFont($fontHeadingLarge);`\
`@include setFont($fontParagraphMedium);`

## Ladda ner våra typsnitt
* [För installation lokalt på datorn](http://mint.avanza.se/_media/fonts/ttf_fonts.zip)
* [För användning på webben](http://mint.avanza.se/_media/fonts/woff_fonts.zip)
