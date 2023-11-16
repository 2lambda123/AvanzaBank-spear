`COMPONENT_HEAD({"title": "Binary switch", "module": "BinarySwitchModule", "package": "@avanzabank/mint-binary-switch"})`



i> Binary switch används när en inställning ska kunna slås på eller av. Funktionsmässigt beter sig en binary&nbsp;switch som en [checkbox](checkbox).

<div class="component-example-container" data-example-path="/mint/binary-switch/#/dj"></div>

## Exempel med label
!> En binary switch måste ha en label, se exempel nedan!

<div class="component-example-container" data-example-path="/mint/binary-switch/#/label"></div>
<div class="component-example-container" data-example-path="/mint/binary-switch/#/with-description"></div>

## Do's and Dont's
> +> ![DO](/docs/_media/components/Binary_switch_Do.png)
> **DO** En binary switch används för att slå av eller på en inställning
>
> -> ![DONT](/docs/_media/components/Binary_switch_Dont2.png)
> **DON'T** Vid flervalsalternativ i en lista på detta vis skall inte binary switchen användas. Använd istället [checkboxar](checkbox.md).
>
> -> ![DONT](/docs/_media/components/Binary_switch_Dont1.png)
> **DON'T** I listor där endast ett val kan väljas skall inte binary switchen användas. Använd istället en [radio group](radio-group.md).
>

### Skillnad binary switch och checkbox
Checkbox används när man ska godkänna avtal, välja objekt tex i en lista. Vanligtvis aktiveras inte valet förrän man bekräftar valen, tex med en spara-knapp.

## API
<div class="component-library-api" data-package-name="binary-switch"></div>


[filename](includes/_componentFooter.md ':include')
