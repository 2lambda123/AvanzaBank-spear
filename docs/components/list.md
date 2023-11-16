`COMPONENT_HEAD({"title": "List", "module": "ListModule", "package": "@avanzabank/mint-list"})`



i> Listor används för att gruppera relaterat textinnehåll. En lista består av flera list items som är placerade efter varandra.
Det finns tre olika typer av list items som kan blandas i samma lista: *list item*, *[list item binary switch](binary-switch-list.md)* och *[list item checkbox](checkbox-list.md)*. 

?> Det finns även andra typer av listor. Se [Date list](date-list.md) och [Radio list](radio-list).

## List item
List item är en generisk listrad som används för de tillfällen där <i>switch</i> eller <i>checkbox</i> inte kan användas.
Ett list item används i oordnade listor och kan vara antingen statiskt eller interaktivt (`<button>` / `<a>`). Det är ok att blanda statiska och interaktiva list items i samma lista. 
Det är **inte** ok att lägga en knapp i ett interaktivt list item.

<div class="component-example-container" data-example-path="/mint/list/#/single-li"></div>

Följande innehåll finns det stöd för i ett list item:

- **Graphic**: Ett grafiskt element placerat längst till vänster på listraden. Kan vara en svg, bild, [flagga](flag.md), [ikon](icon.md), [account-icon](account-icon.md) eller [institute-icon](institute-icon.md).

- **Title**: Listradens titel/primära information. Ett litet grafiskt element ([account-icon](account-icon.md) eller [institute-icon](institute-icon.md)) kan placeras framför texten. 
Använd försiktigt i kombination med andra grafiska element i listraden för att undvika ett rörigt intryck.

- **Description**: En beskrivning av titeln eller ytterligare information om listraden. Ett litet grafiskt element ([account-icon](account-icon.md) eller [institute-icon](institute-icon.md)) kan placeras framför texten.
  Använd försiktigt i kombination med andra grafiska element i listraden för att undvika ett rörigt intryck.

- **Trailing primary text**: Högerställd titel/primär information. Har stöd för teman som ändrar färg på texten. 

- **Trailing secondary text**: Beskrivning av den högerställda primära infon. Har stöd för teman som ändrar färg på texten.
  
Om textinnehållet i list item inte får plats med både höger och vänsterställd text kommer utseendet ändras. Den högerställda texten flyttar då nedanför den vänsterställda istället för att klämmas ihop bredvid.

?> Med VoiceOver presenteras grafiska element efter texten. Tänk på att mint-icon enbart är dekorativ och därmed inte har någon alt-text som läses upp med VoiceOver.

### Exempel
<div class="component-example-container" data-example-path="/mint/list/#/shortcuts"></div>

## API
<div class="component-library-api" data-package-name="list" data-show-only-components="ulli[mintListItem];ulli a[mintListItem],ul li button[mintListItem];mint-list-item-graphic;mint-list-item-title;mint-list-item-description;mint-list-item-trailing-primary-text;mint-list-item-trailing-secondary-text"></div>


[filename](includes/_componentFooter.md ':include')
