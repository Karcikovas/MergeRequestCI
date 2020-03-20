import { constants } from '../constants'

const initialState = []

const ActiveProjectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.active_projects.ADD:
            return state.concat(action.payload.project)

        case constants.active_projects.REMOVE:
            return state.filter(
                project => project.id !== action.payload.project.id
            )

        default:
            return state
    }
}

export default ActiveProjectsReducer
