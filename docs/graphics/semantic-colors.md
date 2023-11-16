# Semantiska färger

i> Semantiska färgnamn används för att specificera färger på ett abstrakt sätt för att i sin tur möjliggöra funktionen att kunna skapa teman för gränssnitten. 
De används även för att kunna göra övergripande uppdateringar på färgsättning utan att behöva byta ut ett färgnamn eller färgkod. Färgerna används av samtliga platformar (PWA, Android, iOS).

![image of an example of a semantic names example](/docs/_media/colors/semantiskanamn_exempelbild.png)

## Utforska våra semantiska färger
<iframe class="full-width" style="height: calc(100vh - 320px);" src="/mint/foundation/#/colors"></iframe>

## Lägg till nya semantiska färger
För att lägga till nya färger behöver du lägga till dom i [Mint Foundation](http://redacted/frontend/gaia/-/blob/main/libs/mint/foundation/README.md ':target=_blank') samt lägga till "color style" och exempel i Figma biblioteken [Semantiska färger](https://www.figma.com/file/oM2Hq8sw20FAxZcQPSWLuO/DB-Semantic-colors?node-id=0%3A1 ':target=_blank') och [Darkmode - semantiska färger](https://www.figma.com/file/baWRkhwSYY8KYoUbWUEWET/Dark-mode---Semantiska-f%C3%A4rger?node-id=0%3A1 ':target=_blank'). Glöm inte att publicera uppdateringarna i Figma.

## Teknisk beskrivning

Genom import av `@avanzabank/mint-foundation/styles/utils` i SCSS fås tillgång till semantiska `$color`-variabler som sedan kan användas i SCSS,
exempelvis: `border-color: $colorBorderDiscreet;`
