`COMPONENT_HEAD({"title": "Dialog", "module": "DialogModule"})`



Dialoger används för att på ett prioriterat sätt uppmärksamma användaren och ofta fråga efter önskad åtgärd.
Dialoger är bra när man behöver "varna" för en action med stora konsekvenser. Antingen att användaren behöver bekräfta i dialogen, eller bara ta del av viktig information. 
**Till exempel** när användaren försöker ta bort ett värdepapper i en lista likt exemplet nedan på DO/DON'T-avsnittet så ska dialog användas. 

När något ska bekräftas i en mer utforskande ton, likt orderläggningen, så ska detta ligga i i en Contextual overlay då den inte innebär samma risknivå som där dialogerna behövs användas. 

Dialogen får endast innehålla:
- illustration
- Rubrik
- Beskrivande text
- Primär knapp 
- Sekundär knapp

!> **Utvecklare:** använd `*ngIf`, eller annan standard, för att visa/dölja dialogen.

<div class="component-example-container" data-height="400"  data-example-path="/mint/component-library/#/dialog"></div>

## Dos & don'ts
> +> ![DO](/docs/_media/components/Dialog_do3.png)
> **DO** En dialog används för att varna användaren att de håller på att genomföra en oåterkallerlig åtgärd. 
>
> -> ![DONT](/docs/_media/components/Dialog_dont2.jpg)
> **DON'T** Använd inte en Contextual overlay för sådana här åtgärder där användaren behöver vara vaksam att de håller på att utföra något oåterkallerligt. 


## Mått och avstånd
Dialogen har en brytpunkt vid 415px. Ovanför brytpunkten blir paddingen i dialogen större. Se bilder nedan.

Utanför dialogen, till höger och vänster, är det 20px marginal till telefonkant så läge dialogen är max 450px bred. Upptill och nedtill är det minst 60px till telefonkant.

> c> **Under brytpunkten ser måtten ut så här:** 
> ![Mått och avstånd för dialogrutan](/docs/_media/components/Dialog_do4.png) 
> 
> c> **Över brytpunkten ser måtten ut så här:** 
> ![Mått och avstånd för dialogrutan](/docs/_media/components/Dialog_Do_8.png) 




## API
<div class="component-library-api" data-components="dialog, dialog-heading"></div>



[filename](includes/_componentFooter.md ':include')
