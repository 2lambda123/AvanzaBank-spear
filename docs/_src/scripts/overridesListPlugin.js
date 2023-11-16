function overridesList(hook) {
    hook.doneEach(function() {
        document.querySelectorAll('.overrides-list').forEach((overridesListContainer, i) => {
            overridesListContainer.id = `overridesListContainer-${i}`;

            const dataUrl = overridesListContainer.getAttribute('data-url');
            const dataGitlabPathsUrl = overridesListContainer.getAttribute('data-gitlab-paths-url');

            fetch(dataUrl)
                .then((response) => response.json())
                .then((responseAsJson) => {
                    if (responseAsJson.countDetailsTable) {
                        const listHtml = `<div>${responseAsJson.countDetailsTable
                            .map(createSeverityListItemsHtml)
                            .join('')}</div>`;
                        overridesListContainer.innerHTML = listHtml;
                    } else {
                        overridesListContainer.innerHTML = `<header class="card-header" style="border-bottom: none;">Inga overrides! 👌</header>`
                    }

                    const propertyListItemElements = overridesListContainer.querySelectorAll('.prop-list-item');

                    for (let propertyListItemElement of propertyListItemElements) {
                        propertyListItemElement.addEventListener('click', (event) => {
                            const selector = event.currentTarget.getAttribute('data-selector');
                            const property = event.currentTarget.getAttribute('data-property');
                            fetchPaths(selector, property, dataGitlabPathsUrl).then((res) => {
                                console.group(`GitLab-länkar för overrides på ${selector} { ${property}: ... }`);
                                res.gitlabUrls[selector][property].paths.forEach((p, index) => {
                                    console.log(
                                        `%c%i. %s`,
                                        'background: transparent; color: orange; line-height: 2em;',
                                        index + 1,
                                        p
                                    );
                                });
                                console.groupEnd();
                                const tip = res.descriptions?.[selector]?.[property] || '';
                                if (tip) {
                                    console.log('Tip: ' + tip)
                                }
                            });
                        });
                    }
                });
        });

        function createSeverityListItemsHtml(data) {
            const selector = data[0];
            const counts = data[1].countBySeverityAndCssProperty;
            const unsafeNeverAllowed = counts.find((group) => group[0] === 'UNSAFE_NEVER_ALLOWED');
            const unsafeNeverAllowedCount = unsafeNeverAllowed ? unsafeNeverAllowed[1].count : 0;
            const safeButUndesired = counts.find((group) => group[0] === 'SAFE_BUT_UNDESIRED');
            const safeButUndesiredCount = safeButUndesired ? safeButUndesired[1].count : 0;
            const alwaysAlllowed = counts.find((group) => group[0] === 'ALWAYS_ALLOWED');
            const alwaysAllowedCount = alwaysAlllowed ? alwaysAlllowed[1].count : 0;

            const propsLists = [
                createSeverityListItemHtml(data, 'UNSAFE_NEVER_ALLOWED', 'bad', selector),
                createSeverityListItemHtml(data, 'SAFE_BUT_UNDESIRED', 'unwanted', selector),
                createSeverityListItemHtml(data, 'ALWAYS_ALLOWED', 'ok', selector),
                createSeverityListItemHtml(data, 'NOT_DEFINED', 'notdefined', selector)
            ].join('');

            const heading = `
<div class="heading" onclick="this.parentNode.classList.toggle('expanded')">
    <span class="title">
        <span class="selector-name">${selector}</span>
        <span class="selector-count">${unsafeNeverAllowedCount ? `<span style="color:#D0184D">${unsafeNeverAllowedCount}</span>` : ''}${safeButUndesiredCount ? `&nbsp;&nbsp;&nbsp;<span style="color:#EE6A0B">${safeButUndesiredCount}</span>` : ''} ${alwaysAllowedCount ? `&nbsp;&nbsp;&nbsp;<span style="color:#059B72">${alwaysAllowedCount}</span>` : ''}</span>
    </span>
<div class="caret"><span></span><span></span></div></div>`;
            return `<div class="overrides-list-item">${heading}<div class="overrides-list-body">${propsLists}</div></div>`;
        }

        function createSeverityListItemHtml(data, severity, cssClass, selector) {
            const propertiesList = getCssPropertiesBySeverity(data, severity).map((def) =>
                createPropListItemHtml(def, selector)
            );

            if (propertiesList.length === 0) {
                if (severity === 'NOT_DEFINED') {
                    return '';
                }
                cssClass += ' empty';
                propertiesList.push(`<p>Tomt!</p><span>&#x1f44d;</span>`);
            }
            return `<div class="overrides-property-list ${cssClass}"><div>${propertiesList.join('')}</div></div>`;
        }

        function getCssPropertiesBySeverity(selectorPair, severity) {
            return selectorPair[1].countBySeverityAndCssProperty
                .filter((severityPair) => severityPair[0] === severity)
                .map((severityPair) => severityPair[1])
                .flatMap((severityValue) => severityValue.countByCssProperty);
        }

        function createPropListItemHtml(definition, selector) {
            return `<div class="prop-list-item" title="Klicka för att skriva alla instanser till console.log" data-selector="${selector}" data-property="${definition[0]}"><span>${definition[0]}</span><span class="prop-count">${definition[1].count}</span></div>`;
        }

        let cachedResponse;
        function fetchPaths(selector, override, url) {
            if (cachedResponse) {
                return new Promise((resolve) => {
                    resolve(cachedResponse);
                })
            } else {
                return fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        cachedResponse = JSON.parse(JSON.stringify(data))
                        return data;
                    })
                    .then((data) => {
                        return data;
                    });
            }
        }
    });
}
