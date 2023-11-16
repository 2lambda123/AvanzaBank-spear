`COMPONENT_HEAD({"title": "Progress bar", "module": "ProgressBarModule", "package": "@avanzabank/mint-progress-bar"})`



Progress bar används för att guida besökaren genom ett flöde som sträcker sig över flera steg. Den förklarar för besökaren vart i flödet man befinner och man får en uppfattning över hur mycket det är kvar innan man är klar. Progress bar används fördelaktigen när flödet består av fler än 4 steg eller om labels inte får plats.

<div class="component-example-container" data-example-path="/mint/progress-bar/#/dj?currentPercentage=33"></div>

?> **Om färre** än 5 steg så kan [Step indicator](step-indicator.md) vara ett alternativ

?> **Om det behövs ett flöde inuti ett annat flöde** kan det vara idé att varken ha progress bar eller step indicator, för att inte skapa fel förväntningar hos användaren

## DOs and DON'Ts

> +> ![DO](/docs/_media/components/Progress_bar_-_Dos_1.svg)
> **DO** Progress bar
>
> +> ![DO](/docs/_media/components/Progress_bar_with_steps_-_Dos_2.svg)
> **DO** Progress bar med stegindikator placerat till höger

> -> ![DON'T](/docs/_media/components/Progress_bar_with_steps_-_Dont_1.svg)
> **DON'T** Progress bar med färre än 4 steg
>
> -> ![DON'T](/docs/_media/components/Progress_bar_with_steps_-_Dont_2.svg)
> **DON'T** Progress bar med stegindikator placerat till vänster

## API
<div class="component-library-api" data-package-name="progress-bar"></div>



[filename](includes/_componentFooter.md ':include')
