`COMPONENT_HEAD({"title": "Card", "module": "CardModule", "package": "@avanzabank/mint-card"})`



i> Card används när man vill gruppera eller separera innehåll.

[**När ska en rubrik ligga i eller utanför ett kort?**](/styleguides/headings-and-cards)

<div class="component-example-container" data-example-path="/mint/card/#/basic"></div>


## Dos & don'ts
> +> ![DO](/docs/_media/components/Card_Do_1.png)
> **DO** Använd divider i kort för att separera innehåll
>
> -> ![DONT](/docs/_media/components/Card_Dont_1.png)
> **DON'T** Använd inte kort-i-kort

## Mått och avstånd
I kort är det 16px till innehåll på mobil och 24px på desktop.  
Mellan kort inom samma avsnitt är det 12 px. Mellan kort inom olika avsnitt är det 16px på tablet/desktop, t.ex. när en sida har två kolumner likt fond-guiden. 
Utanför kort, till höger och vänster, är det 8 px till telefonkant. Det är upp till card:ets ägande komponent att skapa detta, kortet har ingen logik för det.  

När viewport-bredden är 320 eller mindre ska fullbredds-kort vara utfallande, vilket innebär att de går hela vägen ut till viewport-kanten och inte har rundade hörn. Det är dock upp till card:ets ägande komponent att skapa detta beteende, kortet har ingen logik för det.

![Bildens alt-text](/docs/_media/layout/Mall_Kort.png)
![Bildens alt-text](/docs/_media/layout/Mall_Kort_med_lista.png)
![Bildens alt-text](/docs/_media/layout/Mall_Kort_med_Rubrik_och_text.png)

## Tillgänglighet
Card är bara en visuell gruppering och har ingen speciell innebörd i kod, det blir därför desto viktigare att innehållet i/utanför förmedlar stuktur och hierarki t.ex. placera en lista med flera kort i `<ul>/<ol>` och märk upp innehållet innuti med `<h[2-6]>/<p>`.

## API
<div class="component-library-api" data-package-name="card" data-show-only-components="mint-card;mint-card-header;mint-card-footer"></div>



[filename](includes/_componentFooter.md ':include')
