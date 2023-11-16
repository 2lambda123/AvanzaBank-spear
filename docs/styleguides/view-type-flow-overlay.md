# Flowerlays (flow overlay)
**How-to:** [skapa ett flöde i PWA](https://wiki.avanza.se/pages/viewpage.action?pageId=66835820)

i> Används vid flöden med tydligt början och slut, där användaren behöver gå igenom fler än ett steg, t.ex. sätt in pengar, överföringar, Auto. Ett Flowerlay kan också öppnas i ett annat Flowerlay. Exempel på detta är om användaren ska sätta in pengar i Portföljgeneratorn-flödet.

**Första vyn** (1) öppnas underifrån och har ett stängkryss med undantag för om val kan göras på första vyn, då **ersätt stängkryss med avbryt**. (2)

**Inne i flödet** (3)
Hela vyerna kommer in från höger och läggs ovanpå den tidigare vyn. Progress bar visar hur långt användaren har kommit i flödet.
Pil tillbaka uppe till vänster, backar ett steg i flödet.
Avbryt uppe till höger (stänger hela flödet).
“Är du säker?”-dialog om något är ifyllt.

**Slutskärm** (4)
Vyn kommer in från höger och används för att meddela att användaren är klar med ett flöde. Använd primär knapp för att stänga ner och komma tillbaka.

![Flowerlay](/docs/_media/page-types/flowerlay.png)  

## Exempel
På varje vy i bilden nedanför står även hjälpande texter så att designer eller UXare snabbt får riktlinjer rakt in i sin egen figmafil. **Tips!** Spana även in [**när ska en rubrik ligga i eller utanför ett kort?**](/styleguides/headings-and-cards) och [**formulärdesign**](/styleguides/form).

[![Bildens alt-text](/docs/_media/guides/guideflowoverlay.png)](http://mint.avanza.se/_media/guides/guideflowoverlay.png ':target=_blank')


## Utföranden
Flowerlays presenteras här nedan som steg 1 och 2 i ett flöde. Steg 1 har ett stängkryss uppe till höger. Steg 2 har avbryt eller stängkryss med efterföljande modal som frågar om man verkligen vill avbryta flödet. 
Här syns inte heller bottennavigationen. 

### Flowerlay steg 1
| Basutförande    | Utan färgad topp |
| --------------- | ---------------- |
| ![Bildens alt-text](/docs/_media/layout/flowerlay/flowerlay_steg1_alt1_fargadtopp.png) | ![Bildens alt-text](/docs/_media/layout/flowerlay/flowerlay_steg1_alt2_liten_ingresstext_illustration.png)| <br>
| Vid scroll ![Bildens alt-text](/docs/_media/layout/flowerlay/flowerlay_steg1_alt1_scroll.png) | Vid scroll ![Bildens alt-text](/docs/_media/layout/flowerlay/flowerlay_steg1_alt2_scroll.png)| |

### Flowerlay steg 2
| Steg 2 eller vidare i ett flöde med en "action" till höger som t.ex. Avbryt. | Steg 2 eller vidare med stängkryss i högra hörnet | Steg 2 eller vidare utan pryl i högra hörnet |
| ------------- | ------------- | ------------- |
| ![Bildens alt-text](/docs/_media/layout/flowerlay/flowerlay_steg2_utan_toppyta_utan_ingresstext_med_action.png) | ![Bildens alt-text](/docs/_media/layout/flowerlay/flowerlay_steg2_liten_rubrik_stangkryss_bakatpil.png)| ![Bildens alt-text](/docs/_media/layout/flowerlay/flowerlay_steg2_liten_rubrik_bakatpil.png)| <br>

<!-- TODO: hur ska konsumenten veta om de ska ha avryt, kryss eller inget? -->