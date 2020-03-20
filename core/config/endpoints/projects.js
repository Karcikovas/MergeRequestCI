export const projectsEndpoint = {
    GET_PROJECTS: {
        name: 'GET_PROJECTS',
        url: {
            method: 'GET',
            path: (perPage, page) => `?per_page=${perPage}&page=${page}`,
        },
    },
}


export const projectSearchEndpoint = {
    SEARCH_PROJECT: {
        name: 'SEARCH_PROJECT',
        url: {
            method: 'GET',
            path: (name) => `?search=${name}`,
        },
    },
}
