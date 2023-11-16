`COMPONENT_HEAD({"title": "Grid", "module": "GridModule"})`




i> Grid används för att enkelt kunna fördela innehåll i upp till 12 kolumner på sid-containers bredd. Antalet kolumner beror på skärmstorlek.

| Brytpunk          | Kolumner | Gutter  | Brytpunkt i pixlar |
| ----------------- | -------- | ------- | ------------------ |
| SmallPhone        | 4        | 12px    | 0-320 px           |
| Phone             | 4        | 12px    | 321-767 px         |
| Tablet            | 8        | 16px    | 768-991 px         |
| Desktop           | 12       | 16px    | 992-1199 px        |
| LargeDesktop      | 12       | 16px    | 1200-1265 px       |
| VeryLargeDesktop  | 12       | 16px    | 1366< px           |


Kolumnbredd kan anges för mobil (och uppåt), från tablet (och uppåt), från desktop (och uppåt) med siffror: 1-12, eller med ord: full, half, one-/two-/three-/four-quarter, one-/two-/three-third (endast desktop och uppåt)

<div class="component-example-container" data-example-path="_example-displayer/#/example/grid/default"></div>

## Teknisk fördjupning
Kolumnerna är mobile first, så input `size` gäller från minsta skärmen och uppåt, `tablet` tillämpas från "tablet" och uppåt. Om angiven kolumnbredd är större än antalet kolumner tillgängliga på en viss skärmstorlek så kommer de som mest ta upp 100%, t ex `size = 9` kommer vara 100% på mobil (som har 4 kolumner total) och på surfplatta (som har 8 kolumner total) men 9 kolumner bred på desktop (som har 12 kolumner totalt).

Eftersom gridet är mobile first så behöver inte samtliga input anges om de har samma värde, t ex om input `tablet="2" desktop="2"` så är `desktop="2"` överflödigt eftersom tablet = tablet och uppåt.

## API
<div class="component-library-api" data-components="grid, grid-column"></div>



[filename](includes/_componentFooter.md ':include')
