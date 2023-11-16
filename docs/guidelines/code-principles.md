# Kodprinciper
i> Komponenter i komponentbiblioteket ska vara dumma komponenter, det vill säga presentationskomponenter som inte vet vart datan kommer ifrån. Koden bör följa best practices enligt [Angular styleguide](https://angular.io/guide/styleguide#!#05-16) och visionen är att alla komponenter ska följa våra riktlinjer nedan. 

För att uppmuntra kreativitet, experimenterande och bidrag till komponentbiblioteket så måste inte alla komponenter möta alla riktlinjer från start. Därför har vi uppmärkningen **lab** för att indikera vilka dessa komponenter är.

## Dokumentation
- Övergripande syfte med komponenten.
- Dokumentera input/output som ej är självförklarande.

## Responsivitet
- Responsiv (mobile first), adaptiv vid behov. Fungerar i alla skärmstorlekar från 320px och uppåt.
- En komponent är inte kanalspecifik. I specialfall när en komponent frångår detta, uttrycks det tydligt via selectorn.
- Använd endast befintliga mixins och breakpoints. Vid behov av ny diskutera på FEstival-forum eller [Webbfrontend-kanalen](https://avanzabank.slack.com/archives/C010N6WG22Z) i Slack.

## Avgänsat syfte
- En komponent har ett tydligt syfte och användningsområde, vi förändrar ej det syftet genom inputs.
- En komponent är isolerad utan beroenden till andra komponenter. Komposition är ok när:
    - semantiken stämmer överens – **OBS!** Bara för att utseendet på en komponent är lika innebär inte automatiskt att semantiken är samma
    - när komponenten är en utökning av funktionalitet, t.ex. slider och slider with input
    - när komponenten är adaptiv, utan att modifiera komponenten man har ett beroende till, t.ex. contextual menu som visas i contextual overlay i mobil.

## API
- Sträva efter så få inputs som möjligt per komponent.
- Inputs och outputs är typade så strikt det går (union type är lämplig för att begränsat antal giltiga värden).
- Använd inte observables eller config-objekt som inputvärden.
- Inputs och outputs ska ha beskrivande namn (verb passar ofta för outputs).
- Använd inte alias på inputs eller outputs.
- Använd setters om det krävs logik för att hantera nya inputvärden istället för att ha logiken i `ngOnChanges` eller `ngOnInit` (som bara körs en gång).
- Formulärkomponenter ska implementera `ControlValueAccessor`-interfacet.
- CSS-klasser och data-attribut är inte ett en del av en komponents API. Undvik om möjligt att exponera CSS-klasser eller data-attribut på host-elementet.
- Prefixa saker som hamnar i globalt scope med "mint":
  - Komponentselektorn ska börja med "mint-" (mint-card) eller "mint" (mintButton).
  - CSS-klassnamn på host-elementet ska börja med "mint-"
  - data-attribut på host-elementet ska börja med "data-mint-"

## Test
- Sträva efter att skriva tester innan du utvecklar (Test Driven Development)
- Ge tester beskrivande namn. "Describe" bör ange ett substantiv medan "it" bör börja med "should ..." så att testet kan läsas som en mening.
- Gränssnittet (DOMen) testas med [Cypress](https://www.cypress.io)
- Funktioner testas med unittester
- Sträva efter att skriva kod så att du kan testa rena funktioner
- Write time: Kom ihåg att verifiera att testet failar 
- Fokusera på case som har stora konsekvenser vid fail
- Använd semantiska selektorer i Cypress-tester med hjälp av [Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/).

## Tillgänglighet
- Följer HTML5-standarden.
- Semantisk HTML i första hand, komplettera med ARIA i andra hand.
- Särskilj semantik i HTML från utseende i CSS.
- Komponenter med egenbyggda form-element som inte har någon semantisk betydelse, och därför inte kan associeras med en `<label>`, ska ha in-parametrar för `aria-label` och `aria-labelledby`. [Element som **kan** associeras med en `<label>`](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#labelable)
- Komponenter med semantiska form-element ska ha en in-parameter för `id`, så att man kan koppla ihop komponenten med en `<label>`.
- Komponenter har logisk struktur och beteende [och har möjlighet att ingå i en yttre logisk struktur (typ när man använder komponenten)]
- Tangentbordsnavigering fungerar [internt och är möjlig att koppla på komponenten externt]
- [Möjliggör en] meningsfull upplevelse med skärmläsare

?> Läs mer om våra [tillgänglighetsriktlinjer](accessibility-guidelines), spana in denna [HTML cheatsheet för knappar, formulärfält och rubriker](accessibility-html-cheatsheet) och [CSS cheatsheet för bredd och höjd](accessibility-css-cheatsheet), samt ytterligare [kodexempel på hur olika knappbeteenden görs tillgängliga för skärmläsare](accessibility-button)

## SCSS/CSS
- Använd våra [Semantiska färger](../graphics/semantic-colors) och [Semantiska typsnitt](/graphics/semantic-font).
- Håll CSS-specificiteten lagom generell för att underlätta ändringar. 
  Exempelvis kan styling på tagg-selektorer som t.ex. `a` eller `p` få oväntade konsekvenser eftersom de är så generalla, 
  medan styling på `aza-my-component.some-class.another-class p.bold` försvårar möjligheten att modifiera innehåll/komponenter i en kontext.
- Undvik att nästla i SCSS. Max 2 nivåer (med undantag för pseudoklasser/pseudoelement). 
  Att nästla ökar specificiteten och riskerar även att öka tiden det tar för webbläsaren att tolka CSS.
- Namn ska vara beskrivande. T.ex:
  - Klasser som representerar state kan prefixas med `.is-` eller `.has-`, t.ex. `.is-active`, `.is-selected`, `.is-disabled`, `.is-loading`, `.has-loaded`, `.has-error`, osv.
- Använd inte `!important`, om det inte är ett proaktivt slutgiltigt state som vid t.ex. `disabled` eller `hidden`.
- Mobile first (min-width) media queries, undantag när antalet overrides blir avsevärt mycket större än vid desktop first (max-width) media queries som t.ex. mobil navigation. 
  Eftersträva konsekventa brytpunktsvärden.
- Deklarera `@include` först i en selector då den annars riskerar att skriva över angiven CSS som deklarerats innan. 
- Undvik okonventionella mixins eftersom de abstraherar bort information vilket gör koden mindre läsbar, samt att ändring i en mixin kan få oanade konsekvenser.
- Inga margins på komponentens host med undantag för eventuella child-komponenters host, så länge det inte påverkar layout utanför huvudkomponenten.
- Förändringar på host-element bör i första hand ske med data-attribut istället för CSS-klasser, t.ex. för theme, size, disabled, selected, osv (se API-avsnittet för namngivning)
- Om en komponent ska se annorlunda ut i en viss kontext ska den själv definiera detta. T.ex. ska mintTable inte overrida storleken på mint-checkbox
utan mint-checkbox ska själv definiera en anna storlek via `:host-context(...)`.


?> För att läsa mer om CSS specificitet, spana in: [CSS Specificity Wars](https://stuffandnonsense.co.uk/archives/css_specificity_wars.html)

## Riktlinjer för frontend på Avanza
Övergripande kod riktlinjer som gäller på Avanza gäller även för utveckling av komponenter.
- [Designriktlinjer för frontend - wiki](https://wiki.avanza.se/pages/viewpage.action?pageId=73445427)
- [Prestanda - wiki](https://wiki.avanza.se/display/IUD/Prestanda#Prestanda-Frontend)
- [Upplevd prestanda - wiki](https://wiki.avanza.se/display/IUD/Upplevd+prestanda)
