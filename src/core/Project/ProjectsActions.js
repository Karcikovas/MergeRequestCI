import { constants } from '../constants'

export const getProjects = (perPage, page) => ({
    type: constants.projects.GET,
    payload: {
        perPage,
        page,
    },
})

export const setProjects = projects => ({
    type: constants.projects.SET,
    payload: {
        projects,
    },
})
