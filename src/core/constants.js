export const constants = {
    request: {
        STARTED: 'request.STARTED',
        ENDED: 'request.ENDED',
        SET_ERROR: 'request.SET_ERROR',
        SET_ERRORS: 'request.SET_ERRORS',
    },
    merge_request: {
        GET: 'merge_request.GET',
        SET: 'merge_request.SET',
        DELETE: 'merge_request.DELETE',
    },
    projects: {
        GET: 'projects.GET',
        SET: 'projects.SET',
    },
    project: {
        GET: 'project.GET',
    },
    settings: {
        per_page: {
            GET: 'settings.per_page.GET',
        },
        page: {
            SET: 'settings.page.SET',
        },
        SAVE: 'settings.SAVE',
    },
    marked_projects: {
        SET: 'marked_projects.SET',
    },
}
