import { constants } from '../constants'

const initialState = []

const MarkedProjectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.marked_projects.SET:
            return  state.concat(action.payload)

        default:
            return state
    }
}

export default MarkedProjectsReducer
