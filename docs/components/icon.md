`COMPONENT_HEAD({"title": "Icon", "package":"@avanzabank/mint-assets", "module": "IconModule"})`

i> Våra ikoner finns i två storlekar; small 16x16px och medium 28x28px.
Det är endast tillåtet att ändra till en annan storlek när ikonen ligger i anslutning till text med storlek 10px, då får ikonen vara 10px hög/bred.

!> Undvik deprekerade ikoner, dessa kommer tas bort på sikt när de har en lämplig motsvarighet som är implementerad.

## Utforska våra ikoner
<iframe class="full-width" style="height: calc(100vh - 320px);" src="/mint/assets/#/icons"></iframe>

## Generella riktlinjer
Rekommenderat tema för chevrons är `neutral`.

Temat `non-essential` får endast användas på icke-informationbärande ikoner då färgen inte är tillgänglig.

## Lägg till nya ikoner
Ikoner ska namnges enligt följande standard:
* Namnet ska vara på engelska
* Namnet ska beskriva hur ikonen ser ut snarare än vilken funktion den har. T.ex. en ikon föreställande en soptunna får namnet `trash_can` snarare än `delete`.

För att lägga till nya ikoner behöver du lägga till dom i Mint Assets i både [Gaia](http://redacted/frontend/gaia/-/blob/main/libs/mint//assets/README.md ':target=_blank') och [Figma](https://www.figma.com/file/1prEMaT9o7QODJwyjU1uBM/mint-assets?node-id=332%3A818&t=9954hChzXDLN2lgJ-1 ':target=_blank'). Glöm inte att publicera uppdateringarna i Figma.

## Teknisk beskrivning
Ikoner ärver textfärg (`color`) från sin förälder om ingen färg sätts med tema eller CSS-override,
detta innebär att ikoner (utan tema/CSS-override) som ligger i t.ex. knappar får samma färg som texten i knappen.
Vid CSS-override av färg; sätt `color` på `mint-icon` och inte `fill`.

## API
<div class="component-library-api" data-package-name="assets" data-show-only-components="mint-icon"></div>

[filename](includes/_componentFooter.md ':include')
