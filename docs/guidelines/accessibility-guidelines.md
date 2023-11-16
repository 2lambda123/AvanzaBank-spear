
[comment]: # "Om du ändrar något här måste det också ändras i checklistan på wikin!"

# Tillgänglighetriktlinjer
i> Tillgänglighet handlar om att innehåll ska vara **möjligt att uppfatta, kontrollera och förstå av användaren**, samt vara **kompatibel med tekniken** (webbläsare, skärmläsare, tangentbord etc.).

Användare har olika förutsättningar när de konsumerar våra appar och webb. De har olika enheter och webbläsare, varierande datorvana och olika sätt att navigera/interagera (mus, tangentbord, gester, skärmläsare). De kan även vara personer med funktionsvariation som till exempel har en synnedsättning, nedsatt finmotorik eller hjärntrötthet.

<details class="a11y-details" id="content-creation">
  <summary>
    <span class="summary-heading">När du skapar innehåll</span>
    <span class="summary-description">För dig som fyller våra gränssnitt med texter, bilder, grafik etc. Innehåll helt enkelt.</span>
  </summary>
<div class="a11y-details-content">
<h3>Texter</h3>
  <ul>
    <li>Formuleringar är konsekventa och lätta att förstå utan visuell kontext (anta inte att användaren tagit del av det innehåll som ligger före/efter t.ex. en länk)</li>
    <li>Det framgår vad som händer när jag klickar på länkar/knappar. Vi skriver <strong>aldrig</strong> bara ”Läs mer”, ”Ladda ner” etc. Det ska tydligt framgå i länken vad användaren kommer läsa mer om/ladda ner</li>
    <li>Namngivningen på samma funktionalitet är konsekvent, t.ex. blanda inte ”Ändra” och ”Redigera”</li>
    <li>Undvik instruktioner baserat på färg, form, storlek eller visuell placering. T.ex. ”den stora gröna knappen till höger”</li>
  </ul>

<h3>Bilder, ikoner och illustrationer</h3>
  <p>Allt som inte är text ska ha en beskrivning.</p>
  <ul>
    <li>Bilder ska ha beskrivande alt-texter</li>
    <li>Undvik text i bilder, men om text finns i bilden ska den även finnas i alt-texten</li>
  </ul>

<h3>Formulär</h3>
  <ul>
    <li>Information som behövs för att fylla i ett inputfält på ett korrekt sätt ska finnas i label och inte i placeholder</li>
  </ul>

<h3>Temporärt innehåll</h3>
  <p>Element som endast syns på hover eller vid tangenbordsfokus (t.ex. tooltips)</p>
  <ul>
    <li>Placera ingen essensiell information i dessa element</li>
  </ul>
</div>
</details>
<details class="a11y-details" id="design">
  <summary>
    <span class="summary-heading">När du designar</span>
    <span class="summary-description">För dig som designar gränssnitt med stora penseldrag eller är pixel-pushare.</span>
  </summary>
<div class="a11y-details-content">
    <em>För att minska fel vid överlämningar rekommenderar vi att ni, i era skisser, annoterar rubriksnivåer och ikonknappar med text som motsvarar den text knappen skulle haft om det inte var en ikonknapp.</em>
  <h3>Responsiv design</h3>
  <p>Vår design är kompatibel med användarens inställningar och teknik. Vi säkerställer att våra gränssnitt inte förlorar information:</p>
  <ul>
    <li>När storlek på webbläsarfönster ändras</li>
    <li>När textegenskaper så som storlek (minst 200% större) och avstånd ändras</li>
    <li>När textinnehåll blir kortare/längre</li>
    <li>När användare zoomar upp till 400%</li>
  </ul>

<h3>Kontraster och färg</h3>
  <ul>
    <li>Komponenter, grafik och text över 18px har ett kontrastvärde på minst 3:1 mot bakgrunden</li>
    <li>Text under 18px har ett kontrastvärde på minst 4,5:1 mot bakgrunden</li>
    <li>Vi använder inte enbart färg för att förmedla information</li>
  </ul>

<h3>Texter</h3>
  <ul>
    <li>Använd semantiska typsnitt</li>
  </ul>

<h3>Knappar och länkar</h3>
  <ul>
    <li>Knappar har en klickyta på minst 32x32px</li>
    <li>Textknappar som bara har en ikon måste ha en klickyta på 24x24px</li>
    <li>Luften mellan klickbara objekt måste vara minst 16px om klickytan är mindre än 44x44px</li>
    <li>Knappar för viktig funktionalitet (allt som har inverkan på användarens konto/innehav/sparande/investeringar) innehåller text, inte bara en ikon</li>
    <li>Länkar får inte bara innehålla en ikon</li>
  </ul>

<h3>Formulär</h3>
  <ul>
    <li>Instruktioner för att fylla i ett formulär placeras alltid först</li>
    <li>Validering förlitar sig inte på enbart färg utan måste kompletteras med t.ex. ikon och text</li>
    <li>Information som behövs för att fylla i ett inputfält på ett korrekt sätt ska finnas i label och <strong>inte</strong> i placeholder</li>
  </ul>

<h3>Temporärt innehåll</h3>
  <p>Element som endast syns på hover eller vid tangenbordsfokus (t.ex. tooltips)</p>
  <ul>
    <li>Är placerat så det inte täcker viktig information</li>
  </ul>

