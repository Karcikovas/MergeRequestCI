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

export const setStatus = status => ({
    type: constants.projects.STATUS,
    payload: {
        status,
    },
})

export const setError = error => ({
    type: constants.projects.ERROR,
    payload: {
        error,
    },
})

export const searchProject = name => ({
    type: constants.projects.SEARCH,
    payload: {
        name,
    }
})
