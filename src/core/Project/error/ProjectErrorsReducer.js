import { constants } from '../../constants'

const initialState = {}

const ProjectErrorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.projects.ERROR:
            return action.payload.error

        default:
            return state
    }
}

export default ProjectErrorsReducer
