`COMPONENT_HEAD({"title": "Clickable card", "module": "CardModule", "package": "@avanzabank/mint-card"})`



i> Clickable cards används när man vill separera klickbara element. Använd [List](list) för att gruppera klickbara element t.ex. en lista av genvägslänkar.

Komponenten kan användas både som knappar och länkar.

?> **Tips!** Spana in vår [HTML cheatsheet](../guidelines/accessibility-html-cheatsheet) om du är osäker på om det ska vara en knapp eller en länk.


<div class="component-example-container" data-example-path="/mint/card/#/clickable-card"></div>


## Dos & don'ts
Bra att tänka på: Klickbara kort får vara max vara lika hög som den är bred, upp till absolut max 412px. Om kortet behöver överstiga 412px ska kortet inte vara klickbart. Använd då ett fast kort med en klickbar knapp i istället.

En vertikal repetering av klickbara kort får max ta upp 360px av höjden på mobilskärm,och får max vara 4 st efter varandra, annars ska det vara en lista i ett kort(obs! gäller ej horisontal-listning med t.ex. svajp)

> -> ![DONT](/docs/_media/components/Card_Dont_1.png)
> **DON'T** Använd inte kort-i-kort 
> 
> -> ![DONT](/docs/_media/components/Clickable_card_dont_1.png)
> **DON'T** Kortet får inte vara klickbart om den behöver fler än en action
> 
> -> ![DONT](/docs/_media/components/Clickable_card_dont_2.png)
> **DON'T** Listan får inte vara  högre än 360px och innehålla fler än 4 klickbara kort

> +> ![DO](/docs/_media/components/Clickable_card_do_2.png)
> **DO** När det är fyra kort eller färre kan korten läggas ovanpå varandra
>
> +> ![DO](/docs/_media/components/Clickable_card_do_1.png)
> **DO** När det är fler än fyra klickbara ingångar ska dessa läggas på ett gemensamt statiskt kort som en lista. Likt genvägar i detta exempel.
>
> -> ![DONT](/docs/_media/components/Clickable_card_dont_3.png)
> **DON'T** klickbart kort får inte vara högre än den är bred
>
> +> ![DO](/docs/_media/components/Clickable_card_do_3.png)
> **DO** Använd vanliga statiska kort med knapp i när kortet är högre än
den är bred.


## Mått och avstånd
I kort är det 16px till innehåll på mobil och 24px på desktop.  
Mellan kort inom samma avsnitt är det 12 px. Mellan kort inom olika avsnitt är det 16px på tablet/desktop, t.ex. när en sida har två kolumner likt fond-guiden. 
Utanför kort, till höger och vänster, är det 8 px till telefonkant. Det är upp till card:ets ägande komponent att skapa detta, kortet har ingen logik för det.  

Klickbara kort ska inte vara utfallande så att de tar upp hela viewport-bredden som [Card](card).

![Clickable card padding](/docs/_media/layout/Mall_Kort.png)


## API
<div class="component-library-api" data-package-name="card" data-show-only-components="button[mintClickableCard],a[mintClickableCard]"></div>



[filename](includes/_componentFooter.md ':include')
