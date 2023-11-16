# Riktlinjer kring formulärdesign

i> Dessa riktlinjer för formulärdesign har tagits fram med tillgänglighet i åtanke samt vad som är appigt och inte. 

**Generella övergripande riktlinjer att ha i tankarna när ni utvecklar eller designar ett fomulär är:**
> c> ![focus](/docs/_media/layout/form_focus.png "width=300") 
> **Fokus** 
> Ha inte för många frågor i samma vy. Dela hellre upp alla frågor i flera steg istället.
>
> c> ![focus](/docs/_media/layout/form_explain.png "width=300") 
> **Förklarande** 
> Det ska alltid finnas en label i anslutning till inputfält, selects (droplistor), checkboxar m.fl.
>
> c> ![focus](/docs/_media/layout/form_easy.png "width=300") 
> **Lätt att göra rätt** 
> Om ett fält inte är obligatoriskt ska det markeras med texten (Frivillig). Detta gäller alla slags fält och formulärskomponenter så som checkboxar, inputfält, droplistor och radioknappar, 


## Validering
Error-text ska läggas under formulärelementet (nedan exempel på ett inputfält) för att undvika hoppigt gränssnitt. 
Error-texten skall få sällskap av en varningsikon för att göra det mer tydligt och tillgängligt för användaren. 

![Felhantering](/docs/_media/components/input_error.png "width=300")

Idag validerar vi oftast vid submit (när man klickar på knappen för att gå vidare eller skicka). Vid valideringen på detta sätt ska en [infobox](/components/infobox) med tema "error" vid submit-knappen. Länkarna i infoboxen ska leda till formulärelement som är felaktigt.

![Felhantering](/docs/_media/components/input_error_anchor.png "width=300")

## Textinmatning
Använd [input](/components/input).


## Att välja flera alternativ

**Använd [Checkbox](/components/checkbox) när:**
- du om listan med val inte blir för lång

**Använd [Select](/components/select) när:**
- du har väldigt många val och de riskerar att inte synas utan att scrolla

![Select](/docs/_media/components/form_select.png "width=300")

-> **DON'T** Använd INTE [Binary switch](/components/binary-switch) i formulär! Binary switch används endast till inställningar som kan vara på eller av.
![Select](/docs/_media/components/form_binaryswitch.png "width=300")


## Att välja ett alternativ

**Använd [radio bar](/components/radio-bar) när:**
- alternativen får plats på bredden
- du hellre tar upp horisontellt utrymme

![Radio bar](/docs/_media/components/form_buttontoggle.png "width=300")

**Använd [radio group](/components/radio-group) när:**
- alternativen inte får plats på bredden i en radio bar
- du hellre tar upp vertikalt utrymme

![Radio group](/docs/_media/components/form_radio.png "width=100")

**Använd [select](/components/select) när:**
- du har väldigt många val och de riskerar att inte synas i vyn utan att scrolla

![Select](/docs/_media/components/form_select.png "width=300")

-> **DON'T** Använd INTE [Toggle switch](components/toggle-switch) i formulär! Toggle switch används för att växla eller filtrera innehåll.
![Toggle switch](/docs/_media/components/form_dont_toggleswitch.png "width=300")
[Läs mer om Toggle Switch](/components/toggle-switch)



## Select
En [select](/components/select)  (dropdown) får triggas med knapp i mobil istället för den traditionella layouten. I desktop finns inte det valet. 

**Select i desktop blir alltid ett vanligt inputfält:**

![Select desktop](/docs/_media/components/form_select_desktop.png "width=300")

**Select i mobil**
- kan du trigga med hjälp av en knapp (som i sin tur kan se ut som en droplista om man vill). Här har man lite mer spelrum att göra en egen select för att det ska bli ett mer appigt gränssnitt. 

![Select mobile](/docs/_media/components/form_select_mobile.png "width=300")


?> **Info** FYI: Om det passar bättre att visa alternativen på en egen sida (t.ex. en undersida) istället för i en select, så kan du välja det. 

## Step indicator och progress bar
Dessa komponenter hjälper användaren att förstå hur mycket av flödet som återstår. 

**Använd [Progress bar](/components/progress-bar) när:**
- du ska visa hur många steg ett flöde är i mobilen 

![Select mobile](/docs/_media/components/form_progressbar.png "width=300")


**Använd [Step indicator](/components/step-indicator) när:**
- i desktop och du har relativt få steg, ca 3-4 stycken. För många steg gör det svårt att läsa vad de olika bollarna handlar om. De trycks ihop och går i varandra vid för många steg. 

![Select mobile](/docs/_media/components/form_stepindicator.png "width=400")








