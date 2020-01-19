import { constants } from '../constants'

export const getProjects = () => ({
    type: constants.project.GET,
    payload: { },
})

export const setProject = (projects) => ({
    type: constants.project.SET,
    payload: { projects },
})
