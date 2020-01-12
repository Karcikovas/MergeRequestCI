import { constants } from '../constants'

export const getProject = (id) => ({
    type: constants.project.GET,
    payload: {
        id,
    },
});

export const setProject = (project) => ({
    type: constants.project.SET,
    payload: { project }
})
