import { constants } from '../constants'

export const addActiveProject = projectID => ({
    type: constants.active_projects.ADD,
    payload: {
        projectID,
    },
})
