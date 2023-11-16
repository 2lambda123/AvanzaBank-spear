`COMPONENT_HEAD({"title": "Notification messages", "module": "InfoboxModule","package": "@avanzabank/mint-infobox"})`



Används för att visa temporära meddelande i form av [infoboxar](infobox) i toppen av skärmen som försvinner efter en given tid (standard är 2000 ms).

## Användning
Injecera NotificationMessagesService i en komponent och kalla därefter på .notify(...)-metoden för att trigga meddelanden i komponenten.

!> `<mint-notification-messages></mint-notification-messages>` måste finnas på sidan för att meddelanden ska synas.
Detta kommer förhoppningsvis inte behövas i framtiden.

## Varianter
Komponenten har stöd för samma varianter som [infobox](infobox). Klicka på " ▶︎ "-knappen som visas vid hover/focus i exemplen för att trigga meddelanden.

### Error (röd)
För att informera om sånt som inte fungerar.

<div class="component-example-container" data-example-path="/mint/infobox/#/error"></div>

### Info (blå)
För neutral information.

<div class="component-example-container" data-example-path="/mint/infobox/#/info"></div>

### Positive (grön)
För att informera om saker som är "non-invasive". Positiv information.

<div class="component-example-container" data-example-path="/mint/infobox/#/positive"></div>

### Warning (gul)
För att informera om störningar.

<div class="component-example-container" data-example-path="/mint/infobox/#/warning"></div>

[filename](includes/_componentFooter.md ':include')
