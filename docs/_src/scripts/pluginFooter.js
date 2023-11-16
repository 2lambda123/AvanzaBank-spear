function footer(hook) {
    const footer = [
        '<footer class="app-footer">',
        '<a class="footer-button" href="slack://channel?team=T0DN9EMHT&id=C8B4624HY">#designsystem_support</a>',
        '</footer>'
    ].join('');

    hook.afterEach(function(html) {
        return html + footer;
    });
}