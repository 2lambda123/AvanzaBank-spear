# Design

i> Mint-komponenter för design bor i Figma. Där finns ingen skriven dokumentation utan biblioteket består enbart av de komponenter som UX/UI använder för att bygga design för produkter och tjänster.

[Gå till Mint i Figma](https://www.figma.com/file/KcPTubUKnKfQ8l2gHjvJaA/Designbiblioteket)

## Innan du bidrar
Se till att ditt bidrag uppfyller [våra kriterier](/how-to/overview?id=kriterier-f%c3%b6r-bidrag-och-%c3%a4ndringar-i-mint) och att du har läst och förstått:
* [Våra designprinciper](/guidelines/design-principles)
* [Våra stilguider](./styleguides/)
* [Semantiska typsnitt](/graphics/semantic-font)
* [Semantiska färger](/graphics/semantic-colors)


## Hur bidrar jag i Figma?
För att bidra till Mint i Figma använder vi oss av branches. Branches ger oss friheten att utforska och iterera, utan att påverka de existerande designsystem filerna.
![Building without and with a design system](/docs/_media/how-to/bidra-figma-1.png)

### Hur gör jag en branch i Figma?
1. Navigera till det library du vill göra ett bidrag till i Figma.
2. Bredvid filens namn; klicka på nedåtpilen och välj sedan **create branch**.

![Building without and with a design system](/docs/_media/how-to/bidra-figma-2.png)

### Namnge din branch
Det är viktigt att du namnger din branch logiskt.
Till exempel ”Pelles_branch-123” förmedlar inget syfte, men ”new list item property” ger en tydligare bild av vad som har bidragits med.

<ul class="no-list-style">
    <li>✅ Namnge din branch till ett deskriptivt namn</li>
    <li>✅ Skriv på engelska</li>
    <li>🚫 Använd inte under-, eller bindestreck</li>
</ul>

### Granska ditt bidrag
När du är klar med ditt bidrag måste det först granskas och godkännas. Bredvid filens namn, klicka på nedåtpilen och välj sedan **Review and merge changes**.

![Building without and with a design system](/docs/_media/how-to/bidra-figma-3.png)

För att begära en granskning, lägg till någon från DST som **Reviewer**. Tryck sedan på **Request review-knappen**.

![Building without and with a design system](/docs/_media/how-to/bidra-figma-4.png)

### Vad händer sen?
När ditt bidrag blivit godkänt och mergat till huvudfilen, kommer uppdateringen att finnas tillgänglig för alla att använda.
Be därefter en utvecklare i ditt team att göra samma bidrag i kod ([se hur här](getting-started-development)) eller kommunicera till DST att ni behöver hjälp. Det är viktigt för att hålla Mint synkad i både design och kod. 
Att dokumentera bidraget själv i Mint uppmuntras, men det går också bra att be DST att uppdatera.


<section class="footer" style="width:320px;">
    <div class="box support">
        <div class="box-title">Support</div>
        <div class="box-text">Behöver du hjälp eller undrar något? Skriv till oss på Slack!</div>
        <a class="box-button" href="slack://channel?team=T0DN9EMHT&id=C8B4624HY">#designsystem_support</a>
    </div>
</section>