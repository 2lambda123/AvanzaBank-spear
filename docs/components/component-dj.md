
`COMPONENT_HEAD({"title": "Component DJ", "package": "@avanzabank/component-dj", "module": "ComponentDjComponent"})`

Component DJ är ett verktyg för att utveckla, testa och dokumentera komponenter.
Verktyget är inspirerat av [Storybook](https://storybook.js.org/) men är byggt för att vara
enklare att använda och lättare att anpassa efter Avanzas behov.

DJ uppmuntrar till [komponentdriven utveckling](https://www.componentdriven.org/) där man isolerat utvecklar en komponent fristående från den kontext där den senare används.
Detta gör komponenten lättare att testa och man får dokumentation på köpet. Hur förklaras nedan.


<div class="component-example-container" data-height="602" data-example-path="/component-dj/"></div>


## Användning
```markup
<aza-component-dj
    [component]="ComponentToShowInDj"
    [defaultInputValues]="{
        text: 'Default input value for the input named "text"'
    }"
    [viewOptions]="{
        width: 400                      
    }"
>
</aza-component-dj>
```
Värdet för inputen `[component]` är klassen för den komponent som ska visas i DJ. Övriga inputs krävs ej.
Det rekommenderas att komponenten som visas i DJ är en [Standalone komponent](https://angular.io/guide/standalone-components).
Annars måste man manuellt se till att komponentens modul är laddad så att alla dependencies finns på plats.

## Utveckling med dokumentation på köpet

Så här utvecklar du en ny komponent med Component DJ och får dokumentation på köpet:

1. Skapa en ny tom komponent
2. Skapa en ny route i en "dokumentationsapp"
3. Lägg in en DJ på den nya routen och skicka in den nya tomma komponenten som input till DJn
4. Börja utveckla komponenten!

En "dokumentationsapp" är en helt vanlig Angular-app som publiceras så att den blir åtkomlig för andra.
Även om den inte publiceras ger den viss dokumentation eftersom utvecklare kan köra `serve`-kommandot för att se den.

## Lättare att testa

Genom att komponenten finns i en DJ i en dokumentationsapp finns det ett isolerat ställe man kan köra tester
mot och där man enkelt kan ändra på olika inputs och validera att komponenten reagerar korrekt på interaktion.
[Cypress](https://www.cypress.io/) eller [Playwright](https://playwright.dev/) är bra verktyg för att testa
gränssnittskomponenter.

Exempel:
- [Cypress-tester för slider-with-input](https://redacted/frontend/gaia/-/blob/main/apps/mint/slider/src/examples/slider-with-input.cy.ts). Testa med `npx nx cypress mint-slider` i [Gaia-repot](https://redacted/frontend/gaia/-/tree/main/libs/mint/slider).

## Annotering för bättre dokumentation och DJ-upplevelse

I paketet `@avanzabank/component-docs` finns `@Documentation` som kan används för att annotera
en komponents inputs med ytterligare information som förbättrar dokumentationen och användarupplevelsen i DJ.
T.ex. genom att ange `type` kan DJ visa en lämplig kontroll för inputen.

Exempelkomponenten annoterades t.ex. så här:
```typescript
export class ExampleComponent {
    @Documentation({
        description: 'Texten som ska visas i komponenten',
        type: 'string'
    })
    @Input()
    text = 'Den här texten är från ExampleComponent'

    @Documentation({
        description: 'Gör texten fet',
        type: 'boolean'
    })
    @Input()
    isBold = false
}
```

[filename](includes/_componentFooter.md ':include')
