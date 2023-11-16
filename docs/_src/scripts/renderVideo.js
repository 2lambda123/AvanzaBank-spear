function renderVideo(url, title) {
    let hasVideo = false;
    let result;

    if(href.startsWith('/') || href.startsWith('http')){
        if (!window.Docsify.util.isAbsolutePath(href)) {
            href = href.replace(/^\/docs\//, '');
        }

        hasVideo = true;
    } 

    result = hasVideo ? `<video src="${url}" ${title || 'controls'}>Not Support</video>` : title;

    return result;
}