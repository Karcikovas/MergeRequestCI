import { constants } from '../constants'

export const setMarkedProjectID = projectID => ({
    type: constants.marked_projects.SET,
    payload: {
        projectID,
    },
})
