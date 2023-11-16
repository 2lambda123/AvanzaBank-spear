const componentHeadRegExp = new RegExp(/COMPONENT_HEAD\s*\((.+)\)/);
const clPackageName = '@avanzabank/component-library';

function renderCodespan(code) {
    function renderBugBadge(badgeStr) {
        return `<a class="badge bug hidden">
                    ${badgeStr}
                </a>`;
    }

    try {
        const headMatch = code.match(componentHeadRegExp);

        if (headMatch) {
            const data = JSON.parse(headMatch[1].replace(/&quot;/g, '"')); // 😬 <-------- explain!

            const package = data.package || clPackageName;
            const markup = `<div class="right">${renderBugBadge('[BUG_BADGE]')}</div></div>
                    <h1>${data.title}</h1>
                    <div class="usage-head">
                        <code>Paket: <span id="package-name">${package}</span></code><br>
                        <code>Import: ${data.module}</code><br>
                        <code>Repository: <a href="https://redacted/frontend/gaia" target="_blank">Gaia</a></code>
                    </div>`;

            return markup;
        }
    } catch (e) {
        return `<code>ERROR: ${e}</code>`;
    }
    // TODO: Make sure we didn't break any functionality by re-implementing this rendering
    return `<code>${code}</code>`;
}
