# Rörelse

i> Vi använder animation och motion för att ge mer liv till vår personlighet, för att guida våra användare vart de kan gå härnäst, för att visa att vi har uppfattat en interaktion och för att underhålla i stunder då man lätt tappar intresse.

- Tänk på att användare med t.ex. epilepsi eller hjärntrötthet m.m. [kan få problem](http://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/) om saker rör sig för mycket eller för snabbt. Animationer bör inte blinka och ska som mest pågå i 5 sekunder.
- Ta hänsyn till om användaren valt "Reduced Motion" på sin enhet. 


## Typer

> c> ![Bild feedback](/docs/_media/motion/bild1.png)  
> **Feedback**  
> Rörelse som förmedlar vart användaren befinner sig och vilka vägar som går att ta härnäst. Feedback som visar att vi har förstått vad användaren vill göra, t ex hover-effekter, indikera valt element, mm.
>
> c> ![Bild fokuserad](/docs/_media/motion/bild2.png)  
> **Uppmärksamhet**  
> Rörelse som drar till sig uppmärksamhet och bidrar till att berätta en historia, t ex grafer, progress och indikator, mm.
>
> c> ![Bild lustfylld](/docs/_media/motion/bild3.png)  
> **Lustfylld**  
> Rörelse som ger vårt varumärke mer liv och personlighet. Rörelse som överraskar positivt och firar användarens prestationer, t ex animation av grafik.


### Animationskurva
För feedback och uppmärksamhet så behöver man definera vad det är man animerar då det påverkar tid och animationskurvan.

> c> **Stil**  
> Ändring av färg på t ex bakgrund, text, border och skuggor. Animationen är linjär.  
>
> c> **Dimension**  
> Ändring av bredd/höjd på t ex element, borde och skuggor. Animationen accelererar i början och retarderar i slutet.  
>
> c> **Position**  
> Ändring av position på t ex element och skuggor. Animationen accelererar snabbt i början och retardera ungefär halva tiden.  

?> **För utvecklare:** Vid behov av att kombinera två eller tre av dessa i samma animation så finns det i kod möjlighet att använda `CombinedPropertyTypes` för respektive typ (feedback/uppmärksamhet). 

### Tidslängder
Tidslängden på en animation skiljer sig beroende på dess syfte, det vill säga om den är feedback, uppmärksamhet eller lustylld. 

![Tidslängder](/docs/_media/motion/tidslangder.png)


## Sidövergångar
Sidövergångar kan appliceras på sidtyper eller element som tar upp hela skärmen (på mobil) och animeras horisontalt eller vertikalt. Riktningen påverkar tiden.

### Animationskurva
För respektive riktning så finns 3 typer, som påverkar tid och animationskurvan. 

> c> **Ingång**  
> En sidtyp som täcker hela vyn och kommer in från höger/botten. Animationen retardera.
>
> c> **Övergång**  
> När en sida har flera steg och animation sker mellan stegen utan byte av sidtyp. Animationen använder samma animationskurva som vid ändring av position.
>
> c> **Utgång**  
> När en sidtyp som täcker hela vyn lämnar åt höger/botten. Animationen accelererar.

### Tidslängder
Grundprincipen är att de ska vara mellan: 400ms - 600ms

## Dynamiska tidslängder
Dynamiska tidslängder används för att beräkna hastighet utifrån hur stor procentuell andel, av en mobilskärm, som elementet kommer röra sig. Horisontalt varierar tiden mellan 100ms till 400ms och vertikalt mellan 100ms till 500ms. Animationen använder samma animationskurva som vid ändring av position.

Dynamiska tidslängder är bra för t ex contextual overlay som kanske tar upp 30, 50 eller 95 % av skärmens höjd. Grundprincipen är att för varje 10% ökning i distans på skärmytan, ökar hastigeten med ca 100ms

![Dynamiska Tidslängder](/docs/_media/motion/dynamiska_tidslangder.png)
![Beskrivning...](/docs/_media/motion/tre_olika_co.png)

## Exempel
Här finns några exempel på animationer som följer riktlinjerna.  
[Exempel på animering av Toggle switch ](https://www.avanza.se/sparkonto.html)   
