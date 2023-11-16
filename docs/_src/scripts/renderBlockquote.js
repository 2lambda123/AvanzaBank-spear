function renderBlockquote(quoteHtml) {
    let result;

    if(quoteHtml.startsWith('<p class="do">') 
    || quoteHtml.startsWith('<p class="dont">') ) {
        result = `<div class="dosdonts">${quoteHtml}</div>`;
    } else if(quoteHtml.startsWith('<p class="column">') ) {
        result = `<div class="columns">${quoteHtml}</div>`;
    } else {
        result = `<blockquote>${quoteHtml}</blockquote>`;
    }

    return result;
}