`COMPONENT_HEAD({"title": "Step indicator", "module": "StepIndicatorModule"})`



Step indicator används för att guida besökaren genom ett flöde som sträcker sig över flera steg. Den ger besökaren en överskt över vilka steg som man förväntas gå igenom innan man är klar med flödet.

Step indicator används bara i desktop. I mobilen bör progress bar användas, för en mer appig upplevelse.

<div class="component-example-container" data-example-path="_example-displayer/#/example/step-indicator/1"></div>

?> **Max 3-4 steg** får finnas och varje steg bör ha en tydlig label. För fler steg i flöde och inte labels får plats bör man använda [Progress bar](progress-bar.md)

?> **Om det behövs ett flöde inuti ett annat flöde** kan det vara idé att varken ha progress bar eller step indicator, för att inte skapa fel förväntningar hos användaren

## DOs and DON'Ts

> +> **DO** Step indicator med 4 steg eller färre med tydliga labels
>
> -> **DON'T** Step indicator med fler än 4 steg och otydliga labels

## API
<div class="component-library-api" data-components="step-indicator"></div>



[filename](includes/_componentFooter.md ':include')