<h3>Tangentbord</h3>
  <ul>
    <li>Fokusordningen är förutsägbar och lätt att följa</li>
  </ul>

<h3>Skärmläsare</h3>
  <ul>
    <li>Uppläsningsordningen är förutsägbar och lätt att följa</li>
    <li>När vi har funktionalitet som förlitar sig på gester (typ svajp, skakning, o.s.v.) så ska det finnas alternativ som inte kräver gester. T.ex. en knapp som gör samma sak, dubbelklick, eller liknande</li>
    <li>Använd inaktiverade (disabled) element med försiktighet då de inte läses upp av skärmläsare</li>
  </ul>

</div>
</details>
<details class="a11y-details" id="development">
  <summary>
    <span class="summary-heading">När du utvecklar</span>
    <span class="summary-description">Frontend, backend eller fullstackare. För dig som förverkligar drömmar.</span>
  </summary>
<div class="a11y-details-content">
    <h3>Kod kvalitet</h3>
        <ul>
        <li>Följ HTML5 standard</li>
        <li>Använd semantisk HTML i första hand</li>
        <li>Använd <a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics" target="_blank">WAI-ARIA</a> i andra hand</li>
    </ul>
    <h3>Responsiv design</h3>
    <p>Vår design är kompatibel med användarens inställningar och teknik. Vi säkerställer att våra gränssnitt inte förlorar information:</p>
    <ul>
        <li>När storlek på webbläsarfönster ändras</li>
        <li>När textegenskaper så som storlek (minst 200% större) och avstånd ändras</li>
        <li>När textinnehåll blir kortare/längre</li>
        <li>När användare zoomar upp till 400%</li>
    </ul>
    <h3>Texter</h3>
    <ul>
        <li>Rubriker ska ha rätt hierarki</li>
        <li>Använd semantiska typsnitt</li>
    </ul>
    <h3>Knappar och länkar</h3>
    <ul>
        <li>Knappar har en klickyta på minst 32x32px</li>
        <li>Textknappar som bara har en ikon måste ha en klickyta på 24x24px</li>
        <li>Luften mellan klickbara objekt måste vara minst 16px om klickytan är mindre än 44x44px</li>
        <li>Ikonknappar ska <strong>alltid</strong> ha en <code>aria-label</code></li>
    </ul>
    <h3>Temporärt innehåll</h3>
    <p>Element som endast syns på hover eller vid tangenbordsfokus (t.ex. tooltips)</p>
    <ul>
        <li>Avfärdas genom att trycka på escape eller att flytta muspekaren/fokus från elementet eller dess trigger</li>
    </ul>
    <h3>Tangentbord</h3>
    <ul>
        <li>Fokusordningen är förutsägbar och lätt att följa</li>
        <li>Alla interaktiva element kan få fokus som är visuellt tydligt</li>
        <li>Alla interaktiva element kan interageras med</li>
    </ul>
    <h3>Skärmläsare</h3>
    <ul>
        <li>Uppläsningsordningen är förutsägbar och lätt att följa</li>
        <li>Texter är grupperade programmatiskt, d.v.s. saker som visuellt läses tillsammans ska vara grupperade tillsammans i kod</li>
        <li>Interaktiva elements status ska vara tillgängliga för skärmläsare. T.ex. när något är valt, expanderat eller aktiverat</li>
        <li>Skärmläsare får information vid viktiga förändringar på sidan. T.ex. när varukorgen uppdateras, validerings fel i formulär eller notifikationer</li>
        <li>Dolt innehåll är inte tillgängligt för skärmläsare. T.ex. innehåll bakom dialog</li>
    </ul>
</div>
</details>

## Verktyg
Hur bra är ditt team när det kommer till att skapa gränssnitt för alla? Testa under tiden ni skapar nya gränssnitt eller när ni gör förändringar i gamla, håll koll med vår [checklista](https://wiki.avanza.se/pages/viewpage.action?pageId=199203600&showComments=true).

### Avanza bookmarklets
Du hittar alla [bookmarklets på vår wiki](https://wiki.avanza.se/display/UTV/Bookmarklets).
- Semantiska typsnitt – Visar hur det ser ut med 200% ökad font-size
- Testa text spacing – Visar hur det ser ut med ökad line-height, letter-spacing, och word-spacing
- Inspektera headings


### För webbläsare
- [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/#devtools) – övergripande verktyg inbyggt i Chrome
- [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) – få en överblick av rubriks hierarkin
- [taba11y](https://chrome.google.com/webstore/detail/taba11y/aocppmckdocdjkphmofnklcjhdidgmga) – testa tabordning

!> I **Safari** behöver du ställa in att tab ska bete sig som i andra webbläsare. Det gör du under *Safari/Settings/Advanced* och klicka i *”Press tab to highlight each item on a webpage”*
 
### Mac och PC
- [Colour Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

### Skärmläsare
När du testar med skärmläsare använd webbläsaren som kommer förinstallerad på enheten för bästa kompabilitet, t.ex. Safari på iOS/macOS Chrome på Android och Edge på Windows.
- [Kortkommandon och gester för olika skärmläsare](https://dequeuniversity.com/screenreaders/)

!> Skärmläsare som TalkBack (Android), Narrator/NVDA/Jaws (Windows) är inte lika välutvecklade som VoiceOver, upplevelsen kan variera kraftigt och många av problemen/skillnaderna kan vara utanför vår kontroll att åtgärda.