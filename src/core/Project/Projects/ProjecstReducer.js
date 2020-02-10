import { constants } from '../../constants'

const initialState = []

const ProjecstReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.projects.SET:
            return action.payload.projects

        default:
            return state
    }
}

export default ProjecstReducer
