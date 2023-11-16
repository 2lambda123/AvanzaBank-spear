function editLink(hook, vm) {

    hook.afterEach(function(html) {
        const baseUrl = 'http://redacted/frontend/mint/tree/master/docs/';
        const fileUrl = baseUrl + vm.route.file;
    
        const editHtml = '<a href="' + fileUrl +'" target="_blank" class="edit-page">edit</a>';
    
        return (
            editHtml +
            html
        );
    });
}
