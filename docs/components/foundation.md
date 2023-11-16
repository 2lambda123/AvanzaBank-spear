# Foundation

<div class="usage-head">
    <code>Paket: <span id="package-name">@avanzabank/mint-foundation</span></code><br/>
    <code>Repository: <a href="https://redacted/frontend/gaia/-/tree/main/libs/mint/foundation">Gaia</a></code>
</div>

i> Foundation tillhandahåller enhetlig grundstyling och möjligheten att använda
[Semantiska färger](/graphics/semantic-colors), [Semantiska typsnitt](/graphics/semantic-font), [Avståndssystemet](/styleguides/space-and-size#Avståndssystem), media queries, osv.

## Teknisk beskrivning

För att stylesheets från `@avanzabank/mint-foundation`  ska hittas vid import krävs att följande lagts till
[stylePreprocessorOptions](https://angular.io/guide/workspace-config#style-preprocessor-options)
i Angular-appens [workspace configuration](https://angular.io/guide/workspace-config):
```
"stylePreprocessorOptions": {
  "includePaths": [
    "./node_modules"
  ]
}
```

För att semantiska färger, typsnitt och avståndssystemet ska fungera krävs att `@import '@avanzabank/mint-foundation/styles/base-global'`
finns i projektets bas-CSS och att sökvägen till font-filerna är satt med `@include setupFontFaces($fontsDir)`.
För att animationer ska fungera krävs att `MintFoundationModule` har importerats i projektets `AppModule`.

Genom import av `@avanzabank/mint-foundation/styles/utils` i SCSS fås sedan tillgång till [semantiska färger](/graphics/semantic-colors) och
[mixins](https://sass-lang.com/documentation/at-rules/mixin) för [semantiska typsnitt](/graphics/semantic-font), media queries, osv.

!> Importera aldrig filer från `mint-foundation/styles/_private/...'`, Dessa filer exponeras genom `base-global` och `utils`.

### SCSS-mixins
* [Semantiska typsnitt](/graphics/semantic-font)
* Media queries: `supportHoverState`, `phone`, `tabletAndAbove`, m.fl.
* Light/dark mode: `isDarkTheme` & `isDefaultTheme`
* Samt: `hideVisibleScrollbars`

### SCSS-funktioner
* Kontextbaserade värden: `getSafeAreaInset...`.
* Bilder i SCSS: `inline-svg` & `image-url`.

### SCSS-variabler
* [Semantiska färger](/graphics/semantic-colors)
* Breakpoints: `$screenSize...`
* Container max-widths: `$containerMaxWidth...`
* Transitions: `$transition[Feedback/Attention/Page][Style/Dimension/Position/CombinedPropertyTypes]`
* Samt: `$arbitraryLargeBorderRadius`

### CSS-klasser
* Text: `.mint-text-...`, `.mint-ellipsis`, m.fl.
* Visa/dölj element i light/dark-mode: `.mint-visible-dark-mode` & `.mint-visible-light-mode`
* Hjälpklasser: `.mint-screen-reader-only`, `.mint-secondary-link`, m.fl.

## Historik
<div id="component-history"></div>

<span id="no-history-text" class="hidden">Ingen historik finns för denna komponent.</span>
