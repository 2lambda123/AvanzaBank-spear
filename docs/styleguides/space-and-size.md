# Mått och avstånd

## Avståndssystem 
Använd CSS-klasser med formen `mint-[prop][direction]-[space]-[breakpoint]` för att sätta margin eller padding.

- `Prop` kan vara antingen `margin` eller `padding`
- `Direction` kan vara `top`, `right` , `bottom`, `left`, `x` eller `y` för olika riktningar samt horisontellt eller vertikalt. Utelämna för att applicera i alla riktningar.
- `Space` kan vara `4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120, 240`. Definierar pixelavstånd.
- `Breakpoint` kan vara `sm`, `md`, `lg` eller `xl`. Använd för att applicera avståndet endast för en viss breakpoint och uppåt. Utelämna för att applicera på alla storlekar.

### Exempel

`mint-margin-4` = margin: 4px (på alla sidor om elementet)<br>
`mint-margin-top-12` = margin-top: 12px<br>
`mint-padding-x-8` = padding-left: 8px; padding-right: 8px<br>
`mint-padding-16-lg` = padding: 16px från `$screenSizeLg` och uppåt

### Teknisk beskrivning
För att avståndssystemet ska finnas tillgängligt krävs att `@import '@avanzabank/mint-foundation/styles/base-global'` finns i projektets bas-CSS.



## Rubriker och avsnitt/sektioner på en sida

<div class="columns">
<div class="column">

**Avsnitt/sektioner på en sida**  
Mellan avsnitt och sektioner är det oftast 24px eller mer (t.ex. grundsidor där det oftast är 36px) till nästa element. Nästa element kan vara ett kort, en illustration, en lista eller en rubrik.

**Rubriker**  
Mellan rubrik och ingress vertikalt sett är det oftast 12 px. 
Mellan rubrik och en lista är det oftast 8px. Detta pga att listan innehåller padding (luft) som då bidrar till det luftiga. 


[**När ska en rubrik ligga i eller utanför ett kort?**](/styleguides/headings-and-cards)

</div>
<div class="column">

![Exempel på avstånd mellan avsnitt och rubriker](/docs/_media/layout/mall_avsnitt_och_rubriker.png) 

</div>
</div>
