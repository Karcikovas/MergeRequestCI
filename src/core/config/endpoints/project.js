export const projectEndpoint = {
    GET_PROJECT: {
        name: 'GET_PROJECT',
        url: {
            method: 'GET',
            path: id => `/${id}/merge_requests`,
        },
    },
}
