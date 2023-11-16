# Dokumentera Mintsidan med markdown

## Texter

i> Ingress
``` markdown
i> Ingress
```

brödtext **fetad** *kursiv* ~~genomstruken~~ `kod`
``` markdown
brödtext **fetad** *kursiv* ~~genomstruken~~ `kod`
```

<small>finstilt</small>
``` markdown
<small>finstilt</small>
```

[Länk till Google](https://google.se) 
``` markdown
[Länk till Google](https://google.se) 
```

## Bilder

![Bildens alt-text](/docs/_media/logo_mint.svg)
``` markdown
![Bildens alt-text](/docs/_media/logo_mint.svg)
```

![Bildens alt-text](/docs/_media/logo_mint.svg "width=300")
``` markdown
![Bildens alt-text](/docs/_media/logo_mint.svg "width=300")
```

## Kolumner

> c> ![Bildens alt-text](/docs/_media/logo_mint.svg) 
> **Lorem ipsum** 
> Lorem ipsum color sit amet
>
> c> ![Bildens alt-text](/docs/_media/logo_mint.svg) 
> **Lorem ipsum** 
> Lorem ipsum color sit amet
>
> c> ![Bildens alt-text](/docs/_media/logo_mint.svg) 
> **Lorem ipsum** 
> Lorem ipsum color sit amet

``` markdown
> c> ![Bildens alt-text](/docs/_media/logo_mint.svg) 
> **Lorem ipsum** 
> Lorem ipsum color sit amet
>
> c> ![Bildens alt-text](/docs/_media/logo_mint.svg) 
> **Lorem ipsum** 
> Lorem ipsum color sit amet
>
> c> ![Bildens alt-text](/docs/_media/logo_mint.svg) 
> **Lorem ipsum** 
> Lorem ipsum color sit amet
```

## Infoboxar 
När viktig information på sidan behöver lyftas

!> **Viktigt** när det finns något man absolut måste veta.
``` markdown
!> **Viktigt** när det finns något man absolut måste veta.
```

?> **Tips** för sådant som är bra att tänka på/känna till.
``` markdown
?> **Tips** för sådant som är bra att tänka på/känna till.
```

## DOs and DON'Ts
Riktlinjer för var/när/hur man ska/inte ska göra. Använd gärna samma höjd på bilder i dessa.

> +> ![logo](/docs/_media/logo_mint.svg)
> **DO** När det ska finnas en bild till i detta fall en DO
>
> +> **DO** Och när de ska visas som grupp gör du ett krokodilgap och sen en rad till med krokodilgap, plus och krokodilgap.
>
> -> **DON'T** När det bara finns en don't i detta fall och inte flera bredvid varandra
``` markdown
> +> ![logo](/docs/_media/logo_mint.svg)
> **DO** När det ska finnas en bild till i detta fall en DO
>
> +> **DO** Och när de ska visas som grupp gör du ett krokodilgap och sen en rad till med krokodilgap, plus och krokodilgap.
>
> -> **DON'T** När det bara finns en don't i detta fall och inte flera bredvid varandra
```

## Listor

### Numrerad
1. Ordered 1
1. Ordered 2
   1. Ordered 2a
   1. Ordered 2b
   1. Ordered 2c
1. Ordered 3

``` markdown
1. Ordered 1
1. Ordered 2
   1. Ordered 2a
   1. Ordered 2b
   1. Ordered 2c
1. Ordered 3
```

### Onumrerad
- Unordered 1
- Unordered 2
  - Unordered 2a
  - Unordered 2b
  - Unordered 2c
- Unordered 3

``` markdown
- Unordered 1
- Unordered 2
  - Unordered 2a
  - Unordered 2b
  - Unordered 2c
- Unordered 3
```

## Tabell
| Vänsterställd | Centrerad    | Högerställd |
| ------------- |:------------:| -----------:|
| A1            | A2           | A3          |
| B1            | B2           | B3          |
| C1            | C2           | C3          |
``` markdown
| Vänsterställd | Centrerad    | Högerställd |
| ------------- |:------------:| -----------:|
| A1            | A2           | A3          |
| B1            | B2           | B3          |
| C1            | C2           | C3          |
```

## Kodblock

```html
<body>
    <p>Hello</p>
 </body>
```

```` markdown
```html
<body>
   <p>Hello</p>
</body>
```
````
