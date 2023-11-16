function renderImage(href, title, text) {
    let hasImg = false;
    let result;
    let widthAttr;

    if(href.startsWith('/') || href.startsWith('http')){
        if (!window.Docsify.util.isAbsolutePath(href)) {
            href = href.replace(/^\/docs\//, '');
        }

        hasImg = true;
    } 

    if(title && title.startsWith('width=')) {
        widthAttr = `width="${title.replace('width=', '')}"`;
    }

    result = hasImg ? `<img src="${href}" alt="${text}" ${widthAttr}>` : text;
    return result;
}