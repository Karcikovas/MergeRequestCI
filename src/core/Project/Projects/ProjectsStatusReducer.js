import { constants } from '../../constants'

const initialState = []

const ProjectsStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.projects.STATUS:
            return action.payload.status

        default:
            return state
    }
}

export default ProjectsStatusReducer
