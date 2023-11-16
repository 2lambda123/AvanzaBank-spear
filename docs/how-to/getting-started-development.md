# Utveckling
i> Mint-komponenter för användning i kod bor i [repot Gaia](/how-to/gaia).

## Kom igång

### Så här använder du Mint i kod
För att Mints komponenter ska fungera krävs det att du har importerat och använder [Foundation-paketet](../components/foundation).

För att kunna använda en komponent använder du det paket som är angivet i sidhuvudet på komponentens sida, t.ex. `@avanzabank/component-library` eller `@avanzabank/mint-error-state`, och importerar
sedan dess Angular-modul i den Angular-modul där du vill använda den. Därefter kan du använda komponenten enligt exempelkoden på komponentens sida.

## Bidra

### Så här bidrar du till Mint i kod
Innan du börjar bidra, se till att du har läst och förstått:

* [Hur bidrar jag?](./overview)
* [Våra kodprinciper](../guidelines/code-principles)
* [Semantiska typsnitt](../graphics/semantic-font)
* [Semantiska färger](../graphics/semantic-colors)
* [README för Gaia](https://redacted/frontend/gaia/-/blob/main/README.md)

Följ sedan stegen nedan för att göra din ändring:

1. Skapa en branch i Gaia.
2. Gör din kodändring
   - Använd generatorer för att generera kod för en ny komponent, se [README](https://redacted/frontend/gaia/-/blob/main/README.md) för instruktioner.
   - Använd semantiska färger och semantiska typsnitt i så stor utsträckning som möjligt.
3. Se till att dina ändringar reflekteras i både [dokumentationen](./getting-started-documentation) och i [Figma](https://www.figma.com/file/KcPTubUKnKfQ8l2gHjvJaA/Designbiblioteket).
   - Eget bidrag till dokumentationen uppmuntras, men det går också bra att be DST att uppdatera.
   - Be antingen designern i ditt team att uppdatera Figma ([se hur här](getting-started-ux-design.md)) eller kontakta DST.
4. Skapa en merge request på din branch och ange följande i meddelandet:
   - en beskrivning av vad som är gjort och varför.
   - en bild om det skett en visuell förändring.
   - om din förändring har breaking changes eller inte.

<section class="footer" style="width:320px;">
    <div class="box support">
      <div class="box-col">
        <h2 class="box-title">Support</h2>
        <p class="box-body">Behöver du hjälp eller undrar något? Skriv till oss på Slack!</p>
        <a class="box-button" href="slack://channel?team=T0DN9EMHT&id=C8B4624HY">#designsystem_support</a>
          </div>
      </div>
</section>
