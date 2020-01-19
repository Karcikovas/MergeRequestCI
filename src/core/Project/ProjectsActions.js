import { constants } from '../constants'

export const getProjects = () => ({
    type: constants.projects.GET,
    payload: { },
})

export const setProjects = (projects) => ({
    type: constants.projects.SET,
    payload: { projects },
})

export const getProject = (id) => ({
    type: constants.project.GET,
    payload: { id },
});
