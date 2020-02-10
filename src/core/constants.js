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
        STATUS: 'merge_request.STATUS',
    },
    projects: {
        GET: 'projects.GET',
        SET: 'projects.SET',
        STATUS: 'projects.STATUS',
        ERROR: 'projects.ERROR',
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
    active_projects: {
        ADD: 'active_projects.ADD',
    },
}
