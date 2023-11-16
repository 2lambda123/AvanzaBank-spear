function recalculateIframeHeight(ifrm, baseHeight) {
    ifrm.style.height = Math.max(baseHeight, ifrm.contentWindow.document.body.clientHeight) + 'px';
}

function componentExample(hook) {
    hook.doneEach(function () {
        document.querySelectorAll('.component-example-area').forEach((componentExampleArea) => {
            const examplesLoadings = [];
            const exampleContainers = Array.from(componentExampleArea.querySelectorAll('.component-example-container'));

            exampleContainers.forEach((componentExample, index) => {
                const path = componentExample.getAttribute('data-example-path');
                const paddingTop = Number.parseInt(componentExample.getAttribute('data-padding-top')) || 0;

                let inputWidth = componentExample.getAttribute('data-width');
                if (inputWidth === 'phone') {
                    inputWidth = 375 + 27; // Makes room for iframe sizing handle
                }

                const inputHeight = componentExample.getAttribute('data-height') || 0;
                let height = 0;
                if (inputHeight === 'phone') {
                    height = 667;
                } else {
                    height = Number.parseInt(inputHeight);
                }

                const ifrm = document.createElement('iframe');
                ifrm.id = '_' + Math.random().toString(36).substr(2, 9);
                ifrm.classList.add('component-example');
                ifrm.src = path;
                ifrm.scrolling = 'no';
                ifrm.frameBorder = 0;

                if (inputWidth) {
                    componentExample.style.width = `${inputWidth}px`;
                }

                if (height) {
                    ifrm.style.height = height + 'px';
                } else {
                    window.addEventListener(
                        'message',
                        (event) => {
                            // From example-displayer
                            if (event.data.message === 'toggle-code' && event.data.from === ifrm.id) {
                                recalculateIframeHeight(ifrm, height);
                            }

                            // From example in Gaia
                            if (event.data.message === 'new-height' && event.data.from === ifrm.src) {
                                if (inputHeight === 'phone') {
                                    ifrm.style.height = Math.max(667, Number.parseInt(event.data.height)) + 'px';
                                } else {
                                    ifrm.style.height = event.data.height + 'px';
                                }
                            }
                        },
                        false
                    );
                }


                ifrm.onload = () => {
                    if (paddingTop !== NaN && paddingTop > 0) {
                        ifrm.contentWindow.document.body.style.paddingTop = `${paddingTop}px`;
                    }

                    if (path.startsWith('_example-displayer')) {
                        recalculateIframeHeight(ifrm, height);
                    }
                };

                componentExample.append(ifrm);

                if (index < 2) {    // Only wait for first two examples
                    examplesLoadings.push(
                        new Promise((resolve) => {
                            ifrm.onload = () => {
                                if (paddingTop !== NaN && paddingTop > 0) {
                                    ifrm.contentWindow.document.body.style.paddingTop = `${paddingTop}px`;
                                }

                                if (path.startsWith('_example-displayer')) {
                                    recalculateIframeHeight(ifrm, height);
                                }
                                resolve()
                            };
                        })
                    );
                }
            });

            Promise.all(examplesLoadings).then((values) => {
                componentExampleArea.classList.add('show');
            });
        });
    });
}
