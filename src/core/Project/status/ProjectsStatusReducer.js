import { constants } from '../../constants'

const initialState = false;

const ProjectsStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.projects.STATUS:
            return action.payload.status

        default:
            return state
    }
}

export default ProjectsStatusReducer
