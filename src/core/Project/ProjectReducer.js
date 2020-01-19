import { constants } from '../constants'

const initialState = [];

const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.project.SET:
            return action.payload.projects;

        default:
            return state;
    }
}

export default ProjectReducer
