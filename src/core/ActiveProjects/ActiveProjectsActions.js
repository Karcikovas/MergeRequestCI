import { constants } from '../constants'

export const addActiveProject = project => ({
    type: constants.active_projects.ADD,
    payload: {
        project,
    },
})
