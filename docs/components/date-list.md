`COMPONENT_HEAD({"title": "Date list", "module": "ListModule", "package": "@avanzabank/mint-list"})`


i> En datumlista är en ordnad lista (`ol`) som används för att visa innehåll som är kopplat till ett datum. Ett list item date kan vara antingen statiskt eller interaktivt (`<button>` / `<a>`).

<div class="component-example-container" data-example-path="/mint/list/#/single-date"></div>

Följande innehåll finns det stöd för i ett list item date:

- **Title**: Listradens titel/primära information. Ett litet grafiskt element ([account-icon](account-icon.md) eller [institute-icon](institute-icon.md)) kan placeras framför texten.
  Använd försiktigt i kombination med andra grafiska element i listraden för att undvika ett rörigt intryck.

- **Description**: En beskrivning av titeln eller ytterligare information om listraden. Ett litet grafiskt element ([account-icon](account-icon.md) eller [institute-icon](institute-icon.md)) kan placeras framför texten.
  Använd försiktigt i kombination med andra grafiska element i listraden för att undvika ett rörigt intryck.

- **Trailing primary text**: Högerställd titel/primär information. Har stöd för teman som ändrar färg på texten.

- **Trailing secondary text**: Beskrivning av den högerställda primära infon. Har stöd för teman som ändrar färg på texten.

Om textinnehållet i list item inte får plats med både höger och vänsterställd text kommer utseendet ändras. Den högerställda texten flyttar då nedanför den vänsterställda istället för att klämmas ihop bredvid.

?> Med VoiceOver presenteras grafiska element efter texten. Tänk på att mint-icon enbart är dekorativ och därmed inte har någon alt-text som läses upp med VoiceOver.

### Exempel
<div class="component-example-container" data-example-path="/mint/list/#/calendar"></div>

## API
<div class="component-library-api" data-package-name="list" data-show-only-components="olli[mintListItemDate];olli a[mintListItemDate],ol li button[mintListItemDate];mint-list-item-title;mint-list-item-description;mint-list-item-trailing-primary-text;mint-list-item-trailing-secondary-text"></div>


[filename](includes/_componentFooter.md ':include')
