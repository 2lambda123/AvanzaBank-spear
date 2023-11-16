`COMPONENT_HEAD({"title": "Input", "module": "InputModule"})`




'Input' med fast label ovanför är mer tillgänglig än den med floating label. Därför ska man i största möjliga mån använda denna med fast label.  Floating label ([Input with label](input-with-label)) används endast i undantagsfall där 'Input' inte går att använda, exempelvis om gränssnittet blir för rörigt med många labels synliga samtidigt. 

Inputfältet används med eller utan extra hjälptext/hinttext inuti fältet.

Inputfältet används helst alltid med label ovanför inputfältet.

!> Inputfältet måste ha en label oavsett om den syns visuellt eller ej, spana in vår [HTML cheatsheet](/guidelines/accessibility-html-cheatsheet) för exempel!

<div class="component-example-container" data-example-path="_example-displayer/#/example/input/1"></div>

<div class="component-example-container" data-example-path="_example-displayer/#/example/input/textarea"></div>

## Siffror
När vi gör inputfält för siffror så använder vi inte `<input type="number">`. Dels för att det funkar dåligt i apparna och dels p.g.a. dålig tillgänglighet. Istället använder vi `<input type="text" inputmode="numeric" pattern="[0-9]*">`. [Läs mer om problemen med type="number"](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)

<div class="component-example-container" data-example-path="_example-displayer/#/example/input/number"></div>

> +> **DO** För mer läsbara siffror använd `LargeNumberMaskDirective` som finns i Shared. Den formatterar t.ex. `1000000` till `1 000 000`, tar bort bokstäver och ser till att `,` decimaler blir `.` till beräkningen.


## Labeltexter
Om ett inputfält inte är tvingande (obligatorisk) ska detta skrivas ut. Då skriver vi ‘Frivillig’ längst ut till höger.

![input](/docs/_media/components/input_optional.png "width=300")


Ibland är det svårt att hålla en labeltext kort och koncis. Man kan då använda en (i) -ikon som öppnar en contextual overlay som beskriver eller förklarar inputfältet ytterligare. 

![input](/docs/_media/components/input_information.png "width=300")



## Do's & dont's
> +> ![DO](/docs/_media/components/input_do.png)
> **DO** Använd korta och tydliga labeltexter.
>
> -> ![DONT](/docs/_media/components/input_dont.png)
> **DON'T** Labeltexter ska vara korta och ska inte trunkeras eller vara på flera rader.
>
> -> ![DONT](/docs/_media/components/input_dont_round.png "width=300")
> **DON'T** Ett formulärinputfält skall aldrig rundas på detta sätt.
>
> -> ![DONT](/docs/_media/components/input_dont_2.png)
> **DON'T** Ett textfält måste alltid ha en labeltexter, oavsett om den syns visuellt eller ej. Om etiketten är visuellt dold måste hjälptext finnas.

## Felhantering
> +> ![Felhantering](/docs/_media/components/input_error.png "width=300")
> Vid fel markeras textfältet i rött och en ev. feltext kan användas undertill. Använd feltexten för att beskriva hur man undviker felet.

## Exempel där komponenten används
* [KYC - Nykundsflöde](https://www.avanza.se/bli-kund.html/registrera/identifiera)

## API
<div class="component-library-api" data-components="input"></div>



[filename](includes/_componentFooter.md ':include')
