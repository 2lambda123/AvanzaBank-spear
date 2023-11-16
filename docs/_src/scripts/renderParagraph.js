function helperTpl(className, content) {
    return `<p class="${className}">${content.slice(5).trim()}</p>`
}

function renderParagraph(text) {
    let result
    if (/^!&gt;/.test(text)) {
        result = helperTpl('tip', text)
    } else if (/^\?&gt;/.test(text)) {
        result = helperTpl('warn', text)
    } else if (/^\+&gt;/.test(text)) {
        result = helperTpl('do', text)
    } else if (/^\-&gt;/.test(text)) {
        result = helperTpl('dont', text)
    } else if (/^i&gt;/.test(text)) {
        result = helperTpl('preamble', text)
    } else if (/^c&gt;/.test(text)) {
        result = helperTpl('column', text)
    } else {
        result = `<p>${text}</p>`
    }
    return result;
}