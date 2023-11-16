`COMPONENT_HEAD({"title": "Radio list", "module": "ListModule", "package": "@avanzabank/mint-list"})`


i> Radio list används för att välja ett alternativ av flera i en lista. Använd [radio group](radio-group) istället i formulär.

<div class="component-example-container" data-example-path="/mint/list/#/radio-list"></div>

Följande innehåll finns det stöd för i ett radio list item:

- **Graphic**: Ett grafiskt element placerat längst till vänster på listraden. Kan vara en svg, bild, [flagga](flag.md), [ikon](icon.md), [account-icon](account-icon.md) eller [institute-icon](institute-icon.md).

- **Title**: Listradens titel/primära information.

- **Description**: En beskrivning av titeln eller ytterligare information om listraden.

?> Med VoiceOver presenteras grafiska element efter texten. Tänk på att mint-icon enbart är dekorativ och därmed inte har någon alt-text som läses upp med VoiceOver.

### Exempelanvändning med ngModel
<div class="component-example-container" data-example-path="/mint/list/#/radio"></div>

## API
<div class="component-library-api" data-package-name="list" data-show-only-components="ul[mintRadioList];ulli[mintRadioListItem];mint-list-item-graphic;mint-list-item-title;mint-list-item-description;"></div>


[filename](includes/_componentFooter.md ':include')
